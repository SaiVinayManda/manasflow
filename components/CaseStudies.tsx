"use client";

import { motion } from "framer-motion";

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

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeUpVariants}
            className="group flex flex-col justify-between border border-border bg-on-primary p-10 lg:p-14 hover:border-accent transition-colors duration-500"
          >
            <div className="mb-12 lg:mb-24">
              <span className="font-heading text-6xl lg:text-7xl font-bold text-primary tracking-tighter tabular-nums block mb-4">
                50+
              </span>
              <h3 className="font-sans text-xl lg:text-2xl font-bold text-primary">
                Automations Deployed
              </h3>
            </div>
            <p className="font-sans text-base lg:text-lg font-light leading-relaxed text-secondary group-hover:text-primary transition-colors duration-500">
              Eliminated manual invoice processing for a real estate firm, reducing CRM phase transition time by 90%.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUpVariants}
            className="group flex flex-col justify-between border border-border bg-on-primary p-10 lg:p-14 hover:border-accent transition-colors duration-500"
          >
            <div className="mb-12 lg:mb-24">
              <span className="font-heading text-6xl lg:text-7xl font-bold text-primary tracking-tighter tabular-nums block mb-4">
                12k
              </span>
              <h3 className="font-sans text-xl lg:text-2xl font-bold text-primary">
                Hours Saved Monthly
              </h3>
            </div>
            <p className="font-sans text-base lg:text-lg font-light leading-relaxed text-secondary group-hover:text-primary transition-colors duration-500">
              Automated unstructured data extraction and ECAD file conversions for engineering workflows.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
