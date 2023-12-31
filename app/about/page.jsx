import React from 'react'
import group119 from "../assets/Group113.png";
import group09 from "../assets/Group09.png"
import manImage from "../assets/HeroImageCluster.png"
import prefooterImg from "../assets/prefooter.png"
import style from "../styles/About.module.scss"
import { aboutUs } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Tana',
  description: "Explore our expert services in QA engineering, technical support, and data analytics. Our QA engineers ensure high-quality software through rigorous testing, bug identification, and process automation. Technical support engineers provide hands-on assistance, product education, and efficient issue resolution via phone, email, and chat. Collaborate with our data analysts to gain valuable insights, drive data-driven decisions, and optimize business performance. Connect with us for top-tier talent in QA, technical support, and data analytics",
  image: "../assets/HeroImageCluster.png",
  type: "website"
}


const AboutPage = () => {
  return (
    <main>
      <div className={style.heroSection}>
        <div className={style.heroTextSection}>
          <Image src={group119} alt="group" />
          <h1 className={style.heroTextHeader}>
            The swiss Army Knives<br/>of talent
          </h1>
          <p className={style.heroTextDesc}>
            Versatile young proffessionals who are<br/> up for every challenge
          </p>
        </div>
        <Image src={manImage} alt="manbackdrop" className={style.heroImage} />
      </div>
      <div className={style.midSection}>
        {
          aboutUs.map((item, index) => (
            <div key={index} className={item.right ? style.normalFlex : style.midSectionItem}>
              <div className={style.midSectionLeft}>
                <Image src={item.img1} alt='vectors' className={style.midSectionVectors} />
                <h3 className={style.midSectionHeader}>{item.title}</h3>
                <ul className={style.midSectionList}>
                  {
                    item.content.map((listItem, index) => (
                      <li className={style.midSectionListItem} key={index}>{listItem}</li>
                    )
                  )}
                </ul>
                <Link href={item.getInTouchLink} className={style.getInTouchLink}>Get in touch</Link>
              </div>
              <Image src={item.primaryImage} alt="primary" className={style.primaryImage} />
              <Image src={item.absoluteImage} alt="absolute" className={item.id == 1 ? style.topRightCorner : item.id === 2 ? style.topLeftCorner : style.bottomRightCorner} />
            </div>
          ))
        }
      </div>
      <div className={style.roleSection}>
        <h2 className={style.roleSectionHeader}>Looking for another role?</h2>
        <Link href="/" className={style.roleSectionLink}>Let&apos;s chat</Link>
      </div>
      <div className={style.prefooter}>
        <div className={style.prefooterContainer}>
          <div className={style.prefooterDesc}>
            <Image src={group09} alt="group"/>
            <h2 className={style.prefooterHeader}>eLogii <br />achieves<br />100% customer<br />satisfaction</h2>
            <Link href="/" className={style.roleSectionLink}>See client stories</Link>
          </div>
          <Image src={prefooterImg} alt="prefooter" className={style.prefooterImage} />
        </div>
      </div>
    </main>
  )
}

export default AboutPage