import { projects } from "@/lib/data";
import Image from "next/image";

const statusStyles: Record<string, string> = {
  shipped: "text-green border-green/40",
  "in-progress": "text-amber border-amber/40",
  archived: "text-muted border-border",
};

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
          05 · Projects
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl italic text-text sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-amber/60"
            >
              <div>
             <img
  src={project.image}
  alt={project.name}
  className="w-full h-60 object-cover rounded-lg"
/>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-text">
                    {project.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status.replace("-", " ")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] uppercase tracking-widest text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="text-blue hover:text-text"
                    >
                      Code
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      className="text-blue hover:text-text"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
