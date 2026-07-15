import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GraphicsPage from "@/components/Graphic";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
     <Hero />
     <About />
     <Experience />
     <Education />
     <Skills />
     <Projects />
     <GraphicsPage />
     <Contact />
    </div>
  );
}