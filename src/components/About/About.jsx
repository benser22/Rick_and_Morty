import React from "react";
import styles from "./About.module.css";
import profileImage from "../../assets/images/aboutme.webp";
import { FaHome, FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.background} />
      <div className={styles.content}>
        <h2 className={styles.me}>About me</h2>
        <div className={styles.profileImageContainer}>
          <img
            src={profileImage}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <p className={styles.begin}>
          Hello! I'm Benjamin, a Henry student...
        </p>
        <p className={styles.description}>
          ...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          nostrum sit neque dicta commodi atque facilis vitae nobis molestiae
          reprehenderit esse doloribus, totam asperiores laboriosam fuga quod?
          Delectus, ex neque!
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/benjam%C3%ADn-serrano-friedlander-30527b247/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/benser22"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <NavLink to="/home" className={styles.navLink}>
        <FaHome />
      </NavLink>
    </div>
  );
};

export default About;
