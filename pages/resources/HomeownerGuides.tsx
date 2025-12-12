import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const HomeownerGuides: React.FC = () => {
  const guides = [
      {
          title: "Winterizing Your Pipes",
          content: "Prevent burst pipes by insulating exposed plumbing in attics, basements, and garages. Disconnect garden hoses and shut off the water supply to exterior faucets."
      },
      {
          title: "Sump Pump Maintenance",
          content: "Test your sump pump before the spring rainy season. Pour a bucket of water into the pit to ensure the float triggers the pump and the water ejects properly."
      },
      {
          title: "Gutter Cleaning",
          content: "Clogged gutters are a leading cause of basement flooding. Clean gutters twice a year to ensure water flows away from your foundation."
      },
      {
          title: "Locating Your Water Main Shut-off",
          content: "In an emergency, you need to shut off the water immediately. Find your main valve (usually in the basement or utility closet) and tag it so everyone in the family knows where it is."
      }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Homeowner Guides & Tips" description="Prevent water damage with these essential maintenance tips for Northern Virginia homeowners." />
      
      <div className="pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Homeowner Guides', path: '/resources/homeowner-guides/' }]} />
           <h1 className="text-4xl font-semibold text-gray-900 mb-6">Homeowner Maintenance Guides</h1>
           <p className="text-xl text-gray-600">Proactive tips to protect your property from water damage.</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{guide.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{guide.content}</p>
                  </div>
              ))}
          </div>
      </div>
    </main>
  );
};

export default HomeownerGuides;