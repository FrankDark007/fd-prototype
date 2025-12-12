import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import { RESIDENTIAL_NAV } from '../../data/nav';
import { LOCATIONS } from '../../data/locations';
import Button from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  }

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        ref={drawerRef}
        id="mobile-menu"
        className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-bold text-lg text-gray-800 tracking-tight">FLOOD DOCTOR</span>
          <button 
            onClick={onClose}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 overflow-y-auto h-[calc(100%-80px)]">
          <Link to="/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            Home
          </Link>
          
          {/* Emergency Services Expandable */}
          <div className="border-b border-gray-100">
            <button 
                onClick={() => toggleSection('emergency')}
                className="w-full flex items-center justify-between py-3 px-2 text-lg font-medium text-gray-800 hover:bg-gray-50"
            >
                <span>Emergency Services</span>
                {expandedSection === 'emergency' ? <ChevronDown size={20} /> : <ChevronRight size={20} className="text-gray-400" />}
            </button>
            {expandedSection === 'emergency' && (
                <ul className="bg-gray-50 px-4 py-2 space-y-3 mb-2 rounded-lg">
                    {RESIDENTIAL_NAV.items.slice(0, 5).map((item) => (
                        <li key={item.path}>
                            <Link to={item.path} className="block text-sm text-gray-700 hover:text-primary py-1">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/services/" className="block text-sm font-medium text-primary py-1">View All Services</Link>
                    </li>
                </ul>
            )}
          </div>

          <Link to="/services/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            All Services
          </Link>

           {/* Locations Expandable */}
           <div className="border-b border-gray-100">
            <button 
                onClick={() => toggleSection('locations')}
                className="w-full flex items-center justify-between py-3 px-2 text-lg font-medium text-gray-800 hover:bg-gray-50"
            >
                <span>Locations</span>
                {expandedSection === 'locations' ? <ChevronDown size={20} /> : <ChevronRight size={20} className="text-gray-400" />}
            </button>
            {expandedSection === 'locations' && (
                <ul className="bg-gray-50 px-4 py-2 space-y-3 mb-2 rounded-lg">
                    {LOCATIONS.slice(0, 6).map((item) => (
                        <li key={item.title}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-700 hover:text-primary py-1">
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link to="/locations/" className="block text-sm font-medium text-primary py-1">View All 12 Cities</Link>
                    </li>
                </ul>
            )}
          </div>

          <Link to="/about/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            About
          </Link>
          
          <Link to="/reviews/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            Reviews
          </Link>

          <Link to="/resources/faq/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            FAQ
          </Link>

          <Link to="/blog/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            Blog
          </Link>
          
          <Link to="/contact/" className="py-3 px-2 text-lg font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50">
            Contact
          </Link>

          <div className="mt-8">
             <Button to="/request/" fullWidth variant="primary" className="mb-4 py-3 text-lg">
                REQUEST EMERGENCY HELP
             </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;