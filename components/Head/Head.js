import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Head.module.scss";

const Head = ({justify, content}) => {
  return (
    <div className={styles.heading}>
      <div className={styles.head} style={{ justifyContent:justify}}>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <p className={styles.hh}>{content}</p>
        </AnimationOnScroll>

        <div className={styles.hr}></div>
      </div>
    </div>
  );
};

export default Head;
