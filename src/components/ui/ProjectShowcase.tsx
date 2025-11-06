// src/components/ui/ProjectShowcase.tsx

const projects = [
  {
    title: "Bali WebDevelover",
    description: "A corporate website for a web development studio in Bali, focusing on performance and elegance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Bali+WebDevelover",
    liveUrl: "https://bali-webdevelover.com",
  },
  {
    title: "Promptcraft",
    description: "An AI-powered platform for creating and sharing high-quality, enterprise-grade prompts for various applications.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Promptcraft",
    liveUrl: "https://promptcraft-v2.vercel.app/",
  },
  {
    title: "U2CleanPro",
    description: "A professional cleaning service company website, designed to be user-friendly and informative for potential clients.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=U2CleanPro",
    liveUrl: "https://cleanpro-beryl.vercel.app/",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="my-work" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
