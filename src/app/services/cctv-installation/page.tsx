// src/app/services/cctv-installation/page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
// Corrected relative import paths for components
import PageHeader from '../../../components/PageHeader';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon'; 
import Link from 'next/link';

// NOTE: metadata is now defined in src/app/services/cctv-installation/layout.tsx
// It cannot be exported directly from a "use client" component.

const CctvInstallationPage: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing once animated
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
  }, []); // Empty dependency array means this effect runs once on mount

  // Class to apply animations based on scroll visibility
  const animateClass = `initial-hidden ${isInView ? 'is-in-view animate-fade-in-up' : ''}`;

  return (
    <>
      <PageHeader
        title="CCTV Installation & Surveillance"
        subtitle="Advanced security solutions for peace of mind at your home or business."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'CCTV Installation', href: '/services/cctv-installation' },
        ]}
      />

      <section ref={sectionRef} className={`py-16 md:py-24 bg-white ${isInView ? 'is-in-view' : ''}`}>
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '0ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Comprehensive Security Camera Solutions
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Fortis Home Maintenance offers cutting-edge CCTV installation services to protect your property, loved ones, and assets. From initial consultation to expert setup and maintenance, we ensure robust surveillance tailored to your specific needs.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '100ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Video" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Home CCTV Systems</h3>
              <p className="text-gray-600 text-sm">
                Customized camera setups for residential properties, ensuring family safety and property security.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '200ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Building" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Commercial Surveillance</h3>
              <p className="text-gray-600 text-sm">
                Scalable CCTV solutions for businesses, offices, and retail spaces to deter theft and monitor operations.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '300ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Monitor" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">DVR/NVR Setup & Integration</h3>
              <p className="text-gray-600 text-sm">
                Professional installation and configuration of Digital and Network Video Recorders.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '400ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Wifi" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wireless & IP Camera Systems</h3>
              <p className="text-gray-600 text-sm">
                Modern wireless and IP-based camera installations for flexible and high-definition surveillance.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '500ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Settings" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenance & Repair</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support, troubleshooting, and repair services to keep your system operational.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '600ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Cloud" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Remote Monitoring Setup</h3>
              <p className="text-gray-600 text-sm">
                Configure secure access for remote viewing of your camera feeds from anywhere.
              </p>
            </div>
          </div>

          {/* Why Choose Us for CCTV Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '700ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Why Choose Fortis for CCTV Installation?
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Your security is our priority. We offer reliable and cutting-edge surveillance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '800ms' }}>
              <Icon name="Shield" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Security Consultants</h3>
                <p className="text-blue-100 text-sm">
                  Our team designs optimal security layouts tailored to your property's vulnerabilities.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '900ms' }}>
              <Icon name="Camera" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">High-Quality Equipment</h3>
                <p className="text-blue-100 text-sm">
                  We use trusted brands for cameras and recording devices, ensuring clarity and longevity.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '1000ms' }}>
              <Icon name="Lock" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private Installations</h3>
                <p className="text-blue-100 text-sm">
                  Your data security and privacy are paramount; all installations are handled with care.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '1100ms' }}>
              <Icon name="Zap" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-blue-100 text-sm">
                  We ensure your new CCTV system integrates well with existing smart home or business systems.
                </p>
              </div>
            </div>
          </div>

          {/* Our CCTV Installation Process Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '1200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Our CCTV Installation Process
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Simple steps to getting your property securely monitored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1300ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Site Assessment & Quote</h3>
              <p className="text-gray-700 text-sm">
                We assess your property, recommend optimal camera placement, and provide a detailed quote.
              </p>
            </div>
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1400ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Installation & Configuration</h3>
              <p className="text-gray-700 text-sm">
                Our technicians professionally install cameras, wiring, and configure the recording system.
              </p>
            </div>
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1500ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Testing & Handover</h3>
              <p className="text-gray-700 text-sm">
                Thorough testing ensures full functionality, followed by a walkthrough and training for you.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '1600ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              CCTV Installation FAQs
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-4 mb-16">
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1700ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                What types of CCTV cameras do you install?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                We install a variety of cameras including IP cameras, analog, dome, bullet, PTZ, and wireless systems, suitable for various needs.
              </p>
            </details>
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1800ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                Can I view my CCTV footage remotely?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                Yes, we can configure your system for secure remote access, allowing you to monitor your property from your smartphone or computer.
              </p>
            </details>
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1900ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                How often does a CCTV system need maintenance?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                We recommend annual or semi-annual checks to ensure optimal performance, clear recordings, and address any potential issues.
              </p>
            </details>
          </div>

          {/* Call to Action */}
          <div className={`text-center ${animateClass}`} style={{ animationDelay: '2000ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Enhance Your Security. Get a Free CCTV Consultation!
            </h2>
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-4 text-lg">
                Request CCTV Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CctvInstallationPage;
