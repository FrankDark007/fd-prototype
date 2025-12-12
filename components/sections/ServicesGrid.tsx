import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ServiceData } from '../../types';

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
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">{title}</h2>
                <p className="text-lg text-gray-600">Comprehensive restoration solutions for every emergency.</p>
            </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.slug} 
              className="group block p-8 bg-white border border-gray-200 rounded-2xl shadow-none hover:shadow-md transition-all duration-200 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <span className="p-2 rounded-full bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-primary transition-colors">
                    <ChevronRight size={20} />
                </span>
              </div>
              <p className="text-base text-gray-600 leading-relaxed flex-grow">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
        {children && (
           <div className="mt-12 text-center">
             {children}
           </div>
        )}
      </div>
    </div>
  );
};

export default ServicesGrid;