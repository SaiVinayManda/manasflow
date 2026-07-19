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
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We build custom AI integrations that automatically extract, transform, and route data between your existing tools.
        </p>
        <p className="mb-4">Manasflow builds custom AI workflows that connect your CRM with other systems, eliminating the &ldquo;swivel chair&rdquo; problem by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Extracting</strong> unstructured data from emails or PDFs automatically.</li>
          <li><strong>Transforming</strong> it into clean, standardized formats.</li>
          <li><strong>Routing</strong> it instantly to your ERP, CRM, or accounting software without manual input.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow builds custom AI workflows that connect your CRM with other systems, automatically syncing and updating data without manual input.",
  },
  {
    question: "Can AI handle repetitive admin tasks in my business?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: Yes, our AI agents act as digital employees to handle tasks like invoice parsing, email triage, and reporting.
        </p>
        <p className="mb-4">Manasflow creates AI agents that perform routine operations. Common automations include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Invoice parsing:</strong> Extract line items from any PDF format to sync with accounting.</li>
          <li><strong>Inbox triage:</strong> Classify, tag, and route incoming customer or vendor emails.</li>
          <li><strong>Automated reporting:</strong> Generate weekly ops reports without touching a spreadsheet.</li>
          <li><strong>Record updates:</strong> Keep data synced across CRM, ERP, and databases silently.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Yes. Manasflow creates AI agents that can process emails, extract information, update records, and trigger actions across your tools, acting like a digital employee.",
  },
  {
    question: "How can I use AI in my specific industry?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We build tailored solutions for operational bottlenecks across engineering, real estate, field services, and more.
        </p>
        <p className="mb-4">We target specific operational bottlenecks. Core use cases by sector include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Engineering &amp; Electrical:</strong> ECAD file conversions, BOM generation, compliance tracking.</li>
          <li><strong>Real Estate:</strong> Document extraction, pipeline phase automation, AP processing.</li>
          <li><strong>Field Services:</strong> Dispatch routing, pre-arrival briefs, post-service reporting.</li>
          <li><strong>Operations:</strong> Invoice processing, automated reporting, and intelligent routing.</li>
        </ul>
      </>
    ),
    schemaAnswer: "We help operations teams automate lead handling, ECAD file conversions, unstructured data extraction, and complex document workflows using tailored AI integrations.",
  },
  {
    question: "What tools do you integrate with?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We integrate seamlessly with your existing stack, including Salesforce, QuickBooks, Zapier, and custom APIs.
        </p>
        <p className="mb-4">We integrate with the tools your team already uses — no rip-and-replace required:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CRM:</strong> Salesforce, HubSpot, Pipedrive.</li>
          <li><strong>Accounting:</strong> QuickBooks, Xero, SAP.</li>
          <li><strong>Automation platforms:</strong> Zapier, Make, n8n.</li>
          <li><strong>Communication:</strong> Slack, Microsoft Teams, Gmail.</li>
          <li><strong>ERP &amp; Ops:</strong> Custom APIs, database connectors, and proprietary systems.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow integrates with Salesforce, HubSpot, QuickBooks, Xero, Zapier, Make, Slack, and custom APIs and internal systems.",
  },
  {
    question: "What is a custom AI agent and how does it work?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: An AI agent is an autonomous software worker that monitors triggers, reasons through edge cases, and executes multi-step actions.
        </p>
        <p className="mb-4">A custom AI agent is a software system built to perform specific business tasks autonomously using frameworks like OpenClaw and Hermes. A typical agent:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Monitors</strong> a trigger, such as a received email or submitted form.</li>
          <li><strong>Reasons</strong> through the task, handling edge cases intelligently.</li>
          <li><strong>Executes</strong> multi-step actions across your connected tools.</li>
          <li><strong>Reports back</strong> with a summary or escalates only when needed.</li>
        </ul>
      </>
    ),
    schemaAnswer: "A custom AI agent is a software system built to perform specific business tasks. Manasflow builds these around your actual tools (leveraging frameworks like OpenClaw and Hermes) to execute multi-step workflows.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: Not at all; we handle the full technical build and deliver intuitive solutions that require zero coding.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>No technical background required.</strong></li>
          <li>We handle the entire architecture, implementation, and deployment.</li>
          <li>Solutions are designed to be used via simple interfaces (like Slack or email) or run silently in the background.</li>
        </ul>
      </>
    ),
    schemaAnswer: "No. Manasflow handles the technical implementation and creates solutions your team can use through simple workflows or background automations.",
  },
  {
    question: "What is AP pipeline automation?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: AP pipeline automation replaces manual invoice entry, approval routing, and ERP syncing using custom AI agents.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Extracts data from emailed invoices automatically.</li>
          <li>Matches line items against your purchase orders.</li>
          <li>Drafts the payment entry in your accounting system for quick human review.</li>
        </ul>
      </>
    ),
    schemaAnswer: "AP pipeline automation replaces manual invoice entry, approval routing, and ERP syncing using custom AI agents to extract data, match against POs, and draft entries for human review.",
  },
  {
    question: "What is BOM automation?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: BOM automation extracts structured component lists from complex engineering documents and formats them for your systems.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Processes ECAD files, 2D floor plans, or PDFs using AI vision.</li>
          <li>Extracts every material, component, and specification accurately.</li>
          <li>Formats the data directly into your inventory, quoting, or ERP systems.</li>
        </ul>
      </>
    ),
    schemaAnswer: "BOM automation extracts structured component lists from complex engineering documents like ECAD files or PDFs and formats them directly into inventory or quoting systems.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We use zero-retention LLM APIs and SOC2 compliant infrastructure. Your data is encrypted and never used for model training.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Zero-Retention APIs:</strong> Your data is never stored beyond the request lifecycle or used to train any public models.</li>
          <li><strong>Enterprise Security:</strong> All data is encrypted via TLS 1.3 in transit and AES-256 at rest on secure servers.</li>
          <li><strong>Compliance:</strong> Our systems are built to SOC2 Type II standards and we provide GDPR Article 28 compliant DPAs.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow ensures data security through zero-retention LLM APIs, SOC2 Type II compliant infrastructure, and TLS 1.3 encryption. Your data is never used to train models.",
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
    <section id="faq" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background scroll-mt-20">
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
                  className="w-full py-6 md:py-8 lg:py-10 flex justify-between items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent group cursor-pointer"
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
