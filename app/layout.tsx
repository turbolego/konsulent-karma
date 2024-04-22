import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head";
import { cn } from "@/lib/utils";
import type { Viewport, Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
 
export const metadata: Metadata = {
  title: 'Konsulentkarma - "Svartelisten" for konsulentselskap. Mistet sommerjobben?',
  description:
    "Mistet sommerjobben/internship/graduate? Disse selskapene har kansellert sommerjobber, graduate-programmer eller nyansettelser i siste liten.",
  keywords: [
    "konsulent",
    "internship",
    "mistet sommerjobb",
    "svarteliste konsulentselskap",
    "konsulentkarma",
    "konsulentselskap internship", 
  ],
  metadataBase: new URL("https://www.konsulentkarma.no"),
  openGraph: {
    siteName: 'Konsulentkarma - "Svartelisten" for konsulentselskap',
    type: "website",
    locale: "NO"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://www.konsulentkarma.no/rss.xml"
    }
  },
  applicationName: 'Konsulentkarma - "Svartelisten" for konsulentselskap',
  appleWebApp: {
    title: 'Konsulentkarma - "Svartelisten" for konsulentselskap',
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "google-site-verification=9JFFHstlt6c5zlDRpbBHMX5DtwmJMhY0Nir8fxEh5l0",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
  }
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
