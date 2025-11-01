"use client";
import { skills } from "../data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.skills.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
