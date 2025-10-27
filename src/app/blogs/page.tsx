/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Hero from "../Shared/Banner/Hero";
import Image from "next/image";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import Link from "next/link";
import moment from "moment";
import Pagination from "../Shared/Pagination/Pagination";
import { SearchProps } from "../page";
import placeholderImage from "@/../public/blog-placeholder-image.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Industry Blog - Tips, News & Business Growth",
  description:
    "Read our latest blog posts about the cleaning industry, janitorial business growth, commercial cleaning tips, and industry news. Expert insights to help your cleaning business succeed.",
  keywords: [
    "cleaning industry blog",
    "janitorial business tips",
    "commercial cleaning news",
    "cleaning business growth",
    "facility management blog",
    "cleaning industry insights",
    "janitorial services blog",
    "cleaning contractor advice",
  ],
  openGraph: {
    title: "Cleaning Industry Blog - Tips, News & Business Growth",
    description:
      "Read our latest blog posts about the cleaning industry, janitorial business growth, commercial cleaning tips, and industry news. Expert insights to help your cleaning business succeed.",
    url: "http://localhost:3000/blogs",
    type: "website",
    images: [
      {
        url: "/janitorial-leads-hero-banner.jpg ",
        width: 1200,
        height: 630,
        alt: "Cleaning Leads USA Blog - Industry Tips & News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Industry Blog - Tips, News & Business Growth",
    description:
      "Read our latest blog posts about the cleaning industry, janitorial business growth, commercial cleaning tips, and industry news.",
    images: ["/janitorial-leads-hero-banner.jpg "],
  },
  alternates: {
    canonical: "http://localhost:3000/blogs",
  },
};

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

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
    <article
      className="border max-w-[345px] mx-auto w-full rounded-md overflow-hidden"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-[345px] h-[200px] relative">
        <Image
          src={imageData}
          fill
          alt={data?.title?.rendered || "Blog image"}
          className="object-cover object-top"
          itemProp="image"
        />
      </div>
      <div className="space-y-2 p-2 flex-col flex justify-between h-[260px]">
        <h2 className="text-lg font-medium" itemProp="headline">
          {data?.title?.rendered}
        </h2>
        <div className="flex items-center gap-4">
          <small itemProp="datePublished">
            {moment(date).format("MMMM Do YYYY")}
          </small>
          <small>
            By{" "}
            <strong itemProp="author">
              {data?._embedded?.author?.[0]?.name || null}
            </strong>
          </small>
        </div>
        <p
          className="text-sm text-gray-600 line-clamp-3"
          itemProp="articleBody"
        >
          {data?.content?.rendered
            ?.replace(/<[^>]+>/g, "") // remove HTML tags
            ?.slice(0, 150)}
          ...
        </p>
        <div className="">
          <Link
            href={`/blogs/${data?.slug}`}
            title={`Read more: ${data?.title?.rendered}`}
            itemProp="url"
          >
            <PrimaryBtn containerClass="" text="Read More" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = async ({ searchParams }: SearchProps) => {
  const { page } = await searchParams;
  const currentPage = parseInt(page ?? "1", 10);

  const { posts, totalPages } = await getPosts(currentPage, 12);
  return (
    <section
      id="blog-page"
      role="region"
      aria-labelledby="blog-hero-title"
      aria-describedby="blog-hero-desc"
      itemScope
      itemType="http://schema.org/WebPage"
    >
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
