"use client";
import { useState } from "react";
import { graphics } from "@/lib/data";

const cloudinary =
  "https://res.cloudinary.com/eotyuuny/image/upload";

const getImage = (folder: string, file: string) =>
  `${cloudinary}/portfolio/${folder}/${file}`;



export default function GraphicsPage() {


 type Category = keyof typeof graphics;


const categories: ("All" | Category)[] = [
  "All",
  ...(Object.keys(graphics) as Category[]),
];

const [filter, setFilter] = useState<"All" | Category>("All");


  // All = show only 1 image per category
  const filteredGraphics =
    filter === "All"
      ? Object.entries(graphics).map(
          ([category, images]) => ({
            name: category,
            category,
            image: getImage(
              category,
              images[0]
            ),
          })
        )
     : graphics[filter as Category].map(
    (image) => ({
      name: image,
      category: filter,
      image: getImage(
        filter,
        image
      ),
    })
  );

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
        <div className="flex gap-3 mb-8 flex-wrap mt-14">
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

      </div>
    </section>
  );
}
