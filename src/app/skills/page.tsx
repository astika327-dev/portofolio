import Skills from "@/components/ui/Skills";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Putu Astika",
  description: "Technical expertise and skills of Putu Astika. Proficient in React, Next.js, TypeScript, Node.js, and modern web development technologies.",
};

export default function SkillsPage() {
  return (
    <AnimatedSection>
      <Skills />
    </AnimatedSection>
  );
}
