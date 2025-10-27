'use client';
import React, { useState } from 'react';
import styles from '../styles/Internships.module.css';

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState<string | null>(null);

  const internships = [
    { filename: 'AICTE B1 PD Certificate-30.pdf', title: 'Cyber Security Internship', organization: 'AICTE & Edunet Foundation', date: 'June 2025', description: '6-week virtual internship in Cyber Security' },
    { filename: 'Arshad  Pasha_AICTE_Certificate (3).pdf', title: 'AI and Data Analytics Internship', organization: 'AICTE, Shell India & Edunet Foundation', date: 'July - August 2025', description: '4-week internship on AI & Data Analytics focused on Green Skills' },
    { filename: 'Arshad  Pasha_AICTE_Certificate.pdf', title: 'AI and Data Analytics Program', organization: 'AICTE, Shell India & Edunet Foundation', date: 'June - July 2025', description: '4-week virtual internship under Skills4Future program' },
    { filename: 'Arshad Pasha __ID__ (1) (1).pdf', title: 'Full Stack Development Internship', organization: 'Micro IT', date: 'April 2025', description: '1-month Full Stack Development certification program' },
    { filename: 'Arshad Pasha_Completion_Certificate.pdf', title: 'Web Development Internship', organization: 'NexusLogic Technologies', date: 'March - May 2025', description: '2-month internship as Web Development Intern' },
    { filename: 'Foundations of AI certificate.pdf', title: 'Foundations of Artificial Intelligence', organization: 'Microsoft, AICTE & Edunet Foundation', date: 'April - May 2025', description: '4-week Microsoft initiative internship program' },
    { filename: 'ThegoodgameTheory.pdf', title: 'Game Theory Research Internship', organization: 'The Good Game Theory', date: 'July 2025 - Ongoing', description: '6-month research internship (Currently Active)' }
  ];

  const openModal = (path: string) => {
    setSelectedInternship(path);
  };

  const closeModal = () => {
    setSelectedInternship(null);
  };

  return (
    <section id="internships" className={styles.internshipsSection}>
      <div className={styles.internshipsContainer}>
        <div className={styles.internshipsHeader}>
          <h2 className={styles.title}>My <span className={styles.highlight}>Internships</span></h2>
          <p className={styles.subtitle}>Professional training and work experience</p>
        </div>

        <div className={styles.internshipsGrid}>
          {internships.map((internship, index) => {
            const filePath = `/old_files_of_my_websie/intenships/${internship.filename}`;
            
            return (
              <div key={index} className={styles.internshipCard}>
                <div className={styles.internshipContent}>
                  <div className={styles.pdfIcon}>📄</div>
                  <h3 className={styles.internshipTitle}>{internship.title}</h3>
                  <p className={styles.internshipOrg}>{internship.organization}</p>
                  <p className={styles.internshipDate}>{internship.date}</p>
                  <p className={styles.internshipDesc}>{internship.description}</p>
                  {internship.date.includes('Ongoing') && <span className={styles.activeBadge}>🔥 Currently Active</span>}
                  <a href={filePath} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>View Certificate</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
