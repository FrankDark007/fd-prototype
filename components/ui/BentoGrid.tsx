
import React from 'react';
import { motion } from 'framer-motion';

export const BentoGrid: React.FC<{
    className?: string;
    children: React.ReactNode;
}> = ({ className, children }) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 ${className || ''}`}
        >
            {children}
        </div>
    );
};

export const BentoGridItem: React.FC<{
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    index?: number;
}> = ({ className, title, description, header, icon, onClick, index = 0 }) => {

    // Stagger animation based on index
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`
        row-span-1 
        rounded-3xl 
        group/bento 
        hover:shadow-google-hover 
        transition-all duration-300 
        shadow-sm 
        bg-[#f8f9fa] 
        border border-gray-100 
        flex flex-col 
        justify-between 
        space-y-4 
        p-8
        cursor-default
        ${className || ''}
      `}
            onClick={onClick}
        >
            {/* Visual Header (Image/Animation) */}
            {header && (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 items-center justify-center overflow-hidden">
                    {header}
                </div>
            )}

            {/* Content */}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="mb-4 text-gray-600 bg-white p-3 rounded-2xl w-fit shadow-sm border border-gray-100">
                    {icon}
                </div>
                <div className="font-sans font-medium text-gray-900 text-xl mb-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-gray-500 text-base leading-relaxed">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
