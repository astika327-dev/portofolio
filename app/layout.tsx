"use client";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Putu Astika - Digital Craftsman</title>
        <meta name="description" content="Building elegant and performant web experiences." />
      </head>
      <body>
        <header className="py-6">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-2xl font-bold">
              Astika
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about">About</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/work">Work</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-bg-alt shadow-lg">
              <nav className="flex flex-col items-center space-y-4 py-4">
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
                <Link href="/work" onClick={() => setIsMenuOpen(false)}>Work</Link>
                <Link href="/contact" onClick={() => setIsMenuОpen(false)}>Contact</Link>
              </nav>
            </div>
          )}
        </header>
        {children}
        <footer className="py-6 mt-24 bg-bg-alt">
          <div className="container mx-auto text-center text-ink-subtle">
            <p>&copy; {new Date().getFullYear()} Putu Astika. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
