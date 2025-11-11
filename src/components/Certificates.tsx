'use client';

import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      organization: 'Coursera',
      date: 'January 2024',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'React Advanced Patterns',
      organization: 'Udemy',
      date: 'February 2024',
      icon: '⚛️'
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: 'March 2024',
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Python Programming',
      organization: 'Google',
      date: 'April 2024',
      icon: '🐍'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      organization: 'Adobe',
      date: 'May 2024',
      icon: '🎨'
    },
    {
      id: 6,
      title: 'Data Structures & Algorithms',
      organization: 'MIT OpenCourseWare',
      date: 'June 2024',
      icon: '💻'
    }
  ];

  return (
    <section 
      id="certificates" 
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{cert.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2 font-medium">
                {cert.organization}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
