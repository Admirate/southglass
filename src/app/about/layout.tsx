import { Metadata, Viewport } from 'next';
import { LenisProvider } from "@/app/providers/LenisProvider";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'About Us - South Glass',
  description: 'Learn about South Glass\'s journey since 2014, our vision, mission, infrastructure, certifications, and what makes us the leader in premium glass solutions in India.',
  keywords: ["about South Glass", "glass manufacturer history", "glass company India", "tempered glass manufacturer", "architectural glass supplier", "automotive glass OEM", "glass manufacturing facility", "glass certifications", "fire-rated glass India", "ISO certified glass company"],
  alternates: {
    canonical: 'https://southglass.com/about',
  },
  openGraph: {
    title: 'About South Glass - Our Story & Vision',
    description: 'Learn about South Glass\'s journey since 2014, our vision, mission, infrastructure, certifications, and what makes us the leader in premium glass solutions in India.',
    url: 'https://southglass.com/about',
    type: 'website',
    images: [
      {
        url: `/api/og?title=About%20South%20Glass&description=Our%20Story%20%26%20Vision&type=about`,
        width: 1200,
        height: 630,
        alt: 'About South Glass - Our Story & Vision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About South Glass - Our Story & Vision',
    description: 'Learn about South Glass\'s journey since 2014, our vision, mission, infrastructure, certifications, and what makes us the leader in premium glass solutions in India.',
    images: [`/api/og?title=About%20South%20Glass&description=Our%20Story%20%26%20Vision&type=about`],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LenisProvider>{children}</LenisProvider>;
} 
