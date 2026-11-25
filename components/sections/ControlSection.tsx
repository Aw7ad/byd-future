"use client";

import { motion } from "framer-motion";
import { Activity, Info } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { control } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { Reveal } from "@/components/shell/Reveal";
import { SectionHeading } from "@/components/shell/SectionHeading";
import { useReducedMotionPreference } from "@/components/shell/useReducedMotionPreference";

const chartData = control.kpis.map((kpi) => ({
  name: kpi.short,
  target: kpi.target,
  current: kpi.current,
}));

export function ControlSection() {
  const reduce = useReducedMotionPreference();

  return (
    <section id="control" className="section section-light grid-texture-light py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          number="05"
          label="CONTROL"
          title="Measuring performance"
          lede={control.intro}
        />

        <div className="mt-14">
          <Reveal>
            <p className="eyebrow">Control periods</p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {control.periods.map((period, index) => (
              <Reveal key={period.name} delay={index * 0.08}>
                <div className="panel-light relative h-full overflow-hidden p-6 sm:p-7">
                  <span className="absolute right-5 top-4 font-display text-5xl font-bold text-black/[0.045]">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-byd-red" aria-hidden />
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">
                      {period.focus}
                    </p>
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-bold text-[#111318]">{period.name}</h3>
                  <ul className="mt-5 space-y-2 border-t border-black/10 pt-5">
                    {period.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#111318]/65">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-byd-red" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Key performance indicators</p>
                <h3 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)] text-[#111318]">
                  Seven measures, one feedback loop
                </h3>
              </div>
              <p className="flex max-w-sm items-start gap-2 text-xs leading-relaxed text-[#111318]/50">
                <Info size={15} className="mt-0.5 shrink-0 text-byd-red" />
                All target and current values below are illustrative sample data for this academic project, configurable
                in <code className="text-[#111318]/75">lib/content.ts</code>. They are not BYD company figures.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {control.kpis.map((kpi, index) => {
              const percentage = Math.min(Math.round((kpi.current / kpi.target) * 100), 100);
              return (
                <Reveal key={kpi.id} delay={(index % 4) * 0.06}>
                  <div className="panel-light flex h-full flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#111318]">{kpi.name}</h4>
                      <span className="rounded-full bg-byd-red/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-byd-red">
                        Sample
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#111318]/55">{kpi.definition}</p>
                    <div className="mt-auto pt-6">
                      <div className="flex items-baseline justify-between">
                        <span className="font-display text-2xl font-bold text-[#111318]">
                          {kpi.current}
                          <span className="text-sm text-[#111318]/45">{kpi.unit}</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.12em] text-[#111318]/45">
                          target {kpi.target}
                          {kpi.unit}
                        </span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={`${kpi.name} progress toward illustrative target`}
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/10"
                      >
                        <motion.div
                          className="h-full w-full origin-left rounded-full bg-byd-red"
                          initial={reduce ? false : { scaleX: 0 }}
                          whileInView={{ scaleX: percentage / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: reduce ? 0 : 1, delay: index * 0.04, ease: easeOut }}
                        />
                      </div>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#111318]/40">
                        {kpi.period} review
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <Reveal>
            <div className="panel-light p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Activity size={18} className="text-byd-red" />
                  <h4 className="font-display text-lg font-bold text-[#111318]">Target vs. current position</h4>
                </div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#111318]/40">Illustrative sample data</p>
              </div>
              <div className="mt-6 h-[300px] w-full sm:h-[340px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 8, right: 8, left: -22, bottom: 0 }} barGap={4}>
                    <CartesianGrid stroke="#11131812" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#11131899" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "#11131899" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      cursor={{ fill: "rgba(230,0,18,0.05)" }}
                      contentStyle={{ border: "1px solid #e6001233", borderRadius: 12, fontSize: 12 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
                    <Bar dataKey="target" name="Illustrative target" fill="#e60012" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="current" name="Sample current" fill="#9aa0a6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 rounded-2xl border-l-2 border-byd-red bg-white p-7 sm:p-9">
            <p className="eyebrow">From measurement to action</p>
            <p className="mt-4 text-sm leading-[1.9] text-[#111318]/70 sm:text-base">{control.correctiveAction}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
