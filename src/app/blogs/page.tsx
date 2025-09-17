import React from "react";
import Hero from "../Shared/Banner/Hero";
import Image from "next/image";
import image from "../../../public/service-n-01-600x400.jpg";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import { getPosts, WPPost } from "../lib/Wp";
import Link from "next/link";
import moment from "moment";

const BlogCard = ({ data }: { data: WPPost }) => {
  console.log(data, "first");
  // const { date, _links } = data;

  return (
    <div className="border max-w-[345px] w-full rounded-md overflow-hidden">
      <div className="w-[345px] h-[200px] relative">
        <Image
          src={data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
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
            By{" "}
            <strong>{data?._embedded?.author?.[0]?.name || "Unknown"}</strong>
          </small>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">
          {data?.content?.rendered
            ?.replace(/<[^>]+>/g, "") // remove HTML tags
            ?.slice(0, 150)}
          ...
        </p>
        <Link href={`/blogs/${data?.slug}`}>
          <PrimaryBtn containerClass="" text="Read More" />
        </Link>
      </div>
    </div>
  );
};

const page = async () => {
  const posts = await getPosts();
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
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-4 py-20">
        {posts.map((singlePost: WPPost) => {
          const { id } = singlePost;
          return (
            <div key={id}>
              <BlogCard data={singlePost} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
