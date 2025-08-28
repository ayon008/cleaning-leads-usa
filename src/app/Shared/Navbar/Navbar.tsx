"use client";
import facebook from "../../../../public/2023_Facebook_icon.svg.png";
import whatasapp from "../../../../public/WhatsApp.svg.webp";
import { barlow, poppins } from "@/app/fonts/Fonts";
import { Headphones, MapPin, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import logo from "@/../public/Blue_and_White_Simple_Cleaning_Services_Logo-removebg-preview-1.avif";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../Button/PrimaryBtn";


export const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src={logo} priority alt="Logo-image" width={40} height={40} />
        <h1 className={`${poppins.className} font-semibold text-lg`}>
          Cleaning <br />
          Leads USA
        </h1>
      </div>
    </div>
  );
};
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!ref.current || !ctaRef.current) return;
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav-part",
        start: "top top",
        end: "max",
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });

    t1.to(ref.current, {
      duration: 0.5,
      ease: "power1.inOut",
      backgroundColor: "#4DAC4D",
    });
    t1.to(ctaRef.current, {
      duration: 0,
      borderRadius: "0px",
    });
  }, []);
  return (
    <nav className="nav">
      {/* Nav top */}
      <div className="relative">
        <div className="flex items-center justify-between container !pl-8 bg-primary nav-top rounded-tl-[50px] rounded-bl-[50px]">
          <ul className={`${poppins.className} flex items-center gap-8`}>
            <li className="text-sm font-semibold">Support</li>
            <li className="text-sm font-semibold">Careers</li>
            <li className="text-sm font-semibold">Faq&apos;s</li>
          </ul>
          <div className="flex items-center gap-8">
            <PrimaryBtn text="Book an Appointment" />
            <ShoppingCart />
          </div>
        </div>
      </div>
      {/* Logo Part */}
      <div className="container flex items-center justify-between gap-10 py-8">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-secondary" size={"2rem"} />
          <div>
            <p className="text-base text-gray-500 font-semibold">
              Office Address
            </p>
            <h2 className={`${barlow.className} text-xl font-bold`}>
              Envanto HQ, Australia
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mx-8">
          <MapPin className="text-secondary" size={"2rem"} />
          <div>
            <p className="text-base text-gray-500 font-semibold">
              Contact Mail
            </p>
            <h2 className={`${barlow.className} text-xl font-bold`}>
              support@cleaningleadsusa.com
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Image
              src={facebook}
              className="w-[30px] h-[30px]"
              alt="facebook"
            />
          </div>
          <div>
            <Image
              src={whatasapp}
              className="w-[40px] h-[40px]"
              alt="whatsapp"
            />
          </div>
          <div>
            <Phone />
          </div>
        </div>
      </div>
      {/* Nav Part */}
      <div className="relative z-[100] shadow-2xl" id="nav-part" ref={ref}>
        <div className="flex items-center justify-between container nav-part">
          <ul className="flex items-center lg:w-2/3 gap-10">
            <li>
              <Link href={"/"} className="text-white font-semibold text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-white font-semibold text-base">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-white font-semibold text-base">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-white font-semibold text-base">
                Appointments
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-white font-semibold text-base">
                Leads
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-white font-semibold text-base">
                Blogs
              </Link>
            </li>
          </ul>
          <div
            className="flex items-center gap-2 bg-tertiary py-2 px-4 rounded-4xl"
            id="cta"
            ref={ctaRef}
          >
            <Headphones className="text-secondary" size={"2rem"} />
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
    </nav>
  );
};

export default Navbar;
