Ready to deploy — Cleaning Leads USA
=================================

This guide contains minimal steps to get the site ready to host and how to verify SEO-focused changes (canonical, structured data, redirects).

Prereqs
- Node 18+ (you have Node 22 in CI/testing here)
- Next.js 13+ (App Router)
- A hosting platform (Vercel recommended)

Environment
- Copy `.env.example` to your environment settings and set the real values in the hosting UI. Key variables:
  - NEXT_PUBLIC_SITE_URL — should be `https://www.cleaningleadsusa.com`
  - NEXT_PUBLIC_WP_API_URL — WordPress API if used for blog content

Build & Deploy (Vercel)
1. Push your `main` branch to your repo.
2. Create a Vercel project and connect the repository.
3. In Vercel project settings, add environment variables from `.env.example`.
4. Ensure the build command is `npm run build` and output directory is default for Next.js.
5. Deploy.

Redirects
- We added a permanent redirect (301) in `next.config.ts` to route non-www -> www:

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
3. Redirects: request https://cleaningleadsusa.com/ and confirm the browser receives a 301 redirect to https://www.cleaningleadsusa.com/.
4. Search Console: verify site property for https://www.cleaningleadsusa.com and submit sitemap if needed.

Rollback
- If something breaks, you can rollback via Vercel's deployment history to the prior working deployment.
