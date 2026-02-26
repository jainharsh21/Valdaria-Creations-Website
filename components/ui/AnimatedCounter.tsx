"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  theme?: "light" | "dark";
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  theme = "light",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current && ref.current) {
      hasAnimated.current = true;
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 1.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate(v) {
          node.textContent = Math.round(v).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  const isDark = theme === "dark";

  return (
    <div ref={inViewRef} className="flex flex-col items-center gap-1">
      <div className="flex items-baseline gap-0.5">
        <span
          ref={ref}
          className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-gold)]"
          aria-label={`${value}${suffix}`}
        >
          0
        </span>
        <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-gold)]">
          {suffix}
        </span>
      </div>
      <div
        className="w-8 h-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />
      <span
        className={`text-body-md font-medium tracking-wide ${
          isDark ? "text-[var(--color-fog)]" : "text-[var(--color-slate)]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
