import { getPosts, getSinglePost, WPPost } from "@/app/lib/Wp";
import React from "react";
interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts: WPPost[] = await getPosts();
  return posts.map((post) => ({
    id: String(post.slug),
  }));
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await getSinglePost(slug);
  console.log(post);
  
  return (
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
    </div>
  );
};

export default page;
