/**
 * useTimelineAnimation - Animate timeline fill on scroll
 */
import { useEffect, useRef, useState } from 'react';
import { throttle } from '../utils';

export function useTimelineAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const handleScroll = throttle(() => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight / 2 && rect.bottom > 0) {
        const scrolled = Math.max(0, windowHeight / 2 - rect.top);
        const total = rect.height;
        const progress = Math.min(100, (scrolled / total) * 100);
        setFillPercentage(progress);
      } else if (rect.top >= windowHeight / 2) {
        setFillPercentage(0);
      }
    }, 16);

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { containerRef, fillPercentage };
}
