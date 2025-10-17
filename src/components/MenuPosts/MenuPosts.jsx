import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './menuPosts.module.css'


const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/">
          <div className={styles.item}>
          { withImage && (<div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>)}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                Travel
              </span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Rishabh</span>
                <span className={styles.date}> - 10.02.2003</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.item}>
          {withImage && <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.Games}`}>
                Games
              </span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Rishabh</span>
                <span className={styles.date}> - 10.02.2003</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.News}`}>
                News
              </span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Rishabh</span>
                <span className={styles.date}> - 10.02.2003</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.Code}`}>
                Code
              </span>
              <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet </h3>
              <div className={styles.detail}>
                <span className={styles.username}>Rishabh</span>
                <span className={styles.date}> - 10.02.2003</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts
