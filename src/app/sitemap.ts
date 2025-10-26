/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetadataRoute } from 'next'
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cleaningleadsusa.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let posts: any[] = [];
    if (WP_API_URL) {
        const res = await fetch(`${WP_API_URL}/posts?per_page=100&_embed`, {
            // revalidate every 1h
            next: { revalidate: 3600 },
        })

        if (res.ok) {
            posts = await res.json();
        }
    }

    const blogUrls = posts.map((post: any) => {
        // Normalize post.modified/post.date into an ISO date string (YYYY-MM-DD)
        const raw = post.modified || post.date || new Date().toISOString();
        const d = new Date(raw);
        const isoDate = isNaN(d.getTime()) ? new Date().toISOString().split('T')[0] : d.toISOString().split('T')[0];
        return {
            url: `${SITE_URL}/blogs/${post.slug}`,
            lastModified: isoDate,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }
    })

    return [
        {
            url: `${SITE_URL}/`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blogs`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/appointments`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.cleaningleadsusa.com/faq',
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogUrls,
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/terms-and-conditions`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/web-development-service`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/career`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly',
            priority: 0.4,
        },
    ]
}