import React from "react";
import Title from "../Title/Title";
// import BlogCard from "./BlogCard";
import { getPosts } from "@/app/lib/Wp";

const Blogs = async() => {
  const blogPost = await getPosts()
  console.log(blogPost);
  
  return (
    <section id="blogs" className="mt-10 mb-20">
      <div className="container">
        <Title
          containerClass="text-center"
          headline="Latest From Our Blog"
          subHeading="Read through our expert blog posts, where we regularly publish in-depth insights and strategies to help commercial cleaning contractors and janitorial businesses navigate the complexities of the cleaning industry and grow their operations."
        />
        <div>
          {/* Blog Cards */}
          {/* <BlogCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
