import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ChevronRight, 
  Home, 
  Briefcase, 
  Hammer, 
  Building2, 
  MapPin, 
  BookOpen, 
  Star, 
  Info, 
  Phone 
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Services', path: '/services/', icon: Briefcase },
  { label: 'Residential Services', path: '/services/residential/', icon: Hammer },
  { label: 'Commercial Services', path: '/services/commercial/', icon: Building2 },
  { label: 'Locations', path: '/locations/', icon: MapPin },
  { label: 'Resources', path: '/resources/', icon: BookOpen },
  { label: 'Reviews', path: '/reviews/', icon: Star },
  { label: 'About', path: '/about/', icon: Info },
  { label: 'Contact', path: '/contact/', icon: Phone },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        ref={menuRef}
        id="mobile-menu"
        className={`fixed top-0 left-0 w-[85%] max-w-[360px] h-full bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0 h-16">
          <button 
            onClick={onClose}
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <span className="font-bold text-lg text-gray-900 tracking-tight">FLOOD DOCTOR</span>
          <div className="w-10"></div> {/* Spacer for center alignment balance */}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col">
            {MENU_ITEMS.map((item) => {
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.path);
              
              const Icon = item.icon;

              return (
                <li key={item.path} className="border-b border-gray-50 last:border-0">
                  <Link 
                    to={item.path} 
                    className={`flex items-center w-full px-6 py-4 text-[17px] font-medium transition-colors ${
                        isActive 
                        ? 'text-primary bg-blue-50/50' 
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} className={`mr-4 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight size={20} className={isActive ? 'text-primary' : 'text-gray-300'} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;