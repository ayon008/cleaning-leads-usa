import React from "react";

const Title = ({
  containerClass,
  headline,
  subHeading,
  headlineId,
  subHeadingId,
}: {
  containerClass: string;
  headline: string;
  subHeading: string;
  headlineId?: string;
  subHeadingId?: string;
}) => {
  return (
    <div className={`${containerClass}`} itemScope itemType="http://schema.org/CreativeWork">
      <h2 id={headlineId} itemProp="headline" className={`md:text-4xl text-2xl sm:text-3xl mb-6 font-bold text-secondary`}>
        {headline}
      </h2>
      <p id={subHeadingId} itemProp="description" className="font-medium md:text-sm text-xs text-gray-500">{subHeading}</p>
    </div>
  );
};

export default Title;
