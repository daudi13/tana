'use client'
import React, {useState} from 'react'
import style from '../styles/Contact.module.scss';
import person from '../assets/personquart.png'
import girl from '../assets/girlfull.png'
import group112 from '../assets/group122.png';
import rect from '../assets/rect01.png';
import circle from '../assets/circle.png';
import quart from '../assets/blueEllipse.png'
import Image from 'next/image';
import imagePeople from '../assets/ImagePeople.png'

const ContactPage = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  console.log(firstName)


  return (
    <main>
      <div className={style.heroSection}>
        <Image className={style.personVector} src={person} alt="header vectors"/>
        <Image className={style.quartVector} src={quart} alt="header vectors"/>
        <Image className={style.rectVector} src={rect} alt="header vectors"/>
        <Image className={style.girlVector} src={girl} alt="header vectors"/>
        <Image className={style.circleVector} src={circle} alt="header vectors" />
        <div className={style.heroText}>
          <Image src={group112} className={style.heroGroupVector} />
          <h2 className={style.heroHeader}>Contact us</h2>
        </div>
      </div>
      <div className={style.contactFormWrapper}>
        <form className={style.contactForm}>
          <div className={style.contactFormColumnRight}>
            <h2 className={style.contactFormHeader}>We'd love to hear from you!</h2>
            <div className={style.underline} />
            <div className={style.mainForm}>
              <div className={style.mainFormName}>
                <div className={style.inputBoxWrapper}>
                  <label className={style.inputLabel} htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className={style.inputBox}
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={style.inputBoxWrapper}>
                <label className={style.inputLabel} htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className={style.inputBox}
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className={style.inputBoxWrapper}>
              <label className={style.inputLabel} htmlFor="email">Email</label>
                <input
                  type='email'
                  className={style.inputBox}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={style.inputBoxWrapper}>
                <label className={style.inputLabel} htmlFor="textArea">How can we help you</label>
                <textarea
                  type="text"
                  className={style.textArea}
                  id="textArea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type='submit' className={style.submitBtn}>Submit</button>
            </div>
          </div>
          <Image src={imagePeople} className={style.imagePeople} />
        </form>
      </div>
    </main>
  )
}

export default ContactPage