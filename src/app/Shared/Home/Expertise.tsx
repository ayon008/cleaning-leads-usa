import React from "react";
import Title from "../Title/Title";
import { barlow } from "@/app/fonts/Fonts";

const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="rounded-lg bg-primary flex-1">
      <div className="p-6">
        <h2
          className={`text-black text-2xl font-bold hover:text-secondary duration-200 transition-all text-center ${barlow.className}`}
        >
          {title}
        </h2>
        <hr className="text-gray-300 my-3" />
        <p className="text-gray-700 text-base tracking-wider text-center">{text}</p>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="pt-24">
      <div className="container">
        <Title
          containerClass="text-center"
          subHeading="CleaningLeadsUSA links cleaning businesses with offices, schools, hospitals, and commercial facilities across the US. To gain exclusive access to premium janitorial leads and expert appointment-setting services, register right away."
          headline="Do You Need High-Quality Leads for Commercial Cleaning?"
        />
        <div className="mt-10 flex items-stretch justify-center flex-wrap gap-20">
          <Card
            title="Quality Standards for Leads"
            text="You will receive the most up-to-date and precise commercial cleaning leads that are customized to meet your unique needs thanks to our double verification process."
          />
          <Card
            title="A Proven Method for Creating Leads"
            text="Through strategic social media outreach and focused telemarketing campaigns, we provide high-quality janitorial leads."
          />
          <Card
            title="Streamlined Management of Appointments"
            text="All of your janitorial service appointments are expertly scheduled and managed by our committed staff, allowing you to concentrate on cleaning."
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
