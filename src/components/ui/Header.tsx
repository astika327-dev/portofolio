import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/40">
      <Link href="/" className="text-2xl font-bold font-serif tracking-tight">
        Astika
      </Link>
      <nav className="flex gap-6 text-sm font-medium">
        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
        <Link href="#my-work" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
