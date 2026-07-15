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
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I'm {profile.name}, a {profile.role.toLowerCase()} based in{" "}
              {profile.location}. {profile.bio}
            </p>
            <p>
              I care about the details that make software easy to trust:
              clean interfaces, fast load times, and systems that keep
              working after launch, not just on demo day. That mix of
              frontend development and design is what let me move between
              client-facing platforms and internal systems support without
              losing sight of the end user.
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Languages: {profile.languages.join(", ")}
            </p>
            <div className="pt-2">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-amber hover:text-amber"
              >
                Download CV
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
