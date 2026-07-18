"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LeadMagnet() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email address.");
      return;
    }
    setError(null);
    setIsSubmitted(true);
    // In production, sync to CRM/Newsletter API here
  };

  return (
    <section id="lead-magnet" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-muted/30 border-t border-border scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="flex flex-col items-center"
        >
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Free Resource
          </p>
          <h2 className="font-heading font-bold text-primary text-4xl lg:text-6xl leading-[1.05] mb-4">
            Not ready to talk?
            <br />
            Start optimizing today.
          </h2>
          <p className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-accent mb-4">
            Includes 20+ checks grouped by CRM, accounting, field ops, and management reporting.
          </p>
          <p className="font-sans text-lg lg:text-xl font-light text-secondary leading-relaxed mb-12 max-w-2xl">
            Download the 2026 SME Workflow Automation Checklist and identify the hidden bottlenecks bleeding capital in your operations.
          </p>

          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <label htmlFor="magnet-email" className="sr-only">Work Email</label>
                  <input
                    id="magnet-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your work email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    className="w-full px-6 py-4 bg-on-primary border border-border font-sans text-primary placeholder:text-muted-foreground outline-none focus:border-primary transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-on-primary font-sans font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm"
                  >
                    Download PDF
                  </button>
                  <p className="font-sans text-xs font-light text-secondary mt-2">
                    {error ? <span className="text-destructive">{error}</span> : "Zero spam. Unsubscribe at any time."}
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                  className="p-8 border border-border bg-on-primary shadow-sm"
                >
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Checklist Sent.
                  </h3>
                  <p className="font-sans text-secondary font-light">
                    Check your inbox (and spam folder) for the download link.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="font-sans text-xs text-secondary/60 opacity-80 text-center mt-6 px-4">
              🔒 Enterprise-Grade Security: SOC2 Compliant. We utilize zero-retention LLM APIs. Your data is never used to train public models.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
