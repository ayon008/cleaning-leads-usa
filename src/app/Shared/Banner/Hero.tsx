import Image from "next/image";
import React, { ReactNode } from "react";
import image from "@/../public/professional-cleaning-services-team.jpg";
import PrimaryBtn from "../Button/PrimaryBtn";
import Link from "next/link";

const Hero = ({
  title,
  headline,
  des,
}: {
  title: string;
  headline: string;
  des: ReactNode;
}) => {
  return (
    <section id="hero" className="lg:-mt-8 mt-0 h-fit">
      <div className="h-[500px] w-full relative">
        <div className="inset-0 absolute bg-gradient-to-r from-black/85 to-black/10 z-10"></div>
        <Image
          src={image}
          alt="Commercial cleaning leads banner showcasing professional janitorial services"
          title="Commercial Cleaning Leads – Professional Janitorial Marketing Banner"
          fill
          priority={true}
          fetchPriority="high"
          className="object-cover"
          sizes="(max-width: 768px) 480px,   /* Mobile: load smaller version */
         (max-width: 1200px) 100vw,  /* Tablet: full width */
         100vw" /* Desktop: full width */
        />
        <div className="relative container z-20 pt-10 h-full flex flex-col justify-center gap-4">
          <h1 className="text-white md:text-5xl text-3xl sm:text-4xl md:leading-16 font-extrabold">
            {title}
          </h1>
          <p className="text-white sm:text-base text-sm font-semibold">
            {headline}
          </p>
          <p className="text-white sm:text-base text-sm font-semibold">{des}</p>
          <div>
            <Link href={'/contact#form'}>
              <PrimaryBtn
                text="Get A Quote"
                containerClass="rounded-md w-fit"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
