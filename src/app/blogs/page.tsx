import React from "react";
import Hero from "../Shared/Banner/Hero";

const page = () => {
  return (
    <section id="blog-page">
      <Hero
        title="Read Our Latest Blog"
        headline="Know the hidden knowledge of the Cleaning Industry"
        des={
          <>
            Our blogs are designed to make your journey to success easier
            through the depth of knowledge <br /> in the cleaning industry,
            tips, tricks, and the latest news.
          </>
        }
      />
    </section>
  );
};

export default page;
