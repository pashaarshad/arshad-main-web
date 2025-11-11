'use client';

import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'HTML/CSS',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker'
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
