'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(summaryRef.current, {
        scrollTrigger: {
          trigger: summaryRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.about-card');
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 text-center"
        >
          About <span className="text-yellow-400">Me</span>
        </h2>
        
        <div 
          ref={summaryRef}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-12 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Professional Summary</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Motivated Full Stack Web Developer with expertise in <span className="text-blue-400 font-semibold">Front-end</span> and <span className="text-blue-400 font-semibold">Back-end</span> development 
            using ReactJS, NextJS, and MySQL, along with strong skills in Automation and cybersecurity. 
            Experienced in delivering <span className="text-yellow-400 font-semibold">10+ real-world projects</span>, including UiPath-powered 
            RPA workflows, expert use of GitHub and GitLab for version control, and secure applications with 
            Encryption and Ethical hacking practices. Certified in <span className="text-green-400 font-semibold">Google Cloud</span>, 
            <span className="text-green-400 font-semibold"> Infosys Springboard</span>, and <span className="text-green-400 font-semibold">Oracle Cloud</span>, 
            with practical exposure to Vertex AI, API integration, and data-driven solutions.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="about-card bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-semibold text-blue-400">BCA - 9.2 CGPA</p>
                <p className="text-sm">Seshadripuram Degree College</p>
                <p className="text-xs text-gray-400">2023 - 2026</p>
              </div>
              <div>
                <p className="font-semibold text-blue-400">PU - 81.50%</p>
                <p className="text-sm">St. Joseph's Composite PU College</p>
                <p className="text-xs text-gray-400">2021 - 2023</p>
              </div>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="about-card bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-yellow-500/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Leadership</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">★</span>
                <span>Education Vice-Captain – PU College</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">★</span>
                <span>Class Representative – Degree College</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">★</span>
                <span>Open-Source Contributor: SSOC</span>
              </li>
            </ul>
          </div>

          {/* Awards Card */}
          <div className="about-card bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-500/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Awards</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">🏆</span>
                <span>1st Prize – Inter-College Website Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">🏆</span>
                <span>2nd Prize – PU Level Web Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">🏆</span>
                <span>Infosys Global Hackathon Participant</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
