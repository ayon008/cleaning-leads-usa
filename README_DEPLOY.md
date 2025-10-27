Ready to deploy — Cleaning Leads USA
=================================

This guide contains comprehensive deployment instructions for the Cleaning Leads USA application, including serverless optimization with Prisma Data Proxy and enhanced error logging.

Prerequisites
------------
- Node.js 18+ (20.x recommended, specified in package.json)
- Next.js 13+ (App Router)
- Vercel account
- Prisma Data Platform account

Environment Variables
-------------------
Set these in your Vercel project settings:

```bash
# Database Connections
DATABASE_URL="prisma://aws.connect.psdb.cloud/your-database-url"  # Data Proxy URL
DIRECT_DATABASE_URL="mongodb+srv://..."  # Direct MongoDB connection string

# API Keys
BREVO_API_KEY="your-brevo-api-key"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://www.cleaningleadsusa.com"
NEXT_PUBLIC_WP_API_URL="your-wordpress-api-url"  # If using WordPress for blog
```

Prisma Data Proxy Setup
----------------------
1. Visit [Prisma Data Platform](https://cloud.prisma.io)
2. Create a new project and add your MongoDB database
3. Copy the Data Proxy URL (starts with `prisma://`)
4. Set it as `DATABASE_URL` in Vercel
5. Keep your direct MongoDB URL as `DIRECT_DATABASE_URL`

Deployment Configuration
----------------------
The project includes specific optimizations for serverless deployment:

1. **Build Settings**
   - Build Command: `npm run vercel-build`
   - Install Command: `npm install`
   - Output Directory: `.next`
   - Node.js Version: 18.x or higher

2. **Prisma Optimizations**
   - Data Proxy enabled for connection pooling
   - Enhanced error logging with request context
   - Automatic connection management
   - Query logging in development

3. **Vercel Configuration** (`vercel.json`)
   - Region: iad1 (US East)
   - Framework preset: Next.js
   - Cron job for connection warmup

4. **Error Handling**
   - Structured logging format
   - Request context capture
   - Detailed Prisma error tracking
   - Production/development modes

Deployment Steps
---------------
1. Push your changes to the repository
2. In Vercel:
   - Connect your repository
   - Set all environment variables
   - Deploy (use "Deploy with Clear Cache" for first deploy)

SEO Configuration
----------------
- Permanent redirect (301) in `next.config.ts` for non-www to www:

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'cleaningleadsusa.com' }],
        destination: 'https://www.cleaningleadsusa.com/:path*',
        permanent: true,
      },
      ...
    ];
  }

Verification checklist after deploy
1. Page source: open https://www.cleaningleadsusa.com/about (View Source) and confirm there is a server-rendered <link rel="canonical" href="https://www.cleaningleadsusa.com/about" /> in the head.
2. Structured data: run Rich Results Test on key pages (home + sample blog) — Organization and Article/Review schema should pass.
3. Redirects: request https://www.cleaningleadsusa.com/ and confirm the browser receives a 301 redirect to https://www.cleaningleadsusa.com/.
4. Search Console: verify site property for https://www.cleaningleadsusa.com and submit sitemap if needed.

Rollback
- If something breaks, you can rollback via Vercel's deployment history to the prior working deployment.
