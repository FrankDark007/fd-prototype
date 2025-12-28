
import React from 'react';
import { Clock } from 'lucide-react';
import EmergencyServiceCard from './EmergencyServiceCard';

const EmergencyServiceBadge: React.FC = () => {
  return (
    <div className="relative group z-20">
      {/* Collapsed Badge */}
      <span className="inline-flex items-center gap-1.5 bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider cursor-pointer transition-all duration-200 group-hover:bg-blue-100 ring-1 ring-transparent group-hover:ring-blue-200">
        <Clock size={14} className="text-primary" />
        24/7 Emergency Service
      </span>

      {/* Expanded Card (on hover) - HIDDEN ON MOBILE (md:block) */}
      <div className="hidden md:block absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[320px]">
        <EmergencyServiceCard showPointer={true} />
      </div>
    </div>
  );
};

export default EmergencyServiceBadge;
