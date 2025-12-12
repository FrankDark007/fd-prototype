import React from 'react';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';

const RequestService: React.FC = () => {
  return (
    <main className="flex-grow pb-20 md:pb-0 bg-white">
      <PageMeta 
        title="Request Emergency Service" 
        description="Need immediate help? Request water damage restoration service online or call (877) 497-0007. 24/7 rapid response." 
      />
      
      <div className="max-w-xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Request Emergency Service</h1>
           <p className="text-gray-600 text-lg">Our team is on standby 24/7. We will call you back within 5 minutes.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-10">
           <form className="space-y-6">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400" 
                    placeholder="John Doe" 
                  />
              </div>
              <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400" 
                    placeholder="(555) 555-5555" 
                  />
              </div>
              <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1.5">Emergency Type</label>
                  <div className="relative">
                    <select id="issue" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 appearance-none">
                        <option>Water Damage</option>
                        <option>Flooding</option>
                        <option>Sewage Backup</option>
                        <option>Mold Issue</option>
                        <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
              </div>
              <div className="pt-2">
                  <Button fullWidth variant="primary" type="submit" className="text-base py-3 h-12 shadow-md">
                      Submit Request
                  </Button>
              </div>
           </form>
           
           <div className="mt-8 pt-6 border-t border-gray-100 text-center">
               <span className="text-sm text-gray-500">Need immediate assistance? </span>
               <a href="tel:8774970007" className="block mt-1 text-lg font-semibold text-primary hover:underline">(877) 497-0007</a>
           </div>
        </div>
      </div>
    </main>
  );
};

export default RequestService;