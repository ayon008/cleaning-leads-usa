import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Form from "../Shared/form/Form";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import facebook from "@/../public/2023_Facebook_icon.svg.png";
import whatasapp from "@/../public/WhatsApp.svg.webp";
import Pricing from "../Shared/Pricing/Pricing";

const page = () => {
  return (
    <section id="appointments">
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
        <div className="flex items-center md:flex-row flex-col md:py-6 py-6 rounded-md md:justify-between bg-amber-300 md:px-10 px-6 md:my-10 gap-6">
          <div>
            <h1 className="md:text-3xl text-xl md:text-left text-center font-semibold">
              Get your first appointment just at $99
            </h1>
            <p className="text-base mt-4 md:text-left text-center">
              Would you like to speak with our operations manager directly?
            </p>
          </div>
          <PrimaryBtn text="Call Now" containerClass="" />
        </div>
        <Title
          containerClass="text-center"
          subHeading="Free Consultation for Janitorial Leads"
          headline="Book an Appointment with Our Expert Consultant"
        />
        <div className="pt-10">
          <div className="flex items-center md:flex-row flex-col justify-between gap-8">
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
                    href="https://www.facebook.com/YourPage"
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
            <div className="md:w-1/2 w-full">
              <Form />
            </div>
          </div>
          <Pricing />
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
