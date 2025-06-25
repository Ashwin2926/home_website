// src/app/services/plumbing/page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react'; // Import hooks for IntersectionObserver
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';
import Icon from '@/components/Icon'; // Assuming you have an Icon component for various icons



const PlumbingServicesPage: React.FC = () => {
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

  // Base class for animated elements
  const animateClass = `initial-hidden ${isInView ? 'is-in-view animate-fade-in-up' : ''}`;

  return (
    <>
      <PageHeader
        title="Expert Plumbing Services"
        subtitle="Reliable solutions for all your residential and commercial plumbing needs."
         backgroundImage="/images/headerimages/plumbing.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
        ]}
      />

      <section
        ref={sectionRef} // Attach ref to the main section
        className={`py-16 bg-white ${isInView ? 'is-in-view' : ''}`} // Base section doesn't need 'animate-fade-in-up' here
      >
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '0ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Comprehensive Plumbing Solutions
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              At Prevail Home Maintenance, we offer a full spectrum of plumbing services to ensure your home or business's water systems run smoothly and efficiently. From leaky faucets to major pipe repairs, our certified plumbers are equipped to handle any challenge.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '100ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Droplets" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Leak Detection & Repair</h3>
              <p className="text-gray-600 text-sm">
                Pinpointing and fixing hidden leaks in pipes, faucets, toilets, and water lines to prevent water damage and high bills.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '200ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Wrench" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Drain Cleaning & Unclogging</h3>
              <p className="text-gray-600 text-sm">
                Professional removal of stubborn clogs from sinks, showers, toilets, and main drains using advanced tools.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '300ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Thermometer" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Water Heater Services</h3>
              <p className="text-gray-600 text-sm">
                Installation, repair, and maintenance for all types of water heaters, ensuring hot water availability.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '400ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Sprout" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pipe Repair & Replacement</h3>
              <p className="text-gray-600 text-sm">
                Fixing burst pipes, corroded pipes, and complete re-piping services for older properties.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '500ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Toilet" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Toilet & Faucet Installation/Repair</h3>
              <p className="text-gray-600 text-sm">
                Repairing running toilets, low water pressure, and installing new fixtures for upgrades.
              </p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group ${animateClass}`} style={{ animationDelay: '600ms' }}>
              <div className="text-blue-600 mb-4">
                <Icon name="Faucet" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Water Pressure Issues</h3>
              <p className="text-gray-600 text-sm">
                Diagnosing and resolving problems with low or high water pressure throughout your property.
              </p>
            </div>
          </div>

          {/* Why Choose Us for Plumbing Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '700ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Why Choose Prevail for Your Plumbing Needs?
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Our commitment to quality, efficiency, and customer satisfaction sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '800ms' }}>
              <Icon name="CheckCircle" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Certified & Experienced Plumbers</h3>
                <p className="text-blue-100 text-sm">
                  Our team consists of fully licensed and highly experienced plumbers who adhere to the highest industry standards.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '900ms' }}>
              <Icon name="Truck" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable Emergency Service</h3>
                <p className="text-blue-100 text-sm">
                  We understand plumbing emergencies can't wait. Our rapid response team is available for urgent repairs.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '1000ms' }}>
              <Icon name="ClipboardCheck" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Upfront & Transparent Pricing</h3>
                <p className="text-blue-100 text-sm">
                  You'll receive a clear, detailed quote before any work begins, with no hidden costs.
                </p>
              </div>
            </div>
            <div className={`flex items-start bg-blue-600 text-white p-6 rounded-lg shadow-lg ${animateClass}`} style={{ animationDelay: '1100ms' }}>
              <Icon name="ShieldCheck" size={32} className="mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Workmanship Guaranteed</h3>
                <p className="text-blue-100 text-sm">
                  We stand by the quality of our work with comprehensive warranties on parts and labor.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '1200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Our Plumbing Service Process
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Simple steps to get your plumbing issues resolved quickly and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1300ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Book an Appointment</h3>
              <p className="text-gray-700 text-sm">
                Easily schedule a visit online or by phone at your convenience.
              </p>
            </div>
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1400ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diagnosis & Quote</h3>
              <p className="text-gray-700 text-sm">
                Our expert plumbers arrive, diagnose the issue, and provide a clear, upfront quote.
              </p>
            </div>
            <div className={`bg-blue-100 p-6 rounded-lg shadow-md ${animateClass}`} style={{ animationDelay: '1500ms' }}>
              <div className="text-blue-700 text-5xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Completion</h3>
              <p className="text-gray-700 text-sm">
                Work is performed efficiently and effectively, with a focus on quality and cleanliness.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '1600ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Frequently Asked Questions (Plumbing)
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          <div className="space-y-4 mb-16">
            {/* FAQ Item 1 */}
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1700ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                What areas do you serve for plumbing services?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                We proudly serve all areas within Dubai, including residential and commercial properties.
              </p>
            </details>
            {/* FAQ Item 2 */}
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1800ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                Do you offer emergency plumbing services?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                Yes, we provide 24/7 emergency plumbing services for urgent issues like burst pipes or major leaks. Contact us immediately for rapid assistance.
              </p>
            </details>
            {/* FAQ Item 3 */}
            <details className={`group bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer ${animateClass}`} style={{ animationDelay: '1900ms' }}>
              <summary className="flex justify-between items-center text-lg font-semibold text-gray-800">
                How can I prevent common plumbing issues?
                <Icon name="ChevronDown" size={24} className="transform transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-gray-600 mt-2 ml-4 border-l-2 pl-4 border-blue-500">
                Regular maintenance, avoiding pouring grease down drains, and addressing small leaks promptly can prevent major problems. We also offer preventative maintenance plans.
              </p>
            </details>
          </div>

          {/* Call to Action */}
          <div className={`text-center ${animateClass}`} style={{ animationDelay: '2000ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Need a Plumber? Get a Free Quote Today!
            </h2>
            <Button variant="primary" className="px-8 py-4 text-lg">
              Request a Plumbing Service
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumbingServicesPage;