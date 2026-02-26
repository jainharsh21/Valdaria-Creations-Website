"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CATEGORIES } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/animations";

function CategoryCard({
  title,
  count,
  image,
  alt,
  height,
  delay,
}: {
  title: string;
  count: string;
  image: string;
  alt: string;
  height: number;
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className="relative overflow-hidden rounded-sm cursor-pointer group"
      style={{ height }}
    >
      {/* Image with parallax-scale */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-[var(--color-ink)]/30 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-gold)]/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          className="overflow-hidden"
          initial="rest"
          whileHover="hover"
        >
          {/* Count */}
          <motion.p
            className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-gold)] mb-2"
            variants={{ rest: { opacity: 0.7 }, hover: { opacity: 1 } }}
          >
            {count}
          </motion.p>

          {/* Title */}
          <motion.h3
            className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white mb-4"
            variants={{
              rest: { y: 0 },
              hover: { y: -6 },
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {title}
          </motion.h3>

          {/* CTA — slides up on hover */}
          <motion.div
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-widest uppercase text-white border-b border-[var(--color-gold)] pb-0.5 hover:text-[var(--color-gold)] transition-colors duration-200"
            >
              Inquire Now
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Thin gold border on hover */}
      <motion.div
        className="absolute inset-0 rounded-sm border-2 border-[var(--color-gold)]/0 pointer-events-none"
        whileHover={{ borderColor: "rgba(201,169,110,0.5)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function Categories() {
  const [shirts, trousers, kurtas] = CATEGORIES;

  return (
    <section
      id="categories"
      className="section-pad bg-[var(--color-parchment)]"
    >
      <div className="container-site">
        <SectionHeader
          subtitle="Product Categories"
          title="Browse By Category"
          description="Explore our curated collections — each crafted for the modern Indian retailer."
          centered
          className="mb-14"
        />

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Shirts — full height */}
          <CategoryCard
            title={shirts.title}
            count={shirts.count}
            image={shirts.image}
            alt={shirts.alt}
            height={560}
            delay={0}
          />

          {/* Right: Trousers + Kurtas stacked */}
          <div className="flex flex-col gap-6">
            <CategoryCard
              title={trousers.title}
              count={trousers.count}
              image={trousers.image}
              alt={trousers.alt}
              height={264}
              delay={0.1}
            />
            <CategoryCard
              title={kurtas.title}
              count={kurtas.count}
              image={kurtas.image}
              alt={kurtas.alt}
              height={264}
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
