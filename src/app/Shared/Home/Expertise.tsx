import React from "react";
import Title from "../Title/Title";

export const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <article className="rounded-lg bg-primary flex-1">
      <div className="p-6">
        <h3
          className={`text-black text-xl font-bold hover:text-secondary duration-200 transition-all text-center`}
        >
          {title}
        </h3>
        <hr className="text-gray-300 my-3" aria-hidden="true" />
        <p className="text-gray-700 text-base tracking-wider text-center">
          {text}
        </p>
      </div>
    </article>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="md:pt-24 pt-16" role="region" aria-labelledby="expertise-headline" aria-describedby="expertise-sub">
      <div className="container">
        <header className="text-center" id="expertise-hero">
          <Title
            containerClass=""
            subHeading="CleaningLeadsUSA connects cleaning companies with commercial buildings, schools, hospitals, and offices throughout the United States. Contact Us now to receive special access to high-quality janitorial leads and professional appointment-setting services."
            headline="Do You Need High-Quality Leads for Commercial Cleaning?"
            headlineId="expertise-headline"
            subHeadingId="expertise-sub"
          />
        </header>
        <div className="md:mt-20 mt-10 flex items-stretch justify-center flex-wrap md:gap-10 md:flex-row flex-col gap-6" aria-labelledby="expertise-headline" aria-describedby="expertise-sub">
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
