/**
 * Card component — glassmorphic card with optional gradient border
 */
import React from 'react';
import { cn } from '../../utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'medium';
  gradient?: boolean;
}

export function Card({
  children,
  className,
  variant = 'default',
  gradient = false,
  ...props
}: CardProps) {
  const innerClass = cn(
    variant === 'medium' ? 'glass-card-medium' : 'glass-card',
    'rounded-xl p-lg h-full',
    className
  );

  if (gradient) {
    return (
      <div className="gradient-border h-full" {...props}>
        <div className={cn(innerClass, 'gradient-border-inner')}>{children}</div>
      </div>
    );
  }

  return (
    <div className={cn(innerClass, 'transition-all duration-300')} {...props}>
      {children}
    </div>
  );
}
