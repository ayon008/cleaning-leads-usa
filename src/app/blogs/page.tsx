/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Hero from "../Shared/Banner/Hero";
import Image from "next/image";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Link from "next/link";
import moment from "moment";
import Pagination from "../Shared/Pagination/Pagination";
import { SearchProps } from "../page";
import { WP_API_URL } from "../lib/Wp";
import placeholderImage from "@/../public/istockphoto-1980276924-612x612.jpg"

export async function getPosts(page = 1, perPage = 12) {
  const res = await fetch(
    `${WP_API_URL}/posts?_embed&per_page=${perPage}&page=${page}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages"));
  return { posts, totalPages };
}

export const BlogCard = ({ data }: { data: any }) => {
  const { date } = data;
  const imageData =
    data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || placeholderImage;
  return (
    <div className="border max-w-[345px] mx-auto w-full rounded-md overflow-hidden">
      <div className="w-[345px] h-[200px] relative">
        <Image
          src={imageData}
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>
      <div className="space-y-2 p-2">
        <h2 className="text-lg font-medium">{data?.title?.rendered}</h2>
        <div className="flex items-center gap-4">
          <small>{moment(date).format("MMMM Do YYYY")}</small>
          <small>
            By <strong>{data?._embedded?.author?.[0]?.name || null}</strong>
          </small>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">
          {data?.content?.rendered
            ?.replace(/<[^>]+>/g, "") // remove HTML tags
            ?.slice(0, 150)}
          ...
        </p>
        <div>
          <Link href={`/blogs/${data?.slug}`}>
            <PrimaryBtn containerClass="" text="Read More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const page = async ({ searchParams }: SearchProps) => {
  const { page } = await searchParams;
  const currentPage = parseInt(page ?? "1", 10);

  const { posts, totalPages } = await getPosts(currentPage, 12);
  return (
    <section id="blog-page">
      <Hero
        title="Read Our Latest Blog"
        headline="Know the hidden knowledge of the Cleaning Industry"
        des={
          <>
            Our blogs are designed to make your journey to success easier
            through the depth of knowledge <br /> in the cleaning industry,
            tips, tricks, and the latest news.
          </>
        }
      />
      <div className="container grid md:grid-cols-3 grid-cols-1 items-stretch gap-4 py-10">
        {posts.map((singlePost: any) => {
          const { id } = singlePost;
          return <BlogCard key={id} data={singlePost} />;
        })}
      </div>
      <div className="mb-10">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </section>
  );
};

export default page;
