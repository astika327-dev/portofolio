"use client";
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectShowcase() {
  return (
    <section id="my-work" className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Selected Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that demonstrate my passion for building high-quality web experiences.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div variants={item} key={index} className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
