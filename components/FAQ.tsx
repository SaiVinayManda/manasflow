"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

// The typed data array
type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question:
      "How do I automate manual data entry between my CRM and other tools?",
    answer:
      "Manasflow builds custom AI workflows that connect your CRM with other systems, automatically syncing and updating data without manual input.",
  },
  {
    question: "Can AI handle repetitive admin tasks in my business?",
    answer:
      "Yes. Manasflow creates AI agents that can process emails, extract information, update records, and trigger actions across your tools, acting like a digital employee.",
  },
  {
    question: "How can I use AI in my specific industry?",
    answer:
      "We help operations teams automate lead handling, ECAD file conversions, unstructured data extraction, and complex document workflows using tailored AI integrations.",
  },
  {
    question: "What is a custom AI agent and how does it work?",
    answer:
      "A custom AI agent is a software system built to perform specific business tasks. Manasflow builds these around your actual tools (leveraging frameworks like OpenClaw and Hermes) to execute multi-step workflows.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "No. Manasflow handles the technical implementation and creates solutions your team can use through simple workflows or background automations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD Schema dynamically from the exact same data array
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background">
      {/* ── Inject JSON-LD Safely ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[800px] mx-auto">
        {/* ── Header ── */}
        <div className="mb-16 lg:mb-20 text-center">
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            FAQ
          </p>
          <h2
            className="font-heading font-bold text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Common Questions
          </h2>
        </div>

        {/* ── Accordion List ── */}
        <div className="border-t border-border">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-border">
                <button
                  type="button"
                  className="w-full py-8 lg:py-10 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer"
                  onClick={() => toggleOpen(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary pr-8 group-hover:text-accent transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                    {isOpen ? (
                      <MinusIcon className="w-6 h-6" />
                    ) : (
                      <PlusIcon className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* ── Keep in DOM for crawlability, control visibility with Framer Motion height/opacity ── */}
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="pb-8 lg:pb-10 font-sans text-lg font-light text-secondary leading-relaxed pr-8">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
