'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const projects = [
    {
      id: 1,
      title: 'Hello World project',
      category: 'opensource',
      description: 'I\'ve built HelloWorld. it is an Open Source project for programming beginners. It consists in providing a program that returns the "Hello World" message in the programming language you know.',
      image: '/hello.png', // Replace with your actual image path
    },
    {
      id: 2,
      title: 'Teaching Open Source',
      category: 'consultation',
      description: 'I\'ve collaborated with l\'Africaine de l\'Architecture to teach their developers how to build an open source project and how to build an autonomous community around it.',
      image: '/woelab.png', // Replace with your actual image path
    },
    {
      id: 3,
      title: 'CHAOSS Education',
      category: 'opensource',
      description: 'I\'ve contributed on the CHAOSS Organization Education project. It\'s a learning board where you can find tutorials about how Open Source concerns.',
      image: '/chaoss.png', // Replace with your actual image path
    },
    {
      id: 4,
      title: 'Open Source Hub project',
      category: 'development',
      description: 'I\'ve built Open Source Hub. It is a web application that allows users to search and explore open source projects on GitHub. It offers filtering by programming language, issue labels, stars, and forks, along with a responsive design and efficient pagination.',
      image: '/osh.png', // Replace with your actual image path
    },
  ];

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'development', label: 'Development' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'consultation', label: 'Consultation' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Some of my achievements
          </h2>
          <p className="text-xl text-white/80">
            Find here some of the most exciting projects on which I&apos;ve worked.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 transition-colors ${
                activeFilter === filter.id
                  ? 'bg-[#0353FF] text-white'
                  : 'bg-gray-900 text-white/70 hover:bg-gray-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 p-6 hover:border-[#0353FF]/50 transition-colors select-none"
            >
              <div className="bg-gray-800 h-30 mb-4 relative overflow-hidden">
                {!imageErrors[project.id] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{project.title}</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-[#0353FF] mb-3">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-[#0353FF] text-white text-lg font-medium hover:bg-[#0248d9] transition-colors"
          >
            Talk to me
          </button>
        </div>
      </div>
    </section>
  );
}

