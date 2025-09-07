import Image from "next/image";
import React from "react";
import image from "@/../public/slider-a-01.jpg";
import PrimaryBtn from "../Button/PrimaryBtn";

const Hero = ({
  title,
  headline,
  des,
}: {
  title: string;
  headline: string;
  des: HTMLAnchorElement;
}) => {
  return (
    <section id="hero" className="lg:-mt-8 mt-0">
      <div className="h-[500px] w-full relative">
        <div className="inset-0 absolute bg-tertiary opacity-60 z-10"></div>
        <Image
          src={image}
          fill
          alt="Banner-image-commercial-cleaning-leads"
          className="w-full h-full object-cover object-top absolute inset-0"
        />
        <div className="relative container z-20 pt-10 h-full flex flex-col justify-center gap-4">
          <h1 className="text-white md:text-6xl font-semibold">{title}</h1>
          <p className="text-white text-lg">{headline}</p>
          <p className="text-sm text-white">{des}</p>
          <PrimaryBtn text="Get A Quote" containerClass="rounded-md w-fit" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
