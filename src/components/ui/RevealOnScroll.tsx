/**
 * RevealOnScroll component - Framer Motion wrapper for scroll animations
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
}: RevealOnScrollProps) {
  const { elementRef, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 40 }}
      animate={hasBeenVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // cubic-bezier(0.16, 1, 0.3, 1)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
