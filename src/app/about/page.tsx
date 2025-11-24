import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Putu Astika",
  description: "Learn more about Putu Astika, a full-stack developer based in Bali, Indonesia. Specializing in modern web technologies and enterprise-grade applications.",
};

export default function AboutPage() {
  return (
    <AnimatedSection>
      <About />
      <Skills />
    </AnimatedSection>
  );
}
