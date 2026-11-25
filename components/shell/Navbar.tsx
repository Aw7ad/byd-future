"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./ActiveSectionProvider";

export function Navbar() {
  const { activeId, goTo } = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navigate = (id: string) => {
    goTo(id);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-[#050608]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate("home")}
          aria-label="BYD — return to introduction"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/byd-logo.svg"
            alt="BYD"
            width={92}
            height={23}
            unoptimized
            priority
            className="h-auto w-[86px] sm:w-[104px]"
          />
        </button>

        <nav aria-label="Presentation sections" className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => {
            const active = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => navigate(section.id)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "group relative px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors",
                  active ? "text-white" : "text-white/55 hover:text-white",
                )}
              >
                <span className="mr-1.5 text-byd-red">{section.number}</span>
                {section.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-3 right-3 h-px origin-left bg-byd-red transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Presentation sections (mobile)"
          className="border-t border-white/10 bg-[#050608]/95 px-4 pb-5 pt-3 lg:hidden"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => navigate(section.id)}
              className={cn(
                "flex w-full items-center gap-3 border-b border-white/5 py-3 text-left text-xs font-bold uppercase tracking-[0.16em]",
                activeId === section.id ? "text-byd-red" : "text-white/70",
              )}
            >
              <span className="text-[10px] text-white/35">{section.number}</span>
              {section.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
