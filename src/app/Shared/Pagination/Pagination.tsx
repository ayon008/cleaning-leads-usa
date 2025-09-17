"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center justify-center gap-1">
      {currentPage > 1 && (
        <button
          onClick={() => changePage(currentPage - 1)}
          type="button"
          className="px-3 cursor-pointer shadow-xl py-1 flex items-center justify-center bg-secondary text-white font-semibold"
        >
          <span>{"<<"}</span>
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          type="button"
          className={`px-3 cursor-pointer shadow-xl py-1 flex items-center justify-center font-semibold ${
            currentPage === i + 1
              ? "bg-primary text-black border-2 border-secondary"
              : "bg-secondary text-white"
          }`}
          key={i}
          onClick={() => changePage(i + 1)}
        >
          <span>{i + 1}</span>
        </button>
      ))}
      <button
        type="button"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 cursor-pointer shadow-xl py-1 flex items-center justify-center bg-secondary text-white font-semibold"
      >
        <span>{">>"}</span>
      </button>
    </div>
  );
};

export default Pagination;
