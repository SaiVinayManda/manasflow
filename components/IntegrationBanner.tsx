"use client";

import { motion } from "framer-motion";

const integrations = [
  "Salesforce",
  "HubSpot",
  "Procore",
  "AutoCAD",
  "Microsoft 365",
  "Zapier",
  "Make.com",
];

export default function IntegrationBanner() {
  // We duplicate the array multiple times to ensure a seamless infinite scroll loop
  // across any screen size. Animating to -50% shifts exactly half the array.
  const marqueeItems = [
    ...integrations,
    ...integrations,
    ...integrations,
    ...integrations,
  ];

  return (
    <section className="w-full bg-background border-b border-border/50 py-10 lg:py-16 overflow-hidden relative flex items-center">
      {/* ── Fade masks for clean edges ── */}
      <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-full">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 lg:gap-32 pr-16 lg:pr-32"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 flex-shrink-0">
              {/* Abstract dot marker for visual rhythm */}
              <div className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="font-sans font-semibold tracking-[0.15em] uppercase text-secondary/60 text-sm lg:text-base">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
