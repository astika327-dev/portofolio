"use client";
import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-900"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
      />
    </div>
  );
};

export default Background;
