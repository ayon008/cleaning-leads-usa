"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopButton = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".top-button",
        start: "bottom -120vh",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    t1.to(".top-button", {
      right: 0,
      opacity: 1,
      duration: 0.5,
    });
  });
  return (
    <Link
      type="button"
      href={"#root-layout"}
      className="fixed bottom-20 -right-[100px] opacity-0 bg-secondary p-3 rounded-md z-40 top-button cursor-pointer "
    >
      <ArrowUp className="text-white" />
    </Link>
  );
};

export default TopButton;
