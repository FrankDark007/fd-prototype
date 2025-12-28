import React, { useEffect } from 'react';
import { siteConfig } from '../../config/site';

const GlobalSchema: React.FC = () => {
    useEffect(() => {
        // Check if schema already exists to avoid duplicates
        let script = document.getElementById('global-json-ld');
        if (!script) {
            script = document.createElement('script');
            script.id = 'global-json-ld';
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }

        const schema = {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Flood Doctor",
            "image": `${siteConfig.SITE_URL}/og-image-default.jpg`,
            "url": siteConfig.SITE_URL,
            "telephone": "+1-877-497-0007",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "TBD",
                "addressLocality": "Fairfax",
                "addressRegion": "VA",
                "postalCode": "22030",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.8462,
                "longitude": -77.3064
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://www.facebook.com/flooddoctor",
                "https://twitter.com/flooddoctor",
                "https://www.linkedin.com/company/flood-doctor"
            ],
            "priceRange": "$$"
        };

        script.textContent = JSON.stringify(schema);

        return () => {
            // Optional: Don't remove on unmount if we want it global, 
            // but usually React handles SPA navigation cleanly.
            // Keeping it enables "Global" persistence.
        };
    }, []);

    return null;
};

export default GlobalSchema;
