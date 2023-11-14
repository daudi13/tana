import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <Link href="/" className={styles.logo}><Image src={Logo} alt="blaze logo" className={styles.logoImg} /></Link>
        
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}><Link className={styles.menuLinks} href="/">For Companes</Link></li>
          <li className={styles.menuItem}><Link className={styles.menuLinks} href="/meet">Meet our Talent</Link></li>
          <li className={styles.menuItem}><Link className={styles.menuLinks} href="/about">About us</Link></li>
          <li className={`${styles.menuItem} ${styles.actionBtn}`}><Link className={`${styles.menuLinks} ${styles.menuAction}`} href="/grow">Grow your team</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar