"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ManasflowLogo } from "@/components/brand/ManasflowLogo";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: shouldReduceMotion ? 0 : 0.3 } },
    exit: { opacity: 0, transition: { duration: shouldReduceMotion ? 0 : 0.3 } },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 25, stiffness: 300 }
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
      y: shouldReduceMotion ? 0 : 20,
      transition: { duration: shouldReduceMotion ? 0 : 0.2 }
    },
  };

  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-primary text-on-primary py-24 lg:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden relative">
        {/* ── Background decoration: subtle gradient ── */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />

        <div className="max-w-[1440px] mx-auto">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* ── Top section: Brand & Mission ── */}
            <div className="mb-24 lg:mb-32">
              <div className="mb-8">
                <ManasflowLogo variant="footer" />
              </div>
              <p className="font-sans text-xl sm:text-2xl font-light text-muted max-w-2xl leading-relaxed">
                We sell digital employees for repetitive work.
                <br />
                Premium AI agents and automations.
              </p>
            </div>

            {/* ── Middle section: Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24 lg:mb-32">
              <div className="lg:col-span-1">
                <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted/60 mb-8">
                  Contact
                </h3>
                <ul className="space-y-4 font-sans text-muted font-light">
                  <li>
                    <a
                      href="mailto:info@manasflow.com"
                      className="hover:text-on-primary transition-colors duration-300"
                    >
                      info@manasflow.com
                    </a>
                  </li>
                  <li>Milan, Italy</li>
                </ul>
              </div>

              <div className="lg:col-span-1">
                <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted/60 mb-8">
                  Legal
                </h3>
                <ul className="space-y-4 font-sans text-muted font-light">
                  <li>
                    <button
                      onClick={() => setActiveModal("privacy")}
                      className="hover:text-on-primary transition-colors duration-300 cursor-pointer text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveModal("terms")}
                      className="hover:text-on-primary transition-colors duration-300 cursor-pointer text-left"
                    >
                      Terms of Service
                    </button>
                  </li>
                </ul>
              </div>

              {/* Empty column for negative space on large screens */}
              <div className="hidden lg:block lg:col-span-1" />

              {/* Technology / Trust signal */}
              <div className="lg:col-span-1">
                <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted/60 mb-8">
                  Technology
                </h3>
                <p className="font-sans text-muted font-light leading-relaxed">
                  Powered by{" "}
                  <span className="text-on-primary font-medium">OpenClaw</span> &{" "}
                  <span className="text-on-primary font-medium">Hermes</span>{" "}
                  architectures. Built for scale, security, and independent
                  execution.
                </p>
              </div>
            </div>

            {/* ── Internal AI Proof ── */}
            <div className="mb-12 font-sans text-xs lg:text-sm font-light text-muted/60 leading-relaxed max-w-3xl">
              Manasflow is powered by Manasflow. Our own lead qualification, client onboarding, and internal project management are entirely automated by our own digital employees.
            </div>

            {/* ── Bottom Bar ── */}
            <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div className="flex flex-col gap-2">
                <p className="font-sans text-xs font-light tracking-wide text-muted/50">
                  © {currentYear} Manasflow. All rights reserved.
                </p>
                <p className="font-sans text-xs font-light tracking-wide text-muted/40">
                  Based in Milan, Italy - Serving Global Clients
                </p>
              </div>
              <div className="font-sans text-xs font-light tracking-widest uppercase text-muted/50">
                Engineered for operations
              </div>
            </div>

            {/* ── Entity-Rich Statement (AEO/SEO) ── */}
            <div className="font-sans text-[11px] font-light text-muted/40 leading-relaxed max-w-5xl">
              Manasflow is an AI automation agency specializing in custom AI agents, RAG-powered data systems, and workflow automation for SME operations managers in the mechanical, electrical, design, real estate, and digital media sectors.
            </div>
          </motion.div>
        </div>
      </footer>

      {/* ── Modals ── */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              variants={modalOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-primary/80 backdrop-blur-md"
              onClick={closeModal}
            />
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-2xl bg-background border border-border p-8 md:p-12 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Close modal"
              >
                <Cross1Icon className="w-5 h-5" aria-hidden="true" />
              </button>

              <h3 className="font-heading text-3xl font-bold text-primary mb-6">
                {activeModal === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>

              <div className="font-sans text-base font-light text-secondary leading-relaxed space-y-6">
                <p>
                  <strong>Effective Date:</strong> January 1, {currentYear}
                </p>
                <p>
                  This is a placeholder for the official {activeModal === "privacy" ? "Privacy Policy" : "Terms of Service"} document. In a production environment, this space will be populated with legally vetted content regarding data processing, user rights, and operational constraints.
                </p>
                <p>
                  Manasflow takes data sovereignty seriously. All AI agents operate within isolated execution environments, ensuring that your proprietary workflows remain strictly confidential and are not utilized for foundational model training.
                </p>
                <p>
                  For any inquiries regarding our compliance standards, please contact our legal team directly at <a href="mailto:legal@manasflow.com" className="text-accent hover:underline">legal@manasflow.com</a>.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
