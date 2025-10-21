import Image from "next/image";
import heroImage1 from "@/../public/janitorial-leads-hero-banner.jpg";
import PrimaryBtn from "../Button/PrimaryBtn";
import { Globe, Headphones, Mail, Share2 } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
const Banner = () => {
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
          className={`p-8 bg-white relative z-10 flex-1 card h-52 rounded-md overflow-hidden group`}
        >
          <svg
            className="absolute inset-0 z-20 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 208"
            preserveAspectRatio="none"
            aria-hidden="true"
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
            <p className="text-2xl font-semibold group-hover:text-white">
              {title}
            </p>
            <Icon
              size={"3rem"}
              className="text-secondary my-6 group-hover:text-white"
              aria-hidden="true"
            />
          </div>
          <span
            className="text-6xl font-semibold opacity-40 group-hover:opacity-100 text-white text-stroke group-hover:text-secondary duration-150 transition-all z-30 absolute right-6 bottom-6"
            aria-hidden="true"
          >
            0{index}
          </span>
        </div>
        <p className="mt-6 text-sm text-gray-500">{description}</p>
      </div>
    );
  };

  return (
    <section className="bg-primary" role="region" aria-labelledby="banner-title" aria-describedby="banner-desc">
      <div className="w-full md:h-dvh h-[500px] lg:-mt-8 mt-0" id="banner">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            alt="Professional janitorial team providing commercial cleaning services and appointment setting"
            title="Professional janitorial appointment services"
            src={heroImage1}
            className="object-cover absolute inset-0 size-full !z-10"
            fill
            priority
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 80vw,(max-width: 1280px) 100vw,100vw"
          />
          <div className="!z-20 pt-8 relative container h-full flex flex-col justify-center">
            <div className={`space-y-5`}>
              <h1 id="banner-title" className="text-white md:text-5xl text-3xl sm:text-4xl md:leading-16 font-extrabold">
                Professional Janitorial Appointments <br /> Thats
                <span className="text-secondary"> Actually Convert</span>
              </h1>
              <p id="banner-desc" className="text-white sm:text-base text-sm font-semibold">
                The only reliable source for janitorial jobs is this <br />{" "}
                stress-free appointment scheduling service for janitors.
              </p>
              <Link href={"/appointments"} title="Request Consultation - Appointments">
                <PrimaryBtn text="Request Consultation" ariaLabel="Request Consultation" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:-mt-10 mt-6 relative z-10">
        <div className="">
          <div className="container pb-36">
            <div className="flex md:flex-row flex-col md:gap-6 gap-10 items-stretch justify-between">
              <Card
                description="Our knowledgeable agents interact with specific prospects, securing real appointments and introducing your janitorial solutions to important decision-makers."
                title="Cold Calling"
                index={1}
                Icon={Headphones}
              />
              <Card
                description="Businesses in need of cleaning services are reached by our customized email campaigns, which turn them into qualified leads."
                title="Email Marketing"
                index={2}
                Icon={Mail}
              />
              <Card
                title="Google PPC"
                description="Targeted Pay-Per-Click advertisements direct high-intent prospects looking for cleaning services to personalized landing pages."
                index={3}
                Icon={Globe}
              />
              <Card
                title="Social Media Marketing"
                description="We interact with companies on Instagram, LinkedIn, and Facebook to promote your cleaning services and produce high-quality leads"
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
