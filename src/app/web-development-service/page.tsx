import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import professional_image from "@/../public/cleaning-business-professionals.jpg";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import web from "../../../public/web-development-for-cleaning-companies.jpg";
import seo from "../../../public/digital-marketting-seo-service-for-cleaning-companies.jpg";
import email_marketing from "../../../public/email-marketting-for-cleaning-companies.jpg";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Contact from "../Shared/Home/Contact";

export const metadata = {
  title:
    "Web Development, SEO & Email Marketing for Cleaning Companies | Cleaning Leads USA",
  description:
    "Boost your cleaning business with professional website development, SEO, and email marketing services. We build high-converting websites, run targeted ad campaigns, and create automated email strategies that attract clients and grow your cleaning company online.",
  keywords: [
    "cleaning company web development",
    "cleaning business website design",
    "SEO for cleaning companies",
    "digital marketing for cleaning services",
    "email marketing for cleaning businesses",
    "lead generation for cleaning companies",
    "cleaning service website SEO",
    "janitorial marketing agency",
    "cleaning leads USA",
  ],
  openGraph: {
    title:
      "Web Development, SEO & Email Marketing for Cleaning Companies | Cleaning Leads USA",
    description:
      "We specialize in helping cleaning companies grow online through stunning websites, SEO, and automated email campaigns that convert visitors into loyal clients.",
    url: "https://www.cleaningleadsusa.com/web-development-service", // update with your actual URL
    type: "website",
    images: [
      {
        url: "/web-development-for-cleaning-companies.jpg",
        width: 1200,
        height: 630,
        alt: "Website development and marketing for cleaning companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Development, SEO & Email Marketing for Cleaning Companies | Cleaning Leads USA",
    description:
      "Grow your cleaning company with professional websites, SEO, and email marketing designed to drive real results.",
    images: ["/web-development-for-cleaning-companies.jpg"],
  },
};

const ServiceCard = ({
  imageData,
  alt,
  headline,
  des,
}: {
  imageData: StaticImageData;
  alt: string;
  headline: string;
  des: string;
}) => {
  return (
    <article className="border max-w-[345px] mx-auto w-full rounded-md overflow-hidden">
      <div className="w-[345px] h-[200px] relative">
        <Image
          src={imageData}
          fill
          alt={alt}
          className="object-cover object-top"
          itemProp="image"
        />
      </div>
      <div className="space-y-2 p-2 flex-col flex justify-between h-[260px]">
        <h2 className="text-2xl font-bold" itemProp="headline">
          {headline}
        </h2>
        <p>{des}</p>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <section id="web-development-service" aria-labelledby="web-dev-heading">
      <Hero
        title="Web Development Services"
        headline="Custom Websites That Drive Results"
        des={
          <>
            Build a professional, fast, and SEO-optimized website tailored to
            your business needs. <br /> Our expert developers create responsive,
            user-friendly sites designed to improve <br /> your online presence
            and grow your brand.
          </>
        }
      />
      <div className="container md:py-20 py-10">
        <div
          className=""
          id="expertise"
          role="region"
          aria-labelledby="expertise-title"
          aria-describedby="expertise-desc"
        >
          <div className="mt-10">
            <div className="flex md:flex-row flex-col gap-6">
              <div className="flex-1 -mt-14">
                <div className="rounded-md overflow-hidden w-fit shadow-xl">
                  <div className="h-14 bg-secondary flex items-center justify-center">
                    <p className={`text-white font-bold text-base `}>
                      Your Brand Representation
                    </p>
                  </div>
                  <Image
                    src={professional_image}
                    width={520}
                    height={550}
                    alt="Professional janitorial lead generation service by Cleaning Leads USA"
                    title="Cleaning Leads USA - Professional Janitorial Lead Generation Service"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                    decoding="async"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="pt-10 space-y-6">
                  <p className="text-secondary font-semibold">
                    Your Digital Presence
                  </p>
                  <h2
                    id="expertise-title"
                    className={`md:text-4xl text-3xl font-semibold`}
                  >
                    Websites that tell your cleaning company&apos;s story
                  </h2>
                  <p
                    id="expertise-desc"
                    className="text-gray-600 md:text-base text-sm"
                  >
                    Our proven web development and digital marketing system,
                    your cleaning company can attract and convert high-quality
                    leads effortlessly. We help you build a strong online
                    presence that tells your story and drives real results.
                  </p>
                  <ul className="professional-ul space-y-2">
                    <li className="flex items-center gap-4">
                      <CheckCircle className="text-secondary" />
                      <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                        Custom cleaning service websites
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <CheckCircle className="text-secondary" />
                      <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                        Targeted ads that bring real leads
                      </span>
                    </li>
                    <li className="flex items-center gap-4">
                      <CheckCircle className="text-secondary" />
                      <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                        Automated email marketing
                      </span>
                    </li>
                  </ul>
                  <Link href={"/contact"} title="Contact Cleaning Leads USA">
                    <PrimaryBtn
                      text="Contact Us"
                      containerClass="rounded-md w-fit"
                      ariaLabel="contact"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F8FD]">
        <div className="container">
          <Title
            subHeading=""
            headline="What we can offer today"
            containerClass="lg:w-1/2 w-full"
          />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
            <ServiceCard
              imageData={web}
              alt="website-development-for-cleaning-companies"
              headline="Websites for Cleaning Companies"
              des="We design and develop high-converting websites tailored for cleaning businesses. Our sites help attract more clients, showcase your services, and make online booking effortless — giving your cleaning company a strong, professional online presence."
            />
            <ServiceCard
              imageData={seo}
              alt="seo-and-digital-marketing-for-cleaning-companies"
              headline="SEO & Digital Marketing for Cleaning Companies"
              des="We help cleaning businesses grow online through powerful SEO strategies, Google Ads, and social media marketing. Our tailored campaigns boost your website’s visibility, attract local clients, and turn clicks into loyal customers."
            />
            <ServiceCard
              imageData={email_marketing}
              alt="email-marketing-for-cleaning-companies"
              headline="Email Marketing for Cleaning Companies"
              des="We create targeted email campaigns that keep your cleaning clients engaged and coming back. From promotional offers to automated follow-ups, our email marketing strategies help increase bookings, build loyalty, and grow your business."
            />
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default page;
