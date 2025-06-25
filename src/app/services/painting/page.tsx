// src/app/services/painting/page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Link from 'next/link';



const PaintingServicesPage: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
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

  const animateClass = `initial-hidden ${isInView ? 'is-in-view animate-fade-in-up' : ''}`;

  return (
    <>
      <PageHeader
        title="Professional Painting Services"
        subtitle="Bringing vibrant colors and flawless finishes to your spaces."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Painting', href: '/services/painting' },
        ]}
      />

      <section ref={sectionRef} className={`py-16 bg-white ${isInView ? 'is-in-view' : ''}`}>
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '0ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Expert Painting for Every Surface
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Whether you're looking to refresh your home's interior, update your office, or protect your building's exterior, Fortis Home Maintenance provides high-quality painting services with meticulous attention to detail and lasting results.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '100ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Paintbrush" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Interior Painting</h3>
              <p className="text-gray-600 text-sm">
                From single rooms to entire homes, we provide clean, precise, and beautiful interior painting.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '200ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Building" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exterior Painting</h3>
              <p className="text-gray-600 text-sm">
                Protect and beautify your property's exterior with durable, weather-resistant paint finishes.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '300ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Palette" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Color Consultation</h3>
              <p className="text-gray-600 text-sm">
                Not sure about colors? Our experts can help you choose the perfect palette to match your style.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '400ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="HardHat" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Surface Preparation</h3>
              <p className="text-gray-600 text-sm">
                Thorough cleaning, patching, and priming to ensure a smooth, long-lasting finish.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '500ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="ShieldCheck" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Protective Coatings</h3>
              <p className="text-gray-600 text-sm">
                Specialized coatings for enhanced durability, moisture resistance, and aesthetic appeal.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '600ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="RefreshCcw" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Repainting & Touch-ups</h3>
              <p className="text-gray-600 text-sm">
                Refreshing existing paintwork or fixing minor blemishes to restore your walls.
              </p>
            </div>
          </div>

          {/* Why Choose Us for Painting Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '700ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Why Fortis for Your Painting Project?
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We deliver a smooth, efficient, and beautiful painting experience from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '800ms' }}>
              <Icon name="Brush" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced & Skilled Painters</h3>
                <p className="text-blue-100 text-sm">
                  Our professional painters are highly trained and experienced in various painting techniques.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '900ms' }}>
              <Icon name="Palette" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials & Finishes</h3>
                <p className="text-blue-100 text-sm">
                  We use only premium paints and materials to ensure a durable and stunning finish.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '1000ms' }}>
              <Icon name="CalendarCheck" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Timely Project Completion</h3>
                <p className="text-blue-100 text-sm">
                  We respect your schedule and complete projects efficiently without compromising quality.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '1100ms' }}>
              <Icon name="SprayCan" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Clean & Organized Work</h3>
                <p className="text-blue-100 text-sm">
                  We ensure your property is protected and cleaned thoroughly after the job is done.
                </p>
              </div>
            </div>
          </div>

          {/* Our Painting Process Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '1200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Our Painting Process
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              A step-by-step guide to how we ensure a perfect paint job every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1300ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultation & Quote</h3>
              <p className="text-gray-700 text-sm">
                Discuss your vision, get a color consultation, and receive a detailed, transparent quote.
              </p>
            </div>
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1400ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Preparation & Protection</h3>
              <p className="text-gray-700 text-sm">
                Thorough surface preparation, masking, and covering to protect your furniture and floors.
              </p>
            </div>
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1500ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Painting & Cleanup</h3>
              <p className="text-gray-700 text-sm">
                Application of high-quality paint, followed by a meticulous cleanup of the work area.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '1600ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Painting FAQs
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-4 mb-16">
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1700ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                How long does a painting project typically take?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                The duration varies based on the scope, size, and complexity of the project. We provide an estimated timeline with your quote.
              </p>
            </details>
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1800ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                Do I need to move furniture or prepare the rooms myself?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                While clearing small items helps, our team will handle major furniture moving and comprehensive surface protection.
              </p>
            </details>
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1900ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                What kind of paints do you use?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                We use high-quality, durable, and environmentally friendly paints from trusted brands, ensuring a long-lasting and vibrant finish.
              </p>
            </details>
          </div>

          {/* Call to Action */}
          <div className={`text-center ${animateClass}`} style={{ animationDelay: '2000ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Ready for a Fresh Coat? Get a Free Painting Quote!
            </h2>
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-4 text-lg">
                Request Painting Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaintingServicesPage;