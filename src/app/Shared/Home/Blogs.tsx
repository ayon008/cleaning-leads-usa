/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Title from "../Title/Title";
import Pagination from "../Pagination/Pagination";
import { BlogCard, getPosts } from "@/app/blogs/page";

const Blogs = async ({ page }: { page: number }) => {
  const { posts: blogPost, totalPages } = await getPosts(page, 3);
  return (
    <section id="blogs" className="mb-10">
      <div className="container">
        <Title
          containerClass="text-center"
          headline="Latest From Our Blog"
          subHeading="Read through our expert blog posts, where we regularly publish in-depth insights and strategies to help commercial cleaning contractors and janitorial businesses navigate the complexities of the cleaning industry and grow their operations."
        />
        <div>
          <div className="grid md:grid-cols-3 gap-10 items-stretch my-10">
            {blogPost?.map((singlePost: any, i: number) => {
              return <BlogCard key={i} data={singlePost} />;
            })}
          </div>
          <div>
            <Pagination totalPages={totalPages} currentPage={page} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
