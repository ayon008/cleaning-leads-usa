import { barlow } from "@/app/fonts/Fonts";
import React from "react";

const Title = ({
  containerClass,
  headline,
  subHeading,
}: {
  containerClass: string;
  headline: string;
  subHeading: string;
}) => {
  return (
    <div className={`${containerClass}`}>
      <p className="text-secondary font-semibold">{subHeading}</p>
      <h1 className={`${barlow.className} text-6xl mt-1 font-semibold`}>{headline}</h1>
    </div>
  );
};

export default Title;
