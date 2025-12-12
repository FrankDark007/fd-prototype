import React from 'react';
import Hero from '../components/sections/Hero';
import LocationsGrid from '../components/sections/LocationsGrid';
import PageMeta from '../components/ui/PageMeta';
import { LOCATIONS } from '../data/locations';

const LocationsHub: React.FC = () => {
  return (
    <main className="flex-grow pb-20 md:pb-0">
      <PageMeta 
        title="Service Areas & Locations" 
        description="Serving Northern Virginia, DC, and Maryland. Rapid response teams stationed in Arlington, Fairfax, Ashburn, and surrounding areas." 
      />
      <Hero 
        title={<>Serving <span className="text-primary">Northern Virginia</span></>} 
        subtitle="Our rapid response teams are stationed throughout the region to ensure we can reach any emergency within 60 minutes." 
      />
      <div className="bg-subtle/30 border-t border-gray-100 min-h-[50vh]">
        <LocationsGrid locations={LOCATIONS} />
      </div>
    </main>
  );
};

export default LocationsHub;