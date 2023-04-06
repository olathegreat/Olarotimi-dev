import React from "react";
import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';

import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_em09kmb",
        "template_4yb9gok",
        formRef.current,
        "LmJhOAGJD8Jd_n-Wk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          alert("submitted");
          router.push('/')
          // navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contactform}>
      <div className={styles.cRight}>
        <p className={styles.cdesc}>
          <b>What &apos;s your story</b> Get in touch. Always available for
          freelancing if the right project comes along
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.upperInput}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
          </div>

          <input type="email" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message"></textarea>
          <button>Submit</button>

          {done && "thank you"}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
