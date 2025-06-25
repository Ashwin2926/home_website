// src/components/Partners.tsx
"use client"; // Required for useState and useEffect for scroll animation

import React, { useState, useEffect, useRef } from 'react';

const Partners: React.FC = () => {
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
      className={`py-12 bg-gray-50 animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Added grayscale and hover effect to the image */}
        <img 
          src="/images/assets/partner-logos.png" 
          alt="Our partners" 
          className="max-w-full h-20 grayscale hover:grayscale-0 transition-all duration-300" 
        />
      </div>
    </section>
  );
};

export default Partners;
