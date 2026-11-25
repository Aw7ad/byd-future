"use client";

import { motion } from "framer-motion";
import { duration, easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "./useReducedMotionPreference";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduce = useReducedMotionPreference();

  if (reduce) return <div className={cn(className)}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: duration.reveal, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
