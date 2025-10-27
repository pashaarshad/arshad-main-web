'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Internships.module.css';

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState<string | null>(null);
  const [pdfPreviews, setPdfPreviews] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Load PDF.js library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const generatePdfPreview = async (pdfUrl: string, key: string) => {
    if (pdfPreviews[key]) return; // Already generated

    try {
      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) return;

      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      const imageUrl = canvas.toDataURL();
      setPdfPreviews(prev => ({ ...prev, [key]: imageUrl }));
    } catch (error) {
      console.error('Error generating PDF preview:', error);
    }
  };

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
            const filePath = `/assets/internships/${internship.filename}`;
            const previewKey = `internship-${index}`;
            
            // Generate PDF preview when component mounts
            if (typeof window !== 'undefined') {
              setTimeout(() => generatePdfPreview(filePath, previewKey), 100 * index);
            }
            
            return (
              <div key={index} className={styles.internshipCard} onClick={() => openModal(filePath)}>
                {pdfPreviews[previewKey] ? (
                  <div className={styles.pdfPreviewWrapper}>
                    <img src={pdfPreviews[previewKey]} alt={internship.title} className={styles.pdfPreview} />
                    <div className={styles.previewOverlay}>
                      <button className={styles.viewFullBtn}>View Full Certificate</button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.pdfLoading}>
                    <div className={styles.pdfIcon}>📄</div>
                    <p className={styles.loadingText}>Loading preview...</p>
                  </div>
                )}
                <div className={styles.internshipContent}>
                  <h3 className={styles.internshipTitle}>{internship.title}</h3>
                  <p className={styles.internshipOrg}>{internship.organization}</p>
                  <p className={styles.internshipDate}>{internship.date}</p>
                  <p className={styles.internshipDesc}>{internship.description}</p>
                  {internship.date.includes('Ongoing') && <span className={styles.activeBadge}>🔥 Currently Active</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedInternship && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeBtn} onClick={closeModal}>&times;</span>
            <iframe src={selectedInternship} className={styles.pdfViewer} title="Internship Certificate" />
          </div>
        </div>
      )}
    </section>
  );
}
