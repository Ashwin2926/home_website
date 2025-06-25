// src/components/Solutions.tsx
"use client"; // Required for useState and useEffect for scroll animation

import React, { useState, useEffect, useRef } from 'react';

const Solutions: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Disconnect once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 bg-white animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Styled subheading with custom underline shape */}
          <p className="text-blue-600 text-lg font-semibold mb-2 initial-hidden animate-fade-in-up relative pb-2" style={{ animationDelay: '0ms' }}>
            High Performance Services for Multiple Industries
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-blue-400 rounded-full"></span>
          </p>
          {/* Styled main heading with custom underline shape */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight initial-hidden animate-fade-in-up relative pb-4" style={{ animationDelay: '100ms' }}>
            Utilising Latest Processing Solutions With Decades Of Work Experience.
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-blue-600 rounded-full"></span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image hover with distinct blue border/glow */}
          <img src="/images/assets/plumber-3.jpg" alt="Maintenance Solution 1" 
            className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300 border-4 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50" 
          />
          <img src="/images/assets/plumber-2.jpg" alt="Maintenance Solution 2" 
            className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300 border-4 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50" 
          />
          <img src="/images/assets/plumber-2.jpg" alt="Maintenance Solution 3" 
            className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300 border-4 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50" 
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;