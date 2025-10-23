import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className= {styles.container}>
      <h1 className={styles.title}><b>Hy, I am Rishabh.</b><br />A Web Developer & Designer</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/Home.jpg" alt='' fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>I’m a passionate Web Developer & Designer</h2>
          <p className={styles.postDesc}>




I specialize in building full-stack web applications using Next.js and Tailwind CSS, combining design and functionality to deliver seamless digital experiences.
<br /><br />
<br />
🧠 Skills & Expertise :
<br />
Frontend Development: HTML, CSS, JavaScript, React, Next.js
<br />
UI/UX Design: Figma, Tailwind, Responsive Design
<br />
Backend Basics: Node.js, Express
<br />
Version Control: Git & GitHub



</p>
          <button className={styles.button}>Read More.</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
