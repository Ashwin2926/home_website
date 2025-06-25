// src/components/Partners.tsx
"use client";

import React from 'react';

const Partners: React.FC = () => {
  // Define an array of paths to your individual partner logo images.
  // **IMPORTANT: Replace these placeholder paths with your actual logo file paths.**
  const individualLogos = [
    '/images/assets/partner-logos.png', // Example path
    '/images/assets/partner-logos.png', // Example path
    '/images/assets/partner-logos.png',    // Example path
    '/images/assets/partner-logos.png',     // Example path
    '/images/assets/partner-logos.png',  // Example path
    '/images/assets/partner-logos.png',     // Example path
    '/images/assets/partner-logos.png',   // Add more as needed
    '/images/assets/partner-logos.png',
  ];

  // Helper function to render a single set of individual logos.
  // This set will be duplicated to create the seamless loop.
  const renderIndividualLogoSet = (keyPrefix: string) => (
    <>
      {individualLogos.map((logoSrc, index) => (
        <img
          key={`${keyPrefix}-${index}`} // Unique key for each logo instance
          src={logoSrc}
          alt={`Partner logo ${index + 1}`}
          // `h-16`: Sets a consistent height for the logos.
          // `max-h-full`: Ensures it doesn't exceed its container height.
          // `mx-8`: Adds horizontal spacing/margin between logos.
          // `flex-shrink-0`: Prevents images from shrinking in the flex container.
          // `grayscale hover:grayscale-0 transition-all duration-300`: Applies the hover effect.
          // `object-contain`: Ensures the image scales down to fit without cropping or distortion.
          className="h-16 max-h-full mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 object-contain"
        />
      ))}
    </>
  );

  return (
    <section className="py-12 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="w-full relative">
          {/*
            This inner div holds the duplicated logo sets and is animated.
            `flex`: Arranges all logos horizontally.
            `w-fit`: Allows the container to naturally expand to fit all its content.
            `min-w-[200%]`: Ensures the container is at least twice the width of its parent (`w-full`).
                           This is crucial for the `translateX(-50%)` animation to create a seamless loop
                           by scrolling exactly one full set of the original logos off-screen.
            `animate-marquee`: Applies the CSS animation defined below.
          */}
          <div className="flex w-fit min-w-[200%] animate-marquee">
            {renderIndividualLogoSet('set-1')} {/* First set of logos */}
            {renderIndividualLogoSet('set-2')} {/* Second set (duplicate) for seamless looping */}
            {/* You can add more sets (e.g., renderIndividualLogoSet('set-3')) if your total logo width
                is very small and you need more visible content, adjusting `min-w` and `translateX`
                accordingly (e.g., for 3 sets: min-w-[300%] and transform: translateX(-33.33%)).
                For most cases, two sets are sufficient for seamlessness. */}
          </div>
        </div>
      </div>

      {/* Define the CSS keyframes using style jsx for component-scoped styles */}
      <style jsx>{`
        /* Define the animation for the marquee effect */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /*
              This translates the content by exactly 50% of its total width.
              Since we duplicated the content once (making total width 200% of original),
              -50% scrolls exactly one full "set" of the original content off-screen,
              making it appear seamless when the animation loops.
            */
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration (speed) as needed */
        }

        /* Optional: Responsive adjustments for animation speed on smaller screens */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s; /* Make it faster on mobile if preferred */
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;