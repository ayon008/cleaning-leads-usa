import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Card } from "../Shared/Home/Expertise";
import Contact from "../Shared/Home/Contact";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";

const page = () => {
  return (
    <section id="services">
      <Hero
        title="Our Services"
        headline="Let Our Experts Handle Your Prospect Communications"
        des={
          <>
            Founded as a B2B lead generation company, CleaningLeadsUSA is
            committed to <br /> helping cleaning businesses across the U.S. grow
            through high-quality, nurtured leads that <br /> drive real results.
          </>
        }
      />
      <div className="container pt-10">
        <Title
          containerClass="text-center"
          headline="Our Commitment to Your Growth"
          subHeading="Focus on delivering exceptional cleaning services—let us handle lead generation and appointments."
        />
        <div className="mt-10 flex items-stretch justify-center flex-wrap md:gap-10 md:flex-row flex-col gap-6">
          <Card
            title="Pay Per Appointments"
            text="Only pay for confirmed meetings with serious prospects ready to hire, saving time and boosting sales."
          />
          <Card
            title="Digital Marketing Services"
            text="Increase your visibility and attract more clients with targeted campaigns, SEO, and social media marketing."
          />
          <Card
            title="Web Development Service"
            text="Get a professional, conversion-focused website designed to showcase your cleaning business and generate leads."
          />
        </div>
        <div className="my-20">
          <Title
            containerClass="text-center"
            subHeading="At CleaningLeadsUSA, we help you win more business by setting up qualified appointments with decision-makers while you focus on delivering great service. Beyond appointment setting, we also grow your online presence with targeted digital marketing to keep new clients coming in."
            headline="Guaranteed Cleaning Appointments"
          />
          <div className="mt-6">
            <Title
              containerClass="text-center"
              headline="Why will you choose us"
              subHeading=""
            />
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <Card
                title="Specialized Leads"
                text="We deliver targeted leads tailored to your services—whether it’s disinfecting, deep cleaning, office cleaning, or any other cleaning job. CleaningLeadsUSA makes sure you reach the right clients every time."
              />
              <Card
                title="Leads That Convert"
                text="Our experienced team qualifies every cleaning lead with precise criteria, ensuring they’re genuine and ready to hire. This results in higher conversion rates compared to general, unfiltered leads."
              />
              <Card
                title="Twice-Verified"
                text="Our janitorial leads are double-checked for quality. After initial screening, we call each prospect to confirm their interest, ensuring you get only genuinely qualified leads."
              />
              <Card
                title="Pay Only for Success"
                text="You only pay for appointments that are successfully attended. If an appointment falls through, we either provide a refund or connect you with another qualified client, ensuring zero wasted spend."
              />
            </div>
          </div>
          <div className="mt-20 flex items-center py-6 rounded-md justify-between bg-amber-300 px-10">
            <div>
              <h1 className="text-3xl font-semibold">
                Get your first appointment just at $99
              </h1>
              <p className="text-base mt-4">
                Would you like to speak with our operations manager directly?
              </p>
            </div>
            <PrimaryBtn text="Call Now" containerClass="" />
          </div>
        </div>
      </div>
      <Contact />
      <div className="bg-sky-100/60 w-full py-10">
        <Title
          containerClass="text-center"
          headline="Complete Marketing Solutions for Janitorial Services"
          subHeading=""
        />
      </div>
    </section>
  );
};

export default page;
