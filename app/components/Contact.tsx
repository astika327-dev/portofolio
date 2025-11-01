"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
            <div className="text-center">
                <MagicButton
                title="Send Message"
                icon={<FaPaperPlane />}
                position="right"
                />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
