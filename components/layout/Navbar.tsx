"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { X, Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
  });

  function handleNavClick(href: string) {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-[var(--color-gold)]"
        style={{ scaleX }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled
            ? "rgba(245,243,239,0.97)"
            : "rgba(245,243,239,0)",
          boxShadow: scrolled
            ? "0 1px 0 0 rgba(221,217,208,0.6)"
            : "0 0 0 0 transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <nav className="container-site flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="focus-visible:outline-none"
          >
            <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-ink)]">
              Valdaria{" "}
              <span className="font-light text-[var(--color-gold)]">
                Creation
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => {
                    setActiveLink(href);
                    handleNavClick(href);
                  }}
                  onMouseEnter={() => setActiveLink(href)}
                  onMouseLeave={() => setActiveLink(null)}
                  className="relative px-4 py-2 text-[0.75rem] font-semibold tracking-widest uppercase text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none"
                >
                  {label}
                  <AnimatePresence>
                    {activeLink === href && (
                      <motion.span
                        layoutId="nav-underline"
                        key="underline"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[var(--color-gold)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:inline-flex items-center px-6 py-2.5 text-[0.7rem] font-semibold tracking-widest uppercase border border-[var(--color-gold)] text-[var(--color-gold)] rounded hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
          >
            Contact Us
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-ink)] focus-visible:outline-none"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] bg-[var(--color-ink)]/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-[min(85vw,360px)] bg-[var(--color-bone)] flex flex-col"
            >
              <div className="flex items-center justify-between px-8 h-[72px] border-b border-[var(--color-border)]">
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                  Valdaria{" "}
                  <span className="font-light text-[var(--color-gold)]">
                    Creation
                  </span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-[var(--color-slate)] focus-visible:outline-none"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    onClick={() => handleNavClick(href)}
                    className="text-left py-4 text-xl font-[family-name:var(--font-display)] font-medium text-[var(--color-navy)] border-b border-[var(--color-border)] hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none"
                  >
                    {label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: NAV_LINKS.length * 0.06 + 0.1,
                  }}
                  onClick={() => handleNavClick("#contact")}
                  className="mt-8 w-full py-3 text-[0.7rem] font-semibold tracking-widest uppercase bg-[var(--color-gold)] text-[var(--color-ink)] rounded hover:bg-[var(--color-gold-dark)] transition-colors duration-300 focus-visible:outline-none"
                >
                  Contact Us
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
