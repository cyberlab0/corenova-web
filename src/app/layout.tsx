import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { CookieBanner } from "@/components/ui/cookie-banner";

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
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <LenisProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <CookieBanner />
        </LenisProvider>
      </body>
    </html>
  );
}
