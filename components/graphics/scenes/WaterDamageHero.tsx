
import React from 'react';
import { motion } from 'framer-motion';
import { materialTheme } from '../materialTheme';

const WaterDamageHero: React.FC = () => {
    const { primary, neutral } = materialTheme;

    // Floating animation for "blobs"
    const floatAnim = {
        y: [0, -15, 0],
        scale: [1, 1.05, 1],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative w-full h-[300px] md:h-[400px] bg-white rounded-3xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center">
            {/* Background Mesh Gradient (Static for performance, could be animated) */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(circle at 20% 20%, ${primary[90]} 0%, transparent 40%), radial-gradient(circle at 80% 80%, ${primary[95]} 0%, transparent 40%)`
                }}
            />

            <svg
                viewBox="0 0 400 300"
                className="w-full h-full max-w-[500px]"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Defines for gradients/masks */}
                <defs>
                    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={primary[80]} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={primary[90]} stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glassBlur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                    </filter>
                </defs>

                {/* Abstract Floor Layers (Surface Container) */}
                <rect x="50" y="220" width="300" height="10" rx="5" fill={neutral[92]} />
                <rect x="70" y="235" width="260" height="6" rx="3" fill={neutral[96]} />

                {/* Animated Water Blobs (The "Damage") */}
                <motion.path
                    d="M100 220 Q150 180 200 220 T300 220"
                    fill="none"
                    stroke={primary[80]}
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Group 1: The Water Puddle (Organic Shape) */}
                <motion.path
                    d="M80,220 C80,220 120,190 200,190 C280,190 320,220 320,220 Z"
                    fill="url(#waterGrad)"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: materialTheme.easing.decelerated }}
                    style={{ transformOrigin: "bottom" }}
                />

                {/* Group 2: The House/Structure (Abstract) */}
                <motion.g
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Wall */}
                    <rect x="130" y="100" width="140" height="120" rx="12" fill="white" stroke={neutral[92]} strokeWidth="2" />
                    {/* Window */}
                    <rect x="150" y="130" width="40" height="40" rx="8" fill={primary[95]} />
                    {/* Door */}
                    <rect x="210" y="150" width="40" height="70" rx="4" fill={neutral[94]} />
                </motion.g>

                {/* Floating Droplets (The "Problem" in motion) */}
                <motion.circle
                    cx="160" cy="190" r="8"
                    fill={primary[40]}
                    animate={floatAnim}
                />
                <motion.circle
                    cx="240" cy="200" r="12"
                    fill={primary[80]}
                    animate={{ ...floatAnim, transition: { ...floatAnim.transition, delay: 1 } }}
                />

                {/* Shield / Protection Overlay (The "Solution") */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
                >
                    <circle cx="280" cy="110" r="30" fill={primary[40]} />
                    <path d="M280 95 L280 125 M265 110 L295 110" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                    <path
                        d="M270 110 L278 118 L292 102"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.g>

            </svg>
        </div>
    );
};

export default WaterDamageHero;
