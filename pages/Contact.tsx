import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactHeroAnimation } from '../components/graphics';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Contact Us" description="24/7 Emergency Contact. Call (877) 497-0007 for immediate water damage assistance." />
      
      <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 tracking-tight leading-[1.1]">Get in touch</h1>
                  <p className="text-xl text-gray-600 mb-12 max-w-lg">
                      For emergencies, please call us immediately. We answer 24/7/365.
                  </p>
                  
                  <div className="mb-12">
                    <ContactHeroAnimation />
                  </div>
                  
                  <div className="space-y-10">
                      <div className="flex items-start gap-5">
                          <div className="p-3.5 bg-blue-50 text-primary rounded-xl shrink-0">
                              <Phone size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900">Emergency Phone</h3>
                              <p className="text-gray-600 mb-1">Available 24/7/365</p>
                              <a href="tel:8774970007" className="text-2xl font-bold text-primary hover:underline tracking-tight">(877) 497-0007</a>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-5">
                          <div className="p-3.5 bg-gray-50 text-gray-600 rounded-xl shrink-0">
                              <Mail size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                              <p className="text-gray-600 mb-1">General inquiries</p>
                              <a href="mailto:help@flood.doctor" className="text-lg font-medium text-primary hover:underline">help@flood.doctor</a>
                          </div>
                      </div>

                       <div className="flex items-start gap-5">
                          <div className="p-3.5 bg-gray-50 text-gray-600 rounded-xl shrink-0">
                              <MapPin size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900">Headquarters</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Serving Northern Virginia<br />
                                  Washington DC<br />
                                  Maryland
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
                   <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a message</h2>
                   <form className="space-y-5">
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Name</label>
                           <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email</label>
                           <input type="email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Message</label>
                           <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"></textarea>
                       </div>
                       <div className="pt-2">
                           <Button fullWidth variant="primary" type="submit" className="h-12 shadow-button">Send Message</Button>
                       </div>
                   </form>
              </div>

          </div>
      </Section>
    </main>
  );
};

export default Contact;