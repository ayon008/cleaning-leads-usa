import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Mail, MapPin, Phone } from "lucide-react";
import facebook from "@/../public/2023_Facebook_icon.svg.png";
import whatasapp from "@/../public/WhatsApp.svg.webp";
import Image from "next/image";

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
        <div className="container py-10">
          <Title
            containerClass="text-center"
            subHeading="Provide your info and our friendly agent will contact you within 12 hours to assist you."
            headline="Contact Us Today"
          />

          <div className="flex items-center justify-between mt-10 gap-8">
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
                    <small className="text-sm font-medium">Senior Business Consultant</small>
                  </p>
                  <a
                    href="mailto:support@cleaningleadsusa.com"
                    title="Contact Cleaning Leads USA Support"
                    className="text-base font-bold"
                  >
                    <h2 className="text-base">logan@cleaningleadsusa.com</h2>
                  </a>
                  <button type="button" className="bg-[#0072B1] px-3 py-1 rounded-md cursor-pointer mt-4 text-white">
                    Get Me on LinkedIn
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <form
                className="bg-secondary rounded-md p-6 shadow-2xl"
                action=""
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Business Email"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <input
                    type="text"
                    name="phone number"
                    placeholder="Phone Number"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <input
                    type="text"
                    name="company-name"
                    placeholder="Company Name"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Company Address"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="Service Zip"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <input
                    type="text"
                    name="radius"
                    placeholder="Service Radius"
                    className="w-full bg-white p-3 rounded-md"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    id=""
                    className="px-3 py-5 w-full bg-white resize-none rounded-md"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-tertiary text-white hover:bg-white hover:text-tertiary duration-200 transition-all ease-linear rounded-md text-base py-4 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
