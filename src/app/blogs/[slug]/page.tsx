/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/[slug]/page.tsx
import { getPosts, getSinglePost } from "@/app/lib/Wp";
import React from "react";
import moment from "moment";

export const revalidate = 3600;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const data = await getPosts();
  return data.map((singlePost: any) => ({
    slug: singlePost?.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const data = await getSinglePost(params.slug);
  const post = data[0];
  const title = post?.yoast_head_json?.title || post?.title?.rendered;
  const description =
    post?.yoast_head_json?.description ||
    post?.excerpt?.rendered.replace(/<[^>]+>/g, "");
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title,
    description,
    authors: [{ name: post?._embedded?.author?.[0]?.name || "Unknown Author" }],
    openGraph: {
      title,
      description,
      url: post?.link,
      images: image ? [{ url: image }] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

const BlogPage = async ({ params }: PageProps) => {
  const data = await getSinglePost(params.slug);
  const post = data[0];
  const author = post._embedded?.author?.[0]?.name || "Unknown Author";
  //   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  // console.log(post);

  return (
    <article className="container py-24">
      <h1 className="text-3xl text-center font-bold mb-2">
        {post.title.rendered}
      </h1>

      <div className="text-sm text-gray-500 mb-4 text-center">
        By <strong>{author}</strong> |{" "}
        {moment(post.date).format("MMMM Do YYYY")}
      </div>

      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
    </article>
  );
};

export default BlogPage;
