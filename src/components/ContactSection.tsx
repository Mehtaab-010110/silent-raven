"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="h-screen relative overflow-hidden bg-black flex items-center justify-center">
      
      {/* Centered Content */}
      <div className="max-w-2xl mx-auto px-6 text-center fade-in-up">
        
        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-16"
          style={{ 
            color: '#f3f3f3',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)'
          }}
        >
          Let's talk.
        </h1>
        
        {/* Simple Form */}
        <div className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-6 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:border-aqua transition-colors text-lg"
            style={{
              borderColor: '#333333',
              fontSize: '18px'
            }}
          />
          
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-6 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:border-aqua transition-colors resize-none text-lg"
            style={{
              borderColor: '#333333',
              fontSize: '18px'
            }}
          />
          
          <div className="pt-8">
            <button
              onClick={handleSubmit}
              className="py-4 px-12 font-bold transition-all duration-300 hover:scale-105 bg-transparent border-2"
              style={{
                color: '#00ffc6',
                borderColor: '#00ffc6'
              }}
            >
              Send
            </button>
          </div>
        </div>
        
        {/* Simple Contact */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-lg" style={{color: '#808080'}}>
            info@altivion.com
          </p>
        </div>
        
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .focus\\:border-aqua:focus {
          border-color: #00ffc6 !important;
        }

        button:hover {
          background-color: #00ffc6;
          color: #000000;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;