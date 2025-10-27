'use client';
import React, { useEffect, useState } from 'react';
import styles from '../styles/PageLoader.module.css';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        {/* Animated Logo/Icon */}
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <span className={styles.logoText}>AP</span>
            <div className={styles.orbit}></div>
            <div className={styles.orbit2}></div>
          </div>
        </div>

        {/* Loading Text with Animation */}
        <h2 className={styles.loadingTitle}>
          Loading<span className={styles.dots}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </h2>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className={styles.progressText}>{progress}%</p>
        </div>

        {/* Subtitle */}
        <p className={styles.subtitle}>Welcome to Arshad Pasha's Portfolio</p>
      </div>

      {/* Background Animation */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
    </div>
  );
}
