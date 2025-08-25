"use client";

import React, { useEffect, useRef, useState } from 'react';

const ProductPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(true);

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
      className="min-h-screen bg-black relative overflow-hidden"
      id="product-section"
    >
      {/* Subtle aquatic accent elements */}
      <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-gradient-to-l from-transparent via-cyan-400/15 to-transparent"></div>

      <div className="relative z-10 h-screen flex">
        
        {/* Left Content Area */}
        <div className="w-1/2 flex flex-col justify-center px-12 lg:px-16">
          
          {/* Bold Futuristic Headline */}
          <h1 
            className="headline font-black text-white mb-8"
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              lineHeight: '0.9',
              letterSpacing: '-0.03em'
            }}
          >
            Silent. Precise.<br/>
            Undetected.
          </h1>
          
          {/* Concise Body Text */}
          <div className="body-text mb-8">
            <p 
              className="text-gray-300 leading-relaxed"
              style={{
                fontSize: 'clamp(1.1rem, 1.3vw, 1.4rem)',
                lineHeight: '1.6'
              }}
            >
              Built for urban environments where detection requires precision.<br/>
              Selected for Canada's CUAS Sandbox 2025 testing program.<br/>
              Engineered to deliver uncompromising performance when it matters most.
            </p>
          </div>

          {/* CUAS Badge */}
          <div className="mb-12 flex items-center gap-3">
            <div className="w-6 h-px bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
            <span 
              className="text-cyan-400/70 font-medium tracking-wider"
              style={{ fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)' }}
            >
              CUAS SANDBOX 2025 • OTTAWA
            </span>
          </div>

          {/* Three-Column Feature Grid */}
          <div className="features-grid grid grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="feature-item">
              <div 
                className="stat font-black text-white mb-2"
                style={{
                  fontSize: 'clamp(1.8rem, 2.2vw, 2.4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                5km
              </div>
              <div 
                className="subtitle text-gray-400 font-light"
                style={{
                  fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
                  letterSpacing: '0.05em'
                }}
              >
                Detection Range<br/>
                Urban Environments
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-item">
              <div 
                className="stat font-black text-white mb-2"
                style={{
                  fontSize: 'clamp(1.8rem, 2.2vw, 2.4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                &lt;3min
              </div>
              <div 
                className="subtitle text-gray-400 font-light"
                style={{
                  fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
                  letterSpacing: '0.05em'
                }}
              >
                Rapid Deployment<br/>
                Setup Time
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-item">
              <div 
                className="stat font-black text-white mb-2"
                style={{
                  fontSize: 'clamp(1.8rem, 2.2vw, 2.4rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                50+
              </div>
              <div 
                className="subtitle text-gray-400 font-light"
                style={{
                  fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
                  letterSpacing: '0.05em'
                }}
              >
                Simultaneous Swarm<br/>
                Detection
              </div>
            </div>
          </div>
        </div>

        {/* Right Device Area */}
        <div className="w-1/2 relative flex items-end justify-center">
          
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-cyan-400/3 via-transparent to-transparent"></div>
          
          {/* Device Image */}
          <div className="device-container relative">
            <img 
              src="/Device.png" 
              alt="SilentRaven RF Detection Device"
              className="w-auto object-contain object-bottom filter drop-shadow-2xl"
              style={{
                height: '80vh',
                filter: 'drop-shadow(0 0 40px rgba(0, 255, 255, 0.1))'
              }}
            />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Radial gradient utility */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        /* Typography refinements */
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

        /* Hover effects for features */
        .feature-item {
          transition: all 0.3s ease;
          padding: 1rem;
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

        /* Device hover effect */
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

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .grid {
            gap: 1.5rem;
          }
          
          .feature-item {
            padding: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .headline {
            font-size: clamp(2rem, 8vw, 3rem) !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .stat {
            font-size: clamp(2rem, 4vw, 2.5rem) !important;
          }
          
          /* Stack layout on mobile */
          .flex {
            flex-direction: column;
          }
          
          .w-1\\/2 {
            width: 100%;
          }
          
          .h-screen {
            height: auto;
            min-height: 100vh;
            padding: 3rem 0;
          }
          
          .justify-center {
            padding: 2rem 1.5rem;
          }
        }

        /* Animation enhancements */
        .headline,
        .body-text,
        .features-grid,
        .device-container {
          animation: fadeInUp 1s ease-out both;
        }

        .body-text {
          animation-delay: 0.2s;
        }

        .features-grid {
          animation-delay: 0.4s;
        }

        .device-container {
          animation-delay: 0.6s;
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
      `}</style>
    </section>
  );
};

export default ProductPage;