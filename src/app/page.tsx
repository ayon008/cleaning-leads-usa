import Banner from "./Shared/Home/Banner";
import Blogs from "./Shared/Home/Blogs";
import Contact from "./Shared/Home/Contact";
import Expertise from "./Shared/Home/Expertise";
import Professional from "./Shared/Home/Professional";
import Testimonial from "./Shared/Home/Testimonial";
import WhyUs from "./Shared/Home/WhyUs";
import Pricing from "./Shared/Pricing/Pricing";
import { Metadata } from "next";

export interface SearchProps {
  searchParams: {
    q?: string;
    category?: string;
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Professional Janitorial Appointment Services | Cleaning Leads USA",
  description: "Get qualified commercial cleaning leads and appointments with Cleaning Leads USA. We connect janitorial businesses with verified decision-makers across the US. Pay only for confirmed appointments that convert.",
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
    "appointment setting"
  ],
  openGraph: {
    title: "Professional Janitorial Appointment Services | Cleaning Leads USA",
    description: "Get qualified commercial cleaning leads and appointments with Cleaning Leads USA. We connect janitorial businesses with verified decision-makers across the US.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cleaningleadsusa.com",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cleaningleadsusa.com'}/janitorial-leads-hero-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Cleaning Leads USA - Professional Janitorial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Janitorial Appointment Services | Cleaning Leads USA",
    description: "Get qualified commercial cleaning leads and appointments with Cleaning Leads USA. We connect janitorial businesses with verified decision-makers across the US.",
    images: ["/janitorial-leads-hero-banner.jpg "],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cleaningleadsusa.com",
  },
};

export default async function Home({ searchParams }: SearchProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page ?? "1", 10);
  
  return (
    <>
      <Banner />
      <Professional />
      <Expertise />
      <Contact />
      <div className="bg-primary -mt-56 pb-56 h-fit"></div>
      <Testimonial />
      <Pricing />
      <WhyUs />
      <Blogs page={currentPage} />
    </>
  );
}
