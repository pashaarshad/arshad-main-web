import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <br />

      <div className={styles.footerContent}>
        <h1>ARSHAD PASHA</h1>
        <h2>Copyright © 2025 ArshadPasha Website</h2>

        <div className={styles.conter}>
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=10964565&style=0006&nbdigits=5&type=page&initCount=0"
            title="Counter Widget"
            alt="Visit counter For Websites"
          />
        </div>
      </div>
    </footer>
  );
}
