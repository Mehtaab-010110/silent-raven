"use client";

import React, { useEffect, useRef, useState } from 'react';

const GifWorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-black relative"
    >
      
      {/* GIF Container */}
      <div className="w-full h-full flex items-center justify-center">
        {isVisible ? (
          <img
            src="/clip.gif"
            alt="Altivion team working on counter-UAS technology"
            className="w-full h-full object-cover"
            style={{
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </div>
      
    </section>
  );
};

export default GifWorkSection;