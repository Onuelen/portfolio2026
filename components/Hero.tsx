export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] items-center px-5 py-24 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="mb-6 text-sm font-medium uppercase text-foreground/50">
            Frontend · UI/UX · Publishing
          </p>
          <h1 className="max-w-5xl text-6xl font-semibold leading-none md:text-8xl">
            Design to Interface.
          </h1>
        </div>

        <div className="max-w-xl md:pb-3">
          <p className="text-xl leading-relaxed text-foreground/70 md:text-2xl">
            사용자 경험을 설계하고,
            <br />
            디자인 의도를 실제 동작하는 인터페이스로 구현합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#works"
              className="inline-flex min-h-11 items-center border border-foreground bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Work 보기
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center border border-foreground/30 px-5 text-sm font-medium transition-colors hover:border-foreground"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
