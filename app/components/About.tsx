"use client";
import { about } from "../data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h1 className="text-4xl font-bold text-center">
        About <span className="text-purple">Me</span>
      </h1>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {about.work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800 rounded-lg"
          >
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        {/* TODO: Add your resume.pdf to the /public folder and uncomment this button. */}
        {/* <a href="/resume.pdf" download>
          <MagicButton
            title="Download CV"
            icon={<FaDownload />}
            position="right"
          />
        </a> */}
      </div>
    </section>
  );
};

export default About;
