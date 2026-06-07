/**
 * Type definitions for the portfolio application
 */

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TechStack {
  id: string;
  name: string;
  category?: string;
}

export interface MetricCard {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

export interface ScrollRevealConfig extends AnimationConfig {
  threshold?: number;
  rootMargin?: string;
}

export interface CounterAnimationConfig extends AnimationConfig {
  duration: number;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}
