"use client";

import { useLayoutEffect } from "react";

const ANIMATION_SPEED = 0.8;
const TITLE_DROP = { angle: 10, lift: 18, duration: 0.28, rebound: 1.4 };
const TO_JUMP_ROTATION = { start: -10, peak: 8, landing: -7 };
const TO_BOUNCES = [
  { height: 0.4, duration: 0.25, rotation: 6, landingRotation: -4 },
  { height: 0.14, duration: 0.15, rotation: 3, landingRotation: -2 },
  { height: 0.04, duration: 0.08, rotation: 1, landingRotation: -0.5 },
];

export default function PortfolioMotion() {
  useLayoutEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    const introWords = document.querySelectorAll<HTMLElement>(".hero-to, [data-hero-title]");
    const revealIntro = () => introWords.forEach((word) => word.style.removeProperty("opacity"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealIntro();
      return;
    }

    introWords.forEach((word) => { word.style.opacity = "0"; });
    let introExpired = false;
    const fallback = window.setTimeout(() => {
      introExpired = true;
      revealIntro();
    }, 2500);

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed) return;
      window.clearTimeout(fallback);
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        let heroIntro: ReturnType<typeof gsap.timeline> | undefined;

        const playHeroIntro = () => {
          heroIntro?.kill();
          gsap.killTweensOf(".hero-to, [data-hero-title], [data-hero]");
          const distance = Math.min(180, Math.max(48, window.innerWidth * 0.12));
          const jumpHeight = Math.min(44, Math.max(12, window.innerWidth * 0.028));

          gsap.set(".hero-to", { x: -distance * 0.65, y: 0, rotation: TO_JUMP_ROTATION.start, opacity: 0 });
          const hop = gsap.timeline();
          hop
            .to(".hero-to", { opacity: 1, duration: 0.12 }, 0)
            .to(".hero-to", { x: 0, duration: 0.8, ease: "none" }, 0)
            .to(".hero-to", { y: -jumpHeight, rotation: TO_JUMP_ROTATION.peak, duration: 0.4, ease: "power1.out" }, 0)
            .to(".hero-to", { y: 0, rotation: TO_JUMP_ROTATION.landing, duration: 0.4, ease: "power1.in" }, 0.4);

          for (const bounce of TO_BOUNCES) {
            hop
              .to(".hero-to", { y: -jumpHeight * bounce.height, rotation: bounce.rotation, duration: bounce.duration, ease: "power1.out" })
              .to(".hero-to", { y: 0, rotation: bounce.landingRotation, duration: bounce.duration, ease: "power1.in" });
          }
          hop.to(".hero-to", { rotation: 0, duration: 0.18, ease: "power2.out" });
          hop.set(".hero-to", { clearProps: "all" });

          const titleDrop = (selector: string, direction: number, origin: string) => {
            gsap.set(selector, { x: direction * distance, rotation: direction * TITLE_DROP.angle, y: -TITLE_DROP.lift, transformOrigin: origin, opacity: 0 });
            return gsap.timeline()
              .to(selector, { x: direction * distance * 0.08, opacity: 1, duration: 0.38, ease: "power2.out" })
              .to(selector, { x: 0, rotation: 0, y: 0, duration: 0.1, ease: "power3.in" }, "-=0.08")
              .to(selector, { rotation: direction * TITLE_DROP.rebound, y: -2, duration: 0.09, ease: "power1.out" })
              .to(selector, { rotation: 0, y: 0, duration: TITLE_DROP.duration, ease: "power2.out" })
              .set(selector, { clearProps: "all" });
          };

          heroIntro = gsap.timeline();
          heroIntro
            .add(titleDrop('[data-hero-title="left"]', -1, "0% 90%"), 0)
            .add(titleDrop('[data-hero-title="right"]', 1, "100% 90%"), 0.16)
            .add(hop, 0.3)
            .fromTo("[data-hero]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", clearProps: "all" }, 0.4);
          heroIntro.timeScale(ANIMATION_SPEED);
        };

        const replay = () => playHeroIntro();
        window.addEventListener("hero-replay", replay);
        if (window.scrollY < 80 && !introExpired) playHeroIntro();
        else revealIntro();

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;
          gsap.from(element, {
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 94%", once: true },
          }).timeScale(ANIMATION_SPEED);
        });

        return () => {
          window.removeEventListener("hero-replay", replay);
          heroIntro?.kill();
          revealIntro();
        };
      });

      cleanup = () => media.revert();
    }).catch(() => {
      window.clearTimeout(fallback);
      if (!disposed) revealIntro();
    });

    return () => {
      disposed = true;
      window.clearTimeout(fallback);
      cleanup?.();
      revealIntro();
    };
  }, []);

  return null;
}
