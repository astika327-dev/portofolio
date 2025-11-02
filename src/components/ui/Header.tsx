import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/" className="text-2xl font-bold">
        Astika
      </Link>
      <nav className="flex gap-4">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </nav>
    </header>
  );
}
