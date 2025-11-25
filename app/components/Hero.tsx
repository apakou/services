'use client';

import React from 'react';
import Logo from './Logo';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-black text-white px-6 pt-24 pb-30">
      <div className="container mx-auto text-center">
        <div className="mb-30 flex justify-center">
          <Logo className="scale-[2] opacity-30" />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold mb-6">
          Work with the 4.0
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
          Let&apos;s build a community around your product
        </p>
        <button
          onClick={scrollToBooking}
          className="px-8 py-4 bg-[#0353FF] text-white text-lg font-medium hover:bg-[#0248d9] transition-colors"
        >
          Talk to me
        </button>
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-3 group cursor-default">
            <span className="text-white/50 text-xs font-light tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroll
            </span>
            <div className="relative">
              <svg
                className="w-10 h-10 text-[#0353FF] drop-shadow-[0_0_12px_rgba(3,83,255,0.8)] animate-bounce transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="absolute inset-0 bg-[#0353FF] opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

