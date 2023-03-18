import Image from "next/image";
import React, {useState, useEffect} from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./About.module.scss";
import Head from "../Head/Head";

const About = () => {

    const [readmore, setReadmore] = useState(false);



   
      useEffect(() => {
        const changeColor = () => {
          if (window.innerWidth < 900) {
            setReadmore(true);
          } else {
            setReadmore(false);
          }
        }
        // window.addEventListener("scroll", changeColor);
        changeColor();
      }, []);


  return (
    <div id="about" className={styles.about}>
      <Head justify="end" content="ABOUT"/>
      <div className={styles.aboutWrapper}>
        

        

        <div className={styles.details}>
          <div className={styles.imageWrapper}>
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className={styles.mainimagewrapper}>
                <img
                  className={styles.img}
                  src="/assets/img/IMG_2873.jpeg"
                  alt="olarotimi picture"
                />
              </div>
            </AnimationOnScroll>
          </div>

          <div className={styles.content}>
            <AnimationOnScroll animateIn="animate__slideInRight">
            <div>
                <span>
                As a front-end web developer with over 3 years of experience, I
              have developed a deep understanding of what it takes to create
              compelling, user-friendly websites. I hold a Bachelor&apos;s degree in
              Computer Engineering from Obafemi Awolowo University University,
              and have completed several certifications in front-end
              development, including courses in HTML, CSS, JavaScript and React
              Js. &#129299;

                </span>
                <span className={styles.readLink} style={{display:!readmore? "block" : "none"}} onClick={()=>setReadmore(true)}> read more</span>
                <span style={{display:readmore? "block" : "none"}}>
                In my previous roles, I have worked on a variety of projects
              for clients in a range of industries, from e-commerce to
              healthcare. I am passionate about staying up-to-date on the latest
              trends and technologies in front-end development, and am committed
              to delivering high-quality work that exceeds my clients&apos;
              expectations

                </span>
                <span className={styles.readLink} style={{display:readmore? "block" : "none"}} onClick={()=>setReadmore(false)}> read less</span>
                
            </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
