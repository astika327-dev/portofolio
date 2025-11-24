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
  metadataBase: new URL('https://putuastika.com'), // Replace with actual domain if known, or localhost for now
  title: {
    default: "Putu Astika - Full Stack Developer",
    template: "%s | Putu Astika"
  },
  description: "Full-stack developer specializing in building enterprise-grade web applications with modern technologies. Based in Bali, Indonesia.",
  keywords: ["Full Stack Developer", "Web Developer", "Bali", "Indonesia", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Putu Astika", url: "https://putuastika.com" }],
  creator: "Putu Astika",
  openGraph: {
    title: "Putu Astika - Full Stack Developer",
    description: "Building exceptional digital experiences with a focus on performance and design.",
    url: "https://putuastika.com",
    siteName: "Putu Astika Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image", // Next.js will automatically generate this
        width: 1200,
        height: 630,
        alt: "Putu Astika - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Putu Astika - Full Stack Developer",
    description: "Full-stack developer based in Bali. Creating premium web experiences.",
    creator: "@putuastika", // Placeholder
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon", // Next.js will automatically generate this
    apple: "/icon",
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
