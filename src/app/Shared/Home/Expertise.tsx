"use client";
import React from "react";
import Title from "../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import image from "../../../../public/service-n-01-600x400.jpg";
import { barlow } from "@/app/fonts/Fonts";

const Card = () => {
  return (
    <div className="rounded-lg bg-white">
      <div className="w-full h-[240px] overflow-hidden relative rounded-t-lg">
        <Image src={image} fill alt="" className="object-cover" />
      </div>
      <div className="p-8">
        <p className="text-secondary font-semibold text-sm">Live Chat</p>
        <h2
          className={`text-black text-4xl font-bold hover:text-secondary duration-200 transition-all ${barlow.className}`}
        >
          IT Services
        </h2>
        <hr className="text-gray-300 my-6" />
        <p className="text-gray-400">
          It is a long established fact that a reader will be distracted by the
          readable content{" "}
        </p>
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
          subHeading="Our Expertise"
          headline="Call Center & Strategic Consulting"
        />
        <div className="mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            speed={1000}
            slidesPerGroup={3}
            className="expertise relative"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
