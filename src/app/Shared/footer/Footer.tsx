import Image from "next/image";
import React from "react";
import facebook from "../../../../public/2023_Facebook_icon.svg.png";
import whatasapp from "../../../../public/WhatsApp.svg.webp";
import { Mail, MapPin, Phone } from "lucide-react";
import { barlow } from "@/app/fonts/Fonts";
import { Logo } from "../Navbar/Navbar";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Appointments", href: "/appointments" },
  { name: "Leads", href: "/leads" },
  { name: "Blogs", href: "/blogs" },
];

const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-[#212121]">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-5">
            <div>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebook}
                  className="w-[30px] h-[30px] cursor-pointer"
                  alt="facebook"
                />
              </a>
            </div>

            <div>
              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={whatasapp}
                  className="w-[40px] h-[40px] cursor-pointer"
                  alt="whatsapp"
                />
              </a>
            </div>

            <div>
              {/* Phone */}
              <a href="tel:+1234567890">
                <Phone className="cursor-pointer text-white" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center gap-2">
              <Phone className="text-secondary" size={"2rem"} />
              <div>
                <p className="text-base text-white font-semibold">
                  Phone Number
                </p>
                <h2
                  className={`${barlow.className} text-white text-xl font-bold`}
                >
                  +1 (234) 450-0123
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-secondary" size={"2rem"} />
              <div>
                <p className="text-base text-white font-semibold">
                  Contact Email
                </p>
                <h2
                  className={`${barlow.className} text-white text-xl font-bold`}
                >
                  support@cleaningleadsusa.com
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-secondary" size={"2rem"} />
              <div>
                <p className="text-base text-white font-semibold">
                  Office Address
                </p>
                <h2
                  className={`${barlow.className} text-white text-xl font-bold`}
                >
                  Envanto HQ, Australia
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/footer-dot-map1.png')] bg-[#252525] bg-no-repeat bg-center w-full">
        <div className="container flex flex-wrap items-start justify-between py-10">
          <Logo containerClass="text-white" />
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
                <Link href={"/terms"}>Terms & Condition</Link>
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
          <div className="text-white space-y-4 max-w-64">
            <h3 className={`${barlow.className} text-2xl font-semibold`}>
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
