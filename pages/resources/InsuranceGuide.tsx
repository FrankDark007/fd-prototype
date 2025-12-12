import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { FileCheck, Camera, PhoneIncoming, FileText } from 'lucide-react';

const InsuranceGuide: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Insurance Claims Guide" description="Step-by-step guide to handling property insurance claims for water damage." />
      
      <div className="pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Insurance Guide', path: '/resources/insurance-guide/' }]} />
           <h1 className="text-4xl font-semibold text-gray-900 mb-6">Insurance Claims Guide</h1>
           <p className="text-xl text-gray-600">Navigating the claims process without the stress.</p>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
              <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                          <PhoneIncoming size={24} />
                      </div>
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Report the Loss Immediately</h2>
                      <p className="text-gray-600 leading-relaxed">
                          Contact your insurance agent or carrier’s 24-hour claims hotline as soon as you discover the damage. Provide them with the date and time of the incident. Ask for your claim number immediately—you will need this for all correspondence.
                      </p>
                  </div>
              </div>

              <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                          <Camera size={24} />
                      </div>
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Document Everything</h2>
                      <p className="text-gray-600 leading-relaxed">
                          Take photos and videos of the damage <strong>before</strong> any cleanup begins, if possible. Do not throw away damaged items (like soaked carpet samples or ruined furniture) until the adjuster has seen them or given permission.
                      </p>
                  </div>
              </div>

              <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                          <FileCheck size={24} />
                      </div>
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Mitigate Further Damage</h2>
                      <p className="text-gray-600 leading-relaxed">
                          Your policy requires you to take reasonable steps to prevent further damage. This is where Flood Doctor comes in. We extract water, set up drying equipment, and tarp roofs. This is called "mitigation" and is typically fully covered.
                      </p>
                  </div>
              </div>

               <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                          <FileText size={24} />
                      </div>
                  </div>
                  <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Review the Adjuster's Estimate</h2>
                      <p className="text-gray-600 leading-relaxed">
                          An adjuster will visit to scope the damage. We can meet them on-site to ensure they see the full extent of the moisture damage, including what might be hidden behind walls. We use Xactimate software (the industry standard) to align our estimates with theirs.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </main>
  );
};

export default InsuranceGuide;