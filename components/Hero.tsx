import HeroCursor from "@/components/HeroCursor";
import HeroReplayButton from "@/components/HeroReplayButton";
import HeroShowcase from "@/components/HeroShowcase";

export default function Hero() {
  return (
    <section className="hero-shell page-shell" aria-labelledby="hero-title">
      <HeroCursor />
      <div className="hero-eyebrow"><span>JI SEONG JUN — PORTFOLIO</span><span>DESIGN & DEVELOPMENT / 2026</span></div>
      <HeroShowcase />
      <div className="hero-bottom">
        <p data-hero>시각적인 설계에서, 실제로 쓰이는 경험까지.<br />디자인과 프론트엔드를 연결하는 지성준입니다.</p>
        <a href="#works" className="hero-work-link" data-hero data-cursor-focus><span>EXPLORE MY WORK</span><span aria-hidden="true">↘</span></a>
      </div>
      <div className="hero-footnote"><span>UI/UX DESIGN · FRONTEND · PUBLISHING</span><HeroReplayButton /><span>SCROLL TO DISCOVER ↓</span></div>
    </section>
  );
}
