import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.title}>
            About <span className={styles.highlight}>Me</span>
          </h2>
          <p className={styles.subtitle}>Get to know me better</p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/assets/images/arshad.jpg"
              alt="Arshad Ali"
              width={400}
              height={400}
              className={styles.profileImage}
            />
          </div>

          <div className={styles.aboutText}>
            <h3 className={styles.aboutTitle}>Full Stack Developer & Designer</h3>
            <p className={styles.aboutDescription}>
              I am a passionate Full Stack Developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I create scalable and 
              user-friendly solutions.
            </p>
            <p className={styles.aboutDescription}>
              My journey in web development started with a curiosity about how websites work, and it has 
              evolved into a professional career where I continuously learn and adapt to new technologies. 
              I specialize in React, Next.js, Node.js, and modern JavaScript frameworks.
            </p>
            <p className={styles.aboutDescription}>
              Beyond coding, I am enthusiastic about UI/UX design, ensuring that every project I work on 
              not only functions flawlessly but also provides an exceptional user experience. I believe 
              in writing clean, maintainable code and following best practices.
            </p>
            <p className={styles.aboutDescription}>
              I am always eager to take on new challenges and collaborate on innovative projects. 
              Let&apos;s build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
