"use client";

import React from 'react';

const RadarBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      
      {/* Radar Screen */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[100vmin] h-[100vmin] rounded-full">
          
          {/* Concentric Circles */}
          <div className="absolute inset-0 rounded-full border border-aqua-500 opacity-30"></div>
          <div className="absolute inset-[15%] rounded-full border border-aqua-500 opacity-25"></div>
          <div className="absolute inset-[30%] rounded-full border border-aqua-500 opacity-20"></div>
          <div className="absolute inset-[45%] rounded-full border border-aqua-500 opacity-15"></div>
          
          {/* Cross Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-aqua-500 opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-aqua-500 opacity-20 transform -translate-x-1/2"></div>
          
          {/* Radar Sweep with Fade Effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Fading Sweep Area - illuminated sector that fades */}
            <div 
              className="absolute top-1/2 left-1/2 w-1/2 h-1/2 radar-sector"
              style={{
                background: 'conic-gradient(from 0deg, rgba(0, 255, 198, 0.1) 0deg, rgba(0, 255, 198, 0.05) 20deg, transparent 40deg)',
                transformOrigin: '0% 100%',
                clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)'
              }}
            ></div>
            
            {/* Main Sweep Line */}
            <div 
              className="absolute top-1/2 left-1/2 w-1/2 h-px radar-sweep"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 255, 198, 0.8) 0%, rgba(0, 255, 198, 0.3) 70%, transparent 100%)',
                transformOrigin: '0% 50%'
              }}
            ></div>
          </div>
          
          {/* Radar Blips */}
          <div className="blip blip-1" style={{top: '25%', left: '35%'}}></div>
          <div className="blip blip-2" style={{top: '60%', left: '70%'}}></div>
          <div className="blip blip-3" style={{top: '40%', left: '80%'}}></div>
          <div className="blip blip-4" style={{top: '75%', left: '25%'}}></div>
          <div className="blip blip-5" style={{top: '20%', left: '65%'}}></div>
          
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .radar-sweep {
          animation: radarSweep 4s linear infinite;
        }

        .radar-sector {
          animation: radarSweep 4s linear infinite;
        }

        @keyframes radarSweep {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .blip {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #00ffc6;
          border-radius: 50%;
          animation: blipPulse 3s ease-in-out infinite;
        }

        .blip-1 {
          animation-delay: 0s;
        }

        .blip-2 {
          animation-delay: 0.6s;
        }

        .blip-3 {
          animation-delay: 1.2s;
        }

        .blip-4 {
          animation-delay: 1.8s;
        }

        .blip-5 {
          animation-delay: 2.4s;
        }

        @keyframes blipPulse {
          0%, 70%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          10%, 60% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 10px #00ffc6, 0 0 20px #00ffc6;
          }
          30% {
            opacity: 0.8;
            transform: scale(1.2);
            box-shadow: 0 0 15px #00ffc6, 0 0 30px #00ffc6;
          }
        }

        /* Tailwind custom classes */
        .border-aqua-500 {
          border-color: #00ffc6;
        }

        .bg-aqua-500 {
          background-color: #00ffc6;
        }
      `}</style>
    </div>
  );
};

export default RadarBackground;