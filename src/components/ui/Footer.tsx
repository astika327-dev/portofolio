"use client";
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/astika327-dev", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/putuastika", label: "LinkedIn" },
    { icon: Mail, href: "mailto:astika327@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-16 md:py-20 px-4 border-t border-white/10 bg-background relative overflow-hidden">
       {/* Background Gradient Bloom */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-900/20 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-serif tracking-tight mb-4 block">
              Astika.
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Full-stack developer specializing in building enterprise-grade web applications. 
              Crafting digital excellence from Bali to the world.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
               <Link href="/" className="hover:text-white transition-colors">Home</Link>
               <Link href="/about" className="hover:text-white transition-colors">About</Link>
               <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
               <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
               <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Bali, Indonesia</span>
              </div>
              <a 
                href="mailto:astika327@gmail.com" 
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>astika327@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/6282146178461" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+62 821-4617-8461</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Putu Astika. All rights reserved.</p>

          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               Available for projects
             </span>
             <span className="w-px h-4 bg-white/10" />
             <a
              href="https://bali-webdevelover.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
             >
               bali-webdevelover.com
               <ExternalLink className="w-3 h-3" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
