"use client";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Putu Astika - Digital Craftsman</title>
        <meta name="description" content="Building elegant and performant web experiences." />
      </head>
      <body>
        <Navbar />
        <main className="pt-16 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
