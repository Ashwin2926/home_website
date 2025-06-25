// src/app/about/page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';

const AboutPage: React.FC = () => {
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

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const animateClass = `initial-hidden ${isInView ? 'is-in-view animate-fade-in-up' : ''}`;

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Discover Our Journey, Values, and Commitment to Excellence"
        backgroundImage="/images/assets/bathtub.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      <section
        ref={sectionRef}
        className={`py-16 bg-white ${isInView ? 'is-in-view' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '0ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Our Story
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Founded in 20XX, Prevail Home Maintenance started with a simple mission: to provide reliable, high-quality, and transparent home maintenance services. What began as a small team with a passion for craftsmanship has grown into a leading service provider, trusted by countless homeowners and businesses.
            </p>
          </div>

          <div className={`flex flex-col md:flex-row items-center gap-12 mb-16 ${animateClass}`} style={{ animationDelay: '100ms' }}>
            <div className="md:w-1/2">
              <img src="/images/assets/about_us.jpeg" alt="Our Story" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Humble Beginnings to Industry Leaders</h3>
              <p className="text-gray-600 mb-4">
                We've built our reputation on a foundation of integrity, exceptional service, and a deep understanding of our clients' needs. Every project, big or small, is approached with the same dedication and attention to detail. We believe in fostering long-term relationships through trust and consistent performance.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by continuous learning and adaptation, embracing new technologies and techniques to deliver the best results. We are proud of the team we've built—a group of skilled professionals who share our commitment to excellence.
              </p>
            </div>
          </div>

          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Meet Our Team
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Our success is driven by the expertise and dedication of our people. Get to know the professionals behind Prevail Home Maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md text-center group hover:shadow-xl transition-shadow duration-300 ${animateClass}`} style={{ animationDelay: '300ms' }}>
              <img src="/images/assets/team-member-1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 group-hover:border-blue-500 transition-colors" />
              <h4 className="text-xl font-semibold text-gray-800 mb-1">John Doe</h4>
              <p className="text-blue-600 text-sm mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">With over 20 years in the industry, John's vision guides our company's commitment to excellence and customer satisfaction.</p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md text-center group hover:shadow-xl transition-shadow duration-300 ${animateClass}`} style={{ animationDelay: '400ms' }}>
              <img src="/images/assets/team-member-2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 group-hover:border-blue-500 transition-colors" />
              <h4 className="text-xl font-semibold text-gray-800 mb-1">Jane Smith</h4>
              <p className="text-blue-600 text-sm mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">Jane ensures all projects run smoothly and efficiently, maintaining our high standards of quality and timeliness.</p>
            </div>
            <div className={`bg-gray-50 p-6 rounded-lg shadow-md text-center group hover:shadow-xl transition-shadow duration-300 ${animateClass}`} style={{ animationDelay: '500ms' }}>
              <img src="/images/assets/team-member-3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 group-hover:border-blue-500 transition-colors" />
              <h4 className="text-xl font-semibold text-gray-800 mb-1">Michael Chen</h4>
              <p className="text-blue-600 text-sm mb-3">Lead Technician</p>
              <p className="text-gray-600 text-sm">Michael leads our field teams with unparalleled technical skill and a dedication to problem-solving.</p>
            </div>
          </div>

          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Why Choose Prevail Home Maintenance?
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We stand out through our unwavering commitment to quality, customer satisfaction, and ethical practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 ${animateClass}`} style={{ animationDelay: '700ms' }}>
              <h3 className="text-xl font-semibold mb-3">Experienced & Certified Professionals</h3>
              <p className="text-blue-100 text-sm">Our team comprises highly skilled and certified technicians, ensuring every job is done right the first time.</p>
            </div>
            <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 ${animateClass}`} style={{ animationDelay: '800ms' }}>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-blue-100 text-sm">No hidden fees or surprises. We provide clear, upfront pricing for all our services.</p>
            </div>
            <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 ${animateClass}`} style={{ animationDelay: '900ms' }}>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction Guarantee</h3>
              <p className="text-blue-100 text-sm">Your happiness is our priority. We stand by our work and ensure you are completely satisfied.</p>
            </div>
            <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 ${animateClass}`} style={{ animationDelay: '1000ms' }}>
              <h3 className="text-xl font-semibold mb-3">Prompt & Reliable Service</h3>
              <p className="text-blue-100 text-sm">We value your time. Our team is committed to arriving on schedule and completing tasks efficiently.</p>
            </div>
            <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 ${animateClass}`} style={{ animationDelay: '1100ms' }}>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Service Range</h3>
              <p className="text-blue-100 text-sm">From plumbing to painting, we offer a vast array of services to cover all your home maintenance needs.</p>
            </div>
            <div className={`bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 ${animateClass}`} style={{ animationDelay: '1200ms' }}>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Practices</h3>
              <p className="text-blue-100 text-sm">We are committed to sustainable practices, using environmentally responsible methods and materials.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;