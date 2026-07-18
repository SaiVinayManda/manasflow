"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LightningBoltIcon,
  MagicWandIcon,
  LayersIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  /* ── Animation variants ── */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
      },
    },
  };
  return (
    <section
      id="services"
      className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* ── Section header ── */}
        <div className="mb-16 lg:mb-24">
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Expertise
          </p>
          <h2
            className="font-heading font-bold text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Core Packages
          </h2>
          <p className="font-sans text-sm font-light italic text-muted-foreground mt-4 max-w-xl">
            Who this is not for: We&rsquo;re not a generic SaaS; we partner closely with ops teams on high-impact custom workflows.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: AI Automations */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="border border-border bg-on-primary p-8 lg:p-12 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            <div className="flex justify-between items-start mb-16">
              <LightningBoltIcon className="w-8 h-8 text-accent" aria-hidden="true" />
              <ArrowTopRightIcon className="w-6 h-6 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4">
                AI Automations
              </h3>
              <p className="font-sans text-sm font-light text-secondary mb-8 leading-relaxed">
                Simple workflows, CRM synchronization, and task optimizations to eliminate manual data entry.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-border/50">
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                    Best for:
                  </p>
                  <p className="font-sans text-sm font-light text-primary leading-snug">
                    Teams with CRM + accounting but high manual entry.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                    Outcome:
                  </p>
                  <p className="font-sans text-sm font-light text-primary leading-snug">
                    Data entry cut by 60–90%, fewer errors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Custom AI Agents */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="border border-border bg-on-primary p-8 lg:p-12 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            <div className="flex justify-between items-start mb-16">
              <MagicWandIcon className="w-8 h-8 text-accent" aria-hidden="true" />
              <ArrowTopRightIcon className="w-6 h-6 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4">
                Custom AI Agents
              </h3>
              <p className="font-sans text-sm font-light text-secondary mb-8 leading-relaxed">
                Personalized digital employees powered by OpenClaw & Hermes, capable of complex reasoning.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-border/50">
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                    Best for:
                  </p>
                  <p className="font-sans text-sm font-light text-primary leading-snug">
                    Operations managers needing autonomous workers for multi-step tasks.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                    Outcome:
                  </p>
                  <p className="font-sans text-sm font-light text-primary leading-snug">
                    24/7 autonomous task execution without human oversight.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Enterprise AI Systems */}
          <motion.div
            variants={cardVariants}
            tabIndex={0}
            className="border border-border bg-on-primary p-8 lg:p-12 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            <div className="flex justify-between items-start mb-16">
              <LayersIcon className="w-8 h-8 text-accent" aria-hidden="true" />
              <ArrowTopRightIcon className="w-6 h-6 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-4">
                Enterprise AI Systems
              </h3>
              <p className="font-sans text-sm font-light text-secondary mb-8 leading-relaxed">
                End-to-end RAG pipelines and full organizational data silo integration for department-wide intelligence.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-border/50">
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                    Best for:
                  </p>
                  <p className="font-sans text-sm font-light text-primary leading-snug">
                    Businesses with siloed data across departments requiring unified intelligence.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                    Outcome:
                  </p>
                  <p className="font-sans text-sm font-light text-primary leading-snug">
                    Secure, instant organizational data retrieval and synthesis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Operational Safeguards ── */}
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-3 mt-2 lg:mt-4 border border-border bg-muted/20 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Operational Safeguards
              </h3>
              <p className="font-sans text-sm font-light text-secondary leading-relaxed max-w-3xl">
                <strong className="font-medium text-primary">How we handle edge cases:</strong> Agents never auto-approve critical actions without human review. We design explicit checks and escalation paths so you always remain in control.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent font-sans text-[10px] font-bold tracking-widest uppercase">
                Human in the loop
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
