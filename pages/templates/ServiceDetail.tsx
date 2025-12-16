import React from 'react';
import { ServiceData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Hero from '../../components/sections/Hero';
import Section from '../../components/ui/Section';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServiceDetailHeroAnimation from '../../components/graphics/ServiceDetailHeroAnimation';
import GoogleStyleFAQ, { FAQ_SCHEMA } from '../../components/sections/GoogleStyleFAQ';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import Button from '../../components/ui/Button';
import { CheckCircle2, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';

interface ServiceDetailProps {
  service: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  // Breadcrumbs construction
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { 
      label: service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial', 
      path: `/services/${service.audience.toLowerCase()}/` 
    },
    { label: service.title, path: '#' }
  ];

  // FAQ Schema
  const faqSchema = service.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title={service.title} 
        description={service.shortDescription}
        schema={faqSchema}
      />

      {/* Hero */}
      <Hero 
        title={service.heroHeading || service.title}
        subtitle={service.heroIntro || service.shortDescription}
        visual={<ServiceDetailHeroAnimation visualKey={service.heroVisualKey} />}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
           <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* When to Call Section */}
      {(service.intro_whenToCall || (service.whenToCall && service.whenToCall.length > 0)) && (
        <Section id="symptoms">
          <div className="lg:flex lg:gap-20">
            {/* Left - Sticky */}
            <div className="lg:w-5/12 mb-10 lg:mb-0">
              <div className="lg:sticky lg:top-[30vh] lg:h-fit">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">When to Call Us</h2>
                {service.intro_whenToCall && (
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.intro_whenToCall}
                  </p>
                )}
                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                  <div className="flex gap-4">
                    <div className="p-2 bg-white rounded-full text-red-600 shadow-sm shrink-0 h-10 w-10 flex items-center justify-center">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Emergency Response</h3>
                      <p className="text-sm text-gray-600 mb-4">We answer 24/7 and arrive within 60 minutes.</p>
                      <Button href="tel:8774970007" variant="primary" className="h-10 text-sm">
                        Call (877) 497-0007
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Scrolling List */}
            {service.whenToCall && (
              <div className="lg:w-7/12">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-6">Common Signs & Scenarios</h3>
                  <ul className="space-y-4">
                    {service.whenToCall.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </Section>
      )}

      {/* Content Sections (Sticky Scroll) - Only for Residential Specialty Services */}
      {service.contentSections && service.audience === 'RESIDENTIAL' && service.category === 'SPECIALTY' && (
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            
            {/* Two Column Sticky Scroll */}
            <div className="lg:flex lg:gap-20">
              {/* Left - Sticky */}
              <div className="lg:w-5/12 mb-10 lg:mb-0">
                <div className="lg:sticky lg:top-[30vh] lg:h-fit">
                  <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-6 leading-tight">
                    {service.contentSections.heading}
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    {service.contentSections.intro}
                  </p>
                </div>
              </div>

              {/* Right - Scrolling Cards */}
              <div className="lg:w-7/12 space-y-12">
                {service.contentSections.cards.map((card, index) => {
                  const colorSchemes = [
                    { bg: 'bg-amber-50', icon: 'text-amber-600', accent: 'bg-amber-100' },
                    { bg: 'bg-blue-50', icon: 'text-blue-600', accent: 'bg-blue-100' },
                    { bg: 'bg-emerald-50', icon: 'text-emerald-600', accent: 'bg-emerald-100' },
                    { bg: 'bg-rose-50', icon: 'text-rose-600', accent: 'bg-rose-100' },
                    { bg: 'bg-violet-50', icon: 'text-violet-600', accent: 'bg-violet-100' },
                  ];
                  const scheme = colorSchemes[index % colorSchemes.length];
                  
                  const icons = [
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  ];
                  
                  return (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                      {/* Visual Area with Illustration */}
                      <div className={`${scheme.bg} aspect-[16/10] flex items-center justify-center relative overflow-hidden`}>
                        {/* Decorative circles */}
                        <div className={`absolute top-4 right-4 w-20 h-20 ${scheme.accent} rounded-full opacity-60`}></div>
                        <div className={`absolute bottom-6 left-6 w-12 h-12 ${scheme.accent} rounded-full opacity-40`}></div>
                        
                        {/* Phone mockup container */}
                        <div className="bg-white rounded-xl shadow-lg p-4 w-48 relative z-10">
                          {/* Phone header */}
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                            <div className={`w-8 h-8 ${scheme.accent} rounded-lg flex items-center justify-center`}>
                              <svg className={`w-4 h-4 ${scheme.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {icons[index % icons.length]}
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-900">Flood Doctor</div>
                              <div className="text-[10px] text-gray-400">Service Details</div>
                            </div>
                          </div>
                          {/* Phone content lines */}
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded w-full"></div>
                            <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                            <div className="h-2 bg-gray-100 rounded w-3/5"></div>
                          </div>
                          {/* Phone button */}
                          <div className={`mt-4 ${scheme.accent} ${scheme.icon} text-[10px] font-medium py-2 rounded-lg text-center`}>
                            REQUEST QUOTE
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-4">
                          {card.content}
                        </p>
                        <a 
                          href="#" 
                          className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                        >
                          Learn more
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Bottom Full-Width Card - Two-Up Layout (OUTSIDE the flex container) */}
            <div className="mt-16 lg:mt-24">
              <div className="lg:flex lg:gap-20 items-center">
                {/* Left - Visual (same width as sticky column: 5/12) */}
                <div className="lg:w-5/12 mb-8 lg:mb-0">
                  <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex items-center justify-center min-h-[320px]">
                    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-[260px]">
                      {/* Mockup Header */}
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm font-medium text-gray-900">Restoration Progress</span>
                      </div>
                      
                      {/* Stats */}
                      <div className="text-center py-4">
                        <div className="text-4xl font-light text-gray-900 mb-1">98%</div>
                        <div className="text-sm text-gray-500">Customer Satisfaction</div>
                      </div>
                      
                      {/* Chart */}
                      <div className="flex items-end justify-center gap-2 h-20 mt-4">
                        <div className="w-6 bg-blue-500 rounded-t opacity-40" style={{height: '35%'}}></div>
                        <div className="w-6 bg-blue-500 rounded-t opacity-50" style={{height: '50%'}}></div>
                        <div className="w-6 bg-blue-500 rounded-t opacity-60" style={{height: '45%'}}></div>
                        <div className="w-6 bg-blue-500 rounded-t opacity-75" style={{height: '70%'}}></div>
                        <div className="w-6 bg-blue-500 rounded-t opacity-85" style={{height: '60%'}}></div>
                        <div className="w-6 bg-blue-500 rounded-t" style={{height: '85%'}}></div>
                      </div>
                      
                      {/* Labels */}
                      <div className="flex justify-between mt-2 text-[10px] text-gray-400">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right - Content (same width as cards column: 7/12) */}
                <div className="lg:w-7/12">
                  <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-6 leading-tight">
                    Track your restoration progress
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-6">
                    Stay informed throughout the restoration process with daily updates, moisture readings, and photo documentation. Our client portal gives you 24/7 visibility into your project status.
                  </p>
                  <a 
                    href="/resources/technology/" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    See our technology
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      )}

      {/* What We Do / Process */}
      {(service.intro_whatWeDo || (service.whatWeDo && service.whatWeDo.length > 0)) && (
        <Section id="process">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Restoration Process</h2>
                <p className="text-lg text-gray-600">{service.intro_whatWeDo}</p>
            </div>
            {service.whatWeDo && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.whatWeDo.map((step, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold text-sm mb-4">
                              {i + 1}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">{step.split(':')[0]}</h3>
                          <p className="text-sm text-gray-600">{step.split(':')[1] || step}</p>
                      </div>
                  ))}
              </div>
            )}
        </Section>
      )}

      {/* Safety & Expectations */}
      <Section bg="subtle" borderTop>
        <div className="lg:flex lg:gap-12">
          {/* Left - Safety (Sticky) */}
          {service.safety && (
            <div className="lg:w-5/12 mb-10 lg:mb-0">
              <div className="lg:sticky lg:top-[30vh] lg:h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck size={28} className="text-primary" />
                  <h2 className="text-2xl font-semibold text-gray-900">{service.safety.head || 'Safety First'}</h2>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <p className="text-gray-600 mb-6">{service.intro_safety}</p>
                  <ul className="space-y-3 mb-6">
                    {service.safety.items.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.safety.kidsPets && (
                    <div className="bg-orange-50 text-orange-800 p-4 rounded-lg text-sm border border-orange-100">
                      <strong>Kids & Pets:</strong> {service.safety.kidsPets}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Right - Expectations (Scrolling) */}
          {service.whatToExpect && (
            <div className="lg:w-7/12">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={28} className="text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">What to Expect</h2>
              </div>
              <div className="space-y-4">
                {Object.entries(service.whatToExpect).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={key} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* FAQ */}
      {service.faqs && (
          <GoogleStyleFAQ data={service.faqs} title={`Common Questions about ${service.title}`} />
      )}

      {/* Related Services */}
      <RelatedServices 
          currentServiceId={service.id} 
          category={service.category} 
          audience={service.audience} 
      />

      {/* Service Areas Link Block */}
      <ServiceAreaLinks />

    </main>
  );
};

export default ServiceDetail;