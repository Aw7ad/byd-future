"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { organizing } from "@/lib/content";
import { easeInOut } from "@/lib/motion";
import { Reveal } from "@/components/shell/Reveal";
import { SectionHeading } from "@/components/shell/SectionHeading";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/components/shell/useReducedMotionPreference";

export function OrganizingSection() {
  const [selectedId, setSelectedId] = useState(organizing.departments[0].id);
  const reduce = useReducedMotionPreference();
  const selected = organizing.departments.find((department) => department.id === selectedId);

  return (
    <section id="organizing" className="section section-light grid-texture-light py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          number="03"
          label="ORGANIZING"
          title="Building the structure"
          lede="Organizing converts the plan into a working structure: who does what, who reports to whom, and how the departments coordinate."
        />

        <Reveal>
          <div className="mt-10 flex items-start gap-3 rounded-xl border border-byd-red/30 bg-byd-red/[0.05] p-4 sm:p-5">
            <AlertTriangle size={17} className="mt-0.5 shrink-0 text-byd-red" />
            <p className="text-xs font-medium leading-relaxed text-[#111318]/75 sm:text-sm">{organizing.disclaimer}</p>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <div className="mx-auto max-w-md rounded-2xl border-2 border-byd-red/50 bg-white p-6 text-center shadow-[0_28px_70px_-48px_rgba(230,0,18,0.7)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">Project leadership</p>
              <h3 className="font-display mt-3 text-xl font-bold text-[#111318]">{organizing.director}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#111318]/60">{organizing.directorSummary}</p>
            </div>
          </Reveal>

          <div aria-hidden className="mx-auto hidden h-12 w-full max-w-5xl md:block">
            <svg viewBox="0 0 1000 48" preserveAspectRatio="none" className="h-full w-full">
              <motion.path
                d="M500 0 V24 M100 24 H900 M100 24 V48 M300 24 V48 M500 24 V48 M700 24 V48 M900 24 V48"
                fill="none"
                stroke="#e60012"
                strokeWidth="1.5"
                initial={reduce ? false : { pathLength: 0, opacity: 0.3 }}
                whileInView={{ pathLength: 1, opacity: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0 : 1.1, ease: easeInOut }}
              />
            </svg>
          </div>
          <div aria-hidden className="mx-auto h-8 w-px bg-byd-red/60 md:hidden" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {organizing.departments.map((department, index) => {
              const active = department.id === selectedId;
              return (
                <Reveal key={department.id} delay={index * 0.07}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedId(department.id)}
                    className={cn(
                      "card-interactive panel-light flex h-full w-full flex-col justify-between gap-4 p-5 active:scale-[0.98]",
                      active && "border-byd-red/60 bg-[linear-gradient(150deg,rgba(230,0,18,0.07),#fff)]",
                    )}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-byd-red">
                      0{index + 1}
                    </span>
                    <span className="block text-sm font-bold leading-snug text-[#111318]">{department.name}</span>
                    <span className="flex items-center justify-between text-[11px] text-[#111318]/50">
                      {department.teams.length} teams
                      <ChevronRight size={14} className={active ? "text-byd-red" : "text-[#111318]/30"} />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduce ? 0 : 0.28 }}
                className="panel-light grid gap-6 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">Department selected</p>
                  <h3 className="font-display mt-3 text-2xl font-bold text-[#111318]">{selected.name}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.teams.map((team) => (
                      <span key={team} className="chip border-black/15 text-xs text-[#111318]/70">
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">Responsibilities</p>
                  <p className="mt-3 text-sm leading-[1.85] text-[#111318]/70 sm:text-base">{selected.responsibilities}</p>
                  <div className="hairline my-6" aria-hidden />
                  <p className="text-sm leading-relaxed text-[#111318]/60">{organizing.note}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
