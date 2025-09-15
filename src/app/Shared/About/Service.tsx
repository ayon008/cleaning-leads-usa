import { barlow } from "@/app/fonts/Fonts";
import React from "react";
import Progress from "../Progress/Progress";
import PrimaryBtn from "../Button/PrimaryBtn";

const Stats = () => {
  return (
    <section className="" id="stats">
      <div className="ourDo w-screen h-[120vh] max-h-[734px] -scale-x-100 relative">
        <div className="absolute bg-black inset-0 opacity-70"></div>
        <div className="relative -scale-x-100 z-20">
          <div className="flex gap-x-20 items-stretch container opacity-100">
            <div className="flex-1 overflow-hidden pt-16">
              <div>
                <p className="text-secondary font-semibold">
                  Not just Numbers they are results
                </p>
                <h1
                  className={`text-white ${barlow.className} text-5xl font-bold mt-2 mb-5`}
                >
                  Delivering Qualified Commercial Cleaning Appointments
                </h1>
                <div className="mt-8 space-y-8">
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
                <PrimaryBtn text="Read More" containerClass="rounded-md mt-8" />
              </div>
            </div>
            <div className="flex-1 image-box"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
