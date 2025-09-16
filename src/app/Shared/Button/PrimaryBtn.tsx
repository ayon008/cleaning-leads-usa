import React from "react";

const PrimaryBtn = ({
  text,
  containerClass,
}: {
  text: string;
  containerClass?: string;
}) => {
  return (
    <button
      type="button"
      className={`bg-secondary md:text-base text-[10px] text-white md:py-4 py-3 md:px-10 px-4 font-semibold hover:bg-tertiary duration-150 cursor-pointer transition-all ease-in uppercase ${containerClass}`}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
