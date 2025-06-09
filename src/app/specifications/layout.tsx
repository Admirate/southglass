import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Technical Specifications - South Glass',
  description: 'Comprehensive technical specifications for South Glass products including manufacturing processes, glass types, electrical systems, bullet resistant, blast resistant, burglar resistant, and fire resistant glass specifications.',
  keywords: ["glass specifications", "technical data", "manufacturing specs", "bullet resistant glass", "fire resistant glass", "blast resistant glass", "burglar resistant glass", "glass manufacturing standards", "EN 1063", "NATO STANAG", "EN 14449"],
  alternates: {
    canonical: 'https://southglass.com/specifications',
  },
  openGraph: {
    title: 'Technical Specifications - South Glass',
    description: 'Comprehensive technical specifications for South Glass products including manufacturing processes, glass types, electrical systems, and safety glass standards.',
    url: 'https://southglass.com/specifications',
    type: 'website',
    images: [
      {
        url: `/api/og?title=Technical%20Specifications&description=Comprehensive%20Glass%20Specifications&type=specifications`,
        width: 1200,
        height: 630,
        alt: 'South Glass Technical Specifications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Specifications - South Glass',
    description: 'Comprehensive technical specifications for South Glass products including manufacturing processes, glass types, electrical systems, and safety glass standards.',
    images: [`/api/og?title=Technical%20Specifications&description=Comprehensive%20Glass%20Specifications&type=specifications`],
  },
};

export default function SpecificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 