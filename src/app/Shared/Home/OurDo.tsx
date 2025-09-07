import { barlow, poppins } from "@/app/fonts/Fonts";
import React from "react";
import Progress from "../Progress/Progress";
import PrimaryBtn from "../Button/PrimaryBtn";

const OurDo = () => {
  return (
    <section className="bg-primary pt-40">
      <div className="ourDo w-screen h-[120vh] max-h-[734px] -scale-x-100 relative">
        <div className="absolute bg-black inset-0 opacity-70"></div>
        <div className="relative -scale-x-100 z-20">
          <div className="flex gap-x-20 items-stretch container opacity-100">
            <div className="flex-1 overflow-hidden pt-16">
              <div>
                <p className="text-secondary font-semibold">WHAT WE DO</p>
                <h1
                  className={`text-white ${barlow.className} text-5xl font-bold mt-2 mb-5`}
                >
                  Complete Cleaning Business Solutions
                </h1>
                <p className={`${poppins.className} text-base text-white`}>
                  CleaningLeadsUSA provides comprehensive business growth
                  solutions for cleaning companies, from qualified lead
                  generation to professional websites and digital marketing
                  strategies that drive results.
                </p>
                <div className="mt-8 space-y-8">
                   <Progress
                    id="leads"
                    percent={90}
                    title="Lead Generation & Qualification"
                  />
                  <Progress
                    id="appointments"
                    percent={92}
                    title="Appointment Setting & Management"
                  />
                  <Progress 
                    id="digital" 
                    percent={88} 
                    title="Website & Digital Marketing" 
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

export default OurDo;
