// src/components/Contact.tsx
"use client"; // Required for useState and useEffect for scroll animation

import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button';   // Adjusted import path to alias
import Input from '@/components/Input';     // Adjusted import path to alias
import Textarea from '@/components/Textarea'; // Adjusted import path to alias
import Icon from '@/components/Icon';       // Adjusted import path to alias

const Contact: React.FC = () => {
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
      id="contact" 
      ref={sectionRef}
      className={`py-16 bg-white relative overflow-hidden animate-fade-in-up ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 animate-blob-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0 animate-blob-slow animation-delay-3000"></div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 initial-hidden animate-fade-in-up">
          <p className="text-blue-600 text-lg font-semibold mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch With Our Team</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-blue-600 text-white p-8 rounded-lg shadow-lg initial-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-6">Have a question or need a quote? Reach out to us directly or fill out the form, and we'll get back to you promptly.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={20} className="text-white" />
                <span>123 Plumbing Ave, Brookyln, NY 11201, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} className="text-white" />
                <span>(213) 54-5436</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} className="text-white" />
                <span>contact@Prevailplumbing.com</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 bg-gray-50 rounded-lg shadow-lg initial-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Applied custom class for underline animation */}
                <div className="relative flex-1 input-underline-grow">
                    <Input type="text" placeholder="Your Name" required className="pb-2"/>
                </div>
                <div className="relative flex-1 input-underline-grow">
                    <Input type="email" placeholder="Your Email" required className="pb-2"/>
                </div>
              </div>
              <div className="relative input-underline-grow">
                <Input type="text" placeholder="Subject" required className="pb-2" />
              </div>
              <div className="relative input-underline-grow">
                <Textarea placeholder="Your Message" rows={6} required className="pb-2"></Textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full py-2">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
