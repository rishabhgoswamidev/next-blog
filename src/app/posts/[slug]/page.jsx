import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = await params;

  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                ></Image>
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data?.createdAt}</span>
            </div>
          </div>
        </div>

        { data?.img && <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image}></Image>
        </div>}
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc }}>
            
          </div>
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
