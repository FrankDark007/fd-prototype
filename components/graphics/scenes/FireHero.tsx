
import React from 'react';
import { motion } from 'framer-motion';
import { materialTheme } from '../materialTheme';

const FireHero: React.FC = () => {
    const { tertiary, neutral } = materialTheme;

    return (
        <div className="relative w-full h-[300px] md:h-[400px] bg-white rounded-3xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `conic-gradient(from 180deg at 50% 100%, ${tertiary[90]} 0deg, white 60deg, white 300deg, ${tertiary[95]} 360deg)`
                }}
            />

            <svg viewBox="0 0 400 300" className="w-full h-full max-w-[500px]">
                <defs>
                    <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor={tertiary[40]} />
                        <stop offset="100%" stopColor={tertiary[80]} />
                    </linearGradient>
                </defs>

                {/* Charred/Damaged Structure (Background) */}
                <path d="M100 240 L100 140 L200 80 L300 140 L300 240 Z" fill={neutral[94]} stroke={neutral[92]} strokeWidth="2" />
                <rect x="180" y="180" width="40" height="60" fill={neutral[92]} />

                {/* Flame Shapes (Animated) */}
                <motion.path
                    d="M180 240 Q200 100 220 240 Z"
                    fill="url(#flameGrad)"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: [1, 1.2, 1], opacity: 0.8 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "bottom center" }}
                />
                <motion.path
                    d="M160 240 Q180 160 200 240 Z"
                    fill={tertiary[80]}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0.8, 1.1, 0.9] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                    style={{ transformOrigin: "bottom center" }}
                />

                {/* Restoration/Cleaning Tool (The "Cure") */}
                <motion.g
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <rect x="240" y="140" width="60" height="100" rx="4" fill="white" stroke={neutral[10]} strokeWidth="2" />
                    <circle cx="270" cy="170" r="15" fill={tertiary[95]} />
                    {/* Air flow lines */}
                    <motion.path
                        d="M250 200 L290 200"
                        stroke={tertiary[40]}
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                </motion.g>

            </svg>
        </div>
    );
};

export default FireHero;
