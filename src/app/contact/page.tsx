import Contact from "@/components/ui/Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Putu Astika",
  description: "Get in touch with Putu Astika for collaborations, project inquiries, or opportunities. Available via email and WhatsApp.",
};

export default function ContactPage() {
  return (
    <AnimatedSection>
      <Contact />
    </AnimatedSection>
  );
}
