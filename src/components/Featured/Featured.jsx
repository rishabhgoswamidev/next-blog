import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className= {styles.container}>
      <h1 className={styles.title}><b>Hy, I am Rishabh.</b><br />Discover my posts and storys</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt atque laboriosam </h2>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis illum dicta obcaecati harum accusamus architecto possimus non ipsum odit eveniet fugiat laboriosam eligendi omnis consequuntur eius, quibusdam, quidem illo?</p>
          <button className={styles.button}>Read More.</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
