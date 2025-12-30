import React from 'react';

const CommercialHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Commercial Facility Restoration" className="w-full h-auto">
    <defs>
      <filter id="comm-iso-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" floodOpacity="0.12" />
      </filter>
      <linearGradient id="bldg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8f9fa" />
        <stop offset="100%" stopColor="#e8eaed" />
      </linearGradient>
      <pattern id="grid-pattern" width="40" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 10 L20 0 L40 10 L20 20 Z" fill="none" stroke="#e8eaed" strokeWidth="1" />
      </pattern>
    </defs>

    {/* Scene Container */}
    <g transform="translate(400, 100)">

      {/* Background City Floor */}
      <path d="M0 250 L-400 50 L0 -150 L400 50 Z" fill="url(#grid-pattern)" opacity="0.6" />

      {/* Main Commercial Building (Isometric High-rise Section) */}
      <g transform="translate(0, 50)" filter="url(#comm-iso-shadow)">
        {/* Base */}
        <path d="M0 200 L-140 130 L-140 -120 L0 -50 Z" fill="#d1d3d4" />
        <path d="M0 200 L140 130 L140 -120 L0 -50 Z" fill="#bdc1c6" />
        <path d="M0 -50 L-140 -120 L0 -190 L140 -120 Z" fill="#fff" />

        {/* Glass Facade - Left */}
        <g opacity="0.9">
          <path d="M-130 120 L-10 180 L-10 -70 L-130 -130 Z" fill="#e8f0fe" />
          <path d="M-130 60 L-10 120 M-130 0 L-10 60 M-130 -60 L-10 0" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M-90 140 L-90 -110 M-50 160 L-50 -90" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
        </g>

        {/* Glass Facade - Right */}
        <g opacity="0.8">
          <path d="M130 120 L10 180 L10 -70 L130 -130 Z" fill="#d2e3fc" />
          <path d="M130 60 L10 120 M130 0 L10 60 M130 -60 L10 0" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
        </g>
      </g>

      {/* Operations Cluster (Satellite Buildings) */}
      <g transform="translate(-200, 180)">
        <path d="M0 40 L-60 10 L-60 -40 L0 -10 Z" fill="#9aa0a6" />
        <path d="M0 40 L60 10 L60 -40 L0 -10 Z" fill="#7f868b" />
        <path d="M0 -10 L-60 -40 L0 -70 L60 -40 Z" fill="#f1f3f4" />
        {/* Active Zone Highlight */}
        <path d="M0 -40 L-30 -55 L0 -70 L30 -55 Z" fill="#34a853" opacity="0.8" />
      </g>

      {/* Fleet Trucks (Depot) */}
      <g transform="translate(220, 200)">
        {/* Truck 1 */}
        <g transform="translate(0, 0)">
          <path d="M0 10 L20 0 L20 -15 L0 -5 Z" fill="#fff" />
          <path d="M0 10 L-15 2.5 L-15 -12.5 L0 -5 Z" fill="#e8eaed" />
          <circle cx="0" cy="-10" r="2" fill="#ea4335">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </circle>
        </g>
        {/* Truck 2 */}
        <g transform="translate(40, 20)">
          <path d="M0 10 L20 0 L20 -15 L0 -5 Z" fill="#fff" />
          <path d="M0 10 L-15 2.5 L-15 -12.5 L0 -5 Z" fill="#e8eaed" />
        </g>
      </g>

      {/* Data Connectors (Lines) */}
      <g opacity="0.6">
        <path d="M-140 130 L-200 150" stroke="#1a73e8" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="-200" cy="150" r="3" fill="#1a73e8" />

        <path d="M140 130 L220 180" stroke="#1a73e8" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="220" cy="180" r="3" fill="#1a73e8" />
      </g>

      {/* Floating HUD - Active Monitor */}
      <g transform="translate(260, 0)" filter="url(#comm-iso-shadow)">
        <path d="M-70 35 L0 70 L70 35 L0 0 Z" fill="#1e293b" />
        <path d="M0 70 L70 35 L70 45 L0 80 Z" fill="#0f172a" />
        <path d="M-70 35 L0 70 L0 80 L-70 45 Z" fill="#334155" />

        {/* Screen Content */}
        <path d="M-60 35 L0 65 L60 35 L0 5 Z" fill="#0f172a" />
        <text x="-20" y="45" fontSize="10" fill="#22c55e" transform="rotate(-26.5) skewX(26.5)">MONITORING</text>
        <text x="-15" y="55" fontSize="8" fill="#94a3b8" transform="rotate(-26.5) skewX(26.5)">ZONE A-4 SECURE</text>
      </g>

    </g>
  </svg>
);

export default CommercialHeroAnimation;