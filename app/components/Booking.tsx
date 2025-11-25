'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Booking() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="calendly"]');
      const existingLink = document.querySelector('link[href*="calendly"]');
      if (existingScript) {
        existingScript.remove();
      }
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  // TODO: Replace 'your-username' with your actual Calendly username
  // Get your Calendly URL from: https://calendly.com/your-username
  const CALENDLY_URL = 'https://calendly.com/your-username';

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
      });
    }
  };

  return (
    <section id="booking" className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Now, let&apos;s collaborate
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Book a one on one call and let&apos;s talk about our next collab.
          </p>
          <button
            onClick={openCalendly}
            className="px-8 py-4 bg-[#0353FF] text-white text-lg font-medium hover:bg-[#0248d9] transition-colors"
          >
            Book a call
          </button>
        </div>

        {/* Calendly Inline Widget */}
        <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: '320px', height: '700px' }}>
          <div className="text-center text-white/50 py-20">
            <p>Loading calendar...</p>
            <p className="text-sm mt-2">If the calendar doesn&apos;t load, please click the &quot;Book a call&quot; button above.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

