
import React from 'react';
import { motion } from 'framer-motion';
import { materialTheme } from '../materialTheme';

const MoldHero: React.FC = () => {
    const { secondary, neutral } = materialTheme;

    return (
        <div className="relative w-full h-[300px] md:h-[400px] bg-white rounded-3xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center">
            {/* Background with Green/Teal hints */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(circle at 80% 10%, ${secondary[90]} 0%, transparent 50%), radial-gradient(circle at 10% 90%, ${secondary[95]} 0%, transparent 50%)`
                }}
            />

            <svg viewBox="0 0 400 300" className="w-full h-full max-w-[500px]">
                <defs>
                    <radialGradient id="sporeGrad">
                        <stop offset="0%" stopColor={secondary[80]} />
                        <stop offset="100%" stopColor={secondary[40]} />
                    </radialGradient>
                </defs>

                {/* The Petri Dish / Inspection Circle */}
                <circle cx="200" cy="150" r="90" fill={neutral[98]} stroke={neutral[92]} strokeWidth="4" />
                <circle cx="200" cy="150" r="85" fill={secondary[98]} opacity="0.5" />

                {/* Animated Spores */}
                {[
                    { cx: 180, cy: 140, r: 8, delay: 0 },
                    { cx: 220, cy: 160, r: 12, delay: 0.5 },
                    { cx: 190, cy: 170, r: 6, delay: 1.2 },
                    { cx: 230, cy: 130, r: 5, delay: 2.0 },
                ].map((spore, i) => (
                    <motion.circle
                        key={i}
                        cx={spore.cx}
                        cy={spore.cy}
                        r={spore.r}
                        fill="url(#sporeGrad)"
                        opacity="0.8"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6],
                            x: [0, Math.random() * 10 - 5, 0],
                            y: [0, Math.random() * 10 - 5, 0]
                        }}
                        transition={{
                            duration: 4,
                            delay: spore.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Magnifying Glass / Inspection Tool */}
                <motion.g
                    initial={{ x: -20, rotate: -10, opacity: 0 }}
                    animate={{ x: 0, rotate: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: materialTheme.easing.emphasized }}
                >
                    {/* Handle */}
                    <rect x="230" y="190" width="80" height="12" rx="6" fill={neutral[10]} transform="rotate(45 230 190)" />
                    {/* Glass Rim */}
                    <circle cx="200" cy="150" r="95" fill="none" stroke={neutral[10]} strokeWidth="6" />
                    {/* Glare */}
                    <path d="M160 110 Q180 130 150 140" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                </motion.g>

                {/* Clean Air Particles (Floating Up) */}
                {[1, 2, 3].map((_, i) => (
                    <motion.circle
                        key={`clean-${i}`}
                        cx={150 + i * 50}
                        cy={260}
                        r={2}
                        fill={secondary[40]}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: -60, opacity: [0, 1, 0] }}
                        transition={{
                            duration: 3,
                            delay: i,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default MoldHero;
