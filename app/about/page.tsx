"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skills, longBio } from '../data';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const allSkills = skills.flatMap(category => category.skills);

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          About Me
        </h1>
        <p className="max-w-3xl mt-6 text-lg text-gray-400">
          {longBio}
        </p>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-white">My Skills</h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center"
              variants={itemVariants}
            >
              <p className="text-white font-semibold">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
