import React from 'react'
import styles from "./ContactCard.module.scss"
import { FaEnvelope, FaLinkedinIn, FaPhoneSquare, FaUserCircle } from 'react-icons/fa'

const ContactCard = () => {
  return (
    <div className={styles.contactcard}>
        <div  className={styles.contactcardleft}>
            <FaUserCircle size="80" color='gray'/>
            <p>Olarotimi</p>

        </div>

        <div className={styles.contactcardright}>
            <a><FaEnvelope color='gray' size="20"/><span>ademolarotimi2000@gmail.com</span></a>
            <a><FaPhoneSquare color='gray' size="20"/><span>+234 8169 3365 18</span></a>
            <a><FaLinkedinIn color='gray' size="20"/><span>Olarotimi Olaniran</span></a>
        </div>
    </div>
  )
}

export default ContactCard