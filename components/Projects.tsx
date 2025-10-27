import React from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const projects = [
    { title: 'PUC College Website', description: 'This is the first website of my pu college, created in the year 2021–22.', image: '/assets/images/arshad786.42web.io.png', link: 'https://arshadpuc.netlify.app/' },
    { title: 'My Website', description: 'This is my personal website for to store the personal Files , created on 2022.', image: '/assets/images/arshad65.42web.io.png', link: 'https://arshadold.netlify.app/' },
    { title: 'Degree College Website + 2nd Version', description: 'This is the 2nd website of my Seshadripuram Degree college , created in the year 2023.', image: '/assets/images/sdcvo.png', link: 'https://sdcarshad.netlify.app/' },
    { title: 'Our Rashmi Mam', description: 'This is the first Client Website for Practicing , created in the year 2024.', image: '/assets/images/rashami.png', link: 'https://rashmiweb.netlify.app/' },
    { title: 'My Friend Website', description: 'This is the 1st website , Which is gifted as a Birthday Gift . Created on 06/03/2024', image: '/assets/images/tfweb.png', link: 'https://tauqeerweb.netlify.app/' },
    { title: 'Hackathon', description: 'This is the first Competition Website in Hackathon in the college of Hindutan College,Mysore , created on 22/03/2024', image: '/assets/images/totalwellness.netlify.app.png', link: 'https://totalwellness.netlify.app/' },
    { title: 'My Friend Websit', description: 'Create on 03/07/2024', image: '/assets/images/khazi.png', link: 'https://khazi.netlify.app/' },
    { title: 'My Project 0', description: 'This Project maked from an Library', image: '/assets/images/project0.png', link: 'https://project0lms.netlify.app/' },
    { title: 'Our Masjid', description: '', image: '/assets/images/masjid.png', link: 'https://arshadupcoming.netlify.app/' },
    { title: 'Birthday Gift', description: 'This Project 2 maked from an Library Mam on 21/9/24', image: '/assets/images/httpssandhyaachari.netlify.app.png', link: 'https://sandhyaachari.netlify.app/' },
    { title: '1St Professional Website', description: '', image: '/assets/images/bharathi_mam_vap.png', link: 'https://bharathishankar.netlify.app/' },
    { title: 'Full Animated Website', description: 'This Project 1 maked on 20/1/25', image: '/assets/images/p1.png', link: 'https://65project1.netlify.app/' },
    { title: 'Criminal-Identification-System Using Python', description: 'Project 3 on 03/07/2024', video: 'https://www.youtube.com/embed/0lMsasNGoFA?si=6MN3SDWZu9Xyq1TM', isVideo: true },
    { title: 'Library Management System Project', description: 'Project 4 on 10/06/2025', video: 'https://www.youtube.com/embed/ULIltpxyJu0?si=ctn2WwGBxJP5Nmvo', isVideo: true },
    { title: 'Pro 7 Automation', description: 'My Project Number 5 Bot Built - 2024', video: 'https://www.youtube.com/embed/0J1fgZZZkXE?si=96MBmtZSkl6K9C7B', isVideo: true },
    { title: 'Auto Excel Mail Project', description: 'Project Number 2 - 2024', video: 'https://www.youtube.com/embed/6-Sw3ylBdmo?si=oeuwNzhr8xH7vOvX', isVideo: true },
    { title: 'Word Auto PDF Project', description: 'Project Number 3 - 2024', video: 'https://www.youtube.com/embed/SmrUFrmVXxo?si=mGnPHkdeSd0wjeK4', isVideo: true },
    { title: 'Making Book by using ChatGPT', description: 'Project Number 4 - 2024', video: 'https://www.youtube.com/embed/RRLkaKEX_sc?si=Qt7FuZ7l_1AeMbXV', isVideo: true },
    { title: 'Encrypt, Decrypt, Cybersecurity.', description: 'Project 5 On 23/06/2025', image: '/assets/images/project5.png', link: 'https://project-5-encrypt-decrypt-project-w9hq.onrender.com/' },
    { title: 'Advanced TO DO List App with localStorage', description: 'Project 6 on 29/6/25', image: '/assets/images/todo.png', link: 'https://arshadtodoapp.netlify.app/' },
    { title: 'ElementMix – Chemical Reaction Simulator', description: 'This Project 7 on 3/06/25', image: '/assets/images/elementmix.png', link: 'https://elementmix-isro-project.onrender.com' },
    { title: 'QRcode Generator With URL and Text', description: 'Project 8 on 5/06/25', image: '/assets/images/qrcode.png', link: 'https://qr-code-website.onrender.com/' },
    { title: 'Chrome Extension', description: 'This Project 9', image: '/assets/images/project9new.png', link: 'https://youtu.be/rNEbBEcnUtc?si=aT-Yzc_W2FbsVRoC' },
    { title: 'Infosys Hackathon – 2 Day Challenge', description: 'Participated on 11th & 12th July 2025. Developed a smart recycling solution in a 48-hour hackathon hosted by Infosys.', image: '/assets/images/infosys_hackthon.png', link: 'https://smart-recyle.netlify.app/' },
    { title: 'Image To Text Website', description: 'This Project 10', image: '/assets/images/project10.png', link: 'https://youtu.be/C-tSQfC5huw?si=loKCZs04CWpDi8z5' },
    { title: 'Happy Birthday Gift', description: '', image: '/assets/images/happy_website1.png', link: 'https://lohitsir.netlify.app/' },
    { title: 'UI UX ,To Codeing with ReactJs', description: '', image: '/assets/images/Uiuxtocode.png', link: 'https://ui-ux-degiin-to-codeing-5xa80ovk3.vercel.app/' },
    { title: 'ToDo App with RecteJS and Next.js', description: '', image: '/assets/images/todolistnextjs.png', link: 'https://todo-app-with-react-js-and-next-js-chi.vercel.app/' },
    { title: 'Takes For ReDesign The Company Website By Me, And I Did', description: 'On 31/08/2025', image: '/assets/images/rahul-class-Redigsied-Real_website.png', link: 'https://rahulsir-redesign-by-arshad.netlify.app/' },
    { title: 'Think41 E-Commerce Website', description: 'This was created for An Interview Project', image: '/assets/images/think41-e.png', link: 'https://think41-e-commerce.netlify.app/' },
    { title: 'I created my First Game using Next.js', description: '', image: '/assets/images/first-game.png', link: 'https://first-game-arshad-euge94wgj-arshad-pashas-projects-d7ff6964.vercel.app/' },
    { title: 'Sample Digital Art Website with WhatsApp Integration for Orders', description: 'This is created for Sample Website for Customers', image: '/assets/images/digital-art.png', link: 'https://sample-digital-art.netlify.app/' },
    { title: 'I created a Myntra Clone using JavaScript', description: 'Project 11 on 6/9/2025', image: '/assets/images/myntra-clone.png', link: 'https://arshad-project11.netlify.app/' },
    { title: 'Version 2  | Fully Professional, Responsive Website with Kannada Language Support', description: 'Project 12', image: '/assets/images/rashmi-newv2.png', link: 'https://rashmik.netlify.app/' },
    { title: 'Data Entry Project with UiPath', description: 'Advanced Automation Project  2024/2025', video: 'https://www.youtube.com/embed/MiwuCoPdHPU?si=FCmnvBhWaOC6flsJ', isVideo: true },
    { title: 'KIOSK OS Automatically Library', description: 'Real-time Working System in My College - 2025', video: 'https://www.youtube.com/embed/ztMWIy6vX5k?si=ty4XuA4NLNhwNfVr', isVideo: true }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.title}>My <span className={styles.highlight}>Projects</span></h2>
          <p className={styles.subtitle}>Some of my recent work</p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.isVideo ? (
                <div className={styles.projectVideo}>
                  <iframe width="100%" height="250" src={project.video} title={project.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={styles.videoIframe}></iframe>
                </div>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <div className={styles.projectImage}>
                    <Image src={project.image!} alt={project.title} width={400} height={300} className={styles.cardImage} />
                  </div>
                </a>
              )}
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.description && <p className={styles.projectDescription}>{project.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
