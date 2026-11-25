"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { sections } from "@/lib/content";

type ActiveSectionValue = {
  activeId: string;
  goTo: (id: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionValue | null>(null);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const marker = window.innerHeight * 0.36;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) current = section.id;
      }

      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    setActiveId(id);
  }, []);

  const value = useMemo(() => ({ activeId, goTo }), [activeId, goTo]);

  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) throw new Error("useActiveSection must be used inside ActiveSectionProvider");
  return context;
}
