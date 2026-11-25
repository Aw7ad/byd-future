"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe reduced-motion preference.
 *
 * The first render is always `false` on both server and client so hydration
 * matches. The real preference is read after mount and kept in sync if it
 * changes. Framer Motion's own `useReducedMotion` reads the media query during
 * the first client render, which produces different markup than the server.
 */
export function useReducedMotionPreference() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
