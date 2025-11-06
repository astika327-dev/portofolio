import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Putu Astika</h1>
      <p className="max-w-2xl mt-4 text-lg text-muted-foreground mb-8">
        I build elegant, high-performance web applications that solve real-world problems and drive business growth.
      </p>
      <a
        href="#my-work" // This will be the ID of the ProjectShowcase section
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md bg-primary hover:bg-primary/90 focus:shadow-outline focus:outline-none"
      >
        View My Work <ArrowDown className="w-4 h-4 ml-2" />
      </a>
    </section>
  );
}
