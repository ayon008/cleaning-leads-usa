"use client";
import React from "react";
import Title from "../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import image from "../../../../public/service-n-01-600x400.jpg";
import { barlow } from "@/app/fonts/Fonts";
// import image2 from "../../../../public/service-n-02-600x400.jpg";
import image3 from "../../../../public/service-n-03-600x400.jpg";
import image5 from "../../../../public/service-n-04-600x400.jpg";
import image4 from "../../../../public/team-nocoloco-w9jKH8ZnF7A-unsplash.jpg";

const Card = ({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) => {
  return (
    <div className="rounded-lg bg-white h-[520px]">
      <div className="w-full h-[240px] overflow-hidden relative rounded-t-lg">
        <Image src={image} fill alt="" className="object-cover" />
      </div>
      <div className="p-8">
        <h2
          className={`text-black text-3xl font-bold hover:text-secondary duration-200 transition-all ${barlow.className}`}
        >
          {title}
        </h2>
        <hr className="text-gray-300 my-6" />
        <p className="text-gray-400">{text}</p>
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
          subHeading="CleaningLeadsUSA connects cleaning companies with commercial centers, hospitals, schools, and offices across the United States. Register now for exclusive access to high-quality janitorial leads and professional appointment-setting services."
          headline="Need Quality Commercial Cleaning Leads?"
        />
        <div className="mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            speed={1000}
            className="expertise relative"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <Card
                image={image}
                title="Quality Standard"
                text="Our double verification process ensures you receive the most current and accurate commercial cleaning leads tailored to your specific requirements."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={image5}
                title="Proven Lead Generation Strategy"
                text="We deliver high-quality janitorial leads through targeted telemarketing campaigns and strategic social media outreach."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={image3}
                title="Seamless Appointment Management"
                text="Our dedicated team professionally schedules and manages all your janitorial service appointments, so you can focus on cleaning."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={image4}
                title="Professional Website Development"
                text="We build custom, mobile-responsive websites specifically designed for cleaning companies to showcase your services and generate more leads online."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
