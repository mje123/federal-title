import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LayoutShell } from '@/components/layout/LayoutShell';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { ChatWidget } from '@/components/chat/ChatWidget';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});
export const metadata: Metadata = {
  title: {
    default: 'Federal Title & Escrow Company | DC, MD & VA Title Insurance',
    template: '%s | Federal Title & Escrow',
  },
  description:
    'Attorney-led independent title company serving DC, Maryland & Virginia for 30+ years. Get your guaranteed quote online and save up to $750 with our REAL Credit.',
  metadataBase: new URL('https://www.federaltitle.com'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Federal Title & Escrow Company',
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@dcTitleCompany',
    site: '@dcTitleCompany',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S3YPJW93XR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S3YPJW93XR');
          `}
        </Script>
        <LayoutShell banner={<AnnouncementBanner />}>{children}</LayoutShell>
        <ChatWidget />
      </body>
    </html>
  );
}
