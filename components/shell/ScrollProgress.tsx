"use client";

import { motion, useScroll } from "framer-motion";

/**
 * A thin orientation cue for the six-section presentation. It is driven
 * directly by scroll position (compositor-only `scaleX`), so it reads as state
 * indication rather than a triggered animation and needs no reduced-motion
 * variant — it never moves on its own.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
      <motion.div className="h-full w-full origin-left bg-byd-red" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
