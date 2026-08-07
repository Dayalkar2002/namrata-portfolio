import type { Metadata } from 'next';
import { Inter, Cinzel, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Namrata Devalekar | Architecture & Urban Design Portfolio',
  description: 'Architectural Design Portfolio of Namrata Devalekar featuring Urban Cultural Commons in Lalbaug, Mumbai and The Vertical Paradigm Semester 7 AD project.',
  keywords: [
    'Namrata Devalekar',
    'Architecture Portfolio',
    'Urban Design',
    'Urban Cultural Commons',
    'Lalbaug Mumbai',
    'Bharat Mata Cinema',
    'The Vertical Paradigm',
    'Art Deco Architecture',
    'Mumbai Urbanism'
  ],
  authors: [{ name: 'Namrata Devalekar' }],
  openGraph: {
    title: 'Namrata Devalekar | Architecture & Urban Design Portfolio',
    description: 'Synthesizing Cultural Memory, Art Deco Identity & High-Density Urbanism.',
    type: 'website',
    images: ['/assets/portfolio/sheet_1.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${cinzel.variable} ${jetbrains.variable}`}>
      <body className="bg-arch-dark text-slate-100 antialiased selection:bg-arch-gold selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
