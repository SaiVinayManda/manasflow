"use client";

import Link from "next/link";
import { ManasflowLogo } from "@/components/brand/ManasflowLogo";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "/blog" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center">
          <ManasflowLogo
            variant="navbar"
            className="transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950",
                "dark:text-zinc-400 dark:hover:text-zinc-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium",
              "bg-zinc-950 text-white transition-all hover:bg-zinc-800",
              "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            )}
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
