import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { StructuredData } from "@/components/structured-data";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TravelMoney - Maximum VAT Refunds for International Shoppers",
  description: "Get up to 100% VAT refunds when shopping abroad. Instant refunds, AI shopping assistant, and zero paperwork. Shop smarter, travel richer with TravelMoney.",
  keywords: ["VAT refund", "tax-free shopping", "travel shopping", "international shopping", "duty-free", "tourism", "shopping abroad"],
  authors: [{ name: "TravelMoney" }],
  creator: "TravelMoney",
  publisher: "TravelMoney",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://travelmoney.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travelmoney.com",
    title: "TravelMoney - Maximum VAT Refunds for International Shoppers",
    description: "Get up to 100% VAT refunds when shopping abroad. Instant refunds, AI shopping assistant, and zero paperwork.",
    siteName: "TravelMoney",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1600,
        height: 1000,
        alt: "TravelMoney - Travel shopping made easy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelMoney - Maximum VAT Refunds for International Shoppers",
    description: "Get up to 100% VAT refunds when shopping abroad. Instant refunds, AI shopping assistant, and zero paperwork.",
    images: ["/images/hero-image.png"],
    creator: "@travelmoney",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D4ED8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
