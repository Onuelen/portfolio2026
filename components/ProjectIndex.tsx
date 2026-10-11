import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectIndex() {
  return (
    <section id="works" className="work-index page-shell">
      <div className="section-kicker"><span>02 / SELECTED WORK</span><span>2024 — 2026</span></div>
      <div className="index-heading" data-reveal><h2>Selected<br /><span>works.</span></h2><p>디자인으로 풀고, 코드로 완성한<br />세 가지 프로젝트.</p></div>
      <div className="project-index-grid">
        {projects.map((project) => (
          <a key={project.slug} href={`#${project.slug}`} className={`index-card index-card--${project.slug}`} data-reveal>
            <div className="index-card-top"><span>PROJECT / {project.number}</span><span aria-hidden="true">↗</span></div>
            <h3>{project.title}</h3><p>{project.subtitle}</p>
            <div className="index-image">{project.image && <Image src={project.image} alt={project.imageAlt || project.title} width={1000} height={700} sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw" />}</div>
            <span className="index-card-bottom">{project.role}<span>VIEW PROJECT →</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
