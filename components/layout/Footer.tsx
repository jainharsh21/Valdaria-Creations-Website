"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FOOTER_COLUMNS, CONTACT_INFO } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="container-site py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand column */}
          <motion.div variants={staggerItem}>
            <Link
              href="#home"
              className="inline-block mb-5 focus-visible:outline-none"
            >
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Valdaria{" "}
                <span className="font-light text-[var(--color-gold)]">
                  Creation
                </span>
              </span>
            </Link>
            <p className="text-body-md text-[var(--color-fog)] leading-relaxed mb-6 max-w-xs">
              Your trusted partner for premium wholesale menswear. Quality
              craftsmanship since 1996.
            </p>
            <div className="space-y-1.5">
              <p className="text-[0.875rem] text-[var(--color-fog)]">
                {CONTACT_INFO.email}
              </p>
              <p className="text-[0.875rem] text-[var(--color-fog)]">
                {CONTACT_INFO.phone}
              </p>
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <motion.div key={col.title} variants={staggerItem}>
              <h4 className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold)] mb-5 flex items-center gap-3">
                <span className="w-1 h-5 bg-[var(--color-gold)] rounded-sm" />
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      whileHover={{ x: 4, color: "var(--color-gold)" }}
                      transition={{ duration: 0.15 }}
                      className="text-body-md text-[var(--color-fog)] hover:text-[var(--color-gold)] transition-colors duration-200 inline-block focus-visible:outline-none"
                    >
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.875rem] text-white/40">
            &copy; {new Date().getFullYear()} Valdaria Creation. All Rights Reserved.
          </p>
          <p className="text-[0.875rem] text-white/40">
            Made with ♥ by{" "}
            <a
              href="https://www.linkedin.com/in/jainharsh21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-gold)] hover:underline"
            >
              Harsh Jain
            </a>
          </p>
          <p className="text-[0.875rem] text-white/30">
            Premium Wholesale Menswear · Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
