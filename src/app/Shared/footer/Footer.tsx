import Image from "next/image";
import React from "react";
import facebook from "../../../../public/facebook-icon.png";
import whatasapp from "../../../../public/whatsapp-icon.webp";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "../Navbar/Navbar";
import Link from "next/link";
import PrimaryBtn from "../Button/PrimaryBtn";
import EmailSubscription from "../form/EmailSubscription";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Appointments", href: "/appointments" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      role="contentinfo"
      itemScope
      itemType="http://schema.org/WPFooter"
      aria-label="Footer"
    >
      <div className="bg-[#212121]">
        <div className="grid md:grid-cols-4 grid-cols-1 justify-between items-center container md:py-6 py-10 md:gap-0 gap-10">
          <div className="flex items-center gap-5">
            <div>
              <a
                href="https://www.facebook.com/commercialcleaningleads"
                target="_blank"
                rel="noopener noreferrer"
                title="Cleaning Leads USA on Facebook"
                aria-label="Cleaning Leads USA on Facebook"
                itemProp="sameAs"
              >
                <Image
                  src={facebook}
                  className="w-[30px] h-[30px] cursor-pointer"
                  alt="Follow Cleaning Leads USA on Facebook for commercial cleaning lead generation tips"
                  height={30}
                  width={30}
                  loading="lazy"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div>
              <a
                href="https://wa.me/13477985582"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with Cleaning Leads USA on WhatsApp"
                aria-label="Chat with Cleaning Leads USA on WhatsApp"
                itemProp="sameAs"
              >
                <Image
                  src={whatasapp}
                  className="w-[40px] h-[40px] cursor-pointer"
                  alt="Chat with Cleaning Leads USA on WhatsApp for janitorial appointment booking"
                  height={30}
                  width={30}
                  loading="lazy"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div>
              <a href="tel:+13326004766" title="Call Cleaning Leads USA">
                <Phone className="cursor-pointer text-white" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-secondary" size={"2rem"} />
            <div>
              <p className="text-sm text-white font-semibold">Phone Number</p>
              <a
                href="tel:+13326004766"
                aria-label="Call Cleaning Leads USA at +1 (332) 600-4766"
                title="Call Cleaning Leads USA"
                className="inline-flex items-center justify-center text-white text-sm font-bold"
                itemProp="telephone"
              >
                +1 (332) 600-4766
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-secondary" size={"2rem"} />
            <div>
              <p className="text-sm text-white font-semibold">Contact Mail</p>
              <a
                href="mailto:support@cleaningleadsusa.com"
                title="Contact Cleaning Leads USA Support"
                className="text-base font-bold"
                itemProp="email"
                aria-label="Email Cleaning Leads USA support"
              >
                <h2 className="text-sm text-white">
                  support@cleaningleadsusa.com
                </h2>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-secondary" size={"2rem"} />
            <div>
              <p className="text-sm text-white font-semibold">Office Address</p>
              <h2
                className={`text-sm font-bold text-white`}
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="addressLocality">Long Island City</span>,{" "}
                <span itemProp="addressRegion">NY</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('/footer-dot-map1.png')] bg-[#252525] bg-no-repeat bg-cover lg:bg-contain bg-center w-full"
        aria-hidden="true"
      >
        <div className="container grid md:grid-cols-4 grid-cols-2 gap-10 items-start justify-between py-10">
          <div className="md:col-span-1 col-span-2">
            <Logo containerClass="text-white" />
            <div className="mt-4 space-y-4">
              <h3 className="text-white text-2xl">Do you any query?</h3>
              <p className="text-white text-sm">
                Our Customer Support is availabe 24/7
              </p>
              <a href="tel:+13326004766" title="Call Cleaning Leads USA">
                <PrimaryBtn text="Call Us Now" containerClass="" />
              </a>
            </div>
          </div>
          <div>
            <ul>
              {navItems?.map((item, index) => {
                return (
                  <li key={index} className="text-white py-2 font-semibold">
                    <Link
                      href={`${item.href}`}
                      title={item.name}
                      aria-label={`Go to ${item.name} page`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white font-semibold">
            <ul className="space-y-4">
              <li>
                <Link href={"/terms-and-conditions"} title="Terms & Conditions">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href={"/privacy-policy"} title="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/web-development-service"}
                  title="Web Development Services"
                >
                  Web Development Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white space-y-4 md:max-w-64 w-full md:col-span-1 col-span-2">
            <h3 className={`text-xl font-semibold`}>Our Newsletter</h3>
            <p>
              Subscribe to our newsletter and get updated of our latest cleaning
              opportunities
            </p>
            <EmailSubscription />
          </div>
        </div>
        <hr className="text-white h-[2px] w-full" />
        <p className="text-center text-white py-4">
          Copyright © 2025 Cleaning Leads USA | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
