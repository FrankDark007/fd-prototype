import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  icon?: boolean; // For icon-only circular buttons
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  fullWidth = false,
  type = 'button',
  ariaLabel,
  icon = false,
}) => {
  // Base: Pill shape (rounded-full), font-weight 500, font-size 14px
  const baseStyles = "inline-flex items-center justify-center font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25";
  
  // Dimensions
  // Normal: Height 40-44px (using h-11 = 44px).
  // Icon: 44x44px square-ish but rounded full.
  const dimensionStyles = icon 
    ? "h-11 w-11 p-0 rounded-full" 
    : "h-11 px-6 rounded-full";

  const variants = {
    // Primary: Google Blue #1a73e8, white text, subtle shadow
    primary: "bg-primary text-white hover:bg-primaryHover shadow-sm hover:shadow-md active:shadow-sm border border-transparent",
    
    // Secondary: White bg, border #e5e7eb, text #1a73e8, hover #f8fafc
    secondary: "bg-white text-primary border border-border hover:bg-subtle active:bg-gray-100",
    
    // Outline: (Mapping to secondary for this design system request, or keeping distinct if needed. 
    // The prompt asks for secondary to be white bg + border. I will map outline to secondary or create a similar one)
    outline: "bg-white text-primary border border-gray-300 hover:bg-gray-50",
    
    // Ghost: No border, for icons in header
    ghost: "bg-transparent text-gray-600 hover:bg-gray-50 active:bg-gray-100",
    
    // Text: minimal padding
    text: "bg-transparent text-primary hover:text-primaryHover hover:bg-blue-50/50 px-4",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${dimensionStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;