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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/80 border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                className="text-2xl font-black text-white cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="relative">
                  ALTIVION
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300 group-hover:w-full"></div>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <NavLink 
                  onClick={() => scrollToSection('product-section')}
                  text="Product"
                />
                <NavLink 
                  onClick={() => scrollToSection('mission-section')}
                  text="Mission"
                />
                <NavLink 
                  onClick={() => scrollToSection('contact-section')}
                  text="Contact"
                />
                
                {/* CTA Button */}
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="cta-button group relative px-6 py-2 text-sm font-semibold text-white border border-white/20 rounded transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <span className="relative z-10">REQUEST DEMO</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-btn group flex flex-col justify-center w-8 h-8 cursor-pointer"
                aria-label="Toggle mobile menu"
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
            <MobileNavLink 
              onClick={() => scrollToSection('product-section')}
              text="Product"
            />
            <MobileNavLink 
              onClick={() => scrollToSection('mission-section')}
              text="Mission"
            />
            <MobileNavLink 
              onClick={() => scrollToSection('contact-section')}
              text="Contact"
            />
            
            {/* Mobile CTA */}
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="w-full mt-6 px-6 py-3 text-sm font-semibold text-white border border-cyan-400/40 rounded bg-cyan-400/10 transition-all duration-300 hover:bg-cyan-400/20"
            >
              REQUEST DEMO
            </button>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style jsx>{`
        .container {
          max-width: 1200px;
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 255, 255, 0.8), transparent);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-nav-link {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link:hover {
          color: rgba(0, 255, 255, 0.9);
          transform: translateX(8px);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-md {
            background-color: rgba(0, 0, 0, 0.8) !important;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

// Desktop Nav Link Component
const NavLink = ({ onClick, text }: { onClick: () => void; text: string }) => (
  <div 
    onClick={onClick}
    className="nav-link"
  >
    {text}
  </div>
);

// Mobile Nav Link Component  
const MobileNavLink = ({ onClick, text }: { onClick: () => void; text: string }) => (
  <div 
    onClick={onClick}
    className="mobile-nav-link"
  >
    {text}
  </div>
);

export default SlickNavbar;