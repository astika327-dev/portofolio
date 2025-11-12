"use client";
import { motion, Variants } from "framer-motion";
import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/animations";
import {
  Code,
  Palette,
  Server,
  Wrench,
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend & Data",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    skills: [{ name: "Figma", level: 90 }],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 70 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-medium text-muted-foreground">
        {level}%
      </span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2.5">
      <motion.div
        className="bg-primary h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        } as Variants}
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="text-4xl font-bold font-serif text-center mb-12"
        >
          My Skills
        </motion.h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={FADE_IN_ANIMATION_VARIANTS}
              className="bg-card p-6 rounded-lg border"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h2 className="text-2xl font-semibold">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;