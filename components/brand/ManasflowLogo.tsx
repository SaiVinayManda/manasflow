"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  ManasflowLogoMark,
  type ManasflowLogoVariant,
} from "./ManasflowLogoMark";

type ManasflowLogoProps = {
  variant?: ManasflowLogoVariant;
  className?: string;
  textClassName?: string;
  animated?: boolean;
  interactive?: boolean;
  markOnly?: boolean;
  showTagline?: boolean;
  orientation?: "horizontal" | "stacked";
};

const sizeByVariant: Record<ManasflowLogoVariant, number> = {
  navbar: 40,
  hero: 88,
  loader: 44,
  footer: 36,
};

export function ManasflowLogo({
  variant = "navbar",
  className,
  textClassName,
  animated = true,
  interactive,
  markOnly = false,
  showTagline,
  orientation,
}: ManasflowLogoProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseAnimated = animated && !shouldReduceMotion;

  const size = sizeByVariant[variant];
  const resolvedOrientation = orientation ?? "horizontal";
  const resolvedInteractive =
    interactive ?? (variant === "hero" || variant === "navbar");
  const resolvedTagline =
    showTagline ?? (variant === "hero" || variant === "footer");
  const isStacked = resolvedOrientation === "stacked";

  if (markOnly) {
    return (
      <ManasflowLogoMark
        size={size}
        variant={variant}
        animated={animated}
        interactive={resolvedInteractive}
        className={className}
      />
    );
  }

  return (
    <motion.div
      className={cn(
        "inline-flex",
        isStacked ? "flex-col items-center text-center gap-3" : "items-center gap-3",
        className
      )}
      initial={baseAnimated ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <ManasflowLogoMark
        size={size}
        variant={variant}
        animated={animated}
        interactive={resolvedInteractive}
      />

      <motion.div
        className={cn("leading-none", textClassName)}
        initial={baseAnimated ? { opacity: 0, x: 6 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={cn(
            "font-semibold tracking-[-0.04em]",
            variant === "navbar" ? "text-black" : "text-zinc-950 dark:text-zinc-50",
            variant === "hero" && "text-[2rem]",
            variant === "navbar" && "text-[1.35rem]",
            variant === "loader" && "text-[1.15rem]",
            variant === "footer" && "text-[1.1rem]"
          )}
        >
          Manasflow
        </div>

        {resolvedTagline && variant !== "loader" && (
          <motion.div
            className={cn(
              "mt-1 font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400",
              variant === "hero" ? "text-[0.76rem]" : "text-[0.68rem]"
            )}
            initial={baseAnimated ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            AI automation agency
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
