"use client";

import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
      id="about-section"
    >
      {/* Subtle accent elements */}
      <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-cyan-400/20 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        
        {/* Hero Statement */}
        <div className={`mb-20 sm:mb-32 ${hasAnimated ? 'fade-in-1' : ''}`}>
          <div className="max-w-4xl">
            <h2 
              className="text-white font-black mb-6 sm:mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              About Altivion
            </h2>
            <p 
              className="text-gray-300 leading-relaxed mb-6"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                lineHeight: '1.7'
              }}
            >
              We bridge the gap between proven international counter-drone technology and the unique challenges of Canadian urban environments.
            </p>
          </div>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20 sm:mb-32">
          
          {/* Left: Image */}
          <div className={`${hasAnimated ? 'fade-in-2' : ''}`}>
            <div className="relative h-[400px] sm:h-[500px] bg-gradient-to-br from-cyan-400/5 to-transparent rounded-sm overflow-hidden">
              <img 
                src="/urban-testing.jpg" 
                alt="Urban environment testing"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 border border-cyan-400/20"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`flex flex-col justify-center ${hasAnimated ? 'fade-in-3' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
              <span className="text-cyan-400/70 font-medium text-sm tracking-wider uppercase">
                Our Approach
              </span>
            </div>
            
            <h3 
              className="text-white font-bold mb-6"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.01em'
              }}
            >
              Real-World Validation
            </h3>
            
            <p 
              className="text-gray-400 mb-6"
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                lineHeight: '1.7'
              }}
            >
              Rather than developing untested solutions from scratch, we take a pragmatic approach: adapting battle-proven RF detection systems from international partners and rigorously testing them in Canada's diverse urban landscapes.
            </p>

            <p 
              className="text-gray-400"
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                lineHeight: '1.7'
              }}
            >
              From downtown high-rises to industrial complexes, we ensure our systems deliver reliable performance where it matters most—in the complex electromagnetic environments of real cities.
            </p>
          </div>
        </div>

        {/* Team/Values Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Content */}
          <div className={`flex flex-col justify-center order-2 md:order-1 ${hasAnimated ? 'fade-in-4' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-cyan-400/60 to-transparent"></div>
              <span className="text-cyan-400/70 font-medium text-sm tracking-wider uppercase">
                Our Team
              </span>
            </div>
            
            <h3 
              className="text-white font-bold mb-6"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.01em'
              }}
            >
              Expertise That Matters
            </h3>
            
            <p 
              className="text-gray-400 mb-6"
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                lineHeight: '1.7'
              }}
            >
              Our team combines deep RF engineering expertise with practical field experience. We understand that theoretical performance means nothing if a system can't be deployed rapidly in real-world conditions.
            </p>

            <p 
              className="text-gray-400"
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                lineHeight: '1.7'
              }}
            >
              Every decision we make—from system selection to deployment protocols—is driven by one question: Will this work when it matters?
            </p>
          </div>

          {/* Right: Image */}
          <div className={`order-1 md:order-2 ${hasAnimated ? 'fade-in-5' : ''}`}>
            <div className="relative h-[400px] sm:h-[500px] bg-gradient-to-bl from-cyan-400/5 to-transparent rounded-sm overflow-hidden">
              <img 
                src="/team-testing.jpg" 
                alt="Team conducting field tests"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 border border-cyan-400/20"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .fade-in-1,
        .fade-in-2,
        .fade-in-3,
        .fade-in-4,
        .fade-in-5 {
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-1 {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .fade-in-2 {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .fade-in-3 {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .fade-in-4 {
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        .fade-in-5 {
          animation: fadeInUp 1s ease-out 0.6s both;
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

export default AboutSection;