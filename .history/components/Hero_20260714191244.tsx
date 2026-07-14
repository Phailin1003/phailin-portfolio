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
        </div>
      </div>
    </section>
  );
}
