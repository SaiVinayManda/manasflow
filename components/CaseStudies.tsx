"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

type CaseStudy = {
  workflow: string;
  metric: string;
  description: string;
  metricLabel: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    workflow: "AP Pipeline Automation",
    metric: "90%",
    metricLabel: "Reduction in Processing Time",
    description:
      "Eliminated manual invoice processing for a top-tier real estate firm, converting raw PDFs into structured ledger entries without human intervention.",
    link: "/blog/automated-ap-pipeline",
  },
  {
    workflow: "Automated BOM Generation",
    metric: "12k",
    metricLabel: "Hours Saved Monthly",
    description:
      "Replaced manual 2D floor plan tracing with an AI vision system that instantly translates schematics into live-priced Bill of Materials.",
    link: "/blog/automate-boq-material-takeoffs",
  },
  {
    workflow: "Sales Lead Qualification",
    metric: "3x",
    metricLabel: "Increase in Lead Conversion",
    description:
      "Deployed a custom AI chatbot that aggressively pre-qualifies incoming traffic and books consultations, preventing high-value leads from going cold.",
    link: "/blog/ai-automations-leads",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* ── Header ── */}
        <div className="mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6"
          >
            Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading font-bold text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Proof of Work
          </motion.h2>
        </div>

        {/* ── Metric Blocks ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="group relative flex flex-col justify-between border border-border bg-on-primary p-8 lg:p-12 hover:border-accent transition-all duration-500 hover:shadow-lg overflow-hidden"
            >
              {/* Subtle hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 mb-8 border border-border bg-background">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                  <Link href={study.link} className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary hover:text-accent transition-colors">
                    {study.workflow}
                  </Link>
                </div>
                
                <div className="mb-8">
                  <span className="font-heading text-5xl lg:text-6xl font-bold text-primary tracking-tighter tabular-nums block mb-2 group-hover:text-accent transition-colors duration-500">
                    {study.metric}
                  </span>
                  <h3 className="font-sans text-lg lg:text-xl font-bold text-primary">
                    {study.metricLabel}
                  </h3>
                </div>
                
                <p className="font-sans text-sm lg:text-base font-light leading-relaxed text-secondary group-hover:text-primary transition-colors duration-500">
                  {study.description}
                </p>
                
                <Link href={study.link} className="inline-flex items-center gap-2 mt-6 font-sans text-sm font-medium text-accent hover:text-primary transition-colors duration-300">
                  Read full breakdown &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
