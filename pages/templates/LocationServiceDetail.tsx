
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import ServiceDetail from './ServiceDetail';
import { LOCATIONS } from '../../data/locations';
import { SERVICES } from '../../data/services';

const LocationServiceDetail: React.FC = () => {
    const { state, city, serviceSlug } = useParams<{ state: string; city: string; serviceSlug: string }>();

    // 1. Find the Location
    // Normalize url slug to title match (e.g. "fairfax" -> "Fairfax")
    const location = LOCATIONS.find(l =>
        l.title.toLowerCase() === city?.replace(/-/g, ' ').toLowerCase()
    );

    // 2. Find the Service (using the part of the URL that matches a service slug or derived logic)
    // For this prototype, we'll map simplified slugs to actual Service IDs
    // e.g. "water-damage" maps to "res-water"
    let serviceId = '';
    if (serviceSlug?.includes('water')) serviceId = 'res-water';
    else if (serviceSlug?.includes('mold')) serviceId = 'res-mold';
    else if (serviceSlug?.includes('fire')) serviceId = 'res-fire';
    else if (serviceSlug?.includes('sewage')) serviceId = 'res-sewage';
    else serviceId = 'res-water'; // Default

    const baseService = SERVICES.find(s => s.id === serviceId);

    if (!baseService || !location) {
        return (
            <div className="min-h-screen pt-40 text-center">
                <h2 className="text-2xl font-bold">Location or Service Not Found</h2>
                <Link to="/locations/" className="text-primary hover:underline">Return to Locations</Link>
            </div>
        );
    }

    // 3. Create a "Localized" version of the Service Data
    // We clone the base service and inject the City Name into titles/descriptions
    const localizedService: ServiceData = {
        ...baseService,
        title: `${baseService.title} in ${location.title}, ${state?.toUpperCase() === 'VIRGINIA' ? 'VA' : 'MD'}`,
        heroHeading: `${baseService.title} in ${location.title}`,
        heroIntro: `Emergency ${baseService.title.toLowerCase()} for ${location.title} residents. We arrive in 60 minutes.`,
        intro_scenarios: `Handling ${baseService.title.toLowerCase()} issues across ${location.title}.`,
        // We could also dynamically filter testimonials or case studies here
    };

    // 4. Render the standard ServiceDetail with this localized data
    return <ServiceDetail service={localizedService} />;
};

export default LocationServiceDetail;
