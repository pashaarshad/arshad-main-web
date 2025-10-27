import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import VideoBackground from '../../components/VideoBackground';
import Footer from '../../components/Footer';
import styles from '../../styles/Internships.module.css';

export const metadata = {
  title: 'Internships | Arshad Ali',
  description: 'Professional internship experiences and training',
};

const internships = [
  {
    company: 'Tech Company',
    role: 'Full Stack Developer Intern',
    duration: 'Jan 2024 - Apr 2024',
    description: 'Worked on building scalable web applications using React and Node.js. Contributed to multiple client projects and learned industry best practices.',
    image: '/assets/images/internships/intern1.jpg',
    skills: ['React', 'Node.js', 'MongoDB', 'REST API']
  },
  {
    company: 'Web Solutions',
    role: 'Frontend Developer Intern',
    duration: 'Jun 2023 - Aug 2023',
    description: 'Developed responsive user interfaces and implemented modern design patterns. Collaborated with design team to create pixel-perfect implementations.',
    image: '/assets/images/internships/intern2.jpg',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  },
  {
    company: 'Digital Agency',
    role: 'Web Developer Intern',
    duration: 'Dec 2022 - Feb 2023',
    description: 'Created dynamic websites for clients and gained experience in full development lifecycle. Worked with various CMS platforms and frameworks.',
    image: '/assets/images/internships/intern3.jpg',
    skills: ['WordPress', 'PHP', 'MySQL', 'JavaScript']
  },
];

export default function Internships() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className={styles.internshipsContainer}>
        <div className={styles.internshipsHeader}>
          <h1 className={styles.title}>
            My <span className={styles.highlight}>Internships</span>
          </h1>
          <p className={styles.subtitle}>Professional training and work experience</p>
        </div>

        <div className={styles.internshipsGrid}>
          {internships.map((internship, index) => (
            <div key={index} className={styles.internshipCard}>
              <div className={styles.internshipImage}>
                <Image
                  src={internship.image}
                  alt={internship.company}
                  width={400}
                  height={250}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.internshipInfo}>
                <h3 className={styles.internshipRole}>{internship.role}</h3>
                <h4 className={styles.internshipCompany}>{internship.company}</h4>
                <p className={styles.internshipDuration}>{internship.duration}</p>
                <p className={styles.internshipDescription}>{internship.description}</p>
                <div className={styles.internshipSkills}>
                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillBadge}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
