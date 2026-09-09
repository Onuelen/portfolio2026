import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { projects, type FeaturedProject, type StandardProject } from "@/data/projects";

const featuredProject = projects.find(
  (project): project is FeaturedProject => project.variant === "featured",
);

const standardProjects = projects.filter(
  (project): project is StandardProject => project.variant === "standard",
);

function ProjectVisual({ project }: { project: FeaturedProject | StandardProject }) {
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

function ProjectLinks({ project }: { project: FeaturedProject | StandardProject }) {
  return (
    <div className="flex flex-wrap gap-4 text-sm font-medium">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {link.label}
        </a>
      ))}
      {project.status && <span className="text-foreground/45">{project.status}</span>}
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
    <div className="border border-foreground/10 bg-white">
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
      <p className="border-t border-foreground/10 px-4 py-3 text-xs font-medium uppercase text-foreground/45">
        {label}
      </p>
    </div>
  );
}

export default function SelectedWorks() {
  return (
    <section id="works" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-4 border-b border-foreground pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase text-foreground/50">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Interface case studies</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/60">
            화면을 어떻게 판단하고 구현했는지, 실제 프로젝트 경험 안에서 확인
            가능한 내용만 정리했습니다.
          </p>
        </div>

        {featuredProject && (
          <article className="border-b border-foreground/10 pb-20">
            <div className="mb-8 flex items-end justify-between gap-6">
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
                    <dd className="mt-1 font-medium">{featuredProject.period}</dd>
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

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <section className="border-t border-foreground pt-5">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Service UI/UX Design
                </h4>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">
                  {featuredProject.context}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
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

              <section className="border-t-2 border-foreground pt-5 lg:col-span-2">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Key Design Decisions
                </h4>
                <ul className="mt-5 grid gap-4 text-base leading-relaxed text-foreground/75 md:grid-cols-2">
                  {featuredProject.designDecisions.map((item) => (
                    <li
                      key={item.title}
                      className="border-t border-foreground/10 pt-4"
                    >
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-foreground/70">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-t-2 border-foreground pt-5 lg:col-span-2">
                <h4 className="text-sm font-semibold uppercase text-foreground">
                  Service UI/UX Design
                </h4>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/65">
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
                        <ComparisonImage label="Figma Design" image={pair.design} />
                        <ComparisonImage
                          label="Live Implementation"
                          image={pair.implementation}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

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

            <div className="mt-8 flex flex-col gap-4 border-t border-foreground/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-foreground/65">
                Architecture · {featuredProject.architecture}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-foreground/50">
                {featuredProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {standardProjects.map((project) => (
            <article key={project.slug} className="flex flex-col gap-6">
              <ProjectVisual project={project} />

              <div className="flex flex-1 flex-col justify-between gap-8 border-t border-foreground pt-5">
                <div>
                  <div className="flex items-start justify-between gap-6">
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

                  <h3 className="mt-6 text-3xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-lg text-foreground/60">{project.subtitle}</p>
                  <p className="mt-6 text-sm leading-relaxed text-foreground/65">
                    {project.context}
                  </p>

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

                  <ul className="mt-6 space-y-2 text-sm leading-relaxed text-foreground/65">
                    {project.implementation.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-px w-5 shrink-0 bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-foreground/50">
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
