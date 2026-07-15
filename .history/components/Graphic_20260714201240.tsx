"use client";

import { useState } from "react";
import { graphics } from "@/lib/data";

export default function GraphicsPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(graphics.map((item) => item.category)),
  ];

  const filteredGraphics =
    filter === "All"
      ? graphics
      : graphics.filter(
          (item) => item.category === filter
        );

  return (
    <section className="container mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        Graphic Design
      </h1>

      {/* Category Filter */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border ${
              filter === cat
                ? "bg-black text-white"
                : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {filteredGraphics.map((item) => (
          <div
            key={item.image}
            className="group overflow-hidden rounded-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="
                w-full
                h-64
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </div>
        ))}

      </div>

    </section>
  );
}