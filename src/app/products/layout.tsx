import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Products - South Glass',
  description: 'Discover our premium glass products for architectural, automotive, and specialty applications. High-quality safety glass solutions for every need.',
  openGraph: {
    title: 'Products - South Glass Solutions',
    description: 'Discover our premium glass products for architectural, automotive, and specialty applications. High-quality safety glass solutions for every need.',
    url: 'https://southglass.com/products',
    images: [
      {
        url: `/api/og?title=South%20Glass%20Products&description=Premium%20Glass%20Solutions%20for%20Every%20Need&type=products`,
        width: 1200,
        height: 630,
        alt: 'South Glass Products Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products - South Glass Solutions',
    description: 'Discover our premium glass products for architectural, automotive, and specialty applications. High-quality safety glass solutions for every need.',
    images: [`/api/og?title=South%20Glass%20Products&description=Premium%20Glass%20Solutions%20for%20Every%20Need&type=products`],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <{children};
} 
