import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://commercial-cleaning-usa.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/appointments',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/terms-and-conditions',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/web-development-service',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/support',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://commercial-cleaning-usa.vercel.app/career',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
    ]
}