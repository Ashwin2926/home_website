// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      // Added subtle scale and shadow on hover for primary button
      variantStyles = 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg h-10 px-4 py-2';
      break;
    case 'outline':
      // Added subtle scale and background change on hover for outline button
      variantStyles = 'border border-input bg-background hover:bg-blue-100 hover:text-blue-700 hover:scale-[1.02] h-10 px-4 py-2';
      break;
    case 'ghost':
      variantStyles = 'hover:bg-gray-100 hover:text-gray-900 h-10 px-4 py-2';
      break;
    default:
      variantStyles = 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg h-10 px-4 py-2';
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
