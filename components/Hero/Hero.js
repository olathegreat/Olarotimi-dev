import Nav from "../nav/Nav";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.left}>
          <h2 className={styles.boujeetext}>
            Welcome to my portfolio website!
          </h2>

          <p>
            I design and develop services for customers of all sizes,
            specialising in creating stylish, modern websites and mobile apps, web services and
            online stores.&#128526;
          </p>
        </div>

        <div className={styles.right}>
          {/*    
            <Image
              src="/assets/img/robot.png"
              alt="hero image"
              width="250"
              height="250"
            ></Image> */}
          
            <img
              className={styles.img}
              src="/assets/img/robot.png"
              alt="hero image"
            />
          
        </div>
      </div>
    </main>
  );
};

export default Hero;
