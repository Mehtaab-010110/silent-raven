"use client";

import React from 'react';

const ProductSection = () => {
  return (
    <section className="h-screen relative overflow-hidden" style={{backgroundColor: '#F3F3F3'}}>
      
      {/* Main Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full h-full">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
            
            {/* Left Side - 3D Model Placeholder */}
            <div className="flex items-center justify-center">
              <div 
                className="w-full max-w-md h-96 lg:h-[500px] flex items-center justify-center fade-in-left"
                style={{backgroundColor: '#4A4A4A'}}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  3d model
                </h3>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="flex flex-col justify-center fade-in-right">
              <h2 
                className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight mb-8"
                style={{color: '#202020'}}
              >
                Silent Raven
              </h2>
              <p
                className="text-lg lg:text-xl leading-relaxed font-medium"
                style={{color: '#202020'}}
              >
                Handheld RF-based drone detection device providing 2-3km detection range
                in urban environments.The 580g portable unit features real-time UAV tracking,
                pilot location identification, and multi-drone monitoring across 70MHz-6GHz
                spectrum with 4+ hour battery life and touchscreen interface.
              </p>
              
            </div>
            
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out 0.3s both;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
};
export default ProductSection;