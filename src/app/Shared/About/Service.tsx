import React from "react";
import Progress from "../Progress/Progress";
import PrimaryBtn from "../Button/PrimaryBtn";
import Image from "next/image";
import image from "@/../public/img-n-01.jpg";
import Link from "next/link";

const Stats = () => {
  return (
    <section className="" id="stats">
      <div className="ourDo w-screen md:h-[105vh] md:max-h-[690px] -scale-x-100 relative">
        <div className="absolute bg-black inset-0 opacity-70"></div>
        <div className="relative -scale-x-100 z-20">
          <div className="flex gap-20 md:flex-row flex-col items-stretch container opacity-100">
            <div className="flex-1 overflow-hidden pt-16">
              <div>
                <p className="text-secondary font-semibold">
                  Not just Numbers they are results
                </p>
                <h1
                  className={`text-white md:text-3xl text-2xl font-bold mt-2 mb-5`}
                >
                  Delivering Qualified Commercial Cleaning Appointments
                </h1>
                <div className="mt-6 space-y-6">
                  <Progress
                    id="client"
                    percent={90}
                    title="Client Retention Rate"
                  />
                  <Progress
                    id="Revenue"
                    percent={92}
                    title="Average Revenue Increase"
                  />
                  <Progress
                    id="Partnerships"
                    percent={88}
                    title="Successful Partnerships"
                  />
                  <Progress
                    id="Contract"
                    percent={88}
                    title="Faster Contract Acquisition"
                  />
                </div>
                <Link href={'/about'}>
                  <PrimaryBtn
                    text="Read More"
                    containerClass="rounded-md mt-8"
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
                alt="states"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
