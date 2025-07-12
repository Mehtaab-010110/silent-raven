"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-raven-black overflow-hidden">
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

      {/* Main Content Grid */}
      <div className="absolute inset-0 flex items-center justify-center pt-20" style={{ marginTop: '-4rem' }}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Left Side - 3D Model Placeholder */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-80 h-96 bg-white rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-700">
                <div className="text-lg font-medium mb-2">3d model of</div>
                <div className="text-lg font-medium">the device</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* Main Headline */}
            <div className="mb-6 text-center">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none mb-2"
                style={{ color: '#f3f3f3' }}
              >
                Silence Hunts
              </h1>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none"
                style={{ color: '#f3f3f3' }}
              >
                Urban Drones
              </h1>
            </div>

            {/* Supporting Text */}
            <div className="text-center">
              <p className="text-base lg:text-lg leading-relaxed font-semibold" style={{ color: '#808080' }}>
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
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
      `}</style>
    </div>
  );
};

export default HeroSection;