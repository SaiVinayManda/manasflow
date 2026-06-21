"use client";

import { motion } from "framer-motion";
import { StarFilledIcon } from "@radix-ui/react-icons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const testimonials = [
  {
    quote: "Manasflow completely eliminated our manual CRM entry. The autonomous agent updates lead statuses instantly, giving our sales floor back 15 hours a week.",
    name: "Sarah Jenkins",
    title: "VP of Sales",
  },
  {
    quote: "We were drowning in raw PDF invoices. Their vision-language extraction pipeline standardized our accounting data instantly with zero errors.",
    name: "Marcus Lin",
    title: "Operations Director",
  },
  {
    quote: "The multi-agent system they designed acts like a flawless dispatch coordinator. Our technicians arrive fully briefed with exact asset histories.",
    name: "David O'Connor",
    title: "Field Service Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-20 bg-background border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        {/* ── Header ── */}
        <div className="mb-16 lg:mb-24 text-center">
          <p className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Client Success
          </p>
          <h2 className="font-heading font-bold text-primary text-4xl lg:text-5xl leading-[1.05]">
            Unrelenting Efficiency.
          </h2>
        </div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="border border-border bg-on-primary p-10 flex flex-col justify-between group hover:border-accent/30 transition-colors duration-500"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <StarFilledIcon key={i} className="w-4 h-4 text-primary" />
                  ))}
                </div>
                <p className="font-sans text-lg font-light leading-relaxed text-primary mb-12">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <p className="font-sans font-semibold text-primary tracking-wide">
                  {item.name}
                </p>
                <p className="font-sans text-sm font-light text-secondary">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
