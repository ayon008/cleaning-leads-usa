import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Commercial Cleaning USA',
    short_name: 'CleaningUSA',
    description:
      'Professional janitorial appointment and cleaning services across the US.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    orientation: 'portrait',
    icons: [
      {
        src: '/cleaning-leads-usa-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/cleaning-leads-usa-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/cleaning-leads-usa-logo.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
