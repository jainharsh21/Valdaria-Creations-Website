"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
}

const base =
  "inline-flex items-center gap-2 font-semibold tracking-wide uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-dark)] hover:text-white",
  outline:
    "border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)]",
  ghost:
    "text-[var(--color-navy)] hover:text-[var(--color-gold)] underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[0.65rem] rounded",
  md: "px-7 py-3 text-[0.7rem] rounded",
  lg: "px-9 py-4 text-[0.75rem] rounded",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
