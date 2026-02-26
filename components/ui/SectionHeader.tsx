"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  lineExpand,
  viewportOnce,
} from "@/lib/animations";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const align = centered ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col ${align} ${className}`}
    >
      <motion.span
        variants={staggerItem}
        className="text-overline mb-3"
      >
        {subtitle}
      </motion.span>

      <motion.div
        variants={lineExpand}
        className="h-px bg-[var(--color-gold)] mb-5"
        style={{ width: 48 }}
      />

      <motion.h2
        variants={staggerItem}
        className={`text-display-lg mb-4 ${isDark ? "text-white" : "text-[var(--color-navy)]"}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={staggerItem}
          className={`text-body-lg max-w-xl ${isDark ? "text-[var(--color-fog)]" : "text-[var(--color-slate)]"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
