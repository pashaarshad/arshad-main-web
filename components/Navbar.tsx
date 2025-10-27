'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.logo} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <Image
              src="/assets/images/logoarshad.jpg"
              alt="Arshad Logo"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <span className={styles.menuBtn} onClick={toggleMenu}>
          &#9776;
        </span>
        <span
          className={`${styles.closeBtn} ${menuOpen ? styles.show : ''}`}
          onClick={toggleMenu}
        >
          &#9776;
        </span>

        <div className={styles.navRight}>
          <ul id="menu" className={menuOpen ? styles.menuOpen : ''}>
            <li>
              <a 
                href="#home" 
                className={styles.active} 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a 
                href="#certificates" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('certificates');
                }}
              >
                CERTIFICATES
              </a>
            </li>
            <li>
              <a 
                href="#internships" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('internships');
                }}
              >
                INTERNSHIPS
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
