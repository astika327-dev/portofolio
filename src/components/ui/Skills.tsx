"use client";
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Infrastructure",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: ["Node.js", "PostgreSQL", "Docker", "AWS", "Vercel"]
  },
  {
    title: "Performance & SEO",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    skills: ["Core Web Vitals", "Technical SEO", "Analytics", "Accessibility"]
  },
  {
    title: "Design & UI/UX",
    icon: <Code2 className="w-6 h-6 text-pink-400" />,
    skills: ["Figma", "Design Systems", "Wireframing", "Prototyping"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
             A comprehensive toolkit for building scalable digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-colors hover:bg-white/5 group"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
