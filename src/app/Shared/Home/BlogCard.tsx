import Image from "next/image";
import React from "react";
import image from "../../../../public/52068.jpg"

const BlogCard = () => {
  return (
    <div>
      <Image src={image} alt="Blog-image" />
      <div>
        <h2>Blog Title</h2>
        <p>Blog description...</p>
      </div>
    </div>
  );
};

export default BlogCard;
