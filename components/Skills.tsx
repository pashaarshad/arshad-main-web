import React from 'react';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
    },
    {
      category: 'Front End',
      skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'Back End',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST API', 'GraphQL']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker']
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeader}>
          <h2 className={styles.title}>
            My <span className={styles.highlight}>Skills</span>
          </h2>
          <p className={styles.subtitle}>Technologies and tools I work with</p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
