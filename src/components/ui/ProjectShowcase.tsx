"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Bali WebDevelover",
    category: "Corporate Website",
    description: "A high-performance corporate identity for a premier web development studio in Bali. Focus on elegance, SEO, and speed.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    imageUrl: "https://placehold.co/800x600/1a1a1a/ffffff?text=Bali+WebDevelover", // TODO: Replace with real screenshots
    liveUrl: "https://bali-webdevelover.com",
    colSpan: "md:col-span-2", // Large featured item
  },
  {
    id: 2,
    title: "Promptcraft",
    category: "AI SaaS Platform",
    description: "An enterprise-grade marketplace for AI prompts. Features complex filtering, user authentication, and a modern dark UI.",
    tech: ["Next.js", "Tailwind CSS", "AI Integration"],
    imageUrl: "https://placehold.co/600x800/1a1a1a/ffffff?text=Promptcraft",
    liveUrl: "https://promptcraft-v2.vercel.app/",
    colSpan: "md:col-span-1", // Tall vertical item
  },
  {
    id: 3,
    title: "U2CleanPro",
    category: "Service Business",
    description: "A conversion-focused landing page for a professional cleaning service. Clean, trustworthy, and mobile-optimized.",
    tech: ["React", "Tailwind", "Conversion Design"],
    imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=U2CleanPro",
    liveUrl: "https://cleanpro-beryl.vercel.app/",
    colSpan: "md:col-span-1", // Standard item
  },
  // Add a placeholder for future work or a 'Coming Soon' card to fill the grid if needed
  {
    id: 4,
    title: "More Projects",
    category: "Archive",
    description: "Explore my GitHub for more experimental code and open source contributions.",
    tech: ["Open Source", "Experiments"],
    imageUrl: "https://placehold.co/600x400/111/333?text=GitHub+Archive",
    liveUrl: "https://github.com/astika", // Assuming this exists or use a generic link
    colSpan: "md:col-span-2",
  }
];

export default function ProjectShowcase() {
  return (
    <section id="my-work" className="py-32 px-4 relative">
       {/* Background element for section separation */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">Selected Works</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md text-right md:text-left"
          >
            A curation of digital experiences built with precision, tailored for scalability and performance.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-card border border-white/5 hover:border-white/20 transition-all duration-500",
                project.colSpan
              )}
            >
              {/* Image Background with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                 <img
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full backdrop-blur-md border border-primary/20">
                      {project.category}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs text-gray-300 font-mono"># {t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
