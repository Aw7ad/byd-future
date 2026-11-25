"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Cpu, Factory, Minus, Plus, Users, Wallet } from "lucide-react";
import { useState } from "react";
import { project } from "@/lib/content";
import { Reveal } from "@/components/shell/Reveal";
import { SectionHeading } from "@/components/shell/SectionHeading";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/components/shell/useReducedMotionPreference";

const iconMap = { users: Users, wallet: Wallet, factory: Factory, cpu: Cpu };

export function ProjectSection() {
  const [openId, setOpenId] = useState<string | null>(project.resources[0].id);
  const reduce = useReducedMotionPreference();

  return (
    <section id="project" className="section section-light grid-texture-light py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          number="01"
          label="PROJECT"
          title="Defining the vision"
          lede="Every management cycle begins with a clear project: what the organization wants to achieve, why it matters, and what it can use to get there."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div className="panel-light p-7 sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">Project definition</p>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-[#111318] sm:text-xl">
                {project.heading}
              </p>
              <div className="hairline my-7" aria-hidden />
              <p className="text-sm leading-[1.85] text-[#111318]/70 sm:text-base">{project.definition}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#111318]">Project objectives</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#111318]/60">{project.objectiveIntro}</p>
              <ul className="mt-6 space-y-3">
                {project.objectives.map((objective, index) => (
                  <motion.li
                    key={objective}
                    initial={reduce ? false : { opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 border-b border-black/10 pb-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-byd-red/10 text-byd-red">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-[#111318]/80">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Project resources</p>
                <h3 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)] text-[#111318]">
                  Four resource categories
                </h3>
              </div>
              <p className="max-w-sm text-sm text-[#111318]/55">
                Select a category to see the concrete resources allocated to the project.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {project.resources.map((resource, index) => {
              const Icon = iconMap[resource.icon];
              const open = openId === resource.id;
              return (
                <Reveal key={resource.id} delay={index * 0.08}>
                  <div className={cn("panel-light overflow-hidden", open && "border-byd-red/40 shadow-[0_24px_60px_-40px_rgba(230,0,18,0.55)]")}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : resource.id)}
                      className="card-interactive flex w-full items-start gap-4 p-6"
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                          open ? "bg-byd-red text-white" : "bg-black/5 text-[#111318]",
                        )}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0 flex-1 text-left">
                        <span className="block text-base font-bold text-[#111318]">{resource.title}</span>
                        <span className="mt-1 block text-sm text-[#111318]/60">{resource.summary}</span>
                      </span>
                      <span className="mt-1 text-byd-red">{open ? <Minus size={16} /> : <Plus size={16} />}</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.32, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="grid gap-2 border-t border-black/10 px-6 pb-6 pt-5 sm:grid-cols-2">
                            {resource.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-[#111318]/75">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-byd-red" aria-hidden />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
