"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, BarChart3, CalendarDays, GitMerge, MessagesSquare } from "lucide-react";
import { useState } from "react";
import { directing } from "@/lib/content";
import { Reveal } from "@/components/shell/Reveal";
import { SectionHeading } from "@/components/shell/SectionHeading";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/components/shell/useReducedMotionPreference";

const practiceIcons = [MessagesSquare, CalendarDays, Award, BarChart3, GitMerge];

export function DirectingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotionPreference();
  const active = directing.steps[activeIndex];

  return (
    <section id="directing" className="section section-dark grid-texture py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          number="04"
          label="DIRECTING"
          title="Leading innovation"
          lede="Directing is the human part of management: setting direction, allocating responsibility and motivating people to perform. For this project we use an original five-principle method."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Original leadership approach</p>
              <h3 className="display text-glow-red mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">{directing.methodName}</h3>
              <p className="prose-copy mt-6 max-w-xl">{directing.methodIntro}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="chip border-byd-red/40 text-xs text-white/75">Participative</span>
                <span className="chip border-byd-red/40 text-xs text-white/75">Transformational</span>
                <span className="chip border-byd-red/40 text-xs text-white/75">Data-supported</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {directing.steps.map((step, index) => (
                <button
                  key={step.letter}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  aria-label={`${step.letter} — ${step.title}`}
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-xl border font-display text-2xl font-bold transition-all duration-300 sm:text-4xl",
                    activeIndex === index
                      ? "border-byd-red bg-byd-red text-white glow-red"
                      : "border-white/15 bg-white/[0.03] text-white/35 hover:border-byd-red/50 hover:text-white/70",
                  )}
                >
                  {step.letter}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.letter}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              className="panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"
            >
              <div className="flex items-start gap-5">
                <span className="font-display text-[5rem] leading-none text-byd-red/25 sm:text-[7rem]">{active.letter}</span>
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">DRIVE principle</p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">{active.title}</h3>
                </div>
              </div>
              <div className="space-y-6 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Principle</p>
                  <p className="mt-2 text-base leading-relaxed text-white/85">{active.definition}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Applied to the expansion project
                  </p>
                  <p className="mt-2 text-sm leading-[1.85] text-white/60">{active.application}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow">How the team is led</p>
            <h3 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)]">Five management practices</h3>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directing.practices.map((practice, index) => {
              const Icon = practiceIcons[index];
              return (
                <Reveal key={practice.title} delay={index * 0.06}>
                  <div className="panel h-full p-6">
                    <div className="flex items-start justify-between">
                      <Icon size={20} className="text-byd-red" />
                      <span className="font-display text-xs text-white/20">0{index + 1}</span>
                    </div>
                    <h4 className="mt-5 text-sm font-bold uppercase tracking-[0.1em] text-white">{practice.title}</h4>
                    <p className="mt-3 text-sm leading-[1.8] text-white/55">{practice.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
