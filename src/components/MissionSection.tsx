"use client";

import React, { useEffect, useRef } from 'react';

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const section = sectionRef.current;
      const bg = bgRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress when section is in view
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Classic parallax - background moves slower than scroll
      const parallaxSpeed = 0.5; // Adjust this for parallax intensity (0.5 = half speed)
      const scrollOffset = window.pageYOffset;
      const sectionTop = section.offsetTop;
      const parallaxY = (scrollOffset - sectionTop) * parallaxSpeed;

      // Zoom effect based on scroll progress
      const scale = 1 + (scrollProgress * 0.2); // Scale from 1 to 1.2

      // Apply both parallax and zoom transforms
      bg.style.setProperty('--scroll-scale', scale.toString());
      bg.style.setProperty('--parallax-y', `${parallaxY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="mission-section" className="h-[75vh] relative overflow-hidden" style={{backgroundColor: '#202020'}}>
      
      {/* Parallax Background with Scroll Zoom */}
      <div 
        ref={bgRef}
        className="absolute inset-0 parallax-bg scroll-zoom"
        style={{
          backgroundImage: `url('/downtown.jpg')`,
          backgroundSize: '120%', // Larger than container for parallax effect
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content Container - Top Left Positioned */}
      <div className="absolute inset-0 flex items-start justify-start px-12 py-16 lg:px-16 lg:py-20 z-10">
        <div className="max-w-md">
          
          {/* Left-aligned Headlines */}
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-tight uppercase text-left" style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)'}}>
              <span className="block mb-1 fade-in-word" style={{animationDelay: '0.2s'}}>
                Proven Tech.
              </span>
              <span className="block mb-1 fade-in-word" style={{animationDelay: '0.4s'}}>
                Real Testing.
              </span>
              <span className="block fade-in-word" style={{animationDelay: '0.6s'}}>
                Practical Results.
              </span>
            </h2>
          </div>
          
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .fade-in-word {
          animation: fadeInWord 0.6s ease-out both;
        }

        .parallax-bg {
          transform: translateZ(0);
          will-change: transform;
          transition: transform 0.1s ease-out;
        }

        /* Scroll-driven parallax - only moves when scrolling */
        @media (prefers-reduced-motion: no-preference) {
          .parallax-bg {
            transform-origin: center center;
          }
        }

        /* JavaScript controls this via custom properties */
        .scroll-zoom {
          transform: scale(var(--scroll-scale, 1)) translateY(var(--parallax-y, 0px));
        }
      `}</style>
    </section>
  );
};

export default MissionSection;