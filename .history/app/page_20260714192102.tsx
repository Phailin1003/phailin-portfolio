import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <Hero />
     <About />
     <Experience/>
    </div>
  );
}
