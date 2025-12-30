import React from 'react';

const HomeHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Flood Doctor Command Center" className="w-full h-auto">
    <defs>
      <filter id="iso-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.15" />
      </filter>
      <linearGradient id="floor-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f1f3f4" />
        <stop offset="100%" stopColor="#e8eaed" />
      </linearGradient>
      <linearGradient id="screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4285f4" />
        <stop offset="100%" stopColor="#1967d2" />
      </linearGradient>
      <linearGradient id="glass-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
      </linearGradient>
    </defs>

    {/* Background Base (Isometric Plane) */}
    <g transform="translate(400, 100)">
      {/* Floor Platform */}
      <path d="M0 200 L-350 0 L0 -200 L350 0 Z" fill="url(#floor-grad)" opacity="0.5" />

      {/* Decorative Grid Lines */}
      <path d="M0 200 L-350 0 M0 -200 L350 0 M-175 100 L175 -100 M-87.5 150 L262.5 -50" stroke="#fff" strokeWidth="2" opacity="0.5" />
    </g>

    {/* Main Dashboard Screen (Floating Isometric) */}
    <g transform="translate(400, 180)" filter="url(#iso-shadow)">
      {/* Screen Body Thickness */}
      <path d="M-180 20 L0 120 L0 140 L-180 40 Z" fill="#174ea6" />
      <path d="M0 120 L180 20 L180 40 L0 140 Z" fill="#185abc" />

      {/* Screen Face */}
      <path d="M0 120 L180 20 L0 -80 L-180 20 Z" fill="#ffffff" stroke="#fff" strokeWidth="1" />

      {/* Screen Content - Map View */}
      <g transform="translate(0, -10)">
        <path d="M0 110 L160 20 L0 -70 L-160 20 Z" fill="#f8f9fa" opacity="0.9" />
        {/* Map Dots */}
        <g>
          <circle cx="-40" cy="30" r="6" fill="#34a853" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="10" r="6" fill="#ea4335" />
          <circle cx="20" cy="50" r="8" fill="#4285f4" opacity="0.3" />
          <circle cx="20" cy="50" r="4" fill="#4285f4" />
        </g>
        {/* UI Overlay Lines */}
        <path d="M-120 30 L-80 50 M-60 60 L0 90" stroke="#e8eaed" strokeWidth="2" />
      </g>
    </g>

    {/* Floating HUD Elements */}
    <g transform="translate(600, 150)" filter="url(#iso-shadow)">
      {/* Stat Card 1 */}
      <path d="M-60 30 L0 60 L60 30 L0 0 Z" fill="#ffffff" />
      <path d="M0 60 L60 30 L60 40 L0 70 Z" fill="#e8eaed" />
      <path d="M-60 30 L0 60 L0 70 L-60 40 Z" fill="#d1d3d4" />
      {/* Stat Graphic */}
      <text x="-15" y="38" fontSize="14" fontWeight="bold" fill="#34a853" transform="rotate(-26) skewX(26)">98%</text>
    </g>

    <g transform="translate(200, 150)" filter="url(#iso-shadow)">
      {/* Stat Card 2 */}
      <path d="M-60 30 L0 60 L60 30 L0 0 Z" fill="#ffffff" />
      <path d="M0 60 L60 30 L60 40 L0 70 Z" fill="#e8eaed" />
      <path d="M-60 30 L0 60 L0 70 L-60 40 Z" fill="#d1d3d4" />
      {/* Stat Graphic */}
      <text x="-15" y="38" fontSize="12" fontWeight="bold" fill="#ea4335" transform="rotate(-26) skewX(26)">ALERT</text>
    </g>

    {/* Dispatch Truck (Simplified Isometric) */}
    <g transform="translate(280, 280)">
      <path d="M0 20 L40 0 L40 -20 L0 0 Z" fill="#f8f9fa" /> {/* Roof */}
      <path d="M0 20 L40 0 L40 15 L0 35 Z" fill="#e8eaed" /> {/* Side */}
      <path d="M0 20 L-30 5 L-30 20 L0 35 Z" fill="#d1d3d4" /> {/* Front */}
      <circle cx="10" cy="5" r="2" fill="#4285f4" /> {/* Beacon */}
    </g>

  </svg>
);

export default HomeHeroAnimation;