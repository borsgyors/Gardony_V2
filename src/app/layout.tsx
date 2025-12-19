import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gárdony Város Önkormányzat",
  description: "Gárdony Város Önkormányzatának hivatalos honlapja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {/* Skip link for keyboard users */}
          <a href="#content" className="skip-link">Ugrás a tartalomra</a>
          <SiteHeader />
          <main id="content" role="main">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}