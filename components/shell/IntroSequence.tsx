"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useReducedMotionPreference } from "./useReducedMotionPreference";

type Phase = "idle" | "visible" | "gone";

export function IntroSequence() {
  const reduce = useReducedMotionPreference();
  const [phase, setPhase] = useState<Phase>("idle");

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem("byd-intro-seen", "1");
    } catch {
      // Storage is optional; the intro simply plays again.
    }
    setPhase("gone");
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || prefersReduced) {
      setPhase("gone");
      return;
    }
    try {
      if (sessionStorage.getItem("byd-intro-seen") === "1") {
        setPhase("gone");
        return;
      }
    } catch {
      // Ignore unavailable storage.
    }
    setPhase("visible");
    const timer = window.setTimeout(finish, 4600);
    return () => window.clearTimeout(timer);
  }, [reduce, finish]);

  useEffect(() => {
    if (phase === "visible") document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "visible") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, finish]);

  return (
    <AnimatePresence>
      {phase === "visible" && (
        <motion.div
          role="dialog"
          aria-label="Opening animation"
          onClick={finish}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="fixed inset-0 z-[90] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-black px-6 text-center"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="soft-pulse absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,0,18,0.16),transparent_65%)]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path
                className="energy-line"
                d="M-50 620 C 240 620, 320 430, 560 430 S 900 260, 1260 260"
                fill="none"
                stroke="#e60012"
                strokeWidth="1.2"
                opacity="0.8"
              />
              <path
                className="energy-line"
                style={{ animationDelay: "260ms" }}
                d="M-50 700 C 260 700, 380 520, 600 520 S 940 350, 1260 350"
                fill="none"
                stroke="#e60012"
                strokeWidth="0.8"
                opacity="0.45"
              />
              <path
                className="energy-line"
                style={{ animationDelay: "520ms" }}
                d="M-50 170 C 250 170, 360 330, 620 330 S 940 520, 1260 520"
                fill="none"
                stroke="#e60012"
                strokeWidth="0.8"
                opacity="0.35"
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/byd-logo.svg"
              alt="BYD"
              width={300}
              height={75}
              priority
              unoptimized
              className="glow-red h-auto w-[210px] sm:w-[300px]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="mt-9 text-[10px] font-bold uppercase tracking-[0.42em] text-byd-red"
          >
            Build Your Dreams
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="display text-glow-red mt-5 max-w-4xl text-[clamp(1.8rem,5.5vw,4.2rem)]"
          >
            BYD — Building the future of mobility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.35, duration: 0.8 }}
            className="mt-6 text-sm tracking-[0.14em] text-white/60 sm:text-base"
          >
            Innovation. Technology. Sustainable Mobility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="mt-12 h-px w-40 bg-gradient-to-r from-transparent via-byd-red to-transparent"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              finish();
            }}
            className="absolute bottom-8 rounded-full border border-white/20 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 transition hover:border-byd-red hover:text-white"
          >
            Skip intro · Esc
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
