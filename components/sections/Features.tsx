"use client";

import { motion } from "framer-motion";
import { Shirt, Truck, Tag, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const iconMap = {
  Shirt,
  Truck,
  Tag,
} as const;

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[var(--color-bone)]">
      <div className="container-site">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The Valdaria Advantage"
          description="Exceptional wholesale solutions built on three decades of expertise in premium Indian menswear."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative group bg-white rounded-sm p-8 border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:shadow-[0_20px_50px_rgba(28,43,58,0.1)] transition-all duration-400"
              >

                {/* Sweep shine on hover */}
                <div className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--color-gold)]/6 to-transparent skew-x-[-15deg]"
                  />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-ink)] rounded-sm mb-6">
                  <Icon size={20} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                </div>

                <h3 className="text-display-md text-[var(--color-ink)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-md text-[var(--color-slate)] mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <motion.a
                  href={feature.cta.href}
                  className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest uppercase text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] focus-visible:outline-none"
                >
                  {feature.cta.label}
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </motion.span>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
