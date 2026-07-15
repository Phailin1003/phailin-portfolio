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
        </div>
      </div>
    </section>
  );
}
