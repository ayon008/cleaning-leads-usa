import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Card } from "../Shared/Home/Expertise";
import Contact from "../Shared/Home/Contact";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Image, { StaticImageData } from "next/image";
import propspect from "@/../public/search_11850312.png";
import coldCall from "@/../public/customer-support_999104.png";
import followUp from "@/../public/verified-file_11245163.png";
import appointments from "../../../public/calendar_9948728.png";
import research from "@/../public/research_2082022.png";
import email from "@/../public/email_2165378.png";
import branding from "../../../public/advertising_3505054.png";
import promotion from "../../../public/promotion_18578766.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Janitorial Lead Generation & Digital Marketing",
  description: "Discover our comprehensive cleaning business services: pay-per-appointment lead generation, digital marketing, and web development. Get qualified janitorial leads that convert into contracts.",
  keywords: [
    "janitorial lead generation services",
    "commercial cleaning digital marketing",
    "cleaning business web development",
    "pay per appointment service",
    "cleaning contractor marketing",
    "facility management leads",
    "B2B cleaning services",
    "appointment setting for cleaners"
  ],
  openGraph: {
    title: "Our Services - Janitorial Lead Generation & Digital Marketing",
    description: "Discover our comprehensive cleaning business services: pay-per-appointment lead generation, digital marketing, and web development. Get qualified janitorial leads that convert into contracts.",
    url: "https://cleaningleadsusa.com/services",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Cleaning Leads USA Services - Lead Generation & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Janitorial Lead Generation & Digital Marketing",
    description: "Discover our comprehensive cleaning business services: pay-per-appointment lead generation, digital marketing, and web development.",
    images: ["/og-services.jpg"],
  },
  alternates: {
    canonical: "https://cleaningleadsusa.com/services",
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
    <div className="bg-white rounded-md space-y-4 px-4 py-6">
      <Image src={image} alt={alt} className="w-[90px] h-[90px] mx-auto" />
      <h1 className="text-center text-2xl font-semibold">{title}</h1>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
};

const page = () => {
  return (
    <section id="services">
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
          <Title
            containerClass="text-center"
            subHeading="At CleaningLeadsUSA, we help you win more business by setting up qualified appointments with decision-makers while you focus on delivering great service. Beyond appointment setting, we also grow your online presence with targeted digital marketing to keep new clients coming in."
            headline="Guaranteed Cleaning Appointments"
          />
          <div className="mt-6">
            <Title
              containerClass="text-center"
              headline="Why will you choose us"
              subHeading=""
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
          <div className="mt-20 flex items-center py-6 rounded-md justify-between bg-amber-300 px-10">
            <div>
              <h1 className="text-3xl font-semibold">
                Get your first appointment just at $99
              </h1>
              <p className="text-base mt-4">
                Would you like to speak with our operations manager directly?
              </p>
            </div>
            <a href="tel:+12344500123">
              <PrimaryBtn text="Call Now" containerClass="" />
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
        />
        <div className="mt-10 container grid md:grid-cols-4 grid-cols-1 gap-3">
          <Prospect
            image={propspect}
            text="Connect with verified office cleaning prospects actively searching for janitorial services. Every lead is pre-qualified to match your criteria, so you can focus on closing deals, not chasing unqualified contacts."
            title={"Verified Prospects"}
          />
          <Prospect
            image={coldCall}
            text="Reach facility managers effortlessly with our year-round appointment service. Skilled telemarketers follow proven protocols to deliver only qualified leads, helping your cleaning business close more deals."
            title={"Client Outreach"}
          />
          <Prospect
            image={followUp}
            text="Get instant updates on appointment changes and continuous connections to new janitorial jobs in your area."
            title={"Real-Time Updates"}
          />
          <Prospect
            image={appointments}
            text="Every lead is fully verified before it reaches you. Once an appointment is scheduled, all you need to do is meet the prospect on time — the rest is up to you."
            title={"Appointments"}
          />
          <Prospect
            image={research}
            text="We use SEO strategies to help your janitorial service rank on Google’s first page, making it easy for commercial centers and offices to find you."
            title={"Google Ranking"}
          />
          <Prospect
            image={email}
            text="Our expert team crafts targeted email campaigns to connect with businesses actively seeking cleaning services. We keep your brand visible, nurture leads, and drive more bookings."
            title={"Email Marketing"}
          />
          <Prospect
            image={branding}
            text="Our experienced marketers build a strong digital presence for your commercial cleaning business, helping you stand out and attract more clients online."
            title={"Brand Visibility"}
          />
          <Prospect
            image={promotion}
            text="Our multilingual telemarketers reach out professionally to businesses, confirming appointments and connecting you with companies seeking reliable commercial cleaning services."
            title={"Direct Outreach"}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
