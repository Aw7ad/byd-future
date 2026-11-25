"use client";

import Image from "next/image";
import { ArrowRight, ArrowUp } from "lucide-react";
import { conclusion, sections } from "@/lib/content";
import { Reveal } from "@/components/shell/Reveal";
import { Sources } from "@/components/shell/Sources";
import { useActiveSection } from "@/components/shell/ActiveSectionProvider";

export function ConclusionSection() {
  const { goTo } = useActiveSection();

  return (
    <section id="conclusion" className="section section-dark overflow-hidden">
      <div className="relative flex min-h-[92svh] items-center py-28">
        <Image
          src="/images/closing-atto3.jpg"
          alt={conclusion.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-[60%_center] opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.92)_0%,rgba(5,6,8,0.72)_45%,rgba(5,6,8,0.97)_100%)]"
        />
        <div aria-hidden className="absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-byd-red/10 blur-[140px]" />

        <div className="section-shell relative z-10">
          <Reveal>
            <p className="eyebrow">06 / Conclusion</p>
            <h2 className="display text-glow-red mt-5 max-w-4xl text-[clamp(2.3rem,7vw,5.5rem)]">
              {conclusion.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="prose-copy mt-7 max-w-2xl">{conclusion.intro}</p>
          </Reveal>

          <ol className="mt-12 grid gap-x-10 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-5">
            {conclusion.links.map((link, index) => (
              <Reveal key={link.function} delay={index * 0.07}>
                <li className="flex gap-3 border-b border-white/10 py-5">
                  <span className="font-display text-xs font-bold text-byd-red">0{index + 1}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">{link.function}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/55">{link.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.25}>
            <div className="mt-16 flex flex-wrap items-center gap-6">
              <button type="button" onClick={() => goTo("home")} className="btn-ghost">
                <ArrowUp size={14} />
                Back to start
              </button>
              <span className="hidden h-px flex-1 bg-white/10 sm:block" aria-hidden />
              <p className="font-display text-[clamp(1.2rem,2.6vw,2rem)] font-bold uppercase tracking-[-0.02em] text-white">
                {conclusion.finalLine}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/60">
        <div className="section-shell py-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/images/byd-logo.svg" alt="BYD" width={84} height={21} unoptimized className="h-auto w-[84px]" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">Management presentation</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
              {sections.length} sections · Project · Planning · Organizing · Directing · Control
            </p>
          </div>
          <div className="mt-10">
            <Sources />
          </div>
          <button
            type="button"
            onClick={() => goTo("project")}
            className="mt-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-byd-red"
          >
            Revisit the project
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
