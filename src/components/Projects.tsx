'use client';

import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management with drag-and-drop functionality.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with beautiful visualizations and forecasts.',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social networking app with real-time messaging and notifications.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations and modern design.',
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      id: 6,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot powered by AI for customer support automation.',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`h-36 sm:h-40 md:h-48 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
