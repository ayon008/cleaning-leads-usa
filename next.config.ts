// next.config.js
import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * Optimized for SEO, Performance, and Security
 */
const nextConfig: NextConfig = {
  // Enable React strict mode for highlighting potential issues
  reactStrictMode: true,

  // Enable SWC compiler minification for smaller/faster builds
  swcMinify: true,

  // Optimize trailing slashes for SEO (false = no trailing slash in URLs)
  trailingSlash: false,

  // Internationalization setup
  i18n: {
    locales: ["en", "es", "fr", "de"], // Add supported languages here
    defaultLocale: "en",
    localeDetection: true,
  },

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
          // Content Security Policy (adjust for your needs)
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src * data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;",
          },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Enable XSS Protection in older browsers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Control robots/crawlers
          { key: "X-Robots-Tag", value: "index, follow" },
          // Cache policy (adjust durations for static vs dynamic)
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate, immutable",
          },
          // Strict transport security
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // SEO-friendly redirects
  async redirects() {
    return [
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
        destination: "/api/sitemap", // API route to generate sitemap dynamically
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
