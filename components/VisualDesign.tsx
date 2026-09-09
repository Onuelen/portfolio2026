import Image from "next/image";
import { visualDesignWorks } from "@/data/visualDesign";

export default function VisualDesign() {
  if (visualDesignWorks.length === 0) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl border-t border-foreground/10 pt-10">
        <div className="grid gap-8 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-medium uppercase text-foreground/50">
              Visual Design
            </p>
            <h2 className="mt-3 text-4xl font-semibold">
              Brand, graphic, marketing visuals
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visualDesignWorks.map((work) => (
              <article key={`${work.category}-${work.title}`}>
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  width={960}
                  height={720}
                  className="aspect-[4/3] w-full border border-foreground/10 object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <p className="mt-4 text-sm font-medium text-foreground/45">
                  {work.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{work.title}</h3>
                {work.description && (
                  <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                    {work.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
