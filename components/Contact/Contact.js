import Link from 'next/link'
import React from 'react'
import ContactCard from '../ContactCard/ContactCard'
import Head from '../Head/Head'
import styles from "./Contact.module.scss"





const Contact = () => {
  return (
    <section id="contact" className={styles.Contact}>
        <Head justify="end" content="CONTACT"/>

        <div style={{display:"flex", justifyContent:"center"}}>
            <ContactCard/>
        </div>

        <div>
          <Link href="/Contact" className={styles.shoot}>
            Shoot me an email &#8594;
          </Link>
        </div>

    </section>
  )
}

export default Contact