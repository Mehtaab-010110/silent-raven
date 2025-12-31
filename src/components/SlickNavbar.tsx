"use client";

import React, { useState, useEffect } from 'react';

const SlickNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/80 border-b border-white/10' 
          : 'bg-black/95 border-b border-white/5'
      }`}>
        <div className="nav-container">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                className="text-2xl font-black text-white cursor-pointer group bg-transparent border-0 p-0"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                type="button"
              >
                <span className="relative inline-block">
                  ALTIVION
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {/* Product Link */}
                <button
                  onClick={() => scrollToSection('product-section')}
                  className="product-link"
                  type="button"
                >
                  Product
                </button>
                
                {/* Contact Button */}
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="contact-button"
                  type="button"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-btn group flex flex-col justify-center w-8 h-8 cursor-pointer bg-transparent border-0 p-0"
                aria-label="Toggle mobile menu"
                type="button"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden backdrop-blur-md bg-black/90 border-t border-white/10`}>
          <div className="px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('product-section')}
              className="mobile-product-link"
              type="button"
            >
              Product
            </button>
            
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="mobile-contact-button"
              type="button"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style jsx>{`
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding-left: 3rem;
          padding-right: 3rem;
        }

        /* Product Link - Desktop */
        .product-link {
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          background: transparent;
          border: none;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
          outline: none;
        }

        .product-link:hover {
          color: rgba(255, 255, 255, 1);
        }

        .product-link::before {
          content: '';
          position: absolute;
          bottom: -0.25rem;
          left: 0;
          width: 0;
          height: 0.125rem;
          background: linear-gradient(to right, rgb(34, 211, 238), transparent);
          transition: width 0.3s ease;
        }

        .product-link:hover::before {
          width: 100%;
        }

        /* Contact Button - Desktop */
        .contact-button {
          position: relative;
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.25rem;
          padding: 0.5rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          outline: none;
        }

        .contact-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .contact-button:hover {
          border-color: rgba(0, 255, 255, 0.6);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }

        .contact-button:hover::before {
          left: 100%;
        }

        /* Mobile Product Link */
        .mobile-product-link {
          display: block;
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          padding: 0.75rem 0;
          transition: all 0.3s ease;
          outline: none;
        }

        .mobile-product-link:hover {
          color: rgba(0, 255, 255, 0.9);
          transform: translateX(8px);
        }

        /* Mobile Contact Button */
        .mobile-contact-button {
          width: 100%;
          margin-top: 1.5rem;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.4);
          border-radius: 0.25rem;
          color: white;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .mobile-contact-button:hover {
          background: rgba(0, 255, 255, 0.2);
        }

        /* Remove default button styles */
        button {
          -webkit-tap-highlight-color: transparent;
        }

        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-md {
            background-color: rgba(0, 0, 0, 0.8) !important;
          }
        }

        @media (max-width: 1024px) {
          .nav-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default SlickNavbar;