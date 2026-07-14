import { profile } from "@/lib/data";
import Image from "next/image";

const stack = [
  "Next.js",
  "JavaScript",
  "WordPress",
  "Figma",
  "Illustrator",
  "Photoshop",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div className="flex flex-col justify-center">
           <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-amber">
            {profile.role} · {profile.location}
          </p>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Software, built with{" "}
            <span className="italic text-amber">care</span>, shipped with{" "}
            <span className="italic text-blue">purpose</span>.
          </h1>
           <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {profile.bio}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-amber hover:text-amber"
            >
              Get in Touch
            </a>
          </div>
           <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
            {stack.map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] uppercase tracking-widest text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
