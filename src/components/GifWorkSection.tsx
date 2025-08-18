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
      
    </section>
  );
};

export default GifWorkSection;