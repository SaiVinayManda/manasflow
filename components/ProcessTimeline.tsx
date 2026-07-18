"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Workflow Audit",
    description: "Mapping existing bottlenecks",
    deliverable: "You get a bottleneck map and automation roadmap.",
  },
  {
    number: "02",
    title: "System Architecture",
    description: "Designing the multi-agent or integration blueprint",
    deliverable: "You get a diagram of the proposed multi-agent/integration system.",
  },
  {
    number: "03",
    title: "Agent Deployment",
    description: "Building via OpenClaw/Hermes in a staging environment",
    deliverable: "You get a working prototype in a staging environment.",
  },
  {
    number: "04",
    title: "Handoff & Maintenance",
    description: "Live deployment with ongoing optimization",
    deliverable: "You get a live system + ongoing monitoring.",
  },
];

export default function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="process" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border overflow-hidden scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6"
          >
            Engagement Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="font-heading font-bold text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            How we build.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mt-6 font-sans text-base lg:text-lg font-light leading-relaxed text-secondary max-w-2xl"
          >
            We build on OpenClaw, Hermes, and leading LLM APIs with zero-retention policies, seamlessly integrated into platforms like Salesforce, HubSpot, Zapier, and Make.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* ── Connecting Line Desktop ── */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-[calc(100%-25%)] h-[1px] bg-border/60 z-0" />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={fadeUpVariants}
                className="flex-1 flex flex-col relative"
              >
                {/* ── Connecting Line Mobile ── */}
                {idx !== steps.length - 1 && (
                  <div className="block lg:hidden absolute top-14 left-[28px] w-[1px] h-[calc(100%+1.5rem)] bg-border/60 z-0" />
                )}

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 shadow-sm relative group">
                    <span className="font-heading text-xl font-bold text-primary tracking-tighter transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="pl-16 lg:pl-0 -mt-16 lg:mt-0">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 pt-3 lg:pt-0">
                      {step.title}
                    </h3>
                    <p className="font-sans text-base lg:text-lg font-light leading-relaxed text-secondary pr-4">
                      {step.description}
                    </p>

                    {/* ── Deliverable tag ── */}
                    <div className="mt-5 pt-4 border-t border-border/50">
                      <p className="font-sans text-sm text-secondary/80 leading-snug">
                        <strong className="font-semibold text-primary">Deliverable:</strong> {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
