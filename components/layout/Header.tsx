import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '../../data/nav';
import { SERVICES } from '../../data/services';
import { LOCATIONS, NEARBY_AREAS } from '../../data/locations';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';

// Helper to Group Services by Category within an Audience
const getGroupedServices = (audience: 'RESIDENTIAL' | 'COMMERCIAL') => {
  const audienceServices = SERVICES.filter(s => s.audience === audience);
  
  // Define category order
  const categories: Record<string, string> = audience === 'RESIDENTIAL' 
    ? { 'RESTORATION': 'Restoration Services', 'CLEANUP': 'Cleanup Services', 'SPECIALTY': 'Specialty Services' }
    : { 'RESTORATION': 'Restoration Services', 'CLEANUP': 'Cleanup Services', 'TECHNICAL': 'Technical Services', 'SPECIALTY': 'Specialty Services' };

  return Object.entries(categories).map(([catKey, label]) => ({
    label,
    items: audienceServices.filter(s => s.category === catKey)
  })).filter(group => group.items.length > 0);
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdowns on outside click or route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setActiveDropdown(null);
            setMobileMenuOpen(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const residentialGroups = getGroupedServices('RESIDENTIAL');
  const commercialGroups = getGroupedServices('COMMERCIAL');

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:p-4 focus:z-50 focus:ring-2 focus:ring-primary text-primary font-bold">
        Skip to content
      </a>

      {/* Header: 64px on mobile (h-16), 80px on desktop (h-20) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Mobile: Left Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-start flex-1 md:flex-none ml-2 md:ml-0">
              <Link to="/" className="flex items-center gap-1.5 text-xl md:text-2xl tracking-tight text-gray-900 group" aria-label="Flood Doctor Home">
                 <span className="text-primary font-bold group-hover:text-primaryHover">FLOOD</span>
                 <span className="font-semibold text-secondary">DOCTOR</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 ml-8 flex-1" ref={navRef}>
              
              {MAIN_NAV_ITEMS.map((item) => {
                if (item.type === 'dropdown') {
                  const isOpen = activeDropdown === item.dropdownId;
                  return (
                    <div key={item.label} className="relative group">
                      <button 
                        onClick={() => toggleDropdown(item.dropdownId!)}
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${isOpen ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mega Menu Logic: Services */}
                      {isOpen && item.dropdownId === 'services' && (
                        <div className="absolute left-0 mt-2 w-[900px] max-w-[90vw] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden border border-gray-100">
                          
                          {/* Scrollable Content Area */}
                          <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar overscroll-contain">
                            <div className="grid grid-cols-2 gap-16">
                                
                                {/* Residential Column */}
                                <div>
                                    <Link to="/services/residential/" className="block text-base font-bold text-primary uppercase tracking-wide mb-6 pb-2 border-b border-gray-100 hover:text-primaryHover">
                                        Residential Services
                                    </Link>
                                    <div className="space-y-8">
                                        {residentialGroups.map((group) => (
                                            <div key={group.label}>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 opacity-60">{group.label}</h4>
                                                <ul className="space-y-1">
                                                    {group.items.map(service => (
                                                        <li key={service.id}>
                                                            <Link to={service.slug} className="block text-sm text-gray-600 hover:text-primary py-1.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                                {service.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Commercial Column */}
                                <div>
                                    <Link to="/services/commercial/" className="block text-base font-bold text-primary uppercase tracking-wide mb-6 pb-2 border-b border-gray-100 hover:text-primaryHover">
                                        Commercial Services
                                    </Link>
                                    <div className="space-y-8">
                                        {commercialGroups.map((group) => (
                                            <div key={group.label}>
                                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 opacity-60">{group.label}</h4>
                                                <ul className="space-y-1">
                                                    {group.items.map(service => (
                                                        <li key={service.id}>
                                                            <Link to={service.slug} className="block text-sm text-gray-600 hover:text-primary py-1.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                                {service.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                          </div>

                          {/* Mega Menu Footer */}
                          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between bg-white z-10 relative">
                             <Link to="/services/" className="text-sm font-medium text-primary hover:text-primaryHover hover:underline flex items-center">
                                View Full Service Directory &rarr;
                             </Link>
                             <Button to="/request/" variant="primary" className="h-10 px-6 text-sm font-semibold">
                                Request Service
                             </Button>
                          </div>
                        </div>
                      )}

                      {/* Mega Menu Logic: Locations */}
                      {isOpen && item.dropdownId === 'locations' && (
                        <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-8 grid grid-cols-2 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-gray-100">
                          <div>
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">Northern Virginia</h3>
                            <ul className="space-y-2">
                              {LOCATIONS.slice(0, 8).map(loc => (
                                <li key={loc.title}>
                                  <a href={loc.url} className="text-sm text-gray-600 hover:text-primary block py-1.5 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors">
                                    {loc.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">Nearby Areas</h3>
                            <ul className="space-y-2">
                                {NEARBY_AREAS.map(loc => (
                                    <li key={loc.title}>
                                        <span className="text-sm text-gray-400 block py-1.5 px-2 -mx-2 cursor-default">{loc.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <Link to="/locations/" className="text-sm font-medium text-primary hover:underline block mb-2">View All 12 Cities &rarr;</Link>
                                <Link to="/locations/" className="text-sm font-medium text-primary hover:underline block">View Service Area Map &rarr;</Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link 
                    key={item.label} 
                    to={item.path!} 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:8774970007" className="flex items-center text-gray-700 font-semibold hover:text-primary transition-colors px-3 py-2 rounded-full hover:bg-gray-50">
                <span className="text-[17px] font-semibold tracking-tight">(877) 497-0007</span>
              </a>
              <Button to="/request/" variant="primary">
                Request Services
              </Button>
            </div>

            {/* Mobile: Phone Button */}
            <div className="flex items-center md:hidden">
              <a 
                 href="tel:8774970007" 
                 className="p-2 -mr-2 text-primary hover:bg-blue-50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                 aria-label="Call Now"
              >
                 <Phone size={24} className="text-primary" />
              </a>
            </div>

          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;