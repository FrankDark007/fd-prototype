
import React from 'react';
import ResidentialHeroAnimation from '../components/graphics/ResidentialHeroAnimation';
import CommercialHeroAnimation from '../components/graphics/CommercialHeroAnimation';
import TechnologyHeroAnimation from '../components/graphics/TechnologyHeroAnimation';
import WaterDamageHero from '../components/graphics/scenes/WaterDamageHero';
import FireHero from '../components/graphics/scenes/FireHero';
import MoldHero from '../components/graphics/scenes/MoldHero';

const ComponentGallery = () => {
    return (
        <div className="p-10 bg-gray-100 min-h-screen space-y-10">
            <h1 className="text-3xl font-bold mb-10">Asset Gallery</h1>

            <section>
                <h2 className="text-xl font-bold mb-4">Current Isometric Heroes (V3/V4 Candidates)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="mb-2 text-sm text-gray-500">ResidentialHeroAnimation</h3>
                        <ResidentialHeroAnimation />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="mb-2 text-sm text-gray-500">CommercialHeroAnimation</h3>
                        <CommercialHeroAnimation />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="mb-2 text-sm text-gray-500">TechnologyHeroAnimation</h3>
                        <TechnologyHeroAnimation />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4">Scenes Directory Assets</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="mb-2 text-sm text-gray-500">WaterDamageHero</h3>
                        <WaterDamageHero />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="mb-2 text-sm text-gray-500">FireHero</h3>
                        <FireHero />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="mb-2 text-sm text-gray-500">MoldHero</h3>
                        <MoldHero />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4">Provided Assets (Raw PNGs)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: 'Water Damage Hero', path: '/assets/services/water-damage-restoration-hero.png' },
                        { name: 'Fire & Smoke Hero', path: '/assets/services/fire-smoke-hero.png' },
                        { name: 'Mold Remediation Hero', path: '/assets/services/mold-remediation-hero.png' },
                        { name: 'Flood Cleanup Hero', path: '/assets/services/flood-cleanup-hero.png' },
                        { name: 'Structural Drying Info', path: '/assets/services/structural-drying-process.png' },
                        { name: 'Burst Pipe Info', path: '/assets/services/burst-pipe-process.png' },
                        { name: 'Storm Damage Info', path: '/assets/services/storm-damage-process.png' },
                        { name: 'Home Hero', path: '/assets/home-hero.png' },
                        { name: 'Locations Hero', path: '/assets/locations-hero.png' },
                    ].map((asset, i) => (
                        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <div className="aspect-video bg-gray-50 flex items-center justify-center p-4">
                                <img src={asset.path} alt={asset.name} className="max-w-full max-h-full object-contain drop-shadow-lg" />
                            </div>
                            <div className="p-4 border-t border-gray-100">
                                <h3 className="font-medium text-gray-900">{asset.name}</h3>
                                <p className="text-xs text-gray-400 mt-1 font-mono">{asset.path}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ComponentGallery;
