"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ROICalculator() {
  const [hours, setHours] = useState<number>(40);

  // Calculation: Hours * 4 weeks * $35/hr
  const cost = hours * 4 * 35;

  return (
    <section id="roi-calculator" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border scroll-mt-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl w-full"
        >
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Financial Impact
          </p>
          <h2 className="font-heading font-bold text-primary text-4xl lg:text-5xl leading-[1.1] mb-12">
            Quantify your invisible labor costs.
          </h2>

          <div className="bg-on-primary border border-border p-8 sm:p-12 lg:p-16 mb-8 relative overflow-hidden group">
            {/* ── Background Decoration ── */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            
            <label
              htmlFor="hours-slider"
              className="block font-sans text-lg lg:text-xl font-light text-secondary mb-8"
            >
              Hours spent on manual data entry per week:{" "}
              <span className="font-medium text-primary block sm:inline sm:ml-2 mt-2 sm:mt-0">
                {hours} hrs
              </span>
            </label>

            {/* Custom slider styles utilizing the Tailwind setup */}
            <input
              id="hours-slider"
              type="range"
              min="10"
              max="200"
              step="5"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary mb-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-none"
              aria-label="Hours spent on manual data entry per week"
            />

            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-destructive mb-4">
                Estimated Monthly Financial Leakage
              </p>
              
              <div className="font-heading text-6xl lg:text-8xl font-bold text-primary tracking-tighter tabular-nums mb-6 transition-all duration-300">
                ${cost.toLocaleString()}
              </div>
              
              <p className="font-sans text-sm font-light text-secondary/60 mb-12">
                *Calculated at an industry average of $35/hr.
              </p>

              <a
                href="#lead-chatbot"
                className="inline-flex items-center gap-2 font-sans font-medium text-sm tracking-widest uppercase text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors duration-300 group/cta"
              >
                Stop the leak 
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
