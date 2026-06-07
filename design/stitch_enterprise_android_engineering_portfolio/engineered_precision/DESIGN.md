---
name: Engineered Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#b7c4ff'
  on-tertiary: '#002682'
  tertiary-container: '#6989ff'
  on-tertiary-container: '#002072'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b5'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is engineered for a Senior Android Engineer’s portfolio, projecting an aura of technical mastery, high performance, and production-ready reliability. Drawing inspiration from industry leaders like Vercel and Linear, the aesthetic is rooted in **Modern Minimalist Enterprise** with a heavy emphasis on **Glassmorphism** and precision-crafted details.

The target audience consists of hiring managers and technical directors at top-tier tech companies. The UI should evoke a sense of "zero-latency" efficiency. Visuals are characterized by deep backgrounds, razor-sharp borders, and subtle luminous effects that mimic high-end hardware interfaces.

## Colors
The palette is optimized for high-contrast legibility in a dark environment. The foundation is a deep charcoal (`#0A0A0A`), providing a "true dark" canvas that makes vibrant elements pop.

- **Primary Accent:** Electric Blue (`#3B82F6`) is used sparingly for critical actions and active states to maintain an enterprise feel.
- **Surface Tiers:** Layering is achieved through a sequence of grays. Backgrounds use the base charcoal, while elevated cards use a slightly lighter surface (`#111111`).
- **Semantic Borders:** Borders are critical in this system; they use `#262626` to define structure without adding visual noise.
- **Accents:** Occasional use of gradients (Electric Blue to Indigo) can be applied to high-impact metrics or primary call-to-actions.

## Typography
The system utilizes **Geist** for its systematic, neutral, yet modern geometric qualities. It provides the "technical" look necessary for an engineering portfolio. **JetBrains Mono** is introduced for labels and technical metadata to reinforce the developer-centric narrative.

Typography should be set with **tight letter-spacing** (tracking) on headlines to create a dense, high-fidelity look common in premium SaaS dashboards. Line heights are kept generous for body text to ensure readability of long-form technical case studies.

## Layout & Spacing
This design system uses a **Fixed Grid** approach for desktop to maintain the precision of a dashboard, switching to a fluid model for mobile.

- **Grid:** A 12-column grid with a 24px gutter. Content is centered within a 1200px maximum container.
- **Rhythm:** An 8px linear scale (with a 4px half-step for tight UI elements) governs all padding and margins. 
- **Reflow:** On mobile, margins reduce to 16px, and columns collapse to a single stack. Complex data tables should shift to horizontal scrolling "cards" to preserve data integrity.

## Elevation & Depth
Depth is not communicated through heavy shadows, but through **Tonal Layering** and **Glassmorphism**.

- **Surfaces:** Use a subtle background blur (`backdrop-filter: blur(12px)`) on card elements that sit above the main background. 
- **Borders:** Every elevated element must have a 1px solid border using a semi-transparent white (e.g., `rgba(255, 255, 255, 0.1)`) or the defined `#262626`.
- **Luminosity:** Use a subtle "inner glow" (top-weighted white border at 0.05 opacity) to simulate light hitting the top edge of a physical component.
- **Shadows:** Only use shadows for floating elements (modals, dropdowns). These should be large, diffused, and nearly black: `0 20px 40px rgba(0,0,0,0.4)`.

## Shapes
The shape language is "Soft" yet disciplined. While the roundedness is present, it is subtle enough to maintain a professional, structural feel. 

- **Base Radius:** 4px (0.25rem) for small components like tags and buttons.
- **Container Radius:** 8px (0.5rem) for cards and main UI blocks.
- **Interactive States:** Buttons do not change shape on hover; they should maintain their 4px radius to ensure grid alignment remains visually stable.

## Components
- **Buttons:** Primary buttons use a solid `#3B82F6` background with white text. Secondary buttons use a ghost style: transparent background with a `#262626` border that brightens to `#404040` on hover.
- **Glass Cards:** Background: `rgba(17, 17, 17, 0.8)`. Backdrop blur: `12px`. Border: `1px solid rgba(255, 255, 255, 0.08)`.
- **Metric Counters:** Large `display-lg` numbers in `#3B82F6`. Include a subtle "pulse" animation or a glowing dot to indicate live-data simulation.
- **Timeline:** A vertical 1px line in `#262626`. Active nodes are marked with a glowing blue dot. Technical milestones are labeled using `label-sm` in JetBrains Mono.
- **Inputs:** Dark backgrounds (`#0A0A0A`) with a focus state that highlights the border in `#3B82F6` and adds a subtle blue outer glow (3px spread).
- **Code Snippets:** Use a themed block with `#111111` background, using "JetBrains Mono" for content. Syntax highlighting should follow a "Night Owl" or "Vercel Dark" color scheme.