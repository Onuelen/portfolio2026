export default function HeroShowcase() {
  return (
    <div className="hero-showcase">
      <h1 id="hero-title" className="hero-title">
        <span className="hero-title-default">
          <span className="hero-line">
            <span data-hero-title="left" data-cursor-focus style={{ opacity: 0 }}>
              Design<span className="hero-period">.</span>
            </span>
          </span>
          <span className="hero-line">
            <span>
              <span className="hero-to" style={{ opacity: 0 }}>to</span>{" "}
              <span className="inline-block" data-hero-title="right" data-cursor-focus style={{ opacity: 0 }}>Interface.</span>
            </span>
          </span>
        </span>
      </h1>
      <noscript>
        <style>
          {".hero-to, [data-hero-title] { opacity: 1 !important; }"}
        </style>
      </noscript>
    </div>
  );
}
