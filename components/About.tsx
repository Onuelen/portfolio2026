export default function About() {
  return (
    <section id="about" className="about-section page-shell">
      <div className="section-kicker"><span>01 / ABOUT ME</span><span>THOUGHTFUL DESIGN. WORKING INTERFACES.</span></div>
      <div className="about-grid">
        <div data-reveal>
          <span className="design-mark" aria-hidden="true">✳</span>
          <h2 className="about-heading">보기 좋은 화면을 넘어,<br /><span>사용하기 좋은 경험으로.</span></h2>
          <p className="about-name">지성준 <span>JI SEONG JUN</span></p>
          <a className="quiet-link" href="mailto:skwid17@naver.com">skwid17@naver.com ↗</a>
        </div>
        <div className="about-copy" data-reveal>
          <p>시각디자인을 전공하고, 디자인 의도를 실제 화면으로 완성하기 위해 프론트엔드로 영역을 넓혔습니다.</p>
          <p>정보의 우선순위와 사용자 흐름을 설계하고, 사용성과 구현 가능성을 함께 고려합니다.</p>
          <div className="about-facts">
            <div><h3>EDUCATION</h3><p>남서울대학교 시각미디어디자인학과</p><span>2018.01 — 2024.02</span></div>
            <div>
              <h3>TRAINING</h3>
              <div className="about-training-list">
                <article>
                  <p className="about-training-type">생성형 AI 활용 · Figma</p>
                  <h4>UX/UI 디자인 웹 프론트엔드 개발 부트캠프</h4>
                  <div className="about-training-meta"><strong>정상 수료</strong><span>2024.06.14 — 2025.01.02</span></div>
                  <p>HTML, CSS, JavaScript 기반의 웹 표준과 반응형 UI 구현을 학습했습니다. Figma를 활용한 UX/UI 설계와 와이어프레임·프로토타입 제작, React 기반 컴포넌트 구조·상태 관리·라우팅을 활용한 웹 서비스 구현을 경험했습니다.</p>
                </article>
                <article>
                  <p className="about-training-type">프론트엔드 심화 과정</p>
                  <h4>심화 프론트엔드 엔지니어 부트캠프</h4>
                  <div className="about-training-meta"><strong>정상 수료</strong><span>2026.02.19 — 2026.04.17</span></div>
                  <p>React, Next.js, TypeScript 기반의 프론트엔드 심화 개발과 API 연동, 상태 관리, 성능 최적화, 컴포넌트 설계를 학습했습니다. 팀 프로젝트를 통해 Git 협업, 코드 리뷰, 아키텍처 개선과 배포 과정을 경험했습니다.</p>
                </article>
              </div>
            </div>
            <div><h3>FOCUS</h3><p>UI/UX Design & Frontend Development</p><span>반응형 인터페이스 · 시맨틱 마크업 · 협업 구조</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
