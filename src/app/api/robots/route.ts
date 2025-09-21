import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://cleaningleadsusa.com/sitemap.xml
Sitemap: https://cleaningleadsusa.com/sitemap-blogs.xml
Sitemap: https://cleaningleadsusa.com/sitemap-index.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /wp-admin/
Disallow: /wp-content/
Disallow: /wp-includes/

# Allow important pages and dynamic content
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /blogs
Allow: /blogs/*
Allow: /appointments
Allow: /terms-and-conditions

# Block common bot traps and tracking parameters
Disallow: /*.json$
Disallow: /*?*utm_*
Disallow: /*?*ref=*
Disallow: /*?*fbclid=*
Disallow: /*?*gclid=*
Disallow: /*?*source=*
Disallow: /*?*medium=*
Disallow: /*?*campaign=*

# Block search and filter parameters
Disallow: /*?*search=*
Disallow: /*?*filter=*
Disallow: /*?*sort=*
Disallow: /*?*page=*

# Allow social media crawlers
User-agent: facebookexternalhit
Allow: /
Allow: /blogs/*

User-agent: Twitterbot
Allow: /
Allow: /blogs/*

User-agent: LinkedInBot
Allow: /
Allow: /blogs/*

User-agent: WhatsApp
Allow: /
Allow: /blogs/*

# Allow Google News crawler for blog content
User-agent: Googlebot-News
Allow: /
Allow: /blogs/*

# Allow image crawlers
User-agent: Googlebot-Image
Allow: /
Allow: /blogs/*

# Block unwanted bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
