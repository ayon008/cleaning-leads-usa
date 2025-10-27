// next.config.js
import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * Optimized for SEO, Performance, and Security
 */
const nextConfig: NextConfig = {
  // Ensure Prisma Client is correctly built and included
  output: 'standalone',
  experimental: {
    // Enable serverActions for forms and mutations
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Properly bundle Prisma Client for serverless
    serverComponentsExternalPackages: ['@prisma/client', 'prisma']
  },

  // Enable React strict mode for highlighting potential issues
  reactStrictMode: true,

  // Enable SWC compiler minification for smaller/faster builds
  // `swcMinify` was removed: Next manages SWC minification internally and the
  // typed NextConfig in newer Next versions no longer accepts this key. If
  // you need to control minification, configure it via build tooling or the
  // hosting platform. (Removed to satisfy NextConfig type.)

  // Optimize trailing slashes for SEO (false = no trailing slash in URLs)
  trailingSlash: false,

  // Single language application (English only)

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"], // Modern image formats
    domains: ["cleaning-leads-usa.rf.gd", "cdn.example.com"], // Whitelisted external domains
    deviceSizes: [320, 420, 768, 1024, 1200], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96], // For small icons/thumbnails
  },

  // Define custom headers for SEO + Security
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Enable XSS Protection in older browsers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Control robots/crawlers
          { key: "X-Robots-Tag", value: "index, follow" },
          // Strict transport security
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // SEO-friendly redirects
  async redirects() {
    return [
      // Permanent redirect: non-www -> www (301) to preserve SEO/link equity
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'cleaningleadsusa.com' }],
        destination: 'https://www.cleaningleadsusa.com/:path*',
        permanent: true,
      },
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // 308 redirect for SEO
      },
    ];
  },

  // Rewrites for clean URLs + sitemap + robots.txt
  async rewrites() {
    return [
      {
        source: "/blog/:slug",
        destination: "/api/blog?slug=:slug",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // Main sitemap for static pages
      },
      {
        source: "/sitemap-blogs.xml",
        destination: "/api/sitemap-blogs", // Blog posts sitemap
      },
      {
        source: "/sitemap-index.xml",
        destination: "/api/sitemap-index", // Sitemap index
      },
      {
        source: "/robots.txt",
        destination: "/api/robots", // API route to serve robots.txt
      },
    ];
  },

  // Compression handled automatically on Vercel/most hosts,
  // but enabling for Node server deployments
  compress: true,
};

export default nextConfig;
