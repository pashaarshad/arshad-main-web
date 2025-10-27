'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/Certificates.module.css';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [pdfPreviews, setPdfPreviews] = useState<{ [key: string]: string }>({});
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
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
            const key = entry.target.getAttribute('data-cert-key');
            if (key) {
              setVisibleCards(prev => new Set(prev).add(key));
            }
          }
        });
      },
      { rootMargin: '150px', threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const generatePdfPreview = useCallback(async (pdfUrl: string, key: string) => {
    if (pdfPreviews[key]) return;

    try {
      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) return;

      // Lightweight loading with optimizations
      const loadingTask = pdfjsLib.getDocument({
        url: pdfUrl,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
        cMapPacked: true,
      });
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      // Reduced scale for faster loading
      const viewport = page.getViewport({ scale: 0.75 });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { alpha: false });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      // Lower quality JPEG for faster loading
      const imageUrl = canvas.toDataURL('image/jpeg', 0.65);
      setPdfPreviews(prev => ({ ...prev, [key]: imageUrl }));
      
      // Clean up
      pdf.destroy();
    } catch (error) {
      console.error('Error generating PDF preview:', error);
    }
  }, [pdfPreviews]);

  // Intersection observer callback
  const cardRef = useCallback((node: HTMLDivElement | null, key: string) => {
    if (node && observerRef.current) {
      node.setAttribute('data-cert-key', key);
      observerRef.current.observe(node);
    }
  }, []);

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
                const previewKey = `${key}-${index}`;
                const isVisible = visibleCards.has(previewKey);
                
                // Generate PDF preview only when visible and PDF.js is loaded
                if (isPDF && typeof window !== 'undefined' && isVisible && !pdfPreviews[previewKey] && pdfLibLoadedRef.current) {
                  setTimeout(() => generatePdfPreview(filePath, previewKey), 30);
                }
                
                return (
                  <div 
                    key={index} 
                    ref={(node) => cardRef(node, previewKey)}
                    className={styles.certificateCard} 
                    onClick={() => openModal(filePath)} 
                    suppressHydrationWarning
                  >
                    {isPDF ? (
                      <div className={styles.pdfPreviewCard}>
                        {!isVisible ? (
                          <div className={styles.pdfLoading}>
                            <div className={styles.pdfIcon}>📄</div>
                            <p className={styles.loadingText}>Scroll to load...</p>
                          </div>
                        ) : pdfPreviews[previewKey] ? (
                          <div className={styles.certificateImageWrapper}>
                            <img 
                              src={pdfPreviews[previewKey]} 
                              alt={typeof file === 'object' ? file.title : 'Certificate'} 
                              className={styles.certificateImage}
                              loading="lazy"
                            />
                            <div className={styles.overlay}>
                              <button className={styles.viewCertBtn} suppressHydrationWarning>View Full PDF</button>
                            </div>
                          </div>
                        ) : (
                          <div className={styles.pdfLoading}>
                            <div className={styles.pdfIcon}>📄</div>
                            <p className={styles.loadingText}>Loading...</p>
                          </div>
                        )}
                        <p className={styles.pdfName}>{typeof file === 'object' ? file.title : filename.replace('.pdf', '')}</p>
                      </div>
                    ) : (
                      <div className={styles.certificateImageWrapper}>
                        <Image src={filePath} alt={typeof file === 'object' ? file.title : 'Certificate'} width={300} height={220} className={styles.certificateImage} />
                        <div className={styles.overlay}>
                          <button className={styles.viewCertBtn} suppressHydrationWarning>View Certificate</button>
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
            {selectedCert.toLowerCase().endsWith('.pdf') ? (
              <iframe src={selectedCert} className={styles.pdfViewer} title="Certificate PDF" />
            ) : (
              <Image src={selectedCert} alt="Certificate" width={900} height={650} className={styles.modalImage} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
