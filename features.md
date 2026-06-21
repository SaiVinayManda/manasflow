# Manasflow - Project Features & Architecture (V1)

**Domain:** manasflow.com
**Positioning:** Premium AI Automation Agency for SME Operations Managers
**Location:** Milan, Italy (Serving Global Clients)
**Tech Stack:** Next.js 15 (App Router), Tailwind CSS, Framer Motion, Firebase (Firestore)

---

## 1. Core Component Architecture

*   **Logo (`components/Logo.tsx`):** Custom SVG monogram optimized with `fill="currentColor"` for dynamic theme adaptation.
*   **Hero Section (`components/Hero.tsx`):** 
    *   High-converting headline and subtext.
    *   "Book a consultation" button (smooth scrolls to `#lead-chatbot`).
    *   "Solutions" button (smooth scrolls to `#solutions`).
*   **Integration Banner (`components/IntegrationBanner.tsx`):** Infinite-scroll marquee featuring SVG logos of integrated tools (Salesforce, HubSpot, Procore, AutoCAD, Microsoft 365, Zapier, Make.com).
*   **Services (`components/Services.tsx`):** Uniform, light-background metric cards detailing 3 core tiers:
    *   AI Automations
    *   Custom AI Agents (OpenClaw & Hermes)
    *   Enterprise AI Systems (RAG Pipelines)
*   **Industry Solutions (`components/IndustrySolutions.tsx`):** Interactive tabbed/sticky interface mapping specific industry bottlenecks to Manasflow AI solutions across 5 sectors (Estimating, Office Admin, Field Service, Supply Chain, Engineering).
*   **Process Timeline (`components/ProcessTimeline.tsx`):** 4-step deployment roadmap (Workflow Audit -> System Architecture -> Agent Deployment -> Handoff).
*   **Footer (`components/Footer.tsx`):** Minimalist layout containing the entity-rich statement, Milan location stamp, "Powered by Manasflow" internal-use proof, and Framer Motion modal triggers for Legal/Privacy documents.

## 2. Lead Generation & Funnel Mechanics

*   **Conversational Gate (`components/LeadChatbot.tsx`):** 
    *   Qualifies users before allowing them to book a call.
    *   Word count constraint (lowered to 10 words for friction reduction).
    *   Bypass logic via VIP keywords.
    *   Saves lead context (`problem_context`, `is_vip`, timestamp, `status`) directly to Firebase Firestore (`lib/firebase.ts`).
    *   Unlocks Cal.com embed upon successful database insertion.
*   **Top-of-Funnel Lead Magnet (`components/LeadMagnet.tsx`):** "2026 SME Workflow Automation Checklist" email capture form for low-intent prospects.
*   **ROI Calculator (`components/ROICalculator.tsx`):** Interactive slider calculating estimated monthly financial leakage based on manual admin hours.

## 3. Trust & Social Proof Elements

*   **Proof of Work (`components/CaseStudies.tsx`):** High-contrast metric cards highlighting concrete data (e.g., 50+ Automations Deployed, 12k Hours Saved Monthly).
*   **Team / Who We Are (`components/Team.tsx`):** Authority-building bio highlighting the founder's Master's degree in Robotics Engineering (AI specialization).
*   **Testimonials (`components/Testimonials.tsx`):** 3-column grid featuring operational efficiency quotes from enterprise clients.

## 4. AEO & SEO Optimization

*   **Global Metadata:** Pre-configured Next.js metadata API in `app/page.tsx` for precise title, description, and OpenGraph sharing parameters.
*   **Entity-Rich Statements:** Explicit, machine-readable declarations injected into the footer for Answer Engines (Perplexity, Gemini, ChatGPT).
*   **Semantic FAQ (`components/FAQ.tsx`):** Server-rendered accordion structure ensuring answers are instantly available in the DOM for crawlers.
*   **Dynamic JSON-LD Schema:** 
    *   `FAQPage` schema auto-generated from the exact typed data array used for the visible FAQ component to prevent UI/Data drift.
    *   `Organization` schema injected into `app/page.tsx` defining the agency, location, and service focus.

## 5. Security, Accessibility (EAA/WCAG), & Performance

*   **Security Micro-copy:** Explicit enterprise-grade data privacy assurances (SOC2 Compliant, zero-retention LLM APIs) injected below all form submission buttons.
*   **Lighthouse Form Compliance:** Explicit, unique `id` and `name` attributes mapped to labels and inputs for screen readers and auto-fill optimization.
*   **Reduced Motion:** Implementation of `useReducedMotion` hook via Framer Motion to respect EU Accessibility Act (EAA) system preferences.
*   **ARIA Labels:** Strict enforcement of `aria-hidden="true"` on decorative SVGs and descriptive `aria-label` tags on interactive icon buttons.
*   **Production Build Optimization:** Next.js build pipeline configured to minify JS/CSS bundles and execute non-blocking script loading for sub-100ms LCP/FCP targets.