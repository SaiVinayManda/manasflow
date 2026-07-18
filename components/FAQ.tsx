"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
  schemaAnswer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How do I automate manual data entry between my CRM and other tools?",
    answer: (
      <>
        <p className="mb-4">Manasflow builds custom AI workflows that connect your CRM with other systems, automatically syncing and updating data without manual input. This eliminates the "swivel chair" problem by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Extracting</strong> unstructured data from emails or PDFs.</li>
          <li><strong>Transforming</strong> it into clean, standardized formats.</li>
          <li><strong>Routing</strong> it instantly to your ERP, CRM, or accounting software.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow builds custom AI workflows that connect your CRM with other systems, automatically syncing and updating data without manual input.",
  },
  {
    question: "Can AI handle repetitive admin tasks in my business?",
    answer: (
      <>
        <p className="mb-4"><strong>Yes.</strong> Manasflow creates AI agents that act like digital employees. They can process emails, extract information, update records, and trigger actions across your tools.</p>
        <p>Common administrative automations include invoice parsing, inbox triage, and automated reporting.</p>
      </>
    ),
    schemaAnswer: "Yes. Manasflow creates AI agents that can process emails, extract information, update records, and trigger actions across your tools, acting like a digital employee.",
  },
  {
    question: "How can I use AI in my specific industry?",
    answer: (
      <>
        <p className="mb-4">We tailor automations to your operational bottlenecks. Our core industry use cases include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Engineering:</strong> ECAD file conversions and automated compliance tracking.</li>
          <li><strong>Real Estate:</strong> Document extraction and pipeline phase automation.</li>
          <li><strong>Operations:</strong> Invoice processing, automated reporting, and intelligent routing.</li>
        </ul>
      </>
    ),
    schemaAnswer: "We help operations teams automate lead handling, ECAD file conversions, unstructured data extraction, and complex document workflows using tailored AI integrations.",
  },
  {
    question: "What is a custom AI agent and how does it work?",
    answer: (
      <>
        <p className="mb-4">A custom AI agent is a software system built to perform specific business tasks. Manasflow builds these around your actual tools (leveraging frameworks like <strong>OpenClaw</strong> and <strong>Hermes</strong>) to execute multi-step workflows.</p>
        <p>They operate independently, reasoning through edge cases, and report back when the task is complete.</p>
      </>
    ),
    schemaAnswer: "A custom AI agent is a software system built to perform specific business tasks. Manasflow builds these around your actual tools (leveraging frameworks like OpenClaw and Hermes) to execute multi-step workflows.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer: (
      <>
        <p><strong>No technical background required.</strong> Manasflow handles the entire technical implementation. We deliver seamless solutions your team can use via simple interfaces (like Slack or email) or as silent background automations.</p>
      </>
    ),
    schemaAnswer: "No. Manasflow handles the technical implementation and creates solutions your team can use through simple workflows or background automations.",
  },
  {
    question: "What is AP pipeline automation?",
    answer: (
      <>
        <p>AP pipeline automation replaces manual invoice entry, approval routing, and ERP syncing. Our custom AI agents extract data from emailed invoices, match them against purchase orders, and draft the payment entry for human review.</p>
      </>
    ),
    schemaAnswer: "AP pipeline automation replaces manual invoice entry, approval routing, and ERP syncing using custom AI agents to extract data, match against POs, and draft entries for human review.",
  },
  {
    question: "What is BOM automation?",
    answer: (
      <>
        <p>BOM (Bill of Materials) automation extracts structured component lists from complex engineering documents, like ECAD files or PDFs, and formats them directly into your inventory or quoting systems.</p>
      </>
    ),
    schemaAnswer: "BOM automation extracts structured component lists from complex engineering documents like ECAD files or PDFs and formats them directly into inventory or quoting systems.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.schemaAnswer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background scroll-mt-20">
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
                  className="w-full py-6 md:py-8 lg:py-10 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer"
                  onClick={() => toggleOpen(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary pr-6 group-hover:text-accent transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 p-2 -mr-2 text-accent group-hover:scale-110 transition-transform duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
                    {isOpen ? (
                      <MinusIcon className="w-6 h-6" />
                    ) : (
                      <PlusIcon className="w-6 h-6" />
                    )}
                  </div>
                </button>

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
                  <div className="pb-8 lg:pb-10 font-sans text-base md:text-lg font-light text-secondary leading-relaxed pr-8">
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
