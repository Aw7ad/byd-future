/**
 * Shared motion tokens.
 *
 * These mirror the CSS custom properties declared in `app/globals.css` so that
 * CSS-driven and JS-driven motion use the same curves and durations. Extend
 * these rather than inventing one-off values in components.
 */

/** Strong ease-out — entrances and exits. */
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Strong ease-in-out — movement and path draws that stay on screen. */
export const easeInOut: [number, number, number, number] = [0.77, 0, 0.175, 1];

export const duration = {
  /** Press feedback. */
  press: 0.1,
  /** Hover, colour and small state changes. */
  ui: 0.26,
  /** Scroll reveals — explanatory motion on a presentation page. */
  reveal: 0.62,
  /** Decorative path draws. */
  draw: 1.1,
} as const;

/** Default gap between siblings in a staggered entrance. */
export const stagger = 0.07;
