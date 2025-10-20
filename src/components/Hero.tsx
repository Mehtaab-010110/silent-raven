"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-raven-black overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-fade-in"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Main Content - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl">
          
          {/* Main Headline */}
          <div className="mb-6 sm:mb-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-2 sm:mb-3 fade-in-1"
              style={{ 
                color: '#f3f3f3',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)'
              }}
            >
              Silence Hunts
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none glitch-text urban-drones-reveal glitch-active"
            >
              <span style={{animationDelay: '0.6s'}}>U</span>
              <span style={{animationDelay: '0.9s'}}>r</span>
              <span style={{animationDelay: '0.7s'}}>b</span>
              <span style={{animationDelay: '0.8s'}}>a</span>
              <span style={{animationDelay: '1.0s'}}>n</span>
              <span style={{animationDelay: '0.75s'}}>&nbsp;</span>
              <span style={{animationDelay: '0.85s'}}>D</span>
              <span style={{animationDelay: '0.65s'}}>r</span>
              <span style={{animationDelay: '0.95s'}}>o</span>
              <span style={{animationDelay: '1.1s'}}>n</span>
              <span style={{animationDelay: '0.6s'}}>e</span>
              <span style={{animationDelay: '1.2s'}}>s</span>
            </h1>
          </div>

          {/* Supporting Text */}
          <div className="max-w-2xl fade-in-3 px-2 sm:px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-semibold" style={{ color: '#808080' }}>
              Advanced RF detection technology optimized for urban deployment.
              <br className="hidden sm:block" />
              <span className="sm:inline"> </span>
              We adapt proven international systems and test them in real Canadian
              urban environments, tackling{' '}
              <span 
                className="font-bold"
                style={{ color: '#f3f3f3' }}
              >
                practical deployment challenges.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        className="absolute flex flex-col items-center text-gray-400 z-40 fade-in-scroll cursor-pointer transition-all duration-300 hover:scale-110 group"
        style={{
          bottom: '8vh',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        onClick={() => {
          const missionSection = document.getElementById('mission-section');
          if (missionSection) {
            missionSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
        aria-label="Scroll to mission statement"
      >
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-white to-transparent mb-2 group-hover:via-gray-300 transition-colors duration-300"></div>
        <div
          className="text-xl sm:text-2xl font-light text-white group-hover:text-gray-300 transition-colors duration-300"
          style={{
            animation: 'bounce 2s ease-in-out infinite'
          }}
        >
          ↓
        </div>
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-fade-in {
          opacity: 0;
        }

        .fade-in-1,
        .fade-in-3,
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-scroll {
          transform: translateX(-50%) translateY(30px);
        }

        .urban-drones-reveal span {
          opacity: 0;
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

        @keyframes backgroundFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInScroll {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .bg-fade-in {
          animation: backgroundFadeIn 3s ease-out 0.5s both;
        }

        .fade-in-1 {
          animation: fadeInUp 1.2s ease-out 0.3s both;
        }

        .fade-in-3 {
          animation: fadeInUp 1.2s ease-out 0.9s both;
        }

        .fade-in-scroll {
          animation: fadeInScroll 1.0s ease-out 1.5s both;
        }

        .urban-drones-reveal span {
          display: inline-block;
          opacity: 0;
          animation: letterReveal 0.3s ease-out both;
        }

        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(15px) scale(0.9) skewX(3deg);
            filter: brightness(1.3) contrast(1.3);
            text-shadow: 
              -1px 0 0 rgba(255, 255, 255, 0.4),
              1px 0 0 rgba(128, 128, 128, 0.4);
          }
          25% {
            opacity: 0.7;
            transform: translateY(8px) scale(0.95) skewX(-1deg);
            filter: brightness(1.2) contrast(1.2);
            text-shadow: 
              -0.5px 0 0 rgba(255, 255, 255, 0.3),
              0.5px 0 0 rgba(128, 128, 128, 0.3);
          }
          50% {
            opacity: 0.9;
            transform: translateY(3px) scale(1.02) skewX(1deg);
            filter: brightness(1.1) contrast(1.1);
            text-shadow: 
              -0.5px 0 0 rgba(255, 255, 255, 0.2),
              0.5px 0 0 rgba(128, 128, 128, 0.2);
          }
          75% {
            opacity: 0.95;
            transform: translateY(1px) scale(0.99) skewX(-0.5deg);
            filter: brightness(1.05) contrast(1.05);
            text-shadow: 
              -0.2px 0 0 rgba(255, 255, 255, 0.1),
              0.2px 0 0 rgba(128, 128, 128, 0.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) skewX(0deg);
            filter: brightness(1) contrast(1);
            text-shadow: none;
          }
        }

        @keyframes irregularGlitch {
          0%, 12%, 25%, 40%, 55%, 70%, 85%, 100% {
            transform: translate(0);
            filter: none;
          }
          2% { transform: translate(-2px, 0); }
          4% { transform: translate(2px, -1px); }
          6% { transform: translate(-1px, 1px); }
          14% { transform: translate(-2px, 1px); }
          16% { transform: translate(1px, -2px); }
          27% { transform: translate(2px, 0); }
          29% { transform: translate(0, -2px); }
          42% { transform: translate(-1px, -1px); }
          44% { transform: translate(1px, 2px); }
          57% { transform: translate(-2px, 0); }
          59% { transform: translate(2px, 1px); }
          72% { transform: translate(1px, -1px); }
          74% { transform: translate(-1px, 2px); }
          87% { transform: translate(0, 1px); }
          89% { transform: translate(-2px, -1px); }
        }

        @keyframes enhancedChromatic {
          0%, 80%, 100% {
            text-shadow: 
              0 0 10px rgba(243, 243, 243, 0.2),
              0 0 20px rgba(255, 255, 255, 0.1);
          }
          3%, 7%, 12%, 18% {
            text-shadow: 
              -2px 0 0 rgba(255, 255, 255, 0.4),
              2px 0 0 rgba(128, 128, 128, 0.4),
              0 0 15px rgba(243, 243, 243, 0.25);
          }
          20%, 25%, 30% {
            text-shadow: 
              1px 0 0 rgba(255, 255, 255, 0.35),
              -1px 0 0 rgba(128, 128, 128, 0.35),
              0 0 18px rgba(243, 243, 243, 0.25);
          }
          60%, 65%, 70% {
            text-shadow: 
              -1.5px 0 0 rgba(255, 255, 255, 0.5),
              1.5px 0 0 rgba(128, 128, 128, 0.5),
              0 0 20px rgba(243, 243, 243, 0.25);
          }
        }

        @keyframes noticeableFlicker {
          0%, 88%, 92%, 96%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          89% { opacity: 0.6; filter: brightness(1.3) contrast(1.4); }
          90% { opacity: 0.8; filter: brightness(0.7) contrast(1.2); }
          91% { opacity: 0.9; filter: brightness(1.1) contrast(0.9); }
          93% { opacity: 0.7; filter: brightness(1.2) contrast(1.3); }
          94% { opacity: 0.85; filter: brightness(0.8) contrast(1.1); }
          95% { opacity: 0.95; filter: brightness(1.05) contrast(1.05); }
          97% { opacity: 0.75; filter: brightness(1.25) contrast(1.35); }
          98% { opacity: 0.9; filter: brightness(0.9) contrast(1.15); }
          99% { opacity: 0.95; filter: brightness(1.1) contrast(1.1); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        .glitch-text {
          position: relative;
          color: #f3f3f3;
          overflow: hidden;
          animation: 
            enhancedChromatic 3.2s infinite linear,
            noticeableFlicker 5.5s infinite linear;
        }

        .glitch-text::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: 1;
          animation: irregularGlitch 4.8s infinite linear;
          opacity: 0.8;
          mask: 
            radial-gradient(ellipse at center, black 60%, transparent 90%),
            linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-composite: intersect;
          -webkit-mask: 
            radial-gradient(ellipse at center, black 60%, transparent 90%),
            linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-composite: source-in;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.08) 2px,
            rgba(255, 255, 255, 0.08) 3px
          );
        }

        .glitch-text::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: 2;
          animation: irregularGlitch 3.7s infinite linear reverse;
          opacity: 0.6;
          mask: 
            radial-gradient(ellipse at center, black 70%, transparent 95%),
            linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
          mask-composite: intersect;
          -webkit-mask: 
            radial-gradient(ellipse at center, black 70%, transparent 95%),
            linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
          -webkit-mask-composite: source-in;
          background: 
            repeating-linear-gradient(
              35deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.04) 1px,
              rgba(255, 255, 255, 0.04) 2px
            ),
            repeating-linear-gradient(
              -35deg,
              transparent,
              transparent 1px,
              rgba(128, 128, 128, 0.03) 1px,
              rgba(128, 128, 128, 0.03) 2px
            );
        }

        .urban-drones-reveal span {
          display: inline-block;
          opacity: 0;
          animation: letterReveal 0.2s ease-out both;
          position: relative;
        }

        .urban-drones-reveal.glitch-active span {
          animation: 
            letterReveal 0.2s ease-out both,
            enhancedChromatic 3.2s infinite linear 1.3s,
            noticeableFlicker 5.5s infinite linear 1.3s;
        }

        .urban-drones-reveal {
          animation-delay: 2.8s;
        }

        .urban-drones-reveal::before,
        .urban-drones-reveal::after {
          animation-delay: 2.8s;
        }

        @media (max-width: 640px) {
          .glitch-text::before,
          .glitch-text::after {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;