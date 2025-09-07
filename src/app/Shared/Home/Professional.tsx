import Image from "next/image";
import React from "react";
import professional_image from "@/../public/52068.jpg";
import { barlow } from "@/app/fonts/Fonts";
import { CheckCircle } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";

const Professional = () => {
  return (
    <section className="" id="">
      <div className="container">
        <div className="flex gap-6">
          <div className="flex-1 -mt-14">
            <div className="rounded-md overflow-hidden w-fit shadow-xl">
              <div className="h-14 bg-secondary flex items-center justify-center">
                <p
                  className={`text-white font-bold tracking-wider text-xl ${barlow.className}`}
                >
                  Nationwide Coverage Available
                </p>
              </div>
              <Image
                src={professional_image}
                width={520}
                height={550}
                alt="Professional janitorial lead generation service"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="pt-10 space-y-6">
              <p className="text-secondary font-semibold">Get Quality</p>
              <h1 className={`${barlow.className} text-6xl font-semibold`}>
                Commercial Cleaning Leads & Janitorial Appointments
              </h1>
              <p className="text-gray-400">
                Stop wasting time on cold calls and door-to-door sales. Our
                proven lead generation system connects you with pre-qualified
                commercial cleaning prospects who are actively looking for
                janitorial services. Get high-converting leads delivered
                directly to your business.
              </p>
              <ul className="professional-ul space-y-2">
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Pre-qualified commercial cleaning prospects ready to buy.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Verified janitorial leads with high conversion rates.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Real-time lead delivery and appointment scheduling.
                  </span>
                </li>
              </ul>
              <PrimaryBtn
                text="Get Leads Now"
                containerClass="rounded-md w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
