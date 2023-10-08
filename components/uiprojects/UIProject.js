import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Projects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";
import Head from "../Head/Head";

const UIProject = () => {
  const Data = [
    {
      id: 0,
      description: "",
      name: "EvoGym",
      technology: "Typescript, React, Framer Motion, Tailwind ",
      img: "/assets/img/evogym.png",
      link: "https://gym-app-sigma.vercel.app/",
    },
    {
      id: 7,
      description: "",
      name: "GetLinkedAi",
      technology: "React.js and sass",
      img: "/assets/img/getlinkedai.png",
      link: "https://getlinkedai-iota.vercel.app/",
    },
    {
      id: 9,
      description: "",
      name: "Planti Dashboard",
      technology: "Reactjs, Custom css",
      img: "/assets/img/plantidashboard.png",
      link: "https://planti-dashboard.vercel.app/",
    },
    {
      id: 1,
      description: "",
      name: "Cars.ng",
      technology: "HTML, CSS, Bootstrap css, PHP",
      img: "/assets/img/carsng.png",
      link: "https://cars.ng",
    },
    {
      id: 2,
      description: "",
      name: "ApplyForMe",
      technology: "Reactjs, Custom CSS",
      img: "/assets/img/applyforme.png",
      link: "https://cars.ng",
    },
    {
      id: 3,
      description: "",
      name: "CoinSearch",
      technology: "Reactjs, Custom CSS, CoinGecko API",
      img: "/assets/img/coinsearch.png",
      link: "https://coinsearch.vercel.app/",
    },
    {
      id: 4,
      description: "",
      name: "ImageSearcher",
      technology: "Reactjs, Material UI, Unsplash Api",
      img: "/assets/img/imagesearch.png",
      link: "https://imagesearcher.vercel.app/",
    },
    {
      id: 5,
      description: "",
      name: "Metabnb",
      technology: "Reactjs, Custom css",
      img: "/assets/img/metabnb.png",
      link: "https://metabnb-tau.vercel.app/",
    },
    {
      id: 6,
      description: "",
      name: "LinkTree",
      technology: "Reactjs, Custom css, styled Components",
      img: "/assets/img/linktree.png",
      link: "https://hnginternship-task-1.vercel.app/",
    },
    {
      id: 8,
      description: "",
      name: "Color Game",
      technology: "Reactjs, Custom css",
      img: "/assets/img/colorgame.png",
      link: "https://react-color-game.vercel.app/",
    },
    {
      id: 10,
      description: "",
      name: "Todo List",
      technology: "Reactjs, Typescript, Custom css",
      img: "/assets/img/todolist.png",
      link: "https://todo-typescript-gamma-three.vercel.app/",
    },
  ];

  const display = Data.map((item) => {
    const { description, name, technology, image, link } = item;

    // return    <ProjectCard item={item}/>
    return (
      <AnimationOnScroll animateIn="animate__bounceIn" key={item.id}>
        <div className={styles.pllist}>
          <div className={styles.p}>
            <div className={styles.pbrowser}>
              <div className={styles.pcircle}></div>
              <div className={styles.pcircle}></div>
              <div className={styles.pcircle}></div>
            </div>
            <Link
              href={`${item.link}`}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <img src={`${item.img}`} alt=" " className={styles.pimg} />
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

        <Head justify="baseline" content="UI/UX PROJECTS" />

        <div className={styles.contentWrapper}>
          <iframe
            // style="border: 1px solid rgba(0, 0, 0, 0.1)"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fwm8F57VsoUix06czGNzuFS%2Ffintech-app%3Ftype%3Ddesign%26mode%3Ddesign%26t%3DzOTCQOx1yNR7Qo3O-1"
            allowfullscreen
          ></iframe>

          {/* {display} */}
        </div>
      </div>
    </div>
  );
};

export default UIProject;
