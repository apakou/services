'use client';

import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'As a Developer',
      highlight: 'Developer',
      description: 'As a developer, I will help you to idealize and develop your Mobile Apps and your Web3 full stack dApps.',
    },
    {
      title: 'As an Open Source project Maintainer',
      highlight: 'Open Source project Maintainer',
      description: 'As an Open Source project maintainer, I will teach you how to create a community around your Open Source solution',
    },
    {
      title: 'As an Digitalization Consultant',
      highlight: 'Digitalization Consultant',
      description: 'As a Digitalization Consultant, I will help you to build a digitalization strategy and stay with you till the end of the process.',
    },
  ];

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[#0353FF]">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How can we collaborate ?
          </h2>
          <p className="text-xl text-white/80">
            Find here, fields, where you and I can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 hover:border-[#0353FF]/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">
                {highlightText(service.title, service.highlight)}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
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

