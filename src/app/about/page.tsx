import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import Testimonial from "../Shared/Home/Testimonial";
import Stats from "../Shared/About/Service";

const page = () => {
  return (
    <section id="about">
      <Hero
        title="About CleaningLeadsUSA"
        headline="Driving Success in the Commercial Cleaning Industry"
        des={
          <>
            CleaningLeadsUSA has established itself as the premier lead
            generation service, specializing <br /> in delivering high-quality
            commercial cleaning leads, appointment setting,
            <br /> and business growth solutions for janitorial companies across
            the United States.
          </>
        }
      />
      <div className="container py-20">
        <Title
          containerClass="text-center"
          headline="A Few Things We're Excited to Share"
          subHeading="These are the moments that remind us why we love helping cleaning businesses grow"
        />
        <div className="my-10 flex items-stretch justify-between gap-10">
          <div className="bg-primary p-8 rounded-md flex-1 h-[180px]">
            <p className="mb-4 text-center text-base">
              Appointment Generated Per Months
            </p>
            <h3 className="text-5xl text-center">1000+</h3>
          </div>
          <div className="bg-primary p-8 rounded-md flex-1 h-[180px]">
            <p className="mb-4 text-center text-base">
              Appointment-to-Contract Conversion Per Months
            </p>
            <h3 className="text-5xl text-center">875+</h3>
          </div>
          <div className="bg-primary p-8 rounded-md flex-1 h-[180px] flex justify-center items-center">
            <div>
              <p className="mb-4 text-center text-base">
                Janitorial Companies work with us
              </p>
              <h3 className="text-5xl text-center">34+</h3>
            </div>
          </div>
        </div>
        <Testimonial />
        <div className="lg:w-[60%] ml-auto md:w-[75%] w-full my-10 space-y-5">
          <h1 className="text-3xl font-semibold leading-10">
            We Deliver Qualified Janitorial Appointments That Convert Every
            Time!
          </h1>
          <p>
            CleanLeadsUSA is USA&apos;s premier commercial cleaning lead generation
            company specializing in qualified janitorial appointments. We
            connect commercial cleaning contractors directly with verified
            decision-makers actively seeking new janitorial services for their
            office buildings, medical facilities, and commercial properties.
          </p>
          <p>Our proven appointment setting system delivers:</p>
          <ul className="ml-10 list-disc space-y-2">
            <li>
              <strong>Qualified prospects</strong> ready to hire new cleaning
              companies
            </li>
            <li>
              <strong>Verified contact information</strong> for facility
              managers and building owners
            </li>
            <li>
              <strong>Pre-screened opportunities</strong> that match your
              service capabilities
            </li>
            <li>
              <strong>Consistent pipeline</strong> of commercial cleaning
              contracts year-round
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">
            Call us today to discuss your commercial cleaning lead generation
            needs.
          </h2>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
