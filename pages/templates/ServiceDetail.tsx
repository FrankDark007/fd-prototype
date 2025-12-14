import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import RelatedServices from '../../components/sections/RelatedServices';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import PageMeta from '../../components/ui/PageMeta';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { ServiceDetailHeroAnimation } from '../../components/graphics';
import { 
  CheckCircle2, AlertTriangle, ArrowRight, Search, ShieldCheck, 
  Clock, XCircle, CheckCircle, ChevronDown, ChevronUp, AlertOctagon, 
  Info, Activity,
  // Dynamic Icons
  Droplets, Flame, Wind, CloudRain, CloudLightning, Hammer, Wrench, Zap, ArrowDown, 
  Construction, Stethoscope, HeartPulse, Factory, Cog, Monitor, FileText, Bed, 
  Utensils, Waves, GraduationCap, School, ShoppingBag, FlaskConical, BrickWall, 
  Building2, Users, Truck, Calendar, MessageSquare, Home
} from 'lucide-react';
import { siteConfig } from '../../config/site';

// Import Specific Infographics (Mid-page)
import DryingProgressCard from '../../components/ui/DryingProgressCard';
import FloodTimelineCard from '../../components/ui/illustrations/service-specific/FloodTimelineCard';
import SewageContainmentCard from '../../components/ui/illustrations/service-specific/SewageContainmentCard';
import MoldAirflowCard from '../../components/ui/illustrations/service-specific/MoldAirflowCard';
import StructuralDryingCard from '../../components/ui/illustrations/service-specific/StructuralDryingCard';

interface ServiceDetailProps {
  service: ServiceData;
}

// Helper to map card titles to specific icons and colors
const getSymptomIcon = (text: string) => {
  const t = text.toLowerCase();
  
  // High Priority / Specific Hazards
  if (t.includes('fire') || t.includes('smoke') || t.includes('burn') || t.includes('ash') || t.includes('arson')) 
    return { Icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' };

  if (t.includes('sewage') || t.includes('biohazard') || t.includes('bacteria') || t.includes('toilet') || t.includes('septic') || t.includes('virus')) 
    return { Icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' };

  if (t.includes('mold') || t.includes('growth') || t.includes('fungus') || t.includes('musty') || t.includes('spore')) 
    return { Icon: Search, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' };

  // Medical / Healthcare
  if (t.includes('patient') || t.includes('hospital') || t.includes('clinic') || t.includes('medical') || t.includes('sterile') || t.includes('doctor') || t.includes('nurse') || t.includes('lab') || t.includes('pharmacy') || t.includes('er '))
    return { Icon: Stethoscope, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' };

  // Industrial / Machinery
  if (t.includes('machine') || t.includes('factory') || t.includes('plant') || t.includes('production') || t.includes('industrial') || t.includes('equipment') || t.includes('tank') || t.includes('hydraulic') || t.includes('loading dock'))
    return { Icon: Factory, color: 'text-slate-700', bg: 'bg-slate-100', border: 'border-slate-200' };

  // Chemical
  if (t.includes('chemical') || t.includes('acid') || t.includes('fuel') || t.includes('oil') || t.includes('solvent') || t.includes('spill') || t.includes('hazmat'))
    return { Icon: FlaskConical, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' };

  // Office / Data / Admin
  if (t.includes('data') || t.includes('server') || t.includes('computer') || t.includes('electronic') || t.includes('office') || t.includes('admin') || t.includes('record') || t.includes('file') || t.includes('document'))
    return { Icon: Monitor, color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-100' };

  // Hospitality / Living
  if (t.includes('guest') || t.includes('hotel') || t.includes('lobby') || t.includes('bed') || t.includes('suite') || t.includes('resort') || t.includes('tenant') || t.includes('living'))
    return { Icon: Bed, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' };
  
  if (t.includes('kitchen') || t.includes('restaurant') || t.includes('dining') || t.includes('food') || t.includes('cafeteria') || t.includes('grease') || t.includes('break room'))
    return { Icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' };

  if (t.includes('pool') || t.includes('spa') || t.includes('swim'))
    return { Icon: Waves, color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-100' };

  // Education / Public
  if (t.includes('school') || t.includes('class') || t.includes('student') || t.includes('dorm') || t.includes('campus') || t.includes('university') || t.includes('library') || t.includes('book') || t.includes('municipal'))
    return { Icon: School, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100' };

  // Retail / Commercial
  if (t.includes('store') || t.includes('shop') || t.includes('retail') || t.includes('mall') || t.includes('inventory') || t.includes('stock') || t.includes('merchandise'))
    return { Icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-100' };

  // Weather / Exterior
  if (t.includes('storm') || t.includes('wind') || t.includes('hurricane') || t.includes('tornado') || t.includes('hail')) 
    return { Icon: CloudLightning, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-200' };
    
  if (t.includes('rain') || t.includes('roof') || t.includes('gutter') || t.includes('weather') || t.includes('shingle')) 
    return { Icon: CloudRain, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' };

  // Systems
  if (t.includes('hvac') || t.includes('ac') || t.includes('vent') || t.includes('condensate') || t.includes('air')) 
    return { Icon: Wind, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' };
    
  if (t.includes('pipe') || t.includes('plumbing') || t.includes('supply') || t.includes('valve') || t.includes('heater') || t.includes('sprinkler') || t.includes('drain') || t.includes('clog')) 
    return { Icon: Wrench, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' };
    
  if (t.includes('appliance') || t.includes('washer') || t.includes('dishwasher') || t.includes('electric') || t.includes('power') || t.includes('circuit')) 
    return { Icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-100' };

  // Structural
  if (t.includes('foundation') || t.includes('basement') || t.includes('seepage') || t.includes('groundwater') || t.includes('concrete') || t.includes('slab')) 
    return { Icon: ArrowDown, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100' };

  if (t.includes('construction') || t.includes('renovation') || t.includes('accident') || t.includes('demo')) 
    return { Icon: Hammer, color: 'text-gray-600', bg: 'bg-gray-100', border: 'border-gray-200' };

  if (t.includes('wall') || t.includes('ceiling') || t.includes('floor') || t.includes('drywall') || t.includes('structure') || t.includes('cabinet'))
    return { Icon: BrickWall, color: 'text-stone-600', bg: 'bg-stone-100', border: 'border-stone-200' };

  // Water General
  if (t.includes('water') || t.includes('flood') || t.includes('leak') || t.includes('wet') || t.includes('moisture') || t.includes('damp') || t.includes('humid')) 
    return { Icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' };

  // Default Fallback
  return { Icon: AlertOctagon, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' };
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [showAllWhenToCall, setShowAllWhenToCall] = useState(false);
  const [showAllSteps, setShowAllSteps] = useState(false);

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

  // Helper to render the correct mid-page infographic
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

  // Helper to parse strings into Title/Description if separated by colon or period
  const parseItem = (text: string) => {
    const splitIndex = text.indexOf('.');
    if (splitIndex > 5 && splitIndex < 50) { // Arbitrary heuristic for a sentence break acting as header
        return { title: text.substring(0, splitIndex + 1), desc: text.substring(splitIndex + 1).trim() };
    }
    const colonIndex = text.indexOf(':');
    if (colonIndex > 3 && colonIndex < 50) {
        return { title: text.substring(0, colonIndex + 1), desc: text.substring(colonIndex + 1).trim() };
    }
    return { title: text, desc: '' };
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

  // --- Limits for "Show More" ---
  const INITIAL_WHEN_TO_CALL_COUNT = 8;
  const INITIAL_STEPS_COUNT = 6;

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title={service.title} 
        description={service.heroIntro ? service.heroIntro.substring(0, 160) + "..." : service.shortDescription} 
        schema={combinedSchema}
      />

      {/* 1. Hero Section (Split Layout) */}
      <div className="bg-white pt-8 pb-12 md:pt-12 md:pb-20 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
            
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center mt-8">
                {/* Left Column: Text */}
                <div className="lg:col-span-7 mb-12 lg:mb-0 w-full">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-wide uppercase mb-6">
                        {service.audience} {service.category.replace('_', ' ')}
                    </span>
                    <h1 className="text-[40px] md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.05]">
                        {service.heroHeading || service.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                        {service.heroIntro || service.shortDescription}
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-8">
                        <Button to="/request/" variant="primary" className="h-14 px-8 text-lg">
                            Request Service
                        </Button>
                        <Button href="tel:8774970007" variant="secondary" className="h-14 px-8 text-lg">
                            Call (877) 497-0007
                        </Button>
                    </div>
                    {/* Trust Bar Line */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 font-medium">
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

                {/* Right Column: Hero Visual Slot */}
                <div className="lg:col-span-5 relative w-full">
                    <ServiceDetailHeroAnimation visualKey={service.heroVisualKey} />
                </div>
            </div>
        </div>
      </div>

      {/* 2. When to Call (Structured Grid) */}
      {service.whenToCall && (
        <Section bg="white">
            <div className="mb-10 max-w-3xl">
                <h2 className="text-[28px] md:text-3xl font-semibold text-gray-900 mb-4">When to Call Us</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {service.intro_whenToCall || "Identifying the early signs of damage can save you thousands in repairs. If you notice any of the following symptoms, immediate professional attention is recommended."}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {(showAllWhenToCall ? service.whenToCall : service.whenToCall.slice(0, INITIAL_WHEN_TO_CALL_COUNT)).map((item, i) => {
                    const { title, desc } = parseItem(item);
                    const { Icon, color, bg, border } = getSymptomIcon(title);
                    
                    return (
                        <div key={i} className={`p-5 rounded-xl border ${border || 'border-gray-100'} hover:shadow-md transition-all flex flex-col h-full bg-white group`}>
                            <div className={`mb-4 w-10 h-10 rounded-full ${bg} flex items-center justify-center ${color} shrink-0 group-hover:scale-110 transition-transform`}>
                                <Icon size={20} strokeWidth={2} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{title}</h3>
                            {desc && <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>}
                        </div>
                    );
                })}
            </div>
            
            {service.whenToCall.length > INITIAL_WHEN_TO_CALL_COUNT && (
                <div className="mt-8 text-center">
                    <button 
                        onClick={() => setShowAllWhenToCall(!showAllWhenToCall)}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline focus:outline-none"
                    >
                        {showAllWhenToCall ? (
                            <>Show less <ChevronUp size={16} /></>
                        ) : (
                            <>Show {service.whenToCall.length - INITIAL_WHEN_TO_CALL_COUNT} more symptoms <ChevronDown size={16} /></>
                        )}
                    </button>
                </div>
            )}
        </Section>
      )}

      {/* 3. What We Do & Infographic (Stepper Layout) */}
      <Section bg="subtle" borderTop borderBottom>
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-20 items-start">
              
              {/* Left: Content Stepper */}
              <div className="lg:col-span-6 mb-12 lg:mb-0 w-full">
                  <h2 className="text-[28px] md:text-3xl font-semibold text-gray-900 mb-6">Our Restoration Process</h2>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                      {service.intro_whatWeDo || "We follow a rigorous, science-based protocol to restore your property. From initial assessment to final verification, every step is documented and executed by certified technicians."}
                  </p>
                  
                  <div className="space-y-0 relative">
                    {/* Vertical Line */}
                    <div className="absolute top-4 left-4 bottom-4 w-0.5 bg-gray-200"></div>

                    {(showAllSteps ? service.whatWeDo : service.whatWeDo?.slice(0, INITIAL_STEPS_COUNT))?.map((item, i) => {
                        const { title, desc } = parseItem(item);
                        return (
                            <div key={i} className="relative pl-12 pb-8 last:pb-0">
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-primary text-primary font-bold text-sm flex items-center justify-center z-10">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                                    {desc && <p className="text-gray-600 leading-relaxed">{desc}</p>}
                                    {/* If no description was parsed, display the rest of the string if it was just one long string */}
                                    {!desc && item.length > title.length && <p className="text-gray-600 leading-relaxed">{item}</p>}
                                </div>
                            </div>
                        );
                    })}
                  </div>

                  {service.whatWeDo && service.whatWeDo.length > INITIAL_STEPS_COUNT && (
                      <div className="mt-8 pl-12">
                          <button 
                              onClick={() => setShowAllSteps(!showAllSteps)}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                              {showAllSteps ? 'Show fewer steps' : 'View full process'}
                          </button>
                      </div>
                  )}
              </div>

              {/* Right: Infographic Panel */}
              <div className="lg:col-span-6 w-full">
                  <div className="sticky top-24">
                      {/* Render Page Specific Infographic */}
                      <div className="bg-white rounded-2xl shadow-card border border-gray-200 overflow-hidden p-6 md:p-8">
                         {renderInfographic()}
                         <div className="text-center mt-4 text-xs text-gray-400 italic">
                             {service.title} – Process Visualization
                         </div>
                      </div>
                      
                      {/* Mini Stats or Certs */}
                      <div className="mt-6 flex flex-wrap gap-3 justify-center">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                              <Activity size={14} className="text-green-500" />
                              Live Monitoring
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                              <ShieldCheck size={14} className="text-blue-500" />
                              100% Satisfaction
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Section>

      {/* 4. Safety / What to do now (Checklist Panel) */}
      {service.safety && (
         <Section bg="white" width="narrow">
             <div className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
                 <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="bg-white p-4 rounded-2xl w-fit shadow-sm border border-red-100 text-red-600">
                        <AlertTriangle size={32} />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{service.safety.head || 'Critical Safety Steps'}</h2>
                        <p className="text-gray-700 text-lg">
                            {service.intro_safety || "Your safety is the priority. Please review this checklist immediately while waiting for our team to arrive."}
                        </p>
                    </div>
                 </div>
                 
                 <div className="bg-white rounded-2xl p-6 md:p-8 border border-red-100 shadow-sm">
                     <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Immediate Actions</h3>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                         {service.safety.items.map((item, i) => (
                             <li key={i} className="flex gap-3 items-start">
                                 <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                                     <CheckCircle2 size={12} />
                                 </div>
                                 <span className="text-gray-800 font-medium">{item}</span>
                             </li>
                         ))}
                     </ul>
                 </div>

                 {service.safety.kidsPets && (
                     <div className="mt-6 flex gap-4 items-start bg-red-100/50 p-4 rounded-xl border border-red-100">
                         <Info className="text-red-600 shrink-0 mt-0.5" size={20} />
                         <div>
                            <strong className="block text-gray-900 mb-1">Kids & Pets Safety</strong>
                            <p className="text-gray-700 text-sm">{service.safety.kidsPets}</p>
                         </div>
                     </div>
                 )}
             </div>
         </Section>
      )}

      {/* 5. What to Expect (Cards) */}
      {service.whatToExpect && (
        <Section bg="gray" borderTop borderBottom>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[28px] md:text-3xl font-semibold text-gray-900 mb-4">What to Expect</h2>
                <p className="text-lg text-gray-600">
                    Restoration is a process. Here is a clear breakdown of the timeline, arrival procedures, and what life will look like in your home during the project.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Timeline Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4">
                        <Calendar size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">Timeline</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.whatToExpect.timeline}</p>
                </div>

                {/* Arrival Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4">
                        <Truck size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">Arrival</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.whatToExpect.arrival}</p>
                </div>

                {/* Updates Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4">
                        <MessageSquare size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">Daily Updates</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.whatToExpect.daily}</p>
                </div>

                {/* Noise/Conditions Card */}
                {service.whatToExpect.noise && (
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all h-full">
                        <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-4">
                            {service.audience === 'COMMERCIAL' ? <Building2 size={20} /> : <Home size={20} />}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-3">
                            {service.audience === 'COMMERCIAL' ? 'Operational Impact' : 'Living Conditions'}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.whatToExpect.noise}</p>
                    </div>
                )}
            </div>
        </Section>
      )}

      {/* 6. Scenarios (2-Column List) */}
      {service.scenarios && (
         <Section bg="white">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="mb-8 lg:mb-0">
                     <h2 className="text-[28px] md:text-3xl font-semibold text-gray-900 mb-6">Common Scenarios</h2>
                     <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                         {service.intro_scenarios || "Every property is unique, but we frequently encounter these specific situations. We are prepared with the right equipment to handle any of these scenarios immediately."}
                     </p>
                     <div className="hidden md:block">
                        <Button to="/request/" variant="outline">Schedule Assessment</Button>
                     </div>
                 </div>
                 
                 <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                         {service.scenarios.map((item, i) => (
                             <div key={i} className="flex gap-3 items-start">
                                 <ArrowRight className="text-primary w-4 h-4 flex-shrink-0 mt-1" />
                                 <span className="text-gray-700 font-medium text-sm">{item}</span>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </Section>
      )}

      {/* 7. Save vs Remove (Balanced Columns) */}
      {service.saveVsRemove && (
          <Section bg="white" borderTop>
              <div className="max-w-5xl mx-auto">
                  <h2 className="text-[28px] md:text-3xl font-semibold text-gray-900 mb-4 text-center">Materials We Can Often Save vs. Remove</h2>
                  <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                      Our goal is always to restore rather than replace. However, safety and material porosity dictate what can be salvaged.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Save Column */}
                      <div className="bg-green-50/50 rounded-2xl border border-green-100 p-8">
                          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-100">
                              <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                  <CheckCircle size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">Often Salvageable</h3>
                          </div>
                          <ul className="space-y-4">
                              {service.saveVsRemove.save.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                                      <span className="text-gray-700 font-medium">{item}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      {/* Remove Column */}
                      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
                          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                              <div className="p-2 bg-gray-200 text-gray-600 rounded-lg">
                                  <XCircle size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">Usually Removed</h3>
                          </div>
                          <ul className="space-y-4">
                              {service.saveVsRemove.remove.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0"></span>
                                      <span className="text-gray-600">{item}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-8 italic">
                      *Final determination depends on contamination category, duration of exposure, and material condition.
                  </p>
              </div>
          </Section>
      )}

      {/* 8. FAQs (Google Style) */}
      {service.faqs && (
        <GoogleStyleFAQ 
            data={service.faqs} 
            title="Frequently Asked Questions" 
            className="py-16 md:py-24 bg-gray-50 border-t border-gray-100" 
        />
      )}

      {/* 9. People Also Search For (Chips) */}
      {service.relatedSearchTerms && (
          <Section bg="white" borderTop>
              <div className="text-center max-w-4xl mx-auto">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Related Search Terms</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                      {service.relatedSearchTerms.map((term, i) => (
                          <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 hover:border-primary hover:text-primary transition-colors cursor-default select-none">
                              <Search size={10} className="mr-1.5 opacity-50" />
                              {term}
                          </span>
                      ))}
                  </div>
              </div>
          </Section>
      )}

      {/* 10. Internal Linking Modules */}
      <RelatedServices currentServiceId={service.id} category={service.category} audience={service.audience} />
      <ServiceAreaLinks />
      
      {/* 11. Bottom CTA (Desktop Only) */}
      <div className="py-20 bg-white border-t border-gray-100 text-center hidden md:block">
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