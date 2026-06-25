"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export type ManasflowLogoVariant = "navbar" | "hero" | "loader" | "footer";

type ManasflowLogoMarkProps = {
  size?: number;
  className?: string;
  interactive?: boolean;
  animated?: boolean;
  title?: string;
  variant?: ManasflowLogoVariant;
};

const pathTransition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
};

const variantConfig: Record<
  ManasflowLogoVariant,
  {
    flowDuration: number;
    pulseDuration: number;
    hoverScale: number;
    glowStrength: number;
    tiltX: number;
    tiltY: number;
  }
> = {
  navbar: {
    flowDuration: 3.4,
    pulseDuration: 2.4,
    hoverScale: 1.02,
    glowStrength: 0.12,
    tiltX: -4,
    tiltY: 4,
  },
  hero: {
    flowDuration: 2.4,
    pulseDuration: 1.8,
    hoverScale: 1.04,
    glowStrength: 0.2,
    tiltX: -7,
    tiltY: 7,
  },
  loader: {
    flowDuration: 1.8,
    pulseDuration: 1.35,
    hoverScale: 1,
    glowStrength: 0.18,
    tiltX: 0,
    tiltY: 0,
  },
  footer: {
    flowDuration: 3.8,
    pulseDuration: 2.6,
    hoverScale: 1.01,
    glowStrength: 0.1,
    tiltX: -3,
    tiltY: 3,
  },
};

export function ManasflowLogoMark({
  size = 64,
  className,
  interactive = true,
  animated = true,
  title = "Manasflow logo mark",
  variant = "navbar",
}: ManasflowLogoMarkProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = React.useState(false);

  const cfg = variantConfig[variant];
  const baseAnimated = animated && !shouldReduceMotion;
  const canHover = interactive && variant !== "loader";

  return (
    <motion.div
      className={cn("shrink-0", className)}
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => canHover && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={
        canHover && baseAnimated
          ? {
              rotateX: cfg.tiltX,
              rotateY: cfg.tiltY,
              scale: cfg.hoverScale,
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 18,
        mass: 0.8,
      }}
      aria-label={title}
    >
      <svg
        viewBox="0 0 220 160"
        width="100%"
        height="100%"
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        style={{
          filter: hovered
            ? `drop-shadow(0 10px 28px rgba(34,211,238,${cfg.glowStrength + 0.08}))`
            : "none",
        }}
      >
        <defs>
          <linearGradient
            id={`mf-accent-${variant}`}
            x1="30"
            y1="40"
            x2="180"
            y2="130"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="55%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          <filter id={`mf-glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g style={{ transformOrigin: "110px 80px" }}>
          <motion.path
            d="M 20 110 L 30 110 A 20 20 0 0 0 50 90 A 20 20 0 0 1 70 70 A 20 20 0 0 1 90 90 A 20 20 0 0 0 110 110 A 20 20 0 0 0 130 90 A 20 20 0 0 1 150 70 A 20 20 0 0 1 170 90 A 20 20 0 0 0 190 110 L 200 110"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={baseAnimated ? { pathLength: 0, opacity: 0.9 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ ...pathTransition, delay: 0 }}
          />

          {[
            { d: "M 20 110 L 30 110 A 20 20 0 0 0 50 90 A 20 20 0 0 1 70 70", delay: 0.08 },
            { d: "M 70 70 A 20 20 0 0 1 90 90 A 20 20 0 0 0 110 110", delay: 0.18 },
            { d: "M 110 110 A 20 20 0 0 0 130 90 A 20 20 0 0 1 150 70", delay: 0.28 },
            { d: "M 150 70 A 20 20 0 0 1 170 90 A 20 20 0 0 0 190 110 L 200 110", delay: 0.38 },
          ].map((flow, i) => (
            <motion.path
              key={i}
              d={flow.d}
              fill="none"
              stroke={`url(#mf-accent-${variant})`}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#mf-glow-${variant})`}
              initial={
                baseAnimated
                  ? { pathLength: 0.18, pathOffset: 1, opacity: 0 }
                  : { pathLength: 0.18, pathOffset: 0, opacity: 0.55 }
              }
              animate={
                baseAnimated
                  ? { pathOffset: [1, 0, -1], opacity: [0, 0.92, 0] }
                  : { pathOffset: 0, opacity: 0.55 }
              }
              transition={
                baseAnimated
                  ? {
                      duration: hovered ? Math.max(1.4, cfg.flowDuration - 0.5) : cfg.flowDuration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: flow.delay,
                    }
                  : undefined
              }
            />
          ))}

          {[
            { cx: 70, cy: 70, delay: 0.12, accent: false },
            { cx: 110, cy: 110, delay: 0.42, accent: false },
            { cx: 150, cy: 70, delay: 0.72, accent: false },
            { cx: 200, cy: 110, delay: 1.02, accent: true },
          ].map((node, i) => (
            <React.Fragment key={i}>
              {!node.accent && (
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="10"
                  fill="#22d3ee"
                  filter={`url(#mf-glow-${variant})`}
                  initial={baseAnimated ? { scale: 0.9, opacity: 0.1 } : { scale: 1, opacity: cfg.glowStrength }}
                  animate={
                    baseAnimated
                      ? {
                          scale: [0.9, hovered ? 1.58 : 1.45, 1],
                          opacity: [0.1, hovered ? cfg.glowStrength + 0.14 : cfg.glowStrength, 0.12],
                        }
                      : { scale: 1, opacity: cfg.glowStrength }
                  }
                  transition={
                    baseAnimated
                      ? {
                          duration: hovered ? Math.max(1.15, cfg.pulseDuration - 0.2) : cfg.pulseDuration,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: node.delay,
                        }
                      : undefined
                  }
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
              )}

              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.accent ? 5.5 : 6}
                fill={node.accent ? "#22d3ee" : "currentColor"}
                animate={
                  baseAnimated
                    ? { scale: [1, hovered ? 1.34 : 1.24, 1] }
                    : { scale: 1 }
                }
                transition={
                  baseAnimated
                    ? {
                        duration: hovered ? Math.max(1.15, cfg.pulseDuration - 0.2) : cfg.pulseDuration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: node.delay,
                      }
                    : undefined
                }
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              />
            </React.Fragment>
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
