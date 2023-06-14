import React from 'react';
import styles from './About.module.css';
import profileImage from '../../assets/images/aboutme.webp';

const About = () => {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h2>About me</h2>
          <div className={styles.profileImageContainer}>
            <img src={profileImage} alt="Profile" className={styles.profileImage} />
          </div>
          <p className={styles.description}>
            Hello! I'm Benjamin, a full stack web developer.
          </p>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum sit neque dicta commodi atque facilis vitae nobis molestiae reprehenderit esse doloribus, totam asperiores laboriosam fuga quod? Delectus, ex neque!
          </p>
        </div>
      </div>
    );
  };

export default About;
