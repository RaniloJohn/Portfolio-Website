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
    icon: '/Portfolio-Website/images/DrDOOM.png',
    shortcut: '/Portfolio-Website/images/DrDOOM.png',
    apple: '/Portfolio-Website/images/DrDOOM.png',
  },
  openGraph: {
    title: 'Ranilo John | Cybersecurity & IT Portfolio',
    description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
    url: 'https://ranilojohn.github.io/Portfolio-Website/',
    siteName: 'Ranilo John Portfolio',
    images: [
      {
        url: 'https://ranilojohn.github.io/Portfolio-Website/images/DrDOOM.png',
        width: 1200,
        height: 630,
        alt: 'Ranilo John Delos Angeles | Portfolio',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ranilo John | Cybersecurity & IT Portfolio',
    description: 'Portfolio of Ranilo John, a Computer Engineering student specializing in Cybersecurity, Networking, and web development.',
    images: ['https://ranilojohn.github.io/Portfolio-Website/images/DrDOOM.png'],
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
