import type { Variants } from "framer-motion";

// Standard viewport settings for scroll triggers
export const viewportOnce = { once: true, amount: 0.15 };

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

// Fade up — body text, descriptions, cards
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

// Fade in — images, overlays
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Slide from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

// Slide from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Scale reveal — stat numbers, icons
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

// Line expand — decorative gold lines
export const lineExpand: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: easeOut, delay: 0.25 },
  },
};

// Word reveal — individual word for RevealText
export const wordReveal: Variants = {
  hidden: { y: "105%" },
  visible: {
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};
