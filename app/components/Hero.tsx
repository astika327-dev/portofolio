"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { name, title, shortBio } from '../data';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.4),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-grid-gray-800/50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Hi, I&apos;m {name}
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mt-4">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
          {shortBio}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              View My Work <FaArrowRight />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
