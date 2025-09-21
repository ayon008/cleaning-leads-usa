import { NextResponse } from 'next/server';

// Function to fetch blog posts from WordPress API
async function getBlogPosts() {
  try {
    const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;
    if (!WP_API_URL) {
      console.warn('WordPress API URL not configured');
      return [];
    }

    const res = await fetch(
      `${WP_API_URL}/posts?per_page=100&status=publish&_fields=slug,modified,date,title,excerpt,featured_media`,
      { 
        next: { revalidate: 1800 }, // Cache for 30 minutes
        headers: {
          'User-Agent': 'CleaningLeadsUSA-Sitemap/1.0'
        }
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch blog posts:', res.status);
      return [];
    }

    const posts = await res.json();
    return posts.map((post: {
      slug: string;
      modified?: string;
      date: string;
      title?: { rendered: string } | string;
      excerpt?: { rendered: string } | string;
    }) => ({
      url: `/blogs/${post.slug}`,
      lastModified: new Date(post.modified || post.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
      title: typeof post.title === 'string' ? post.title : post.title?.rendered || 'Blog Post',
      excerpt: typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered || '',
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

export async function GET() {
  const baseUrl = 'https://cleaningleadsusa.com';
  
  // Fetch dynamic blog posts
  const blogPosts = await getBlogPosts();

  // Generate blog-specific sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${blogPosts
  .map(
    (post: {
      url: string;
      lastModified: string;
      changeFrequency: string;
      priority: number;
      title: string;
      excerpt: string;
    }) => `  <url>
    <loc>${baseUrl}${post.url}</loc>
    <lastmod>${post.lastModified}</lastmod>
    <changefreq>${post.changeFrequency}</changefreq>
    <priority>${post.priority}</priority>
    <news:news>
      <news:publication>
        <news:name>Cleaning Leads USA Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.lastModified}</news:publication_date>
      <news:title>${post.title || 'Blog Post'}</news:title>
    </news:news>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800',
    },
  });
}
