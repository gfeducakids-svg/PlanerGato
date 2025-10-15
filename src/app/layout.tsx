import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { ChatWidget } from '@/components/chat/ChatWidget';

export const metadata: Metadata = {
  title: 'Purrfect Play Planner',
  description: 'Transforme 5 minutos por dia no momento favorito do seu gato.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Nunito:wght@600&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <ChatWidget />
      </body>
    </html>
  );
}
