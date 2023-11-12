'use client'

import React from 'react'
import style from '../styles/Footer.module.scss'
import logo from '../assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {FaLinkedin} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const year = new Date().getFullYear()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`the email you entered was: ${email}`)
  }

  return (
    <div className={style.footerWrapper}>
      <div className={style.footerContainer}>
        <Image src={logo} className={style.footerImage} sizes={23} />
        <div className={style.footerMidLinks}>
          <div style={{display: 'flex', gap: '200px'}}>
            <ul className={style.footerLinks}>
              <li className={style.footerLink}><Link href="" className={style.linkItem}>Why Tana</Link></li>
              <li className={style.footerLink}><Link href="" className={style.linkItem}>How it Works</Link></li>
              <li className={style.footerLink}><Link href="" className={style.linkItem}>Meet our Talent</Link></li>
            </ul>
            <ul className={style.footerLinks}>
              <li className={style.footerLink}><Link href="" className={style.linkItem}>About Us</Link></li>
              <li className={style.footerLink}><Link href="" className={style.linkItem}>Contact</Link></li>
              <li className={style.footerLink}><Link href="" className={style.linkItem}>For Talent</Link></li>
            </ul>
          </div>

          <div className={style.footerFormSection}>
            <h3 className={style.footerFormTitle}>Join our community and be part of our journey</h3>

            <form className={style.footerForm} onSubmit={handleSubmit}>
              <label className={style.footerFormInputSec}>
                <input type='email'
                  placeholder='Enter your email address'
                  value={email}
                  className={style.inputBox}
                  onChange ={(e) => setEmail(e.target.value)}
                />
                <input type="submit" value="subscribe" className={style.footerFormSubmitBtn} />
              </label>
            </form>
          </div>
        </div>
        <div className={style.footerBottomSection}>
          <div className={style.footerBottomSocials}>
            <Link href="" className={style.footerBottomSocialLinks}><FaLinkedin/></Link>
            <Link href="" className={style.footerBottomSocialLinks}><FaTwitter /></Link>
          </div>
          <div className={style.footerBottomSectionLinks}>
            <ul className={style.sectionLinks}>
              <li className={style.sectionLink}><p className={style.linkItem}>© {year} Tana. All rights reserved</p></li>
              <li className={style.sectionLink}><Link className={style.linkItem} href="">Privacy Policy</Link></li>
              <li className={style.sectionLink}><Link className={style.linkItem} href="">Terms of Service</Link></li>
              <li className={style.sectionLink}><Link className={style.linkItem}href="">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer