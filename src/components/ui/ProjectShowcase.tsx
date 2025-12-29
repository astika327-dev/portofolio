"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

// All projects data
export const projects = [
  {
    id: 1,
    title: "Bali WebDevelover",
    category: "Corporate Website",
    description: "A high-performance corporate identity for a premier web development studio in Bali. Focus on elegance, SEO, and blazing-fast performance.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    imageUrl: "/images/projects/bali_webdevelover.png",
    liveUrl: "https://bali-webdevelover.com",
    aesthetic: true, // Most aesthetic projects for homepage
  },
  {
    id: 2,
    title: "Azure Bali",
    category: "Restaurant",
    description: "Sophisticated beachside dining experience website showcasing Azure Bali's elegant ambiance, menu, and stunning oceanfront location.",
    tech: ["HTML", "CSS", "JavaScript", "UI Design"],
    imageUrl: "/images/projects/azure_bali.png",
    liveUrl: "https://astika327-dev.github.io/Azure/",
    aesthetic: true,
  },
  {
    id: 3,
    title: "Dewi Sri Spa",
    category: "Hospitality",
    description: "A serene and artistic Balinese spa website featuring a responsive design, service menu, and contact integration. Designed to embody tranquility.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    imageUrl: "/images/projects/dewi_sri_spa.png",
    liveUrl: "https://astika327-dev.github.io/SPA/",
    aesthetic: true,
  },
  {
    id: 4,
    title: "BaliRide — Motor Rental",
    category: "Booking Platform",
    description: "Premium motorbike rental platform with seamless automated booking system. Explore Bali with freedom through an intuitive rental experience.",
    tech: ["Nuxt.js", "Turso", "WhatsApp API", "Booking System"],
    imageUrl: "/images/projects/baliride.png",
    liveUrl: "https://rent-motor.vercel.app/",
    aesthetic: true,
  },
  {
    id: 5,
    title: "Hotel Ops Command Center",
    category: "Enterprise Dashboard",
    description: "Daily operations management tool for 5-star hotels and villas. Real-time monitoring of housekeeping, engineering, and guest issues with comprehensive dashboard.",
    tech: ["Next.js", "Turso", "Real-time Data", "Charts"],
    imageUrl: "/images/projects/hotel_ops.png",
    liveUrl: "https://hospitality-center.vercel.app/",
    aesthetic: false,
  },
  {
    id: 6,
    title: "PromptCraft",
    category: "AI SaaS Platform",
    description: "AI prompt engineering platform for creating, sharing, and discovering high-quality prompts across various AI models.",
    tech: ["Next.js", "AI Integration", "Authentication"],
    imageUrl: "/images/projects/promptcraft.png",
    liveUrl: "https://promptcraft-v2.vercel.app/",
    aesthetic: false,
  },
  {
    id: 7,
    title: "Kamagra Indonesia",
    category: "E-Commerce",
    description: "Modern e-commerce platform for health products, featuring a seamless shopping experience and comprehensive product catalog.",
    tech: ["Next.js", "E-commerce", "Payment Gateway"],
    imageUrl: "/images/projects/kamagra.png",
    liveUrl: "https://kamagraindonesia.shop",
    aesthetic: false,
  },
  {
    id: 8,
    title: "MiniTools",
    category: "Developer Utilities",
    description: "A fast, privacy-friendly collection of micro utilities for everyday work: formatters, encoders/decoders, generators, and quick helpers.",
    tech: ["Next.js", "Tailwind CSS", "Utilities"],
    imageUrl: "/images/projects/minitools.png",
    liveUrl: "https://minitools-nine.vercel.app/",
    aesthetic: false,
  },
  {
    id: 9,
    title: "U2CleanPro",
    category: "Service Business",
    description: "A conversion-focused landing page for a professional cleaning service. Clean, trustworthy, and mobile-optimized for maximum conversions.",
    tech: ["React", "Tailwind", "Conversion Design"],
    imageUrl: "/images/projects/u2cleanpro.png",
    liveUrl: "https://cleanpro-beryl.vercel.app/",
    aesthetic: false,
  },
  {
    id: 10,
    title: "Bali Earth Coffee",
    category: "Coffee Shop",
    description: "Artisanal coffee shop website celebrating Balinese coffee culture with beautiful imagery and smooth user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/projects/bali_earth_coffee.png",
    liveUrl: "https://astika327-dev.github.io/coffeeshop/",
    aesthetic: false,
  },
];

// Get aesthetic projects for homepage (4 most beautiful)
const aestheticProjects = projects.filter(p => p.aesthetic);

interface ProjectShowcaseProps {
  showAll?: boolean; // If true, show all projects. If false, only show 4 aesthetic ones
}

export default function ProjectShowcase({ showAll = false }: ProjectShowcaseProps) {
  const displayProjects = showAll ? projects : aestheticProjects;
  
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
            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
              {showAll ? "All Projects" : "Selected Works"}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md text-right md:text-left"
          >
            {showAll 
              ? `A complete collection of ${projects.length} digital experiences I've crafted.`
              : "A curation of my most visually stunning digital experiences."
            }
          </motion.p>
        </div>
        
        {/* Projects Grid - 2x2 for homepage, full grid for /projects */}
        <div className={cn(
          "grid gap-6",
          showAll 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1 md:grid-cols-2"
        )}>
          {displayProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer block"
            >
              {/* Image Background with Gradient Overlay */}
              <div className={cn(
                "relative overflow-hidden",
                showAll ? "aspect-[16/10]" : "aspect-[16/11]"
              )}>
                 <Image
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex justify-between items-start mb-3">
                  <span className={cn(
                    "text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md border",
                    project.aesthetic 
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : "text-blue-400 bg-blue-500/10 border-blue-500/20"
                  )}>
                    {project.category}
                  </span>
                  <div className="p-2.5 bg-white text-black rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className={cn(
                  "font-bold text-white mb-2",
                  showAll ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                )}>{project.title}</h3>
                <p className={cn(
                  "text-gray-400 mb-4 line-clamp-2",
                  showAll ? "text-xs md:text-sm" : "text-sm"
                )}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, showAll ? 3 : 4).map((t, i) => (
                    <span key={i} className="text-xs text-gray-300 font-mono bg-white/5 px-2 py-1 rounded"># {t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA - Only show on homepage */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10"
            >
              View All {projects.length} Projects
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}

        {/* GitHub CTA - Only show on /projects page */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/astika327-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
