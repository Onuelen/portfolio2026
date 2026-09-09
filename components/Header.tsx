import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-normal">
          Ji Seong Jun
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link
            href="#about"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#works"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="#capability"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Capability
          </Link>
          <Link
            href="#contact"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        <a
          href="https://github.com/Onuelen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors hover:text-foreground/60"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
