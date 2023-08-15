import './globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic, Poppins } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Navbar from './Header';
import BubbleEffect from './bubbleEffect';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Travel recommandation',
  description: 'Generated by travel recommandation app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <BubbleEffect />
      </body>
    </html>
  );
}
