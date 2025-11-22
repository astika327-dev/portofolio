"use client";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 px-4 border-t border-white/10 bg-background relative overflow-hidden">
       {/* Background Gradient Bloom */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-900/20 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold font-serif tracking-tight mb-2 block">
              Astika.
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building digital excellence from Bali to the world.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
             <Link href="#about" className="hover:text-white transition-colors">About</Link>
             <Link href="#my-work" className="hover:text-white transition-colors">Projects</Link>
             <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>© {currentYear} Putu Astika. All rights reserved.</p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
             <span>Based in Bali, Indonesia</span>
             <span className="w-1 h-1 rounded-full bg-white/20" />
             <a
              href="https://bali-webdevelover.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
             >
               bali-webdevelover.com
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
