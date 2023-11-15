import style from '../styles/Meet.module.scss'
import styles from '../styles/Home.module.scss'
import networkImage from "../assets/network.png"
import group101 from "../assets/Group113.png"
import cornerImage from "../assets/Ellipse711.png";
import midImage from "../assets/Ellipse712.png";
import group113 from "../assets/Group111.png";
import Link from 'next/link';
import Image from 'next/image'
import { featuredProfiles, devTools, cards } from '../data/data';
import heroImage from "../assets/HeroImageCluster.png";


export const metadata = {
  title: 'Tana | Our Talent',
  description: "Elevate your business with our premier talent network! Connect with skilled QA engineers, customer technical support specialists, and data analytics professionals through our platform. Streamline your operations, enhance product quality, and gain valuable insights with our curated pool of experts. Explore a seamless hiring experience and elevate your company's performance with our comprehensive workforce solutions. Partner with us for unparalleled access to top-tier professionals in QA, customer support, and data analytics. Unlock the potential of your business with our talent-driven solutions today.",
  type: "website",
  images: ["https://tanatech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnetwork.7383fd4d.png&w=1080&q=75"],
  url: "https://tanatech.vercel.app/meet",
}


const page = () => {
  return (
    <main>
      <div className={style.heroSection}>
        <div className={style.heroTextSection}>
          <Image src={group101} alt="group101"/>
          <h1 className={style.heroTextHeader}>
            Smart. Driven.<br/>Dedicated.
          </h1>
          <p className={style.heroTextDesc}>
            Ready to go in 100+ technologies and ready<br/> to throw memes with the best of them
          </p>
        </div>
        <Image src={networkImage} alt="networkImage"className={style.heroImage} />
        <Image src={cornerImage} alt="cornerImage" className={style.heroCornerImage} />
      </div>
      <div style={{background:"white"}} className={`${styles.meetOurTeam} ${style.meetOurTeam}`}>
          <h2 className={styles.meetOurTeamTitle}>Meet our Talent</h2>
          <iframe src="https://player.vimeo.com/video/835781373?h=b24e1c23b9" width="2120" height="515"  frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen></iframe>
          <p className={`${styles.meetOurTeamText} ${style.tagLine}`}>At Tana, we believe your skills and your character define you —<br/>not where in the world you were born</p>
        <Link href="/" className={styles.learnBtn}>Get to know our mission</Link>
        <Image src={midImage} alt="midIMage" className={style.meetOurTeamMidImage} />
      </div>
      <div className={style.featuredSection}>
          <h2 className={style.featuredSectionHeader}>Featured profiles</h2>
        <div className={style.featuredSectionColumn}>
          {
            featuredProfiles.map((item, index) => (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}} key={index}>
              <div className={style.featuredWrapper}>
                <Image src={item.card} alt="box card" className={style.featuredCard} />
                <div className={style.featuredDesc}>
                  <div className={style.featuredImageBox}>
                    <Image src={item.img} alt="user profile" className={style.userProfile} />
                    <p className={style.featuredUserName}>{item.name}</p>
                    <p className={style.featuredJobTitle}>{item.job}</p>
                  </div>
                  <div className={style.featuredUserProfile}>
                    <div className={style.featuredUserProfileTop}>
                      <div className={style.featuredUserProfileLeft}>
                        <div className={style.featuredProfileKey}>
                          <p className={style.profileKey}>EDUCATION</p>
                          <span className={style.profileValue}>{item.education}</span>
                        </div>
                        <div className={style.featuredProfileKey}>
                          <p className={style.profileKey}>COMPANY HQ</p>
                          <span className={style.profileValue}>{item.companyHq}</span>
                        </div>
                        <div className={style.featuredProfileKey}>
                          <p className={style.profileKey}>HOBBIES</p>
                          <span className={style.profileValue}>{item.hobbies}</span>
                        </div>
                      </div>
                      <div className={style.featuredProfileRight}>
                        <p className={style.profileKey}>TECH SKILLS</p>
                        <div className={style.techCapsules}>
                          {
                            item.techSkills.map((skill, index) => (
                            <div className={style.featuredButtonSkill} key={index}
                              >{skill}</div>
                          ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className={style.featuredUserProfileBottom}>
                      <p className={style.profileKey}>PROFFESSIONAL STATEMENT</p>
                      <span className={style.featuredValue}>{item.profile}</span>
                    </div>
                  </div>
                </div>
              </div>
                <Link href={item.findLink} className={style.learnBtn}>Find your {item.name}</Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className={style.tools}>
        <h2 className={style.toolsHeader}>50+ tools and counting</h2>
        <div className={style.toolsCapsuleWrapper}>
          {
            devTools.map((tool, index) => (
              <div className={style.devToolItem} key={index}>{tool}</div>
            ))
          }
        </div>
      </div>
      <div style={{backgroundColor: "#F3FAFC",margin: 0, paddingTop: "5rem", paddingBottom: "5rem"}} className={styles.happy}>
          <h3 className={styles.happyTitle}>What our clients have to say</h3>
          <div className={styles.happyCard}>
            {
              cards.map((item, index) => (

                <div key={index} className={styles.cardBox}>
                  <Image src={item.img} className={styles.image} alt="item" />
                  <p className={styles.content}>{item.content}</p>
                  <div className={styles.photoCutOut}></div>
                  <Image src={item.img2} className={styles.quotes} alt="item" />
                  <div className={styles.credentials}>
                    <p className={styles.name}>{item.managerName}</p>
                    <p className={styles.position}>{item.position}</p>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      <div className={style.preFooterSection}>
        <div className={style.preFooterSectionHero}>
          <Image src={group113} alt="vectors" />
          <h3 className={style.preFooterHeroHeader}>
            Build the team <br/> you&apos;ve always wanted
          </h3>
          <Link href="/contact" className={style.preFooterLinkBtn}>Get in touch</Link>
        </div>
      </div>
    </main>
  )
}

export default page