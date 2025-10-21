import React from "react";

const PrimaryBtn = ({
  text,
  containerClass,
  ariaLabel,
}: {
  text: string;
  containerClass?: string;
  ariaLabel?: string;
}) => {
  const a11yLabel = ariaLabel || text;
  return (
    <button
      type="button"
      title={a11yLabel}
      aria-label={a11yLabel}
      className={`bg-secondary md:text-base text-[10px] text-white md:py-4 py-3 md:px-10 px-4 font-semibold hover:bg-tertiary duration-150 cursor-pointer transition-all ease-in uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${containerClass}`}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
