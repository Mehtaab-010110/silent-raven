"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const CUASVideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight * 0.7 && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      id="cuas-section"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Ottawa.mp4" type="video/mp4" />
      </video>

      {/* Bottom-to-Top Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-[8vh]">
        
        {/* Top Section - Headline & Subheading */}
        <div className="text-center pt-[2vh]">
          
          {/* Main Headline */}
          <h1 
            className={`headline ${hasAnimated ? 'fade-in-1' : ''}`}
          >
            OTTAWA
          </h1>

          {/* Subheading */}
          <p 
            className={`subheading ${hasAnimated ? 'fade-in-2' : ''}`}
          >
            Selected by the <span className="highlight">Government of Canada</span> for National CUAS Evaluation
          </p>
        </div>

        {/* Center - Arrow Button */}
        <div className={`${hasAnimated ? 'fade-in-3' : ''}`}>
          <Link 
            href="/our-story"
            className="arrow-button"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none"
              className="arrow-icon"
            >
              <path 
                d="M5 12h14m-7-7l7 7-7 7" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Bottom - Supporting Text */}
        <div className="text-center max-w-3xl pb-[2vh]">
          <p 
            className={`supporting-text ${hasAnimated ? 'fade-in-4' : ''}`}
          >
            See how an <span className="highlight-text">intensive testing stretch</span> over the week<br />
            challenged our technology and team <span className="highlight-text">to the limits.</span>
          </p>
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Fade Animations */
        .fade-in-1,
        .fade-in-2,
        .fade-in-3,
        .fade-in-4 {
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in-1 { animation: fadeInUp 1.0s ease-out 0.3s both; }
        .fade-in-2 { animation: fadeInUp 1.0s ease-out 0.5s both; }
        .fade-in-3 { animation: fadeInUp 1.0s ease-out 0.7s both; }
        .fade-in-4 { animation: fadeInUp 1.0s ease-out 0.9s both; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Main Headline */
        .headline {
  font-size: clamp(2.2rem, 5.8vw, 5.2rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.02em;
  line-height: 1;
  text-shadow: 
    0 0 30px rgba(255, 255, 255, 0.25),
    0 0 50px rgba(200, 230, 255, 0.15);
  margin-bottom: 0.75rem;
}

        /* Subheading */
        .subheading {
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 600;
          color: #b8b8b8;
          letter-spacing: 0.02em;
          line-height: 1.5;
          max-width: 850px;
          margin: 0 auto;
        }

        .subheading .highlight {
          font-weight: 700;
          color: #ffffff;
        }

        /* Arrow Button */
        :global(.arrow-button) {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.4) 70%, transparent 100%);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        :global(.arrow-icon) {
          position: relative;
          z-index: 2;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hover State */
        :global(.arrow-button:hover) {
          transform: scale(1.1);
          background: linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.1) 100%);
          box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.4),
            0 0 50px rgba(200, 230, 255, 0.25),
            0 4px 25px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        :global(.arrow-button:hover .arrow-icon) {
          transform: translateX(5px);
        }

        /* Active/Click State */
        :global(.arrow-button:active) {
          transform: scale(1.05);
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 2px 12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Supporting Text */
        .supporting-text {
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          font-weight: 600;
          color: #b8b8b8;
          letter-spacing: 0.015em;
          line-height: 1.65;
        }

        .supporting-text .highlight-text {
          font-weight: 700;
          color: #ffffff;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .headline {
            font-size: clamp(2.2rem, 10vw, 3.5rem);
            margin-bottom: 0.5rem;
          }
          
          .subheading {
            font-size: clamp(0.9rem, 3.8vw, 1.1rem);
            padding: 0 1rem;
          }

          :global(.arrow-button) {
            width: 80px;
            height: 80px;
          }

          :global(.arrow-icon) {
            width: 28px;
            height: 28px;
          }

          .supporting-text {
            font-size: clamp(0.9rem, 3.5vw, 1rem);
            padding: 0 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .headline {
            font-size: clamp(1.8rem, 9vw, 2.5rem);
          }

          :global(.arrow-button) {
            width: 70px;
            height: 70px;
          }

          :global(.arrow-icon) {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default CUASVideoSection;