"use client";

import React from 'react';

const MissionSection = () => {
  return (
    <section id="mission-section" className="h-[50vh] relative overflow-hidden" style={{backgroundColor: '#DCDCDC'}}>
      
      {/* Content Container - Centered within the half-height section */}
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Half - Headlines */}
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight" style={{color: '#202020'}}>
                <span className="block mb-1 fade-in-word" style={{animationDelay: '0.2s'}}>
                  Proven Tech.
                </span>
                <span className="block mb-1 fade-in-word glow-text" style={{animationDelay: '0.6s'}}>
                  Real Testing.
                </span>
                <span className="block fade-in-word" style={{animationDelay: '1.0s'}}>
                  Practical Results.
                </span>
              </h2>
            </div>
            
            {/* Right Half - Body Text */}
            <div className="flex flex-col justify-center">
              {/* Divider Line */}
              <div className="w-20 h-px bg-hud-aqua-500 mb-8 fade-in-up" style={{animationDelay: '1.4s'}}></div>
              
              {/* Body Text - Matching Landing Page Style */}
              <p className="text-lg lg:text-xl leading-relaxed font-semibold fade-in-up" style={{color: '#202020', animationDelay: '1.8s'}}>
                To deliver counter-UAS detection systems that perform in<br />
                <span className="font-bold" style={{color: '#202020'}}>real urban environments</span>{' '}
                through practical adaptation and<br />
                rigorous field testing.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #202020 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #202020 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
          backgroundPosition: '0 0, 60px 60px'
        }}></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .fade-in-word {
          animation: fadeInWord 0.6s ease-out both;
        }

        .glow-text {
          color: #00cc9d;
          text-shadow: 
            0 0 8px rgba(0, 255, 198, 0.25),
            0 0 16px rgba(0, 255, 198, 0.15),
            0 0 24px rgba(0, 255, 198, 0.1);
        }
      `}</style>
    </section>
  );
};

export default MissionSection;