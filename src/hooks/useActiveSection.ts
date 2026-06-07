/**
 * useActiveSection - Track active section during scroll
 */
import { useEffect, useState } from 'react';
import { throttle } from '../utils';

interface UseActiveSectionOptions {
  sectionIds: string[];
  threshold?: number;
}

export function useActiveSection({
  sectionIds,
  threshold = 0.3,
}: UseActiveSectionOptions) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const handleScroll = throttle(() => {
      let currentActive: string | null = null;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * threshold && rect.bottom >= 0) {
          currentActive = sectionId;
        }
      }

      setActiveSection(currentActive);
    }, 100);

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
