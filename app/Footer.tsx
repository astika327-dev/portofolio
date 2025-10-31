"use client";
import React from "react";
import { socialMedia } from "./data";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Astika. All rights reserved.
          </p>
          <a
            href="https://bali-webdevelover.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 mt-1"
          >
            bali-webdevelover.com
          </a>
        </div>
        <div className="flex mt-6 sm:mt-0 space-x-6">
          {socialMedia.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-2xl">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
