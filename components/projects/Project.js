import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";
import Head from "../Head/Head";


const Project = () => {

  const Data = [
    {
        id:1,
        description: "",
        name:"Cars.ng",
        technology:"HTML, CSS, Bootstrap css, PHP",
        img:"/assets/img/carsng.png",
        link:"https://cars.ng",
    },
    {
        id:2,
        description: "",
        name:"ApplyForMe",
        technology:"Reactjs, Custom CSS",
        img:"/assets/img/applyforme.png",
        link:"https://cars.ng",
    },
    {
        id:3,
        description: "",
        name:"CoinSearch",
        technology:"Reactjs, Custom CSS, CoinGecko API",
        img:"/assets/img/coinsearch.png",
        link:"https://coinsearch.vercel.app/",
    },
    {
        id:4,
        description: "",
        name:"ImageSearcher",
        technology:"Reactjs, Material UI, Unsplash Api",
        img:"/assets/img/imagesearch.png",
        link:"https://imagesearcher.vercel.app/",
    },
    {
        id:5,
        description: "",
        name:"Metabnb",
        technology:"Reactjs, Custom css",
        img:"/assets/img/metabnb.png",
        link:"https://metabnb-tau.vercel.app/"
    },
    {
        id:6,
        description: "",
        name:"LinkTree",
        technology:"Reactjs, Custom css, styled Components",
        img:"/assets/img/linktree.png",
        link:"https://hnginternship-task-1.vercel.app/"

    },
    {
        id:7,
        description:"",
        name:"Omnifood",
        technology:"HTML, CSS, Bootstrap CSS, Vanilla.js, Google APIs",
        img:"/assets/img/omnifood.png",
        link:"https://omnifood-rho.vercel.app/"
    }
] 


  const display = Data.map((item) => {
    const { description, name, technology, image, link } = item;

    // return    <ProjectCard item={item}/>
    return (

      <AnimationOnScroll animateIn="animate__bounceIn"  key={item.id}>
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
        {/* <div className={styles.head}>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <p className={styles.hh}>PORTFOLIO</p>
          </AnimationOnScroll>

          <div className={styles.hr}></div>
        </div> */}

        <Head justify="baseline" content="PROJECTS"/>

        <div className={styles.contentWrapper}>

          {display}
          
        </div>
      </div>
    </div>
  );
};

export default Project;
