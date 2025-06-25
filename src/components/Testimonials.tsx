// src/components/Testimonials.tsx
"use client"; // Required for useState, useEffect, and Framer Motion

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// Assuming you have an Icon component for star and arrow icons.
// If not, replace with actual SVG/Unicode or integrate an icon library (e.g., react-icons).
import Icon from './Icon'; 

interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number; // 1-5 stars
  avatar?: string; // Optional path to avatar image
}

// Data for the testimonials. Add more as needed.
const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    quote: "Prevail provided an incredibly fast and professional service. The plumber was knowledgeable and fixed our issue in no time. Highly recommended for anyone needing reliable plumbing work.",
    author: "A. Ancota",
    role: "Homeowner",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg", // Make sure this path is correct or remove if no avatar
  },
  {
    id: 2,
    quote: "We've used Prevail for several commercial projects, and their team has always been top-notch. They are efficient, professional, and their attention to detail is second to none. A trusted partner for sure.",
    author: "J.B. Garcias",
    role: "Project Manager, Spathos Inc.",
    rating: 4,
    avatar: "/images/avatars/avatar-2.jpg", // Make sure this path is correct or remove if no avatar
  },
  {
    id: 3,
    quote: "The painting service was exceptional! The crew was polite, tidy, and the final result exceeded our expectations. Our home feels brand new. Thank you, Prevail!",
    author: "M. Khan",
    role: "Client",
    rating: 5,
    avatar: "/images/avatars/avatar-3.jpg", // Make sure this path is correct or remove if no avatar
  },
  {
    id: 4,
    quote: "Their general maintenance team handled various odd jobs around our office, from fixing lights to minor carpentry. Quick, reliable, and very friendly. Will definitely call them again.",
    author: "L. Sanchez",
    role: "Office Administrator",
    rating: 4,
    avatar: "/images/avatars/avatar-4.jpg", // Make sure this path is correct or remove if no avatar
  },
  // Add more testimonials here!
];

// Framer Motion Variants for slide transitions
const slideVariants: Variants = {
  // `custom` prop is passed from AnimatePresence and is the direction of movement
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000, // Starts far right or far left
    opacity: 0,
    scale: 0.8, // Slightly scaled down at start
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000, // Exits far right or far left
    opacity: 0,
    scale: 0.8, // Slightly scaled down on exit
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  }),
};

const Testimonials: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  // Intersection Observer for initial section animation
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

  // Function to navigate slides
  const paginate = (newDirection: number) => {
    setDirection(newDirection); // Set direction for Framer Motion animation
    setCurrentSlide((prev) => {
      const newIndex = (prev + newDirection + testimonialsData.length) % testimonialsData.length;
      return newIndex;
    });
  };

  // Helper function to render star icons based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          // Assuming your Icon component takes 'StarFilled' and 'StarEmpty'
          name={i <= rating ? "StarFilled" : "StarEmpty"} 
          size={16}
          className={`inline-block ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return <div className="flex items-center justify-center space-x-0.5 mb-2">{stars}</div>;
  };

  const currentTestimonial = testimonialsData[currentSlide];

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-blue-600 text-white relative overflow-hidden ${isInView ? 'is-in-view' : 'initial-hidden'}`}
    >
      {/* Subtle Background Blobs (for visual interest) */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-700 rounded-full opacity-20 filter blur-lg z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 filter blur-lg z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative pb-4">
          What Our Customers Say
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-white rounded-full"></span>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-blue-300 rounded-full"></span>
        </h2>

        {/* Testimonial Carousel Container */}
        <div className="relative max-w-2xl mx-auto min-h-[300px] flex items-center justify-center"> {/* min-h for consistent height */}
          <AnimatePresence initial={false} custom={direction}>
            {/* Motion div for the current testimonial card */}
            <motion.div
              key={currentSlide} // Key must change for AnimatePresence to detect a new component
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full bg-white text-gray-800 p-8 rounded-lg shadow-xl border-b-4 border-blue-500 flex flex-col items-center text-center"
            >
              {/* Quote Icon */}
              <Icon name="Quote" size={48} className="text-blue-500 mb-4 opacity-70" />

              {/* Star Rating */}
              {renderStars(currentTestimonial.rating)}

              <p className="mb-6 italic text-lg leading-relaxed">"{currentTestimonial.quote}"</p>

              {/* Avatar and Author Info */}
              <div className="flex flex-col items-center mt-4">
                {currentTestimonial.avatar && (
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-400 shadow-md"
                  />
                )}
                <h4 className="text-xl font-semibold text-gray-900">{currentTestimonial.author}</h4>
                <span className="text-gray-600">{currentTestimonial.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (hidden on small screens) */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full text-white text-2xl z-20 transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <Icon name="ArrowLeft" size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full text-white text-2xl z-20 transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <Icon name="ArrowRight" size={24} />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1); // Determine direction for animation
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;