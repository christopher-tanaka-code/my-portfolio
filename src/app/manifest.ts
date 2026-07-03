import type { MetadataRoute } from 'next';

import { profile } from '@/lib/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  const name = `${profile.name} | ${profile.title}`;
  const short_name = 'CT Portfolio';
  const theme_color = '#0b0b12';
  const background_color = '#0b0b12';

  return {
    name,
    short_name,
    start_url: '/',
    display: 'standalone',
    theme_color,
    background_color,
    description:
      'Senior Software Engineer with 12+ years building high-performance, user-centric web applications with React, Next.js, and AI-powered systems.',
    icons: [
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'maskable',
      },
    ],
  };
}
