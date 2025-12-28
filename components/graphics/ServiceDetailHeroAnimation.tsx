import React from 'react';
import { motion } from 'framer-motion';
import HeroVisual from '../ui/illustrations/service-hero';

interface ServiceDetailHeroProps {
  visualKey?: string;
  className?: string;
}

const ServiceDetailHeroAnimation: React.FC<ServiceDetailHeroProps> = ({ visualKey = 'default', className }) => {
  const key = visualKey.toLowerCase();

  // 1. Define Premium Cinematic Matches
  // We only use the V7 Cinematic images for the core services where they fit perfectly.
  let cinematicImage = null;
  let animationType = 'float';

  if (
    key === 'water-damage' ||
    key === 'com-water' ||
    key === 'structural-drying' ||
    key === 'basement-flooding' ||
    key === 'flood-cleanup' ||
    key === 'com-flood' ||
    key === 'storm-damage' ||
    key === 'burst-pipe' ||
    key === 'roof-leak' ||
    key === 'hardwood-drying' ||
    key === 'crawl-space' ||
    key === 'large-loss'
  ) {
    cinematicImage = '/assets/hero-v7/water-v7.png';
    animationType = 'float';
  }
  else if (
    key === 'fire-smoke' ||
    key === 'com-fire' ||
    key === 'contents-packout' ||
    key === 'hospitality'
  ) {
    cinematicImage = '/assets/hero-v7/fire-v7.png';
    animationType = 'pulse';
  }
  else if (
    key === 'mold-remediation' ||
    key === 'com-mold' ||
    key === 'odor-removal' ||
    key === 'sewage-cleanup' ||
    key === 'com-sewage' ||
    key === 'iaq' ||
    key === 'env-testing' ||
    key === 'moisture-mapping' ||
    key === 'healthcare' ||
    key === 'municipal' ||
    key === 'industrial' ||
    key === 'orbit-phone'
  ) {
    cinematicImage = '/assets/hero-v7/mold-v7.png';
    animationType = 'hover';
  }

  // 2. Render SVG Fallback if no Cinematic Match
  if (!cinematicImage) {
    return (
      <div className={`w-full ${className}`}>
        <HeroVisual visualKey={visualKey} />
      </div>
    );
  }

  // 3. Render Cinematic Hero (if matched) - STATIC NO ANIMATION
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div
        className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl aspect-square flex items-center justify-center transform lg:scale-110 lg:translate-x-10"
      >
        {/* Glow Effect - Static */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl scale-75" />

        {/* Main Image - Static */}
        <img
          src={cinematicImage}
          alt="Professional Restoration Service"
          className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl"
        />

        {/* Subtle Overlay Label */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-600 shadow-sm z-20 hidden md:block">
          Professional Service
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHeroAnimation;