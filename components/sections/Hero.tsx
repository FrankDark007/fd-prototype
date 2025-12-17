import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  visual?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, visual }) => {
  return (
    <div className="relative bg-white overflow-hidden border-b border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left: Content - Centered vertically, heavily padded */}
          <div className="flex flex-col justify-center px-6 py-16 lg:px-20 lg:py-24 z-10 bg-white">
            <div className="max-w-xl">
              {/* Google Style "Eyebrow" text */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  24/7 Emergency Service
                </span>
                <span className="text-green-700 text-xs font-bold px-2 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Google Guaranteed
                </span>
              </div>

              {/* Heading: Google Sans (Outfit), Huge, Tight leading */}
              <h1 className="font-display text-5xl lg:text-[64px] leading-[1.1] font-medium text-text mb-6 tracking-tight">
                {title}
              </h1>
              
              {/* Subtitle: Inter, Large, Muted */}
              <p className="font-sans text-xl text-muted mb-10 leading-relaxed max-w-md">
                {subtitle}
              </p>
              
              {/* Actions - HIDDEN ON MOBILE (md:flex) to prevent clutter. */}
              <div className="hidden md:flex flex-col sm:flex-row gap-4">
                <Button to="/request/" variant="primary" className="text-lg">
                  Request Service
                </Button>
                <Button href="tel:8774970007" variant="secondary" className="text-lg group">
                  (877) 497-0007 <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Visual - Bleed to edge, soft background */}
          <div className="relative bg-subtle flex items-center justify-center lg:h-auto min-h-[400px] overflow-hidden">
            {/* Soft radial gradient often used in Google product shots */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-subtle to-gray-100 opacity-50"></div>
            
            <div className="relative z-10 w-full max-w-lg px-6 lg:px-0 transform lg:scale-110">
              {visual}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;