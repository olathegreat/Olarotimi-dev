import ContactCard from "@/components/ContactCard/ContactCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./ContactPage.module.scss"
import React from "react";

const index = () => {
  return (
    <div className={styles.ContactPage}>
        <div className={styles.left}>
            <ContactCard/>
        </div>
      <div className={styles.right}>
        <ContactForm />
      </div>
    </div>
  );
};

export default index;
