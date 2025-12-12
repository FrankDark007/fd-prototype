import React from 'react';
import { ServiceAudience, ServiceCategory } from '../../types';
import { SERVICES } from '../../data/services';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServicesGrid from '../../components/sections/ServicesGrid';
import Button from '../../components/ui/Button';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

interface CategoryLandingProps {
  audience: ServiceAudience;
  category: ServiceCategory;
  title: string;
  description: string;
}

const CategoryLanding: React.FC<CategoryLandingProps> = ({ audience, category, title, description }) => {
  // Filter services for this category
  const categoryServices = SERVICES.filter(s => s.audience === audience && s.category === category);
  
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { label: audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial', path: `/services/${audience.toLowerCase()}/` },
    { label: title, path: '#' } // Current page
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta title={title} description={description} />
      
       <div className="bg-subtle/30 pt-8 pb-16 md:pt-12 md:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                    {title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    {description}
                </p>
                <div className="flex gap-4">
                    <Button to="/request/" variant="primary" className="h-11 px-6">
                        Get Help Now
                    </Button>
                </div>
            </div>
        </div>
      </div>

      <ServicesGrid services={categoryServices} />

      {/* Internal Linking: Other Categories */}
      <div className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Explore other {audience.toLowerCase()} services</h2>
              <div className="flex flex-wrap gap-4">
                  {['RESTORATION', 'CLEANUP', 'SPECIALTY', 'TECHNICAL']
                    .filter(c => c !== category) // Exclude current
                    .filter(c => audience === 'COMMERCIAL' || c !== 'TECHNICAL') // Technical is commercial only
                    .map(c => (
                      <Link 
                        key={c}
                        to={`/services/${audience.toLowerCase()}/${c.toLowerCase().replace('_','-')}-services/`}
                        className="px-6 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary transition-all"
                      >
                         {c.charAt(0) + c.slice(1).toLowerCase().replace('_',' ')} Services
                      </Link>
                  ))}
                  <Link 
                    to={`/services/${audience.toLowerCase()}/`}
                    className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-primary font-medium hover:bg-blue-50 transition-all"
                  >
                     All {audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial'} Services
                  </Link>
              </div>
          </div>
      </div>

      <div className="py-16 bg-gray-50 border-t border-gray-200 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Need immediate assistance?</h2>
            <p className="text-gray-600 mb-8">Our team is ready to deploy 24/7/365.</p>
            <Button to="/request/" variant="primary" className="h-12 px-8 text-lg">Request Service</Button>
         </div>
      </div>

    </main>
  );
};

export default CategoryLanding;