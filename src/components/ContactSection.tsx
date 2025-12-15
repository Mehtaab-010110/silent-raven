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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 pb-16 sm:pb-20">
        
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

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto px-4">
          <div className={`contact-container ${hasAnimated ? 'fade-in-4' : ''}`}>
            <div className="space-y-6">
              
              {/* Email */}
              <div className="contact-item">
                <div className="contact-label">Email</div>
                <a 
                  href="mailto:info@altivion.ca"
                  className="contact-value"
                >
                  info@altivion.ca
                </a>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-label">Location</div>
                <div className="contact-value-static">Calgary, Alberta, Canada</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in-1,
        .fade-in-2,
        .fade-in-3,
        .fade-in-4 {
          opacity: 0;
          transform: translateY(30px);
        }

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
        .contact-container:not(.fade-in-4) {
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

        .contact-container {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
        }

        @media (min-width: 640px) {
          .contact-container {
            padding: 3rem;
          }
        }

        .contact-item {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .contact-item:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }

        .contact-label {
          font-size: clamp(0.75rem, 1vw, 0.85rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #666666;
          margin-bottom: 0.5rem;
        }

        .contact-value {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          position: relative;
        }

        .contact-value::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1a1a1a;
          transition: width 0.3s ease;
        }

        .contact-value:hover::after {
          width: 100%;
        }

        .contact-value-static {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          font-weight: 600;
          color: #1a1a1a;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;