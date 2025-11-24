"use client";
import { motion } from 'framer-motion';
import { 
  Layout, 
  Database, 
  Terminal, 
  Figma
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive, and accessible user interfaces.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML5/CSS3", level: 98 }
    ]
  },
  {
    title: "Backend & Infrastructure",
    description: "Robust server-side logic and scalable database architectures.",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma ORM", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Docker", level: 60 }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Streamlining development with modern tools and practices.",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Agile/Scrum", level: 80 }
    ]
  },
  {
    title: "Design & Creative",
    description: "Bridging the gap between design and engineering.",
    icon: <Figma className="w-6 h-6 text-pink-400" />,
    skills: [
      { name: "Figma", level: 75 },
      { name: "UI/UX Principles", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Wireframing", level: 80 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          >
            Technical Proficiency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I constantly push myself to learn new technologies and improve my craft. 
            Here is a breakdown of my current technical stack and proficiency levels.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group/skill">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-white/80 to-white/40 rounded-full group-hover/skill:from-white group-hover/skill:to-white/80 transition-colors"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional "Soft" Skills or Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center"
        >
          <h3 className="text-2xl font-serif font-bold mb-4">Always Learning</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Technology moves fast, and so do I. I am currently exploring 
            <span className="text-white font-medium"> AI Integration</span>, 
            <span className="text-white font-medium"> WebGL</span>, and 
            <span className="text-white font-medium"> Advanced System Architecture</span> 
            to further expand my capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Communication", "Mentorship", "Project Management"].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-white/80">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
