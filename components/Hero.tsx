"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

/* ── Animation orchestration ── */
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.6,
    },
  },
};

export default function Hero() {
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
              className="font-heading font-bold leading-[0.92] tracking-tight"
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

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-accent text-on-primary font-sans font-medium text-sm tracking-wide px-8 py-4 transition-all duration-300 ease-out hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
                >
                  Book a consultation
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 font-sans font-medium text-sm tracking-wide text-primary px-8 py-4 border border-border transition-all duration-300 ease-out hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
                >
                  See our work
                </a>
              </motion.div>

              {/* Trust signal — minimal, factual */}
              <motion.div
                variants={fadeIn}
                className="flex items-center gap-6 pt-2"
              >
                <div className="flex flex-col">
                  <span className="font-heading text-3xl font-bold text-primary tabular-nums">
                    50+
                  </span>
                  <span className="font-sans text-xs font-medium tracking-wide uppercase text-secondary">
                    Automations deployed
                  </span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex flex-col">
                  <span className="font-heading text-3xl font-bold text-primary tabular-nums">
                    12k
                  </span>
                  <span className="font-sans text-xs font-medium tracking-wide uppercase text-secondary">
                    Hours saved monthly
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
