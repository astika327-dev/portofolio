"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "Bali WebDevelover",
    description:
      "A corporate website for a web development studio in Bali, focusing on performance and elegance.",
    imageUrl:
      "https://placehold.co/600x400/1a1a1a/ffffff?text=Bali+WebDevelover",
    liveUrl: "https://bali-webdevelover.com",
  },
  {
    title: "Promptcraft",
    description:
      "An AI-powered platform for creating and sharing high-quality, enterprise-grade prompts for various applications.",
    imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Promptcraft",
    liveUrl: "https://promptcraft-v2.vercel.app/",
  },
  {
    title: "U2CleanPro",
    description:
      "A professional cleaning service company website, designed to be user-friendly and informative for potential clients.",
    imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=U2CleanPro",
    liveUrl: "https://cleanpro-beryl.vercel.app/",
  },
];

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function ProjectShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="text-center"
        >
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Proyek Pilihan
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Berikut adalah beberapa proyek yang pernah saya kerjakan.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.title}
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                    unoptimized
                  />
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                  <Button asChild className="mt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kunjungi Proyek
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS as Variants}
          className="mt-12 text-center"
        >
          <Link href="/projects" passHref>
            <Button size="lg" variant="outline" className="group">
              Lihat Semua Proyek
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}