import React from "react";
import styles from "./menuCategoryList.module.css";
import Link from "next/link";

const MenuCategoryList = () => {
  return (
    <div className={styles.categoryList}>
      <Link href='/' className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
      <Link href='/' className={`${styles.categoryItem} ${styles.news}`}>News</Link>
      <Link href='/' className={`${styles.categoryItem} ${styles.code}`}>Code</Link>
      <Link href='/' className={`${styles.categoryItem} ${styles.games}`}>Games</Link>
      <Link href='/' className={`${styles.categoryItem} ${styles.news}`}>News</Link>
      <Link href='/' className={`${styles.categoryItem} ${styles.code}`}>Code</Link>
    </div>
  );
};

export default MenuCategoryList;
