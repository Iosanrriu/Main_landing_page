import type { Metadata } from 'next';
import '@/styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Arc Solutions',
  description: 'Consulting studio focused on data engineering and custom software for SMBs.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-slate-950/58" />
        <LanguageProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-24 md:pt-28">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
