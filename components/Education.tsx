import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
          03 · Education
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl italic text-text sm:text-4xl">
          Where I studied
        </h2>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {education.map((item) => (
            <div
              key={item.school}
              className="grid gap-2 py-8 md:grid-cols-[0.25fr_0.75fr] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {item.period}
              </span>
              <div>
                <h3 className="font-display text-xl text-text">{item.degree}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-blue">
                  {item.school} · {item.major}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
