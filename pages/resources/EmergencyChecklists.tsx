import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { AlertTriangle, Droplets, PlugZap } from 'lucide-react';

const EmergencyChecklists: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Emergency Checklists" description="What to do immediately when you find water damage or flooding." />
      
      <div className="pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Emergency Checklists', path: '/resources/emergency-checklists/' }]} />
           <h1 className="text-4xl font-semibold text-gray-900 mb-6">Emergency Checklists</h1>
           <p className="text-xl text-gray-600">Immediate steps to take while waiting for help.</p>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm mb-12">
              <div className="bg-red-50 p-6 border-b border-red-100 flex items-center gap-4">
                  <AlertTriangle className="text-red-600" size={32} />
                  <h2 className="text-2xl font-bold text-red-700">Safety First</h2>
              </div>
              <div className="p-8">
                  <ul className="space-y-4">
                      <li className="flex gap-4">
                          <PlugZap className="text-gray-400 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">Do not enter rooms with standing water if electricity is still on.</span>
                      </li>
                       <li className="flex gap-4">
                          <AlertTriangle className="text-gray-400 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">Watch for slip and fall hazards on wet floors.</span>
                      </li>
                       <li className="flex gap-4">
                          <AlertTriangle className="text-gray-400 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">Avoid contact with sewage or contaminated water.</span>
                      </li>
                  </ul>
              </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-6 border-b border-blue-100 flex items-center gap-4">
                  <Droplets className="text-primary" size={32} />
                  <h2 className="text-2xl font-bold text-primary">Steps to Minimize Damage</h2>
              </div>
              <div className="p-8">
                  <ul className="list-decimal list-inside space-y-4 text-gray-700 font-medium ml-2">
                      <li>Shut off the water source immediately.</li>
                      <li>Remove loose items, rugs, and furniture from wet areas if safe.</li>
                      <li>Wipe up excess water from wood furniture.</li>
                      <li>Remove paintings and art from wet walls.</li>
                      <li>Hang up draperies or curtains to keep them off wet floors.</li>
                      <li>Call Flood Doctor at (877) 497-0007.</li>
                  </ul>
              </div>
          </div>

      </div>
    </main>
  );
};

export default EmergencyChecklists;