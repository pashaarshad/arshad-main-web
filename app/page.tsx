import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Internships from '../components/Internships';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Internships />
      <Contact />
      <Footer />
    </>
  );
}
  