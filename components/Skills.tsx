import React from 'react';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';
import { techIcons } from './TechIcons';

export default function Skills() {
  const programmingLanguages = [
    { name: 'C' },
    { name: 'C++' },
    { name: 'Java' }
  ];

  const frontEnd = [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' }
  ];

  const backEnd = [
    { name: 'PHP' },
    { name: 'Node.js' },
    { name: 'MySQL' }
  ];

  const toolsTech = [
    { name: 'GitHub' },
    { name: 'VS Code' },
    { name: 'Git' },
    { name: 'Postman' }
  ];

  const renderIcon = (skillName: string) => {
    const IconComponent = techIcons[skillName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeader}>
          <h2 className={styles.title}>Professional Skills :</h2>
          <p className={styles.subtitle}>
            As a self-taught programmer, I've mastered the leading programming languages and coding skills.
          </p>
        </div>

        <div className={styles.skillsContent}>
          <div className={styles.skillsLeft}>
            {/* Programming Languages */}
            <div className={styles.skillBox}>
              <h3 className={styles.boxTitle}>Programming Languages</h3>
              <div className={styles.iconsGrid}>
                {programmingLanguages.map((skill, index) => (
                  <div key={index} className={styles.iconWrapper}>
                    <div className={styles.iconCircle}>
                      <span className={styles.icon}>{renderIcon(skill.name)}</span>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Front End */}
            <div className={styles.skillBox}>
              <h3 className={styles.boxTitle}>Front End</h3>
              <div className={styles.iconsGrid}>
                {frontEnd.map((skill, index) => (
                  <div key={index} className={styles.iconWrapper}>
                    <div className={styles.iconCircle}>
                      <span className={styles.icon}>{renderIcon(skill.name)}</span>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Back End */}
            <div className={styles.skillBox}>
              <h3 className={styles.boxTitle}>Back End</h3>
              <div className={styles.iconsGrid}>
                {backEnd.map((skill, index) => (
                  <div key={index} className={styles.iconWrapper}>
                    <div className={styles.iconCircle}>
                      <span className={styles.icon}>{renderIcon(skill.name)}</span>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools and Technologies */}
            <div className={styles.skillBox}>
              <h3 className={styles.boxTitle}>Tools and Technologies</h3>
              <div className={styles.iconsGrid}>
                {toolsTech.map((skill, index) => (
                  <div key={index} className={styles.iconWrapper}>
                    <div className={styles.iconCircle}>
                      <span className={styles.icon}>{renderIcon(skill.name)}</span>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.skillsRight}>
            <div className={styles.imageContainer}>
              <img 
                src="/assets/images/digital-art.png" 
                alt="Programmer at work" 
                className={styles.programmerImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
