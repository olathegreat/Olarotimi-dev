import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Projects.module.scss";
import Link from "next/link";
import Head from "../Head/Head";
import { webProjectData } from "./ProjectData";


const Project = () => {

  const Data = webProjectData


  const display = Data.map((item) => {
    const { description, name, technology, image, link } = item;

    
    return (

      <AnimationOnScroll animateIn="animate__bounceIn" duration={2} key={item.id}>
      <div className={styles.pllist}>
        <div className={styles.p}>
          <div className={styles.pbrowser}>
            <div className={styles.pcircle}></div>
            <div className={styles.pcircle}></div>
            <div className={styles.pcircle}></div>
          </div>
          <Link href={`${item.link}`} target='_blank' rel='noreferrer' className={styles.link}>
                  <img src={`${item.img}`}  alt=' ' className={styles.pimg}/>
                  <p className={styles.beforehover}>
                    <span>{item.name}</span>

                    <span className={styles.technology}>{item.technology}</span>

                  </p>
  
               
             </Link>
        
        </div>
      </div>
      </AnimationOnScroll>
    );
  });

  return (
    <div id="project" className={styles.projects}>
      <div className={styles.projectsWrapper}>
        

        <Head justify="baseline" content="PROJECTS"/>
        <div className={styles.projectHeader}>
              web work
            </div>
        <div className={styles.contentWrapper}>
            
         

          {display}
          
        </div>
      </div>
    </div>
  );
};

export default Project;
