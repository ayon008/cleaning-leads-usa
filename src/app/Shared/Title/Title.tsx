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
      <h1 className={`md:text-4xl text-2xl sm:text-3xl mb-6 font-bold text-secondary`}>
        {headline}
      </h1>
      <p className="font-medium md:text-sm text-xs text-gray-500">{subHeading}</p>
    </div>
  );
};

export default Title;
