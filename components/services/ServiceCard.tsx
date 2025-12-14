import React from 'react';
import { 
  Plus, 
  Droplets, 
  Flame, 
  Leaf, 
  Wind, 
  CloudLightning, 
  Sparkles, 
  Activity, 
  Hammer, 
  Zap, 
  Waves,
  Box
} from 'lucide-react';
import ServiceCardThumb from './ServiceCardThumb';
import { ServiceData } from '../../types';

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

const getServiceIcon = (service: ServiceData) => {
  const t = service.title.toLowerCase();
  
  // Specific mappings based on title keywords
  if (t.includes('fire') || t.includes('smoke')) return Flame;
  if (t.includes('mold')) return Leaf;
  if (t.includes('storm')) return CloudLightning;
  if (t.includes('water') || t.includes('flood') || t.includes('leak') || t.includes('burst') || t.includes('drying')) return Droplets;
  if (t.includes('sewage')) return Waves;
  if (t.includes('odor') || t.includes('air')) return Wind;
  if (t.includes('content') || t.includes('pack')) return Box;
  if (t.includes('clean')) return Sparkles;

  // Category fallbacks
  switch (service.category) {
    case 'TECHNICAL': return Activity;
    case 'RESTORATION': return Hammer;
    case 'CLEANUP': return Sparkles;
    case 'SPECIALTY': return Zap;
    default: return Zap;
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const Icon = getServiceIcon(service);

  return (
    <div 
      onClick={() => onClick(service)}
      className="group relative flex flex-col bg-[#f8fafc] rounded-[28px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-white border border-transparent hover:border-gray-100"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(service);
        }
      }}
      aria-label={`View details for ${service.title}`}
    >
      {/* Top Thumbnail Area */}
      <div className="p-2 pb-0">
        <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-white border border-gray-100/50 shadow-sm group-hover:shadow-md transition-shadow">
           <ServiceCardThumb visualKey={service.thumbVisualKey} className="w-full h-full transform transition-transform duration-500 group-hover:scale-[1.02]" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex items-start gap-3 mb-3">
           <div className="p-2 rounded-xl bg-white border border-gray-200 text-gray-400 shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 shadow-sm">
              <Icon size={20} strokeWidth={2} />
           </div>
           <h3 className="text-[20px] font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors pt-1">
             {service.title}
           </h3>
        </div>
        
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-8 pl-[3.25rem]">
          {service.shortDescription}
        </p>

        {/* Floating Action Button (Google Style) */}
        <div className="absolute bottom-5 right-5">
           <div className="w-10 h-10 rounded-full bg-white text-primary border border-gray-100 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:scale-110 group-hover:border-transparent">
              <Plus size={24} strokeWidth={2.5} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;