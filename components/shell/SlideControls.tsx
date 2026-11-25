"use client";

import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sections } from "@/lib/content";
import { useActiveSection } from "./ActiveSectionProvider";

export function SlideControls() {
  const { activeId, goTo } = useActiveSection();
  const index = Math.max(0, sections.findIndex((section) => section.id === activeId));
  const previous = sections[index - 1];
  const next = sections[index + 1];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, button, a, [contenteditable='true']")) return;

      if (event.key === "ArrowLeft" && previous) {
        event.preventDefault();
        goTo(previous.id);
      }
      if (event.key === "ArrowRight" && next) {
        event.preventDefault();
        goTo(next.id);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previous, next, goTo]);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex items-center gap-2 sm:bottom-7 sm:right-7">
      <button
        type="button"
        onClick={() => previous && goTo(previous.id)}
        disabled={!previous}
        aria-label={previous ? `Previous section: ${previous.label}` : "No previous section"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition hover:border-byd-red hover:bg-byd-red active:scale-90 active:duration-100 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:bg-black/65 disabled:active:scale-100"
      >
        <ArrowLeft size={17} />
      </button>
      <span className="hidden rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md sm:block">
        {sections[index]?.number} / 06
      </span>
      <button
        type="button"
        onClick={() => next && goTo(next.id)}
        disabled={!next}
        aria-label={next ? `Next section: ${next.label}` : "No next section"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition hover:border-byd-red hover:bg-byd-red active:scale-90 active:duration-100 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:bg-black/65 disabled:active:scale-100"
      >
        <ArrowRight size={17} />
      </button>
    </div>
  );
}
