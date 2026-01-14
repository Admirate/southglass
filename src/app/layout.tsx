import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CriticalPreload from "@/components/critical-preload";
import Script from "next/script";
import { LenisProvider } from "./providers/LenisProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap" // Improve text rendering performance
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#1a237e" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://southglass.com'),
  title: {
    template: '%s | South Glass',
    default: "South Glass - Premium Glass Solutions"
  },
  description: "South Glass offers innovative architectural, automotive, and specialty glass solutions with a focus on quality, safety, and sustainability since 2014.",
  keywords: ["glass manufacturing", "tempered glass", "architectural glass", "automotive glass", "safety glass", "premium glass", "South Glass", "glass solutions", "Indian glass manufacturer"],
  authors: [{ name: "South Glass", url: "https://southglass.com" }],
  generator: "Next.js",
  applicationName: "South Glass",
  referrer: "origin-when-cross-origin",
  creator: "South Glass",
  publisher: "South Glass",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/SG-LOGO-01.png",
    shortcut: "/SG-LOGO-01.png",
    apple: "/SG-LOGO-01.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "South Glass",
    title: "South Glass - Premium Glass Solutions",
    description: "South Glass offers innovative architectural, automotive, and specialty glass solutions with a focus on quality, safety, and sustainability since 2014.",
    images: [
      {
        url: `/api/og?title=South%20Glass&description=Premium%20Glass%20Solutions`,
        width: 1200,
        height: 630,
        alt: "South Glass - Transforming Spaces with Premium Glass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Glass - Premium Glass Solutions",
    description: "South Glass offers innovative architectural, automotive, and specialty glass solutions with a focus on quality, safety, and sustainability since 2014.",
    images: [`/api/og?title=South%20Glass&description=Premium%20Glass%20Solutions`],
    creator: "@southglass",
    site: "@southglass",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
    },
  },
  verification: {
    google: "google-site-verification=YourCodeHere", // Update with actual code when available
    yandex: "yandex-verification",
    yahoo: "yahoo-verification"
  },
  category: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://southglass.com" />
        <link rel="icon" href="/SG-LOGO-01.png" />
        <link rel="apple-touch-icon" href="/SG-LOGO-01.png" />
        <link rel="shortcut icon" href="/SG-LOGO-01.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <CriticalPreload />
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        
       <LenisProvider>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </LenisProvider>
        
        {/* Structured data for organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "South Glass",
              "url": "https://southglass.com",
              "logo": "https://southglass.com/SG-LOGO-01.png",
              "sameAs": [
                "https://www.facebook.com/southglass",
                "https://www.instagram.com/southglass",
                "https://www.linkedin.com/company/southglass"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "contact@southglass.com",
                "availableLanguage": ["English"]
              },
              "description": "South Glass offers innovative architectural, automotive, and specialty glass solutions with a focus on quality, safety, and sustainability since 2014.",
              "foundingDate": "2014",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Glass Avenue",
                "addressLocality": "Innovation City",
                "addressCountry": "India"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
