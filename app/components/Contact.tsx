"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-400">Name</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-indigo-500 focus:bg-gray-700 focus:ring-0"
                placeholder="John Doe"
              />
            </label>
            <label className="block">
              <span className="text-gray-400">Email</span>
              <input
                type="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-indigo-500 focus:bg-gray-700 focus:ring-0"
                placeholder="john.doe@example.com"
              />
            </label>
            <label className="block">
              <span className="text-gray-400">Message</span>
              <textarea
                className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-indigo-500 focus:bg-gray-700 focus:ring-0"
                rows={3}
              ></textarea>
            </label>
            <Button className="w-full">
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
