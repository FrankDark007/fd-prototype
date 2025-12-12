import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Contact Us" description="24/7 Emergency Contact. Call (877) 497-0007 for immediate water damage assistance." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div>
                  <h1 className="text-4xl font-semibold text-gray-900 mb-6">Get in touch</h1>
                  <p className="text-xl text-gray-600 mb-12">
                      For emergencies, please call us immediately. We answer 24/7.
                  </p>
                  
                  <div className="space-y-8">
                      <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-50 text-primary rounded-xl">
                              <Phone size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900">Emergency Phone</h3>
                              <p className="text-gray-600 mb-1">Available 24/7/365</p>
                              <a href="tel:8774970007" className="text-2xl font-bold text-primary hover:underline">(877) 497-0007</a>
                          </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                          <div className="p-3 bg-gray-50 text-gray-600 rounded-xl">
                              <Mail size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                              <p className="text-gray-600 mb-1">General inquiries</p>
                              <a href="mailto:help@flood.doctor" className="text-lg font-medium text-primary hover:underline">help@flood.doctor</a>
                          </div>
                      </div>

                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-gray-50 text-gray-600 rounded-xl">
                              <MapPin size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-semibold text-gray-900">Headquarters</h3>
                              <p className="text-gray-600">
                                  Serving Northern Virginia<br />
                                  Washington DC<br />
                                  Maryland
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                   <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a message</h2>
                   <form className="space-y-4">
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                           <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                           <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                           <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"></textarea>
                       </div>
                       <Button fullWidth variant="primary" type="submit" className="h-12">Send Message</Button>
                   </form>
              </div>

          </div>
      </div>
    </main>
  );
};

export default Contact;