"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
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

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          My Projects
        </h1>
        <p className="max-w-3xl mt-6 text-lg text-gray-400">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col justify-between hover:border-purple-400 transition-colors duration-300"
            variants={itemVariants}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                </Link>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-gray-700 text-gray-300 text-sm font-medium px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
