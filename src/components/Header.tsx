// src/components/Header.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react'; // Added useCallback
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname for active link styling

import Button from '@/components/Button';
import Icon from '@/components/Icon';

// --- Data for Navigation Links ---
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    subLinks: [
      { label: 'Plumbing Services', href: '/services/plumbing' },
      { label: 'Painting Services', href: '/services/painting' },
      { label: 'CCTV Installation', href: '/services/cctv-installation' },
      { label: 'General Maintanance', href: '/services/general-maintenance' },
      { label: 'Home Decorations ', href: '/services/home-decorations' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current path for active link styling

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    // Using requestAnimationFrame for smoother scroll performance
    window.requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
  }, []); // Empty dependency array means this function is created once

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Re-run effect if handleScroll changes (it won't with useCallback)

  // Effect for Body Overflow on Mobile Menu
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      // Clean up on unmount or if isMenuOpen changes
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define Framer Motion Variants for the Header component
  const mobileMenuContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  };

  return (
    <>
      <motion.header
        className={`fixed top-[32px] w-full z-40 transition-all duration-300 ease-in-out
          ${isScrolled ? 'bg-white shadow-md' : 'bg-white'} py-6`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-blue-700" onClick={() => isMenuOpen && toggleMenu()}> {/* Close menu if open on logo click */}
            PHM
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.ul
              className="flex items-center space-x-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href; // Determine if link is active
                return link.subLinks ? (
                  <DesktopDropdown
                    key={link.label}
                    link={link}
                    itemVariants={menuItemVariants}
                    pathname={pathname} // Pass pathname to dropdown
                  />
                ) : (
                  <motion.li key={link.label} variants={menuItemVariants} className="list-none">
                    <Link
                      href={link.href}
                      className={`hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
                      aria-current={isActive ? 'page' : undefined} // ARIA for active page
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li variants={menuItemVariants} className="list-none">
                <Link href="/contact" passHref>
                  <Button variant="primary" className="px-6 py-3 text-base">
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.li>
            </motion.ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={toggleMenu}
            containerVariants={mobileMenuContainerVariants}
            itemVariants={menuItemVariants}
            pathname={pathname} // Pass pathname to mobile menu
          />
        )}
      </AnimatePresence>
    </>
  );
};

// --- Sub-component for Desktop Dropdown ---
const DesktopDropdown = ({ link, itemVariants, pathname }: { link: (typeof navLinks)[0]; itemVariants: Variants; pathname: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the button
  const firstItemRef = useRef<HTMLAnchorElement>(null); // Ref for the first dropdown item

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation for dropdown
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isDropdownOpen) return;

    const focusableElements = Array.from(
      dropdownRef.current?.querySelectorAll('a, button') || []
    ) as (HTMLAnchorElement | HTMLButtonElement)[];

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const currentActiveElement = document.activeElement;

    if (event.key === 'Escape') {
      setIsDropdownOpen(false);
      buttonRef.current?.focus(); // Return focus to the main button
      event.preventDefault();
    } else if (event.key === 'ArrowDown' || event.key === 'Tab') {
      if (!currentActiveElement || !focusableElements.includes(currentActiveElement as HTMLAnchorElement | HTMLButtonElement)) {
        firstElement.focus();
        event.preventDefault();
      } else if (currentActiveElement === lastElement && event.key === 'Tab' && !event.shiftKey) {
        setIsDropdownOpen(false); // Close dropdown if tabbing past last item
      }
    } else if (event.key === 'ArrowUp' && currentActiveElement === firstElement) {
      // Allow moving focus back to the dropdown button on ArrowUp from first item
      buttonRef.current?.focus();
      event.preventDefault();
    } else if (event.key === 'Tab' && event.shiftKey && currentActiveElement === firstElement) {
      setIsDropdownOpen(false); // Close dropdown if shift-tabbing back from first item
      buttonRef.current?.focus(); // Return focus to the main button
      event.preventDefault();
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      // Focus the first item when dropdown opens, allowing a slight delay for animation
      const timer = setTimeout(() => {
        firstItemRef.current?.focus();
      }, 50);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDropdownOpen, handleKeyDown]);


  const isLinkActive = (href: string) => pathname === href || (link.subLinks && link.subLinks.some(sub => sub.href === pathname && sub.href.startsWith(link.href)));


  return (
    <motion.li
      variants={itemVariants}
      className="list-none relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef} // Attach ref here
    >
      <button
        ref={buttonRef} // Attach ref to the button
        className={`flex items-center transition-colors focus:outline-none text-base
          ${isDropdownOpen || isLinkActive(link.href) ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={handleButtonClick} // Toggle on click for accessibility
      >
        <span>{link.label}</span>
        <Icon name="ChevronDown" size={16} className={`ml-1 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.95, y: -5 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.95, y: -5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 origin-top"
            role="menu" // ARIA role for menu
            aria-orientation="vertical"
          >
            <Link
              href={link.href}
              className={`block px-4 py-2 text-gray-700 hover:bg-blue-100 ${isLinkActive(link.href) && !link.subLinks?.some(sub => sub.href === pathname) ? 'font-semibold text-blue-700 bg-blue-50' : ''}`}
              role="menuitem" // ARIA role for menu item
              onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
              ref={firstItemRef} // Assign ref to the first item
            >
              All Services
            </Link>
            <div className="h-px bg-gray-200 my-1"></div>
            {link.subLinks?.map((subLink) => {
              const isSubLinkActive = pathname === subLink.href;
              return (
                <Link
                  key={subLink.label}
                  href={subLink.href}
                  className={`block px-4 py-2 text-gray-700 hover:bg-blue-100 ${isSubLinkActive ? 'font-semibold text-blue-700 bg-blue-50' : ''}`}
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                >
                  {subLink.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

// --- Sub-component for Mobile Menu ---
const MobileMenu = ({
  onClose,
  containerVariants,
  itemVariants,
  pathname,
}: {
  links: typeof navLinks;
  onClose: () => void;
  containerVariants: Variants;
  itemVariants: Variants;
  pathname: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? '' : label);
  };

  const subDropdownContentVariants: Variants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
  };

  const subLinkItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
  };

  return (
    <motion.div
      className="md:hidden fixed inset-0 top-[32px] bg-blue-700 text-white pt-6 pb-6 px-4 overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <nav>
        <motion.ul
          className="flex flex-col items-center space-y-4 pt-12"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return link.subLinks ? (
              <motion.li key={link.label} variants={itemVariants} className="w-full text-center">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className={`flex items-center justify-center cursor-pointer py-2 w-full focus:outline-none transition-colors
                    ${openDropdown === link.label || isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'}`}
                  aria-expanded={openDropdown === link.label}
                  aria-label={`Toggle services dropdown for ${link.label}`}
                >
                  <span>{link.label}</span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className={`ml-1 transform transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openDropdown === link.label && (
                    <motion.div
                      className="flex flex-col space-y-2 mt-2 bg-blue-800 rounded-md py-2 overflow-hidden"
                      variants={subDropdownContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <motion.div variants={subLinkItemVariants}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className={`block px-4 py-2 text-white hover:bg-blue-600 transition-colors ${isActive && !link.subLinks?.some(sub => sub.href === pathname) ? 'font-semibold bg-blue-600' : ''}`}
                        >
                          All Services
                        </Link>
                      </motion.div>
                      {link.subLinks.map((subLink) => {
                        const isSubLinkActive = pathname === subLink.href;
                        return (
                          <motion.div key={subLink.label} variants={subLinkItemVariants}>
                            <Link
                              href={subLink.href}
                              onClick={onClose}
                              className={`block px-4 py-2 text-white hover:bg-blue-600 transition-colors ${isSubLinkActive ? 'font-semibold bg-blue-600' : ''}`}
                            >
                              {subLink.label}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ) : (
              <motion.li key={link.label} variants={itemVariants} className="w-full text-center">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block py-2 hover:text-blue-200 transition-colors ${isActive ? 'text-blue-200 font-bold' : 'text-white'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
          <motion.li variants={itemVariants} className="w-full text-center mt-4">
            <Link href="/contact" passHref>
              <Button variant="primary" className="w-full py-3 text-lg" onClick={onClose}>
                Get a Free Quote
              </Button>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
};

export default Header;