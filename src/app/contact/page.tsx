import React from "react";
import Hero from "../Shared/Banner/Hero";

const page = () => {
  return (
    <section id="contact">
      <Hero
        title="Contact Us Today"
        headline="Connect with Our Lead Generation Experts"
        des={
          <>
            With qualified leads, our team is prepared to assist you in
            expanding your <br /> cleaning business. We will get back to you
            within hours <br /> if you contact us by phone, email, or our form!
          </>
        }
      />
      <div className="bg-primary">
        <div className="py-20 container flex items-center justify-between">
          <div className="md:w-1/2 w-full">Ayon</div>
          <div className="md:w-1/2 w-full">
            <form className="bg-secondary rounded-md p-6" action="">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-white p-3 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Business Email"
                  className="w-full bg-white p-3 rounded-md"
                />
                <input
                  type="text"
                  name="phone number"
                  placeholder="Phone Number"
                  className="w-full bg-white p-3 rounded-md"
                />
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name"
                  className="w-full bg-white p-3 rounded-md"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Company Address"
                  className="w-full bg-white p-3 rounded-md"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="Service Zip"
                  className="w-full bg-white p-3 rounded-md"
                />
                <input
                  type="text"
                  name="radius"
                  placeholder="Service Radius"
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
      </div>
    </section>
  );
};

export default page;
