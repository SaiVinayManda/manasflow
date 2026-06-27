"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FileTextIcon,
  ClipboardIcon,
  GearIcon,
  CubeIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/cn";

type SolutionItem = {
  bottleneck: string;
  solution: string;
};

type CategoryData = {
  id: string;
  title: string;
  icon: React.ElementType;
  items: SolutionItem[];
};

const solutionsData: CategoryData[] = [
  {
    id: "estimating",
    title: "Estimating & Sales",
    icon: FileTextIcon,
    items: [
      {
        bottleneck: "Manual BOM creation from PDFs.",
        solution:
          "Estimating: AI instantly translates 2D floor plans into line-by-line Bill of Materials, cross-referencing live supplier pricing to eliminate bidding delays.",
      },
      {
        bottleneck: "Pricing volatility and manual supplier cross-referencing.",
        solution:
          "Sales: Automated bots continuously monitor supplier catalogs, dynamically adjusting your quotes to protect profit margins against sudden material cost spikes.",
      },
      {
        bottleneck: "Repetitive scope-of-work drafting.",
        solution:
          "Client Onboarding: LLMs generate comprehensive, highly-detailed scope-of-work documents automatically from rough meeting notes or transcribed discovery calls.",
      },
      {
        bottleneck: "Delayed follow-ups and slow lead qualification.",
        solution:
          "Lead Qualification: Custom AI chatbots instantly engage prospects 24/7, aggressively pre-qualifying leads and booking consultations before competitors respond.",
      },
      {
        bottleneck:
          "Manual recalculation of parameters on design changes.",
        solution:
          "Design Tweaks: Intelligent workflows automatically cascade parameter recalculations (like cable lengths and conduit sizing) the second a design spec changes.",
      },
    ],
  },
  {
    id: "admin",
    title: "Office Administration",
    icon: ClipboardIcon,
    items: [
      {
        bottleneck: "The \"swivel chair\" problem across CRM, ERP, and accounting.",
        solution:
          "System Sync: Background AI agents act as the missing bridge between your disconnected software, eliminating manual data entry across platforms.",
      },
      {
        bottleneck: "Unstructured PDF invoice extraction.",
        solution:
          "Invoicing: Vision-language models intelligently extract line items from messy, unstructured PDF invoices, pushing pristine data straight into your accounting ledger.",
      },
      {
        bottleneck: "Email triage and routing.",
        solution:
          "Inbox Management: Natural language processing classifies, tags, and routes incoming operational emails to the correct department instantly, stripping out noise.",
      },
      {
        bottleneck: "Digitizing field notes.",
        solution:
          "Field-to-Office: Transcription bots convert rushed, messy voice memos from technicians into structured text, instantly updating the central CRM records.",
      },
      {
        bottleneck: "Payroll reconciliation against project hours.",
        solution:
          "Payroll: Logic engines cross-reference timesheets against GPS pings and project hours, automatically surfacing anomalies for review before payroll runs.",
      },
    ],
  },
  {
    id: "field",
    title: "Field Service Execution",
    icon: GearIcon,
    items: [
      {
        bottleneck: "Digging through massive PDF manuals for schematics/error codes.",
        solution:
          "Knowledge Retrieval: RAG-powered data systems allow field technicians to query massive PDF equipment manuals via natural chat, surfacing exact schematics instantly.",
      },
      {
        bottleneck: "Blind dispatching without factoring certifications or truck tools.",
        solution:
          "Dispatch: Algorithmic routing pairs the exact job requirements against technician certifications, current location, and truck inventory, eliminating wasted trips.",
      },
      {
        bottleneck: "Missing service history on site.",
        solution:
          "Context: Automated pre-arrival briefs text technicians the entire equipment service history and previous parts used before they pull into the driveway.",
      },
      {
        bottleneck: "Tedious post-service compliance reports.",
        solution:
          "Reporting: Voice-to-text AI structures technician field narratives into perfectly formatted compliance reports the moment they jump back in the truck.",
      },
      {
        bottleneck: "Language barriers on technical documents.",
        solution:
          "Documentation: Instant, highly-accurate AI translation converts manufacturer specifications into the technician's native language on the fly.",
      },
    ],
  },
  {
    id: "supply",
    title: "Supply Chain Management",
    icon: CubeIcon,
    items: [
      {
        bottleneck: "Reactive reordering causing delays.",
        solution:
          "Purchasing: Predictive AI monitors your current burn rate and upcoming project pipelines, triggering purchase orders before you hit stockouts.",
      },
      {
        bottleneck: "Missing specialized assets/tools across sites.",
        solution:
          "Asset Tracking: Automated workflows track high-value specialized tools across sites, instantly notifying project managers of equipment hoarding.",
      },
      {
        bottleneck: "Subcontractor delivery miscommunications.",
        solution:
          "Logistics: SMS bots automatically ping subcontractors for delivery confirmations, updating the central project timeline without anyone making a phone call.",
      },
      {
        bottleneck: "Manual inventory reconciliation.",
        solution:
          "Auditing: AI agents cross-reference warehouse intake receipts against original POs, instantly flagging discrepancies in quantity or pricing.",
      },
      {
        bottleneck: "Manual WIP spreadsheet updates.",
        solution:
          "Visibility: Real-time API integrations feed a live master dashboard, replacing fragile, manually-updated Work-in-Progress spreadsheets entirely.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Compliance",
    icon: LightningBoltIcon,
    items: [
      {
        bottleneck: "Invisible manual labor tracking.",
        solution:
          "Labor Tracking: Automated badge-scanning and digital workflows track exact labor hours per production phase, exposing hidden inefficiencies.",
      },
      {
        bottleneck: "Reactive instead of predictive maintenance.",
        solution:
          "Preventative Maintenance: IoT and AI integrations monitor equipment performance anomalies, scheduling maintenance windows before catastrophic failures occur.",
      },
      {
        bottleneck: "Siloed handoffs causing lost specs.",
        solution:
          "Project Handoffs: Intelligent automation instantly generates and distributes standardized spec sheets to the production floor the moment a design is approved.",
      },
      {
        bottleneck: "Compliance tracking via chaotic spreadsheets.",
        solution:
          "Compliance: AI continuously monitors incoming regulatory updates and cross-references them against your active production SOPs, flagging necessary adjustments.",
      },
      {
        bottleneck: "Manual redrawing of electrical layouts on component changes.",
        solution:
          "Engineering Updates: Parametric design scripts automatically cascade component swaps throughout the entire layout, eliminating tedious manual redrawing.",
      },
    ],
  },
];

const SolutionCard = ({ item }: { item: SolutionItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border bg-on-primary p-6 md:p-8 lg:p-10 flex flex-col gap-4 group hover:border-accent/50 transition-colors duration-300">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-destructive/80" />
        <div>
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-secondary mb-2">
            The Bottleneck
          </p>
          <p className="font-sans text-base md:text-lg font-light text-primary leading-relaxed">
            {item.bottleneck}
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-border/50 my-2" />

      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-accent" />
        <div className="flex-1">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            Manasflow AI Solution
          </p>
          <p className={cn("font-sans text-base md:text-lg font-medium text-primary leading-relaxed", !isExpanded && "line-clamp-3 md:line-clamp-none")}>
            {item.solution}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm font-medium text-accent md:hidden hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState<string>(solutionsData[0].id);
  const shouldReduceMotion = useReducedMotion();

  const activeCategory =
    solutionsData.find((cat) => cat.id === activeTab) || solutionsData[0];

  return (
    <section id="solutions" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        {/* ── Header ── */}
        <div className="mb-16 lg:mb-24">
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Industry Solutions
          </p>
          <h2
            className="font-heading font-bold text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Built for operations.
            <br />
            Tailored to your sector.
          </h2>
        </div>

        {/* ── Layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* ── Sidebar Tabs ── */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col gap-2">
            {solutionsData.map((category) => {
              const isActive = activeTab === category.id;
              const Icon = category.icon;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`group flex items-center gap-4 w-full text-left px-6 py-5 border-l-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-accent bg-on-primary shadow-sm"
                      : "border-transparent hover:border-border hover:bg-muted/50"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon
                    aria-hidden="true"
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-secondary group-hover:text-primary"
                    }`}
                  />
                  <span
                    className={`font-sans font-medium text-base tracking-wide transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-secondary group-hover:text-primary"
                    }`}
                  >
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Content Area ── */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="flex flex-col gap-6"
              >
                {activeCategory.items.map((item, idx) => (
                  <SolutionCard key={idx} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
