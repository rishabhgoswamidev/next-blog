"use client";

import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return await res.json();
};

const Comments = ({ postSlug }) => {
  const { data: session, status } = useSession();

  const { data,mutate, isLoading, error } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method : "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate(); // Revalidate the SWR data
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Failed to load comments"
        ) : data?.length > 0 ? (
          data.map((item) => (
            <div className={styles.comment} key={item.id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt={item.user.name}
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className={styles.dec}>{item.desc}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
