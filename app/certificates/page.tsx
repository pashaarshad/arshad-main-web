import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import VideoBackground from '../../components/VideoBackground';
import Footer from '../../components/Footer';
import styles from '../../styles/Certificates.module.css';

export const metadata = {
  title: 'Certificates | Arshad Ali',
  description: 'Professional certifications and achievements',
};

const certificates = [
  {
    category: 'Professional Certifications',
    items: [
      { title: 'Cloud Computing', image: '/assets/images/certificates/cloud.jpg' },
      { title: 'Web Development', image: '/assets/images/certificates/web.jpg' },
      { title: 'Full Stack Development', image: '/assets/images/certificates/fullstack.jpg' },
    ]
  },
  {
    category: 'Hackathons',
    items: [
      { title: 'Smart India Hackathon', image: '/assets/images/certificates/sih.jpg' },
      { title: 'Tech Fest Winner', image: '/assets/images/certificates/techfest.jpg' },
    ]
  },
  {
    category: 'Courses',
    items: [
      { title: 'JavaScript Advanced', image: '/assets/images/certificates/js.jpg' },
      { title: 'React Masterclass', image: '/assets/images/certificates/react.jpg' },
      { title: 'Node.js Backend', image: '/assets/images/certificates/node.jpg' },
    ]
  },
  {
    category: 'College Achievements',
    items: [
      { title: 'Academic Excellence', image: '/assets/images/certificates/college.jpg' },
      { title: 'Project Award', image: '/assets/images/certificates/project.jpg' },
    ]
  },
];

export default function Certificates() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className={styles.certificatesContainer}>
        <div className={styles.certificatesHeader}>
          <h1 className={styles.title}>
            My <span className={styles.highlight}>Certificates</span>
          </h1>
          <p className={styles.subtitle}>Professional certifications and achievements</p>
        </div>

        {certificates.map((category, index) => (
          <div key={index} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.certificatesGrid}>
              {category.items.map((cert, certIndex) => (
                <div key={certIndex} className={styles.certificateCard}>
                  <div className={styles.certificateImage}>
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={300}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.certificateInfo}>
                    <h3 className={styles.certificateTitle}>{cert.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
