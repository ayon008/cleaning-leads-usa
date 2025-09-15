import { Headphones } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[url('/professional-cleaning-services-clip.jpg')] bg-cover bg-no-repeat h-dvh max-h-[834px] w-full mt-20 relative"
    >
      <div className="inset-0 absolute bg-tertiary opacity-80 z-10"></div>
      <div className="container h-full flex items-center justify-between gap-20 relative z-20">
        <div className="">
          <p className="text-secondary font-semibold text-base">
            Contact Us Today
          </p>
          <h1 className={`text-white text-4xl font-bold mt-2 mb-5`}>
            Let&apos;s Grow Your Cleaning Business
          </h1>
          <p className={`text-base text-white`}>
            To find out how our tried-and-true lead generation system can help
            you land more commercial cleaning jobs and grow your company more
            quickly, get in touch with CleaningLeadsUSA right now.
          </p>
          <div className="flex items-center gap-10">
            <a
              href="tel:+12344500123"
              aria-label="Call Cleaning Leads USA at +1 (234) 450-0123"
              title="Call Cleaning Leads USA"
              className="flex items-center gap-2 bg-secondary py-3 px-4 rounded-4xl w-fit mt-6"
              id="cta"
            >
              <Headphones className="text-white" size="2rem" />
              <div>
                <p className="text-sm text-white font-semibold">Phone Number</p>
                <p className="text-white text-base font-bold cursor-pointer">
                  +1 (234) 450-0123
                </p>
              </div>
            </a>
            <p className="text-white">Call Now Or</p>
          </div>
        </div>
        <div className="">
          <form className="bg-secondary rounded-md p-8" action="">
            <h3 className={`text-center text-white font-medium text-xl`}>
              Request a Call Back
            </h3>
            <div className="space-y-6 mt-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-white p-3 rounded-md"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-white p-3 rounded-md"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-white p-3 rounded-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                id=""
                className="px-3 py-5 w-full bg-white resize-none rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-tertiary text-white hover:bg-white hover:text-tertiary duration-200 transition-all ease-linear rounded-md text-base py-4 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
