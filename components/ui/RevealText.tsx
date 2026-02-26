"use client";

import { motion } from "framer-motion";
import { wordReveal, viewportOnce } from "@/lib/animations";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
}: RevealTextProps) {
  // Normalise to string (trim whitespace from JSX newlines)
  const text = children.toString().trim();
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
      className={`inline ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "bottom" }}
        >
          <motion.span
            variants={wordReveal}
            className="inline-block"
            style={{ paddingRight: "0.25em" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
