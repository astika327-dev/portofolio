import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Putu Astika — Builder, Operator, Problem-solver.',
  description: 'Putu Astika • Builder, Operator, Problem-solver. Lean web, responsible AI, and ops systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
