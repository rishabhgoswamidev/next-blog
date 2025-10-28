import { Suspense } from "react";
import styles from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  // ✅ No need to "await" searchParams
  const page = parseInt(searchParams?.page || "1", 10);

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* ✅ Pass consistent props */}
          <CardList page={page} />
        </Suspense>
        <Menu />
      </div>
    </div>
  );
}
