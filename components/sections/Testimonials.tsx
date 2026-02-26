"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="section-pad bg-[var(--color-ink)] relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="text-overline mb-3 block">Client Feedback</span>
          <div className="w-12 h-px bg-[var(--color-gold)] mx-auto mb-5" />
          <h2 className="text-display-lg text-white">What Our Clients Say</h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Large decorative quote */}
            <Quote
              size={96}
              className="absolute -top-4 -left-4 text-[var(--color-gold)] opacity-[0.12] pointer-events-none"
              strokeWidth={1}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="pt-6 px-4 text-center"
              >
                <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-medium text-white leading-relaxed mb-10 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-px bg-[var(--color-gold)]" />
                  <p className="font-semibold text-[var(--color-gold)] tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-body-md text-[var(--color-fog)]">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                className="focus-visible:outline-none"
              >
                <motion.div
                  animate={{
                    width: i === active ? 28 : 8,
                    backgroundColor:
                      i === active
                        ? "var(--color-gold)"
                        : "rgba(255,255,255,0.25)",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-2 rounded-full"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
