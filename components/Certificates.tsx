'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Certificates.module.css';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificateSections = {
    professional: {
      title: "Professional Certifications",
      description: "Oracle Cloud Infrastructure and AI professional certifications",
      files: [
        'AI Foundations Associate.pdf',
        'Data Science Professional.pdf',
        'Generative AI Professional_arshad.pdf',
        'Oracle AI Vector Search Certified Professional_arshad.pdf',
        'arshad_Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional.pdf',
        'arshad_Oracle Cloud Infrastructure 2025 Certified DevOps Professional.pdf'
      ],
      folder: 'Professional'
    },
    hackathons: {
      title: "Hackathon Certificates",
      description: "Programming competitions and hackathon achievements",
      files: [
        'photo_5_2025-09-09_23-04-19.jpg',
        'photo_6_2025-09-09_23-04-19.jpg',
        'photo_7_2025-09-09_23-04-19.jpg',
        'photo_8_2025-09-09_23-04-19.jpg',
        'photo_10_2025-09-09_23-04-19.jpg'
      ],
      folder: 'Hackathons'
    },
    other: {
      title: "Other Certificates",
      description: "Competition and achievement certificates",
      files: [
        { filename: 'RBI Quize.jpg', title: 'RBI Quiz Certificate', description: 'State level competition certificate' },
        { filename: 'Eassy English.jpg', title: 'Essay Competition Certificate', description: 'English essay competition certificate' }
      ],
      folder: 'Other'
    },
    courses: {
      title: "Course Certificates",
      description: "Professional development and online course completions",
      files: [
        'Agile Scrum in Practice.pdf',
        'Introduction to Artificial Intelligence.pdf',
        'Introduction to Data Science.pdf',
        'OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers.pdf',
        'photo_1_2025-09-09_23-04-19.jpg',
        'photo_2_2025-09-09_23-04-19.jpg'
      ],
      folder: 'Courses'
    },
    college: {
      title: "College Certificates",
      description: "Academic and college-related achievements",
      files: [
        'photo_13_2025-09-09_23-04-19.jpg',
        'photo_14_2025-09-09_23-04-19.jpg',
        'photo_15_2025-09-09_23-04-19.jpg',
        'photo_16_2025-09-09_23-04-19.jpg',
        'photo_17_2025-09-09_23-04-19.jpg',
        'photo_18_2025-09-09_23-04-19.jpg',
        'photo_19_2025-09-09_23-04-19.jpg',
        'photo_20_2025-09-09_23-04-19.jpg',
        'photo_21_2025-09-09_23-04-19.jpg',
        'photo_22_2025-09-09_23-04-19.jpg'
      ],
      folder: 'College'
    }
  };

  const openModal = (path: string) => {
    setSelectedCert(path);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className={styles.certificatesSection}>
      <div className={styles.certificatesContainer}>
        <div className={styles.certificatesHeader}>
          <h2 className={styles.title}>My <span className={styles.highlight}>Certificates</span></h2>
          <p className={styles.subtitle}>Professional certifications and achievements</p>
        </div>

        {Object.entries(certificateSections).map(([key, section]) => (
          <div key={key} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{section.title}</h3>
            <p className={styles.categoryDesc}>{section.description}</p>
            <div className={styles.certificatesGrid}>
              {section.files.map((file, index) => {
                const filename = typeof file === 'string' ? file : file.filename;
                const filePath = `/assets/certificates/${section.folder}/${filename}`;
                const isPDF = filename.toLowerCase().endsWith('.pdf');
                
                return (
                  <div key={index} className={styles.certificateCard} onClick={() => !isPDF && openModal(filePath)}>
                    {isPDF ? (
                      <div className={styles.pdfCard}>
                        <div className={styles.pdfIcon}>📄</div>
                        <p className={styles.pdfName}>{typeof file === 'object' ? file.title : filename}</p>
                        <a href={filePath} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>View PDF</a>
                      </div>
                    ) : (
                      <div className={styles.certificateImageWrapper}>
                        <Image src={filePath} alt={typeof file === 'object' ? file.title : 'Certificate'} width={300} height={220} className={styles.certificateImage} />
                        <div className={styles.overlay}>
                          <button className={styles.viewCertBtn}>View Certificate</button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeBtn} onClick={closeModal}>&times;</span>
            <Image src={selectedCert} alt="Certificate" width={900} height={650} className={styles.modalImage} />
          </div>
        </div>
      )}
    </section>
  );
}
