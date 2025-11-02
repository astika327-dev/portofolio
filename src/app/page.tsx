import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import About from "@/components/ui/About";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
        <About />
      </main>
      <Footer />
    </>
  );
}
