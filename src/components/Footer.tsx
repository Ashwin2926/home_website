// src/components/Footer.tsx
import React from 'react';
import Input from '@/components/Input'; // Adjusted import path to alias
import Button from '@/components/Button'; // Adjusted import path to alias
import Icon from '@/components/Icon';     // Adjusted import path to alias

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-bold mb-4">PHM</h3>
          <p className="text-gray-400 mb-4">Leading the industry with quality, efficiency, and reliability. Your trusted partner for all plumbing needs.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110"><Icon name="Facebook" size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110"><Icon name="Twitter" size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110"><Icon name="Linkedin" size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110"><Icon name="Instagram" size={24} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white hover:underline underline-offset-2 transition-all duration-200">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white hover:underline underline-offset-2 transition-all duration-200">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white hover:underline underline-offset-2 transition-all duration-200">Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white hover:underline underline-offset-2 transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <p className="text-gray-400 mb-2">1001 Warsan Building Barsha Heights, UAE</p>
          <p className="text-gray-400 mb-2">contact@prevailhomemaintances.com</p>
          <p className="text-gray-400">(213) 54-5436</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
          <form className="flex animate-slide-right-hover"> {/* Added class for arrow animation */}
            <Input type="email" placeholder="Your Email" className="flex-1 bg-gray-700 border-gray-600 text-white rounded-r-none focus:ring-0 focus:border-blue-500" />
            <Button type="submit" variant="primary" className="bg-blue-600 text-white hover:bg-blue-700 rounded-l-none">
              <span className="arrow-icon">➔</span> {/* Added span for animation */}
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© 2025 PrevailHomeMaintances. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
