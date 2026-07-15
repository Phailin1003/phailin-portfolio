import { profile } from "@/lib/data";
import Image from "next/image";

const stack = ["Next.js", "JavaScript", "WordPress", "Figma", "Illustrator","Photoshop"];

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="relative overflow-hidden border-b border-border">
     
    </section>
  );
}
