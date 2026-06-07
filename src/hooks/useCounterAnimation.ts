/**
 * useCounterAnimation - Animate counter from 0 to target value
 */
import { useState, useEffect, useRef } from 'react';
import { easings } from '../utils';

interface UseCounterAnimationOptions {
  targetValue: number;
  duration?: number;
  triggerOnScroll?: boolean;
}

export function useCounterAnimation({
  targetValue,
  duration = 2500,
  triggerOnScroll = true,
}: UseCounterAnimationOptions) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(!triggerOnScroll);
  const hasTriggered = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Handle scroll trigger
  useEffect(() => {
    if (!triggerOnScroll) return;
    if (hasTriggered.current) return;

    if (!elementRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setCurrentValue(targetValue);
      hasTriggered.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            setIsAnimating(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnScroll, targetValue]);

  // Handle animation
  useEffect(() => {
    if (!isAnimating) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Use easeOutCubic easing
      const easeProgress = easings.easeOutCubic(progress);
      const newValue = Math.floor(easeProgress * targetValue);

      setCurrentValue(newValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setCurrentValue(targetValue);
        setIsAnimating(false);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAnimating, duration, targetValue]);

  return { currentValue, elementRef };
}
