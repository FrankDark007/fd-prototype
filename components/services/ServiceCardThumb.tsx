import React from 'react';
import {
  Droplets, Flame, Wind, Activity, Zap, Hammer, Sparkles, Box, Shield, Waves
} from 'lucide-react';

interface ServiceCardThumbProps {
  visualKey?: string;
  className?: string;
  icon?: React.ElementType;
}

// Fallback logic for visual keys if no specific icon is passed
const getIconForKey = (key?: string) => {
  if (!key) return Shield;
  if (key.includes('fire') || key.includes('smoke')) return Flame;
  if (key.includes('water') || key.includes('flood') || key.includes('burst')) return Droplets;
  if (key.includes('mold') || key.includes('odor')) return Wind;
  if (key.includes('sewage')) return Waves;
  if (key.includes('content')) return Box;
  if (key.includes('tech')) return Activity;
  return Sparkles;
};

// Map keys to specific gradient styles
const getGradientForKey = (key?: string) => {
  // Water / Blue
  if (key?.includes('water') || key?.includes('flood') || key?.includes('leak')) {
    return 'bg-gradient-to-br from-blue-50 to-blue-100/50';
  }
  // Fire / Warm
  if (key?.includes('fire') || key?.includes('smoke')) {
    return 'bg-gradient-to-br from-orange-50 to-amber-100/50';
  }
  // Mold / Nature / Green
  if (key?.includes('mold')) {
    return 'bg-gradient-to-br from-emerald-50 to-teal-100/50';
  }
  // Deep Clean / Purple/Blue
  if (key?.includes('sewage') || key?.includes('bio')) {
    return 'bg-gradient-to-br from-slate-100 to-gray-200';
  }
  // Tech / Cyan
  if (key?.includes('tech')) {
    return 'bg-gradient-to-br from-cyan-50 to-sky-100/50';
  }
  // Default
  return 'bg-gradient-to-br from-gray-50 to-gray-100';
};

const ServiceCardThumb: React.FC<ServiceCardThumbProps> = ({ visualKey, className = '', icon }) => {
  const Icon = icon || getIconForKey(visualKey);
  const bgClass = getGradientForKey(visualKey);

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${bgClass} ${className}`}>
      {/* Abstract Pattern background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '20px 20px',
          color: 'rgba(0,0,0,0.05)'
        }}
      />

      {/* Icon Centerpiece */}
      <div className="relative z-10 p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-white/50 text-primary">
        <Icon size={32} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default ServiceCardThumb;
