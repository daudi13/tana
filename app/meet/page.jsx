import style from '../styles/Meet.module.scss'
import styles from '../styles/Home.module.scss'
import networkImage from "../assets/network.png"
import group101 from "../assets/Group113.png"
import cornerImage from "../assets/Ellipse711.png";
import midImage from "../assets/Ellipse712.png";
import group113 from "../assets/Group111.png"
import Link from 'next/link';
import Image from 'next/image'
import { featuredProfiles, devTools, cards } from '../data/data';

const page = () => {
  return (
    <main>
      <div className={style.heroSection}>
        <div className={style.heroTextSection}>
          <Image src={group101} />
          <h1 className={style.heroTextHeader}>
            Smart. Driven.<br/>Dedicated.
          </h1>
          <p className={style.heroTextDesc}>
            Ready to go in 100+ technologies and ready<br/> to throw memes with the best of them
          </p>
        </div>
        <Image src={networkImage} className={style.heroImage} />
        <Image src={cornerImage} className={style.heroCornerImage} />
      </div>
      <div style={{background:"white"}} className={`${styles.meetOurTeam} ${style.meetOurTeam}`}>
          <h2 className={styles.meetOurTeamTitle}>Meet our Talent</h2>
          <iframe src="https://player.vimeo.com/video/835781373?h=b24e1c23b9" width="2120" height="515"  frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
          <p className={`${styles.meetOurTeamText} ${style.tagLine}`}>At Tana, we believe your skills and your character define you —<br/>not where in the world you were born</p>
        <Link href="" className={styles.learnBtn}>Get to know our mission</Link>
        <Image src={midImage} className={style.meetOurTeamMidImage} />
      </div>
      <div className={style.featuredSection}>
          <h2 className={style.featuredSectionHeader}>Featured profiles</h2>
        <div className={style.featuredSectionColumn}>
          {
            featuredProfiles.map((item, index) => (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div className={style.featuredWrapper} key={index}>
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
                  <Image src={item.img} className={styles.image} />
                  <p className={styles.content}>{item.content}</p>
                  <div className={styles.photoCutOut}></div>
                  <Image src={item.img2} className={styles.quotes} />
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
            Build the team <br/> you've always wanted
          </h3>

          <Link href="" className={style.preFooterLinkBtn}>Get in touch</Link>
        </div>
      </div>
    </main>
  )
}

export default page