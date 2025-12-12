import React from 'react';
import Hero from '../components/sections/Hero';
import PageMeta from '../components/ui/PageMeta';
import TrustBar from '../components/sections/TrustBar';

const About: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="About Us" description="Locally owned and operated restoration experts serving Northern Virginia since 2010." />
      
      <Hero 
        title="Restoring Homes, Rebuilding Lives"
        subtitle="We are Northern Virginia's trusted local experts for emergency water damage and disaster recovery."
      />
      
      <TrustBar />

      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Flood Doctor, our mission is simple: to provide calm, professional, and rapid expertise when you need it most. We understand that property damage is stressful. Our goal is to stabilize the situation immediately and guide you through the recovery process with transparency and compassion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Expertise</h3>
                  <p className="text-gray-600">All our technicians are IICRC certified in Water Damage Restoration and Mold Remediation. We use hospital-grade technology to ensure your home is safe.</p>
              </div>
               <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Focus</h3>
                  <p className="text-gray-600">We aren't a national franchise. We live and work in Northern Virginia, which means we care deeply about our reputation and our neighbors.</p>
              </div>
          </div>
      </div>
    </main>
  );
};

export default About;