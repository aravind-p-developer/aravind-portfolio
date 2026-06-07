import type { Config } from 'tailwindcss';
import { colors, spacing, borderRadius } from './src/config/design';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Surface & Background
        background: colors.background,
        surface: colors.surface,
        'surface-dim': colors['surface-dim'],
        'surface-bright': colors['surface-bright'],
        'surface-container-lowest': colors['surface-container-lowest'],
        'surface-container-low': colors['surface-container-low'],
        'surface-container': colors['surface-container'],
        'surface-container-high': colors['surface-container-high'],
        'surface-container-highest': colors['surface-container-highest'],
        'surface-variant': colors['surface-variant'],
        'surface-tint': colors['surface-tint'],

        // On Surface
        'on-surface': colors['on-surface'],
        'on-surface-variant': colors['on-surface-variant'],
        'on-background': colors['on-background'],

        // Primary
        primary: colors.primary,
        'on-primary': colors['on-primary'],
        'primary-container': colors['primary-container'],
        'on-primary-container': colors['on-primary-container'],
        'inverse-primary': colors['inverse-primary'],
        'primary-fixed': colors['primary-fixed'],
        'primary-fixed-dim': colors['primary-fixed-dim'],
        'on-primary-fixed': colors['on-primary-fixed'],
        'on-primary-fixed-variant': colors['on-primary-fixed-variant'],

        // Secondary
        secondary: colors.secondary,
        'on-secondary': colors['on-secondary'],
        'secondary-container': colors['secondary-container'],
        'on-secondary-container': colors['on-secondary-container'],
        'secondary-fixed': colors['secondary-fixed'],
        'secondary-fixed-dim': colors['secondary-fixed-dim'],
        'on-secondary-fixed': colors['on-secondary-fixed'],
        'on-secondary-fixed-variant': colors['on-secondary-fixed-variant'],

        // Tertiary
        tertiary: colors.tertiary,
        'on-tertiary': colors['on-tertiary'],
        'tertiary-container': colors['tertiary-container'],
        'on-tertiary-container': colors['on-tertiary-container'],
        'tertiary-fixed': colors['tertiary-fixed'],
        'tertiary-fixed-dim': colors['tertiary-fixed-dim'],
        'on-tertiary-fixed': colors['on-tertiary-fixed'],
        'on-tertiary-fixed-variant': colors['on-tertiary-fixed-variant'],

        // Error
        error: colors.error,
        'on-error': colors['on-error'],
        'error-container': colors['error-container'],
        'on-error-container': colors['on-error-container'],

        // Outline
        outline: colors.outline,
        'outline-variant': colors['outline-variant'],

        // Inverse
        'inverse-surface': colors['inverse-surface'],
        'inverse-on-surface': colors['inverse-on-surface'],

        // Brand Custom
        'brand-blue': colors['brand-blue'],
        'brand-dark': colors['brand-dark'],
        'brand-card': colors['brand-card'],
        'brand-border': colors['brand-border'],
      },
      spacing: {
        unit: spacing.unit,
        xs: spacing.xs,
        sm: spacing.sm,
        md: spacing.md,
        lg: spacing.lg,
        xl: spacing.xl,
        'container-max': spacing['container-max'],
        gutter: spacing.gutter,
      },
      maxWidth: {
        'container-max': spacing['container-max'],
      },
      borderRadius: {
        DEFAULT: borderRadius.DEFAULT,
        sm: borderRadius.sm,
        lg: borderRadius.lg,
        xl: borderRadius.xl,
        full: borderRadius.full,
      },
      fontFamily: {
        'display-lg': ['Geist', 'sans-serif'],
        'headline-lg': ['Geist', 'sans-serif'],
        'headline-md': ['Geist', 'sans-serif'],
        'body-lg': ['Geist', 'sans-serif'],
        'body-md': ['Geist', 'sans-serif'],
        'label-md': ['JetBrains Mono', 'monospace'],
        'label-sm': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': [
          '48px',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.04em',
            fontWeight: '700',
          },
        ],
        'headline-lg': [
          '32px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            fontWeight: '600',
          },
        ],
        'headline-md': [
          '24px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        'body-lg': [
          '18px',
          {
            lineHeight: '1.6',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        'body-md': [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        'label-md': [
          '14px',
          {
            lineHeight: '1.4',
            letterSpacing: '0.02em',
            fontWeight: '500',
          },
        ],
        'label-sm': [
          '12px',
          {
            lineHeight: '1.4',
            letterSpacing: '0.05em',
            fontWeight: '500',
          },
        ],
        'headline-lg-mobile': [
          '28px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
