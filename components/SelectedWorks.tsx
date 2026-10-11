import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import {
  projects,
  type FeaturedProject,
  type StandardProject,
} from "@/data/projects";

const featuredProject = projects.find(
  (project): project is FeaturedProject => project.variant === "featured",
);

const standardProjects = projects.filter(
  (project): project is StandardProject => project.variant === "standard",
);

function ProjectVisual({
  project,
}: {
  project: FeaturedProject | StandardProject;
}) {
  return (
    <div className="overflow-hidden border border-foreground/10 bg-white">
      {project.image && project.imageAlt ? (
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          className="aspect-[16/10] h-full w-full object-cover object-top"
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
      ) : (
        <div className="flex aspect-[16/10] h-full w-full items-center justify-center bg-foreground/[0.03] px-6 text-center text-sm text-foreground/45">
          Project Image
        </div>
      )}
    </div>
  );
}

function ProjectLinks({
  project,
}: {
  project: FeaturedProject | StandardProject;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 text-sm font-medium sm:flex sm:flex-wrap">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.label} (opens in a new tab)`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-foreground/20 px-3 py-2 text-center transition-colors hover:border-foreground hover:bg-white/10 sm:w-auto sm:justify-start sm:text-left"
        >
          {link.label}
        </a>
      ))}
      {project.status && (
        <span className="col-span-full text-foreground/45">
          {project.status}
        </span>
      )}
    </div>
  );
}

function ComparisonImage({
  image,
  label,
}: {
  image: { src: string; alt: string };
  label: string;
}) {
  return (
    <div className="border border-foreground/10 bg-background">
      <div className="flex aspect-[16/10] items-start justify-center overflow-hidden bg-foreground/[0.03] md:aspect-[2/1]">
        <ImageLightbox
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          label={label}
          previewClassName="h-full w-full object-cover object-top"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
      <p className="border-t border-foreground/10 px-4 py-3 text-sm font-medium uppercase text-foreground/45">
        {label}
      </p>
    </div>
  );
}

export default function SelectedWorks() {
  return (
    <section aria-label="Project case studies" className="case-studies px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-4 border-b border-foreground/20 pb-6 md:flex-row md:items-end" data-reveal>
          <div>
            <p className="text-sm font-medium uppercase text-foreground/50">
              A CLOSER LOOK
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Behind the interfaces.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/60">
            팀 프로젝트에서 맡은 역할과 기여 범위, 직접 설계하거나 구현한 결과를
            정리했습니다.
          </p>
        </div>

        {featuredProject && (
          <article id={featuredProject.slug} className="featured-case border-b border-foreground/10 pb-20">
            <div className="soso-cover" data-reveal>
              <div className="soso-cover-copy"><span>01 / UI/UX DESIGN & FRONTEND</span><h3>SOSOEAT<span>함께하는 일상의 시작.</span></h3><p>{featuredProject.subtitle}</p><a href="#soso-details">EXPLORE THE CASE STUDY ↓</a></div>
              <div className="soso-cover-screens" aria-hidden="true">
                <div className="browser-mockup"><div className="browser-bar"><i /><i /><i /><span>sosoeat / home</span></div><Image src="/assets/sosoeat/sosoeat-home-desktop.png" alt="" width={1440} height={900} sizes="(min-width: 1024px) 60vw, 90vw" /></div>
                <div className="mobile-mockup"><Image src="/assets/sosoeat/sosoeat-sosotalk-wide-mobile.png" alt="" width={440} height={900} sizes="(min-width: 768px) 20vw, 35vw" /></div>
              </div>
            </div>
            <div id="soso-details" />
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground/45">
                  {featuredProject.number}
                </p>
                <p className="mt-3 text-sm font-medium uppercase text-foreground/50">
                  {featuredProject.perspective}
                </p>
              </div>
              <ProjectLinks project={featuredProject} />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <ProjectVisual project={featuredProject} />

              <div>
                <h3 className="text-4xl font-semibold md:text-6xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 max-w-xl text-xl leading-relaxed text-foreground/65">
                  {featuredProject.subtitle}
                </p>

                <dl className="mt-8 grid gap-3 border-y border-foreground/10 py-5 text-sm md:grid-cols-2">
                  <div>
                    <dt className="text-foreground/45">Role</dt>
                    <dd className="mt-1 font-medium">{featuredProject.role}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/45">Period</dt>
                    <dd className="mt-1 font-medium">
                      {featuredProject.period}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-foreground/45">Team</dt>
                    <dd className="mt-1 font-medium">{featuredProject.team}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/45">Design Scope</dt>
                    <dd className="mt-1 font-medium">
                      {featuredProject.designScope}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-foreground/45">Development Scope</dt>
                    <dd className="mt-1 font-medium">
                      {featuredProject.developmentScope}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-x-10">
              <section className="border-t border-foreground pt-5">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Service UI/UX Design
                </h4>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  {featuredProject.context}
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/65">
                  {featuredProject.serviceDesign}
                </p>
                <dl className="mt-6 grid gap-3 border-t border-foreground/10 pt-5 text-sm md:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <dt className="text-foreground/45">Design Scope</dt>
                    <dd className="mt-1 font-medium">
                      {featuredProject.designScope}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-foreground/45">Development Scope</dt>
                    <dd className="mt-1 font-medium">
                      {featuredProject.developmentScope}
                    </dd>
                  </div>
                </dl>
              </section>

              <section className="border-t border-foreground pt-5">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Problem
                </h4>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  {featuredProject.problem}
                </p>
              </section>

              <section className="border-t-2 border-foreground pt-5 lg:col-span-2" data-reveal>
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Key Design Decisions
                </h4>
                <ul className="mt-5 grid gap-4 text-base leading-relaxed text-foreground/75 md:grid-cols-2">
                  {featuredProject.designDecisions.map((item) => (
                    <li
                      key={item.title}
                      className="border-t border-foreground/10 pt-4"
                    >
                      <p className="font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-2 text-foreground/70">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-t-2 border-foreground pt-5 lg:col-span-2">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Service UI/UX Design
                </h4>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/70">
                  홈, 모임 탐색, 모임 상세, 소소Talk 등 서비스 전반의 UI/UX를
                  Figma에서 설계했습니다.
                </p>
                <div className="mt-5 aspect-[16/8] overflow-hidden border border-foreground/10 bg-white md:aspect-[16/7]">
                  <ImageLightbox
                    src={featuredProject.overviewImage.src}
                    alt={featuredProject.overviewImage.alt}
                    width={1890}
                    height={747}
                    label="Service UI/UX Design"
                    previewClassName="h-full w-full object-contain object-center"
                    sizes="(min-width: 1024px) 80vw, 100vw"
                  />
                </div>
              </section>

              <section className="border-t-2 border-foreground pt-5 lg:col-span-2">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Design → Implementation
                </h4>
                <div className="mt-5 space-y-6">
                  {featuredProject.comparisonPairs.map((pair) => (
                    <div key={pair.title}>
                      <p className="mb-3 text-sm font-medium text-foreground/45">
                        {pair.title}
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <ComparisonImage
                          label="Figma Design"
                          image={pair.design}
                        />
                        <ComparisonImage
                          label="Live Implementation"
                          image={pair.implementation}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:col-span-2">
                <section className="border-t-2 border-foreground pt-5">
                  <h4 className="text-sm font-semibold uppercase text-foreground">
                    SosoTalk Frontend Implementation
                  </h4>
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-foreground/75">
                    {featuredProject.implementation.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="border-t-2 border-foreground pt-5">
                  <h4 className="text-sm font-semibold uppercase text-foreground">
                    Result
                  </h4>
                  <p className="mt-4 text-base leading-relaxed text-foreground/75">
                    {featuredProject.result}
                  </p>
                </section>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-base leading-relaxed text-foreground/70">
                <span className="font-semibold text-foreground/85">
                  Architecture
                </span>
                <span aria-hidden="true"> · </span>
                {featuredProject.architecture}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/60">
                {featuredProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {standardProjects.map((project) => (
            <article id={project.slug} key={project.slug} className={`standard-case standard-case--${project.slug} flex flex-col gap-6`} data-reveal>
              <ProjectVisual project={project} />

              <div className="flex flex-1 flex-col justify-between gap-8 border-t border-foreground pt-5">
                <div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-medium text-foreground/45">
                        {project.number}
                      </p>
                      <p className="mt-3 text-sm font-medium uppercase text-foreground/50">
                        {project.perspective}
                      </p>
                    </div>
                    <ProjectLinks project={project} />
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg text-foreground/60">
                    {project.subtitle}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-foreground/70">
                    {project.context}
                  </p>

                  <section className="mt-6 border-t border-foreground/10 pt-4">
                    <h4 className="text-base font-semibold text-foreground">
                      UI/UX Design Approach
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-foreground/70">
                      {project.designApproach}
                    </p>
                  </section>

                  <dl className="mt-6 grid gap-3 border-y border-foreground/10 py-4 text-sm md:grid-cols-2">
                    <div>
                      <dt className="text-foreground/45">Role</dt>
                      <dd className="mt-1 font-medium">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="text-foreground/45">Focus</dt>
                      <dd className="mt-1 font-medium">{project.focus}</dd>
                    </div>
                  </dl>

                  <ul className="mt-6 space-y-2 text-base leading-relaxed text-foreground/70">
                    {project.implementation.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-px w-5 shrink-0 bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/60">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
