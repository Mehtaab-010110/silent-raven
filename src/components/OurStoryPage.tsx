"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/SlickNavbar';
import Footer from '@/components/Footer';

const OurStoryPage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [metricsAnimated, setMetricsAnimated] = useState(false);
  const [mapAnimated, setMapAnimated] = useState(false);
  const [proofAnimated, setProofAnimated] = useState(false);
  const metricsRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLElement>(null);
  const proofRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!metricsRef.current || metricsAnimated) return;
      
      const rect = metricsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight * 0.8) {
        setMetricsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [metricsAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      if (!mapRef.current || mapAnimated) return;
      
      const rect = mapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight * 0.7) {
        setMapAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mapAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      if (!proofRef.current || proofAnimated) return;
      
      const rect = proofRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight * 0.7) {
        setProofAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [proofAnimated]);

  return (
    <div style={{ background: '#e3e3e3' }}>

      {/* NAVBAR */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="hero-merged">
        
        {/* Background Image Container */}
        <div className="image-container">
          <div 
            className={`background-image ${hasLoaded ? 'bg-fade-in' : ''}`}
            style={{
              backgroundImage: `url('/ottawa.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient Overlays */}
            <div className="gradient-top"></div>
            <div className="gradient-bottom"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="content-wrapper">
          
          {/* Top Left - Main Heading */}
          <div className={`top-content ${hasLoaded ? 'fade-in-1' : ''}`}>
            <h1 className="main-heading">
              Five Days in <span style={{ fontWeight: 700 }}>Ottawa</span>
            </h1>
            <p className="date-subheading">November 24–28, 2025</p>
          </div>

          {/* Bottom Right - CUAS Button */}
          <div className={`bottom-right ${hasLoaded ? 'fade-in-2' : ''}`}>
            <a 
              href="https://www.canada.ca/en/department-national-defence/programs/defence-ideas/element/sandboxes/challenge/counter-uncrewed-aerial-systems-sandbox-2025.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cuas-button"
            >
              CUAS 2025
            </a>
          </div>

        </div>

      </section>

      {/* SECTION 2: METRICS */}
      <section ref={metricsRef} className="metrics-section">
        <div className="metrics-container">
          
          <div className={`metric ${metricsAnimated ? 'metric-fade-1' : ''}`}>
            <div className="metric-value">90-100%</div>
            <div className="metric-label">Detection Accuracy</div>
          </div>

          <div className="metric-divider"></div>

          <div className={`metric ${metricsAnimated ? 'metric-fade-2' : ''}`}>
            <div className="metric-value">1.2 KM</div>
            <div className="metric-label">Out of Line of Sight</div>
          </div>

          <div className="metric-divider"></div>

          <div className={`metric ${metricsAnimated ? 'metric-fade-3' : ''}`}>
            <div className="metric-value">600M</div>
            <div className="metric-label">Urban Detection Range</div>
          </div>

        </div>
      </section>

      {/* SECTION 3: MAP VISUALIZATION */}
      <section ref={mapRef} className="map-section">
        <div className="map-content">
          
          {/* Intro Text */}
          <p className={`map-intro ${mapAnimated ? 'intro-fade' : ''}`}>
            Real-world validation across downtown Ottawa
          </p>

          {/* Cyan Divider */}
          <div className={`cyan-divider ${mapAnimated ? 'divider-fade' : ''}`}></div>

          {/* City Map */}
          <div className={`map-container ${mapAnimated ? 'map-drop' : ''}`}>
            <svg viewBox="0 0 1200 700" className="city-map" xmlns="http://www.w3.org/2000/svg">
              
              {/* City Streets Grid */}
              <g className="streets" opacity="0.4">
                {/* Horizontal streets */}
                <line x1="0" y1="100" x2="1200" y2="100" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="0" y1="180" x2="1200" y2="180" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="0" y1="260" x2="1200" y2="260" stroke="#ffffff" strokeWidth="1"/>
                <line x1="0" y1="340" x2="1200" y2="340" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="0" y1="420" x2="1200" y2="420" stroke="#ffffff" strokeWidth="1"/>
                <line x1="0" y1="500" x2="1200" y2="500" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="0" y1="580" x2="1200" y2="580" stroke="#ffffff" strokeWidth="0.5"/>
                
                {/* Vertical streets */}
                <line x1="150" y1="0" x2="150" y2="700" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="300" y1="0" x2="300" y2="700" stroke="#ffffff" strokeWidth="1"/>
                <line x1="450" y1="0" x2="450" y2="700" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="600" y1="0" x2="600" y2="700" stroke="#ffffff" strokeWidth="1"/>
                <line x1="750" y1="0" x2="750" y2="700" stroke="#ffffff" strokeWidth="0.5"/>
                <line x1="900" y1="0" x2="900" y2="700" stroke="#ffffff" strokeWidth="1"/>
                <line x1="1050" y1="0" x2="1050" y2="700" stroke="#ffffff" strokeWidth="0.5"/>
              </g>

              {/* Building Blocks */}
              <g className="buildings" opacity="0.2">
                <rect x="50" y="50" width="80" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="170" y="120" width="100" height="80" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="320" y="40" width="90" height="120" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="470" y="100" width="80" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="620" y="60" width="100" height="140" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="770" y="90" width="90" height="110" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="920" y="50" width="100" height="130" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                
                <rect x="80" y="280" width="90" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="200" y="300" width="80" height="90" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="350" y="270" width="70" height="120" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="490" y="290" width="90" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="640" y="280" width="80" height="110" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="790" y="300" width="90" height="90" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="940" y="270" width="100" height="120" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                
                <rect x="60" y="450" width="80" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="180" y="470" width="90" height="80" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="330" y="460" width="80" height="90" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="480" y="450" width="90" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="630" y="470" width="80" height="80" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="780" y="460" width="90" height="90" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="930" y="450" width="100" height="100" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
              </g>

              {/* Detector (Cyan Pulsing Circle) */}
              <g className="detector">
                <circle cx="600" cy="350" r="12" fill="#22D3EE" opacity="0.8"/>
                <circle cx="600" cy="350" r="12" fill="none" stroke="#22D3EE" strokeWidth="2" opacity="0.6">
                  <animate attributeName="r" from="12" to="40" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="600" y="385" fill="#22D3EE" fontSize="10" textAnchor="middle" fontWeight="600">SilentRaven</text>
              </g>

              {/* Drones (Small Triangles) */}
              <g className="drones">
                <polygon points="250,150 245,160 255,160" fill="#ff4444" opacity="0.9"/>
                <polygon points="450,200 445,210 455,210" fill="#ff4444" opacity="0.9"/>
                <polygon points="800,120 795,130 805,130" fill="#ff4444" opacity="0.9"/>
                <polygon points="350,400 345,410 355,410" fill="#ff4444" opacity="0.9"/>
                <polygon points="750,450 745,460 755,460" fill="#ff4444" opacity="0.9"/>
                <polygon points="950,300 945,310 955,310" fill="#ff4444" opacity="0.9"/>
                <polygon points="150,520 145,530 155,530" fill="#ff4444" opacity="0.9"/>
              </g>

              {/* Detection Lines */}
              <g className="detection-lines" stroke="#22D3EE" strokeWidth="1" opacity="0.3">
                <line x1="600" y1="350" x2="250" y2="155" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
                <line x1="600" y1="350" x2="450" y2="205" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
                <line x1="600" y1="350" x2="800" y2="125" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
                <line x1="600" y1="350" x2="350" y2="405" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
                <line x1="600" y1="350" x2="750" y2="455" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
                <line x1="600" y1="350" x2="950" y2="305" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
                <line x1="600" y1="350" x2="150" y2="525" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
                </line>
              </g>

              {/* Pilot Locations (Small Circles) */}
              <g className="pilots">
                <circle cx="220" cy="180" r="6" fill="#ffffff" opacity="0.7"/>
                <circle cx="480" cy="230" r="6" fill="#ffffff" opacity="0.7"/>
                <circle cx="850" cy="140" r="6" fill="#ffffff" opacity="0.7"/>
                <circle cx="320" cy="430" r="6" fill="#ffffff" opacity="0.7"/>
                <circle cx="780" cy="480" r="6" fill="#ffffff" opacity="0.7"/>
                <circle cx="980" cy="320" r="6" fill="#ffffff" opacity="0.7"/>
                <circle cx="120" cy="550" r="6" fill="#ffffff" opacity="0.7"/>
              </g>

            </svg>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHAT WE PROVED */}
      <section ref={proofRef} className="proof-section">
        <div className="proof-content">
          
          {/* Big Bold Heading */}
          <h2 className={`proof-heading ${proofAnimated ? 'proof-heading-fade' : ''}`}>
            VALIDATED<br />URBAN<br />DETECTION
          </h2>

          {/* Small Label */}
          <p className={`proof-label ${proofAnimated ? 'proof-label-fade' : ''}`}>
            Capabilities
          </p>

          {/* Proof Grid */}
          <div className="proof-grid">
            
            <div className={`proof-card ${proofAnimated ? 'proof-fade-1' : ''}`}>
              <h3 className="proof-title">TAK Integration</h3>
              <p className="proof-description">
                Seamless COT XML compatibility with government tactical systems. Real-time data sharing with military command and control platforms.
              </p>
            </div>

            <div className={`proof-card ${proofAnimated ? 'proof-fade-2' : ''}`}>
              <h3 className="proof-title">Handheld Portability</h3>
              <p className="proof-description">
                3-4 hour battery life with tactical flexibility praised by operators. Rapid deployment without infrastructure requirements.
              </p>
            </div>

            <div className={`proof-card ${proofAnimated ? 'proof-fade-3' : ''}`}>
              <h3 className="proof-title">Remote-ID Detection</h3>
              <p className="proof-description">
                Passive RF monitoring at range with no emissions for covert operation. Detects compliant drones without revealing detector position.
              </p>
            </div>

            <div className={`proof-card ${proofAnimated ? 'proof-fade-4' : ''}`}>
              <h3 className="proof-title">Urban Performance</h3>
              <p className="proof-description">
                Below rooftop level detection in dense city environments. 100% score in urban point defense with validated 600m range.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* STYLES */}
      <style jsx>{`
        /* SECTION 1: HERO */
        .hero-merged {
          position: relative;
          width: 100%;
          height: 88vh;
          overflow: hidden;
          padding-top: 64px; /* Account for fixed navbar height */
        }

        .image-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .background-image {
          width: 100%;
          height: 100%;
          position: relative;
          opacity: 0;
          transition: opacity 1.5s ease-out;
        }

        .bg-fade-in {
          opacity: 1;
        }

        .gradient-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 35%;
          background: linear-gradient(to bottom, 
            rgba(227, 227, 227, 0.85) 0%, 
            rgba(227, 227, 227, 0.4) 50%,
            transparent 100%
          );
        }

        .gradient-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, 
            rgba(0, 0, 0, 1) 0%, 
            transparent 100%
          );
        }

        .content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .top-content {
          padding-top: 2rem;
          max-width: 600px;
          opacity: 0;
          transform: translateY(20px);
        }

        .main-heading {
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin-bottom: 0.75rem;
        }

        .date-subheading {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          font-weight: 500;
          color: #4a4a4a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .bottom-right {
          display: flex;
          justify-content: flex-end;
          padding-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .cuas-button {
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #e3e3e3;
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cuas-button:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #22D3EE;
          transform: translateY(-2px);
        }

        /* SECTION 2: METRICS */
        .metrics-section {
          background: #000000;
          min-height: 25vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .metrics-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
        }

        .metric {
          text-align: center;
          opacity: 0;
          transform: translateY(15px);
          cursor: default;
          position: relative;
          padding: 1rem;
        }

        .metric::before {
          content: '';
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.8s ease 0.4s;
          pointer-events: none;
        }

        .metric-value {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
          transition: all 0.6s ease 0.2s;
        }

        .metric-label {
          font-size: clamp(0.7rem, 0.85vw, 0.8rem);
          font-weight: 500;
          color: #808080;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.6s ease 0.25s;
        }

        .metric:hover::before {
          opacity: 1;
        }

        .metric:hover .metric-value {
          color: #22D3EE;
          text-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
        }

        .metric:hover .metric-label {
          color: #a0a0a0;
        }

        .metric-divider {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #2a2a2a 50%, transparent);
        }

        /* SECTION 3: MAP */
        .map-section {
          background: #000000;
          min-height: 80vh;
          padding: 4rem 2rem;
        }

        .map-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .map-intro {
          text-align: center;
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          font-weight: 500;
          color: #808080;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .intro-fade {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .cyan-divider {
          width: 60%;
          max-width: 400px;
          height: 1px;
          background: linear-gradient(to right, transparent, #22D3EE 50%, transparent);
          margin: 0 auto 4rem;
          opacity: 0;
          transform: scaleX(0);
        }

        .divider-fade {
          animation: dividerGrow 1s ease-out 0.5s both;
        }

        @keyframes dividerGrow {
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        .map-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(-50px);
        }

        .map-drop {
          animation: dropFade 1.5s ease-out 0.8s both;
        }

        @keyframes dropFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .city-map {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.1));
        }

        /* SECTION 4: WHAT WE PROVED */
        .proof-section {
          background: #e3e3e3;
          min-height: 90vh;
          padding: 6rem 2rem;
        }

        .proof-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .proof-heading {
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 700;
          color: #000000;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(30px);
          text-transform: uppercase;
        }

        .proof-heading-fade {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .proof-label {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          font-weight: 500;
          color: #4a4a4a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .proof-label-fade {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .proof-card {
          background: #000000;
          padding: 2.5rem 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: transform 0.4s ease;
        }

        .proof-card:hover {
          transform: translateY(-5px);
        }

        .proof-title {
          font-size: clamp(1.1rem, 1.4vw, 1.3rem);
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .proof-description {
          font-size: clamp(0.85rem, 0.95vw, 0.9rem);
          font-weight: 400;
          color: #a0a0a0;
          line-height: 1.6;
          letter-spacing: 0.01em;
        }

        .proof-fade-1 { animation: fadeInUp 0.8s ease-out 0.5s both; }
        .proof-fade-2 { animation: fadeInUp 0.8s ease-out 0.7s both; }
        .proof-fade-3 { animation: fadeInUp 0.8s ease-out 0.9s both; }
        .proof-fade-4 { animation: fadeInUp 0.8s ease-out 1.1s both; }

        /* Animations */
        .fade-in-1 { animation: fadeInUp 1s ease-out 0.3s both; }
        .fade-in-2 { animation: fadeInUp 1s ease-out 0.6s both; }

        .metric-fade-1 { animation: fadeInUp 0.8s ease-out 0.2s both; }
        .metric-fade-2 { animation: fadeInUp 0.8s ease-out 0.4s both; }
        .metric-fade-3 { animation: fadeInUp 0.8s ease-out 0.6s both; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .content-wrapper {
            padding: 0 2rem;
          }

          .metrics-container {
            gap: 3rem;
          }

          .proof-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-merged {
            height: 100vh;
          }

          .content-wrapper {
            padding: 0 1.5rem;
          }

          .bottom-right {
            padding-bottom: 2rem;
            justify-content: center;
          }

          .gradient-top {
            height: 30%;
          }

          .gradient-bottom {
            height: 50%;
          }

          .metrics-container {
            flex-direction: column;
            gap: 2rem;
          }

          .metric-divider {
            width: 60px;
            height: 1px;
            background: linear-gradient(to right, transparent, #2a2a2a 50%, transparent);
          }

          .metrics-section {
            padding: 2.5rem 1.5rem;
          }

          .map-section {
            padding: 3rem 1.5rem;
          }

          .proof-section {
            padding: 4rem 1.5rem;
          }

          .proof-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .proof-heading {
            line-height: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default OurStoryPage;