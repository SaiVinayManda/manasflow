"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ManasflowLogo } from "@/components/brand/ManasflowLogo";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center" onClick={closeMenu}>
          <ManasflowLogo
            variant="navbar"
            className="transition-transform duration-200 group-hover:scale-[1.01]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#lead-chatbot"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-on-primary font-sans font-medium text-sm tracking-wide px-8 py-4 transition-all duration-300 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent cursor-pointer"
          >
            Book a consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-40 flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-border/50">
              <Link href="/" className="group inline-flex items-center" onClick={closeMenu}>
                <ManasflowLogo variant="navbar" />
              </Link>
              <button
                className="p-2 -mr-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <Cross1Icon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col items-start space-y-6 pt-24 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-2xl font-heading font-medium text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/#lead-chatbot"
                  onClick={closeMenu}
                  className="group inline-flex items-center justify-center gap-3 bg-accent text-on-primary font-sans font-medium text-sm tracking-wide px-8 py-4 transition-all duration-300 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent cursor-pointer"
                >
                  Book a consultation
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
