"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";
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

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    // smooth scroll to top; does NOT change URL hash
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 -right-[100px] opacity-0 bg-secondary p-3 rounded-md z-40 top-button cursor-pointer w-fit"
    >
      <ArrowUp className="text-white" />
    </button>
  );
};

export default TopButton;
