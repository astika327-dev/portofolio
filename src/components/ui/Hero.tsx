"use client";
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Putu Astika
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
      >
        I build elegant, high-performance web applications that solve real-world problems and drive business growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <a
          href="#my-work"
          className="group inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-primary/90 hover:shadow-primary/25 hover:scale-105 focus:outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          View My Work 
          <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
