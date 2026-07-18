"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

/* ── Anchor pillar data ── */
const anchors = [
  {
    eyebrow: "Who it's for",
    value: "SME Operations Managers",
  },
  {
    eyebrow: "What it does",
    value: "Custom AI Agents & Data Systems",
  },
  {
    eyebrow: "Outcome",
    value: "Hands-free Workflow Automation",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  /* ── Animation orchestration ── */
  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 200,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const lineGrow = {
    hidden: { scaleY: shouldReduceMotion ? 1 : 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 1,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background — clean, no decoration */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-24 lg:py-0">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* ── Left: Headline (7 cols) ── */}
          <div className="lg:col-span-7">
            <motion.p
              variants={slideUp}
              className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-8"
            >
              AI Automation Agency
            </motion.p>

            <motion.h1
              variants={stagger}
              className="font-heading font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)" }}
            >
              <motion.span variants={slideUp} className="block text-primary">
                We sell
              </motion.span>
              <motion.span variants={slideUp} className="block text-accent">
                digital employees
              </motion.span>
              <motion.span variants={slideUp} className="block text-primary">
                for repetitive work.
              </motion.span>
            </motion.h1>

            {/* ── Subheadline clarifier ── */}
            <motion.p
              variants={fadeIn}
              className="font-sans text-lg sm:text-xl font-light text-secondary leading-relaxed mt-6 max-w-lg"
            >
              AI agents that do your repetitive operations work.
            </motion.p>
          </div>

          {/* ── Right: Accent line + subtext + CTA (5 cols) ── */}
          <div className="lg:col-span-5 flex gap-8 lg:gap-10 items-stretch">
            {/* Vertical accent line */}
            <motion.div
              variants={lineGrow}
              className="hidden lg:block w-px bg-border origin-top flex-shrink-0"
              style={{ minHeight: "280px" }}
            />

            <div className="flex flex-col justify-center gap-10 lg:gap-12">
              <motion.p
                variants={fadeIn}
                className="font-sans text-lg sm:text-xl font-light leading-relaxed text-secondary max-w-md"
              >
                Premium AI agents and automations for operations managers.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col gap-3">
                {/* CTA group */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#lead-chatbot"
                    className="group inline-flex items-center justify-center gap-3 bg-accent text-on-primary font-sans font-medium text-sm tracking-wide px-8 py-4 transition-all duration-300 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent cursor-pointer"
                  >
                    Book a consultation
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                  <a
                    href="#industries"
                    className="inline-flex items-center justify-center gap-2 font-sans font-medium text-sm tracking-wide text-primary px-8 py-4 border border-border transition-all duration-300 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent cursor-pointer"
                  >
                    Solutions
                  </a>
                </div>

                {/* ── CTA micro-copy ── */}
                <p className="font-sans text-xs font-light text-secondary/80 leading-relaxed">
                  In 3 minutes we&rsquo;ll estimate your automation impact and suggest next steps.
                </p>
              </motion.div>

              {/* ── 3-Pillar anchor row ── */}
              <motion.div
                variants={fadeIn}
                className="flex items-start gap-0 pt-2 border-t border-border"
              >
                {anchors.map((anchor, i) => (
                  <div
                    key={anchor.eyebrow}
                    className="flex-1 flex flex-col gap-1.5 px-0 py-4 first:pl-0 last:pr-0"
                    style={{
                      paddingLeft: i > 0 ? "1rem" : undefined,
                      borderLeft: i > 0 ? "1px solid var(--color-border)" : undefined,
                    }}
                  >
                    <span className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-secondary/80">
                      {anchor.eyebrow}
                    </span>
                    <span className="font-sans text-sm font-medium text-primary leading-snug">
                      {anchor.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
