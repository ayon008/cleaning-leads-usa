"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

/*
  Accessibility & stability fixes:
  - Removed GSAP/ScrollTrigger which can re-evaluate on mobile viewport changes
    (address bar hide/show, virtual keyboard) and cause unexpected scroll behavior.
  - Use a debounced window scroll listener to toggle visibility; much more stable on mobile.
  - When hidden: set aria-hidden="true" and tabIndex={-1} so keyboard users don't tab to an invisible control.
  - When visible: provide an accessible aria-label and allow keyboard focus.
  - Use window.scrollTo with smooth behavior only on explicit user click (no automatic scrolling).
  - Keep styles via Tailwind classes; you can animate enter/exit with CSS transitions.
*/

const SCROLL_THRESHOLD = 300; // show button after user scrolls down this many pixels

const TopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Debounced scroll handler to avoid flooding and to be stable across mobile resizes
  const handleScroll = useCallback(() => {
    const y = window.scrollY || window.pageYOffset;
    setVisible(y > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      // throttle using requestAnimationFrame for smoothness on mobile
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        handleScroll();
        if (rafId) {
          window.cancelAnimationFrame(rafId);
        }
        rafId = null;
      });
    };

    // initialize visibility
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [handleScroll]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    // Explicit user action only -> smooth scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
  aria-hidden={visible ? "false" : "true"}
      // Make it unfocusable when hidden so keyboard users don't land on it
      tabIndex={visible ? 0 : -1}
      // Positioning same as before; animate with CSS (transition) if desired
      className={`fixed bottom-20 right-6 z-40 p-3 rounded-md w-fit bg-secondary transition-all duration-200 ease-in-out
        ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-8 pointer-events-none"
        }`}
    >
      <ArrowUp className="text-white" />
    </button>
  );
};

export default TopButton;
