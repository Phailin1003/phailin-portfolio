"use client";

import { useState } from "react";
import { Graphic, graphics } from "@/lib/data";

const artworkDrive =
  "https://drive.google.com/drive/folders/1nUy2rxaA1wuPvJ03XNBPlE4jWhHI-q1t?usp=sharing";

const cloudinary = "https://res.cloudinary.com/eotyuuny/image/upload";

const getImage = (category: string, file: string) =>
  `${cloudinary}/portfolio/${category}/${file}`;

export default function GraphicsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(graphics.map((item) => item.category))];

  const filteredGraphics =
    filter === "All"
      ? categories
          .filter((cat) => cat !== "All")
          .map((cat) => graphics.find((item) => item.category === cat))
          .filter((item): item is Graphic => Boolean(item))
      : filter === "Artwork Cars"
      ? graphics.filter((item) => item.category === "Artwork Cars").slice(0, 12)
      : graphics.filter((item) => item.category === filter);
  return (
    <section id="graphics" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
          06 · Graphics
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl italic text-text sm:text-4xl">
          Selected work
        </h2>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 flex-wrap mt-14 sm:grid-cols-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border ${
                filter === cat ? "bg-black text-white" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {filteredGraphics.map((item) => (
            <div key={item.image} className="group overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
              />
            </div>
          ))}
        </div>
        {/* Artwork More Button */}
        {filter === "Artwork Cars" && (
          <div className="mt-10 text-center">
            <a
              href={artworkDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="
              transition-transform hover:scale-[1.03]
        inline-flex
        items-center
        px-6
        py-3
        rounded-full
        border
        border-black
        hover:bg-black
        hover:text-white
        
      "
            >
              View More Artwork →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
