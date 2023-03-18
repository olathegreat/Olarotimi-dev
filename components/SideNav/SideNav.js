import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./sideNav.module.scss";

const SideNav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.sidenavwrapper}>
        <div className={styles.left}>
          <Link href="https://github.com/olathegreat">
            <FaGithub color="rgb(0, 147, 192)" size="25px" />
          </Link>

          <Link href="https://linkedin.com/in/olarotimiademolaolaniran">
            <FaLinkedin color="rgb(0, 147, 192)" size="25px" />
          </Link>

          <Link href="https://github.com/olathegreat">
            <FaEnvelope color="rgb(0, 147, 192)" size="25px" />
          </Link>
          <div className={styles.hl}></div>
        </div>

        <div className={styles.right}>
          {/* <Link href="mailto:ademolarotimi2000@gmail.com">
            <p className={styles.gmail}>
            ademolarotimi2000@gmail.com

            </p>
         
            </Link> */}
          <div className={styles.hll}></div>
          <div className={styles.hll}></div>
          <div className={styles.hll}></div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
