import React from 'react';

const ResidentialHeroAnimation = () => (
   <svg viewBox="0 0 800 400" role="img" aria-label="Residential Restoration Scanning" className="w-full h-auto">
      <defs>
         <filter id="scan-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.1" />
         </filter>

         {/* Gradients */}
         <linearGradient id="wet-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1a73e8" stopOpacity="0.3" />
         </linearGradient>

         <linearGradient id="clean-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8f9fa" />
         </linearGradient>

         {/* Dynamic Scan Mask */}
         <mask id="scan-mask">
            <rect x="-400" y="-400" width="800" height="800" fill="white" transform="translate(-400, 0)">
               <animateTransform attributeName="transform" type="translate" from="-400 0" to="400 0" dur="4s" repeatCount="indefinite" />
            </rect>
         </mask>

         {/* Inverse Mask for Wireframe */}
         <mask id="wire-mask">
            <rect x="-400" y="-400" width="800" height="800" fill="white" />
            <rect x="-400" y="-400" width="800" height="800" fill="black" transform="translate(-400, 0)">
               <animateTransform attributeName="transform" type="translate" from="-400 0" to="400 0" dur="4s" repeatCount="indefinite" />
            </rect>
         </mask>

      </defs>

      {/* Scene Container */}
      <g transform="translate(400, 300)">

         {/* 1. Tech Platform Base */}
         <path d="M0 50 L-300 -50 L0 -150 L300 -50 Z" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1" />
         <path d="M0 50 L300 -50 L300 -40 L0 60 Z" fill="#e8eaed" />
         <path d="M0 60 L-300 -40 L-300 -50 L0 50 Z" fill="#d1d3d4" />

         {/* Grid on Platform */}
         <g opacity="0.1">
            <path d="M-150 0 L150 -100 M0 -150 L0 50" stroke="#1a73e8" strokeWidth="2" />
            <circle cx="0" cy="-50" r="100" fill="none" stroke="#1a73e8" strokeWidth="2" transform="scale(1, 0.5)" />
         </g>

         {/* 2. The House Structure (Group for Isometric Projection) */}
         <g transform="translate(0, -30)">

            {/* Layer A: Wireframe / "Wet" State (Visible when NOT masked by scan) */}
            <g mask="url(#wire-mask)">
               {/* Walls */}
               <path d="M0 0 L-180 -90 L-180 -230 L0 -140 Z" fill="url(#wet-grad)" stroke="#1a73e8" strokeWidth="1" strokeDasharray="4,4" />
               <path d="M0 0 L180 -90 L180 -230 L0 -140 Z" fill="url(#wet-grad)" stroke="#1a73e8" strokeWidth="1" strokeDasharray="4,4" />
               {/* Roof */}
               <path d="M0 -320 L-200 -220 L-200 -200 L0 -300 Z" fill="none" stroke="#1a73e8" strokeWidth="1" />
               <path d="M0 -320 L200 -220 L200 -200 L0 -300 Z" fill="none" stroke="#1a73e8" strokeWidth="1" />
            </g>

            {/* Layer B: Solid / "Clean" State (Revealed by scan) */}
            <g mask="url(#scan-mask)">
               {/* Walls */}
               <path d="M0 0 L-180 -90 L-180 -230 L0 -140 Z" fill="#fff" />
               <path d="M0 0 L180 -90 L180 -230 L0 -140 Z" fill="#f1f3f4" />
               {/* Roof */}
               <path d="M0 -320 L-200 -220 L0 -140 L200 -220 Z" fill="#e8eaed" />
               <path d="M0 -320 L-200 -220 L-200 -100 L0 -200 Z" fill="#d1d3d4" opacity="0.2" /> {/* Gable shadow */}

               {/* Windows/Door Details */}
               <path d="M-90 -160 L-50 -140 L-50 -100 L-90 -120 Z" fill="#34a853" opacity="0.2" />
               <path d="M-90 -160 L-50 -140 L-50 -100 L-90 -120 Z" fill="none" stroke="#34a853" strokeWidth="2" />
            </g>

            {/* EQUIPMENT LAYER (Always Visible / "Clean" aesthetic) */}

            {/* LGR Dehumidifier (Isometric Box) */}
            <g transform="translate(-80, -90)" filter="url(#scan-shadow)">
               {/* Body */}
               <path d="M0 40 L-25 25 L-25 -25 L0 -10 Z" fill="#1e3a8a" /> {/* Left Dark Blue */}
               <path d="M0 40 L25 25 L25 -25 L0 -10 Z" fill="#2563eb" /> {/* Right Blue */}
               <path d="M0 -10 L-25 -25 L0 -40 L25 -25 Z" fill="#60a5fa" /> {/* Top Light Blue */}
               {/* Handle */}
               <path d="M-10 -30 L0 -36 L10 -30" fill="none" stroke="#d1d5db" strokeWidth="2" />
               {/* Wheels */}
               <circle cx="-15" cy="35" r="4" fill="#1f2937" />
            </g>

            {/* Axial Air Mover 1 (Snail Shell Shape) */}
            <g transform="translate(60, -80)" filter="url(#scan-shadow)">
               {/* Shell Body */}
               <path d="M0 10 C 20 20, 30 0, 10 -10 L0 -15 L-20 -5 L-20 15 Z" fill="#15803d" />
               <path d="M-20 15 L0 25 L0 10 L-20 5 Z" fill="#166534" /> {/* Side/Base */}
               {/* Intake Grill */}
               <circle cx="5" cy="0" r="8" fill="#14532d" />
               <circle cx="5" cy="0" r="8" fill="none" stroke="#4ade80" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Axial Air Mover 2 */}
            <g transform="translate(-40, -50)" filter="url(#scan-shadow)">
               <path d="M0 10 C 20 20, 30 0, 10 -10 L0 -15 L-20 -5 L-20 15 Z" fill="#15803d" />
               <path d="M-20 15 L0 25 L0 10 L-20 5 Z" fill="#166534" />
               <circle cx="5" cy="0" r="8" fill="#14532d" />
               <circle cx="5" cy="0" r="8" fill="none" stroke="#4ade80" strokeWidth="1" strokeDasharray="2,2" />
            </g>


            {/* 3. The Scanning Beam Effect (Overlay) */}
            <g transform="translate(-400, 0)">
               <animateTransform attributeName="transform" type="translate" from="-400 0" to="400 0" dur="4s" repeatCount="indefinite" />

               {/* Beam Plane */}
               <path d="M0 100 L0 -350" stroke="url(#beam-gradient)" strokeWidth="4" filter="url(#scan-shadow)" />
               <linearGradient id="beam-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34a853" stopOpacity="0" />
                  <stop offset="50%" stopColor="#34a853" stopOpacity="1" />
                  <stop offset="100%" stopColor="#34a853" stopOpacity="0" />
               </linearGradient>

               {/* Floating Scanner Head */}
               <circle cx="0" cy="-350" r="6" fill="#34a853">
                  <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" />
               </circle>
            </g>

         </g>

         {/* 4. Floating HUD Stats */}
         <g transform="translate(180, -280)" filter="url(#scan-shadow)">
            <rect width="140" height="70" rx="12" fill="white" fillOpacity="0.9" />

            <circle cx="20" cy="25" r="5" fill="#34a853">
               <animate attributeName="fill" values="#e8eaed;#34a853;#34a853" dur="4s" repeatCount="indefinite" />
            </circle>
            <text x="35" y="28" fontSize="10" fontWeight="bold" fill="#5f6368" fontFamily="system-ui">EQUIPMENT ACTIVE</text>

            <rect x="20" y="45" width="100" height="6" rx="3" fill="#f1f3f4" />
            <rect x="20" y="45" width="0" height="6" rx="3" fill="#34a853">
               <animate attributeName="width" values="0;100;100" dur="4s" repeatCount="indefinite" />
            </rect>

            <text x="70" y="62" fontSize="9" textAnchor="middle" fill="#15803d" fontFamily="system-ui">3 Units Deployed</text>
         </g>

         <g transform="translate(-300, -220)" filter="url(#scan-shadow)">
            <rect width="120" height="40" rx="20" fill="white" fillOpacity="0.9" />
            <text x="60" y="25" textAnchor="middle" fontSize="10" fill="#1e3a8a" fontFamily="system-ui" fontWeight="bold">LGR DEHUMIDIFIER</text>
         </g>

      </g>
   </svg>
);

export default ResidentialHeroAnimation;