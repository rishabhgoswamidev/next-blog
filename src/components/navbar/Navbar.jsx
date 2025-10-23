import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.social}>
        <img src="/facebook.png" alt="facebook" width={24} height={24}/>
        <img src="/instagram.png" alt="instagram" width={24} height={24}/>
        <img src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      <Link href="/" className={styles.logo}>bloxpage</Link>
      <div className={styles.links}>
        <ThemeToggle></ThemeToggle>
        <Link href='/'  className={styles.link}>Home</Link>
        <AuthLinks></AuthLinks>
      </div>
    </div>
  )
}

export default Navbar
