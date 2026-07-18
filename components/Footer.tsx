"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ManasflowLogo } from "@/components/brand/ManasflowLogo";
import Link from "next/link";

/* ── Types ── */
type ModalType = "privacy" | "terms" | "cookies" | null;

/* ── SVG Icons ── */
function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Nav links ── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

/* ── Animation variants ── */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 28, stiffness: 320 },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 16,
    transition: { duration: 0.18 },
  },
};

/* ── Modal content ── */
const MODAL_CONTENT: Record<
  "privacy" | "terms" | "cookies",
  { title: string; body: string }
> = {
  privacy: {
    title: "Privacy Policy",
    body: "Manasflow collects only the data required to deliver and improve our services. We do not sell, share, or use your data for model training. All personal data is processed in accordance with GDPR and stored within the EU. Contact legal@manasflow.com for inquiries.",
  },
  terms: {
    title: "Terms of Service",
    body: "By engaging with Manasflow, you agree to our service terms. All custom AI agents, workflows, and intellectual property developed under a client engagement remain the exclusive property of the client upon full payment. Manasflow retains the right to reference the engagement type (not proprietary specifics) in marketing materials unless otherwise agreed.",
  },
  cookies: {
    title: "Cookie Policy",
    body: "Manasflow uses only essential cookies required for the site to function. We do not use advertising or tracking cookies. Analytics (PostHog) is configured in privacy-preserving mode with no cross-site tracking. You may disable cookies in your browser at any time without affecting core functionality.",
  },
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const closeModal = () => setActiveModal(null);

  const resolvedFadeUp = {
    ...fadeUpVariants,
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const resolvedModal = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : modalContentVariants;

  return (
    <>
      <footer
        className="bg-primary text-on-primary relative overflow-hidden"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        {/* ── Top gradient hairline separator ── */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-20 pb-0">
          <motion.div
            variants={resolvedFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* ────────────────────────────────────────────────
                MAIN GRID: 4 columns on desktop, stacked on mobile
            ──────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 lg:pb-20">

              {/* ── Column 1: Brand ── */}
              <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
                <ManasflowLogo variant="footer" animated={false} />
                <p className="font-sans text-sm font-light leading-relaxed text-muted/80 max-w-[260px]">
                  AI automation agency for SME operations teams.
                  <br />
                  We build the digital employees your team deserves.
                </p>
                {/* Internal AEO proof */}
                <p className="font-sans text-[11px] font-light leading-relaxed text-muted/45 max-w-[260px]">
                  Manasflow is powered by Manasflow. Our own lead
                  qualification, onboarding, and project management run on
                  our own digital employees.
                </p>
              </div>

              {/* ── Column 2: Navigation ── */}
              <div className="flex flex-col gap-6">
                <p
                  className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted/50"
                  aria-label="Navigation"
                >
                  Navigate
                </p>
                <nav aria-label="Footer navigation">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center py-2 font-sans text-sm font-light text-muted/70 hover:text-on-primary transition-colors duration-200 focus-visible:outline-none focus-visible:text-on-primary min-h-[44px]"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-px left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* ── Column 3: Contact & GEO ── */}
              <div className="flex flex-col gap-6">
                <p
                  className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted/50"
                >
                  Contact
                </p>

                <address className="not-italic flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted/40 font-medium">
                      Email
                    </span>
                    <a
                      href="mailto:info@manasflow.com"
                      className="font-sans text-sm font-light text-muted/70 hover:text-on-primary transition-colors duration-200 focus-visible:outline-none focus-visible:text-on-primary min-h-[44px] inline-flex items-center"
                    >
                      info@manasflow.com
                    </a>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted/40 font-medium">
                      Location
                    </span>
                    <p className="font-sans text-sm font-light text-muted/70 leading-relaxed">
                      Milan, Italy
                      <br />
                      <span className="text-muted/50">
                        Serving global clients
                      </span>
                    </p>
                  </div>
                </address>

                {/* ── LinkedIn ── */}
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted/40 font-medium">
                    Connect
                  </span>
                  <a
                    href="https://linkedin.com/company/manasflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Manasflow on LinkedIn"
                    className="inline-flex items-center gap-2.5 py-2 font-sans text-sm font-light text-muted/70 hover:text-on-primary transition-colors duration-200 focus-visible:outline-none focus-visible:text-on-primary min-h-[44px]"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* ── Column 4: Technology & Trust ── */}
              <div className="flex flex-col gap-6">
                <p
                  className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-muted/50"
                >
                  Technology
                </p>
                <p className="font-sans text-sm font-light text-muted/70 leading-relaxed">
                  Powered by{" "}
                  <span className="text-on-primary font-medium">OpenClaw</span>{" "}
                  &amp;{" "}
                  <span className="text-on-primary font-medium">Hermes</span>{" "}
                  architectures. Integrated with Salesforce, HubSpot, Zapier,
                  Make, and major LLM providers.
                </p>

                <p className="font-sans text-sm font-light text-muted/70 leading-relaxed">
                  <span className="text-on-primary font-medium">
                    Zero-retention LLM APIs.
                  </span>{" "}
                  Your data is never used to train public models.
                </p>

                {/* GEO / entity-rich statement */}
                <p className="font-sans text-[11px] font-light text-muted/40 leading-relaxed">
                  Specialising in AI agents, RAG-powered data systems, and
                  workflow automation for SME operations managers in
                  mechanical, electrical, design, real estate, and digital
                  media sectors.
                </p>
              </div>
            </div>

            {/* ────────────────────────────────────────────────
                BOTTOM BAR: Legal links left | Security statement right
            ──────────────────────────────────────────────── */}
            <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
              {/* Legal links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="font-sans text-xs font-light text-muted/40 whitespace-nowrap">
                  © {currentYear} Manasflow
                </p>
                <div className="flex items-center gap-x-6 flex-wrap gap-y-2">
                  {(["privacy", "terms", "cookies"] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveModal(key)}
                      className="font-sans text-xs font-light text-muted/40 hover:text-on-primary transition-colors duration-200 cursor-pointer min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:text-on-primary capitalize"
                    >
                      {key === "privacy"
                        ? "Privacy Policy"
                        : key === "terms"
                        ? "Terms of Service"
                        : "Cookie Policy"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Security statement */}
              <div className="flex items-center gap-2 text-muted/40">
                <LockIcon className="flex-shrink-0 text-muted/40" />
                <p className="font-sans text-[11px] font-light leading-tight">
                  SOC2 compliant. Zero-retention LLM APIs. Your data stays yours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* ── Modals ── */}
      <AnimatePresence>
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Overlay */}
            <motion.div
              variants={
                shouldReduceMotion ? undefined : modalOverlayVariants
              }
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-primary/80 backdrop-blur-md"
              onClick={closeModal}
            />

            {/* Sheet */}
            <motion.div
              variants={resolvedModal}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full sm:max-w-xl bg-background border border-border p-8 md:p-12 shadow-2xl max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-none"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200 rounded-full focus-visible:outline-2 focus-visible:outline-ring"
                aria-label="Close"
              >
                <Cross1Icon className="w-4 h-4" aria-hidden="true" />
              </button>

              <h3
                id="modal-title"
                className="font-heading text-2xl font-bold text-primary mb-6"
              >
                {MODAL_CONTENT[activeModal].title}
              </h3>

              <div className="font-sans text-base font-light text-secondary leading-relaxed space-y-5">
                <p>
                  <strong className="font-medium text-primary">
                    Effective Date:
                  </strong>{" "}
                  January 1, {currentYear}
                </p>
                <p>{MODAL_CONTENT[activeModal].body}</p>
                <p>
                  For any data or compliance inquiries, contact{" "}
                  <a
                    href="mailto:legal@manasflow.com"
                    className="text-accent hover:underline"
                  >
                    legal@manasflow.com
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
