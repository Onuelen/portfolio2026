"use client";

import { useEffect, useRef } from "react";

export default function HeroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".hero-shell");
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || !cursor || !dot || !finePointer.matches || reducedMotion.matches) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    import("gsap").then(({ gsap }) => {
      if (disposed) return;

      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      gsap.set(dot, { scale: 0.65, opacity: 0 });
      const moveX = gsap.quickTo(cursor, "x", { duration: 0.07, ease: "power2.out" });
      const moveY = gsap.quickTo(cursor, "y", { duration: 0.07, ease: "power2.out" });
      let isVisible = false;
      let lastPointer = { x: 0, y: 0 };

      const show = () => {
        if (isVisible) return;
        isVisible = true;
        gsap.set(cursor, { x: lastPointer.x, y: lastPointer.y });
        gsap.to(dot, { opacity: 0.9, scale: 1, duration: 0.16, overwrite: "auto" });
      };
      const hide = () => {
        if (!isVisible) return;
        isVisible = false;
        gsap.to(dot, { opacity: 0, scale: 0.65, duration: 0.16, overwrite: "auto" });
      };
      const move = (event: PointerEvent) => {
        lastPointer = { x: event.clientX, y: event.clientY };
        const heroBottom = section.getBoundingClientRect().bottom;
        if (heroBottom <= 0 || event.clientY > heroBottom) {
          hide();
          return;
        }
        show();
        moveX(lastPointer.x);
        moveY(lastPointer.y);
      };
      const updateOnScroll = () => {
        const heroBottom = section.getBoundingClientRect().bottom;
        if (heroBottom <= 0 || lastPointer.y > heroBottom) hide();
      };
      const grow = () => gsap.to(dot, { scale: 1.7, duration: 0.2, overwrite: "auto" });
      const shrink = () => gsap.to(dot, { scale: 1, duration: 0.2, overwrite: "auto" });
      const focusTargets = section.querySelectorAll<HTMLElement>("[data-cursor-focus]");

      window.addEventListener("pointermove", move);
      window.addEventListener("pointerleave", hide);
      window.addEventListener("scroll", updateOnScroll, { passive: true });
      focusTargets.forEach((target) => {
        target.addEventListener("pointerenter", grow);
        target.addEventListener("pointerleave", shrink);
      });

      cleanup = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerleave", hide);
        window.removeEventListener("scroll", updateOnScroll);
        focusTargets.forEach((target) => {
          target.removeEventListener("pointerenter", grow);
          target.removeEventListener("pointerleave", shrink);
        });
        gsap.killTweensOf(cursor);
        gsap.killTweensOf(dot);
      };
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div ref={cursorRef} className="hero-cursor" aria-hidden="true">
      <div ref={dotRef} className="hero-cursor-dot" />
    </div>
  );
}
