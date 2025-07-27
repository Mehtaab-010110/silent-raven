"use client";

import React from 'react';

const ProductSpecsCarousel = () => {
  const specs = [
    {
      id: 1,
      category: "Detection Range",
      title: "Comprehensive coverage up to 5km radius",
      bgColor: "#FFFFFF", // White
      textColor: "#202020",
      borderColor: "#E0E0E0"
    },
    {
      id: 2,
      category: "Signal Processing",
      title: "Real-time RF analysis with zero acoustic signature",
      bgColor: "#FFFFFF", // White (same as others)
      textColor: "#202020", // Dark text (same as others)
      borderColor: "#E0E0E0" // Same border as others
    },
    {
      id: 3,
      category: "Urban Deployment",
      title: "Rapid setup in cluttered electromagnetic environments",
      bgColor: "#FFFFFF", // White
      textColor: "#202020",
      borderColor: "#E0E0E0"
    },
    {
      id: 4,
      category: "Target Tracking",
      title: "Detect swarms, high-speed maneuvering, and below rooftop drones",
      bgColor: "#FFFFFF", // White
      textColor: "#202020",
      borderColor: "#E0E0E0"
    }
  ];

  return (
    <section className="h-screen relative overflow-hidden flex flex-col" style={{backgroundColor: '#f3f3f3'}}>
      
      {/* Main Heading - Manually Pushed Up */}
      <div className="flex-none flex items-center justify-center px-6 lg:px-8" style={{height: '40vh', marginTop: '-100px'}}>
        <div className="text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{color: '#202020'}}
          >
            Built for the field.
            <br />
          </h1>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex-1 flex items-start justify-center px-6 lg:px-8 pb-16" style={{height: '60vh'}}>
        <div className="max-w-7xl mx-auto w-full pt-8">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div
                key={spec.id}
                className="relative rounded-2xl p-8 h-80 flex flex-col justify-between transition-all duration-300 hover:scale-102 simple-card border-2"
                style={{
                  backgroundColor: spec.bgColor,
                  borderColor: spec.borderColor || 'transparent'
                }}
              >
                {/* Category */}
                <div>
                  <p 
                    className="text-sm font-semibold mb-4 opacity-80"
                    style={{color: spec.textColor}}
                  >
                    {spec.category}
                  </p>
                  
                  {/* Main Content */}
                  <h3 
                    className="text-xl md:text-2xl font-bold leading-tight"
                    style={{color: spec.textColor}}
                  >
                    {spec.title}
                  </h3>
                </div>

              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .simple-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .simple-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ProductSpecsCarousel;