"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Crosshair } from "lucide-react";
import { planning } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { Reveal } from "@/components/shell/Reveal";
import { SectionHeading } from "@/components/shell/SectionHeading";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/components/shell/useReducedMotionPreference";

const swotTone: Record<string, string> = {
  red: "border-byd-red/60 bg-byd-red/[0.07]",
  grey: "border-white/15 bg-white/[0.035]",
  white: "border-white/45 bg-white/[0.09]",
  dark: "border-white/10 bg-black/50",
};

export function PlanningSection() {
  const reduce = useReducedMotionPreference();

  return (
    <section id="planning" className="section section-dark grid-texture py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          number="02"
          label="PLANNING"
          title="Analyzing the future"
          lede="Planning turns the project definition into choices. A SWOT analysis maps the internal position against the external environment, then one strategy is selected and translated into actions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {planning.swot.map((quadrant, index) => (
            <Reveal key={quadrant.id} delay={index * 0.08}>
              <div className={cn("h-full rounded-2xl border p-6 sm:p-8", swotTone[quadrant.tone])}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.08em] text-white sm:text-2xl">
                    {quadrant.title}
                  </h3>
                  <span className="font-display text-4xl font-bold leading-none text-white/10">
                    {quadrant.title.charAt(0)}
                  </span>
                </div>
                <div className="red-rule mt-5" aria-hidden />
                <ul className="mt-6 space-y-3">
                  {quadrant.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-byd-red" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-byd-red/40 bg-[linear-gradient(135deg,rgba(230,0,18,0.16),rgba(230,0,18,0.02))] p-7 sm:p-10">
              <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-byd-red/10 blur-3xl" />
              <div className="relative">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">
                  <Crosshair size={14} />
                  Selected strategy
                </p>
                <h3 className="display mt-5 text-[clamp(1.6rem,3.5vw,2.6rem)]">{planning.strategy.name}</h3>
                <p className="prose-copy mt-6">{planning.strategy.rationale}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-[0.1em] text-white">Strategic actions</h3>
              <ol className="mt-6 space-y-0">
                {planning.actions.map((action, index) => (
                  <li key={action} className="flex gap-4 border-b border-white/10 py-4 last:border-b-0">
                    <span className="font-display text-sm font-bold text-byd-red">0{index + 1}</span>
                    <span className="text-sm text-white/75">{action}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Strategy roadmap</p>
                <h3 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)]">From analysis to execution</h3>
              </div>
              <p className="flex items-center gap-2 text-xs text-white/40">
                <ArrowUpRight size={13} className="text-byd-red" />
                Five animated milestones
              </p>
            </div>
          </Reveal>

          <div className="relative mt-12">
            <div aria-hidden className="absolute bottom-5 left-[11px] top-3 w-px bg-white/15 md:bottom-auto md:left-[9%] md:right-[9%] md:top-[11px] md:h-px md:w-auto">
              <motion.div
                className="h-full w-full bg-byd-red"
                style={{ transformOrigin: "top" }}
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: easeOut }}
              />
            </div>
            <div aria-hidden className="absolute left-[9%] right-[9%] top-[11px] hidden h-px bg-white/15 md:block">
              <motion.div
                className="h-full w-full bg-byd-red"
                style={{ transformOrigin: "left" }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: easeOut }}
              />
            </div>

            <ol className="relative grid gap-9 md:grid-cols-5 md:gap-4">
              {planning.roadmap.map((milestone, index) => (
                <motion.li
                  key={milestone.phase}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.14, duration: 0.5 }}
                  className="flex gap-5 md:block md:pr-3"
                >
                  <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-byd-red bg-[#050608] font-display text-[10px] font-bold text-byd-red glow-red">
                    {index + 1}
                  </span>
                  <div className="md:mt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-byd-red">{milestone.phase}</p>
                    <h4 className="mt-2 text-sm font-bold text-white">{milestone.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">{milestone.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
