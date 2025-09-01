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
      className={`bg-secondary text-white py-4 px-10 font-semibold hover:bg-tertiary duration-150 cursor-pointer transition-all ease-in uppercase ${containerClass}`}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
