"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative -mt-16 w-full overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto flex min-h-screen items-center justify-center p-4 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          } as Variants}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h1
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl font-serif"
          >
            Halo, saya Putu Astika
          </motion.h1>
          <motion.p
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Seorang Web Developer yang bersemangat menciptakan pengalaman
            digital yang intuitif dan indah.
          </motion.p>
          <motion.div
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link href="/projects" passHref>
              <Button size="lg" className="group">
                Lihat Portofolio Saya
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Hubungi Saya
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}