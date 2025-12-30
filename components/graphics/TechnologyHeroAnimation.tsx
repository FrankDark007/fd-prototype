import React from 'react';

const TechnologyHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Restoration Technology" className="w-full h-auto">
    <defs>
      <filter id="tech-iso-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.2" />
      </filter>
      <linearGradient id="server-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3c4043" />
        <stop offset="100%" stopColor="#202124" />
      </linearGradient>
      <pattern id="circuit-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="40" height="40" fill="#1a1a1a" />
        <path d="M20 0 V40 M0 20 H40" stroke="#333" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="1" fill="#444" />
      </pattern>
    </defs>

    {/* Scene Container - Dark Theme for Tech */}
    <g transform="translate(400, 100)">

      {/* Background/Base Platform */}
      <path d="M0 200 L-300 50 L0 -100 L300 50 Z" fill="url(#circuit-pattern)" opacity="0.8" />
      <path d="M0 200 L300 50 L300 60 L0 210 Z" fill="#1a1a1a" />
      <path d="M0 210 L-300 60 L-300 50 L0 200 Z" fill="#000" />

      {/* Server Rack / Sensor Array */}
      <g transform="translate(-80, 50)" filter="url(#tech-iso-shadow)">
        <path d="M0 100 L-60 70 L-60 -100 L0 -70 Z" fill="#3c4043" /> {/* Left Side */}
        <path d="M0 100 L60 70 L60 -100 L0 -70 Z" fill="#202124" />   {/* Right Side */}
        <path d="M0 -70 L-60 -100 L0 -130 L60 -100 Z" fill="#5f6368" /> {/* Top */}

        {/* Server Units / Blinking Lights */}
        <g opacity="0.9">
          <path d="M50 0 L10 20 L10 10 L50 -10 Z" fill="#00bcd4" />
          <path d="M50 -30 L10 -10 L10 -20 L50 -40 Z" fill="#00bcd4" opacity="0.5" />
          <path d="M50 -60 L10 -40 L10 -50 L50 -70 Z" fill="#00bcd4" />
        </g>
      </g>

      {/* Floating Data Layers */}
      <g transform="translate(100, 0)">
        {/* Layer 1 - Bottom */}
        <g transform="translate(0, 80)">
          <path d="M0 30 L-80 -10 L0 -50 L80 -10 Z" fill="rgba(66, 133, 244, 0.2)" stroke="#4285f4" strokeWidth="1" />
          <circle cx="0" cy="-10" r="4" fill="#4285f4" opacity="0.5" />
        </g>
        {/* Layer 2 - Middle */}
        <g transform="translate(0, 40)">
          <path d="M0 30 L-80 -10 L0 -50 L80 -10 Z" fill="rgba(52, 168, 83, 0.2)" stroke="#34a853" strokeWidth="1" />
          <circle cx="0" cy="-10" r="4" fill="#34a853" opacity="0.5" />
        </g>
        {/* Layer 3 - Top */}
        <g transform="translate(0, 0)">
          <path d="M0 30 L-80 -10 L0 -50 L80 -10 Z" fill="rgba(234, 67, 53, 0.2)" stroke="#ea4335" strokeWidth="1" />
          <circle cx="0" cy="-10" r="4" fill="#ea4335">
            <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>

      {/* Connecting Beams */}
      <path d="M-80 -20 L100 0" stroke="url(#beam-grad)" strokeWidth="2" strokeDasharray="4,4" opacity="0.5">
        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
      </path>

      <defs>
        <linearGradient id="beam-grad">
          <stop offset="0%" stopColor="#00bcd4" />
          <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
      </defs>

    </g>
  </svg>
);

export default TechnologyHeroAnimation;