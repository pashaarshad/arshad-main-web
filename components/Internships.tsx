'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/Internships.module.css';

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState<string | null>(null);
  const [pdfPreviews, setPdfPreviews] = useState<{ [key: string]: string }>({});
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pdfLibLoadedRef = useRef(false);

  useEffect(() => {
    // Load PDF.js library once
    if (!pdfLibLoadedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.async = true;
      script.onload = () => {
        if ((window as any).pdfjsLib) {
          (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = 
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          pdfLibLoadedRef.current = true;
        }
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set(prev).add(index));
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const generatePdfPreview = useCallback(async (pdfUrl: string, key: string) => {
    if (pdfPreviews[key] || loadingStates[key]) return;

    setLoadingStates(prev => ({ ...prev, [key]: true }));

    try {
      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) {
        setLoadingStates(prev => ({ ...prev, [key]: false }));
        return;
      }

      // Lightweight loading with lower quality for speed
      const loadingTask = pdfjsLib.getDocument({
        url: pdfUrl,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
        cMapPacked: true,
      });
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      // Optimized scale for faster rendering
      const viewport = page.getViewport({ scale: 0.8 });
      
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { alpha: false });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      // Lower quality for faster loading
      const imageUrl = canvas.toDataURL('image/jpeg', 0.7);
      setPdfPreviews(prev => ({ ...prev, [key]: imageUrl }));
      setLoadingStates(prev => ({ ...prev, [key]: false }));
      
      // Clean up
      pdf.destroy();
    } catch (error) {
      console.error('Error generating PDF preview:', error);
      setLoadingStates(prev => ({ ...prev, [key]: false }));
    }
  }, [pdfPreviews, loadingStates]);

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

  // Intersection observer callback
  const cardRef = useCallback((node: HTMLDivElement | null, index: number) => {
    if (node && observerRef.current) {
      node.setAttribute('data-index', index.toString());
      observerRef.current.observe(node);
    }
  }, []);

  return (
    <section id="internships" className={styles.internshipsSection}>
      <div className={styles.internshipsContainer}>
        <div className={styles.internshipsHeader}>
          <h2 className={styles.title}>My <span className={styles.highlight}>Internships</span></h2>
          <p className={styles.subtitle}>Professional internship programs and certifications I have completed</p>
        </div>

        <div className={styles.internshipsGrid}>
          {internships.map((internship, index) => {
            const filePath = `/assets/internships/${internship.filename}`;
            const previewKey = `internship-${index}`;
            const isVisible = visibleCards.has(index);
            
            // Generate PDF preview only when visible
            if (typeof window !== 'undefined' && isVisible && !pdfPreviews[previewKey] && !loadingStates[previewKey] && pdfLibLoadedRef.current) {
              setTimeout(() => generatePdfPreview(filePath, previewKey), 50);
            }
            
            return (
              <div 
                key={index} 
                ref={(node) => cardRef(node, index)}
                className={styles.internshipCard} 
                onClick={() => openModal(filePath)} 
                suppressHydrationWarning
              >
                <div className={styles.internshipImageContainer}>
                  {!isVisible ? (
                    <div className={styles.internshipPlaceholder}>
                      <div className={styles.placeholderIcon}>📄</div>
                      <p>Scroll to load...</p>
                    </div>
                  ) : loadingStates[previewKey] || !pdfPreviews[previewKey] ? (
                    <div className={styles.internshipLoader}>
                      <div className={styles.loadingSpinner}></div>
                      <p>Loading...</p>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={pdfPreviews[previewKey]} 
                        alt={internship.title} 
                        className={styles.internshipCanvas}
                        loading="lazy"
                      />
                      <div className={styles.internshipOverlay}>
                        <div className={styles.internshipOverlayContent}>
                          <h3>{internship.title}</h3>
                          <p><strong>Organization:</strong> {internship.organization}</p>
                          <p><strong>Duration:</strong> {internship.date}</p>
                          <p className={styles.internshipDesc}>{internship.description}</p>
                          {internship.date.includes('Ongoing') && (
                            <p className={styles.ongoingBadge}>🔥 Currently Active</p>
                          )}
                          <button className={styles.viewInternship} suppressHydrationWarning>View Certificate</button>
                        </div>
                      </div>
                    </>
                  )}
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
            <div className={styles.modalInternshipInfo}>
              <a href={selectedInternship} target="_blank" rel="noopener noreferrer" className={styles.downloadInternship}>
                📥 Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
