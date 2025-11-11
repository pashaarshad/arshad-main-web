'use client';

import React from 'react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      position: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and optimize existing code. Improved page load times by 40%.',
      duration: 'Jan 2024 - Mar 2024',
      skills: ['React', 'TypeScript', 'CSS']
    },
    {
      id: 2,
      position: 'Full Stack Developer Intern',
      company: 'StartUp Innovations',
      description: 'Built RESTful APIs using Node.js and Express. Integrated third-party services and implemented authentication systems. Worked on database design and optimization.',
      duration: 'Apr 2024 - Jun 2024',
      skills: ['Node.js', 'MongoDB', 'Express']
    },
    {
      id: 3,
      position: 'Software Engineering Intern',
      company: 'Global Tech Corp',
      description: 'Participated in agile development processes and daily stand-ups. Contributed to microservices architecture and implemented automated testing. Mentored junior interns.',
      duration: 'Jul 2024 - Sep 2024',
      skills: ['Python', 'Docker', 'AWS']
    }
  ];

  return (
    <section 
      id="internships" 
      className="min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Internships
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {internships.map((internship, index) => (
            <div 
              key={internship.id} 
              className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {internship.position}
                  </h3>
                  <p className="text-base sm:text-lg text-blue-600 font-semibold">
                    {internship.company}
                  </p>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 font-medium bg-gray-200 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {internship.duration}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                {internship.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full font-medium"
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

export default Internships;
