export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
              01 · About
            </p>
            <h2 className="mt-4 font-display text-3xl italic text-text sm:text-4xl">
              A little about how I work
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
