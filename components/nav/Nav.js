import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Nav.module.scss";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scrollYes, setScrollYes] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
    // setScrollYes(!scrollYes);
  };

  const cancelNav = () =>{
    setNav(!nav);
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScrollYes(true);
      } else {
        setScrollYes(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      className={styles.navWrapper}
      style={{
        position: scrollYes && "fixed",
        // background:scrollYes && "rgba(0, 0, 0, 0.272)",
        justifyContent: scrollYes && "space-between",
        width: "100%",
        /* From https://css.glass */
        background: scrollYes && "rgba(255, 255, 255, 0.05)",

        // boxShadow: scrollYes && "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(7.8px)",
        webkitBackdropFilter: "blur(7.8px)",
        // border:scrollYes &&  "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className={styles.nav}>
        <div className={styles.left}>
          <Link href="/">
            <h2>Olarotimi</h2>
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.fullscreen}>
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#project">Project</Link>
            <Link href="/#skill">Skills</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <div className={styles.mobilescreen} >
            <FaBars color={"#2c3e50"} style={{display:nav ? "none" : "block"}} onClick={handleNav}/>
          </div>
          <div className={styles.mobilescreen} >
            <FaTimes color={"#2c3e50"} style={{display:nav ? "block" : "none"}} onClick={cancelNav}/>
          </div>
        </div>
      </div>

      <div
        className={styles.mobilescreenmenu}
        style={{ display: nav ? "flex" : "none", transition: "all ease 0.5s" }}
      >
        <Link href="/">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#project">Project</Link>
        <Link href="/#skill">Skills</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
