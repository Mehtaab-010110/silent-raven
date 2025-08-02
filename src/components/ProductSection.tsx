"use client";

import React from 'react';
import Image from 'next/image';

const ProductSection = () => {
  return (
    <section className="h-screen relative overflow-hidden" style={{backgroundColor: '#DCDCDC'}}>
      
      {/* Main Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full h-full">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
            
            {/* Left Side - Product Image */}
            <div className="flex items-center justify-center fade-in-left">
              <div className="relative w-full max-w-md h-96 lg:h-[500px]">
                <Image
                  src="/public/ProductPhoto.png"
                  alt="Silent Raven Counter-UAS Detection System"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="flex flex-col justify-center fade-in-right">
              
              {/* Heading */}
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
                style={{color: '#202020'}}
              >
                Heading
              </h2>
              
              {/* Body Text */}
              <p 
                className="text-lg lg:text-xl leading-relaxed font-medium"
                style={{color: '#202020'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco
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