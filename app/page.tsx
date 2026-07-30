import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SoftwareTools from "@/components/SoftwareTools";
import Languages from "@/components/Languages";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Photography from "@/components/Photography";
import Video from "@/components/Video";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <SoftwareTools />
        <Languages />
        <Experience />
        <Projects />
        <Photography />
        <Video />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
