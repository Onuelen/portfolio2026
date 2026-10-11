"use client";

import { type MouseEvent, useRef, useState } from "react";
import Link from "next/link";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#works" },
  { label: "Capability", href: "#capability" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  };

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
      className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-normal">
          Ji Seong Jun
        </Link>

        <div className="hidden gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavigation(event, item.href)}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="https://github.com/Onuelen"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-medium transition-colors hover:text-foreground/60 md:inline-flex"
        >
          GitHub
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-foreground/20 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:hidden"
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-foreground/10 bg-background px-5 py-2 shadow-sm md:hidden"
        >
          <div className="mx-auto max-w-7xl">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className="flex min-h-12 items-center border-t border-foreground/10 text-base font-medium text-foreground/75 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/Onuelen"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex min-h-12 items-center border-t border-foreground/10 text-base font-medium text-foreground/75 transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
