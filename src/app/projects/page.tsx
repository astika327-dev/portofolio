import ProjectShowcase from "@/components/ui/ProjectShowcase";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Putu Astika",
  description: "Portfolio of selected works by Putu Astika. Explore web applications, corporate websites, and digital experiences built with modern technologies.",
};

export default function ProjectsPage() {
  return (
    <AnimatedSection>
      <ProjectShowcase />
    </AnimatedSection>
  );
}
