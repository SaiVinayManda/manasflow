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
      className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border"
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
        </div>

        {/* ── Services Grid ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: AI Automations */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-5 border border-border bg-on-primary p-10 lg:p-14 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:bg-muted"
          >
            <div className="flex justify-between items-start mb-20 lg:mb-32">
              <LightningBoltIcon className="w-8 h-8 text-accent" aria-hidden="true" />
              <ArrowTopRightIcon className="w-6 h-6 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </div>
            <div>
              <span className="font-sans text-sm font-medium tracking-[0.2em] text-secondary mb-4 block">
                01
              </span>
              <h3 className="font-heading text-3xl font-bold text-primary mb-6">
                AI Automations
              </h3>
              <p className="font-sans text-lg font-light text-secondary leading-relaxed">
                Simple workflows, CRM synchronization, and task optimizations to
                eliminate manual data entry.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Custom AI Agents */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-7 border border-border bg-on-primary p-10 lg:p-14 flex flex-col justify-between group cursor-pointer transition-colors duration-500 hover:bg-muted"
          >
            <div className="flex justify-between items-start mb-20 lg:mb-32">
              <MagicWandIcon className="w-8 h-8 text-accent" aria-hidden="true" />
              <ArrowTopRightIcon className="w-6 h-6 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </div>
            <div>
              <span className="font-sans text-sm font-medium tracking-[0.2em] text-secondary mb-4 block">
                02
              </span>
              <h3 className="font-heading text-3xl font-bold text-primary mb-6">
                Custom AI Agents
              </h3>
              <p className="font-sans text-lg font-light text-secondary leading-relaxed max-w-xl">
                Personalized digital employees powered by OpenClaw & Hermes,
                capable of complex reasoning and independent execution.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Enterprise AI Systems */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-12 border border-border bg-on-primary p-10 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between group cursor-pointer transition-colors duration-500 hover:bg-muted"
          >
            <div className="flex flex-col justify-between">
              <LayersIcon className="w-10 h-10 text-accent mb-16 lg:mb-24" aria-hidden="true" />
              <div>
                <span className="font-sans text-sm font-medium tracking-[0.2em] text-secondary mb-4 block">
                  03
                </span>
                <h3 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
                  Enterprise AI Systems
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-between lg:w-1/2">
              <div className="flex justify-end hidden lg:flex">
                <ArrowTopRightIcon className="w-8 h-8 text-border group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </div>
              <div className="lg:mt-auto">
                <p className="font-sans text-xl lg:text-2xl font-light text-secondary leading-relaxed">
                  End-to-end RAG pipelines and full organizational data silo
                  integration for secure, department-wide intelligence.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
