import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Mail, MapPin, Phone } from "lucide-react";
import facebook from "@/../public/facebook-icon.png";
import whatasapp from "@/../public/whatsapp-icon.webp";
import Image from "next/image";
import Form from "../Shared/form/Form";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Pricing from "../Shared/Pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Cleaning Leads USA - Get Your First Appointment for $99",
  description:
    "Contact Cleaning Leads USA for qualified commercial cleaning leads and appointments. Get your first appointment for just $99. Call +1-234-450-0123 or email support@cleaningleadsusa.com",
  keywords: [
    "contact cleaning leads usa",
    "commercial cleaning leads contact",
    "janitorial appointment booking",
    "cleaning business consultation",
    "get cleaning leads",
    "appointment setting contact",
    "cleaning contractors contact",
    "B2B lead generation contact",
  ],
  openGraph: {
    title: "Contact Cleaning Leads USA - Get Your First Appointment for $99",
    description:
      "Contact Cleaning Leads USA for qualified commercial cleaning leads and appointments. Get your first appointment for just $99.",
    url: "https://cleaningleadsusa.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Cleaning Leads USA - Commercial Cleaning Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cleaning Leads USA - Get Your First Appointment for $99",
    description:
      "Contact Cleaning Leads USA for qualified commercial cleaning leads and appointments. Get your first appointment for just $99.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://cleaningleadsusa.com/contact",
  },
};

const page = () => {
  return (
    <section id="contact" className="bg-tertiary">
      <Hero
        title="Contact Us Today"
        headline="Connect with Our Lead Generation Experts"
        des={
          <>
            Obtain qualified leads through phone, email, or form to expand your
            cleaning business.
          </>
        }
      />
      <div className="bg-primary">
        <div className="container md:py-10 py-6">
          <div className="flex items-center md:flex-row flex-col md:py-6 py-6 rounded-md md:justify-between bg-amber-300 md:px-10 px-6 md:my-10 gap-6">
            <div>
              <h1 className="md:text-3xl text-xl md:text-left text-center font-semibold">
                Get your first appointment just at $99
              </h1>
              <p className="text-base mt-4 md:text-left text-center">
                Would you like to speak with our operations manager directly?
              </p>
            </div>
            <a href="tel:+12344500123">
              <PrimaryBtn text="Call Now" containerClass="" />
            </a>
          </div>
          <Title
            containerClass="text-center mt-10"
            subHeading="Provide your info and our friendly agent will contact you within 12 hours to assist you."
            headline="Contact Us Today"
          />
          <div className="flex items-center md:flex-row flex-col justify-between mt-10 gap-8">
            <div className="md:w-1/2 w-full">
              <h1 className="text-3xl font-semibold">
                Speak with a Professional Consultant
              </h1>
              <div className="flex items-center gap-4 mt-4">
                <Phone className="" />
                <a
                  href="tel:+1234567890"
                  aria-label="Call Cleaning Leads USA at +1 (234) 567-890"
                  title="Call Cleaning Leads USA"
                  className="inline-flex items-center justify-center"
                >
                  <p className="text-base font-bold">+1234567890</p>
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <MapPin />
                <p className="text-base font-bold">Envanto HQ, Australia</p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Mail />
                <a
                  href="mailto:support@cleaningleadsusa.com"
                  title="Contact Cleaning Leads USA Support"
                  className="text-base font-bold"
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
                    title="Cleaning Leads USA Facebook Page"
                  >
                    <Image
                      src={facebook}
                      className="w-[30px] h-[30px] cursor-pointer"
                      alt="Cleaning Leads USA Facebook Page"
                    />
                  </a>
                </div>

                <div>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/1234567890"
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
                    />
                  </a>
                </div>
                <div>
                  {/* Phone */}
                  <a
                    href="tel:+1234567890"
                    aria-label="Call Cleaning Leads USA at +1 (234) 567-890"
                    title="Call Cleaning Leads USA"
                    className="inline-flex items-center justify-center"
                  >
                    <Phone className="cursor-pointer h-[30px] mt-1 w-auto" />
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h1>
                  Request a Free Consultation. Explain Your Company&apos;s
                  Predicament and Get Professional Advice to Accelerate Your
                  Development.
                </h1>
                <div className="bg-white space-y-2 w-fit rounded-md p-4 mt-4">
                  <p className="text-2xl font-semibold">
                    Logan Whitman <br />
                    <small className="text-sm font-medium">
                      Senior Business Consultant
                    </small>
                  </p>
                  <a
                    href="mailto:support@cleaningleadsusa.com"
                    title="Contact Cleaning Leads USA Support"
                    className="text-base font-bold"
                  >
                    <h2 className="text-base">logan@cleaningleadsusa.com</h2>
                  </a>
                  <button
                    type="button"
                    className="bg-[#0072B1] px-3 py-1 rounded-md cursor-pointer mt-4 text-white"
                  >
                    Get Me on LinkedIn
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full" id="form">
              <Form />
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-10">
          <Pricing />
        </div>
        <div className="container md:pb-20 pb-10">
          <Title
            headline="Contact us to get Commercial Cleaning Leads"
            subHeading="After years of connecting cleaning contractors with small to mid-sized businesses and offices seeking reliable janitorial services, CleaningLeadsUSA has established itself as the leading commercial cleaning lead generation company."
            containerClass="text-center"
          />
          <div className="md:mt-20 mt-10 md:flex-row flex-col flex items-center justify-center md:gap-20 gap-10">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold">
                Healthcare Facility Cleaning Leads - Medical Office Contracts
              </h3>
              <p className="text-center">
                Hospitals, medical clinics, surgical centers, and healthcare
                facilities need professional cleaning services that comply with
                stringent medical industry standards and infection control
                protocols. Connect with healthcare administrators and facility
                managers seeking reliable medical cleaning specialists for
                ongoing service agreements.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">
                Industrial Cleaning Leads - Manufacturing & Factory Contracts
              </h3>
              <p>
                Manufacturing facilities, warehouses, and industrial plants
                require specialized cleaning services for equipment, machinery,
                and production areas. Connect with facility managers and plant
                supervisors actively seeking experienced industrial cleaning
                contractors for long-term maintenance contracts.
              </p>
            </div>
            <div className="text-center space-y-4">
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
      </div>
    </section>
  );
};

export default page;
