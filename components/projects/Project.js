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
      id:0,
      description:"",
      name:"EvoGym",
      technology:"Typescript, React, Framer Motion, Tailwind ",
      img:"/assets/img/evogym.png",
      link:"https://gym-app-sigma.vercel.app/"
    },
    {
      id:11,
      description: "",
      name:"NFT mobile landing page",
      technology:"Reactjs, Vercel, Tailwind css",
      img:"/assets/img/nft.png",
      link:"https://nftmobilelandingpage.vercel.app/"
    
    },
    {
      id:13,
      description: "",
      name:"Food Ordering App",
      technology:"Reactjs, Typescript, Nodejs, Expressjs, MongoDb, stripejs",
      img:"/assets/img/merneat.png",
      link:"https://mern-food-ordering-app-frontend-alg3.onrender.com/"
  
  },
    {
      id:7,
      description:"",
      name:"GetLinkedAi",
      technology:"React.js and sass",
      img:"/assets/img/getlinkedai.png",
      link:"https://getlinkedai-iota.vercel.app/"
  },

  {
    id:9,
    description: "",
    name:"Planti Dashboard",
    technology:"Reactjs, Custom css",
    img:"/assets/img/plantidashboard.png",
    link:"https://planti-dashboard.vercel.app/"

},
   
    {
        id:2,
        description: "",
        name:"ApplyForMe",
        technology:"Reactjs, Custom CSS",
        img:"/assets/img/applyforme.png",
        link:"https://www.applyforme.com",
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
      id:8,
      description: "",
      name:"Color Game",
      technology:"Reactjs, Custom css",
      img:"/assets/img/colorgame.png",
      link:"https://react-color-game.vercel.app/"

  },
  {
    id:10,
    description: "",
    name:"Todo List",
    technology:"Reactjs, Typescript, Custom css",
    img:"/assets/img/todolist.png",
    link:"https://todo-typescript-gamma-three.vercel.app/"

},

  
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
