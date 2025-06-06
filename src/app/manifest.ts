import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'South Glass',
    short_name: 'South Glass',
    description: 'South Glass offers innovative architectural, automotive, and specialty glass solutions with a focus on quality, safety, and sustainability since 2014.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#1a237e',
    icons: [
      {
        src: '/SG-LOGO-01.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/SG-LOGO-01.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/SG-LOGO-01.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/SG-LOGO-01.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
} 