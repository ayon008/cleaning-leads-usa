import React from "react";
import Hero from "../Shared/Banner/Hero";
import Image from "next/image";
import image from "../../../public/service-n-01-600x400.jpg";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";

const BlogCard = () => {
  return (
    <div className="space-y-4 border max-w-[345px] w-full">
      <div className="w-[345px] h-[200px] relative">
        <Image src={image} fill alt="" className="object-cover object-top" />
      </div>
      <div className="space-y-4 p-3">
        <h2>Janitorial Appointments for everyone</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          officiis sit reprehenderit! Facilis quisquam consequuntur non illo ex
          tempora voluptas.
        </p>
        <PrimaryBtn containerClass="" text="Read More" />
      </div>
    </div>
  );
};

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
      <div className="container flex flex-wrap items-center justify-center gap-4 py-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default page;
