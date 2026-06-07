/**
 * Design system tokens - "Engineered Precision"
 * Inspiration: Vercel & Linear
 * Theme: Modern Minimalist Enterprise with Glassmorphism
 */

export const colors = {
  // Surface & Background
  background: 'var(--background)',
  surface: 'var(--surface)',
  'surface-dim': 'var(--surface-dim)',
  'surface-bright': 'var(--surface-bright)',
  'surface-container-lowest': 'var(--surface-container-lowest)',
  'surface-container-low': 'var(--surface-container-low)',
  'surface-container': 'var(--surface-container)',
  'surface-container-high': 'var(--surface-container-high)',
  'surface-container-highest': 'var(--surface-container-highest)',
  'surface-variant': 'var(--surface-variant)',
  'surface-tint': 'var(--surface-tint)',

  // On Surface
  'on-surface': 'var(--on-surface)',
  'on-surface-variant': 'var(--on-surface-variant)',
  'on-background': 'var(--on-background)',

  // Primary
  primary: 'var(--primary)',
  'on-primary': 'var(--on-primary)',
  'primary-container': 'var(--primary-container)',
  'on-primary-container': 'var(--on-primary-container)',
  'inverse-primary': 'var(--inverse-primary)',
  'primary-fixed': 'var(--primary-fixed)',
  'primary-fixed-dim': 'var(--primary-fixed-dim)',
  'on-primary-fixed': 'var(--on-primary-fixed)',
  'on-primary-fixed-variant': 'var(--on-primary-fixed-variant)',

  // Secondary
  secondary: 'var(--secondary)',
  'on-secondary': 'var(--on-secondary)',
  'secondary-container': 'var(--secondary-container)',
  'on-secondary-container': 'var(--on-secondary-container)',
  'secondary-fixed': 'var(--secondary-fixed)',
  'secondary-fixed-dim': 'var(--secondary-fixed-dim)',
  'on-secondary-fixed': 'var(--on-secondary-fixed)',
  'on-secondary-fixed-variant': 'var(--on-secondary-fixed-variant)',

  // Tertiary
  tertiary: 'var(--tertiary)',
  'on-tertiary': 'var(--on-tertiary)',
  'tertiary-container': 'var(--tertiary-container)',
  'on-tertiary-container': 'var(--on-tertiary-container)',
  'tertiary-fixed': 'var(--tertiary-fixed)',
  'tertiary-fixed-dim': 'var(--tertiary-fixed-dim)',
  'on-tertiary-fixed': 'var(--on-tertiary-fixed)',
  'on-tertiary-fixed-variant': 'var(--on-tertiary-fixed-variant)',

  // Error
  error: 'var(--error)',
  'on-error': 'var(--on-error)',
  'error-container': 'var(--error-container)',
  'on-error-container': 'var(--on-error-container)',

  // Outline
  outline: 'var(--outline)',
  'outline-variant': 'var(--outline-variant)',

  // Inverse
  'inverse-surface': 'var(--inverse-surface)',
  'inverse-on-surface': 'var(--inverse-on-surface)',

  // Brand Custom
  'brand-blue': 'var(--brand-blue)',
  'brand-dark': 'var(--brand-dark)',
  'brand-card': 'var(--brand-card)',
  'brand-border': 'var(--brand-border)',
};

export const typography = {
  'display-lg': {
    fontFamily: 'Geist',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.04em',
  },
  'headline-lg': {
    fontFamily: 'Geist',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '1.2',
    letterSpacing: '-0.03em',
  },
  'headline-md': {
    fontFamily: 'Geist',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.3',
    letterSpacing: '-0.02em',
  },
  'body-lg': {
    fontFamily: 'Geist',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '1.6',
    letterSpacing: '-0.01em',
  },
  'body-md': {
    fontFamily: 'Geist',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '-0.01em',
  },
  'label-md': {
    fontFamily: 'JetBrains Mono',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '0.02em',
  },
  'label-sm': {
    fontFamily: 'JetBrains Mono',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '0.05em',
  },
  'headline-lg-mobile': {
    fontFamily: 'Geist',
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },
};

export const spacing = {
  unit: '4px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '48px',
  'container-max': '1200px',
  gutter: '24px',
};

export const borderRadius = {
  DEFAULT: '0.125rem',
  sm: '0.125rem',
  lg: '0.25rem',
  xl: '0.5rem',
  full: '0.75rem',
};

export const shadows = {
  'glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 20px 40px rgba(0,0,0,0.4)',
  'glass-hover': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0,0,0,0.4), 0 0 15px rgba(59, 130, 246, 0.1)',
  'glow': '0 0 15px rgba(59, 130, 246, 0.2)',
  'glow-lg': '0 0 25px rgba(59, 130, 246, 0.3)',
};

export const animations = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.6, 1)',
    sharp: 'cubic-bezier(0.16, 1, 0.3, 1)',
    ease: 'ease-in-out',
  },
};

export const glassmorphism = {
  light: {
    background: 'rgba(17, 17, 17, 0.8)',
    backdropBlur: '12px',
    border: 'rgba(255, 255, 255, 0.08)',
  },
  medium: {
    background: 'rgba(17, 17, 17, 0.6)',
    backdropBlur: '16px',
    border: 'rgba(255, 255, 255, 0.05)',
  },
};

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  'modal-backdrop': 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
};
