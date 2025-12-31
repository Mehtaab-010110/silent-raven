"use client";

import React, { useRef, useEffect, useState } from 'react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      className="bg-black relative overflow-hidden"
      id="contact-section"
    >
      {/* Top Accent Line */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{ top: '19%' }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:pt-48 pb-32 sm:pb-40">
        
        {/* Centered Content */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Section Title */}
          <h2 
            className={`font-bold mb-6 sm:mb-8 ${hasAnimated ? 'fade-in-1' : ''}`}
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}
          >
            Get in Touch
          </h2>

          {/* Description Text */}
          <p 
            className={`mb-12 px-4 ${hasAnimated ? 'fade-in-2' : ''}`}
            style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}
          >
            For technical consultation and field demonstrations of our RF detection systems.
          </p>

          {/* Email Button */}
          <div className={`flex justify-center ${hasAnimated ? 'fade-in-3' : ''}`}>
            <a 
              href="mailto:info@altivion.ca"
              className="email-button group"
            >
              <span className="email-text">info@altivion.ca</span>
              <div className="glow-border"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in-1,
        .fade-in-2,
        .fade-in-3 {
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-1 { 
          animation: fadeInUp 1.0s ease-out 0.2s both; 
        }
        .fade-in-2 { 
          animation: fadeInUp 1.0s ease-out 0.4s both; 
        }
        .fade-in-3 { 
          animation: fadeInUp 1.0s ease-out 0.6s both; 
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Email Button */
        .email-button {
          position: relative;
          display: inline-block;
          padding: 0.9rem 1.8rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .email-text {
          position: relative;
          z-index: 2;
          font-size: clamp(0.9rem, 1.1vw, 1.05rem);
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        /* Glow Border Effect */
        .glow-border {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgb(34, 211, 238),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glow-border::before {
          content: '';
          position: absolute;
          inset: 1px;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
        }

        /* Hover State */
        .email-button:hover {
          box-shadow: 
            0 0 20px rgba(34, 211, 238, 0.3),
            0 0 40px rgba(34, 211, 238, 0.15),
            inset 0 0 20px rgba(34, 211, 238, 0.1);
        }

        .email-button:hover .email-text {
          color: rgb(34, 211, 238);
        }

        .email-button:hover .glow-border {
          opacity: 1;
          animation: borderPulse 1.5s ease-in-out infinite;
        }

        @keyframes borderPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .email-button {
            padding: 0.8rem 1.5rem;
          }
          
          .email-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;