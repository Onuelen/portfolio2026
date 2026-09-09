export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl border-t border-foreground pt-10">
        <div className="grid gap-10 md:grid-cols-[0.65fr_0.35fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase text-foreground/50">
              Contact
            </p>
            <h2 className="mt-3 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
              Let&apos;s build useful interfaces.
            </h2>
          </div>

          <address className="not-italic">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-foreground/45">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:skwid17@naver.com" className="hover:underline">
                    skwid17@naver.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-foreground/45">GitHub</dt>
                <dd className="mt-1">
                  <a
                    href="https://github.com/Onuelen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/Onuelen
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-foreground/45">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+821029712329" className="hover:underline">
                    010-2971-2329
                  </a>
                </dd>
              </div>
            </dl>
          </address>
        </div>
      </div>
    </section>
  );
}
