"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-[100px] animate-spotlight opacity-50" />
        <div className="absolute bottom-[-10%] right-[20%] w-[30rem] h-[30rem] bg-blue-900/20 rounded-full blur-[100px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            Based in Bali, Indonesia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold font-serif tracking-tighter mb-6 text-foreground leading-[1.1]"
        >
          Crafting Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Excellence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          I&apos;m Putu Astika, a full-stack developer specializing in building enterprise-grade web applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/projects"
            className="h-12 px-8 rounded-full bg-foreground text-background font-medium flex items-center justify-center hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="h-12 px-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-foreground font-medium flex items-center justify-center hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social/Tech Stack Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl flex justify-center md:justify-between items-center flex-wrap gap-8 text-muted-foreground"
        >
            <span className="text-sm uppercase tracking-widest opacity-50">Trusted by innovative companies</span>
            {/* Placeholders for logos or icons to add 'enterprise' feel */}
            <div className="flex gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Just generic tech circles for now or company names if available */}
               <div className="h-8 w-8 bg-white/10 rounded-full animate-pulse" />
               <div className="h-8 w-8 bg-white/10 rounded-full animate-pulse delay-75" />
               <div className="h-8 w-8 bg-white/10 rounded-full animate-pulse delay-150" />
               <div className="h-8 w-8 bg-white/10 rounded-full animate-pulse delay-200" />
            </div>
        </motion.div>
      </div>
    </section>
  );
}
