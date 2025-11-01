"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import TransitionProvider from "./components/TransitionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Putu Astika - Digital Craftsman</title>
        <meta name="description" content="Building elegant and performant web experiences." />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-20">
            <TransitionProvider>{children}</TransitionProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
