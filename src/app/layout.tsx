import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Astika's Portfolio",
  description: "A professional portfolio showcasing the work of Putu Astika, a full-stack developer based in Bali.",
  verification: {
    google: "7MH78InBnZn8HuWcXtEjAX6_MRbkfgLpNVsUnWsdPGg",
  },
  openGraph: {
    title: "Astika's Portfolio",
    description: "A professional portfolio showcasing the work of Putu Astika, a full-stack developer based in Bali.",
    url: "https://astika.is-a.dev",
    siteName: "Astika's Portfolio",
    images: [
      {
        // TODO: Replace with a custom-designed OG image
        url: 'https://placehold.co/1200x630/111827/E5E7EB?text=Astika.is-a.dev',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Astika's Portfolio",
    description: "A professional portfolio showcasing the work of Putu Astika, a full-stack developer based in Bali.",
    images: ['https://placehold.co/1200x630/111827/E5E7EB?text=Astika.is-a.dev'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
