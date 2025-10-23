"use client";
import { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import { useSearchParams } from "next/navigation";

const CardList = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts?page=${page}&cat=${cat || ""}`);
      const data = await res.json();
      setPosts(data.posts);
      setCount(data.count);
    };
    fetchPosts();
  }, [page, cat]);

  const POST_PER_PAGE = 2;
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
