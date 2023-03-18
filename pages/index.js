import Hero from "@/components/Hero/Hero";
import Nav from "@/components/nav/Nav";
import About from '@/components/About/About'

import Skills from '@/components/Skills/Skills'
import Footer from '@/components/Footer/Footer'
import Contact from '@/components/Contact/Contact'
// import SideNav from '@/components/sideNav/SideNav'
import Project from '@/components/projects/Project'

import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={styles.app}>
      <Hero />

      {/* <section>
        <SideNav />
      </section> */}
      <section>
        <About />
      </section>

      <section>
        <Project />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Contact />
      </section>

      
    </div>
  );
};

export default index;
