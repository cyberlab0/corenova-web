import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ConsentProvider } from "@/components/providers/consent-provider";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { WebVitals } from "@/components/analytics/web-vitals";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corenova Technologies Ltd | Engineering the Future",
  description: "We build intelligent software, automate business operations, secure digital infrastructure and develop scalable web applications for businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark scroll-smooth`}
    >
      <head>
        <StructuredData />
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <ConsentProvider>
          <LenisProvider>
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <GoogleAnalytics />
            <WebVitals />
            <CookieBanner />
          </LenisProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
