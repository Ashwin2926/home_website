// src/components/Testimonials.tsx
"use client"; // Required for useState and useEffect for scroll animation

import React, { useState, useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
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
      className={`py-16 bg-blue-600 text-white relative overflow-hidden animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      {/* Subtle Background Pattern/Blob 1 */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-700 rounded-full opacity-20 filter blur-lg z-0"></div>
      {/* Subtle Background Pattern/Blob 2 */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 filter blur-lg z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Styled heading with custom underline shape */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 initial-hidden animate-fade-in-up relative pb-4" style={{ animationDelay: '0ms' }}>
          Our Customers Share Their Experiences & Insights
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-white rounded-full"></span>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-blue-300 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial card with distinct blue border on hover */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 initial-hidden animate-fade-in-up border-b-4 border-transparent hover:border-blue-500" style={{ animationDelay: '100ms' }}>
            <p className="mb-6 italic">"Fortis provided an incredibly fast and professional service. The plumber was knowledgeable and fixed our issue in no time. Highly recommended for anyone needing reliable plumbing work."</p>
            <div className="text-left">
              <h4 className="text-xl font-semibold">A. Ancota</h4>
              <span className="text-gray-600">Homeowner</span>
            </div>
          </div>
          {/* Testimonial card with distinct blue border on hover */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 initial-hidden animate-fade-in-up border-b-4 border-transparent hover:border-blue-500" style={{ animationDelay: '200ms' }}>
            <p className="mb-6 italic">"We've used Fortis for several commercial projects, and their team has always been top-notch. They are efficient, professional, and their attention to detail is second to none. A trusted partner."</p>
            <div className="text-left">
              <h4 className="text-xl font-semibold">J.B. Garcias</h4>
              <span className="text-gray-600">Project Manager, Spathos Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;