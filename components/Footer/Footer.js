import React from 'react'
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.Footer}>

        <div className={styles.footerContainer}>
            <div>Developed by <span className={styles.olarotimi}>Olarotimi &#128640;</span></div>
            <div>&copy;  2023</div>

        </div>

    </section>
  )
}

export default Footer