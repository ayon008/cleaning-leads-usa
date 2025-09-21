"use client";
import facebook from "@/../public/facebook-icon.png";
import whatasapp from "@/../public/whatsapp-icon.webp";
import { Headphones, Mail, MapPin, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../../public/cleaning-leads-usa-logo.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../Button/PrimaryBtn";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

export const Logo = ({ containerClass }: { containerClass?: string }) => {
  return (
    <Link href={"/"} aria-label="Go to homepage">
      <div>
        <div className={`flex items-center gap-2 ${containerClass}`}>
          <Image
            src={logo}
            priority
            alt="Cleaning Leads USA company logo - professional janitorial lead generation services"
            title="Cleaning Leads USA Logo"
            width={70}
            height={70}
            sizes="100vw"
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

  const mblNavRef = useRef<HTMLUListElement | null>(null);

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
      if (!mblNavRef.current) return;

      const tl = gsap.timeline();

      // Hamburger icon animation
      tl.to(
        ".line-1",
        {
          rotate: isOpen ? 45 : 0,
          backgroundColor: isOpen ? "white" : "black",
          duration: 0.5,
          transformOrigin: "left center",
        },
        0
      )
        .to(".line-2", { opacity: isOpen ? 0 : 1, duration: 0.5 }, 0)
        .to(
          ".line-3",
          {
            rotate: isOpen ? -45 : 0,
            backgroundColor: isOpen ? "white" : "black",
            duration: 0.5,
            transformOrigin: "left center",
          },
          0
        );

      // Drawer animation using transform
      tl.to(
        mblNavRef.current,
        {
          x: isOpen ? "0%" : "100%", // smoother than left
          opacity: isOpen ? 1 : 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Nav items stagger animation
      tl.fromTo(
        ".nav-items",
        { opacity: isOpen ? 0 : 1, yPercent: isOpen ? 20 : 0 },
        {
          opacity: isOpen ? 1 : 0,
          yPercent: isOpen ? 0 : 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power1.inOut",
        }
      );

      return () => tl.kill();
    },
    { dependencies: [isOpen], revertOnUpdate: true }
  );

  const pathName = usePathname();
  useEffect(() => {
    if (isOpen) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

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
          <Mail className="text-secondary" size={"2rem"} />
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
                alt="Follow Cleaning Leads USA on Facebook for janitorial lead generation updates"
                loading="lazy"
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
                alt="Chat with Cleaning Leads USA on WhatsApp for commercial cleaning leads"
                sizes="40px"
                loading="lazy"
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
                <p className="text-sm text-white font-semibold">Phone Number</p>
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
        <button
          type="button"
          onClick={() => setOpen(!isOpen)}
          className="w-10 h-8 flex flex-col justify-between relative z-50"
        >
          <div className="w-10 h-1 bg-black rounded line-1"></div>
          <div className="w-10 h-1 bg-black rounded line-2"></div>
          <div className="w-10 h-1 bg-black rounded line-3"></div>
        </button>

        <ul
          ref={mblNavRef}
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl nav-mbl transform translate-x-full opacity-0 z-40"
        >
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="nav-items text-white font-semibold text-3xl"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
