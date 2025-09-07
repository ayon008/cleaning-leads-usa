import { barlow, poppins } from "@/app/fonts/Fonts";
import { Headphones } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[url('/slider-02-b.jpg')] bg-cover bg-no-repeat bg-center h-dvh max-h-[834px] w-full relative mt-20"
    >
      <div className="container h-full flex items-center justify-between gap-20">
        <div className="">
          <p className="text-secondary font-semibold">Contact Us Today</p>
          <h1
            className={`text-white ${barlow.className} text-5xl font-bold mt-2 mb-5`}
          >
            Let&apos;s Grow Your Cleaning Business
          </h1>
          <p className={`${poppins.className} text-base text-white`}>
            Contact CleaningLeadsUSA now to discover how our proven lead
            generation system can help you secure more commercial cleaning
            contracts and scale your business faster.
          </p>
          <div className="flex items-center gap-10">
            <div
              className="flex items-center gap-2 bg-tertiary mt-6 py-2 px-4 rounded-4xl w-fit"
              id="cta"
            >
              <Headphones className="text-secondary" size={"2rem"} />
              <a href="tel:+12344500123">
                <div>
                  <p className="text-base text-white font-semibold">
                    Phone Number
                  </p>
                  <h2
                    className={`${barlow.className} text-white text-xl font-bold cursor-pointer`}
                  >
                    +1 (234) 450-0123
                  </h2>
                </div>
              </a>
            </div>
            <p className="text-white">Call Now Or</p>
          </div>
        </div>
        <div className="">
          <form className="bg-secondary rounded-md p-8" action="">
            <h3
              className={`${barlow.className} text-center text-white font-semibold text-2xl`}
            >
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
