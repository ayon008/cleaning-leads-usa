import React from "react";
import testimonials from "../Shared/Home/testimonialsData";

/**
 * StructuredData
 * Renders JSON-LD for Organization and a Review snippet to help with rich
 * results. Values are taken from environment variables when available or
 * fall back to sensible defaults used by the site.
 *
 * Validation tips:
 * - Test the output in Google's Rich Results Test and the Structured Data
 *   Testing Tool to ensure all required fields are present for the type.
 * - Keep the organization `url` and `logo` as absolute URLs.
 */
export default function StructuredData() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cleaningleadsusa.com";
  const ORG = {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Cleaning Leads USA",
    url: SITE_URL,
    logo: `${SITE_URL}/cleaning-leads-usa-logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-332-600-4766",
        contactType: "customer service",
        email: "support@cleaningleadsusa.com",
        availableLanguage: ["English"]
      }
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ORG,
      // Map testimonials into Review nodes. Keep the shape conservative so
      // Google recognizes ratingValue as a number and publisher references
      // the organization @id.
      ...testimonials.map((t, i) => {
        const safeId = (t.owner || `testimonial-${i}`).replace(/[^a-z0-9-_]/gi, "-").toLowerCase();
        return {
          "@type": "Review",
          "@id": `${SITE_URL}#review-${safeId}`,
          url: `${SITE_URL}/#review-${safeId}`,
          author: {
            "@type": "Person",
            name: t.owner,
            url: `${SITE_URL}/#author-${encodeURIComponent(t.owner)}`,
          },
          reviewBody: t.review,
          reviewRating: {
            "@type": "Rating",
            ratingValue: Number(t.rating),
            bestRating: 5,
            worstRating: 1,
          },
          itemReviewed: {
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}#service-commercial-cleaning-leads`,
            name: "Commercial Cleaning Leads",
            url: `${SITE_URL}/services`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Long Island City",
              addressRegion: "NY"
            }
          },
          publisher: { "@type": "Organization", "@id": `${SITE_URL}#organization` },
          datePublished: t.datePublished || new Date().toISOString(),
        };
      }),
    ]
  };

  // Render server-side inline JSON-LD so it appears in initial HTML response
  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
