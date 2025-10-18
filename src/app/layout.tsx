import type { Metadata } from 'next';
import Script from 'next/script';
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
        {/* Preload Hero Images */}
        <link rel="preload" href="https://i.imgur.com/Wx2sPfW.png" as="image" />
        <link rel="preload" href="https://i.imgur.com/W239yce.png" as="image" />
        
        {/* Preload Video Posters */}
        <link rel="preload" href="https://i.imgur.com/zB6nu2h.png" as="image" />
        <link rel="preload" href="https://i.imgur.com/D6QBwR8.png" as="image" />
        <link rel="preload" href="https://i.imgur.com/wEMRe1d.png" as="image" />
        <link rel="preload" href="https://i.imgur.com/iysGgAt.png" as="image" />
        <link rel="preload" href="https://i.imgur.com/D6UwpFg.png" as="image" />

        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "68f05a365a032e52472e8472";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
          strategy="afterInteractive"
        ></Script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <ChatWidget />
      </body>
    </html>
  );
}
