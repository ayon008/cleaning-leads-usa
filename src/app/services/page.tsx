import React from "react";
import Hero from "../Shared/Banner/Hero";

const page = () => {
  return (
    <section id="services">
      <Hero
        title="Professional Appointment Setting & Scheduling"
        headline="Let Our Experts Handle Your Prospect Communications"
        des={
          <>
            Our experienced team manages all prospect outreach and schedules
            qualified meetings with decision-makers. <br /> We handle follow-ups
            and coordinate site visits, ensuring you meet with serious prospects
            ready to hire cleaning services.
          </>
        }
      />
    </section>
  );
};

export default page;
