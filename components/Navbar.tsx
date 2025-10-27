'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navLeft} onClick={scrollToTop}>
          <div className={styles.logo}>
            <Image
              src="/assets/images/logoarshad.jpg"
              alt="Arshad Logo"
              width={60}
              height={60}
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Hamburger Menu - Top Right */}
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`${styles.navMenu} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>HOME</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>SKILLS</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>PROJECTS</a></li>
            <li><a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>CERTIFICATES</a></li>
            <li><a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>INTERNSHIPS</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>CONTACT</a></li>
          </ul>
        </nav>

        {/* Backdrop Overlay */}
        {menuOpen && <div className={styles.backdrop} onClick={toggleMenu} />}
      </nav>
    </header>
  );
}
