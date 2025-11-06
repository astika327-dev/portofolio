// src/components/ui/About.tsx
import { Code, Server, Wind, GitBranch, Database, Framer } from 'lucide-react';

const skills = [
  { name: "Next.js", icon: <Code className="w-8 h-8" /> },
  { name: "TypeScript", icon: <Code className="w-8 h-8" /> },
  { name: "Node.js", icon: <Server className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
  { name: "Framer Motion", icon: <Framer className="w-8 h-8" /> },
  { name: "Git", icon: <GitBranch className="w-8 h-8" /> },
];

export default function About() {
  return (
    <section className="bg-secondary py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am a full-stack developer based in Bali, passionate about building fast, elegant, and conversion-driven websites. I believe a website should not only look professional but also work as a valuable asset that drives measurable results for your company. With a strong focus on user experience and performance, I turn complex problems into beautiful and intuitive digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">My Skills</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-card border rounded-lg w-28 text-center transition-transform transform hover:scale-105">
                  {skill.icon}
                  <span className="mt-2 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
