"use client";

import { motion } from "framer-motion";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
            <h2 className="font-heading font-bold text-5xl lg:text-7xl tracking-tight mb-8">
              Manasflow.
            </h2>
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
                    href="mailto:hello@manasflow.com"
                    className="hover:text-on-primary transition-colors duration-300"
                  >
                    hello@manasflow.com
                  </a>
                </li>
                <li>Berlin, Germany</li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted/60 mb-8">
                Legal
              </h3>
              <ul className="space-y-4 font-sans text-muted font-light">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-on-primary transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-on-primary transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
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

          {/* ── Bottom Bar ── */}
          <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <p className="font-sans text-xs font-light tracking-wide text-muted/50">
              © {currentYear} Manasflow. All rights reserved.
            </p>
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
  );
}
