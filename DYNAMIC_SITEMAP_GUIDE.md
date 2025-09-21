# Dynamic Sitemap & Robots.txt Implementation

## Overview
This implementation provides comprehensive SEO support for dynamic blog content with separate sitemaps for better organization and performance.

## 🗺️ Sitemap Structure

### 1. Main Sitemap (`/sitemap.xml`)
- **Purpose**: Static pages only
- **Content**: Home, About, Contact, Services, Blogs listing, Appointments, Terms
- **Cache**: 1 hour
- **Priority**: High (0.7-1.0)

### 2. Blog Posts Sitemap (`/sitemap-blogs.xml`)
- **Purpose**: Dynamic blog posts from WordPress
- **Content**: All published blog posts with metadata
- **Cache**: 30 minutes
- **Priority**: Medium (0.6)
- **Features**:
  - News schema markup for Google News
  - Image schema support
  - Dynamic last modified dates
  - Error handling for API failures

### 3. Sitemap Index (`/sitemap-index.xml`)
- **Purpose**: Master sitemap listing all other sitemaps
- **Content**: References to main sitemap and blog sitemap
- **Cache**: 1 hour

## 🤖 Robots.txt Features

### Crawler Management
- **Allow**: All important pages and blog posts
- **Disallow**: Admin areas, API routes, tracking parameters
- **Crawl Delay**: 1 second for respectful crawling

### Social Media Support
- **Facebook**: Full access to all content
- **Twitter**: Full access to all content
- **LinkedIn**: Full access to all content
- **WhatsApp**: Full access to all content

### SEO Optimization
- **Google News**: Special access for blog content
- **Image Crawlers**: Optimized for image indexing
- **Bot Blocking**: Blocks unwanted SEO tools

## 🔧 Technical Implementation

### API Routes Created
```
src/app/api/
├── sitemap/route.ts          # Main sitemap (static pages)
├── sitemap-blogs/route.ts    # Blog posts sitemap
├── sitemap-index/route.ts    # Sitemap index
└── robots/route.ts           # Dynamic robots.txt
```

### Next.js Configuration
```typescript
// next.config.ts
async rewrites() {
  return [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
    {
      source: "/sitemap-blogs.xml", 
      destination: "/api/sitemap-blogs",
    },
    {
      source: "/sitemap-index.xml",
      destination: "/api/sitemap-index",
    },
    {
      source: "/robots.txt",
      destination: "/api/robots",
    },
  ];
}
```

## 📊 SEO Benefits

### 1. **Better Crawl Efficiency**
- Separate sitemaps reduce load times
- Blog posts cached separately for faster updates
- Proper last modified dates for efficient crawling

### 2. **Enhanced Discoverability**
- Google News schema for blog posts
- Image schema for better image indexing
- Proper priority and change frequency settings

### 3. **Dynamic Content Support**
- Automatic inclusion of new blog posts
- Real-time last modified dates
- Error handling for API failures

### 4. **Performance Optimization**
- Cached responses reduce server load
- Separate caches for different content types
- Efficient API calls with field selection

## 🚀 Usage

### Accessing Sitemaps
- **Main Sitemap**: `https://cleaningleadsusa.com/sitemap.xml`
- **Blog Sitemap**: `https://cleaningleadsusa.com/sitemap-blogs.xml`
- **Sitemap Index**: `https://cleaningleadsusa.com/sitemap-index.xml`
- **Robots.txt**: `https://cleaningleadsusa.com/robots.txt`

### Google Search Console
1. Submit all sitemaps to Google Search Console
2. Monitor indexing status
3. Check for crawl errors
4. Track performance metrics

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

### WordPress API Requirements
- **Endpoint**: `/posts`
- **Fields**: `slug`, `modified`, `date`, `title`, `excerpt`, `featured_media`
- **Status**: `publish` only
- **Pagination**: Up to 100 posts per request

## 📈 Monitoring & Maintenance

### Performance Monitoring
- Monitor API response times
- Check cache hit rates
- Track sitemap generation errors

### Content Updates
- New blog posts automatically included
- Last modified dates updated in real-time
- Sitemap regenerated on cache expiry

### Error Handling
- Graceful fallback if WordPress API is unavailable
- Console warnings for configuration issues
- Empty sitemaps instead of errors

## 🛠️ Customization

### Adding New Content Types
1. Create new API route for content type
2. Add to sitemap index
3. Update robots.txt if needed
4. Configure appropriate caching

### Modifying Priorities
```typescript
// In sitemap route
{
  url: '/new-page',
  lastModified: new Date().toISOString(),
  changeFrequency: 'monthly',
  priority: 0.8, // Adjust priority (0.0-1.0)
}
```

### Custom Caching
```typescript
// Adjust cache duration
'Cache-Control': 'public, max-age=1800, s-maxage=1800' // 30 minutes
```

## 📋 Best Practices

### 1. **Regular Monitoring**
- Check sitemap accessibility monthly
- Monitor Google Search Console for errors
- Verify blog posts are being indexed

### 2. **Performance Optimization**
- Keep sitemaps under 50MB
- Limit to 50,000 URLs per sitemap
- Use appropriate cache durations

### 3. **Content Quality**
- Ensure all blog posts have proper titles
- Use descriptive slugs
- Include relevant metadata

### 4. **Security**
- Block admin areas in robots.txt
- Prevent access to sensitive API endpoints
- Monitor for malicious crawlers

## 🔍 Troubleshooting

### Common Issues
1. **Sitemap not updating**: Check cache settings
2. **Blog posts missing**: Verify WordPress API URL
3. **Crawl errors**: Check robots.txt configuration
4. **Performance issues**: Adjust cache durations

### Debug Mode
```typescript
// Add console.log for debugging
console.log('Fetched blog posts:', blogPosts.length);
```

This implementation provides a robust, scalable solution for managing dynamic content in your sitemaps while maintaining excellent SEO performance.
