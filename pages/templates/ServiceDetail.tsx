
import React, { useState, useEffect } from 'react';
import { ServiceData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Hero from '../../components/sections/Hero';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServiceDetailHeroAnimation from '../../components/graphics/ServiceDetailHeroAnimation';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import Button from '../../components/ui/Button';
import { CheckCircle2, AlertTriangle, Activity, Shield } from 'lucide-react';

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

  // Sticky Nav Logic
  const [activeSection, setActiveSection] = useState('overview');
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'specs', label: 'Tech Specs' },
    { id: 'safety', label: 'Safety' },
    { id: 'faq', label: 'FAQ' },
  ];

  // FIX 1: Handle scroll manually to prevent "Refused to connect" errors
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset: Header (80px) + Sticky Nav (56px) + Buffer (24px)
      const headerOffset = 160; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Scroll Spy: Update active section tab as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

      {/* Hero: Split layout with Visual */}
      <Hero 
        title={service.heroHeading || service.title}
        subtitle={service.heroIntro || service.shortDescription}
        visual={<ServiceDetailHeroAnimation visualKey={service.heroVisualKey} />}
      />

      {/* Sticky Product Navigation Bar (Desktop Only) */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-border hidden lg:block transition-all duration-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-8 h-14">
            <span className="font-display font-medium text-sm text-text">{service.title}</span>
            <div className="h-4 w-px bg-gray-200"></div>
            <nav className="flex gap-6 h-full">
              {sections.map(section => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`text-sm font-medium transition-colors h-full flex items-center border-b-2 ${
                    activeSection === section.id 
                      ? 'text-primary border-primary' 
                      : 'text-muted border-transparent hover:text-primary'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="ml-auto">
              <Button href="tel:8774970007" variant="primary" className="h-8 px-4 text-xs">
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="border-b border-subtle bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
           <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            
            {/* 1. Overview / When to Call */}
            <div id="overview" className="scroll-mt-40 mb-20">
              <div className="bg-subtle rounded-4xl p-8 lg:p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-3 bg-white rounded-full text-primary shadow-sm hidden sm:block">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-text mb-4">
                      When to initiate service
                    </h2>
                    {service.intro_whenToCall && (
                      <p className="font-sans text-muted text-lg leading-relaxed mb-6">
                        {service.intro_whenToCall}
                      </p>
                    )}
                  </div>
                </div>

                {/* Scenarios Grid */}
                {service.whenToCall && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.whenToCall.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-text font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 2. Process / How it Works */}
            <div id="process" className="scroll-mt-40 mb-20">
              <h2 className="font-display text-3xl font-medium text-text mb-8">Restoration Process</h2>
              <div className="space-y-12 relative">
                {/* Connector Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100 hidden md:block"></div>

                {service.whatWeDo?.map((step, i) => {
                  const [title, desc] = step.split(':');
                  return (
                    <div key={i} className="relative flex gap-6 md:gap-10">
                      {/* Step Number Bubble */}
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-white border border-gray-200 text-muted font-display font-bold items-center justify-center shrink-0 z-10 shadow-sm">
                        {i + 1}
                      </div>
                      
                      <div className="flex-1 bg-white border border-border rounded-3xl p-6 hover:shadow-google-hover transition-shadow">
                        <div className="flex items-center gap-4 mb-3">
                           <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0 md:hidden font-bold">
                             {i + 1}
                           </div>
                           <h3 className="font-display text-xl font-medium text-text">{title}</h3>
                        </div>
                        <p className="font-sans text-muted leading-relaxed">
                          {desc || step}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Tech Specs */}
            <div id="specs" className="scroll-mt-40 mb-20">
              <h2 className="font-display text-3xl font-medium text-text mb-8">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-4xl overflow-hidden border border-gray-200">
                {service.whatToExpect && Object.entries(service.whatToExpect).map(([key, value]) => (
                  <div key={key} className="bg-white p-8">
                    <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="font-sans text-base text-text leading-relaxed">
                      {value}
                    </div>
                  </div>
                ))}
                <div className="bg-white p-8">
                   <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Equipment Grade</div>
                   <div className="font-sans text-base text-text">Commercial LGR / HEPA Filtration</div>
                </div>
                <div className="bg-white p-8">
                   <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Certification</div>
                   <div className="font-sans text-base text-text">IICRC S500 / S520 Standards</div>
                </div>
              </div>
            </div>

            {/* 4. Safety Information */}
            <div id="safety" className="scroll-mt-40 mb-20">
              {service.safety && (
                <div className="bg-red-50/50 rounded-4xl p-8 lg:p-12 border border-red-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-100 text-red-700 rounded-full">
                      <AlertTriangle size={24} />
                    </div>
                    <h2 className="font-display text-2xl font-medium text-text">Safety Protocols</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                    {service.safety.items.slice(0, 6).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 list-none font-sans text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </div>

                  {service.safety.kidsPets && (
                    <div className="bg-white p-6 rounded-2xl border border-red-100 flex items-start gap-4">
                      <Shield size={24} className="text-red-500 shrink-0" />
                      <div>
                        <h4 className="font-bold text-text text-sm mb-1">Family Safety Note</h4>
                        <p className="text-sm text-muted">{service.safety.kidsPets}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 5. FAQ */}
            <div id="faq" className="scroll-mt-40">
               {service.faqs && (
                  <GoogleStyleFAQ 
                    data={service.faqs} 
                    title="Common Questions" 
                    className="py-0 border-none"
                  />
               )}
            </div>

          </div>

          {/* Right Sidebar - Sticky Call to Action */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-40">
              <div className="bg-white border border-border rounded-3xl p-8 shadow-google">
                <h3 className="font-display text-xl font-medium text-text mb-2">Need {service.title}?</h3>
                <p className="text-sm text-muted mb-6">
                  Our certified team is ready to deploy. Response time averages 60 minutes.
                </p>
                
                <div className="space-y-3">
                  <Button href="tel:8774970007" variant="primary" fullWidth className="h-12 text-base">
                    (877) 497-0007
                  </Button>
                  <Button to="/request/" variant="secondary" fullWidth className="h-12 text-base">
                    Request Online
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-muted mb-2">
                    <span>Response Time</span>
                    <span className="font-bold text-primary">~60 min</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>Service Area</span>
                    <span className="font-bold text-text">NoVA, DC, MD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Services (Moved out of sidebar) */}
      <RelatedServices 
          currentServiceId={service.id} 
          category={service.category} 
          audience={service.audience} 
      />

      <ServiceAreaLinks />
    </main>
  );
};

export default ServiceDetail;
