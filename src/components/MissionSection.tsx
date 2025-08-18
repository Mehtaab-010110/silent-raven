"use client";

import React, { useEffect, useRef, useState } from 'react';

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current || !textRef.current) return;

      const section = sectionRef.current;
      const bg = bgRef.current;
      const text = textRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in view (when top of section hits 80% of viewport)
      const isInView = rect.top <= windowHeight * 0.8;

      // Trigger animation only once when section comes into view
      if (isInView && !hasAnimated) {
        setHasAnimated(true);
        
        // Add animation classes
        bg.classList.add('animate-in');
        text.classList.add('animate-in');
      }

      // Only continue with scroll effects if section has been animated
      if (!hasAnimated) return;

      // Calculate scroll progress (0 when section enters, 1 when section exits)
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Background zoom: 120% → 100% (reverse scale for zoom out effect)
      const bgScale = 1.2 - (scrollProgress * 0.2);
      
      // Parallax: reveal image from bottom to top
      const parallaxY = scrollProgress * 20; // Subtle upward movement
      
      // Text scale: 100% → 120%
      const textScale = 1 + (scrollProgress * 0.2);

      // Apply background transform
      bg.style.transform = `scale(${bgScale}) translateY(${parallaxY}px)`;
      
      // Apply text transform
      text.style.transform = `scale(${textScale})`;
    };

    // Use throttled scroll for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', onScroll);
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef} 
      id="mission-section" 
      className="h-[70vh] relative overflow-hidden"
    >
      
      {/* Full-screen Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-fade-in"
        style={{
          backgroundImage: `url('/downtown.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          backfaceVisibility: 'hidden' // Prevent flicker
        }}
      />
      
      {/* Centered Text Block */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div 
          ref={textRef}
          className="text-center text-fade-in"
          style={{
            willChange: 'transform',
            transformOrigin: 'center center'
          }}
        >
          <h2 
            className="font-black leading-none uppercase select-none"
            style={{
              fontSize: 'clamp(1.2rem, 3.2vw, 2.4rem)',
              color: '#000000',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3), 0 0 8px rgba(255, 255, 255, 0.2)',
              fontWeight: '900',
              letterSpacing: '0.02em'
            }}
          >
            <span className="block fade-in-word" style={{letterSpacing: '-0.05em'}}>
              PRACTICAL RESULTS.
            </span>
          </h2>
          
          {/* Additional subtitle */}
          <p 
            className="fade-in-subtitle mt-2 select-none"
            style={{
              fontSize: 'clamp(0.7rem, 1.4vw, 1rem)',
              color: '#333333',
              fontWeight: '600',
              letterSpacing: '0.05em',
              lineHeight: '1.4'
            }}
          >
            Robust field testing throughout Canada's <br /> <span style={{fontWeight: '800'}}>real urban environments</span>.
          </p>
        </div>
      </div>
      
      {/* Learn More Link */}
      <div className="absolute bottom-8 right-8 z-20">
        <a 
          href="#next-section" 
          className="learn-more-link group flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 ease-in-out"
        >
          <span className="text-sm font-light tracking-wide uppercase">Learn More</span>
          <div className="arrow-container">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="arrow-icon transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            >
              <path 
                d="M5 12h14m-7-7l7 7-7 7" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        /* Initial states - hidden */
        .bg-fade-in {
          opacity: 0;
          transform: scale(1.1) translateY(30px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .text-fade-in {
          opacity: 0;
        }

        .fade-in-word {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-subtitle {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        /* Animated states */
        .bg-fade-in.animate-in {
          opacity: 1;
          transform: scale(1.2) translateY(0);
        }

        .text-fade-in.animate-in {
          opacity: 1;
        }

        .text-fade-in.animate-in .fade-in-word {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s; /* Delay text after background */
        }

        .text-fade-in.animate-in .fade-in-subtitle {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.7s; /* Delay subtitle after main title */
        }

        /* Learn More Link Styles */
        .learn-more-link {
          position: relative;
          padding: 12px 16px;
          border-radius: 2px;
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .learn-more-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          transition: all 0.4s ease-in-out;
          transform: translateX(-50%);
        }

        .learn-more-link:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .learn-more-link:hover::before {
          width: 100%;
        }

        .arrow-container {
          width: 20px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .learn-more-link {
            bottom: 20px !important;
            right: 20px !important;
            padding: 10px 14px;
          }
          
          .learn-more-link span {
            font-size: 0.75rem;
          }
        }

        /* Performance optimizations */
        section {
          transform: translateZ(0);
        }

        /* Responsive font sizing */
        @media (max-width: 640px) {
          h2 {
            font-size: clamp(1rem, 4.5vw, 1.6rem) !important;
          }
          
          .fade-in-subtitle {
            font-size: clamp(0.6rem, 2vw, 0.8rem) !important;
          }
        }

        @media (min-width: 1024px) {
          h2 {
            font-size: clamp(1.6rem, 3.2vw, 3.2rem) !important;
          }
          
          .fade-in-subtitle {
            font-size: clamp(0.8rem, 1.4vw, 1.1rem) !important;
          }
        }

        /* Prevent text selection flickering during animations */
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default MissionSection;