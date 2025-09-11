import React from "react";
import Hero from "../Shared/Banner/Hero";

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
    </section>
  );
};

export default page;
