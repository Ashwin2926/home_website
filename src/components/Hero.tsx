// src/components/Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Dynamically measure the header's height once on mount
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  // Define Framer Motion Variants
  // 1. Parent container for the main two sections (text and form)
  const mainContentContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay between the hero-text section and hero-form section
        delayChildren: 0.1,    // Small initial delay before the first child (hero-text) starts
      },
    },
  };

  // 2. Variants for individual top-level sections (hero-text and hero-form)
  const sectionItemVariants: Variants = {
    hidden: { opacity: 0, y: 60 }, // Starts 60px below and transparent
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Moves to original position, fades in
  };

  // 3. Variants for the hero-text container itself, to stagger its OWN children (H1, P, Button)
  const textGroupContainerVariants: Variants = {
    hidden: { opacity: 0 }, // Hero-text group itself starts hidden
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // Delay between H1, P, and Button
        delayChildren: 0.3,    // Optional: delay before H1 starts *after* hero-text div appears
      },
    },
  };

  // 4. Variants for individual text elements (H1, P, Button)
  const textChildVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, // Smaller initial y-offset for text elements
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      className="relative min-h-[calc(100vh - 70px)] md:min-h-[90vh] flex flex-col items-start md:items-center justify-start md:justify-center bg-cover bg-center overflow-hidden"
      // Explanation for `className` adjustment:
      // `flex flex-col items-start justify-start`: On mobile (default),
      // the content will start at the top of the section (after padding-top).
      // This ensures "no space" between header and content.
      // `md:items-center md:justify-center`: On desktop, the content will revert
      // to being vertically centered within the hero section, which is often desired.
      // `min-h-[calc(100vh - 70px)]`: Ensures a minimum height for mobile, accounting for a typical header.
      // `md:min-h-screen`: Ensures full viewport height on desktop.
      style={{ backgroundImage: `url(/images/assets/hero-bg.jpg)` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
        aria-hidden="true"
      ></div>

      {/* Decorative Animated Blobs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-25 animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-25 animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 pb-8 md:pb-12"
        style={{ paddingTop: `${headerHeight}px` }} // Dynamically set padding-top based on header height
        variants={mainContentContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Text Section - Now uses textGroupContainerVariants for its children */}
        <motion.div
          className="hero-text text-white text-left md:w-1/2 space-y-6"
          variants={textGroupContainerVariants} // Apply variants to stagger its children
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight relative pb-4 drop-shadow-md"
            variants={textChildVariants} // Individual text element variant
          >
            Providing <span className="text-blue-400">Comprehensive</span><br />
            <span className="text-white">Home & Commercial</span> Maintenance Services!
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-500 rounded-full"></span>
            <span className="absolute bottom-1 left-0 w-12 h-1 bg-blue-300 rounded-full"></span>
          </motion.h1>
          <motion.p
            className="text-lg max-w-xl leading-relaxed text-white/90"
            variants={textChildVariants} // Individual text element variant
          >
            Prevail is recognized as one of the world's leading industry specialists. We deliver unmatched quality and professionalism across all client projects.
          </motion.p>
          {/* Wrap Button with motion.div for animation as a textChild */}
          <motion.div variants={textChildVariants}>
            <Button
              variant="primary"
              className="px-6 py-3 text-lg border-2 border-blue-300 hover:border-white hover:scale-105 transition-transform duration-300 animate-pulse-subtle"
              onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover More &rarr;
            </Button>
          </motion.div>
        </motion.div>

        {/* Form Section - Uses sectionItemVariants */}
        <motion.div
          className="hero-form bg-white p-8 rounded-xl shadow-2xl md:w-1/2 lg:w-1/3 w-full space-y-4 border-b-4 border-blue-500"
          role="form"
          variants={sectionItemVariants} // Apply variants to the form as a whole
        >
          <h3 className="text-2xl font-semibold text-gray-800">Request A Quote</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Prevail Maintainance"
                required
                className="h-12 px-4 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@prevailhomemaintanance.com"
                required
                className="h-12 px-4 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
              />
              <p className="text-xs text-gray-500 mt-1">We’ll never share your email with anyone.</p>
            </div>

            <div className="relative">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Service Category <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                required
                className="appearance-none h-12 w-full pl-4 pr-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm transition-shadow bg-white"
              >
                <option value="">Select Service Category</option>
                <option value="plumbing">Plumbing Services</option>
                <option value="painting">Painting Services</option>
                <option value="home_decoration">Home Decoration</option>
                <option value="cctv_installation">CCTV Installation</option>
                <option value="general_maintenance">General Maintenance</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                &#9660;
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-2 hover:scale-[1.02] transition-transform"
            >
              Submit Your Request
            </Button>
          </form>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce text-white text-3xl opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          &darr;
        </button>
      </div>
    </section>
  );
};

export default Hero;