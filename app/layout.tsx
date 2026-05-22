import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

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
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
