// src/components/CoreValues.tsx
"use client"; // Required for useState and useEffect for scroll animation

import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button'; // Adjusted import path to alias

const CoreValues: React.FC = () => {
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
      className={`py-16 bg-gray-50 overflow-hidden animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
          {/* Image tilt/zoom on hover with distinct blue border */}
          <img src="/images/assets/plumber-2.jpg" alt="Technician at work 1" 
            className="absolute top-0 left-0 w-[80%] h-[80%] object-cover rounded-lg shadow-lg z-10 
            transition-all duration-500 ease-in-out hover:rotate-3 hover:scale-105
            border-4 border-transparent hover:border-blue-500" /* Changed border color */
            style={{ transform: 'rotate(-5deg)' }}
          />
          <img src="/images/assets/plumber-3.jpg" alt="Technician at work 2" 
            className="absolute bottom-0 right-0 w-[80%] h-[80%] object-cover rounded-lg shadow-lg 
            transition-all duration-500 ease-in-out hover:-rotate-3 hover:scale-105
            border-4 border-transparent hover:border-blue-500" /* Changed border color */
            style={{ transform: 'rotate(5deg)' }}
          />
        </div>
        <div className="md:w-1/2 text-left">
          {/* Styled heading with custom underline shape */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6 initial-hidden animate-fade-in-up relative pb-4" style={{ animationDelay: '100ms' }}>
            We Maintain Strong Core Values That Truly Reflect Our Philosophy.
            <span className="absolute bottom-0 left-0 w-28 h-1 bg-blue-600 rounded-full"></span>
            <span className="absolute bottom-1 left-0 w-10 h-1 bg-blue-400 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mb-4 initial-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>We are helping to lead the charge. We can help you build out your asset succession and prepare for the future. Our Group is recognized as a leader in services for the energy and industrial markets, capable of serving an impressive list of long-term clients with expertise.</p>
          <p className="text-gray-600 mb-6 initial-hidden animate-fade-in-up" style={{ animationDelay: '300ms' }}>Our worldwide presence ensures our clients' efficiency and productivity. We have built our reputation on our commitment to our expertise as one of the world's leading corporations.</p>
          {/* Custom button style with distinct blue border */}
          <Button variant="primary" className="px-6 py-3 initial-hidden animate-fade-in-up border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300" style={{ animationDelay: '400ms' }}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;