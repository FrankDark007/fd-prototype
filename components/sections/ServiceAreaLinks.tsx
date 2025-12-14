import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../../data/locations';

const ServiceAreaLinks: React.FC = () => {
  // We use a subset for the footer of service pages to avoid overwhelming the user,
  // but enough to provide good internal linking signal.
  const featuredLocations = LOCATIONS.slice(0, 8);

  return (
    <div className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
            Serving Northern Virginia & Surrounding Areas
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
            {featuredLocations.map((loc) => (
                loc.url ? (
                    <a 
                        key={loc.title} 
                        href={loc.url}
                        className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                        {loc.title} Water Damage Restoration
                    </a>
                ) : (
                    <span key={loc.title} className="text-sm text-gray-400 cursor-default">
                        {loc.title}
                    </span>
                )
            ))}
            <Link to="/locations/" className="text-sm font-medium text-primary hover:underline">
                View All Service Areas &rarr;
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaLinks;