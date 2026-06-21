"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Team() {
  const shouldReduceMotion = useReducedMotion();

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
    <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          {/* ── Left Side: Placeholder Image ── */}
          <div className="w-full lg:w-1/2 aspect-square max-w-md bg-muted/40 border border-border flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-border/10 to-transparent pointer-events-none" />
            <span className="font-sans text-sm font-semibold tracking-widest uppercase text-muted/60">
              Founder Profile Image
            </span>
          </div>

          {/* ── Right Side: Content ── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
              Who We Are
            </p>
            <h2 className="font-heading font-bold text-primary text-4xl lg:text-6xl leading-[1.05] mb-8">
              Engineered by Experts.
            </h2>
            <div className="font-sans text-lg lg:text-xl font-light text-secondary leading-relaxed space-y-6">
              <p>
                Manasflow is led by a Full Stack Engineer holding a Master's degree in Robotics Engineering with a specialization in Artificial Intelligence.
              </p>
              <p>
                We don't just patch software together; we build robust, autonomous architectures from the ground up, guaranteeing scalable systems that replace brittle human workflows with unrelenting logic.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
