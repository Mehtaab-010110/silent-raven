"use client";

import React, { useState, useEffect, useRef } from 'react';

const GifWorkSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const originalText = 'MAKING IT WORK';
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    let iteration = 0;
    
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          if (letter === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.innerText = originalText;
      }
      
      iteration += 1/2;
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-black">
      
      {/* GIF Content Area - Ready for your clips */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* This is where your GIF clips will go */}
        <div className="w-full h-full flex items-center justify-center">
          {/* Placeholder for GIF content */}
          <div className="text-gray-600 text-lg">
            {/* GIF content will be added here */}
          </div>
        </div>
      </div>

      {/* Text positioned in bottom right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <h3 
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-none"
          style={{ 
            color: '#f3f3f3',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)',
            letterSpacing: '-0.02em'
          }}
        >
          
        </h3>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scramble-text {
          letter-spacing: 0.02em;
          transition: letter-spacing 0.3s ease;
        }

        .scramble-text:hover {
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
};

export default GifWorkSection;