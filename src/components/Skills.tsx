'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      color: 'from-blue-600/20 to-blue-800/20',
      borderColor: 'border-blue-500/30',
      shadowColor: 'hover:shadow-blue-500/50',
      skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'VB.NET', 'C#']
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      color: 'from-green-600/20 to-green-800/20',
      borderColor: 'border-green-500/30',
      shadowColor: 'hover:shadow-green-500/50',
      skills: ['ReactJS', 'NextJS', 'HTML', 'CSS', 'Flask', 'Tailwind CSS']
    },
    {
      title: 'Database & Storage',
      icon: '🗄️',
      color: 'from-purple-600/20 to-purple-800/20',
      borderColor: 'border-purple-500/30',
      shadowColor: 'hover:shadow-purple-500/50',
      skills: ['MySQL', 'SQLite', 'JSON']
    },
    {
      title: 'Cloud & AI/ML',
      icon: '☁️',
      color: 'from-yellow-600/20 to-yellow-800/20',
      borderColor: 'border-yellow-500/30',
      shadowColor: 'hover:shadow-yellow-500/50',
      skills: ['Google Cloud Platform', 'Vertex AI', 'Gemini API', 'DeepSeek API', 'OpenRouter']
    },
    {
      title: 'DevOps & Tools',
      icon: '⚙️',
      color: 'from-red-600/20 to-red-800/20',
      borderColor: 'border-red-500/30',
      shadowColor: 'hover:shadow-red-500/50',
      skills: ['Git', 'GitHub', 'GitHub Actions', 'GitLab', 'UiPath RPA']
    },
    {
      title: 'Operating Systems',
      icon: '🖥️',
      color: 'from-cyan-600/20 to-cyan-800/20',
      borderColor: 'border-cyan-500/30',
      shadowColor: 'hover:shadow-cyan-500/50',
      skills: ['Windows', 'Ubuntu', 'Kali Linux', 'Arch Linux', 'Porteus Kiosk']
    },
    {
      title: 'Deployment & Hosting',
      icon: '🚀',
      color: 'from-pink-600/20 to-pink-800/20',
      borderColor: 'border-pink-500/30',
      shadowColor: 'hover:shadow-pink-500/50',
      skills: ['Netlify', 'Render.com', 'Railway', 'InfinityFree', '000webhost']
    },
    {
      title: 'Cybersecurity',
      icon: '🔐',
      color: 'from-orange-600/20 to-orange-800/20',
      borderColor: 'border-orange-500/30',
      shadowColor: 'hover:shadow-orange-500/50',
      skills: ['Kali Linux', 'Ethical Hacking', 'Encryption', 'Steganography']
    }
  ];

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

      if (categoriesRef.current) {
        const cards = categoriesRef.current.querySelectorAll('.skill-category');
        gsap.from(cards, {
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 50,
          stagger: 0.15,
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
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          Technical <span className="text-yellow-400">Skills</span>
        </h2>
        
        <div 
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-category bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg ${category.shadowColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-700/70 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
