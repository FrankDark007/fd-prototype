import React from 'react';
import Button from '../ui/Button';

interface FeatureSplitSectionProps {
  heading: string;
  description: string;
  imageLeft?: boolean;
  visual: React.ReactNode;
  bg?: 'white' | 'subtle';
  ctaLabel?: string;
  ctaLink?: string;
}

const FeatureSplitSection: React.FC<FeatureSplitSectionProps> = ({
  heading,
  description,
  imageLeft = false,
  visual,
  bg = 'white',
  ctaLabel,
  ctaLink
}) => {
  return (
    <div className={`py-20 md:py-32 overflow-hidden relative ${bg === 'subtle' ? 'bg-slate-50' : 'bg-white'}`}>

      {/* Decorative Blobs for Glass Effect Context */}
      {bg === 'subtle' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 ${imageLeft ? 'right-0' : 'left-0'} w-[50%] h-[80%] bg-blue-100/50 rounded-full blur-[100px] opacity-40`} />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:grid lg:grid-cols-12 lg:gap-24 items-center`}>

          {/* Content Column */}
          <div className={`lg:col-span-6 ${imageLeft ? 'lg:order-2 lg:pl-10' : 'lg:order-1 lg:pr-10'} mb-16 lg:mb-0 text-center lg:text-left`}>
            <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wide text-blue-600 bg-blue-50 rounded-full border border-blue-100/50 uppercase">
              Feature Highlight
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-[1.15] tracking-tight">
              {heading}
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            {ctaLabel && (
              <div className="flex justify-center lg:justify-start">
                <Button to={ctaLink || '/'} variant="text" className="text-primary text-lg font-medium hover:bg-blue-50 px-6 py-3 rounded-full hover:underline transition-all">
                  {ctaLabel} →
                </Button>
              </div>
            )}
          </div>

          {/* Visual Column */}
          <div className={`lg:col-span-6 ${imageLeft ? 'lg:order-1' : 'lg:order-2'} w-full perspect-1000`}>
            {/* Glass Container for Visual */}
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl transform rotate-3 scale-105 opacity-70 group-hover:rotate-2 transition-transform duration-700 ease-out" />

              <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/40 rounded-3xl p-8 transform transition-transform duration-500 hover:scale-[1.01]">
                {visual}
              </div>

              {/* Reflection Highlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureSplitSection;