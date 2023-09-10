import Hero from "./_home/Hero";
import About from "./_home/About";
import Projects from "./_home/Projects";
import Skills from "./_home/Skills";
import Contact from "./_home/Contact";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
