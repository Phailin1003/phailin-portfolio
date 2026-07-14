import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <Hero />
     <About />
     <Experience/>
     <Education/>
     <Skills/>
    </div>
  );
}
