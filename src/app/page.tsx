import Hero from "@/components/ui/Hero";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import About from "@/components/ui/About";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <ProjectShowcase />
      </AnimatedSection>
      <About />
    </>
  );
}
