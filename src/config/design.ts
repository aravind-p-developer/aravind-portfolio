/**
 * Design system tokens - "Engineered Precision"
 * Inspiration: Vercel & Linear
 * Theme: Modern Minimalist Enterprise with Glassmorphism
 */

export const colors = {
  // Surface & Background
  background: '#131313',
  surface: '#131313',
  'surface-dim': '#131313',
  'surface-bright': '#3a3939',
  'surface-container-lowest': '#0e0e0e',
  'surface-container-low': '#1c1b1b',
  'surface-container': '#201f1f',
  'surface-container-high': '#2a2a2a',
  'surface-container-highest': '#353534',
  'surface-variant': '#353534',
  'surface-tint': '#adc6ff',

  // On Surface
  'on-surface': '#e5e2e1',
  'on-surface-variant': '#c2c6d6',
  'on-background': '#e5e2e1',

  // Primary
  primary: '#adc6ff',
  'on-primary': '#002e6a',
  'primary-container': '#4d8eff',
  'on-primary-container': '#00285d',
  'inverse-primary': '#005ac2',
  'primary-fixed': '#d8e2ff',
  'primary-fixed-dim': '#adc6ff',
  'on-primary-fixed': '#001a42',
  'on-primary-fixed-variant': '#004395',

  // Secondary
  secondary: '#a4c9ff',
  'on-secondary': '#00315d',
  'secondary-container': '#0267b8',
  'on-secondary-container': '#d6e5ff',
  'secondary-fixed': '#d4e3ff',
  'secondary-fixed-dim': '#a4c9ff',
  'on-secondary-fixed': '#001c39',
  'on-secondary-fixed-variant': '#004883',

  // Tertiary
  tertiary: '#b7c4ff',
  'on-tertiary': '#002682',
  'tertiary-container': '#6989ff',
  'on-tertiary-container': '#002072',
  'tertiary-fixed': '#dce1ff',
  'tertiary-fixed-dim': '#b7c4ff',
  'on-tertiary-fixed': '#001551',
  'on-tertiary-fixed-variant': '#0039b5',

  // Error
  error: '#ffb4ab',
  'on-error': '#690005',
  'error-container': '#93000a',
  'on-error-container': '#ffdad6',

  // Outline
  outline: '#8c909f',
  'outline-variant': '#424754',

  // Inverse
  'inverse-surface': '#e5e2e1',
  'inverse-on-surface': '#313030',

  // Brand Custom
  'brand-blue': '#3B82F6',
  'brand-dark': '#0A0A0A',
  'brand-card': 'rgba(17, 17, 17, 0.8)',
  'brand-border': 'rgba(255, 255, 255, 0.08)',
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
