import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import PageMeta from '../components/ui/PageMeta';
import { FileText, HelpCircle, ShieldAlert, BookOpen } from 'lucide-react';

const ResourcesHub: React.FC = () => {
  const resources = [
    {
      title: "Frequently Asked Questions",
      description: "Answers to common questions about water damage, insurance, and the restoration process.",
      icon: <HelpCircle size={32} />,
      link: "/resources/faq/"
    },
    {
      title: "Insurance Claims Guide",
      description: "Step-by-step navigation of the property insurance claim process.",
      icon: <FileText size={32} />,
      link: "/resources/insurance-guide/"
    },
    {
      title: "Homeowner Guides",
      description: "Maintenance tips and prevention strategies for homeowners.",
      icon: <BookOpen size={32} />,
      link: "/resources/homeowner-guides/"
    },
    {
      title: "Emergency Checklists",
      description: "What to do immediately after discovering water damage or a flood.",
      icon: <ShieldAlert size={32} />,
      link: "/resources/emergency-checklists/"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Resources & Guides" description="Helpful guides, checklists, and answers for dealing with property damage." />
      
      <Hero 
        title="Restoration Resources"
        subtitle="Knowledge is power. We help you understand the process, deal with insurance, and protect your property."
      />

      <div className="py-20 bg-subtle/30 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {resources.map((res) => (
                   <Link key={res.title} to={res.link} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-start gap-6 group">
                       <div className="p-4 bg-blue-50 text-primary rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                           {res.icon}
                       </div>
                       <div>
                           <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary">{res.title}</h3>
                           <p className="text-gray-600 leading-relaxed mb-4">{res.description}</p>
                           <span className="text-sm font-medium text-primary hover:underline">Read more &rarr;</span>
                       </div>
                   </Link>
               ))}
            </div>
         </div>
      </div>
    </main>
  );
};

export default ResourcesHub;