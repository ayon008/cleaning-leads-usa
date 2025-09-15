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
      <h1 className={`text-5xl mb-6 font-bold text-secondary`}>
        {headline}
      </h1>
      <p className="font-medium text-base text-gray-500">{subHeading}</p>
    </div>
  );
};

export default Title;
