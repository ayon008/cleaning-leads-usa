/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetadataRoute } from 'next'
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100&_embed`, {
        // revalidate every 1h
        next: { revalidate: 3600 },
    })

    if (!res.ok) {
        throw new Error("Failed to fetch WordPress posts")
    }

    const posts = await res.json();
    const blogUrls = posts.map((post: any) => ({
        url: `https://commercial-cleaning-usa.vercel.app/blogs/${post.slug}`,
        lastModified: post.modified || new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }))

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
            url: 'https://commercial-cleaning-usa.vercel.app/blogs',
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
        ...blogUrls,
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