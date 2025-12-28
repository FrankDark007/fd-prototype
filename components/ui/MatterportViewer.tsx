
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Layers, Box } from 'lucide-react';

interface MatterportViewerProps {
    modelId?: string;
    title?: string;
    className?: string;
}

const MatterportViewer: React.FC<MatterportViewerProps> = ({
    modelId = 'SxQL3iGyoDo', // Default demo model if none provided
    title = 'Project 3D Scan',
    className
}) => {
    const [activeView, setActiveView] = useState<'before' | 'during' | 'after'>('during');

    // Logic to simulate switching models (in production, these would be real model IDs)
    // For prototype, we just reload the same frame or switch parameters if available
    const getModelUrl = (view: string) => {
        // &title=0 hides the model title/client name
        // &brand=0 hides branding
        // &mls=1 is MLS compliant mode (strict de-branding)
        // &help=0 hides the help button
        return `https://my.matterport.com/show/?m=${modelId}&play=1&qs=1&title=0&brand=0&mls=1&help=1`;
    };

    return (
        <div className={`w-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden ${className}`}>
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-gray-100 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Box size={18} className="text-primary" />
                        <h3 className="font-display text-lg font-medium text-gray-900">{title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">Explore the job site condition at every stage</p>
                </div>

                {/* View Toggles */}
                <div className="flex bg-gray-100 p-1 rounded-xl">
                    {(['before', 'during', 'after'] as const).map((view) => (
                        <button
                            key={view}
                            onClick={() => setActiveView(view)}
                            className={`
                 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                 ${activeView === view
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'}
               `}
                        >
                            {view.charAt(0).toUpperCase() + view.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Iframe Container */}
            <div className="relative aspect-video w-full bg-gray-50">
                <iframe
                    width="100%"
                    height="100%"
                    src={getModelUrl(activeView)}
                    frameBorder="0"
                    allowFullScreen
                    allow="xr-spatial-tracking"
                    className="absolute inset-0 w-full h-full"
                ></iframe>

                {/* Overlay Graphic for 'Auth' or 'Live' feel */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    LIVE VIEW
                </div>

                <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-lg shadow-lg border border-gray-200 transition-colors">
                    <Maximize2 size={20} />
                </button>
            </div>

            {/* Footer Info */}
            <div className="bg-gray-50 p-4 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
                <div className="flex items-center gap-4">
                    <span>Scanned with Matterport Pro3</span>
                    <span>•</span>
                    <span>4k Resolution</span>
                </div>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Layers size={14} />
                    View Floorplan
                </a>
            </div>
        </div>
    );
};

export default MatterportViewer;
