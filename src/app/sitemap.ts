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
        url: `https://cleaningleadsusa.com/blogs/${post.slug}`,
        lastModified: post.modified || new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }))

    return [
        {
            url: 'https://cleaningleadsusa.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://cleaningleadsusa.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://cleaningleadsusa.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://cleaningleadsusa.com/appointments',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://cleaningleadsusa.com/faq',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogUrls,
        {
            url: 'https://cleaningleadsusa.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://cleaningleadsusa.com/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://cleaningleadsusa.com/terms-and-conditions',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://cleaningleadsusa.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://cleaningleadsusa.com/web-development-service',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://cleaningleadsusa.com/support',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: 'https://cleaningleadsusa.com/career',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
    ]
}