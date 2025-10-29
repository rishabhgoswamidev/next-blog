"use client";
import { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import { useSearchParams } from "next/navigation";

const POST_PER_PAGE = 2;

const CardList = ({ cat, page: initialPage }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || initialPage || 1, 10);

  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const origin =
        typeof window !== "undefined"
          ? window.location.origin
          : process.env.NEXT_PUBLIC_URL;

      const res = await fetch(
        `${origin}/api/posts?page=${page}&cat=${cat || ""}`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
      const data = await res.json();
      setPosts(data.posts);
      setCount(data.count);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  fetchPosts();
}, [page, cat]);


  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item, idx) => (
          <Card item={item} key={item._id || item.id || idx} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
