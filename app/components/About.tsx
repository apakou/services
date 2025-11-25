'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [image1Error, setImage1Error] = useState(false);
  const [image4Error, setImage4Error] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-32">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Images */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            {/* Grid 1 - Top Left */}
            <div className="w-32 h-32 relative overflow-hidden bg-gray-800">
              {!image1Error ? (
                <Image
                  src="/image1.jpg"
                  alt="About image 1"
                  fill
                  className="object-cover"
                  onError={() => setImage1Error(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image 1</span>
                </div>
              )}
            </div>
            {/* Empty space for Grid 2 */}
            <div className="w-32 h-32"></div>
            {/* Empty space for Grid 3 */}
            <div className="w-32 h-32"></div>
            {/* Grid 4 - Bottom Right */}
            <div className="w-32 h-32 relative overflow-hidden bg-gray-800">
              {!image4Error ? (
                <Image
                  src="/image2.jpg"
                  alt="About image 4"
                  fill
                  className="object-cover"
                  onError={() => setImage4Error(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image 4</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I&apos;m <span className="text-[#0353FF]">Agnilonda Pakou</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              A Blockchain and Mobile Apps Developer with a hand of experience as Digitalization Advisor, Community Builder and Open Source projects Maintainer.
            </p>
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
      </div>
    </section>
  );
}

