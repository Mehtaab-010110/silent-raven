"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-raven-black overflow-hidden">
      
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:p-8">
        <div className="text-2xl font-black text-white fade-in-nav">
          ALTIVION
        </div>
        
        <button
          className="flex flex-col gap-1.5 w-8 h-6 cursor-pointer group fade-in-menu"
          aria-label="Menu"
        >
          <span className="block w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-hud-aqua-500"></span>
          <span className="block w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-hud-aqua-500"></span>
          <span className="block w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-hud-aqua-500"></span>
        </button>
      </nav>

      {/* Main Content - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Headline */}
          <div className="mb-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-3 fade-in-1"
              style={{ 
                color: '#f3f3f3',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)'
              }}
            >
              Silence Hunts
            </h1>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none glitch-text urban-drones-reveal glitch-active"
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
          <div className="max-w-2xl fade-in-3">
            <p className="text-lg lg:text-xl leading-relaxed font-semibold" style={{ color: '#808080' }}>
              Advanced RF detection technology optimized for urban deployment.<br />
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

      {/* Scroll Indicator - Perfectly Centered */}
      <button 
        className="absolute flex flex-col items-center text-gray-400 z-40 fade-in-scroll cursor-pointer transition-all duration-300 hover:scale-110 group"
        style={{
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%) scale(1.3)',
          transformOrigin: 'center center'
        }}
        onClick={() => {
          const missionSection = document.getElementById('mission-section');
          if (missionSection) {
            missionSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Fallback: scroll to next section
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
        aria-label="Scroll to mission statement"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-hud-aqua-500 to-transparent mb-2 animate-glow-pulse group-hover:via-white transition-colors duration-300"></div>
        <div
          className="text-2xl font-light text-white group-hover:text-hud-aqua-500 transition-colors duration-300"
          style={{
            animation: 'bounce 2s ease-in-out infinite',
            textShadow: '0 0 10px #00ffc6, 0 0 20px #00ffc6, 0 0 30px #00ffc6'
          }}
        >
          ↓
        </div>
      </button>

      {/* Custom Styles */}
      <style jsx>{`
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

        .fade-in-1 {
          animation: fadeInUp 1.2s ease-out 0.3s both;
        }

        .fade-in-2 {
          animation: fadeInUp 1.2s ease-out 0.6s both;
        }

        .fade-in-3 {
          animation: fadeInUp 1.2s ease-out 0.9s both;
        }

        .fade-in-nav {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        .fade-in-menu {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .fade-in-scroll {
          animation: fadeInScroll 1.0s ease-out 1.5s both;
        }

        @keyframes fadeInScroll {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(30px) scale(1.3);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.3);
          }
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
            filter: brightness(1.3) contrast(1.3) hue-rotate(20deg);
            text-shadow: 
              -1px 0 0 rgba(255, 0, 128, 0.4),
              1px 0 0 rgba(0, 255, 198, 0.4);
          }
          25% {
            opacity: 0.7;
            transform: translateY(8px) scale(0.95) skewX(-1deg);
            filter: brightness(1.2) contrast(1.2) hue-rotate(10deg);
            text-shadow: 
              -0.5px 0 0 rgba(255, 0, 128, 0.3),
              0.5px 0 0 rgba(0, 255, 198, 0.3);
          }
          50% {
            opacity: 0.9;
            transform: translateY(3px) scale(1.02) skewX(1deg);
            filter: brightness(1.1) contrast(1.1) hue-rotate(30deg);
            text-shadow: 
              -0.5px 0 0 rgba(255, 0, 128, 0.2),
              0.5px 0 0 rgba(0, 255, 198, 0.2);
          }
          75% {
            opacity: 0.95;
            transform: translateY(1px) scale(0.99) skewX(-0.5deg);
            filter: brightness(1.05) contrast(1.05) hue-rotate(5deg);
            text-shadow: 
              -0.2px 0 0 rgba(255, 0, 128, 0.1),
              0.2px 0 0 rgba(0, 255, 198, 0.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) skewX(0deg);
            filter: brightness(1) contrast(1) hue-rotate(0deg);
            text-shadow: none;
          }
        }

        @keyframes irregularGlitch {
          0%, 12%, 25%, 40%, 55%, 70%, 85%, 100% {
            transform: translate(0);
            filter: none;
          }
          2% {
            transform: translate(-2px, 0);
          }
          4% {
            transform: translate(2px, -1px);
          }
          6% {
            transform: translate(-1px, 1px);
          }
          14% {
            transform: translate(-2px, 1px);
          }
          16% {
            transform: translate(1px, -2px);
          }
          27% {
            transform: translate(2px, 0);
          }
          29% {
            transform: translate(0, -2px);
          }
          42% {
            transform: translate(-1px, -1px);
          }
          44% {
            transform: translate(1px, 2px);
          }
          57% {
            transform: translate(-2px, 0);
          }
          59% {
            transform: translate(2px, 1px);
          }
          72% {
            transform: translate(1px, -1px);
          }
          74% {
            transform: translate(-1px, 2px);
          }
          87% {
            transform: translate(0, 1px);
          }
          89% {
            transform: translate(-2px, -1px);
          }
        }

        @keyframes enhancedChromatic {
          0%, 80%, 100% {
            text-shadow: 
              0 0 10px rgba(243, 243, 243, 0.2),
              0 0 20px rgba(0, 255, 198, 0.1);
          }
          3%, 7%, 12%, 18% {
            text-shadow: 
              -2px 0 0 rgba(255, 0, 128, 0.4),
              2px 0 0 rgba(0, 255, 198, 0.4),
              0 0 15px rgba(243, 243, 243, 0.25);
          }
          20%, 25%, 30% {
            text-shadow: 
              1px 0 0 rgba(255, 0, 128, 0.35),
              -1px 0 0 rgba(0, 255, 198, 0.35),
              0 0 18px rgba(243, 243, 243, 0.25);
          }
          60%, 65%, 70% {
            text-shadow: 
              -1.5px 0 0 rgba(255, 0, 128, 0.5),
              1.5px 0 0 rgba(0, 255, 198, 0.5),
              0 0 20px rgba(243, 243, 243, 0.25);
          }
        }

        @keyframes noticeableFlicker {
          0%, 88%, 92%, 96%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          89% {
            opacity: 0.6;
            filter: brightness(1.3) contrast(1.4);
          }
          90% {
            opacity: 0.8;
            filter: brightness(0.7) contrast(1.2);
          }
          91% {
            opacity: 0.9;
            filter: brightness(1.1) contrast(0.9);
          }
          93% {
            opacity: 0.7;
            filter: brightness(1.2) contrast(1.3);
          }
          94% {
            opacity: 0.85;
            filter: brightness(0.8) contrast(1.1);
          }
          95% {
            opacity: 0.95;
            filter: brightness(1.05) contrast(1.05);
          }
          97% {
            opacity: 0.75;
            filter: brightness(1.25) contrast(1.35);
          }
          98% {
            opacity: 0.9;
            filter: brightness(0.9) contrast(1.15);
          }
          99% {
            opacity: 0.95;
            filter: brightness(1.1) contrast(1.1);
          }
        }

        @keyframes enhancedScanlines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 12px;
          }
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
          animation: irregularGlitch 4.8s infinite linear, enhancedScanlines 0.8s infinite linear;
          opacity: 0.8;
          
          /* Smooth blending with gradient mask */
          mask: 
            radial-gradient(ellipse at center, black 60%, transparent 90%),
            linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-composite: intersect;
          -webkit-mask: 
            radial-gradient(ellipse at center, black 60%, transparent 90%),
            linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-composite: source-in;
          
          /* More visible scanlines */
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
          
          /* Smooth blending with gradient mask */
          mask: 
            radial-gradient(ellipse at center, black 70%, transparent 95%),
            linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
          mask-composite: intersect;
          -webkit-mask: 
            radial-gradient(ellipse at center, black 70%, transparent 95%),
            linear-gradient(90deg, transparent 0%, black 3%, black 97%, transparent 100%);
          -webkit-mask-composite: source-in;
          
          /* Enhanced noise overlay */
          background: 
            repeating-linear-gradient(
              35deg,
              transparent,
              transparent 1px,
              rgba(0, 255, 198, 0.04) 1px,
              rgba(0, 255, 198, 0.04) 2px
            ),
            repeating-linear-gradient(
              -35deg,
              transparent,
              transparent 1px,
              rgba(255, 0, 128, 0.03) 1px,
              rgba(255, 0, 128, 0.03) 2px
            );
        }

        /* Apply glitch effects directly to the letter spans */
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

        /* Delay retro box effects (scanlines/noise) by 1 second later */
        .urban-drones-reveal {
          animation-delay: 2.8s;
        }

        .urban-drones-reveal::before,
        .urban-drones-reveal::after {
          animation-delay: 2.8s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;