import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ranilo John | Cybersecurity & IT Portfolio',
  description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
  openGraph: {
    title: 'Ranilo John | Cybersecurity & IT Portfolio',
    description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
    images: [
      {
        url: '/images/Python.jpg',
        width: 800,
        height: 600,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
