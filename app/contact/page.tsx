"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // For example, sending an email or saving to a database.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Get In Touch
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-center text-gray-400">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {isSubmitted ? (
          <div className="text-center p-8 bg-gray-800/50 border border-green-500 rounded-lg">
            <h2 className="text-2xl font-bold text-green-400">Thank you!</h2>
            <p className="text-gray-300 mt-2">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;
