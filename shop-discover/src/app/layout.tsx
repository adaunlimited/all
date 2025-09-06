import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Discover | Shop',
  description: 'Discover new collections with a sleek, optimized Next.js app.',
  applicationName: 'Shop Discover',
  appleWebApp: true,
  formatDetection: { telephone: false },
  metadataBase: new URL('https://example.com'),
  icons: [{ rel: 'icon', url: '/icon.png' }]
};

export const viewport: Viewport = {
  themeColor: '#f2eaff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

