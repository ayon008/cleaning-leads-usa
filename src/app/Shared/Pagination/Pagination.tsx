"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params.toString()}`);
  };
  
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          type="button"
          className="px-3 cursor-pointer shadow-xl py-1 flex items-center justify-center bg-secondary text-white font-semibold"
          key={i}
        >
          <span>{i + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
