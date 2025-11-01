"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
