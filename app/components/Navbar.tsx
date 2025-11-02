"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { name } from "../data"; // Assuming data is in app/data.ts
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-gray-900/80 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold text-white tracking-wider">
                {name} <span className="text-purple-400">.</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-lg ${
                    pathname === link.href ? "text-purple-400" : "text-gray-300"
                  } hover:text-white transition-colors duration-300`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-purple-400"
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
              <ThemeToggle />
            </nav>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="z-50 text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-around">
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                    className="block w-full h-0.5 bg-white"
                  ></motion.span>
                  <motion.span
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    className="block w-full h-0.5 bg-white"
                  ></motion.span>
                  <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    className="block w-full h-0.5 bg-white"
                  ></motion.span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-4xl"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
