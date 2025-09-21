import Image from "next/image";
import React from "react";
import image from "../../../../public/cleaning-business-professionals.jpg"

const BlogCard = () => {
  return (
    <div>
      <Image src={image} alt="Cleaning industry blog post - professional janitorial services and lead generation" loading="lazy" />
      <div>
        <h2>Blog Title</h2>
        <p>Blog description...</p>
      </div>
    </div>
  );
};

export default BlogCard;
