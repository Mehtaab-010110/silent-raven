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
      className="bg-white relative overflow-hidden"
      id="contact-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-16 sm:pb-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className={`section-title font-bold mb-6 sm:mb-8 ${hasAnimated ? 'fade-in-1' : ''}`}
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
              lineHeight: '0.95'
            }}
          >
            Get in Touch
          </h2>
          <div className={`animated-line mx-auto ${hasAnimated ? 'fade-in-2' : ''}`}></div>
          <p 
            className={`section-description mt-4 sm:mt-6 px-4 ${hasAnimated ? 'fade-in-3' : ''}`}
            style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              color: '#666666',
              maxWidth: '700px',
              margin: '1.5rem auto 0'
            }}
          >
            Ready to deploy proven RF detection technology in your urban environment? Contact our team for <span className="text-black font-semibold">technical consultation</span> and field demonstrations.
          </p>
        </div>

        {/* Centered Demo Section */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="demo-section">
            <div className={`demo-container ${hasAnimated ? 'fade-in-4' : ''}`}>
              <h3 
                className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4"
                style={{ letterSpacing: '0.02em' }}
              >
                REQUEST DEMO
              </h3>
              
              <p className="demo-description">
                Experience our RF detection technology in action. Schedule a field demonstration 
                in your urban environment to see practical deployment results.
              </p>

              <button 
                className="demo-btn group"
                onClick={() => {
                  console.log('Demo request submitted');
                }}
              >
                <span>SCHEDULE DEMO</span>
                <div className="demo-btn-icon">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className="transition-all duration-300 group-hover:scale-110"
                  >
                    <path 
                      d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in-1 { 
          animation: fadeInUp 1.0s ease-out 0.2s both; 
        }
        .fade-in-2 { 
          animation: fadeInUp 1.0s ease-out 0.4s both, lineExpand 1.5s ease-out 0.8s both; 
        }
        .fade-in-3 { 
          animation: fadeInUp 1.0s ease-out 0.6s both; 
        }
        .fade-in-4 { 
          animation: fadeInUp 1.0s ease-out 0.8s both; 
        }

        .section-title:not(.fade-in-1),
        .animated-line:not(.fade-in-2),
        .section-description:not(.fade-in-3),
        .demo-container:not(.fade-in-4) {
          opacity: 0;
          transform: translateY(30px);
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

        @keyframes lineExpand {
          from {
            width: 30px;
          }
          to {
            width: 180px;
          }
        }

        .animated-line {
          height: 1px;
          width: 30px;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.8), transparent);
          position: relative;
        }

        .demo-container {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        @media (min-width: 640px) {
          .demo-container {
            padding: 2rem;
          }
        }

        .demo-description {
          color: #666666;
          font-size: clamp(0.85rem, 1.2vw, 0.95rem);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .demo-description {
            margin-bottom: 2rem;
          }
        }

        .demo-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          background: transparent;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 2px;
          color: #1a1a1a;
          font-weight: 600;
          font-size: clamp(0.8rem, 1.2vw, 0.9rem);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        @media (min-width: 640px) {
          .demo-btn {
            padding: 1rem 1.5rem;
          }
        }

        .demo-btn:hover {
          border-color: rgba(0, 0, 0, 0.4);
          background: rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;