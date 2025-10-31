"use client";
import React from "react";
import { motion } from "framer-motion";
import { name, Iam } from "../data";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-4 text-center text-white bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold md:text-7xl"
      >
        {name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg md:text-2xl"
      >
        I am a{" "}
        <span className="text-indigo-400">
          {Iam.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 1.5 + 1,
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
              className="absolute"
            >
              {item}
            </motion.span>
          ))}
          <span className="opacity-0">{Iam[0]}</span>
        </span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <Button href="#contact">Get in Touch</Button>
      </motion.div>
    </section>
  );
};

export default Hero;
