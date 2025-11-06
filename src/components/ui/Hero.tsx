"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold font-heading mb-4"
      >
        Putu Astika
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mt-4 text-lg text-muted-foreground mb-8"
      >
        I build elegant, high-performance web applications that solve
        real-world problems and drive business growth.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#my-work"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-md shadow-md bg-primary hover:bg-primary/90 focus:shadow-outline focus:outline-none"
      >
        View My Work <ArrowDown className="w-4 h-4 ml-2" />
      </motion.a>
    </section>
  );
}
