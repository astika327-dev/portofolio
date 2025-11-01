"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Putu Astika. All rights reserved.
          </p>
          <a
            href="https://bali-webdevelover.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-400 hover:text-white transition-colors duration-300 mt-1"
          >
            bali-webdevelover.com
          </a>
        </div>
        <div className="text-center sm:text-right mt-4 sm:mt-0">
            <p className="text-sm text-gray-500">
                Designed & Built by Jules for Astika
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
