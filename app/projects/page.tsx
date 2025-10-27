import Navbar from '../../components/Navbar';
import VideoBackground from '../../components/VideoBackground';
import Footer from '../../components/Footer';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

export const metadata = {
  title: 'Projects - Arshad Pasha',
  description: 'Portfolio of web development projects and applications',
};

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with payment integration',
    image: '/assets/images/project0.png',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio with animations and responsive design',
    image: '/assets/images/project5.png',
    tech: ['Next.js', 'TypeScript', 'CSS'],
  },
  {
    title: 'Todo App',
    description: 'Task management application with real-time updates',
    image: '/assets/images/todo.png',
    tech: ['React', 'Firebase', 'Material-UI'],
  },
  {
    title: 'Myntra Clone',
    description: 'E-commerce clone with modern UI/UX',
    image: '/assets/images/myntra-clone.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Game Project',
    description: 'Interactive browser-based game',
    image: '/assets/images/first-game.png',
    tech: ['JavaScript', 'Canvas API'],
  },
  {
    title: 'Business Website',
    description: 'Corporate website with CMS integration',
    image: '/assets/images/project10.png',
    tech: ['WordPress', 'PHP', 'MySQL'],
  },
];

export default function Projects() {
  return (
    <>
      <VideoBackground />
      <Navbar />

      <main className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.title}>
            My <span className={styles.highlight}>Projects</span>
          </h1>
          <p className={styles.subtitle}>
            A collection of web applications and projects I've built
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
