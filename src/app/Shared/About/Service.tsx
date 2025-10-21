import React from "react";
import Progress from "../Progress/Progress";
import PrimaryBtn from "../Button/PrimaryBtn";
import Image from "next/image";
import image from "@/../public/about-cleaning-leads-usa.jpg";
import Link from "next/link";

const Stats = () => {
  return (
    <section
      className=""
      id="stats"
      role="region"
      aria-labelledby="stats-headline"
      aria-describedby="stats-subheading"
      itemScope
      itemType="http://schema.org/WebPageElement"
      itemProp="mainEntity"
    >
      <div className="ourDo w-screen md:h-[105vh] md:max-h-[690px] -scale-x-100 relative">
        <div className="absolute bg-black inset-0 opacity-70" aria-hidden="true"></div>
        <div className="relative -scale-x-100 z-20">
          <div className="flex gap-20 md:flex-row flex-col items-stretch container opacity-100">
            <div className="flex-1 overflow-hidden pt-16">
              <div>
                <p id="stats-subheading" className="text-secondary font-semibold">
                  Not just Numbers they are results
                </p>
                <h3
                  id="stats-headline"
                  className={`text-white md:text-3xl text-2xl font-bold mt-2 mb-5`}
                  itemProp="headline"
                >
                  Delivering Qualified Commercial Cleaning Appointments
                </h3>
                <div className="mt-6 space-y-6">
                  <Progress
                    id="client"
                    percent={90}
                    title="Client Retention Rate"
                    aria-hidden={false}
                  />
                  <Progress
                    id="Revenue"
                    percent={92}
                    title="Average Revenue Increase"
                    aria-hidden={false}
                  />
                  <Progress
                    id="Partnerships"
                    percent={88}
                    title="Successful Partnerships"
                    aria-hidden={false}
                  />
                  <Progress
                    id="Contract"
                    percent={88}
                    title="Faster Contract Acquisition"
                    aria-hidden={false}
                  />
                </div>
                <Link href={'/about'} title="Read more about CleaningLeadsUSA">
                  <PrimaryBtn
                    text="Read More"
                    containerClass="rounded-md mt-8"
                    ariaLabel="Read more about Cleaning Leads USA"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-1 image-box md:pb-0 pb-16">
              <Image
                src={image}
                width={382}
                height={320}
                className="w-full md:hidden block rounded-xl"
                alt="Cleaning Leads USA team delivering qualified commercial cleaning appointments nationwide"
                placeholder="blur"
                loading="lazy"
                aria-hidden={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
