import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Hero from '../components/sections/Hero';
import { Heart, Briefcase, Zap, GraduationCap } from 'lucide-react';
import Button from '../components/ui/Button';

const Careers: React.FC = () => {
  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
    { icon: Zap, title: "Competitive Pay", desc: "Above-market hourly rates with overtime and performance bonuses." },
    { icon: Briefcase, title: "Career Growth", desc: "Clear paths from Technician to Lead to Project Manager." },
    { icon: GraduationCap, title: "Paid Training", desc: "We pay for your IICRC certifications and ongoing education." }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Careers" description="Join the Flood Doctor team. We are looking for certified restoration technicians in Northern Virginia." />
      
      <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
             <Breadcrumbs items={[{ label: 'Careers', path: '/careers/' }]} />
          </div>
          <Hero 
            title="Join Our Team" 
            subtitle="We are always looking for dedicated, certified restoration professionals to help serve our community."
          />
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Work at Flood Doctor?</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">We take care of our team so they can take care of our customers.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {benefits.map((b, i) => (
                     <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                         <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                             <b.icon size={24} />
                         </div>
                         <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                         <p className="text-sm text-gray-600">{b.desc}</p>
                     </div>
                 ))}
             </div>
          </div>
      </section>

      {/* Openings Section */}
      <div className="py-20 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Openings</h2>
        <p className="text-gray-600 mb-12">
            Interested in joining us? Please email your resume and certifications to <a href="mailto:careers@flood.doctor" className="text-primary hover:underline font-medium">careers@flood.doctor</a>.
        </p>
        
        <div className="space-y-4">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-left hover:border-primary transition-colors group shadow-sm">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Lead Water Damage Technician</h3>
                        <p className="text-sm text-gray-500 mb-4 mt-1">Full-time • Arlington, VA</p>
                        <p className="text-gray-600">Lead crew on residential losses, handle documentation, and communicate with homeowners. Must have IICRC WRT certification and valid driver's license.</p>
                    </div>
                    <Button variant="outline" className="hidden sm:inline-flex">Apply</Button>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 text-left hover:border-primary transition-colors group shadow-sm">
                 <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Restoration Project Manager</h3>
                        <p className="text-sm text-gray-500 mb-4 mt-1">Full-time • Fairfax, VA</p>
                        <p className="text-gray-600">Oversee multiple projects, negotiate with adjusters, and ensure quality control. Xactimate experience required.</p>
                    </div>
                    <Button variant="outline" className="hidden sm:inline-flex">Apply</Button>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Careers;