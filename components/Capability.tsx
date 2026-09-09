const capabilityGroups = [
  {
    title: "Design",
    emphasis: true,
    summary: "Visual hierarchy, layout, responsive interface",
    description:
      "시각디자인 배경을 바탕으로 정보의 우선순위와 화면 흐름을 정리하고, 반응형 인터페이스로 이어질 수 있는 구조를 고민합니다.",
    items: ["Photoshop", "Illustrator", "UI Layout", "Responsive Design"],
  },
  {
    title: "Frontend",
    emphasis: true,
    summary: "React / Next.js 기반 인터페이스 구현",
    description:
      "디자인 의도와 사용자 흐름을 HTML/CSS, TypeScript, React, Next.js 기반의 실제 화면으로 구현합니다.",
    items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Engineering",
    emphasis: false,
    summary: "상태 관리와 구조 정리",
    description:
      "TanStack Query, Zustand, FSD를 활용해 서버 상태, 로컬 상태, 컴포넌트 구조를 프로젝트 요구에 맞게 정리합니다.",
    items: ["TanStack Query", "Zustand", "FSD", "Git / GitHub"],
  },
  {
    title: "AI-assisted Workflow",
    emphasis: false,
    summary: "개발 업무를 보조하는 AI 활용",
    description:
      "구현 대안 비교, 디버깅, 코드 구조 검토, 문서 정리 과정에서 ChatGPT와 Codex를 보조 도구로 활용합니다.",
    items: [
      "ChatGPT",
      "Codex",
      "AI-assisted debugging",
      "code review / implementation alternatives",
    ],
  },
];

export default function Capability() {
  return (
    <section id="capability" className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="text-sm font-medium uppercase text-foreground/50">
            Capability
          </p>
          <h2 className="mt-3 text-4xl font-semibold">
            디자인 의도를 구현으로 연결하는 역량
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {capabilityGroups.map((group) => (
            <section
              key={group.title}
              className={`border-t pt-5 ${
                group.emphasis
                  ? "border-foreground md:pb-4"
                  : "border-foreground/20 md:pt-4"
              }`}
            >
              <div className="flex flex-col gap-3">
                <h3
                  className={
                    group.emphasis
                      ? "text-3xl font-semibold"
                      : "text-xl font-semibold text-foreground/80"
                  }
                >
                  {group.title}
                </h3>
                <p className="text-sm font-medium text-foreground/45">
                  {group.summary}
                </p>
              </div>
              <p
                className={`mt-5 leading-relaxed text-foreground/65 ${
                  group.emphasis ? "text-base" : "text-sm"
                }`}
              >
                {group.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-foreground/55">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
