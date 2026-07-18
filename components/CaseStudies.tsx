"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

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
  extendedDescription: React.ReactNode;
  metricLabel: string;
  beforeText: string;
  afterText: string;
};

const caseStudies: CaseStudy[] = [
  {
    workflow: "AP Pipeline Automation",
    metric: "90%",
    metricLabel: "Reduction in Processing Time",
    description:
      "Eliminated manual invoice processing for a top-tier real estate firm, converting raw PDFs into structured ledger entries without human intervention.",
    beforeText: "3 team members spending 20 hours/week manually matching invoices to POs.",
    afterText: "1 team member spending 2 hours/week reviewing AI-drafted accounting entries.",
    extendedDescription: (
      <ul className="list-disc pl-5 mt-4 space-y-2 text-sm font-light text-secondary">
        <li><strong>Trigger:</strong> New invoice received in designated AP inbox.</li>
        <li><strong>Extraction:</strong> AI vision model extracts vendor, line items, and totals from structured and unstructured PDFs.</li>
        <li><strong>Validation:</strong> Cross-references against open Purchase Orders in the ERP.</li>
        <li><strong>Execution:</strong> Drafts the payment entry in the accounting system, flagging only discrepancies for human review.</li>
      </ul>
    ),
  },
  {
    workflow: "Automated BOM Generation",
    metric: "12k",
    metricLabel: "Hours Saved Monthly",
    description:
      "Replaced manual 2D floor plan tracing with an AI vision system that instantly translates schematics into live-priced Bill of Materials.",
    beforeText: "Engineers taking 3-4 days to trace floor plans and calculate material counts.",
    afterText: "Instantly extracted takeoff sheets ready for final human validation in minutes.",
    extendedDescription: (
      <ul className="list-disc pl-5 mt-4 space-y-2 text-sm font-light text-secondary">
        <li><strong>Trigger:</strong> PDF floor plans and ECAD files uploaded to project folder.</li>
        <li><strong>Extraction:</strong> AI identifies all fixtures, conduits, and equipment counts.</li>
        <li><strong>Validation:</strong> Maps identified components to standard part numbers in the internal inventory system.</li>
        <li><strong>Execution:</strong> Generates a finalized Excel takeoff sheet with current supplier pricing applied.</li>
      </ul>
    ),
  },
  {
    workflow: "Sales Lead Qualification",
    metric: "3x",
    metricLabel: "Increase in Lead Conversion",
    description:
      "Deployed a custom AI chatbot that aggressively pre-qualifies incoming traffic and books consultations, preventing high-value leads from going cold.",
    beforeText: "High-value leads waiting 24+ hours for a manual email response.",
    afterText: "Immediate qualification and calendar booking 24/7 without sales rep intervention.",
    extendedDescription: (
      <ul className="list-disc pl-5 mt-4 space-y-2 text-sm font-light text-secondary">
        <li><strong>Trigger:</strong> Visitor initiates chat on the homepage.</li>
        <li><strong>Interaction:</strong> Agent collects company size, current tech stack, and primary bottleneck.</li>
        <li><strong>Validation:</strong> Checks against ideal customer profile (ICP) criteria.</li>
        <li><strong>Execution:</strong> Directly books qualified leads onto sales calendars and creates complete CRM records.</li>
      </ul>
    ),
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUpVariants}
      className="group relative flex flex-col border border-border bg-on-primary p-8 lg:p-12 hover:border-accent transition-all duration-500 hover:shadow-lg hover:scale-[1.02] overflow-hidden"
    >
      {/* Subtle hover background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="inline-flex items-center px-3 py-1 mb-8 border border-border bg-background self-start">
          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
          <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary">
            {study.workflow}
          </span>
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

        <div className="mt-6 flex flex-col gap-2 pl-4 border-l-2 border-accent/30 bg-muted/20 py-2 rounded-r-sm">
          <p className="font-sans text-sm font-medium text-secondary">
            <span className="text-muted-foreground mr-1">Before:</span>
            {study.beforeText}
          </p>
          <p className="font-sans text-sm font-medium text-primary">
            <span className="text-accent mr-1">After:</span>
            {study.afterText}
          </p>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border mt-4">
                <p className="font-sans text-sm font-semibold text-primary mb-2">Workflow Breakdown</p>
                {study.extendedDescription}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-auto pt-8">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-accent hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm"
          >
            {isExpanded ? "Hide details" : "See how this works in practice"}
            {isExpanded ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
          </button>

          {/* ── Services routing ── */}
          <Link
            href="/#services"
            className="flex items-center gap-1.5 mt-4 font-sans text-xs font-medium tracking-wide text-secondary/55 hover:text-accent transition-colors duration-300 group/svc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm w-fit"
          >
            See how we build agents like this
            <span className="transition-transform duration-300 group-hover/svc:translate-x-0.5" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={idx} study={study} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
