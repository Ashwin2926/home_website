// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Import Link for Next.js routing
import Button from '@/components/Button'; // Assuming you have this Button component
import Icon from '@/components/Icon'; // Assuming you have an Icon component for ChevronDown, Menu, X

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjusted scroll threshold to account for TopSocialBar height
      // The TopSocialBar is approx 24px-32px tall.
      // If Header's internal logic depends on scroll, this needs to be calibrated.
      // Let's assume the current 50px threshold works for Header's own background change,
      // and focus on its 'top' positioning.
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
  };

  return (
    <motion.header
      // ADJUSTED top-[32px] to account for TopSocialBar height (~24-32px)
      className={`fixed top-[32px] w-full z-40 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white shadow-md' : 'bg-white'} py-6`} // Keep py-6 as per original
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-blue-700">
          PHM
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8"> {/* Increased space-x for better spacing */}
          <motion.li variants={navItemVariants} className="list-none">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </motion.li>
          <motion.li variants={navItemVariants} className="list-none">
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          </motion.li>

          {/* Services Dropdown - Desktop */}
          <motion.li variants={navItemVariants} className="list-none relative group">
            <button className="flex items-center hover:text-blue-600 transition-colors focus:outline-none text-base">
              Services <Icon name="ChevronDown" size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-top">
              <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">All Services</Link>
              <Link href="/services/plumbing" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Plumbing Services</Link>
              <Link href="/services/painting" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Painting Services</Link>
              <Link href="/services/cctv-installation" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">CCTV Installation</Link>
              {/* Add more service links here as needed */}
            </div>
          </motion.li>
          {/* End Services Dropdown - Desktop */}

          <motion.li variants={navItemVariants} className="list-none">
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          </motion.li>
          <motion.li variants={navItemVariants} className="list-none">
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          </motion.li>
          <motion.li variants={navItemVariants} className="list-none">
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </motion.li>
          <motion.li variants={navItemVariants} className="list-none">
            <Link href="/contact"> {/* Changed to link to contact page */}
              <Button variant="primary" className="px-6 py-3 text-base"> {/* Adjusted text-lg to text-base */}
                Get a Free Quote
              </Button>
            </Link>
          </motion.li>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} /> {/* Increased size for mobile icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-blue-700 text-white pb-6 px-4" // Darker background for mobile menu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.ul className="flex flex-col items-center space-y-4">
              <motion.li variants={navItemVariants}>
                <Link href="/" onClick={toggleMenu} className="hover:text-blue-200 transition-colors">Home</Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link href="/about" onClick={toggleMenu} className="hover:text-blue-200 transition-colors">About Us</Link>
              </motion.li>

              {/* Services Dropdown - Mobile (using details tag for native accordion behavior) */}
              <motion.li variants={navItemVariants} className="w-full text-center">
                <details className="text-white hover:text-blue-200 transition-colors focus:outline-none">
                  <summary className="flex items-center justify-center cursor-pointer py-2">
                    Services <Icon name="ChevronDown" size={16} className="ml-1 transform transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="flex flex-col space-y-2 mt-2 bg-blue-800 rounded-md py-2"> {/* Sub-menu background */}
                    <Link href="/Services" className="block px-4 py-2 text-white hover:bg-blue-600 transition-colors" onClick={toggleMenu}>All Services</Link>
                    <Link href="/services/plumbing" className="block px-4 py-2 text-white hover:bg-blue-600 transition-colors" onClick={toggleMenu}>Plumbing Services</Link>
                    <Link href="/Services/Painting" className="block px-4 py-2 text-white hover:bg-blue-600 transition-colors" onClick={toggleMenu}>Painting Services</Link>
                    <Link href="/services/cctv-installation" className="block px-4 py-2 text-white hover:bg-blue-600 transition-colors" onClick={toggleMenu}>CCTV Installation</Link>
                    {/* Add more service links here for mobile */}
                  </div>
                </details>
              </motion.li>
              {/* End Services Dropdown - Mobile */}

              <motion.li variants={navItemVariants}>
                <Link href="/projects" onClick={toggleMenu} className="hover:text-blue-200 transition-colors">Projects</Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link href="/blog" onClick={toggleMenu} className="hover:text-blue-200 transition-colors">Blog</Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-200 transition-colors">Contact</Link>
              </motion.li>
              <motion.li variants={navItemVariants}>
                <Link href="/contact"> {/* Changed to link to contact page */}
                  <Button variant="primary" className="mt-4 px-6 py-3 text-lg" onClick={toggleMenu}>
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;