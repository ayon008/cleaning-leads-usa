import React from "react";
import Hero from "../Shared/Banner/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Cleaning Leads USA - Join Our Team",
  description: "Explore career opportunities at Cleaning Leads USA. Join our team helping commercial cleaning businesses grow through verified leads and appointment-setting services. See current openings and learn about our culture.",
  keywords: ["cleaning leads careers", "janitorial jobs", "sales jobs cleaning leads", "customer support cleaning leads"],
  openGraph: {
    title: "Careers at Cleaning Leads USA - Join Our Team",
    description: "Explore career opportunities at Cleaning Leads USA. Learn about roles in sales, operations, and customer support that help grow commercial cleaning businesses.",
    url: "/career",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Careers at Cleaning Leads USA - Join Our Team",
    description: "Explore career opportunities at Cleaning Leads USA. Learn about roles in sales, operations, and customer support.",
  },
};

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
