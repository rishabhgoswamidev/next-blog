import { Suspense } from "react";
import styles from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params?.page || "1", 10);

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <CardList page={page} />
        </Suspense>
        <Menu />
      </div>
    </div>
  );
}
