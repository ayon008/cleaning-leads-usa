/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import moment from "moment";
import { getPosts } from "../page";

export const revalidate = 3600;

interface PageProps {
  params: {
    slug: string;
  };
}

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export async function generateStaticParams() {
  const { posts: data } = await getPosts();
  return data.map((singlePost: any) => ({
    slug: singlePost?.slug,
  }));
}

export async function getSinglePost(slug: string) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
  return res.json();
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = await getSinglePost(slug);
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
  const { slug } = await params;
  const data = await getSinglePost(slug);
  console.log(data);

  const post = data[0];
  const author = post._embedded?.author?.[0]?.name || "Unknown Author";

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
