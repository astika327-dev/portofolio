"use client";
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import SkillTag from "./SkillTag";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          My Skills
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.skills.map((item, index) => (
                  <SkillTag key={index}>{item}</SkillTag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
