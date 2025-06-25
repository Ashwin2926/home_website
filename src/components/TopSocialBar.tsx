// src/components/TopSocialBar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Icon from '@/components/Icon'; // Ensure your Icon component supports these social icons
import Link from 'next/link';

const TopSocialBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 py-2 bg-blue-700 text-white text-sm transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-opacity-90 backdrop-blur-sm shadow-md shadow-blue-500/50'
          : 'bg-opacity-100'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-end items-center">
        <div className="flex space-x-4">
          <Link href="https://facebook.com/fortishomemaintenance" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Icon name="Facebook" size={20} className="hover:text-blue-200 transition-colors" />
          </Link>
          <Link href="https://twitter.com/fortishome" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Icon name="Twitter" size={20} className="hover:text-blue-200 transition-colors" />
          </Link>
          <Link href="https://instagram.com/fortishomemaintenance" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Icon name="Instagram" size={20} className="hover:text-blue-200 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/company/fortishomemaintenance" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="Linkedin" size={20} className="hover:text-blue-200 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSocialBar;