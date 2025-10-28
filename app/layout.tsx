import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Putu Astika - Digital Craftsman",
  description: "Building elegant and performant web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
          </div>
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
