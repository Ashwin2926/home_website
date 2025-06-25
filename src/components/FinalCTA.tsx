// src/components/FinalCTA.tsx
"use client"; // Required for useState and useEffect for scroll animation

import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button'; // Adjusted import path to alias

const FinalCTA: React.FC = () => {
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
      className={`py-16 bg-blue-700 text-white overflow-hidden animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3 text-center md:text-left initial-hidden animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          {/* Styled heading with custom underline shape */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight relative pb-4">
            We Cover Plumbing Repairs, Maintenance & Installations Services For Your Family!
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-28 h-1 bg-white rounded-full"></span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-10 h-1 bg-blue-400 rounded-full"></span>
          </h2>
          {/* Custom button style with distinct blue border on hover */}
          <Button variant="outline" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 text-lg border-2 border-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-300">Get Started Now</Button>
        </div>
        <div className="md:w-1/3 flex justify-center initial-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {/* Subtle image bounce/jiggle on hover with distinct blue border */}
          <img 
            src="/images/assets/plumber-1.jpg" 
            alt="Friendly plumber" 
            className="rounded-lg shadow-xl max-w-full h-auto transition-transform duration-300 hover:translate-y-[-5px] border-4 border-transparent hover:border-blue-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;