'use client';

import { useEffect } from 'react';
import styles from '../styles/VideoBackground.module.css';

export default function VideoBackground() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.keyCode === 49) {
        // '1' key pressed
        const video = document.querySelector('video');
        if (video) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted playsInline>
        <source src="/assets/videos/bestvedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
