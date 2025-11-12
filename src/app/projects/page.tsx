"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projectsData = [
  {
    title: "Cleanpro",
    description: "A website for a cleaning service company.",
    image:
      "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5pbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA==&fm=jpg&q=60&w=3000",
    link: "https://cleanpro-beryl.vercel.app/",
    category: "Web Design",
  },
  {
    title: "Bali WebDevelover",
    description: "A website for a web development studio.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBhZ2VuY3l8ZW58MHx8MHx8fDA=&fm=jpg&q=60&w=3000",
    link: "https://bali-webdevelover.com",
    category: "Web Development",
  },
  {
    title: "PromptCraft",
    description: "A tool for crafting and managing prompts.",
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGFic3RyYWN0fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    link: "https://promptcraft-v2.vercel.app/",
    category: "Branding",
  },
];

const categories = ["All", "Web Design", "Web Development", "Branding"];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
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
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="text-4xl font-bold font-serif text-center mb-12"
        >
          My Projects
        </motion.h1>

        <motion.div
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          } as Variants}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl font-semibold mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link href={project.link} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        Visit Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;