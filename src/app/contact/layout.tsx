import { Metadata, Viewport } from 'next';
import { LenisProvider } from "@/app/providers/LenisProvider";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Contact Us - South Glass',
  description: 'Get in touch with South Glass for premium glass solutions, quotes, or support. Our team is ready to help with your glass needs.',
  openGraph: {
    title: 'Contact Us - South Glass',
    description: 'Get in touch with South Glass for premium glass solutions, quotes, or support. Our team is ready to help with your glass needs.',
    url: 'https://southglass.com/contact',
    images: [
      {
        url: `/api/og?title=Contact%20South%20Glass&description=Get%20in%20Touch%20with%20Our%20Team&type=contact`,
        width: 1200,
        height: 630,
        alt: 'Contact South Glass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - South Glass',
    description: 'Get in touch with South Glass for premium glass solutions, quotes, or support. Our team is ready to help with your glass needs.',
    images: [`/api/og?title=Contact%20South%20Glass&description=Get%20in%20Touch%20with%20Our%20Team&type=contact`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LenisProvider>{children}</LenisProvider>;
} 
