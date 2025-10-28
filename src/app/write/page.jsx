 "use client";
export const dynamic = "force-dynamic"; // ⛔ prevent Vercel from prerendering this page

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utility/supabaseClient";
import styles from "./writePage.module.css";

const WritePage = () => {
  const [mounted, setMounted] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { status } = useSession();
  const router = useRouter();

  // ✅ Always initialize the editor outside conditions
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: { attributes: { class: styles.editorContent } },
    content: "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  // ✅ Upload image to Supabase Storage
  const uploadImage = async (selectedFile) => {
    if (!selectedFile) return;

    if (!supabase) {
      alert("Supabase is not configured properly!");
      return;
    }

    const filePath = `public/${Date.now()}_${selectedFile.name}`;
    const { error } = await supabase.storage
      .from("uploads")
      .upload(filePath, selectedFile);

    if (error) {
      console.error("Upload error:", error.message);
      alert("❌ Upload failed");
      return;
    }

    const { data: urlData } = supabase.storage
      .from("uploads")
      .getPublicUrl(filePath);
    setImageUrl(urlData.publicUrl);
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // ✅ Publish post
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc: content,
          img: imageUrl,
          slug: slugify(title),
          catSlug: "style",
        }),
      });

      if (!res.ok) throw new Error("Failed to publish post");
      alert("✅ Post published successfully!");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to publish post");
    }
  };

  if (!mounted || !editor || status === "loading") {
    return <p>Loading editor...</p>;
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.editor}>
        <div className={styles.editBar}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="Add" width={16} height={16} />
          </button>

          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => uploadImage(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image" style={{ cursor: "pointer" }}>
                  <Image src="/image1.png" alt="Image" width={16} height={16} />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image src="/share.png" alt="Share" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/video.png" alt="Video" width={16} height={16} />
              </button>
            </div>
          )}
        </div>

        <div className={styles.editorWrapper}>
          <div className={styles.toolbar}>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? styles.active : ""}
            >
              B
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? styles.active : ""}
            >
              I
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? styles.active : ""
              }
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? styles.active : ""
              }
            >
              H2
            </button>
          </div>

          <EditorContent editor={editor} className={styles.textArea} />

          {imageUrl && (
            <div className={styles.preview}>
              <p>Uploaded image preview:</p>
              <img
                src={imageUrl}
                alt="Uploaded"
                style={{
                  width: "100px",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
            </div>
          )}
        </div>
      </div>

      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
