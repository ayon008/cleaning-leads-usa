import React from "react";
import Hero from "../Shared/Banner/Hero";

const page = () => {
  return (
    <section id="web-development-service" aria-labelledby="web-dev-heading">
      <Hero
        title="Web Development Services"
        headline="Custom Websites That Drive Results"
        des={
          <>
            Build a professional, fast, and SEO-optimized website tailored to
            your business needs. <br /> Our expert developers create responsive,
            user-friendly sites designed to improve <br /> your online presence
            and grow your brand.
          </>
        }
      />
      <div className="container md:py-20 py-10">
        
      </div>
    </section>
  );
};

export default page;
