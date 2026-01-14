import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Projects - South Glass',
  description: 'Explore our portfolio of completed glass projects across various sectors including architectural, automotive, and specialty applications.',
  openGraph: {
    title: 'Projects - South Glass Portfolio',
    description: 'Explore our portfolio of completed glass projects across various sectors including architectural, automotive, and specialty applications.',
    url: 'https://southglass.com/projects',
    images: [
      {
        url: `/api/og?title=South%20Glass%20Projects&description=Portfolio%20of%20Premium%20Glass%20Solutions&type=projects`,
        width: 1200,
        height: 630,
        alt: 'South Glass Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - South Glass Portfolio',
    description: 'Explore our portfolio of completed glass projects across various sectors including architectural, automotive, and specialty applications.',
    images: [`/api/og?title=South%20Glass%20Projects&description=Portfolio%20of%20Premium%20Glass%20Solutions&type=projects`],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return {children};
} 
