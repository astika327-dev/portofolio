"use client";
import React from "react";
import { motion } from "framer-motion";
import { about } from "../data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          {about.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-center text-gray-400"
        >
          {about.description}
        </motion.p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {about.work.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
