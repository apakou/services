'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const projects = [
    {
      id: 1,
      title: 'SMEs Digitalization',
      category: 'consultation',
      description: 'I worked with GIZ ProDigiT as a Digitalization Consultant on the WIDU project to support SMEs in their digitalization process.',
      image: '/giz.jpg',
      url: 'https://widu.africa/',
      tags: ['Digitalization', 'Training', 'Change Management']
    },
    {
      id: 2,
      title: 'SMEs Digitalization',
      category: 'consultation',
      description: 'I worked as a Digitalization Consultant as part of a project to support SMEs in their digitalization process.',
      image: '/ccit.jpg',
      url: 'https://www.ccit.tg/',
      tags: ['Digitalization', 'Training', 'Change Management']
    },
    {
      id: 3,
      title: 'Teaching Open Source',
      category: 'consultation',
      description: 'I\'ve collaborated with l\'Africaine de l\'Architecture to teach their developers how to build an open source project and how to build an autonomous community around it.',
      image: '/woelab.png',
      url: '',
      tags: ['Community Building', 'Training', 'Open Source']
    },
    {
      id: 4,
      title: 'EdenFi Smart Wallet',
      category: 'development',
      description: 'The first Africa smart wallet implementing on and offramp easily using USDC.',
      image: '/edenfi.webp',
      url: 'https://edenfi.io/',
      tags: ['Smart Contract', 'ERC-4337', 'ERC-3643', 'Flutter']
    },
    {
      id: 5,
      title: 'Addelink SaaS',
      category: 'development',
      description: 'Addelink is a proven SaaS system for managing daily operations. Our configurable platform allows you to digitize daily tasks, manage and budget projects, approve time entries, manage employee and third-party payroll, and streamline billing.',
      image: '/addelink.png',
      url: 'https://www.addelink.com/',
      tags: ['Laravel', 'Scss', 'Agile']
    },
    {
      id: 6,
      title: 'Recrutech',
      category: 'development',
      description: 'A recruitment platform for tech profiles for companies looking to shorten recruitment processes and gain competitive advantage.',
      image: '/recrutech.png',
      url: 'https://www.recrutech.pro/',
      tags: ['Flutter', 'Bloc', 'Agile']
    },
    {
      id: 7,
      title: 'Hello World project',
      category: 'opensource',
      description: 'I\'ve built HelloWorld. it is an Open Source project for programming beginners. It consists in providing a program that returns the "Hello World" message in the programming language you know.',
      image: '/hello.png',
      url: 'https://helloworld-os.netlify.app/',
      tags: ['Open Source 101', 'Community Building', 'Hacktoberfest']
    },
    {
      id: 8,
      title: 'CHAOSS Education',
      category: 'opensource',
      description: 'I\'ve contributed on the CHAOSS Organization Education project. It\'s a learning board where you can find tutorials about how Open Source concerns.',
      image: '/chaoss.png',
      url: 'https://github.com/chaoss/education',
      tags: ['Open Source', 'Contribution', 'Documentation']
    },
    {
      id: 9,
      title: 'Open Source Hub project',
      category: 'opensource',
      description: 'I\'ve built Open Source Hub. It is a web application that allows users to search and explore open source projects on GitHub. It offers filtering by programming language, issue labels, stars, and forks, along with a responsive design and efficient pagination.',
      image: '/osh.png',
      url: 'https://opensource-hub.netlify.app/',
      tags: ['Open Source 101', 'GitHub API', 'Search']
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
              className={`bg-white/10 p-6 border border-transparent hover:border-[#0353FF]/50 transition-colors select-none ${
                project.url ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (project.url) {
                  window.open(project.url, '_blank', 'noopener,noreferrer');
                }
              }}
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
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-[#0353FF] flex-1">
                  {project.title}
                </h3>
                {project.url && (
                  <svg
                    className="w-5 h-5 text-[#0353FF] ml-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-[#0353FF]/20 text-white border border-[#0353FF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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

