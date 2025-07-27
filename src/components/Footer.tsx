"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="md:col-span-2 fade-in-up">
            <h3 
              className="text-3xl font-black mb-4"
              style={{color: '#f3f3f3'}}
            >
              ALTIVION
            </h3>
            <p className="text-lg mb-6 max-w-md" style={{color: '#808080'}}>
              Advanced counter-UAS detection systems.<br />
              Built for the field. Proven in action.
            </p>
            <div className="flex space-x-8">
              <a 
                href="mailto:info@altivion.com"
                className="text-lg hover:text-aqua transition-colors"
                style={{color: '#808080'}}
              >
                info@altivion.com
              </a>
              <a 
                href="mailto:defense@altivion.com"
                className="text-lg hover:text-aqua transition-colors"
                style={{color: '#808080'}}
              >
                defense@altivion.com
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-bold mb-6" style={{color: '#f3f3f3'}}>
              Navigation
            </h4>
            <nav className="space-y-3">
              <a 
                href="#home"
                className="block text-lg hover:text-aqua transition-colors"
                style={{color: '#808080'}}
              >
                Home
              </a>
              <a 
                href="#mission"
                className="block text-lg hover:text-aqua transition-colors"
                style={{color: '#808080'}}
              >
                Mission
              </a>
              <a 
                href="#product"
                className="block text-lg hover:text-aqua transition-colors"
                style={{color: '#808080'}}
              >
                Product
              </a>
              <a 
                href="#contact"
                className="block text-lg hover:text-aqua transition-colors"
                style={{color: '#808080'}}
              >
                Contact
              </a>
            </nav>
          </div>
          
          {/* Product */}
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="text-lg font-bold mb-6" style={{color: '#f3f3f3'}}>
              Silent Raven
            </h4>
            <div className="space-y-3">
              <p className="text-lg" style={{color: '#808080'}}>
                Counter-UAS Detection
              </p>
              <p className="text-lg" style={{color: '#808080'}}>
                RF Analysis System
              </p>
              <p className="text-lg" style={{color: '#808080'}}>
                Zero Acoustic Signature
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-lg" style={{color: '#808080'}}>
              © 2025 Altivion Technologies. All rights reserved.
            </p>
            
            {/* Location */}
            <div className="flex items-center space-x-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{backgroundColor: '#00ffc6'}}
              ></div>
              <p className="text-lg" style={{color: '#808080'}}>
                Calgary, Alberta, Canada
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00ffc6 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #00ffc6 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
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

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }

        .hover\\:text-aqua:hover {
          color: #00ffc6 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;