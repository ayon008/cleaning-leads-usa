import React from "react";
import Hero from "../Shared/Banner/Hero";

const Page = () => {
  return (
    <section id="career">
      <Hero
        title="Careers at Cleaning Leads USA"
        headline="Join Our Growing Team"
        des={
          <>
            Explore exciting career opportunities with{" "}
            <strong>Cleaning Leads USA</strong>. We’re always looking for
            motivated individuals to help us connect cleaning businesses with
            verified leads. Grow your career with us and be part of a
            supportive, innovative team.
          </>
        }
      />
      <div className="py-20 container">
        <h2 className="text-3xl text-secondary font-semibold">No vacancy right now </h2>
      </div>
    </section>
  );
};

export default Page;
