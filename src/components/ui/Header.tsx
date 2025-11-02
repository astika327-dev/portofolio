import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm">
      <Link href="/" className="text-2xl font-bold">
        Astika
      </Link>
      <nav className="flex gap-4">
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/skills" className="hover:text-primary transition-colors">Skills</Link>
        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
      </nav>
    </header>
  );
}
