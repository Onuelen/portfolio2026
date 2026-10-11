"use client";

export default function HeroReplayButton() {
  return (
    <button type="button" className="hero-replay-button" onClick={() => window.dispatchEvent(new Event("hero-replay"))} aria-label="Hero 애니메이션 다시 재생">
      <span aria-hidden="true">↻</span><span>REPLAY</span>
    </button>
  );
}
