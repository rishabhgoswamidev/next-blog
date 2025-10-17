import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={50} height={50}></Image>
          <h1 className={styles.logoText}>Rishabh</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error eligendi architecto, molestiae eius nihil, repudiandae nam sint est debitis deleniti assumenda voluptas libero quibusdam hic impedit? Quasi, aspernatur adipisci?</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='' width={18} height={18}></Image>
          <Image src="/instagram.png" alt='' width={18} height={18}></Image>
          <Image src="/youtube.png" alt='' width={18} height={18}></Image>
        </div>
      </div>
    <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href='/'>Home</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tages</span>
        <Link href='/'>Style</Link>
        <Link href='/'>Fashion</Link>
        <Link href='/'>Coding</Link>
        <Link href='/'>Food</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href='/'>Facebook</Link>
        <Link href='/'>Instagram</Link>
        <Link href='/'>Youtube</Link>
        <Link href='/'>Tiktok</Link>
      </div>
      
    </div>
    </div>
  )
}

export default Footer
