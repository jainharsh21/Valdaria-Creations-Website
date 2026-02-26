"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Medal, Home, Handshake, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ABOUT_FEATURES } from "@/lib/constants";
import {
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  fadeIn,
  viewportOnce,
} from "@/lib/animations";

const iconMap = { Medal, Home, Handshake } as const;

export default function About() {
  return (
    <section id="about" className="section-pad bg-[var(--color-bone)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative hidden lg:block"
          >
            {/* Decorative "1996" watermark */}
            <div
              className="absolute -left-8 -top-6 text-[11rem] font-[family-name:var(--font-display)] font-bold leading-none pointer-events-none select-none z-0"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px var(--color-border)",
                opacity: 0.6,
              }}
            >
              1996
            </div>

            <div className="relative z-10">
              {/* Gold corner accents */}
              <div
                className="absolute -bottom-5 -right-5 w-20 h-20 z-20 pointer-events-none"
                style={{
                  borderBottom: "4px solid var(--color-gold)",
                  borderRight: "4px solid var(--color-gold)",
                }}
              />
              <div
                className="absolute -top-3 -left-3 w-12 h-12 z-20 pointer-events-none"
                style={{
                  borderTop: "2px solid var(--color-border)",
                  borderLeft: "2px solid var(--color-border)",
                }}
              />

              <div className="overflow-hidden rounded-sm">
                <Image
                  src="/about.webp"
                  alt="Skilled tailors at Valdaria Creation workshop in Mumbai"
                  width={580}
                  height={680}
                  className="w-full object-cover"
                  style={{ height: "clamp(420px, 55vh, 620px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-ink)]/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            <SectionHeader
              subtitle="Our Story"
              title="About Valdaria Creation"
              description="Founded in 1996, Valdaria Creation has been at the forefront of premium wholesale menswear for over three decades — blending traditional Indian craftsmanship with modern manufacturing excellence."
              centered={false}
              className="mb-10"
            />

            {/* Feature bullets */}
            <motion.div variants={staggerContainer} className="space-y-6">
              {ABOUT_FEATURES.map((feat) => {
                const Icon = iconMap[feat.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={feat.title}
                    variants={staggerItem}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[var(--color-parchment)] flex items-center justify-center mt-0.5">
                      <Icon
                        size={18}
                        className="text-[var(--color-gold)]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h4 className="text-display-md text-[var(--color-ink)] mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-body-md text-[var(--color-slate)]">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Value proposition chips */}
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                "Flexible MOQ",
                "Direct from Workshop",
                "Trusted Since 1996",
                "Mumbai Based",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] font-semibold tracking-wider uppercase bg-[var(--color-parchment)] text-[var(--color-slate)] rounded-full border border-[var(--color-border)]"
                >
                  <Check size={10} strokeWidth={3} className="text-[var(--color-gold)]" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
