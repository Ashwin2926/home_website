// src/app/services/general-maintenance/page.tsx
"use client"; // Added: This component needs to be a Client Component for Framer Motion

import Link from 'next/link';
import Button from '@/components/Button';
import Icon from '@/components/Icon'; // Assuming you have an Icon component
import { motion, Variants } from 'framer-motion'; // Added: Import motion and Variants
import PageHeader from '@/components/PageHeader'; // Added: Import PageHeader


// Defined: Framer Motion Variants for the main page sections (below the header)
const pageSectionContainerVariants: Variants = { // Renamed for clarity
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const pageSectionItemVariants: Variants = { // Renamed for clarity
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

const GeneralMaintenancePage: React.FC = () => {
  const generalMaintenanceSubServices = [
    {
      title: 'Handyman Services',
      description: 'Reliable help for various odd jobs, repairs, and installations around your property.',
      icon: 'Hammer', // Assuming 'Hammer' icon
    },
    {
      title: 'AC Repair & Maintenance',
      description: 'Expert service for air conditioning units, ensuring optimal cooling and efficiency.',
      icon: 'Fan', // Assuming 'Fan' or 'Snowflake' icon
    },
    {
      title: 'Electrical Services',
      description: 'Safe and certified electrical repairs, installations, and wiring solutions.',
      icon: 'Bolt', // Assuming 'Bolt' icon
    },
    {
      title: 'Carpentry & Joinery',
      description: 'From custom furniture to door repairs, our carpenters deliver quality craftsmanship.',
      icon: 'Saw', // Assuming 'Saw' or 'Wood' icon
    },
    {
      title: 'Tiling & Masonry',
      description: 'Professional tiling for floors and walls, and masonry work for various structures.',
      icon: 'Brick', // Assuming 'Brick' icon
    },
    {
      title: 'Water Tank Cleaning',
      description: 'Thorough cleaning and disinfection of water tanks for safe and clean water supply.',
      icon: 'WaterTank', // Assuming 'WaterTank' or 'Droplet' icon
    },
  ];

  return (
    <motion.div // Applied: pageSectionContainerVariants to the main div
      className="bg-gray-100 pb-16"
      variants={pageSectionContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* PageHeader Component */}
      <PageHeader
        title="Comprehensive General Maintenance"
        subtitle="Prevail Home Maintenance is your one-stop solution for all general property upkeep, repairs, and enhancements."
        backgroundImage="/images/headerimages/general_maintenance.jpg" // Assuming you have an image for general maintenance
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'General Maintenance', href: '/services/general-maintenance' },
        ]}
      />

      {/* "Request Handyman Services" Button - moved here as a separate animated element */}
      <motion.div
        variants={pageSectionItemVariants} // Apply animation to the button container
        className="container mx-auto px-4 text-center mt-[-40px] relative z-20" // Adjust mt to visually align
      >
        <Link href="/contact">
          <Button className="px-8 py-4 text-lg bg-white text-indigo-700 hover:bg-gray-100 transition-colors border-white hover:border-gray-100">
            Request Handyman Services
          </Button>
        </Link>
      </motion.div>


      {/* Detailed Service Offerings */}
      <motion.section variants={pageSectionItemVariants} className="container mx-auto px-4 py-8"> {/* Applied: pageSectionItemVariants */}
        <motion.h2 variants={pageSectionItemVariants} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4">
          Our Wide Range of General Maintenance Services
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-indigo-600 rounded-full"></span>
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-indigo-400 rounded-full"></span>
        </motion.h2>
        <motion.div variants={pageSectionContainerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Applied: pageSectionContainerVariants for staggered grid items */}
          {generalMaintenanceSubServices.map((service, index) => (
            <motion.div variants={pageSectionItemVariants} key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"> {/* Applied: pageSectionItemVariants to individual service cards */}
              <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-700 rounded-full mb-4">
                {service.icon && <Icon name={service.icon} size={28} />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us for General Maintenance Section */}
      <motion.section variants={pageSectionItemVariants} className="bg-white py-16 mt-12"> {/* Applied: pageSectionItemVariants */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={pageSectionItemVariants} className="md:w-1/2"> {/* Applied: pageSectionItemVariants */}
            <img
              src="/images/assets/general-maintenance.jpg" // Replace with a relevant general maintenance image
              alt="General Maintenance Worker"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div variants={pageSectionItemVariants} className="md:w-1/2"> {/* Applied: pageSectionItemVariants */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Prevail Advantage for General Maintenance
            </h2>
            <motion.ul variants={pageSectionContainerVariants} className="space-y-4 text-lg text-gray-700"> {/* Applied: pageSectionContainerVariants for staggered list items */}
              <motion.li variants={pageSectionItemVariants} className="flex items-start"> {/* Applied: pageSectionItemVariants */}
                <Icon name="CheckCircle" size={24} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Multi-Skilled Technicians:** A single point of contact for diverse maintenance needs.</span>
              </motion.li>
              <motion.li variants={pageSectionItemVariants} className="flex items-start"> {/* Applied: pageSectionItemVariants */}
                <Icon name="CheckCircle" size={24} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Prompt & Reliable Service:** We arrive on time and complete tasks efficiently.</span>
              </motion.li>
              <motion.li variants={pageSectionItemVariants} className="flex items-start"> {/* Applied: pageSectionItemVariants */}
                <Icon name="CheckCircle" size={24} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Transparent Communication:** Keeping you informed throughout the service process.</span>
              </motion.li>
              <motion.li variants={pageSectionItemVariants} className="flex items-start"> {/* Applied: pageSectionItemVariants */}
                <Icon name="CheckCircle" size={24} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>**Flexible Service Plans:** Offering one-time fixes or comprehensive annual contracts.</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Final Call to Action */}
      <motion.section variants={pageSectionItemVariants} className="py-12 bg-indigo-700 text-white text-center mt-12"> {/* Applied: pageSectionItemVariants */}
        <motion.div variants={pageSectionItemVariants} className="container mx-auto px-4"> {/* Applied: pageSectionItemVariants */}
          <h2 className="text-3xl font-bold mb-6">Keep Your Property in Top Shape!</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact Prevail Home Maintenance for reliable and efficient general maintenance services.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="px-8 py-4 text-lg bg-white text-indigo-700 hover:bg-gray-100 border-white hover:border-gray-100">
              Get a Maintenance Quote
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default GeneralMaintenancePage;