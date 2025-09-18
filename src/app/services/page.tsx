import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { Card } from "../Shared/Home/Expertise";

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
      <div className="container py-10">
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
        </div>
      </div>
    </section>
  );
};

export default page;
