import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Card } from "../Shared/Home/Expertise";
import Contact from "../Shared/Home/Contact";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Image, { StaticImageData } from "next/image";
import propspect from "@/../public/verified-prospects-icon.png";
import coldCall from "@/../public/client-outreach-icon.png";
import followUp from "@/../public/real-time-updates-icon.png";
import appointments from "../../../public/appointments-icon.png";
import research from "@/../public/google-ranking-icon.png";
import email from "@/../public/email-marketing-icon.png";
import branding from "../../../public/brand-visibility-icon.png";
import promotion from "../../../public/direct-outreach-icon.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Janitorial Lead Generation & Digital Marketing",
  description:
    "Discover our comprehensive cleaning business services: pay-per-appointment lead generation, digital marketing, and web development. Get qualified janitorial leads that convert into contracts.",
  keywords: [
    "janitorial lead generation services",
    "commercial cleaning digital marketing",
    "cleaning business web development",
    "pay per appointment service",
    "cleaning contractor marketing",
    "facility management leads",
    "B2B cleaning services",
    "appointment setting for cleaners",
  ],
  openGraph: {
    title: "Our Services - Janitorial Lead Generation & Digital Marketing",
    description:
      "Discover our comprehensive cleaning business services: pay-per-appointment lead generation, digital marketing, and web development. Get qualified janitorial leads that convert into contracts.",
    url: "https://www.cleaningleadsusa.com/services",
    type: "website",
    images: [
      {
        url: "/janitorial-leads-hero-banner.jpg ",
        width: 1200,
        height: 630,
        alt: "Cleaning Leads USA Services - Lead Generation & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Janitorial Lead Generation & Digital Marketing",
    description:
      "Discover our comprehensive cleaning business services: pay-per-appointment lead generation, digital marketing, and web development.",
    images: ["/janitorial-leads-hero-banner.jpg "],
  },
  alternates: {
    canonical: "https://www.cleaningleadsusa.com/services",
  },
};

const Prospect = ({
  image,
  text,
  alt = "",
  title,
}: {
  image: StaticImageData;
  text: string;
  alt?: string;
  title: string;
}) => {
  return (
    <article
      className="bg-white rounded-md space-y-4 px-4 py-6"
      itemScope
      itemType="http://schema.org/Service"
    >
      <Image
        src={image}
        alt={alt || `${title} - Cleaning Leads USA service icon`}
        className="w-[90px] h-[90px] mx-auto"
        loading="lazy"
        itemProp="image"
      />
      <h3 className="text-center text-2xl font-semibold" itemProp="name">
        {title}
      </h3>
      <p className="text-center text-sm" itemProp="description">
        {text}
      </p>
    </article>
  );
};

const page = () => {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.cleaningleadsusa.com";

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Services - Cleaning Leads USA",
    url: `${SITE_URL}/services`,
    mainEntity: {
      "@type": "Service",
      name: "Janitorial Lead Generation Services",
      provider: {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
      },
    },
  };

  return (
    <section
      id="services"
      role="region"
      aria-labelledby="hero-title"
      aria-describedby="services-commitment-sub"
      itemScope
      itemType="http://schema.org/WebPage"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <Hero
        title="Our Services"
        headline="Let Our Experts Handle Your Prospect Communications"
        des={
          <>
            Founded as a B2B lead generation company, CleaningLeadsUSA is
            committed to <br /> helping cleaning businesses across the U.S. grow
            through high-quality, nurtured leads that <br /> drive real results.
          </>
        }
      />
      <div className="container pt-10">
        <Title
          containerClass="text-center"
          headline="Our Commitment to Your Growth"
          subHeading="Focus on delivering exceptional cleaning services—let us handle lead generation and appointments."
          headlineId="services-commitment-head"
          subHeadingId="services-commitment-sub"
        />
        <div className="mt-10 flex items-stretch justify-center flex-wrap md:gap-10 md:flex-row flex-col gap-6">
          <Card
            title="Pay Per Appointments"
            text="Only pay for confirmed meetings with serious prospects ready to hire, saving time and boosting sales."
          />
          <Card
            title="Digital Marketing Services"
            text="Increase your visibility and attract more clients with targeted campaigns, SEO, and social media marketing."
          />
          <Card
            title="Web Development Service"
            text="Get a professional, conversion-focused website designed to showcase your cleaning business and generate leads."
          />
        </div>
        <div className="my-20">
          <div className="mt-6">
            <Title
              containerClass="text-center"
              headline="Why will you choose us"
              subHeading=""
              headlineId="services-why-head"
              subHeadingId="services-why-sub"
            />
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <Card
                title="Specialized Leads"
                text="We deliver targeted leads tailored to your services—whether it’s disinfecting, deep cleaning, office cleaning, or any other cleaning job. CleaningLeadsUSA makes sure you reach the right clients every time."
              />
              <Card
                title="Leads That Convert"
                text="Our experienced team qualifies every cleaning lead with precise criteria, ensuring they’re genuine and ready to hire. This results in higher conversion rates compared to general, unfiltered leads."
              />
              <Card
                title="Twice-Verified"
                text="Our janitorial leads are double-checked for quality. After initial screening, we call each prospect to confirm their interest, ensuring you get only genuinely qualified leads."
              />
              <Card
                title="Pay Only for Success"
                text="You only pay for appointments that are successfully attended. If an appointment falls through, we either provide a refund or connect you with another qualified client, ensuring zero wasted spend."
              />
            </div>
          </div>
          <div
            className="mt-20 flex items-center py-6 rounded-md justify-between bg-amber-300 px-10"
            itemScope
            itemType="http://schema.org/WebPageElement"
            itemProp="mainEntity"
          >
            <div>
              <h2 className="text-3xl font-semibold">
                Get your first appointment just at $99
              </h2>
              <p className="text-base mt-4">
                Would you like to speak with our operations manager directly?
              </p>
            </div>
            <a
              href="tel:+13326004766"
              title="Call Cleaning Leads USA"
              itemProp="telephone"
              aria-label="Call Cleaning Leads USA"
            >
              <PrimaryBtn
                text="Call Now"
                containerClass=""
                ariaLabel="Call Cleaning Leads USA"
              />
            </a>
          </div>
        </div>
      </div>
      <Contact />
      <div className="bg-sky-100/60 w-full pt-10 md:pb-20 pb-10">
        <Title
          containerClass="text-center"
          headline="Complete Marketing Solutions for Janitorial Services"
          subHeading=""
          headlineId="services-marketing-head"
          subHeadingId="services-marketing-sub"
        />
        <div className="mt-10 container grid md:grid-cols-4 grid-cols-1 gap-3">
          <Prospect
            image={propspect}
            text="Connect with verified office cleaning prospects actively searching for janitorial services. Every lead is pre-qualified to match your criteria, so you can focus on closing deals, not chasing unqualified contacts."
            title={"Verified Prospects"}
            alt="Verified prospects icon - qualified janitorial leads for cleaning businesses"
          />
          <Prospect
            image={coldCall}
            text="Reach facility managers effortlessly with our year-round appointment service. Skilled telemarketers follow proven protocols to deliver only qualified leads, helping your cleaning business close more deals."
            title={"Client Outreach"}
            alt="Client outreach icon - professional telemarketing for cleaning business leads"
          />
          <Prospect
            image={followUp}
            text="Get instant updates on appointment changes and continuous connections to new janitorial jobs in your area."
            title={"Real-Time Updates"}
            alt="Real-time updates icon - instant janitorial appointment notifications"
          />
          <Prospect
            image={appointments}
            text="Every lead is fully verified before it reaches you. Once an appointment is scheduled, all you need to do is meet the prospect on time — the rest is up to you."
            title={"Appointments"}
            alt="Appointments icon - verified commercial cleaning appointments"
          />
          <Prospect
            image={research}
            text="We use SEO strategies to help your janitorial service rank on Google's first page, making it easy for commercial centers and offices to find you."
            title={"Google Ranking"}
            alt="Google ranking icon - SEO optimization for cleaning businesses"
          />
          <Prospect
            image={email}
            text="Our expert team crafts targeted email campaigns to connect with businesses actively seeking cleaning services. We keep your brand visible, nurture leads, and drive more bookings."
            title={"Email Marketing"}
            alt="Email marketing icon - targeted campaigns for janitorial leads"
          />
          <Prospect
            image={branding}
            text="Our experienced marketers build a strong digital presence for your commercial cleaning business, helping you stand out and attract more clients online."
            title={"Brand Visibility"}
            alt="Brand visibility icon - digital marketing for cleaning companies"
          />
          <Prospect
            image={promotion}
            text="Our multilingual telemarketers reach out professionally to businesses, confirming appointments and connecting you with companies seeking reliable commercial cleaning services."
            title={"Direct Outreach"}
            alt="Direct outreach icon - professional telemarketing for cleaning services"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
