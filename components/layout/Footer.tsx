import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto pb-24 md:pb-0">
        
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 sm:px-6 lg:px-8">
            
            {/* Top Row: Socials / Follow Us */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-12">
               <h3 className="text-lg font-semibold text-gray-900">Follow us</h3>
               <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                   <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
               </div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                
                <div className="col-span-1">
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">Services</h3>
                    <ul className="space-y-3">
                        <li><Link to="/services/" className="text-sm text-gray-500 hover:text-primary transition-colors">All Services</Link></li>
                        <li><Link to="/services/residential/" className="text-sm text-gray-500 hover:text-primary transition-colors">Residential</Link></li>
                        <li><Link to="/services/commercial/" className="text-sm text-gray-500 hover:text-primary transition-colors">Commercial</Link></li>
                        <li><Link to="/locations/" className="text-sm text-gray-500 hover:text-primary transition-colors">Locations</Link></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">Resources</h3>
                    <ul className="space-y-3">
                         <li><Link to="/resources/faq/" className="text-sm text-gray-500 hover:text-primary transition-colors">FAQ</Link></li>
                         <li><Link to="/blog/" className="text-sm text-gray-500 hover:text-primary transition-colors">Blog</Link></li>
                         <li><Link to="/resources/technology/" className="text-sm text-gray-500 hover:text-primary transition-colors">Our Technology</Link></li>
                         <li><Link to="/resources/insurance-guide/" className="text-sm text-gray-500 hover:text-primary transition-colors">Insurance Help</Link></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><Link to="/about/" className="text-sm text-gray-500 hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/reviews/" className="text-sm text-gray-500 hover:text-primary transition-colors">Reviews</Link></li>
                        <li><Link to="/contact/" className="text-sm text-gray-500 hover:text-primary transition-colors">Contact</Link></li>
                        <li><Link to="/resources/communication/" className="text-sm text-gray-500 hover:text-primary transition-colors">Communication</Link></li>
                        <li><Link to="/careers/" className="text-sm text-gray-500 hover:text-primary transition-colors">Careers</Link></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">Help & Legal</h3>
                    <ul className="space-y-3">
                        <li><Link to="/request/" className="text-sm text-gray-500 hover:text-primary transition-colors">Request Service</Link></li>
                        <li><Link to="/privacy-policy/" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms/" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

            </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
                <div className="flex justify-center md:order-2 space-x-6 md:space-x-8">
                     <span className="text-xs text-gray-500 flex items-center">
                         <span className="mr-2">🇺🇸</span> United States (English)
                     </span>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Flood Doctor. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;