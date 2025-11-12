"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/animations";
import { Briefcase, GraduationCap } from "lucide-react";

const AboutPage = () => {
  const timelineData = [
    {
      type: "work",
      date: "2023 - Present",
      title: "Freelance Web Developer",
      description:
        "Developing and maintaining websites for various clients, focusing on performance and user experience.",
    },
    {
      type: "education",
      date: "2020 - 2024",
      title: "Bachelor of Computer Science",
      description: "University of Example, focusing on web development and AI.",
    },
  ];

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-16">
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
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="md:col-span-1 flex justify-center"
          >
            <Image
              src="https://via.placeholder.com/300"
              alt="Putu Astika"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="md:col-span-2"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a full-stack developer based in Bali, passionate about
              building fast, elegant, and conversion-driven websites. I believe
              a website should not only look professional but also work as a
              valuable asset that drives measurable results for your company.
              With a strong focus on user experience and performance, I turn
              complex problems into beautiful and intuitive digital solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="w-full mt-20"
        >
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            My Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center w-full mb-8 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-card rounded-lg border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.date}
                    </p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;