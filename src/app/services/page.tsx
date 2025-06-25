'use client';

import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Link from 'next/link';

const ServicesContent: React.FC = () => {
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

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);

      // Trigger immediately if already in view
      if (window.innerHeight >= current.getBoundingClientRect().top) {
        setIsInView(true);
        observer.disconnect();
      }
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const animateClass = `initial-hidden ${isInView ? 'is-in-view animate-fade-in-up' : ''}`;

  const services = [
    {
      name: 'Plumbing Services',
      description: 'Expert repairs, installations, and maintenance for all your residential and commercial plumbing needs.',
      icon: 'Droplets',
      link: '/services/plumbing',
    },
    {
      name: 'Painting Services',
      description: 'Transform your space with professional interior and exterior painting services for homes and businesses.',
      icon: 'Paintbrush',
      link: '/services/painting',
    },
    {
      name: 'Home Decoration',
      description: 'Elevate your living spaces with bespoke home decoration and interior design solutions.',
      icon: 'Lamp',
      link: '/services/home-decoration',
    },
    {
      name: 'CCTV Installation',
      description: 'Reliable CCTV installation and maintenance for enhanced security of your property.',
      icon: 'Camera',
      link: '/services/cctv-installation',
    },
    {
      name: 'Electrical Services',
      description: 'Safe and efficient electrical repairs, installations, and wiring solutions for homes and offices.',
      icon: 'Zap',
      link: '/services/electrical',
    },
    {
      name: 'AC Repair & Maintenance',
      description: 'Keep your cool with our expert AC repair, servicing, and maintenance for optimal performance.',
      icon: 'Fan',
      link: '/services/ac-repair',
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Comprehensive Services"
        subtitle="Your one-stop solution for all home maintenance and renovation needs."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <section ref={sectionRef} className={`py-16 bg-white ${isInView ? 'is-in-view' : ''}`}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${animateClass}`} style={{ animationDelay: '0ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative pb-4">
              Explore Our Expertise
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              At Fortis Home Maintenance, we pride ourselves on offering a diverse range of high-quality services to meet every aspect of property care and improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Link key={service.name} href={service.link} className="block">
                <div
                  className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group cursor-pointer ${animateClass}`}
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  <div className="text-blue-600 mb-4">
                    <Icon name={service.icon as any} size={48} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={`text-center ${animateClass}`} style={{ animationDelay: `${100 + services.length * 100}ms` }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Our services are tailored to meet your unique needs. Contact us today to discuss your specific requirements.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-lg">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesContent;
