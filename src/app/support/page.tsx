import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Mail, Phone } from "lucide-react";
import facebook from "@/../public/facebook-icon.png";
import whatasapp from "@/../public/whatsapp-icon.webp";
import Image from "next/image";

const page = () => {
  return (
    <section id="support">
      <Hero
        headline="Need Help?"
        title="Customer Support at Cleaning Leads USA"
        des={
          <>
            Our support team is ready to help with{" "}
            <strong>leads, billing, or account issues</strong>. <br /> Contact
            us anytime by phone, email, or chat — so you can focus on growing
            your cleaning business.
          </>
        }
      />
      <div className="container md:py-20 py-10">
        <Title
          containerClass="text-center"
          subHeading="Our support team is available to assist with janitorial leads,
              billing, or account questions. Reach us by phone, email, or live
              chat anytime."
          headline="Need Help?"
        />
        <div className="flex md:flex-row flex-col items-center justify-center gap-10">
          <div className="bg-primary w-fit mt-10 p-6 flex-1">
            <Mail size={"4rem"} className="text-secondary w-fit mx-auto" />
            <div className="text-black flex flex-col justify-center items-center">
              <a
                href="mailto:support@cleaningleadsusa.com"
                title="Contact Cleaning Leads USA Support"
                className="font-medium mt-4"
              >
                <h2 className="text-2xl text-center">
                  support@cleaningleadsusa.com
                </h2>
              </a>
            </div>
          </div>
          <div className="bg-primary w-fit mt-10 p-6 flex-1">
            <Phone size={"4rem"} className="text-secondary w-fit mx-auto" />
            <div className="text-black flex flex-col justify-center items-center">
              <a
                href="tel:+1234567890"
                aria-label="Call Cleaning Leads USA at "
                title="Contact Cleaning Leads USA Support"
                className="font-medium mt-4"
              >
                <h2 className="text-2xl text-center">+1 (234) 567-890</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Title
            containerClass="text-center"
            headline="Follow Us on Facebook or Message Us In Whatsapp"
            subHeading=""
          />
        </div>
        <div className="flex items-center justify-center gap-10 mt-10">
          <div>
            <a
              href="https://www.facebook.com/commercialcleaningleads"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook}
                className="w-[100px] h-[100px] cursor-pointer"
                alt="Follow Cleaning Leads USA on Facebook for commercial cleaning lead generation tips"
                height={100}
                width={100}
                loading="lazy"
              />
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={whatasapp}
                className="w-[130px] h-[130px] cursor-pointer"
                alt="Chat with Cleaning Leads USA on WhatsApp for janitorial appointment booking"
                height={130}
                width={130}
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <a href="tel:+1234567890">
              <Phone className="cursor-pointer text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
