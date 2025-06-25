// src/app/services/home-decoration/page.tsx
"use client"; // This component needs to be a Client Component for Framer Motion

import Link from 'next/link';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { motion, Variants } from 'framer-motion';

// Define Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const HomeDecorationPage: React.FC = () => {
  const decorationSubServices = [
    {
      title: 'Interior Design Consultation',
      description: 'Expert advice and design planning to conceptualize your ideal living space.',
      icon: 'Lightbulb',
    },
    {
      title: 'Space Planning & Layout',
      description: 'Optimizing your floor plan for functionality, flow, and aesthetic appeal.',
      icon: 'Layout',
    },
    {
      title: 'Furniture & Decor Selection',
      description: 'Assistance in choosing the perfect furniture, lighting, and decorative elements.',
      icon: 'Chair',
    },
    {
      title: 'Custom Joinery & Carpentry',
      description: 'Bespoke built-in units, cabinets, and custom wooden features for unique interiors.',
      icon: 'Hammer',
    },
    {
      title: 'Flooring & Wall Finishes',
      description: 'Installation of various flooring types and application of specialized wall finishes.',
      icon: 'Square',
    },
    {
      title: 'Lighting Design',
      description: 'Creating ambient, task, and accent lighting plans to enhance mood and functionality.',
      icon: 'Lamp',
    },
  ];

  return (
    <motion.div
      className="bg-gray-100 pb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Service-Specific Hero Section */}
      <section className="relative bg-orange-600 text-white py-24 mb-12 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Exquisite Home Decoration
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Bring your dream home to life with Fortis Home Maintenance's comprehensive home decoration and interior design services.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8 inline-block"> {/* THIS IS THE LINE THAT WAS MISSED BEFORE */}
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-4 text-lg bg-white text-indigo-700 hover:bg-gray-100 border-white hover:border-gray-100">
              Start your design 
            </Button>
            </Link>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-lg -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500 rounded-full opacity-10 blur-lg translate-x-1/4 translate-y-1/4"></div>
      </section>

      {/* Detailed Service Offerings */}
      <motion.section variants={containerVariants} className="container mx-auto px-4 py-8">
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4">
          Our Home Decoration Services
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-orange-600 rounded-full"></span>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-orange-400 rounded-full"></span>
        </motion.h2>
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decorationSubServices.map((service, index) => (
            <motion.div variants={itemVariants} key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-full mb-4">
                {service.icon && <Icon name={service.icon} size={28} />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us for Home Decoration Section */}
      <motion.section variants={containerVariants} className="bg-white py-16 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2">
            <img
              src="/images/assets/home-decor-interior.jpg"
              alt="Beautifully Designed Interior"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Trust Fortis with Your Interior Design?
            </h2>
            <motion.ul variants={containerVariants} className="space-y-4 text-lg text-gray-700">
              <motion.li variants={itemVariants} className="flex items-start">
                <Icon name="CheckCircle" size={24} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Creative & Experienced Designers:** Bringing innovative and practical designs to life.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Icon name="CheckCircle" size={24} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Personalized Approach:** Designs tailored to your style, budget, and functional needs.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Icon name="CheckCircle" size={24} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <span>**End-to-End Project Management:** From concept to completion, we handle it all.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Icon name="CheckCircle" size={24} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Quality Craftsmanship:** Ensuring high standards in all renovation and finishing work.</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Final Call to Action */}
      <motion.section variants={containerVariants} className="py-12 bg-orange-600 text-white text-center mt-12">
        <motion.div variants={itemVariants} className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Redecorate? Let's Connect!</h2>
          <p className="text-lg opacity-90 mb-8">
            Schedule a consultation to discuss your home decoration aspirations with our experts.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="px-8 py-4 text-lg bg-white text-orange-600 hover:bg-gray-100 border-white hover:border-gray-100">
              Get a Design Consultation
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HomeDecorationPage;