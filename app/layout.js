import { Inter } from 'next/font/google';

import { config } from '@data/config';
import { GlobalProvider } from '@utils/GlobalContext';

import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL),
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: process.env.NEXT_PUBLIC_WEB_URL,
    images: '/og.png',
    type: 'website',
    siteName: config.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body className={inter.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
