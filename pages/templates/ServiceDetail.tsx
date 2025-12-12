import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedServices from '../../components/sections/RelatedServices';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import PageMeta from '../../components/ui/PageMeta';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { CheckCircle2, AlertTriangle, ArrowRight, Search, ShieldCheck, Clock, XCircle, CheckCircle } from 'lucide-react';

// Import Specific Infographics
import DryingProgressCard from '../../components/ui/DryingProgressCard';
import FloodTimelineCard from '../../components/ui/illustrations/service-specific/FloodTimelineCard';
import SewageContainmentCard from '../../components/ui/illustrations/service-specific/SewageContainmentCard';
import MoldAirflowCard from '../../components/ui/illustrations/service-specific/MoldAirflowCard';
import StructuralDryingCard from '../../components/ui/illustrations/service-specific/StructuralDryingCard';

interface ServiceDetailProps {
  service: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  // Construct breadcrumb items
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { label: service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial', path: `/services/${service.audience.toLowerCase()}/` },
    { 
      label: service.category.charAt(0) + service.category.slice(1).toLowerCase().replace('_', ' ') + ' Services', 
      path: `/services/${service.audience.toLowerCase()}/${service.category.toLowerCase()}-services/` 
    },
    { label: service.title, path: service.slug }
  ];

  // Helper to render the correct infographic
  const renderInfographic = () => {
    switch (service.infographicType) {
      case 'DRYING_TREND':
        return <DryingProgressCard />;
      case 'FLOOD_TIMELINE':
        return <FloodTimelineCard />;
      case 'SEWAGE_CONTAINMENT':
        return <SewageContainmentCard />;
      case 'MOLD_AIRFLOW':
        return <MoldAirflowCard />;
      case 'STRUCTURAL_DRYING':
        return <StructuralDryingCard />;
      default:
        return null;
    }
  };

  const canonicalUrl = `https://flood.doctor${service.slug}`;

  // 1. WebPage Schema
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": service.title,
    "description": service.shortDescription,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://flood.doctor/#website",
      "url": "https://flood.doctor/",
      "name": "Flood Doctor"
    }
  };

  // 2. Service Schema
  const serviceSchema = {
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    "name": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Flood Doctor",
      "telephone": "+1-877-497-0007",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "VA",
        "addressCountry": "US"
      }
    },
    "areaServed": ["Northern Virginia", "Maryland", "Washington DC"],
    "description": service.shortDescription,
    "url": canonicalUrl,
    "serviceType": service.title
  };

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://flood.doctor${item.path}`
    }))
  };

  // Merge schemas for PageMeta
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [webPageSchema, serviceSchema, breadcrumbSchema]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title={service.title} // Let PageMeta append " | Flood Doctor" or use brand if needed
        description={service.heroIntro ? service.heroIntro.substring(0, 160) + "..." : service.shortDescription} 
        schema={combinedSchema}
      />

      {/* 1. Hero Section */}
      <div className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="max-w-4xl">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-wide uppercase mb-6">
                    {service.audience} {service.category.replace('_', ' ')}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                    {service.heroHeading || service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
                    {service.heroIntro || service.shortDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button to="/request/" variant="primary" className="h-14 px-8 text-lg">
                        Request Service
                    </Button>
                    <Button href="tel:8774970007" variant="secondary" className="h-14 px-8 text-lg">
                        Call (877) 497-0007
                    </Button>
                </div>
                {/* Trust Bar Line */}
                <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-primary" />
                        <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary" />
                        <span>IICRC Certified Techs</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. When to Call (Symptoms) */}
      {service.whenToCall && (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">When to Call Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {service.whenToCall.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <AlertTriangle size={14} className="text-red-600" />
                            </div>
                            <p className="text-gray-800 leading-relaxed font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

      {/* 3. What We Do & Infographic */}
      <div className="py-20 bg-subtle/30 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
                  <div className="lg:col-span-6 mb-12 lg:mb-0">
                      <h2 className="text-3xl font-semibold text-gray-900 mb-8">What We Do</h2>
                      <div className="space-y-6">
                        {service.whatWeDo ? (
                            service.whatWeDo.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 size={24} className="text-primary" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">We provide comprehensive restoration services.</p>
                        )}
                      </div>
                  </div>
                  <div className="lg:col-span-6">
                      {/* Render Page Specific Infographic */}
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8">
                         {renderInfographic()}
                         <div className="text-center mt-4 text-xs text-gray-400 italic">
                             {service.title} – Illustrative example
                         </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 4. Safety / What to do now */}
      {service.safety && (
         <div className="py-20 bg-white">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="bg-red-100 p-3 rounded-xl">
                            <ShieldCheck className="text-red-600 w-8 h-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.safety.head || 'What to do right now'}</h2>
                     </div>
                     <ul className="space-y-4 mb-8">
                         {service.safety.items.map((item, i) => (
                             <li key={i} className="flex gap-4 items-start">
                                 <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                                 <span className="text-gray-800 text-lg">{item}</span>
                             </li>
                         ))}
                     </ul>
                     {service.safety.kidsPets && (
                         <div className="bg-white border border-red-100 p-6 rounded-xl flex gap-4 items-start shadow-sm">
                             <AlertTriangle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-1" />
                             <div>
                                <strong className="block text-gray-900 mb-1">Kids & Pets Safety</strong>
                                <p className="text-gray-600">{service.safety.kidsPets}</p>
                             </div>
                         </div>
                     )}
                 </div>
             </div>
         </div>
      )}

      {/* 5. What to Expect */}
      {service.whatToExpect && (
        <div className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Timeline */}
                    <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">Timeline</h3>
                        <p className="text-gray-600 leading-relaxed">{service.whatToExpect.timeline}</p>
                    </div>
                    {/* Arrival */}
                    <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">1</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">Arrival</h3>
                        <p className="text-gray-600 leading-relaxed">{service.whatToExpect.arrival}</p>
                    </div>
                    {/* Daily */}
                    <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">D</div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">Updates</h3>
                        <p className="text-gray-600 leading-relaxed">{service.whatToExpect.daily}</p>
                    </div>
                    {/* Noise */}
                    {service.whatToExpect.noise && (
                        <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">Noise & Living</h3>
                            <p className="text-gray-600 leading-relaxed">{service.whatToExpect.noise}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}

      {/* 6. Scenarios */}
      {service.scenarios && (
         <div className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-semibold text-gray-900 mb-10">Common Scenarios We Handle</h2>
                 <div className="bg-subtle/50 p-8 md:p-12 rounded-3xl border border-gray-200">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                         {service.scenarios.map((item, i) => (
                             <div key={i} className="flex gap-4 items-center">
                                 <ArrowRight className="text-primary w-5 h-5 flex-shrink-0" />
                                 <span className="text-gray-800 text-lg font-medium">{item}</span>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </div>
      )}

      {/* 7. Save vs Remove (New Section) */}
      {service.saveVsRemove && (
          <div className="py-20 bg-white border-t border-gray-100">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">Materials We Can Often Save vs. Remove</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Save Column */}
                      <div className="bg-green-50/50 rounded-2xl border border-green-100 p-8">
                          <div className="flex items-center gap-3 mb-6">
                              <CheckCircle className="text-green-600 w-6 h-6" />
                              <h3 className="text-xl font-bold text-gray-900">Often Salvageable</h3>
                          </div>
                          <ul className="space-y-3">
                              {service.saveVsRemove.save.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-700">
                                      <span className="text-green-500 font-bold">•</span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      {/* Remove Column */}
                      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                          <div className="flex items-center gap-3 mb-6">
                              <XCircle className="text-gray-500 w-6 h-6" />
                              <h3 className="text-xl font-bold text-gray-900">Usually Removed</h3>
                          </div>
                          <ul className="space-y-3">
                              {service.saveVsRemove.remove.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-600">
                                      <span className="text-gray-400 font-bold">•</span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-6 italic">
                      *Salvageability depends on the water category, duration of exposure, and material condition.
                  </p>
              </div>
          </div>
      )}

      {/* 8. FAQs (Google Style) */}
      {service.faqs && (
        <GoogleStyleFAQ 
            data={service.faqs} 
            title="Frequently Asked Questions" 
            className="py-20 bg-gray-50 border-t border-gray-100" 
        />
      )}

      {/* 9. People Also Search For */}
      {service.relatedSearchTerms && (
          <div className="py-16 bg-white border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Related Searches</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                      {service.relatedSearchTerms.map((term, i) => (
                          <span key={i} className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors cursor-default">
                              <Search size={12} className="mr-2 opacity-50" />
                              {term}
                          </span>
                      ))}
                  </div>
              </div>
          </div>
      )}

      {/* 10. Internal Linking Modules */}
      <RelatedServices currentServiceId={service.id} category={service.category} audience={service.audience} />
      <ServiceAreaLinks />
      
      {/* 11. Bottom CTA */}
      <div className="py-20 bg-white border-t border-gray-100 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ready to restore your property?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button to="/request/" variant="primary" className="h-14 px-10 text-lg">Request Service</Button>
                 <Button href="tel:8774970007" variant="secondary" className="h-14 px-10 text-lg">Call (877) 497-0007</Button>
            </div>
         </div>
      </div>
    </main>
  );
};

export default ServiceDetail;