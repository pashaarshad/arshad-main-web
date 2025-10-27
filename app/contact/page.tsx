'use client';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import VideoBackground from '../../components/VideoBackground';
import Footer from '../../components/Footer';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.title}>
            Contact <span className={styles.highlight}>Me</span>
          </h1>
          <p className={styles.subtitle}>Get in touch for opportunities and collaborations</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Let&apos;s Connect</h2>
            <p className={styles.infoText}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <div>
                  <h3>Email</h3>
                  <p>arshadali@example.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <h3>Location</h3>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className={styles.formTextarea}
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
