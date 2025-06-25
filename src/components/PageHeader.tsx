// src/components/PageHeader.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="bg-blue-700 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background patterns/blobs can be added here */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 text-center"
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
          <nav className="mt-6 text-sm">
            <ol className="flex justify-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center">
                  <a href={crumb.href} className="text-blue-200 hover:text-white hover:underline transition-colors">
                    {crumb.label}
                  </a>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </motion.div>
    </section>
  );
};

export default PageHeader;