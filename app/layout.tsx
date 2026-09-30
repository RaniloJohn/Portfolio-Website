import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource/jetbrains-mono/400.css';
import './globals.css';

const description =
  'Portfolio of Ranilo John Delos Angeles, a Computer Engineering student specializing in cybersecurity, networking, and SOC operations.';

export const viewport: Viewport = {
  themeColor: '#efefee',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ranilojohn.github.io/Portfolio-Website'),
  title: 'Ranilo John | Cybersecurity & Networking Portfolio',
  description,
  icons: {
    icon: '/Portfolio-Website/images/youtube logo thumbnail.jpg.png',
    shortcut: '/Portfolio-Website/images/youtube logo thumbnail.jpg.png',
    apple: '/Portfolio-Website/images/youtube logo thumbnail.jpg.png',
  },
  openGraph: {
    title: 'Ranilo John | Cybersecurity & Networking Portfolio',
    description,
    url: 'https://ranilojohn.github.io/Portfolio-Website/',
    siteName: 'Ranilo John Portfolio',
    images: [
      {
        url: 'https://ranilojohn.github.io/Portfolio-Website/images/DrDOOM.png',
        width: 1200,
        height: 630,
        alt: 'Ranilo John Delos Angeles | Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ranilo John | Cybersecurity & Networking Portfolio',
    description,
    images: ['https://ranilojohn.github.io/Portfolio-Website/images/DrDOOM.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link tape">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
