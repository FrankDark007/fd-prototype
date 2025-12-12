import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import PageMeta from '../components/ui/PageMeta';
import { SERVICES, getServicesByAudience } from '../data/services';
import ServicesFilterHintCard from '../components/ui/illustrations/ServicesFilterHintCard';

interface ServicesHubProps {
  title: string;
  subtitle: string;
  filterAudience?: 'RESIDENTIAL' | 'COMMERCIAL';
}

const ServicesHub: React.FC<ServicesHubProps> = ({ title, subtitle, filterAudience }) => {
  const filteredServices = filterAudience ? getServicesByAudience(filterAudience) : SERVICES;
  const metaTitle = filterAudience ? `${title} | Northern Virginia` : 'All Restoration Services';

  return (
    <main className="flex-grow pb-20 md:pb-0">
      <PageMeta title={metaTitle} description={subtitle} />
      
      <Hero title={<>{title}</>} subtitle={subtitle} />
      
      {/* Category Grouping Logic or Simple Grid */}
      <div className="bg-subtle/30 border-t border-gray-100 relative">
         
         {/* Visual Hint for Filtering (Purely illustrative as per design system requirements) */}
         <div className="absolute top-0 left-0 right-0 -mt-5 flex justify-center pointer-events-none">
             <ServicesFilterHintCard />
         </div>

         {filterAudience ? (
             <ServicesGrid services={filteredServices} />
         ) : (
             <>
                <ServicesGrid services={getServicesByAudience('RESIDENTIAL')} title="Residential Services" />
                <div className="border-t border-gray-200 mx-4 lg:mx-8"></div>
                <ServicesGrid services={getServicesByAudience('COMMERCIAL')} title="Commercial Services" />
             </>
         )}
      </div>
    </main>
  );
};

export default ServicesHub;