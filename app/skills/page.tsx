import Navbar from '../../components/Navbar';
import VideoBackground from '../../components/VideoBackground';
import Footer from '../../components/Footer';
import Image from 'next/image';
import styles from '../../styles/Skills.module.css';

export const metadata = {
  title: 'Skills - Arshad Pasha',
  description: 'Professional skills and technologies I work with',
};

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: '/assets/images/c++.png' },
      { name: 'Java', icon: '/assets/images/java.svg' },
      { name: 'Python', icon: '/assets/images/c++.png' }, // Replace with actual Python icon
    ],
  },
  {
    title: 'Front End',
    skills: [
      { name: 'HTML', icon: '/assets/images/HTML.svg' },
      { name: 'CSS', icon: '/assets/images/CSS.svg' },
      { name: 'JavaScript', icon: '/assets/images/JavaScript.svg' },
    ],
  },
  {
    title: 'Back End',
    skills: [
      { name: 'PHP', icon: '/assets/images/PHP-Dark.svg' },
      { name: 'Node.js', icon: '/assets/images/NodeJS-Dark.svg' },
      { name: 'SQL', icon: '/assets/images/sql.svg' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'GitHub', icon: '/assets/images/Github-Dark.svg' },
      { name: 'VS Code', icon: '/assets/images/VSCode-Dark.svg' },
      { name: 'Netlify', icon: '/assets/images/Netlify-Dark.svg' },
      { name: 'Git', icon: '/assets/images/Git.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <VideoBackground />
      <Navbar />

      <main className={styles.skillsContainer}>
        <div className={styles.skillsHeader}>
          <h1 className={styles.title}>
            Professional <span className={styles.highlight}>Skills</span>
          </h1>
          <p className={styles.subtitle}>
            As a self-taught programmer, I've mastered the leading programming languages and coding skills.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.skillIcons}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className={styles.skillIcon}
                    />
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.skillsImage}>
          <Image
            src="/assets/images/arshaddream.png"
            alt="Skills illustration"
            width={600}
            height={500}
            className={styles.illustrationImage}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
