import Image from "next/image";
import React from "react";
import professional_image from "@/../public/cleaning-business-professionals.jpg";
import { CheckCircle } from "lucide-react";
import PrimaryBtn from "../Button/PrimaryBtn";
import Link from "next/link";

const Professional = () => {
  return (
    <section className="" id="expertise">
      <div className="container">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="flex-1 -mt-14">
            <div className="rounded-md overflow-hidden w-fit shadow-xl">
              <div className="h-14 bg-secondary flex items-center justify-center">
                <p className={`text-white font-bold text-base `}>
                  Nationwide Coverage Available
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
              <p className="text-secondary font-semibold">Get Quality</p>
              <h1 className={`md:text-4xl text-3xl font-semibold`}>
                Commercial Cleaning Leads & Janitorial Appointments
              </h1>
              <p className="text-gray-600 md:text-base text-sm">
                Give up wasting time on door-to-door sales and cold calling.
                With the help of our tested lead generation system, you can get
                in touch with pre-screened commercial cleaning prospects who are
                actively searching for cleaning services. Receive
                high-converting leads sent straight to your company.
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
                    High conversion rates for verified janitorial leads.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Lead delivery and appointment scheduling in real time.
                  </span>
                </li>
              </ul>
              <Link href={'/contact'}>
                <PrimaryBtn
                  text="Get Leads Now"
                  containerClass="rounded-md w-fit"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
