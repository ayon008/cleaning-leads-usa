import { Headphones } from "lucide-react";
import React from "react";
import HomeForm from "../form/HomeForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[url('/commercial-cleaning-professionals.jpg')] bg-cover bg-no-repeat md:h-[130vh] md:max-h-[834px] w-full md:mt-20 mt-10 relative md:py-0 py-10"
    >
      <div className="inset-0 absolute bg-tertiary opacity-80 z-10"></div>
      <div className="container h-full flex md:flex-row flex-col items-center justify-between md:gap-20 gap-10 relative z-20">
        <div className="md:w-1/2 w-full">
          <p className="text-secondary font-semibold md:text-base text-sm">
            Contact Us Today
          </p>
          <h1 className={`text-white md:text-4xl text-3xl font-bold mt-2 mb-5`}>
            Let&apos;s Grow Your Cleaning Business
          </h1>
          <p className={`md:text-sm text-xs text-white`}>
            To find out how our tried-and-true lead generation system can help
            you land more commercial cleaning jobs and grow your company more
            quickly, get in touch with CleaningLeadsUSA right now.
          </p>
          <div className="flex items-center gap-10">
            <a
              href="tel:+13326004766"
              aria-label="Call Cleaning Leads USA at +1 (332) 600-4766"
              title="Call Cleaning Leads USA"
              className="flex items-center gap-2 bg-secondary py-3 px-4 rounded-4xl w-fit mt-6"
              id="cta"
            >
              <Headphones className="text-white" size="2rem" />
              <div>
                <p className="text-sm text-white font-semibold">Phone Number</p>
                <p className="text-white text-base font-bold cursor-pointer">
                  +1 (332) 600-4766
                </p>
              </div>
            </a>
            <p className="text-white">Call Now Or</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <HomeForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
