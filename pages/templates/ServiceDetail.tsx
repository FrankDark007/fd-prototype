
import React, { useState, useEffect } from 'react';
import { ServiceData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Hero from '../../components/sections/Hero';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServiceDetailHeroAnimation from '../../components/graphics/ServiceDetailHeroAnimation';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { BentoGrid, BentoGridItem } from '../../components/ui/BentoGrid';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import Button from '../../components/ui/Button';
import EmergencyServiceCard from '../../components/ui/EmergencyServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/site';

import {
  CheckCircle2,
  AlertTriangle,
  Activity,
  Shield,
  Clock,
  Truck,
  Volume2,
  Calendar,
  Microscope,
  FileCheck,
  Scale,
  Award
} from 'lucide-react';

interface ServiceDetailProps {
  service: ServiceData;
}

// Helper to map specification keys to icons
const getSpecIcon = (key: string) => {
  const normalized = key.toLowerCase();
  if (normalized.includes('time') || normalized.includes('turnaround')) return Clock;
  if (normalized.includes('arrival') || normalized.includes('logistics')) return Truck;
  if (normalized.includes('noise') || normalized.includes('sound')) return Volume2;
  if (normalized.includes('daily') || normalized.includes('frequency')) return Calendar;
  if (normalized.includes('lab') || normalized.includes('analysis')) return Microscope;
  if (normalized.includes('report') || normalized.includes('doc')) return FileCheck;
  if (normalized.includes('standard') || normalized.includes('regulation')) return Scale;
  if (normalized.includes('cert') || normalized.includes('qual')) return Award;
  return Activity; // Default
};

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

  // Handle scroll manually to prevent "Refused to connect" errors
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
  }, [sections]);

  // Combined Schema (Service + FAQ)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Flood Doctor",
      "telephone": "+1-877-497-0007"
    },
    "areaServed": {
      "@type": "State",
      "name": "Northern Virginia"
    },
    "url": `${siteConfig.SITE_URL}${service.slug}`
  };

  const faqSchemaSnippet = service.faqs ? {
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Merge schemas into a graph or array if needed, but PageMeta handles single objects well. 
  // For simplicity, we supply the Service schema primarily, and FAQ as secondary if supported, 
  // or we can construct a graph. Here we'll pass Service schema as primary.
  // Ideally, PageMeta should handle array, but let's stick to Service for now.

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={service.title}
        description={service.shortDescription}
        schema={serviceSchema} // Prioritizing Service schema
      />

      {/* Hero: Split layout with Visual */}
      <Hero
        title={service.heroHeading || service.title}
        subtitle={service.heroIntro || service.shortDescription}
        visual={<ServiceDetailHeroAnimation visualKey={service.heroVisualKey} />}
      />

      {/* Sticky Product Navigation Bar (Desktop Only) */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 hidden lg:block transition-all duration-300 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-8 h-14">
            <span className="font-display font-medium text-sm text-text">{service.title}</span>
            <div className="h-4 w-px bg-gray-200"></div>
            <nav className="flex gap-6 h-full relative">
              {sections.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`relative text-sm font-medium transition-colors h-full flex items-center ${activeSection === section.id
                    ? 'text-primary'
                    : 'text-muted hover:text-primary'
                    }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                    />
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="border-b border-subtle bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content Area */}
          <div className="lg:col-span-8">

            {/* 1. Overview / When to Call */}
            <section id="overview" className="scroll-mt-40 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-subtle/50 rounded-4xl p-8 lg:p-12 border border-white shadow-sm"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-3 bg-white rounded-2xl text-primary shadow-sm hidden sm:block">
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
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 bg-white/80 p-4 rounded-xl border border-border shadow-sm"
                      >
                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-text font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </section>

            {/* 2. Process / How it Works - UPGRADED TO BENTO GRID */}
            <section id="process" className="scroll-mt-40 mb-32">
              <div className="mb-12">
                <h2 className="font-display text-4xl font-medium text-gray-900 mb-4">How it works</h2>
                <p className="text-xl text-gray-500 max-w-2xl font-normal">Our systematic approach ensures thorough restoration and complete peace of mind.</p>
              </div>

              <BentoGrid className="!max-w-none !px-0 !gap-4 md:!gap-6">
                {service.whatWeDo?.map((step, i) => {
                  const [title, desc] = step.split(':');
                  // Make the first and last items span 2 columns for visual interest
                  const isWide = i === 0 || i === (service.whatWeDo?.length || 0) - 1;

                  return (
                    <BentoGridItem
                      key={i}
                      index={i}
                      className={isWide ? "md:col-span-2 bg-white" : "bg-white"}
                      title={title}
                      description={desc || step}
                      icon={
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-primary font-bold text-sm">
                          {i + 1}
                        </div>
                      }
                      header={
                        // Conditional visual for the first item
                        i === 0 && (
                          <div className="w-full h-full flex items-center justify-center bg-blue-50/50">
                            <div className="w-32 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center p-2">
                              <div className="h-2 w-20 bg-gray-100 rounded-full mb-2"></div>
                              <div className="h-2 w-12 bg-blue-100 rounded-full"></div>
                            </div>
                          </div>
                        )
                      }
                    />
                  );
                })}
              </BentoGrid>
            </section>

            {/* 3. Tech Specs - UPGRADED GRID LAYOUT */}
            <section id="specs" className="scroll-mt-40 mb-20">
              <h2 className="font-display text-3xl font-medium text-text mb-8">Technical Specifications</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whatToExpect && Object.entries(service.whatToExpect).map(([key, value], i) => {
                  if (!value) return null;
                  const Icon = getSpecIcon(key);
                  const label = key.replace(/([A-Z])/g, ' $1').trim(); // Camel to Title case

                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                            {label}
                          </div>
                          <div className="font-sans text-lg font-medium text-gray-900 leading-snug">
                            {value}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* 4. Safety Information */}
            <section id="safety" className="scroll-mt-40 mb-20">
              {service.safety && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-yellow-50/40 rounded-4xl p-8 lg:p-12 border border-yellow-100"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-50 rounded-full border border-yellow-100">
                      <AlertTriangle size={24} style={{ color: '#fbbc04' }} />
                    </div>
                    <h2 className="font-display text-2xl font-medium text-text">Safety Protocols</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                    {service.safety.items.slice(0, 6).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 list-none font-sans text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </div>

                  {service.safety.kidsPets && (
                    <div className="bg-white p-6 rounded-2xl border border-yellow-100 flex items-start gap-4 shadow-sm">
                      <Shield size={24} style={{ color: '#1e8e3e' }} className="shrink-0" />
                      <div>
                        <h4 className="font-bold text-text text-sm mb-1">Family Safety Note</h4>
                        <p className="text-sm text-muted">{service.safety.kidsPets}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </section>

            {/* 5. FAQ */}
            <section id="faq" className="scroll-mt-40">
              {service.faqs && (
                <GoogleStyleFAQ
                  data={service.faqs}
                  title="Common Questions"
                  className="py-0 border-none"
                />
              )}
            </section>

          </div>

          {/* Right Sidebar - Sticky Call to Action */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-40 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white border border-border rounded-3xl p-8 shadow-google"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Available Now</span>
                </div>
                <h3 className="font-display text-xl font-medium text-text mb-2">Need {service.title}?</h3>
                <p className="text-sm text-muted mb-6">
                  Our certified team is ready to deploy to your location. Response time averages 60 minutes.
                </p>

                <div className="space-y-3">
                  <Button href="tel:8774970007" variant="primary" fullWidth className="h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
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
              </motion.div>

              {/* Enhanced Live Status Dashboard */}
              <EmergencyServiceCard variant="expanded" />
            </div>
          </aside>

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
