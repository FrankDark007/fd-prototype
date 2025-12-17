import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ShieldAlert } from 'lucide-react';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for the "Glassy" look
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu if route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-white py-4 lg:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* 1. Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <ShieldAlert size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-display font-bold text-xl text-gray-900 tracking-tight">
                FLOOD DOCTOR
              </span>
            </Link>

            {/* 2. Desktop Navigation (Clean Links) */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Services', path: '/services/' },
                { label: 'Locations', path: '/locations/' },
                { label: 'Resources', path: '/resources/' },
                { label: 'Reviews', path: '/reviews/' },
                { label: 'About', path: '/about/' },
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-[15px] font-medium text-gray-600 hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  {/* Hover Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* 3. Actions */}
            <div className="flex items-center gap-4">
              {/* Phone (Hidden on small mobile) */}
              <a 
                href="tel:8774970007" 
                className="hidden md:flex items-center gap-2 text-gray-900 hover:text-primary transition-colors font-medium text-[15px]"
              >
                <Phone size={18} />
                <span>(877) 497-0007</span>
              </a>

              {/* CTA Button (Desktop) */}
              <div className="hidden sm:block">
                <Button to="/request/" variant="primary" className="h-10 px-6 text-sm shadow-button font-semibold">
                  Request Service
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -mr-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:ring-2 focus:ring-primary/20"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Spacer to prevent content hiding behind fixed header */}
      <div className={isScrolled ? 'h-16' : 'h-20 lg:h-24'}></div>
    </>
  );
};

export default Header;