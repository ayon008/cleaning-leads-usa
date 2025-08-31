import Image from "next/image";
import React from "react";
import professional_image from "@/../public/img-02-pqdux4fpkzdwtwa2kl3iel4e21mxbmmt1xxgvifrlo.jpg";
import { barlow } from "@/app/fonts/Fonts";
import { CheckCircle } from "lucide-react";

const Professional = () => {
  return (
    <section className="" id="">
      <div className="container">
        <div className="flex items-stretch gap-6">
          <div className="flex-1 -mt-14">
            <div className="rounded-md overflow-hidden w-fit">
              <div className="h-14 bg-secondary flex items-center justify-center">
                <p
                  className={`text-white font-bold tracking-wider text-xl ${barlow.className}`}
                >
                  World wide 200+ countries
                </p>
              </div>
              <Image src={professional_image} width={520} height={550} alt="" />
            </div>
          </div>
          <div className="flex-1">
            <div className="py-10 h-full flex flex-col justify-between">
              <p className="text-secondary font-semibold">There are Many</p>
              <h1 className={`${barlow.className} text-6xl font-semibold`}>
                Professional Call Center Support Services
              </h1>
              <p className="text-gray-400">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
              <ul className="professional-ul space-y-2">
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Trusted by customers across the world.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Quality Services and 100% Secure.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="text-secondary" />
                  <span className="text-black hover:text-secondary font-semibold text-base cursor-pointer duration-150 transition-all ease-linear">
                    Reports and Analytics.
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="bg-secondary w-fit px-6 rounded-md py-2 text-white"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
