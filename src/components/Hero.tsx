"use client";

import React from 'react';
import { SparklesCore } from './ui/sparkles';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-raven-black overflow-hidden">
      {/* Energy Ribbon Background - Full Coverage with Ultra-Dense, Ultra-Slow Flow */}
      <div className="absolute inset-0 z-10">
        {/* Far Left Dense Zone - Full Screen Height */}
        <div className="absolute left-0 top-0 w-[12%] h-[100%]">
          <SparklesCore
            id="hero-energy-far-left"
            background="transparent"
            minSize={0.4}
            maxSize={1.5}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.15}
          />
        </div>
        
        {/* Left Zone - Slight Curve Inward */}
        <div className="absolute left-[10%] top-[8%] w-[12%] h-[84%]">
          <SparklesCore
            id="hero-energy-left"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={450}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.12}
          />
        </div>
        
        {/* Left-Mid Zone - More Curve */}
        <div className="absolute left-[20%] top-[18%] w-[10%] h-[64%]">
          <SparklesCore
            id="hero-energy-left-mid"
            background="transparent"
            minSize={0.3}
            maxSize={1.2}
            particleDensity={380}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.1}
          />
        </div>
        
        {/* Left-Center Zone - Strong Curve */}
        <div className="absolute left-[28%] top-[28%] w-[10%] h-[44%]">
          <SparklesCore
            id="hero-energy-left-center"
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={300}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.08}
          />
        </div>
        
        {/* Pre-Center Zone - Deep Curve */}
        <div className="absolute left-[36%] top-[36%] w-[8%] h-[28%]">
          <SparklesCore
            id="hero-energy-pre-center"
            background="transparent"
            minSize={0.2}
            maxSize={0.8}
            particleDensity={200}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.06}
          />
        </div>
        
        {/* Center Zone - Narrowest Horizontal Band */}
        <div className="absolute left-[42%] top-[46%] w-[16%] h-[8%]">
          <SparklesCore
            id="hero-energy-center"
            background="transparent"
            minSize={0.2}
            maxSize={0.6}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.05}
          />
        </div>
        
        {/* Post-Center Zone - Expanding Curve */}
        <div className="absolute left-[56%] top-[36%] w-[8%] h-[28%]">
          <SparklesCore
            id="hero-energy-post-center"
            background="transparent"
            minSize={0.2}
            maxSize={0.8}
            particleDensity={200}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.06}
          />
        </div>
        
        {/* Right-Center Zone - Expanding */}
        <div className="absolute left-[62%] top-[28%] w-[10%] h-[44%]">
          <SparklesCore
            id="hero-energy-right-center"
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={300}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.08}
          />
        </div>
        
        {/* Right-Mid Zone - Less Curve */}
        <div className="absolute left-[70%] top-[18%] w-[10%] h-[64%]">
          <SparklesCore
            id="hero-energy-right-mid"
            background="transparent"
            minSize={0.3}
            maxSize={1.2}
            particleDensity={380}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.1}
          />
        </div>
        
        {/* Right Zone - Returning to Full */}
        <div className="absolute left-[78%] top-[8%] w-[12%] h-[84%]">
          <SparklesCore
            id="hero-energy-right"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={450}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.12}
          />
        </div>
        
        {/* Far Right Dense Zone - Full Screen Height */}
        <div className="absolute right-0 top-0 w-[12%] h-[100%]">
          <SparklesCore
            id="hero-energy-far-right"
            background="transparent"
            minSize={0.4}
            maxSize={1.5}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.15}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:p-8">
        <div className="text-2xl font-black text-white">
          ALTIVION
        </div>
        
        <button
          className="flex flex-col gap-1.5 w-8 h-6 cursor-pointer group"
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
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none mb-3 glitch-text fade-in-1"
            >
              Silence Hunts
            </h1>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none glitch-text fade-in-2"
            >
              Urban Drones
            </h1>
          </div>

          {/* Supporting Text */}
          <div className="max-w-2xl fade-in-3">
            <p className="text-lg lg:text-xl leading-relaxed font-semibold" style={{ color: '#808080' }}>
              The all-new Silent Raven delivers unmatched<br />
              detection power in an impossibly compact,<br />
              field-ready design. The first RF system to<br />
              achieve{' '}
              <span 
                className="font-bold"
                style={{ color: '#FFFFFF' }}
              >
                zero acoustic signature
              </span>.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 z-40">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-hud-aqua-500 to-transparent mb-2 animate-glow-pulse"></div>
        <div
          className="text-2xl font-light text-white"
          style={{
            animation: 'bounce 2s ease-in-out infinite',
            textShadow: '0 0 10px #00ffc6, 0 0 20px #00ffc6, 0 0 30px #00ffc6'
          }}
        >
          ↓
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
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

        .fade-in-1 {
          animation: fadeInUp 1.2s ease-out 0.3s both;
        }

        .fade-in-2 {
          animation: fadeInUp 1.2s ease-out 0.6s both;
        }

        .fade-in-3 {
          animation: fadeInUp 1.2s ease-out 0.9s both;
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

        .glitch-text {
          position: relative;
          color: #f3f3f3;
          overflow: hidden;
        }

        .glitch-text:nth-of-type(1) {
          animation: 
            enhancedChromatic 3.8s infinite linear,
            noticeableFlicker 6.2s infinite linear;
        }

        .glitch-text:nth-of-type(2) {
          animation: 
            enhancedChromatic 3.2s infinite linear,
            noticeableFlicker 5.5s infinite linear;
        }

        .glitch-text:nth-of-type(1)::before {
          content: 'Silence Hunts';
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          color: #e8e8e8;
          z-index: 1;
          animation: irregularGlitch 4.8s infinite linear;
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
          animation: irregularGlitch 5.3s infinite linear, enhancedScanlines 0.9s infinite linear;
        }

        .glitch-text:nth-of-type(1)::after {
          content: 'Silence Hunts';
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          color: #f0f0f0;
          z-index: 2;
          animation: irregularGlitch 4.1s infinite linear reverse;
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

        .glitch-text:nth-of-type(2)::before {
          content: 'Urban Drones';
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          color: #e8e8e8;
          z-index: 1;
          animation: irregularGlitch 4.8s infinite linear;
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
          animation: irregularGlitch 4.8s infinite linear, enhancedScanlines 0.8s infinite linear;
        }

        .glitch-text:nth-of-type(2)::after {
          content: 'Urban Drones';
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          color: #f0f0f0;
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
      `}</style>
    </div>
  );
};

export default HeroSection;