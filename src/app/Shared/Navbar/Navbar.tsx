"use client";
import facebook from "@/../public/2023_Facebook_icon.svg.png";
import whatasapp from "@/../public/WhatsApp.svg.webp";
import { Headphones, MapPin, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/../public/Blue_and_White_Simple_Cleaning_Services_Logo-removebg-preview-1.avif";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../Button/PrimaryBtn";
gsap.registerPlugin(ScrollTrigger);

export const Logo = ({ containerClass }: { containerClass?: string }) => {
  return (
    <Link href={"/"} aria-label="Go to homepage">
      <div>
        <div className={`flex items-center gap-2 ${containerClass}`}>
          <Image
            src={logo}
            priority
            alt="Company logo - Cleaning Leads USA"
            title="Cleaning Leads USA Logo"
            width={40}
            height={40}
            sizes="40px"
          />
          <h1 className={`font-semibold text-lg`}>
            Cleaning <br />
            Leads USA
          </h1>
        </div>
      </div>
    </Link>
  );
};

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

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
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
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    });
    t1.to(ctaRef.current, {
      duration: 0,
      borderRadius: "0px",
    });
  }, []);

  useGSAP(
    () => {
      gsap.to(".line-1", {
        rotate: isOpen ? 45 : 0,
        backgroundColor: isOpen ? "white" : "black",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".line-3", {
        rotate: isOpen ? -45 : 0,
        backgroundColor: isOpen ? "white" : "black",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".line-2", {
        opacity: !isOpen ? 1 : 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".nav-mbl", {
        // width: isOpen ? 0 : 100,
        opacity: isOpen ? 100 : 0,
        left: isOpen ? 0 : "100%",
        duration: 0.5,
      });
      if (isOpen) {
        gsap.from(".nav-items", {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          stagger: 0.1,
          delay: 0.2, // Wait for menu to appear
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [isOpen], revertOnUpdate: true }
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className={`nav`}>
      {/* Nav top */}
      <div className="relative hidden lg:block">
        <div className="flex items-center justify-between container !pl-8 bg-primary nav-top rounded-tl-[50px] rounded-bl-[50px]">
          <ul className={`flex items-center gap-8`}>
            <Link href={"/support"}>
              <li className="text-sm font-semibold">Support</li>
            </Link>
            <Link href={"/careers"}>
              <li className="text-sm font-semibold">Careers</li>
            </Link>
            <Link href={"/faq"}>
              <li className="text-sm font-semibold">Faq&apos;s</li>
            </Link>
          </ul>
          <div className="flex items-center gap-8">
            <Link href={"/appointments"}>
              <PrimaryBtn text="Book an Appointment" />
            </Link>
            <ShoppingCart />
          </div>
        </div>
      </div>
      {/* Logo Part */}
      <div className="container items-center justify-between gap-10 py-8 hidden lg:flex">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-secondary" size={"2rem"} />
          <div>
            <p className="text-sm text-gray-500 font-semibold">
              Office Address
            </p>
            <h2 className={`text-base font-bold`}>Envanto HQ, Australia</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mx-8">
          <MapPin className="text-secondary" size={"2rem"} />
          <div>
            <p className="text-sm text-gray-500 font-semibold">Contact Mail</p>
            <a
              href="mailto:support@cleaningleadsusa.com"
              title="Contact Cleaning Leads USA Support"
              className="text-base font-bold"
            >
              <h2 className="text-base">support@cleaningleadsusa.com</h2>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
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
              <Phone className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      {/* Nav Part */}
      <div className="relative z-[100] hidden lg:block" id="nav-part" ref={ref}>
        <div className="flex items-center justify-between container nav-part">
          <ul className="flex items-center lg:w-2/3 gap-10">
            {navItems?.map((navItems, i) => {
              return (
                <li key={i}>
                  <Link
                    href={navItems.href}
                    className="text-white font-semibold text-base"
                  >
                    {navItems.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="flex items-center gap-2 bg-tertiary py-3 px-4 rounded-4xl"
            id="cta"
            ref={ctaRef}
          >
            <Headphones className="text-secondary" size={"2rem"} />
            <a href="tel:+12344500123">
              <div>
                <p className="text-sm text-white font-semibold">
                  Phone Number
                </p>
                <h2 className={`text-white text-base font-bold cursor-pointer`}>
                  +1 (234) 450-0123
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary lg:hidden flex items-center justify-between p-6 relative">
        <Logo />
        <div className="rounded-md relative !z-50">
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
          >
            <div className="w-10 h-1 bg-black rounded origin-left line-1"></div>
            <div className="w-10 h-1 bg-black rounded line-2"></div>
            <div className="w-10 h-1 bg-black rounded origin-left line-3"></div>
          </button>
        </div>
        <ul className="fixed h-dvh top-0 right-0 bottom-0 text-white bg-black flex items-center justify-center flex-col gap-8 text-4xl !z-40 nav-mbl !overflow-hidden">
          {navItems?.map((navItems, i) => {
            return (
              <li key={i}>
                <Link
                  href={"/"}
                  className="text-white font-semibold text-3xl nav-items"
                >
                  {navItems.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
