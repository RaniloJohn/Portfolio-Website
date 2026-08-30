import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ranilojohn.github.io/Portfolio-Website'),
  title: 'Ranilo John | Cybersecurity & IT Portfolio',
  description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
  icons: {
    icon: '/Portfolio-Website/images/ranilojohn.jpg',
    shortcut: '/Portfolio-Website/images/ranilojohn.jpg',
    apple: '/Portfolio-Website/images/ranilojohn.jpg',
  },
  openGraph: {
    title: 'Ranilo John | Cybersecurity & IT Portfolio',
    description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
    url: 'https://ranilojohn.github.io/Portfolio-Website/',
    siteName: 'Ranilo John Portfolio',
    images: [
      {
        url: 'https://ranilojohn.github.io/Portfolio-Website/images/ranilojohn.jpg',
        width: 800,
        height: 800,
        alt: 'Ranilo John Delos Angeles',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ranilo John | Cybersecurity & IT Portfolio',
    description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
    images: ['https://ranilojohn.github.io/Portfolio-Website/images/ranilojohn.jpg'],
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
