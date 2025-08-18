"use client";

import React from 'react';

const GifWorkSection = () => {
  return (
    <section className="h-screen bg-black relative">
      
      {/* GIF Container */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/Altivion_GIF.gif"
          alt="Altivion team working on counter-UAS technology"
          className="w-full h-full object-cover"
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-4xl px-8">
          <blockquote 
            className="text-center select-none"
            style={{
              fontFamily: 'Georgia, "Times New Roman", Charter, "Bitstream Charter", "Sitka Text", Cambria, serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#ffffff',
              fontWeight: '400',
              letterSpacing: '0.02em',
              lineHeight: '1.7',
              fontStyle: 'normal',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(0, 0, 0, 0.7)'
            }}
          >
            "Canadian cities face growing drone threats, but most counter-UAS solutions are built for overseas military operations, not protecting our communities. We need technology tested in our conditions, not expensive reinvention. Proven detection systems exist - they just need Canadian engineering to work here. See how Altivion is solving this through local testing, and how we can protect our communities together."
          </blockquote>
        </div>
      </div>
      
    </section>
  );
};

export default GifWorkSection;