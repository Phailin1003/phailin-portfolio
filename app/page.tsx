import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GraphicsPage from "@/components/Graphic";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const metadata = {
  title: 'Phailin KHODYOTHA | Web Developer Portfolio', 
  description: 'Welcome to Phailin\'s portfolio website, showcasing my web development work and various projects.', 
}

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