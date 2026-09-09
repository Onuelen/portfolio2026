export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="text-sm font-medium uppercase text-foreground/50">About</p>
          <h2 className="mt-3 text-4xl font-semibold">
            Visual Design + Frontend
          </h2>
        </div>

        <div>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold">지성준</h3>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              시각디자인을 전공한 뒤 웹 인터페이스에 관심을 가지며 프론트엔드
              개발로 영역을 확장했습니다.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/70">
              디자인 의도를 이해하고 사용성과 구현 가능성을 함께 고려해 실제
              서비스 화면으로 완성하는 것을 중요하게 생각합니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 border-t border-foreground/10 pt-10 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-foreground/50">Education</p>
              <p className="mt-2 font-medium">남서울대학교</p>
              <p className="text-sm leading-relaxed text-foreground/60">
                시각 미디어 디자인 학과
                <br />
                2018.01 - 2024.02
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground/50">Training</p>
              <p className="mt-2 font-medium">UX/UI 웹 프론트엔드 개발</p>
              <p className="text-sm leading-relaxed text-foreground/60">
                HTML, CSS, SCSS, JavaScript, Figma, React
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground/50">Focus</p>
              <p className="mt-2 font-medium">UI 구현과 협업 구조</p>
              <p className="text-sm leading-relaxed text-foreground/60">
                Next.js, TypeScript, Responsive Web, Semantic Markup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
