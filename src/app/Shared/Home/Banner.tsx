"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import heroImage1 from "@/../public/slider-a-01.jpg";
import heroImage2 from "@/../public/slider-a-02-1.jpg";
import "swiper/css/effect-fade";
import { barlow } from "@/app/fonts/Fonts";
import PrimaryBtn from "../Button/PrimaryBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Globe, Headphones, Mail, Share2 } from "lucide-react";
import { LucideIcon } from "lucide-react";
const Banner = () => {
  const [index, setIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.from(".banner-subtext", {
        xPercent: -50,
        opacity: 0,
        duration: 0.5,
        ease: "none",
      })
        .from(
          ".banner-headline",
          {
            xPercent: 10,
            opacity: 0,
            duration: 0.5,
            ease: "none",
          },
          "-=0.3"
        )
        .from(
          ".banner-btn",
          {
            yPercent: 50,
            opacity: 0,
            duration: 0.5,
            ease: "none",
          },
          "=+0.2"
        );
    },
    { dependencies: [index], scope: containerRef, revertOnUpdate: true }
  );
  // card
  const Card = ({
    title,
    index,
    Icon,
    description,
  }: {
    title: string;
    index: number;
    Icon: LucideIcon;
    description: string;
  }) => {
    return (
      <div className="md:w-64 w-full md:mx-0 mx-auto">
        <div
          className={`${barlow.className} p-8 bg-white relative flex-1 card h-52 rounded-md overflow-hidden group`}
        >
          <svg
            width=""
            className="absolute top-0 left-0 !right-0 bottom z-10"
            height=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,0 
           L 0,208 
           L 205,208 
           C 220,208 256,160 256,145 
           L 256,0 
           L 0,0 Z"
              className="fill-[#F8FCF8] group-hover:fill-secondary transition-colors duration-300"
            />
          </svg>
          <div className="relative z-20">
            <p className="text-3xl font-semibold group-hover:text-white">
              {title}
            </p>
            <Icon
              size={"3rem"}
              className="text-secondary my-6 group-hover:text-white"
            />
          </div>
          <span className="text-6xl font-semibold opacity-10 group-hover:opacity-100 text-white text-stroke group-hover:text-secondary duration-150 transition-all z-30 absolute right-6 bottom-6">
            0{index}
          </span>
        </div>
        <p className="mt-6 text-sm text-gray-500">{description}</p>
      </div>
    );
  };

  return (
    <section className="bg-primary">
      <div
        className="w-full md:h-dvh h-[500px] lg:-mt-8 mt-0"
        id="banner"
        ref={containerRef}
      >
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          slidesPerView={1}
          loop={true}
          className="h-full banner"
          onSlideChange={(swiper) => {
            const latestIndex = swiper.realIndex;
            setIndex(latestIndex);
          }}
        >
          <SwiperSlide className="h-full w-full relative">
            <Image
              alt="hero-image-1"
              src={heroImage1}
              className="object-cover absolute inset-0 size-full !z-10"
              fill
              priority
            />
            <div className="!z-20 pt-8 relative container h-full flex flex-col justify-center">
              <div className={`${barlow.className} space-y-5`}>
                <p className="text-secondary uppercase font-semibold md:text-lg text-base tracking-widest banner-subtext w-fit">
                  Grow Your Clients
                </p>
                <h1 className="text-white md:text-5xl text-3xl font-bold lg:w-1/2 tracking-wide md:leading-14 banner-headline">
                  Professional Janitorial Appointments That Actually Convert
                </h1>
                <div className="banner-btn">
                  <PrimaryBtn text="Request Consultation" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full w-full relative">
            <Image
              alt="hero-image-2"
              src={heroImage2}
              className="object-cover"
              fill
            />
            <div className="!z-20 pt-8 relative container h-full flex flex-col justify-center">
              <div className={`${barlow.className} space-y-5`}>
                <p className="text-secondary uppercase font-semibold text-lg tracking-widest banner-subtext w-fit">
                  Stress-Free Lead Generation
                </p>
                <h1 className="text-white md:text-5xl text-3xl font-bold lg:w-1/2 tracking-wide md:leading-14 banner-headline">
                  Local Commercial Cleaning Leads & Janitorial Appointments
                </h1>
                <div className="banner-btn">
                  <PrimaryBtn text="Our Service" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:-mt-10 mt-20 relative z-10">
        <div className="">
          <div className="container pb-36">
            <div className="flex md:flex-row flex-col md:gap-6 gap-20 items-stretch justify-between">
              <Card
                description="Our expert agents engage targeted prospects, introducing your
          janitorial solutions to key decision-makers and securing genuine
          appointments."
                title="Cold Calling"
                index={1}
                Icon={Headphones}
              />
              <Card
                description="We craft personalized email campaigns that engage businesses in need of cleaning services, nurturing them into qualified leads."
                title="Email Marketing"
                index={2}
                Icon={Mail}
              />
              <Card
                title="Google PPC"
                description="High-intent prospects searching for cleaning services are driven to custom landing pages through targeted Pay-Per-Click ads."
                index={3}
                Icon={Globe}
              />
              <Card
                title="Social Media Marketing"
                description="We engage businesses on Facebook, LinkedIn, and Instagram to showcase your janitorial services and generate quality leads."
                index={4}
                Icon={Share2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
