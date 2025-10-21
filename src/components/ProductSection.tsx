"use client";

import React, { useEffect, useRef, useState } from 'react';

const ProductPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight * 0.6 && !hasAnimated) {
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
      className="min-h-screen bg-black relative overflow-hidden py-8 md:py-0"
      id="product-section"
    >
      {/* Subtle accent elements */}
      <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-gradient-to-l from-transparent via-cyan-400/15 to-transparent"></div>

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-6 md:py-0">
          
          {/* Bold Headline */}
          <h1 
            className={`headline font-black text-white mb-4 sm:mb-6 md:mb-8 ${hasAnimated ? 'animate-in-1' : ''}`}
            style={{
              fontSize: 'clamp(2rem, 8vw, 5.5rem)',
              lineHeight: '0.95',
              letterSpacing: '-0.03em'
            }}
          >
            Silent. Precise.<br/>
            Undetected.
          </h1>
          
          {/* Body Text */}
          <div className={`body-text mb-4 sm:mb-6 md:mb-12 ${hasAnimated ? 'animate-in-2' : ''}`}>
            <p 
              className="text-gray-300 leading-relaxed"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.4rem)',
                lineHeight: '1.6'
              }}
            >
              Built for urban environments where detection requires precision.<br/>
              Selected for Canada&apos;s CUAS Sandbox 2025 testing program.<br/>
              Engineered to deliver uncompromising performance when it matters.
            </p>
          </div>

          {/* CUAS Badge */}
          <div className={`cuas-badge mb-6 md:mb-12 flex items-center gap-3 ${hasAnimated ? 'animate-in-3' : ''}`}>
            <div className="w-6 h-px bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
            <span 
              className="text-cyan-400/70 font-medium tracking-wider"
              style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)' }}
            >
              CUAS SANDBOX 2025 • OTTAWA
            </span>
          </div>

          {/* Three-Column Feature Grid - Horizontal on mobile */}
          <div className={`features-grid grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${hasAnimated ? 'animate-in-4' : ''}`}>
            
            {/* Feature 1 */}
            <div className="feature-item text-center md:text-left">
              <div 
                className="stat font-black text-white mb-1 sm:mb-2"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                5km
              </div>
              <div 
                className="subtitle text-gray-400 font-light"
                style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                  letterSpacing: '0.05em',
                  lineHeight: '1.3'
                }}
              >
                Detection Range<br/>
                Urban Environments
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-item text-center md:text-left">
              <div 
                className="stat font-black text-white mb-1 sm:mb-2"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                &lt;3min
              </div>
              <div 
                className="subtitle text-gray-400 font-light"
                style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                  letterSpacing: '0.05em',
                  lineHeight: '1.3'
                }}
              >
                Rapid Deployment<br/>
                Setup Time
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-item text-center md:text-left">
              <div 
                className="stat font-black text-white mb-1 sm:mb-2"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                50+
              </div>
              <div 
                className="subtitle text-gray-400 font-light"
                style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                  letterSpacing: '0.05em',
                  lineHeight: '1.3'
                }}
              >
                Simultaneous Swarm<br/>
                Detection
              </div>
            </div>
          </div>
        </div>

        {/* Right Device Area */}
        <div className="w-full md:w-1/2 relative flex items-center md:items-end justify-center mt-4 md:mt-0 pb-4 md:pb-0">
          
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-cyan-400/3 via-transparent to-transparent"></div>
          
          {/* Device Image */}
          <div className={`device-container relative ${hasAnimated ? 'animate-in-5' : ''}`}>
            <img 
              src="/Device.png" 
              alt="SilentRaven RF Detection Device"
              className="w-auto h-auto object-contain mx-auto filter drop-shadow-2xl"
              style={{
                height: 'clamp(300px, 60vh, 80vh)',
                maxWidth: '90vw',
                filter: 'drop-shadow(0 0 40px rgba(0, 255, 255, 0.1))'
              }}
            />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        .headline {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .stat {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        .feature-item {
          transition: all 0.3s ease;
          padding: 0.75rem;
          border-radius: 4px;
          border: 1px solid transparent;
        }

        .feature-item:hover {
          border-color: rgba(0, 255, 255, 0.1);
          background: rgba(0, 255, 255, 0.02);
        }

        .feature-item:hover .stat {
          text-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        }

        .feature-item:hover .subtitle {
          color: rgba(0, 255, 255, 0.6);
        }

        .device-container {
          transition: transform 0.6s ease;
          position: relative;
        }

        .device-container::before {
          content: '';
          position: absolute;
          inset: -10px;
          z-index: -1;
          border-radius: 15px;
          background: radial-gradient(ellipse 70% 45% at center 40%, 
            rgba(0, 255, 255, 0.12) 0%, 
            rgba(0, 255, 255, 0.08) 25%, 
            rgba(0, 255, 255, 0.04) 50%, 
            rgba(0, 255, 255, 0.01) 70%, 
            transparent 80%);
          filter: blur(12px);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .device-container:hover {
          transform: scale(1.02);
        }

        .device-container:hover::before {
          opacity: 1;
        }

        .headline:not(.animate-in-1),
        .body-text:not(.animate-in-2),
        .cuas-badge:not(.animate-in-3),
        .features-grid:not(.animate-in-4),
        .device-container:not(.animate-in-5) {
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-in-1 {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-in-2 {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .animate-in-3 {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .animate-in-4 {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .animate-in-5 {
          animation: fadeInUp 1s ease-out 0.8s both;
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

        @media (max-width: 768px) {
          .feature-item {
            padding: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductPage;