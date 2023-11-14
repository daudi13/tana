

import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/Home.module.scss'
import Group from './assets/Group108.png'
import Cloud from './assets/cloud-add.svg'
import Global from './assets/global.svg'
import Message from './assets/message.svg'
import cost from './assets/wallet-add.svg'
import vector from './assets/Vector 7.png'
import { Archivo } from 'next/font/google';
import newGroup from "./assets/Group108.png";
import Head from 'next/head';
import { data, data2, cards } from './data/data'

export const metadata = {
  title: 'Welcome to tana',
  description: "We connect global companies to brilliant team members based on the continent of Africa – the world’s fastest-growing workforce.Let us handle sourcing, vetting, and training, so you can focus on growing.",
}


export default function Home() {
  return (
    <>
      <Head>
        <title>welcome to tana</title>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&display=swap"
          rel="stylesheet"
        /> */}
        <link rel='icon' href="/favicon.ico" />
      </Head>
    <main className={styles.mainSection}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
        </div>
          <div className={styles.heroText}>
          <Image src={Group} className={styles.groupImg} alt="group" />
            <p className={styles.headerText}>Unlock the world as <br />your <strong>talent pool</strong></p>
            <h3 className={styles.subTitle}>The Future of work is here</h3>
            <Link href="" className={styles.heroBtn}>Grow Your team</Link>
          </div>
        </div>
        <div className={styles.valuePreposition}>
          <h3 className={styles.valuePrepostionTitle}>Reach new heights with incredible team members based in Africa –<br /> <span className={styles.mainText}>the world’s fastest-growing workforce</span></h3>
          <Image src={vector} className={styles.vectorSmile} alt="vector"/>
          <div className={styles.valuePrepositionIcons}>
            <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconBlue}`}>
              <Image src={Cloud} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Ready to shine in tech & product roles</p>
            </div>
            <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconYellow}`}>
              <Image src={Message} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Seamless collaboration with global teams</p>
            </div>
            <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconBlue}`}>
              <Image src={Global} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Ready to shne in tech & product roles</p>
            </div>
            <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconYellow}`}>
              <Image src={cost} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Affordable for teams at any size</p>
            </div>
          </div>
        </div>
        <div className={styles.meetOurTeam}>
          <h2 className={styles.meetOurTeamTitle}>Meet our Team</h2>
          <iframe src="https://player.vimeo.com/video/835781373?h=b24e1c23b9" width="2120" height="515"  frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
          <p className={styles.meetOurTeamText}>Curious to see who could be joining the slack on Monday?</p>
          <Link href="" className={styles.learnBtn}>Learn more here</Link>
        </div>
        <div className={styles.socialProof}>
          <h2 className={styles.socialProofTitle}>Trusted By</h2>
          <div className={styles.logos}>
            {
              data.map((img, index) => (
                <Image src={img} key={index} className={styles.logoImg} alt="img" />
              ))
            }
          </div>
        </div>
        <div className={styles.whyUs}>
          <h3 className={styles.whyUsTitleMain}>Why we&pos;re better</h3>
          {
            data2.map((item, index) => (
              <div key={index} className={`${styles.whyUsBox} ${item.right && styles.whyUsRight}`}>
                <div className={styles.desc}>
                  <h3 className={styles.whyUsTitle}>{item.title}</h3>
                  <div className={styles.whyUsDash}></div>
                  <p className={styles.whyUsText}>{item.content}</p>
                  <Link href={item.hrefLink} className={`${item.activeBtn ? styles.active : styles.btn}`}>{item.linkName}</Link>
                </div>
                <Image src={item.img} className={styles.imageCover} alt='item' />
              </div>
            ))
          }
        </div>
        <div className={styles.happy}>
          <h3 className={styles.happyTitle}>You could be this happy</h3>
          <div className={styles.happyCard}>
            {
              cards.map((item, index) => (

                <div key={index} className={styles.cardBox}>
                  <Image src={item.img} className={styles.image} alt="item"/>
                  <p className={styles.content}>{item.content}</p>
                  <div className={styles.photoCutOut}></div>
                  <Image src={item.img2} className={styles.quotes} alt="item"/>
                  <div className={styles.credentials}>
                    <p className={styles.name}>{item.managerName}</p>
                    <p className={styles.position}>{item.position}</p>
                  </div>
                </div>
              ))
            }
          </div>
          </div>
        <div className={styles.preFooter}>
          <div className={styles.preFooterHero}>
            <Image src={newGroup} alt="new"/>
            <h3 className={styles.preFooterTitle}>Be a part of the movement</h3>
            <p className={styles.preFooterText}>Global equity starts with giving talented young people everywhere the chance to build meaningful careers.</p>
            <Link href="" className={styles.joinBtn}>Join Us</Link>
          </div>
        </div>
    </main>
    </>
  )
}
