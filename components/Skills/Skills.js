import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Skills.module.scss";
import Head from "../Head/Head";
import Link from "next/link";

const Skills = () => {
  return (
    <div id="skill" className={styles.skills}>
     <Head justify="end" content="SKILLS"/>

     

      <div className={styles.content}>
        <div className={styles.left}>
          <AnimationOnScroll animateIn="animate__slideInLeft">
          As a front-end web developer, I am proficient in a range of
          technologies.I specialize in front-end development and excel in
          building fast, user-friendly, and responsive websites using best
          practices. My expertise includes creating small and medium web
          applications, custom plugins and features, as well as implementing
          interactive layouts and animations using HTML, CSS, and JavaScript.
        
          I have also completed several courses and certifications in front-end
          development, including:

          <ul style={{marginTop:"20px", marginLeft:"50px"}}>
            <li>Coursera web development bootcamp</li>
            <li>Sidehustle Reactjs bootcamp</li>
            <li>Zuri Fullstack dvelopment Cohort</li>
            <li>Hotels.NG  internship <span style={{color:"rgb(0, 147, 192)"}}> (HNGi9 Finalist)</span></li>
          </ul>
          
          <p className={styles.cvView}><Link href="/CV">View My CV &#8594;</Link></p>

          </AnimationOnScroll>
        

        
        </div>

        <div className={styles.right}>

          <AnimationOnScroll animateIn="animate__fadeIn">
          <div className={styles.skillCard}>
                <h3>
                    Front End 
                </h3>

                <p>
                  HTML, CSS, JavaScript, Typescript, React, NextJS, jQuery
                  CSS frameworks.
                </p>

            </div>
            
          </AnimationOnScroll>

          

          <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={styles.skillCards}>
                <h3>
                    Backend 
                </h3>

                <p>
                  NodeJs, Laravel, Expressjs
                </p>

            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={styles.skillCardss}>
                <h3>
                    Version Control
                </h3>

                <p>
                  Git
                </p>

            </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={styles.skillCardsss}>
                <h3>
                    UI/UX Design
                </h3>

                <p>
                  Figma, Adobe Xd, Adobe Illustrator, Photoshop
                </p>

            </div>
            </AnimationOnScroll>

        </div>
      </div>
    </div>
  );
};

export default Skills;
