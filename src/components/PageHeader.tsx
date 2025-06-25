// src/components/PageHeader.tsx
"use client";

import React from 'react'; // Removed useState, useRef, useEffect
import { motion } from 'framer-motion'; // Removed AnimatePresence
import Link from 'next/link'; // Use Next.js Link for navigation
// import Icon from './Icon'; // Icon is no longer needed if ChevronDown is removed

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Reverted: Original interface for breadcrumb items
// interface BreadcrumbItemWithSubLinks extends BreadcrumbItem {
//   subLinks?: BreadcrumbItem[];
// }

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[]; // Reverted: Type to simple BreadcrumbItem[]
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs, backgroundImage }) => {
  // Removed: useState, useRef, useEffect for dropdown logic

  const sectionStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      className="bg-blue-700 text-white py-16 md:py-24 relative overflow-hidden bg-cover bg-center" // Re-added overflow-hidden
      style={sectionStyle}
    >
      {/* Add a semi-transparent overlay if a background image is provided */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}

      {/* The motion.div needs to be relative to sit on top of the overlay */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {subtitle}
          </p>
        )}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mt-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex justify-center items-center space-x-2">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                // Removed: isDropdownCrumb check and all dropdown rendering logic

                return (
                  <li key={crumb.label} className="flex items-center"> {/* Reverted: Removed relative and ref */}
                    <Link
                      href={crumb.href}
                      className={`hover:text-white hover:underline transition-colors ${isLast ? 'text-white font-semibold' : 'text-blue-200'}`}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {crumb.label}
                    </Link>

                    {!isLast && (
                      <span className="mx-2">/</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </motion.div>
    </section>
  );
};

export default PageHeader;