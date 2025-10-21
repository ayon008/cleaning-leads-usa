import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/footer/Footer";
import TopButton from "./Shared/Button/TopButton";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default:
      "Cleaning Leads USA - Professional Janitorial Appointment Services",
    template: "%s | Cleaning Leads USA",
  },
  description:
    "Get qualified commercial cleaning leads and appointments with Cleaning Leads USA. We connect janitorial businesses with verified decision-makers across the US. Pay only for confirmed appointments that convert.",
  keywords: [
    "commercial cleaning leads",
    "janitorial appointments",
    "cleaning business leads",
    "office cleaning leads",
    "commercial cleaning services",
    "janitorial services",
    "cleaning contractors",
    "facility management",
    "B2B lead generation",
    "appointment setting",
  ],
  authors: [{ name: "Cleaning Leads USA" }],
  creator: "Cleaning Leads USA",
  publisher: "Cleaning Leads USA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cleaningleadsusa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cleaningleadsusa.com",
    siteName: "Cleaning Leads USA",
    title: "Cleaning Leads USA - Professional Janitorial Appointment Services",
    description:
      "Get qualified commercial cleaning leads and appointments with Cleaning Leads USA. We connect janitorial businesses with verified decision-makers across the US.",
    images: [
      {
        url: "/janitorial-leads-hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Cleaning Leads USA - Professional Janitorial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Leads USA - Professional Janitorial Appointment Services",
    description:
      "Get qualified commercial cleaning leads and appointments with Cleaning Leads USA. We connect janitorial businesses with verified decision-makers across the US.",
    images: ["/janitorial-leads-hero-banner.jpg"],
    creator: "@cleaningleadsusa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

const inter = Inter({
  subsets: ["latin"], // required
  weight: ["400", "600", "700"], // optional: choose the weights you need
  display: "swap", // prevents FOIT (flash of invisible text)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cleaning Leads USA",
    description:
      "Professional janitorial appointment services and commercial cleaning lead generation company",
    url: "https://cleaningleadsusa.com",
    logo: "https://cleaningleadsusa.com/Blue_And_White_Cleaning_Services_Logo-removebg-preview.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-450-0123",
      contactType: "customer service",
      email: "support@cleaningleadsusa.com",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/commercialcleaningleads",
      "https://wa.me/13477985582",
    ],
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Cleaning Lead Generation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Janitorial Appointment Setting",
            description:
              "Qualified commercial cleaning appointments that convert",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing Services",
            description:
              "SEO, social media, and email marketing for cleaning businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Professional websites for cleaning service companies",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://cleaningleadsusa.com" />
        <meta name="theme-color" content="#4DAC4D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense
          fallback={
            <article className="h-dvh !z-[1000] w-full justify-center flex items-center bg-white">
              <p>Loading...</p>
            </article>
          }
        >
          <article className="overflow-x-hidden" id="root-layout">
            <Navbar />
            {children}
            <TopButton />
            <Footer />
          </article>
        </Suspense>
      </body>
      <GoogleTagManager gtmId="GTM-MGW7PNJF" />
    </html>
  );
}
