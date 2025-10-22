import React from "react";

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
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cleaningleadsusa.com";
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
    "@graph": [ORG]
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
