import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ServiceData } from '../../types';
import ServiceCardThumb from '../services/ServiceCardThumb';

interface ServicesGridProps {
  services: ServiceData[];
  title?: string;
  id?: string;
  children?: React.ReactNode;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, title, id, children }) => {
  if (services.length === 0) return null;

  return (
    <div id={id} className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
            <div className="mb-12 md:mb-16 max-w-3xl">
                <h2 className="text-[28px] md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">{title}</h2>
                <p className="text-lg text-gray-600">Comprehensive restoration solutions for every emergency.</p>
            </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.slug} 
              className="group block bg-gray-50 border border-transparent rounded-[24px] shadow-sm hover:shadow-lg hover:bg-white hover:border-gray-100 transition-all duration-300 h-full flex flex-col overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="p-2 pb-0">
                <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-white border border-gray-200/50 shadow-sm group-hover:shadow-md transition-shadow">
                   <ServiceCardThumb 
                      visualKey={service.thumbVisualKey} 
                      className="w-full h-full transform transition-transform duration-500 group-hover:scale-[1.02]" 
                   />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <span className="p-2 rounded-full bg-white text-gray-400 border border-gray-100 group-hover:bg-blue-50 group-hover:text-primary group-hover:border-blue-100 transition-all">
                      <ChevronRight size={20} />
                  </span>
                </div>
                <p className="text-base text-gray-600 leading-relaxed flex-grow">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {children && (
           <div className="mt-12 text-center hidden md:block">
             {children}
           </div>
        )}
      </div>
    </div>
  );
};

export default ServicesGrid;