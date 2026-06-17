# Manasflow Design System

## Core Aesthetics
- **Pattern**: Enterprise Gateway (Path selection, Mega menu navigation, Trust signals prominent)
- **Style**: Trust & Authority (Minimalist, premium, high-trust)
- **Keywords**: High-contrast typography, generous negative space, sophisticated, refined, premium.
- **Effects**: Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal.
- **Avoid (Anti-patterns)**: Playful design, hidden credentials, AI purple/pink gradients.

## CSS Variables (globals.css / index.css)
Ensure generous negative space and high-contrast typography. 

```css
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700&family=Jost:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-primary: #0F172A;
    --color-on-primary: #FFFFFF;
    --color-secondary: #334155;
    --color-accent: #0369A1;
    --color-background: #F8FAFC;
    --color-foreground: #020617;
    --color-muted: #E8ECF1;
    --color-border: #E2E8F0;
    --color-destructive: #DC2626;
    --color-ring: #0F172A;

    /* High-contrast typography & negative space utilities can be driven by Tailwind classes, 
       but we define generous spacing root variables if needed, though Tailwind's default spacing is excellent. */
  }

  .dark {
    /* Dark mode variants */
    --color-primary: #FFFFFF;
    --color-on-primary: #0F172A;
    --color-secondary: #94A3B8;
    --color-accent: #38BDF8;
    --color-background: #020617;
    --color-foreground: #F8FAFC;
    --color-muted: #1E293B;
    --color-border: #334155;
    --color-destructive: #EF4444;
    --color-ring: #CBD5E1;
  }
}

@layer base {
  body {
    @apply bg-background text-foreground font-sans antialiased;
    /* Generous negative space starting point */
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading tracking-tight text-primary;
  }
}
```

## Tailwind Configuration (Tailwind v4 — CSS-first)

> **Note:** Tailwind CSS v4 uses CSS-first configuration via `@theme inline` in `app/globals.css`. There is **no `tailwind.config.ts`** file. All tokens below are defined directly in CSS.

```css
@theme inline {
  /* Colors — mapped from CSS variables */
  --color-primary: var(--color-primary);
  --color-on-primary: var(--color-on-primary);
  --color-secondary: var(--color-secondary);
  --color-accent: var(--color-accent);
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --color-muted: var(--color-muted);
  --color-border: var(--color-border);
  --color-destructive: var(--color-destructive);
  --color-ring: var(--color-ring);

  /* Typography — Bodoni Moda (heading) + Jost (body) */
  --font-heading: var(--font-bodoni-moda);
  --font-sans: var(--font-jost);

  /* Generous negative space additions */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;
  --spacing-30: 7.5rem;
}
```

Dark mode is toggled via the `.dark` class on `<html>`.

## Typography Pairings
- **Heading**: [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda)
- **Body**: [Jost](https://fonts.google.com/specimen/Jost)
- **Mood**: Luxury, minimalist, high-end, sophisticated, refined, premium.
- **Best For**: Luxury minimalist brands, high-end fashion, premium products, and high-trust enterprise AI solutions.

## Implementation Guidelines
- **Generous Negative Space**: Use Tailwind spacing utilities like `p-12`, `p-16`, `m-12`, `gap-8`, and `gap-12` consistently. Avoid cramped components. Give text, icons, and sections room to breathe.
- **High-Contrast Typography**: Ensure heading weights (`font-medium` to `font-bold`) contrast well against background. Use `text-primary` for headings and `text-foreground`/`text-secondary` for body text to maintain clear readability hierarchy.
- **CTA**: Use `bg-accent text-on-primary` for primary call-to-actions to ensure it stands out securely.
- **Icons**: No emojis. Use scalable vector SVGs like Lucide or Heroicons.
- **Interactions**: Subtle `hover:scale-105 transition-transform duration-300 ease-in-out`, or soft shadow increments.
