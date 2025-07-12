import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NSTU Research Society',
  description: 'Official website of the Noakhali Science and Technology University Research Society (NSTURS)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 