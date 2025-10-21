"use client"
import React from "react";

const EmailSubscription = () => {
  return (
    <form action="">
      <input
        type="email"
        className="bg-white w-full p-4 text-black rounded-md"
        placeholder="example@domain.com"
      />
      <button
        type="submit"
        className="bg-secondary text-lg cursor-pointer hover:bg-tertiary transition-all duration-300 text-white mt-4 rounded-md py-4 px-8"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailSubscription;
