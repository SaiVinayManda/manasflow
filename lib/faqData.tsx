import React from "react";

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
  schemaAnswer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "What do you actually build?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We build custom AI integrations that automatically extract, transform, and route data between your existing tools.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Extract unstructured data:</strong> Pull data from emails, PDFs, and forms automatically.</li>
          <li><strong>Transform intelligently:</strong> Clean and standardize data using custom AI logic.</li>
          <li><strong>Route instantly:</strong> Sync data directly to your ERP, CRM, or accounting software without manual input.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow builds custom AI workflows that connect your CRM with other systems, automatically extracting, transforming, and syncing data without manual input.",
  },
  {
    question: "Do I need a technical team?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: Not at all; we handle the full technical build and deliver intuitive solutions that require zero coding from your side.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Zero coding required:</strong> We manage the entire architecture, implementation, and deployment.</li>
          <li><strong>Familiar interfaces:</strong> Solutions are designed to be used via Slack, email, or run silently in the background.</li>
          <li><strong>Full enablement:</strong> We train your operations team on how to use the agents effectively.</li>
        </ul>
      </>
    ),
    schemaAnswer: "No. Manasflow handles the technical implementation and creates solutions your team can use through simple workflows or background automations.",
  },
  {
    question: "Which tools do you integrate with?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We integrate seamlessly with your existing stack, including Salesforce, QuickBooks, Zapier, and custom APIs.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CRMs & ERPs:</strong> Salesforce, HubSpot, Pipedrive, SAP.</li>
          <li><strong>Accounting:</strong> QuickBooks, Xero.</li>
          <li><strong>Automation platforms:</strong> Zapier, Make, n8n.</li>
          <li><strong>Custom systems:</strong> We build direct connections to custom APIs and proprietary databases.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow integrates with Salesforce, HubSpot, QuickBooks, Xero, Zapier, Make, n8n, Slack, and custom APIs and internal systems.",
  },
  {
    question: "What is a custom AI agent?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: An AI agent is an autonomous software worker that monitors triggers, reasons through edge cases, and executes multi-step actions.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Monitors continuously:</strong> Watches for triggers like new emails or submitted forms.</li>
          <li><strong>Reasons logically:</strong> Handles complex edge cases intelligently using LLMs.</li>
          <li><strong>Executes autonomously:</strong> Performs multi-step actions across your connected tools.</li>
          <li><strong>Reports clearly:</strong> Summarizes actions and escalates to a human only when necessary.</li>
        </ul>
      </>
    ),
    schemaAnswer: "A custom AI agent is a software system built to perform specific business tasks autonomously by monitoring triggers, reasoning through edge cases, and executing actions.",
  },
  {
    question: "How do you handle AP/BOM automation?",
    answer: (
      <>
        <p className="font-sans text-sm font-bold text-primary mb-4">
          TL;DR: We use AI vision to extract structured data from complex invoices or engineering documents and format them directly for your systems.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Intelligent Extraction:</strong> Process ECAD files, 2D floor plans, or PDFs accurately using advanced AI vision.</li>
          <li><strong>Automated Matching:</strong> Automatically match invoice line items against your purchase orders.</li>
          <li><strong>System Syncing:</strong> Format and draft the data directly into your inventory, quoting, or accounting systems for quick human review.</li>
        </ul>
      </>
    ),
    schemaAnswer: "Manasflow handles AP and BOM automation by extracting structured data from complex invoices and engineering documents (like ECAD or PDFs) using AI vision, and syncing it directly to inventory, quoting, or accounting systems.",
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
