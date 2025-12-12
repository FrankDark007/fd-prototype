import React from 'react';
import Button from '../ui/Button';
import HeroResponseMock from '../ui/HeroResponseMock';
import OrbitDots from '../ui/OrbitDots';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  visual?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div id="overview" className="bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0 relative z-10">
            {/* 
                Typography updates:
                - font-semibold (600)
                - leading-[1.05] (tighter)
                - tracking-[-0.02em] (negative spacing)
            */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] text-gray-900 mb-8 leading-[1.05] font-semibold">
              {title}
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button to="/request/" variant="primary" className="text-[16px] px-8 py-3.5 h-14 rounded-full shadow-none hover:shadow-button">
                  Request Services
              </Button>
            </div>
          </div>

          {/* Right Column: Dynamic Hero Response Mock */}
          <div className="lg:col-span-6 relative flex justify-center lg:block">
             <OrbitDots />
             <HeroResponseMock />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;