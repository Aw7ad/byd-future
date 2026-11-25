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
              className="group flex items-center gap-3"
            >
              <span
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active ? "w-8 bg-byd-red" : index < activeIndex ? "w-5 bg-white/45" : "w-1.5 bg-white/25",
                )}
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
