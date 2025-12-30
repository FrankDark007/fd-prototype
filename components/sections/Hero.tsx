import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import GoogleGuaranteedBadge from '../ui/GoogleGuaranteedBadge';
import EmergencyServiceBadge from '../ui/EmergencyServiceBadge';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  visual?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, visual }) => {
  return (
    <div className="relative bg-white overflow-hidden border-b border-border">
      {/* Subtle Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-blue-50/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[120%] bg-green-50/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px] items-center">

          {/* Left: Content */}
          <div className="flex flex-col justify-center px-6 py-20 lg:px-24 lg:py-32">
            <div className="max-w-xl">
              {/* Eyebrow badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <EmergencyServiceBadge />
                <GoogleGuaranteedBadge />
              </div>

              {/* Heading */}
              <h1 className="font-display text-5xl lg:text-[72px] leading-[1.05] font-medium text-slate-900 mb-8 tracking-tight">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
                {subtitle}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/request/" variant="primary" className="text-lg h-14 px-8 shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all">
                  Request Service
                </Button>
                <Button href="tel:8774970007" variant="secondary" className="text-lg h-14 px-8 group border-slate-200 hover:bg-slate-50">
                  (877) 497-0007 <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex items-center justify-center lg:h-full w-full min-h-[400px] lg:min-h-0 bg-slate-50/50 lg:bg-transparent">
            {/* Visual Container with Float Animation */}
            <div className="relative w-full max-w-2xl px-6 lg:px-0 lg:scale-110 lg:-translate-x-10 motion-safe:animate-float-slow">
              {visual}
            </div>

            {/* Decorative decorative circle/blur behind visual */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
