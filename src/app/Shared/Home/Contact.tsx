import { Headphones } from "lucide-react";
import React from "react";
import HomeForm from "../form/HomeForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[url('/commercial-cleaning-professionals.jpg')] bg-cover bg-no-repeat md:h-[130vh] md:max-h-[834px] w-full md:mt-20 mt-10 relative md:py-0 py-10"
      role="region"
      aria-labelledby="contact-headline"
      aria-describedby="contact-desc"
      itemScope
      itemType="http://schema.org/ContactPage"
    >
      <div className="inset-0 absolute bg-tertiary opacity-80 z-10" aria-hidden="true"></div>
      <div className="container h-full flex md:flex-row flex-col items-center justify-between md:gap-20 gap-10 relative z-20" itemScope itemType="http://schema.org/Organization">
        <div className="md:w-1/2 w-full">
          <p className="text-secondary font-semibold md:text-base text-sm">Contact Us Today</p>
          <h2 id="contact-headline" className={`text-white md:text-4xl text-3xl font-bold mt-2 mb-5`} itemProp="headline">
            Let&apos;s Grow Your Cleaning Business
          </h2>
          <p id="contact-desc" className={`md:text-sm text-xs text-white`} itemProp="description">
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
              itemProp="contactPoint"
              itemScope
              itemType="http://schema.org/ContactPoint"
            >
              <Headphones className="text-white" size="2rem" aria-hidden="true" />
              <div>
                <p className="text-sm text-white font-semibold">Phone Number</p>
                <p className="text-white text-base font-bold cursor-pointer" itemProp="telephone">
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
