import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Putu Astika - Full Stack Developer",
  description: "Full-stack developer specializing in building enterprise-grade web applications with modern technologies. Based in Bali, Indonesia.",
  keywords: ["Full Stack Developer", "Web Developer", "Bali", "Indonesia", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Putu Astika" }],
  openGraph: {
    title: "Putu Astika - Full Stack Developer",
    description: "Full-stack developer specializing in building enterprise-grade web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
