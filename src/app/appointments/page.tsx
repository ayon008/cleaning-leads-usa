import React from "react";
import { Metadata } from "next";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Form from "../Shared/form/Form";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import facebook from "@/../public/facebook-icon.png";
import whatasapp from "@/../public/whatsapp-icon.webp";
import Pricing from "../Shared/Pricing/Pricing";

export const metadata: Metadata = {
  title: "Book Janitorial Leads Consultation - Cleaning Leads USA",
  description:
    "Book a free consultation with our janitorial leads specialists to learn how to generate qualified commercial cleaning appointments and grow your business.",
  keywords: [
    "janitorial leads consultation",
    "book janitorial leads",
    "commercial cleaning leads appointment",
    "cleaning leads consultation",
  ],
  openGraph: {
    title: "Book Janitorial Leads Consultation - Cleaning Leads USA",
    description:
      "Book a free consultation with our janitorial leads specialists to learn how to generate qualified commercial cleaning appointments.",
    url: "http://localhost:3000/appointments",
    type: "website",
    images: [
      {
        url: "/janitorial-leads-hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Janitorial Leads Consultation - Cleaning Leads USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Janitorial Leads Consultation - Cleaning Leads USA",
    description:
      "Book a free consultation with our janitorial leads specialists to learn how to generate qualified commercial cleaning appointments.",
    images: ["/janitorial-leads-hero-banner.jpg"],
  },
  alternates: {
    canonical: "http://localhost:3000/appointments",
  },
};

const page = () => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Janitorial Leads Consultation",
    "url": `${SITE_URL}/appointments`,
    "mainEntity": {
      "@type": "Service",
      "name": "Janitorial Leads Consultation",
      "provider": {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`
      }
    }
  };

  return (
    <section id="appointments" itemScope itemType="http://schema.org/WebPage" role="region" aria-labelledby="hero-title" aria-describedby="hero-desc">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero
        headline="Talk to a Janitorial Leads Specialist"
        title="Janitorial Leads Consultation"
        des={
          <>
            Speak directly with our specialists to learn how verified commercial
            cleaning
            <br />
            appointments and qualified janitorial leads can help grow your
            business.
            <br />
            Get insights, strategies, and a clear plan to secure more contracts.
          </>
        }
      />
      <div className="container">
          <div className="flex items-center md:flex-row flex-col md:py-6 py-6 rounded-md md:justify-between bg-amber-300 md:px-10 px-6 my-10 gap-6" itemScope itemType="http://schema.org/WebPageElement" itemProp="mainEntity">
          <div>
            <h2 className="md:text-3xl text-xl md:text-left text-center font-semibold">
              Get your first appointment just at $99
            </h2>
            <p className="text-base mt-4 md:text-left text-center">
              Would you like to speak with our operations manager directly?
            </p>
          </div>
            <a href="tel:+13326004766" title="Call Cleaning Leads USA" itemProp="telephone" aria-label="Call Cleaning Leads USA">
              <PrimaryBtn text="Call Now" containerClass="" ariaLabel="Call Cleaning Leads USA" />
            </a>
        </div>
        <Title
          containerClass="text-center"
          subHeading="Free Consultation for Janitorial Leads"
          headline="Book an Appointment with Our Expert Consultant"
        />
        <div className="pt-10">
          <div className="flex items-center md:flex-row flex-col justify-between gap-8">
            <div className="md:w-1/2 w-full">
              <h2 className="text-3xl font-semibold">
                Speak with a Professional Consultant
              </h2>
              <div className="flex items-center gap-4 mt-4">
                <Phone className="" aria-hidden="true" />
                <a
                  href="tel:+13326004766"
                  aria-label="Call Cleaning Leads USA at +1 (332) 600-4766"
                  title="Call Cleaning Leads USA"
                  className="inline-flex items-center justify-center"
                >
                  <p className="text-base font-bold">+13326004766</p>
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <MapPin />
                <p className="text-base font-bold">Long Island City, NY</p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Mail aria-hidden="true" />
                  <a
                    href="mailto:support@cleaningleadsusa.com"
                    title="Contact Cleaning Leads USA Support"
                    className="text-base font-bold"
                    itemProp="email"
                  >
                    <h2 className="text-base">support@cleaningleadsusa.com</h2>
                  </a>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/commercialcleaningleads"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Cleaning Leads USA on Facebook"
                      title="Cleaning Leads USA on Facebook"
                  >
                    <Image
                      src={facebook}
                      className="w-[30px] h-[30px] cursor-pointer"
                      alt="Cleaning Leads USA Facebook Page"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/13477985582"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Cleaning Leads USA on WhatsApp"
                      title="Chat with Cleaning Leads USA on WhatsApp"
                  >
                    <Image
                      src={whatasapp}
                      className="w-[40px] h-[40px] cursor-pointer"
                      alt="Cleaning Leads USA WhatsApp Contact"
                      sizes="40px"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div>
                  {/* Phone */}
                  <a
                    href="tel:+13326004766"
                    aria-label="Call Cleaning Leads USA at +1 (332) 600-4766"
                    title="Call Cleaning Leads USA"
                    className="inline-flex items-center justify-center"
                  >
                    <Phone className="cursor-pointer h-[30px] mt-1 w-auto" />
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h2>
                  Request a Free Consultation. Explain Your Company&apos;s
                  Predicament and Get Professional Advice to Accelerate Your
                  Development.
                </h2>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Form />
            </div>
          </div>
          <div className="md:mt-0 mt-10">
            <Pricing />
          </div>
        </div>
        <section id="Various Leads" className="">
          <div className="container">
            <Title
              headline="Deep Commercial Cleaning Industry Knowledge"
              subHeading="After years of connecting cleaning contractors with small to mid-sized businesses and offices seeking reliable janitorial services, CleaningLeadsUSA has established itself as the leading commercial cleaning lead generation company."
              containerClass="text-center"
            />
            <div className="md:mt-20 mt-10 md:flex-row flex-col flex items-center justify-center gap-10 pb-20">
              <div className="space-y-4 text-center flex-1">
                <h3 className="text-xl font-semibold">
                  Healthcare Facility Cleaning Leads - Medical Office Contracts
                </h3>
                <p className="text-center">
                  Hospitals, medical clinics, surgical centers, and healthcare
                  facilities need professional cleaning services that comply
                  with stringent medical industry standards and infection
                  control protocols. Connect with healthcare administrators and
                  facility managers seeking reliable medical cleaning
                  specialists for ongoing service agreements.
                </p>
              </div>
              <div className="text-center space-y-4 flex-1">
                <h3 className="text-xl font-semibold">
                  Industrial Cleaning Leads - Manufacturing & Factory Contracts
                </h3>
                <p>
                  Manufacturing facilities, warehouses, and industrial plants
                  require specialized cleaning services for equipment,
                  machinery, and production areas. Connect with facility
                  managers and plant supervisors actively seeking experienced
                  industrial cleaning contractors for long-term maintenance
                  contracts.
                </p>
              </div>
              <div className="text-center space-y-4 flex-1">
                <h3 className="text-xl font-semibold">
                  School Cleaning Leads - Educational Facility Contracts
                </h3>
                <p>
                  Schools, universities, daycare centers, and educational
                  institutions require reliable cleaning services to maintain
                  safe, healthy learning environments. Connect with facility
                  managers, principals, and administrators actively seeking
                  professional janitorial contractors for ongoing cleaning
                  contracts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
