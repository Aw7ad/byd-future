"use client";

import { sections } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./ActiveSectionProvider";

export function ProgressRail() {
  const { activeId, goTo } = useActiveSection();
  const activeIndex = sections.findIndex((section) => section.id === activeId);

  return (
    <div className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="pointer-events-auto flex flex-col gap-5">
        {sections.map((section, index) => {
          const active = section.id === activeId;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => goTo(section.id)}
              aria-label={`Go to ${section.label}`}
              className="group flex items-center gap-3 transition-transform duration-200 active:scale-95 active:duration-100"
            >
              <span
                aria-hidden
                className={cn(
                  "rail-dot block h-1.5 w-8 origin-left rounded-full",
                  active ? "bg-byd-red" : index < activeIndex ? "bg-white/45" : "bg-white/25",
                )}
                style={{ transform: `scaleX(${active ? 1 : index < activeIndex ? 0.625 : 0.1875})` }}
              />
              <span
                className={cn(
                  "text-[9px] font-bold uppercase tracking-[0.2em] transition-opacity duration-300",
                  active ? "text-white opacity-100" : "text-white/50 opacity-0 group-hover:opacity-100",
                )}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
