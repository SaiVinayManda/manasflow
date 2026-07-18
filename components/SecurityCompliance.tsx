"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ──────────────────────────────────────────────────
   Inline SVG icons — precision-drawn, not decorative
   Stroke-only for authority; filled accents only where
   they carry meaning (the green shield check, the red
   cross-out on the lock, the server indicator light).
────────────────────────────────────────────────── */

function ShieldCheckIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 4L6 9.5V20.5C6 28.5 12.5 35.5 20 38C27.5 35.5 34 28.5 34 20.5V9.5L20 4Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner shield fill for depth */}
      <path
        d="M20 7.5L9 12V20.5C9 27 14.5 32.8 20 35C25.5 32.8 31 27 31 20.5V12L20 7.5Z"
        fill="white"
        fillOpacity="0.06"
      />
      {/* Check mark */}
      <path
        d="M13.5 20.5L17.5 24.5L26.5 15.5"
        stroke="rgb(3,105,161)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZeroRetentionIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Lock body */}
      <rect
        x="9"
        y="18"
        width="22"
        height="16"
        rx="2"
        stroke="white"
        strokeWidth="1.5"
      />
      {/* Shackle */}
      <path
        d="M14 18V13C14 9.686 16.686 7 20 7C23.314 7 26 9.686 26 13V18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Keyhole */}
      <circle cx="20" cy="26" r="2.5" stroke="white" strokeWidth="1.25" />
      <line
        x1="20"
        y1="28.5"
        x2="20"
        y2="31"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Cross-out slash (zero retention) */}
      <line
        x1="32"
        y1="6"
        x2="7"
        y2="35"
        stroke="rgb(3,105,161)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Small circle at slash end to denote "no data" */}
      <circle cx="32" cy="6" r="2.5" fill="rgb(3,105,161)" />
    </svg>
  );
}

function SecureServerIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Server stack — 3 units */}
      <rect x="6" y="6" width="28" height="8" rx="1.5" stroke="white" strokeWidth="1.5" />
      <rect x="6" y="16" width="28" height="8" rx="1.5" stroke="white" strokeWidth="1.5" />
      <rect x="6" y="26" width="28" height="8" rx="1.5" stroke="white" strokeWidth="1.5" />
      {/* Status lights — top server: green (active) */}
      <circle cx="28" cy="10" r="1.75" fill="rgb(3,105,161)" />
      {/* Status lights — mid server: dim */}
      <circle cx="28" cy="20" r="1.75" fill="white" fillOpacity="0.25" />
      {/* Status lights — bottom server: dim */}
      <circle cx="28" cy="30" r="1.75" fill="white" fillOpacity="0.25" />
      {/* Drive slot indicators */}
      <line x1="11" y1="10" x2="22" y2="10" stroke="white" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="20" x2="22" y2="20" stroke="white" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="30" x2="22" y2="30" stroke="white" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* ── Pillar data ── */
const pillars = [
  {
    icon: <ShieldCheckIcon />,
    category: "Compliance",
    title: "SOC2 Compliant Infrastructure",
    body: "Our systems and processes are built to SOC2 Type II standards, covering security, availability, and confidentiality. Independent third-party audits validate our controls annually.",
  },
  {
    icon: <ZeroRetentionIcon />,
    category: "Data Policy",
    title: "Zero-Retention LLM APIs",
    body: "We exclusively use LLM providers with contractual zero-retention policies. Your data is never stored beyond the request lifecycle and is never used to train any public or private model.",
  },
  {
    icon: <SecureServerIcon />,
    category: "Infrastructure",
    title: "Secure Data Handling",
    body: "All data in transit is encrypted via TLS 1.3. At-rest encryption is enforced across all storage layers. Access is role-gated and audited. No third-party data brokers. No advertising.",
  },
] as const;

export default function SecurityCompliance() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="security-heading"
      className="bg-primary py-24 lg:py-32 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* ── Top gradient hairline ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-5">
            Trust & Compliance
          </p>
          <h2
            id="security-heading"
            className="font-heading font-bold text-white leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Enterprise-Grade Security &amp; Compliance
          </h2>
          <p className="font-sans text-base lg:text-lg font-light text-white/55 leading-relaxed mt-5 max-w-2xl">
            Built for operations teams that handle sensitive client data, internal financials, and regulated workflows.
            Security is not a feature — it is the foundation.
          </p>
        </motion.div>

        {/* ── 3-Pillar Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/8"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.category}
              variants={fadeUpVariants}
              className={[
                "flex flex-col gap-6 p-10 lg:p-12",
                "border-b md:border-b-0 border-white/8",
                i < pillars.length - 1 ? "md:border-r md:border-white/8" : "",
              ].join(" ")}
            >
              {/* Icon */}
              <div className="flex-shrink-0">{pillar.icon}</div>

              {/* Category eyebrow */}
              <p className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white/35 -mb-3">
                {pillar.category}
              </p>

              {/* Title */}
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-white leading-snug">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="font-sans text-sm font-light text-white/60 leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Legal bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-sans text-xs font-light text-white/30 leading-relaxed max-w-2xl">
            All engagements include a data processing agreement (DPA) aligned with GDPR Article 28.
            Client data is never sub-processed to unauthorized third parties. Contact{" "}
            <a
              href="mailto:legal@manasflow.com"
              className="text-white/50 hover:text-white/80 underline underline-offset-4 transition-colors duration-200"
            >
              legal@manasflow.com
            </a>{" "}
            for compliance documentation.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mini lock indicator */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="2" y="5.5" width="8" height="5.5" rx="1" stroke="currentColor" strokeWidth="1" className="text-white/30" />
              <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-white/30" />
            </svg>
            <span className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">
              TLS 1.3 · AES-256 · GDPR
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom gradient hairline ── */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
