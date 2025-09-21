"use client";
import { useSafeGSAP } from "../../lib/gsap-utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

type ProgressProps = {
  percent: number;
  title: string;
  id: string;
  barColor?: string; // customizable color
  bgColor?: string; // customizable background
  height?: string; // bar height
  textClassName?: string; // custom text styles
};

const Progress = ({
  percent,
  title,
  id,
  barColor = "bg-secondary",
  bgColor = "bg-white",
  height = "h-1",
  textClassName = "text-white font-bold text-2xl",
}: ProgressProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useSafeGSAP((context) => {
    const container = containerRef.current;
    const span = spanRef.current;
    const textElement = textRef.current;
    const bar = barRef.current;
    if (!container || !span || !textElement || !bar) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(span, {
      left: `${percent}%`,
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    });

    tl.to(
      bar,
      {
        width: `${percent}%`,
        duration: 1,
        ease: "power2.out",
      },
      0
    );
  }, [id, percent]);

  return (
    <div className="w-full">
      <div className="relative">
        {/* Label + Percent */}
        <div
          ref={containerRef}
          className="flex relative items-center w-full mb-1"
        >
          <h3 ref={textRef} className={`${textClassName} text-lg mb-2`}>
            {title}
          </h3>
          <span
            ref={spanRef}
            className="ml-2 text-white w-fit absolute z-10 top-0 opacity-0"
          >
            {percent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div
          className={`w-full ${height} ${bgColor} rounded-md relative overflow-hidden`}
        >
          <div
            ref={barRef}
            className={`absolute top-0 left-0 bottom-0 w-0 ${barColor} transition-all`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
