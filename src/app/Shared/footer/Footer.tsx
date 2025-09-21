import Image from "next/image";
import React from "react";
import facebook from "../../../../public/facebook-icon.png";
import whatasapp from "../../../../public/whatsapp-icon.webp";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "../Navbar/Navbar";
import Link from "next/link";
import PrimaryBtn from "../Button/PrimaryBtn";

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
    <section id="footer">
      <div className="bg-[#212121]">
        <div className="grid md:grid-cols-4 grid-cols-1 justify-between items-center container md:py-6 py-10 md:gap-0 gap-10">
          <div className="flex items-center gap-5">
            <div>
              <a
                href="https://www.facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebook}
                  className="w-[30px] h-[30px] cursor-pointer"
                  alt="Follow Cleaning Leads USA on Facebook for commercial cleaning lead generation tips"
                  height={30}
                  width={30}
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
                  className="w-[40px] h-[40px] cursor-pointer"
                  alt="Chat with Cleaning Leads USA on WhatsApp for janitorial appointment booking"
                  height={30}
                  width={30}
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
          <div className="flex items-center gap-2">
            <Phone className="text-secondary" size={"2rem"} />
            <div>
              <p className="text-sm text-white font-semibold">Phone Number</p>
              <a
                href="tel:+1234567890"
                aria-label="Call Cleaning Leads USA at +1 (234) 567-890"
                title="Call Cleaning Leads USA"
                className="inline-flex items-center justify-center text-white font-bold"
              >
                +1 (234) 567-890
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
              <h2 className={`text-base font-bold text-white`}>
                Envanto HQ, Australia
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/footer-dot-map1.png')] bg-[#252525] bg-no-repeat bg-center w-full">
        <div className="container grid md:grid-cols-4 grid-cols-2 gap-10 items-start justify-between py-10">
          <div className="md:col-span-1 col-span-2">
            <Logo containerClass="text-white" />
            <div className="mt-4 space-y-4">
              <h3 className="text-white text-2xl">Do you any query?</h3>
              <p className="text-white text-sm">
                Our Customer Support is availabe 24/7
              </p>
              <PrimaryBtn text="Call Us Now" />
            </div>
          </div>
          <div>
            <ul>
              {navItems?.map((item, index) => {
                return (
                  <li key={index} className="text-white py-2 font-semibold">
                    <Link href={`${item.href}`}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white font-semibold">
            <ul className="space-y-4">
              <li>
                <Link href={"/terms-and-conditions"}>Terms & Condition</Link>
              </li>
              <li>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/web-development-service"}>
                  Web Development Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white space-y-4 md:max-w-64 w-full md:col-span-1 col-span-2">
            <h3 className={`text-xl font-semibold`}>
              Our Newsletter
            </h3>
            <p>
              Subscribe to our newsletter and get updated of our latest cleaning
              opportunities
            </p>
            <form action="">
              <input
                type="email"
                className="bg-white w-full p-4 text-black rounded-md"
                placeholder="example@domain.com"
              />
              <button
                type="submit"
                className="bg-secondary text-lg cursor-pointer hover:bg-tertiary transition-all duration-300 text-white mt-4 rounded-md py-4 px-8"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr className="text-white h-[2px] w-full" />
        <p className="text-center text-white py-4">
          Copyright © 2025 Cleaning Leads USA | All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
