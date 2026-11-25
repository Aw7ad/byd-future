"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { hero, intro, sources, stats } from "@/lib/content";
import { CountUp } from "@/components/shell/CountUp";
import { Reveal } from "@/components/shell/Reveal";
import { useActiveSection } from "@/components/shell/ActiveSectionProvider";
import { useReducedMotionPreference } from "@/components/shell/useReducedMotionPreference";

export function HomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotionPreference();
  const { goTo } = useActiveSection();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section id="home" ref={sectionRef} className="section section-dark overflow-hidden">
      <div className="relative flex min-h-[100svh] items-center">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { y: parallaxY }}>
          <Image
            src="/images/hero-seal.jpg"
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[55%_center] opacity-60"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,8,0.94)_0%,rgba(5,6,8,0.72)_45%,rgba(5,6,8,0.25)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent"
        />
        <div aria-hidden className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-byd-red/10 blur-[130px]" />

        <div className="section-shell relative z-10 pb-24 pt-32 sm:pb-28">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.34em] text-white/60">
              <span className="h-px w-8 bg-byd-red" aria-hidden />
              {hero.kicker}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="display text-glow-red mt-8 max-w-5xl text-[clamp(2.8rem,9vw,7.2rem)]">
              {hero.titleLead}
              <br />
              <span className="text-byd-red">{hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={0.36}>
            <button type="button" onClick={() => goTo("project")} className="btn-primary mt-10">
              {hero.ctaLabel}
              <ArrowDown size={15} />
            </button>
          </Reveal>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 lg:flex">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-9 w-px bg-gradient-to-b from-white/40 to-transparent" aria-hidden />
        </div>
      </div>

      <div className="grid-texture section-shell grid gap-12 border-t border-white/10 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <Reveal>
          <div>
            <p className="eyebrow">Introduction</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.4rem)]">{intro.heading}</h2>
            <div className="red-rule mt-8" aria-hidden />
          </div>
        </Reveal>
        <div className="space-y-5">
          {intro.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.1}>
              <p className="prose-copy">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {intro.facts.map((fact) => (
                <div key={fact.label} className="panel p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-byd-red">{fact.label}</p>
                  <p className="mt-3 text-sm font-semibold leading-snug text-white">{fact.value}</p>
                  <p className="mt-2 text-xs text-white/45">{fact.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-y border-white/10 bg-[#08090c]/90">
        <div className="section-shell py-16 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">BYD in numbers</p>
                <h2 className="display mt-3 text-[clamp(1.7rem,3.6vw,2.6rem)]">Scale behind the strategy</h2>
              </div>
              <p className="flex items-center gap-2 text-xs text-white/40">
                <MapPin size={13} className="text-byd-red" />
                Shenzhen, China · Founded 1995
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, index) => {
              const source = sources.find((item) => item.id === stat.sourceId);
              return (
                <Reveal key={stat.label} delay={index * 0.07}>
                  <div className="border-l border-white/15 pl-4">
                    <CountUp
                      to={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="display block text-[clamp(1.5rem,3.1vw,2.4rem)] text-white"
                    />
                    <p className="mt-3 text-xs font-medium leading-snug text-white/70">{stat.label}</p>
                    {source && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-white/35 transition hover:text-byd-red"
                      >
                        {stat.year} · source
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                    {stat.note && <p className="mt-2 text-[10px] leading-snug text-white/30">{stat.note}</p>}
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
