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
            Our dedicated team is ready to help you grow your cleaning business
            with qualified leads. <br /> Reach out via phone, email, or our
            contact form and we&apos;ll respond within hours to discuss your needs!
          </>
        }
      />
    </section>
  );
};

export default page;
