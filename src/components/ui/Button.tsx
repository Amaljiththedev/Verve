// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost'|'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ children, onClick, variant = 'primary', size = 'md' }: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded';
  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
    ghost: 'bg-transparent text-gray-700',
  };
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
    
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </button>
  );
};

export default Button;
