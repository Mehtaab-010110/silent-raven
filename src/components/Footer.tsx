"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 items-start">
          
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 
              className="text-white font-black text-xl sm:text-2xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              ALTIVION
            </h3>
            <p 
              className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0"
              style={{ lineHeight: '1.6' }}
            >
              Advanced RF detection technology for urban counter-drone operations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="space-y-2">
              <a 
                href="#product-section" 
                className="footer-link block text-gray-400 text-sm hover:text-white transition-colors duration-300"
              >
                Product
              </a>
              <a 
                href="#contact-section" 
                className="footer-link block text-gray-400 text-sm hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
              <a 
                href="#" 
                className="footer-link block text-gray-400 text-sm hover:text-white transition-colors duration-300"
              >
                Documentation
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-medium">Email:</span> info@altivion.ca
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Location:</span> Canada
              </p>
            </div>
            
            {/* CUAS Badge */}
            <div className="flex items-center gap-2 mt-4 sm:mt-6 justify-center sm:justify-start">
              <div className="w-4 h-px bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
              <span 
                className="text-cyan-400/70 font-medium text-xs tracking-wider"
              >
                CUAS SANDBOX 2025
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center">
            
            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              © 2025 Altivion Technologies. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a 
                href="#" 
                className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .footer-link {
          position: relative;
          display: inline-block;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 255, 255, 0.6), transparent);
          transition: width 0.3s ease;
        }

        .footer-link:hover::before {
          width: 100%;
        }

        @media (max-width: 640px) {
          .footer-link::before {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;