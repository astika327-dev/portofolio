"use client";
import { Code, Server, Wind, GitBranch, Database, Framer } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Next.js", icon: <Code className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-6 h-6" /> },
  { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
  { name: "Framer Motion", icon: <Framer className="w-6 h-6" /> },
  { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">About Me</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I am a full-stack developer based in Bali, passionate about building fast, elegant, and conversion-driven websites. 
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I believe a website should not only look professional but also work as a valuable asset that drives measurable results for your company. With a strong focus on user experience and performance, I turn complex problems into beautiful and intuitive digital solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-8">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 bg-card border border-border/50 rounded-xl text-center hover:border-primary/50 hover:bg-secondary/50 transition-colors"
                >
                  <div className="mb-3 text-primary p-2 bg-primary/10 rounded-full">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
