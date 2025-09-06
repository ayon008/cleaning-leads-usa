import { barlow, poppins } from "@/app/fonts/Fonts";
import React from "react";
import Progress from "../Progress/Progress";
import PrimaryBtn from "../Button/PrimaryBtn";

const OurDo = () => {
  return (
    <section className="bg-primary pt-40">
      <div className="ourDo w-screen h-dvh max-h-[734px] -scale-x-100 relative">
        <div className="absolute bg-black inset-0 opacity-70"></div>
        <div className="relative -scale-x-100 z-20">
          <div className="flex gap-x-20 items-stretch container opacity-100">
            <div className="flex-1 overflow-hidden pt-16">
              <div>
                <p className="text-secondary font-semibold">WHAT WE DO</p>
                <h1
                  className={`text-white ${barlow.className} text-5xl font-bold mt-2 mb-5`}
                >
                  Customer Care That Cares
                </h1>
                <p className={`${poppins.className} text-base text-white`}>
                  Financial solution for business gives you the best
                  wide-ranging experience to determining the strategies clients
                  achieve
                </p>
                <div className="mt-8 space-y-8">
                  <Progress
                    id="customer"
                    percent={90}
                    title="Customer Service"
                  />
                  <Progress
                    id="sales"
                    percent={85}
                    title="Sales / Lead Generation"
                  />
                  <Progress id="Contracts" percent={30} title="Contracts" />
                </div>
                <PrimaryBtn text="Read More" containerClass="rounded-md mt-8" />
              </div>
            </div>
            <div className="flex-1 image-box">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDo;
