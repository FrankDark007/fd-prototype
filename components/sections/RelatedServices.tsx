import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import { SERVICES } from '../../data/services';
import { SERVICE_CLUSTERS } from '../../data/serviceClusters';
import { ArrowRight } from 'lucide-react';

interface RelatedServicesProps {
  currentServiceId: string;
  category: string;
  audience: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentServiceId, category, audience }) => {

  // 1. Get Smart Cluster Recommendations first
  const clusterIds = SERVICE_CLUSTERS[currentServiceId] || [];
  const clusterServices = SERVICES.filter(s => clusterIds.includes(s.id));

  // 2. Fill remaining slots with Same Category (exclude current & already picked)
  let recommendations = [...clusterServices];

  if (recommendations.length < 4) {
    const sameCategory = SERVICES.filter(s =>
      s.audience === audience &&
      s.category === category &&
      s.id !== currentServiceId &&
      !recommendations.find(r => r.id === s.id)
    );
    recommendations = [...recommendations, ...sameCategory];
  }

  // 3. Fill remaining with Same Audience (Broad fallback)
  if (recommendations.length < 4) {
    const sameAudience = SERVICES.filter(s =>
      s.audience === audience &&
      s.id !== currentServiceId &&
      !recommendations.find(r => r.id === s.id)
    );
    recommendations = [...recommendations, ...sameAudience];
  }

  // Cap at 4
  const finalDesktop = recommendations.slice(0, 4);

  if (finalDesktop.length === 0) return null;

  return (
    <div className="py-16 bg-subtle/30 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Related Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalDesktop.map(service => (
            <Link
              key={service.id}
              to={service.slug}
              className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 block"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-primary mb-2 flex items-center justify-between">
                {service.title}
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 text-primary" />
              </h4>
              <p className="text-sm text-gray-500 line-clamp-2">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;