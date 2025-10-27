import Navbar from '../../components/Navbar';
import VideoBackground from '../../components/VideoBackground';
import Footer from '../../components/Footer';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

export const metadata = {
  title: 'About - Arshad Pasha',
  description: "Learn more about Arshad Pasha's journey as a full-stack web developer",
};

export default function About() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      
      <main className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/assets/images/arshad.jpg"
              alt="Arshad Pasha"
              width={400}
              height={500}
              className={styles.profileImage}
              priority
            />
          </div>

          <div className={styles.aboutText}>
            <h1 className={styles.title}>
              About <span className={styles.highlight}>Me</span>
            </h1>
            
            <h2 className={styles.subtitle}>I'm Arshad Pasha</h2>
            
            <div className={styles.description}>
              <p>
                Hi, I'm a web designer and developer focused on crafting great web experiences.
              </p>
              
              <p>
                Designing and coding have been my passions since the days I started working with 
                computers, but I found myself into web design and development in 2021.
              </p>
              
              <p>
                I enjoy creating beautifully designed, intuitive, and functional websites. My goal 
                is to build applications that not only look great but also provide exceptional user 
                experiences.
              </p>

              <p>
                With expertise in full-stack development, AI/ML, and modern web technologies, I bring 
                ideas to life through clean code and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
