'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
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
              <Link href="/" className={styles.active} onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={closeMenu}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={closeMenu}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="/certificates" onClick={closeMenu}>
                CERTIFICATES
              </Link>
            </li>
            <li>
              <Link href="/internships" onClick={closeMenu}>
                INTERNSHIPS
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
