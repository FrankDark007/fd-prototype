import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTabs from '../components/layout/SectionTabs';
import StepsSection from '../components/sections/StepsSection';
import FeatureSplitSection from '../components/sections/FeatureSplitSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import GoogleStyleFAQ, { FAQ_SCHEMA } from '../components/sections/GoogleStyleFAQ';
import { SERVICES } from '../data/services';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';
import DryingProgressCard from '../components/ui/DryingProgressCard';
import DispatchEtaCard from '../components/ui/illustrations/DispatchEtaCard';
import SupportChatCard from '../components/ui/illustrations/SupportChatCard';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <main id="main-content" className="flex-grow">
      <PageMeta 
        title="Emergency Water Damage Restoration & Flood Cleanup" 
        description="24/7 Emergency water damage restoration in Northern Virginia. We arrive in 60 minutes. Licensed, insured, and trusted by thousands of homeowners." 
        schema={FAQ_SCHEMA}
      />

      {/* 1. New Split Hero */}
      <Hero 
        title={<>24/7 <span className="text-primary">Water Damage Restoration</span></>}
        subtitle="Serving Northern Virginia, Maryland, and DC, with rapid water removal, flood cleanup, and structural drying, with clear documentation from start to finish." 
      />
      
      {/* 2. Sticky Section Tabs */}
      <SectionTabs />

      {/* 3. Steps Section (1 Claim, 2 Personalize...) */}
      <StepsSection />

      {/* 4. Feature Split 1: Performance/Data (Chart) - Image Right */}
      <FeatureSplitSection 
        heading="Know exactly what's happening with your property"
        description="Discover moisture levels in real-time, get insights on drying progress, and understand how the restoration is proceeding with our transparent dashboard."
        visual={<DryingProgressCard />}
        bg="subtle"
        ctaLabel="Learn about our technology"
        ctaLink="/resources/technology/"
      />

      {/* 5. Feature Split 2: Communication (Chat) - Image Left */}
      <FeatureSplitSection 
        heading="Easily connect with your project manager"
        description="Update your insurance adjuster and get answers to your questions instantly. We keep everyone in the loop to speed up your claim."
        visual={<SupportChatCard />}
        imageLeft={true}
        bg="white"
        ctaLabel="See how we communicate"
        ctaLink="/resources/communication/"
      />

       {/* 6. Feature Split 3: Dispatch Info - Image Right */}
      <FeatureSplitSection 
        heading="Rapid dispatch when every minute counts"
        description="Our fleet is stationed across Northern Virginia. We track our trucks in real-time to ensure the closest certified crew reaches you within 60 minutes."
        visual={<DispatchEtaCard />}
        bg="subtle"
        ctaLabel="View our service locations"
        ctaLink="/locations/"
      />

      {/* 7. New Process Section (Replaces Sticky Scroll) */}
      <ProcessSection />

      {/* 8. Services Grid */}
      <ServicesGrid id="services" services={featuredServices} title="Explore our restoration services">
         <Button to="/services/" variant="outline" className="px-8 h-12 text-base">
            View all services
         </Button>
      </ServicesGrid>

      {/* 9. Google Style FAQ */}
      <GoogleStyleFAQ />

      {/* Extra spacing for mobile CTA */}
      <div className="h-16 md:hidden"></div>
      
    </main>
  );
};

export default Home;