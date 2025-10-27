'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Load Typed.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.async = true;
    script.onload = () => {
      if (typedRef.current && (window as any).Typed) {
        new (window as any).Typed(typedRef.current, {
          strings: [
            'Python Developer',
            'AI/ML Developer & Data Analyst',
            'ReactJS & JavaScript Developer',
            'C++ Programmer',
            'RPA Developer (Robotic Process Automation)',
            'Cybersecurity Learner',
            'Motivational Speaker',
            'Full-Stack Developer',
          ],
          typeSpeed: 100,
          backSpeed: 40,
          loop: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.bodyLeft}>
        <div className={styles.fixBoxSize}>
          <h1 className={styles.bodyLeftH1}>
            HI, <br />
            I Am <span className={styles.coloringArshad}>Arshad Pasha</span> <br />
            <span ref={typedRef} className={styles.autoType}></span>
          </h1>
        </div>

        <div className={styles.socialMedia}>
          <Link
            className={styles.bigImg}
            href="https://www.linkedin.com/in/arshad-pasha/"
            target="_blank"
          >
            <Image
              src="/assets/images/linkdinNewLogo.webp"
              alt="LinkedIn"
              width={60}
              height={60}
            />
          </Link>
          <Link
            className={styles.bigImg}
            href="https://wa.me/+917760554350"
            target="_blank"
          >
            <Image
              src="/assets/images/logow.png"
              alt="WhatsApp"
              width={60}
              height={60}
            />
          </Link>
          <Link
            className={styles.bigImg}
            href="https://www.instagram.com/arshadpasha65?igsh=MWs1YnQyOXdpZzd1eQ=="
            target="_blank"
          >
            <Image
              src="/assets/images/logoi.webp"
              alt="Instagram"
              width={60}
              height={60}
            />
          </Link>
          <Link
            className={styles.bigImg}
            href="/old_files_of_my_websie/Main Arshad Resume SEP.pdf"
            target="_blank"
          >
            <Image
              src="/assets/images/cv_img.png"
              alt="CV"
              width={60}
              height={60}
            />
          </Link>
          <Link
            className={styles.bigImg}
            href="https://github.com/pashaarshad"
            target="_blank"
          >
            <Image
              src="/assets/images/github.png"
              alt="GitHub"
              width={60}
              height={60}
            />
          </Link>
        </div>
      </div>

      <div className={styles.bodyRight}>
        <Image
          src="/assets/images/arshad_infosysLogo.jpg"
          alt="Arshad Pasha"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
