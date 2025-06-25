// src/components/Services.tsx
"use client"; // This directive marks the component as a Client Component

import React, { useState, useEffect, useRef } from 'react'; // Added useState, useEffect, useRef
import Icon from '@/components/Icon';     // Adjusted import path to alias

const Services: React.FC = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [hoursOfWork, setHoursOfWork] = useState(0);
  const sectionRef = useRef<HTMLElement>(null); // Added ref for IntersectionObserver
  const [isInView, setIsInView] = useState(false); // State for section visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) { // Only animate if not already in view
            setIsInView(true);
            const duration = 2000; // milliseconds

            const animateCount = (setter: React.Dispatch<React.SetStateAction<number>>, start: number, end: number) => {
              let startTime: number | null = null;
              const step = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                setter(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                  requestAnimationFrame(step);
                }
              };
              requestAnimationFrame(step);
            };

            animateCount(setProjectsDone, 0, 2318);
            animateCount(setHappyClients, 0, 6154);
            animateCount(setHoursOfWork, 0, 9784);

            observer.disconnect(); // Stop observing once animated
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]); // Depend on isInView to ensure it only runs once

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 bg-white animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 border-b-4 border-blue-200 hover:border-blue-500"> {/* Added border */}
            <span className="block text-5xl font-bold text-blue-600 mb-2">
              {projectsDone}
            </span>
            <span className="block text-xl text-gray-700">Projects Done</span>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 border-b-4 border-blue-200 hover:border-blue-500" style={{ transitionDelay: '100ms' }}> {/* Added border */}
            <span className="block text-5xl font-bold text-blue-600 mb-2">
              {happyClients}
            </span>
            <span className="block text-xl text-gray-700">Happy Clients</span>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 border-b-4 border-blue-200 hover:border-blue-500" style={{ transitionDelay: '200ms' }}> {/* Added border */}
            <span className="block text-5xl font-bold text-blue-600 mb-2">
              {hoursOfWork}
            </span>
            <span className="block text-xl text-gray-700">Hours of Work</span>
          </div>
        </div>

        <div className="text-center mb-12 initial-hidden animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {/* Styled heading with custom underline shape */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
            Our Specialities Will Examine And Advise On How To Become More Efficient And Better.
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-400 rounded-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-blue-400 hover:shadow-blue-200/50"> {/* Added border and hover glow */}
            <Icon name="Hammer" size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Materials</h3>
            <p className="text-gray-600 text-center">We use only the highest quality materials and parts for every job.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-blue-400 hover:shadow-blue-200/50" style={{ transitionDelay: '100ms' }}> {/* Added border and hover glow */}
            <Icon name="Shield" size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Team</h3>
            <p className="text-gray-600 text-center">Our team consists of licensed, experienced, and friendly professionals.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-blue-400 hover:shadow-blue-200/50" style={{ transitionDelay: '200ms' }}> {/* Added border and hover glow */}
            <Icon name="CheckCircle" size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Modern Equipment</h3>
            <p className="text-gray-600 text-center">We utilize the latest tools and technology to ensure efficient work.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-blue-400 hover:shadow-blue-200/50" style={{ transitionDelay: '300ms' }}> {/* Added border and hover glow */}
            <Icon name="Award" size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Full Satisfaction</h3>
            <p className="text-gray-600 text-center">Your complete satisfaction is our ultimate goal and guarantee.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Added overlay effect on gallery images with distinct blue border */}
            <div className="relative overflow-hidden rounded-lg shadow-md group border-4 border-transparent hover:border-blue-500 transition-all duration-300">
                <img src="/images/assets/bathtub.jpg" alt="Interior Renovation - Modern Bathtub" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">View Project</span>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group border-4 border-transparent hover:border-blue-500 transition-all duration-300">
                <img src="/images/assets/sink.jpg" alt="Interior Renovation - Bathroom Sink" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">View Project</span>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group border-4 border-transparent hover:border-blue-500 transition-all duration-300">
                <img src="/images/assets/faucet.jpg" alt="Interior Renovation - Modern Faucet" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">View Project</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;