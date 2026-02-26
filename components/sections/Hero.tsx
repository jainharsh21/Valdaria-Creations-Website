"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import RevealText from "@/components/ui/RevealText";
import { HERO_STATS } from "@/lib/constants";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bone)] pt-[72px]"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, var(--color-navy) 60px, var(--color-navy) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, var(--color-navy) 60px, var(--color-navy) 61px)",
        }}
      />

      <div className="container-site relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="flex flex-col">
            {/* Gold rule */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 52 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[2px] bg-[var(--color-gold)] mb-6"
            />

            {/* Overline */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="text-overline mb-4"
            >
              Premium Wholesale Solutions
            </motion.span>

            {/* Heading */}
            <h1 className="text-display-xl text-[var(--color-ink)] mb-6">
              <RevealText delay={0.45}>Elevate Your Menswear</RevealText>
              <br />
              <RevealText delay={0.6} className="text-[var(--color-gold)]">
                Collection
              </RevealText>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="text-body-lg text-[var(--color-slate)] mb-8 max-w-lg"
            >
              We provide premium wholesale shirts, trousers, and kurtas crafted
              for the discerning retailer. Sourced directly from our Mumbai
              workshop — quality you can trust, pricing that works for you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.55 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#categories")}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.7rem] font-semibold tracking-widest uppercase bg-[var(--color-gold)] text-[var(--color-ink)] rounded hover:bg-[var(--color-gold-dark)] transition-colors duration-300 focus-visible:outline-none"
              >
                View Collections
                <ArrowRight size={14} strokeWidth={2.5} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#about")}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.7rem] font-semibold tracking-widest uppercase border border-[var(--color-navy)] text-[var(--color-navy)] rounded hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300 focus-visible:outline-none"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {HERO_STATS.map(({ value, suffix, label }) => (
                <AnimatedCounter
                  key={label}
                  value={value}
                  suffix={suffix}
                  label={label}
                />
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative hidden lg:block"
          >
            {/* Decorative frame accent */}
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 rounded-br-sm z-10"
              style={{ borderColor: "var(--color-gold)" }}
            />
            <div
              className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 rounded-tl-sm z-10"
              style={{ borderColor: "var(--color-border)" }}
            />

            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <motion.div style={{ y: imageY }}>
                <Image
                  src="https://img.freepik.com/premium-photo/happy-groom-white-shirt_115318-1443.jpg?w=826"
                  alt="Premium menswear from Valdaria Creation"
                  width={600}
                  height={750}
                  priority
                  className="w-full object-cover"
                  style={{ height: "clamp(480px, 65vh, 700px)" }}
                />
              </motion.div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
