import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
          04 · Skills
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl italic text-text sm:text-4xl">
          Tools I reach for
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-blue">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-text">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
