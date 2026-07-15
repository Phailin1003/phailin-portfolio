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
  <span className="italic text-amber">Phailin</span>
  <br />
  Khodyotha
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-amber hover:text-amber"
            >
              View Resume
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
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src={profile.photoUrl}
              alt={profile.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 shadow-lg shadow-black/30 sm:left-auto sm:right-2 sm:translate-x-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-text">
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
