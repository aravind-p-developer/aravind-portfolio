/**
 * Badge component
 */
import React from 'react';
import { cn } from '../../utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'active';
}

export function Badge({
  children,
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-white/5 border-white/10 text-on-surface-variant',
    active:
      'bg-white/5 border-white/10 text-brand-blue hover:bg-white/10 uppercase tracking-widest',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-label-sm text-label-sm border transition-colors cursor-default w-fit',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
