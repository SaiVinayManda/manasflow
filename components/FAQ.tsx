"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

import { faqData } from "@/lib/faqData";
import Link from "next/link";

export default function FAQ({ isCompact = false }: { isCompact?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const displayData = isCompact ? faqData.slice(0, 5) : faqData;

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: displayData.map((faq) => ({
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
          {displayData.map((faq, index) => {
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

        {/* ── View Full FAQ Link ── */}
        {isCompact && (
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-wide text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent transition-colors duration-200"
            >
              View full FAQ <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
