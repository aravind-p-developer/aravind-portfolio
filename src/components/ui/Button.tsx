/**
 * Button component
 */
import React from 'react';
import { cn } from '../../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-label-md text-label-md rounded-lg transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-brand-blue hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
    secondary:
      'bg-transparent border border-[#333] hover:border-brand-blue/50 hover:bg-brand-blue/5 text-on-surface',
    ghost:
      'bg-transparent text-on-surface-variant hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-md py-sm text-sm',
    md: 'px-lg py-3',
    lg: 'px-xl py-4',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
