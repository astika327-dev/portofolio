'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="nav__brand" aria-label="Homepage" title="Putu Astika">
          <Image src="/assets/profile.png" alt="PA logo" width="32" height="32" />
          <span className="nav__brand-text">Putu Astika</span>
        </Link>
        <button
          className="nav__toggle"
          type="button"
          aria-controls="nav-menu"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span aria-hidden="true">☰</span>
        </button>
        <div className={`nav__menu ${isNavOpen ? 'open' : ''}`} id="nav-menu">
          <Link href="/" className="nav__link" data-page-link="home">Home</Link>
          <Link href="/work" className="nav__link" data-page-link="work">Work</Link>
          <Link href="/skills" className="nav__link" data-page-link="skills resume">Skills</Link>
          <Link href="/about" className="nav__link" data-page-link="about">About</Link>
          <Link href="/contact" className="nav__link" data-page-link="contact">Contact</Link>
          <a className="nav__link nav__link--external" href="https://bali-webdevelover.com" target="_blank" rel="noopener">Bali WebDeveloper ↗</a>
          <Link href="/skills#resume" className="nav__cta" data-page-link="skills resume">Resume</Link>
        </div>
      </nav>
    </header>
  );
}
