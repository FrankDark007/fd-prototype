import React from 'react';
import Hero from '../components/sections/Hero';
import PageMeta from '../components/ui/PageMeta';
import TrustBar from '../components/sections/TrustBar';
import Section from '../components/ui/Section';
import { AboutHeroAnimation } from '../components/graphics';

const About: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="About Us" description="Locally owned and operated restoration experts serving Northern Virginia since 2010." />
      
      <Hero 
        title="Restoring Homes, Rebuilding Lives"
        subtitle="We are Northern Virginia's trusted local experts for emergency water damage and disaster recovery."
        visual={<AboutHeroAnimation />}
      />
      
      <TrustBar />

      <Section width="narrow">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.1]">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
              At Flood Doctor, our mission is simple: to provide calm, professional, and rapid expertise when you need it most. We understand that property damage is stressful. Our goal is to stabilize the situation immediately and guide you through the recovery process with transparency and compassion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Expertise</h3>
                  <p className="text-gray-600">All our technicians are IICRC certified in Water Damage Restoration and Mold Remediation. We use hospital-grade technology to ensure your home is safe.</p>
              </div>
               <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Focus</h3>
                  <p className="text-gray-600">We aren't a national franchise. We live and work in Northern Virginia, which means we care deeply about our reputation and our neighbors.</p>
              </div>
          </div>
      </Section>
    </main>
  );
};

export default About;