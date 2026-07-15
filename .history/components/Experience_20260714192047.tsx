import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
          02 · Experience
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl italic text-text sm:text-4xl">
          Where I've spent my time
        </h2>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {experience.map((item) => (
            <div
              key={item.company}
              className="grid gap-2 py-8 md:grid-cols-[0.25fr_0.3fr_0.45fr] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {item.period}
              </span>
              <div>
                <h3 className="font-display text-xl text-text">{item.role}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-blue">
                  {item.company}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
