"use client";

import { motion } from "framer-motion";
import { Link2Icon, ArrowRightIcon, BarChartIcon, LightningBoltIcon, ChatBubbleIcon, ReaderIcon, ArchiveIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const solutions = [
  {
    domain: "Estimating & Sales",
    items: [
      {
        id: "boq",
        title: "BOM & BOQ Takeoffs",
        bottleneck: "Engineers spend hours manually tracing 2D floor plans to count fixtures and materials.",
        solution: "AI vision extracts exact fixture counts and specs directly from PDFs to generate a priced Bill of Materials instantly.",
        tag: "Estimating",
        icon: ReaderIcon,
      },
      {
        id: "crm",
        title: "CRM Data Entry",
        bottleneck: "Sales reps don't update pipeline phases, leading to inaccurate forecasting and lost context.",
        solution: "Voice-to-text agents capture meeting notes, automatically update CRM fields, and draft follow-up emails.",
        tag: "Sales",
        icon: ChatBubbleIcon,
      },
    ]
  },
  {
    domain: "Office Administration",
    items: [
      {
        id: "ap-automation",
        title: "Accounts Payable",
        bottleneck: "Invoices arrive in dozens of formats, requiring manual transcription into the accounting system.",
        solution: "Agents ingest inbox attachments, extract line items, match against POs, and sync directly to QuickBooks or Xero.",
        tag: "Accounting",
        icon: ArchiveIcon,
      },
      {
        id: "reporting",
        title: "Operations Reporting",
        bottleneck: "Managers waste Friday afternoons aggregating data from 5 different tools to build weekly reports.",
        solution: "Scheduled autonomous scripts pull live data from all APIs, run analytics, and drop a formatted summary in Slack.",
        tag: "Reporting",
        icon: BarChartIcon,
      },
    ]
  },
  {
    domain: "Field Service",
    items: [
      {
        id: "dispatch",
        title: "Dispatch & Routing",
        bottleneck: "Coordinators struggle to match technician skills with incoming emergency tickets efficiently.",
        solution: "AI triages incoming tickets by priority and requirement, auto-drafting optimal daily schedules for field teams.",
        tag: "Operations",
        icon: LightningBoltIcon,
      },
      {
        id: "compliance",
        title: "Compliance Checking",
        bottleneck: "Manually cross-referencing completed work orders against safety checklists causes delays.",
        solution: "Automated workflows instantly audit submitted field forms against compliance databases, flagging only missing data.",
        tag: "Compliance",
        icon: Link2Icon,
      },
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function IndustrySolutions() {
  return (
    <section id="industries" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-muted/30 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6"
          >
            Sectors & Use Cases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading font-bold text-primary leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Fixing operational bottlenecks.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-lg lg:text-xl font-light leading-relaxed text-secondary"
          >
            We focus on operations-heavy businesses in construction, MEP, real estate, engineering, and field-service organizations. Here are typical bottlenecks we resolve.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {solutions.map((domain) => (
            <div key={domain.domain} className="flex flex-col gap-8">
              <h3 className="font-heading text-2xl font-bold text-primary border-b border-border pb-4">
                {domain.domain}
              </h3>
              
              <div className="flex flex-col gap-10">
                {domain.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.id} variants={itemVariants} className="group flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-accent" />
                          <h4 className="font-sans font-bold text-lg text-primary">{item.title}</h4>
                        </div>
                        <span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-background border border-border text-secondary rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-3 pl-8 border-l border-border/50">
                        <p className="font-sans text-sm font-medium text-secondary">
                          <span className="text-muted-foreground mr-2">Problem:</span>
                          {item.bottleneck}
                        </p>
                        <p className="font-sans text-sm font-light text-primary bg-background/50 p-4 rounded-sm border border-border/30">
                          <span className="font-medium text-accent block mb-1">Solution:</span>
                          {item.solution}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Routing Link ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <Link
            href="/#lead-chatbot"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm"
          >
            Don&rsquo;t see your specific use case? Describe your workflow to our agent
            <ArrowRightIcon className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
