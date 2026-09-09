export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-foreground/10 pt-6 text-sm text-foreground/55 md:flex-row">
        <p>© {year} Ji Seong Jun. All rights reserved.</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/Onuelen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a href="mailto:skwid17@naver.com" className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
