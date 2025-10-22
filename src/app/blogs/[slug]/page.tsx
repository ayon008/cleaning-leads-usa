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
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.cleaningleadsusa.com";

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
    post?.excerpt?.rendered
      .replace(/<[^>]+>/g, "")
      .trim()
      .substring(0, 160);
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const canonicalUrl = `${SITE_URL}/blogs/${slug}`;

  return {
    title,
    description,
    authors: [{ name: post?._embedded?.author?.[0]?.name || "Unknown Author" }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Cleaning Leads USA",
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
      type: "article",
      publishedTime: post?.date,
      modifiedTime: post?.modified,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const BlogPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = await getSinglePost(slug);

  const post = data[0];
  const author = post._embedded?.author?.[0]?.name || "Unknown Author";
  const authorLink = post._embedded?.author?.[0]?.link || `${SITE_URL}/#author-${encodeURIComponent(author)}`;
  const canonicalUrl = `${SITE_URL}/blogs/${slug}`;

  return (
    <article className="container py-24">
      {/* Article JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title.rendered,
            description: (post.yoast_head_json?.description || post.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim().substring(0, 160),
            image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
              ? [post._embedded["wp:featuredmedia"][0].source_url]
              : undefined,
            author: (function() {
              const authorLink = post._embedded?.author?.[0]?.link;
              return {
                "@type": "Person",
                name: author,
                url: authorLink || `${SITE_URL}/#author-${encodeURIComponent(author)}`,
              };
            })(),
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_URL}#organization`,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/cleaning-leads-usa-logo.png`,
              },
            },
            url: canonicalUrl,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
            datePublished: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
            dateModified: (post.modified || post.date) ? new Date(post.modified || post.date).toISOString() : new Date().toISOString(),
          }),
        }}
      />
      <h1 className="text-3xl text-center font-bold mb-2" itemProp="headline">
        {post.title.rendered}
      </h1>

      <div className="text-sm text-gray-500 mb-4 text-center">
        By{" "}
        <strong
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <span itemProp="name">{author}</span>
          <meta itemProp="url" content={authorLink} />
        </strong>{" "}
        |{" "}
        <time dateTime={post.date ? new Date(post.date).toISOString() : new Date().toISOString()} itemProp="datePublished">
          {moment(post.date).format("MMMM Do YYYY")}
        </time>
      </div>

      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content.rendered.replace(/<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '') }}
        itemProp="articleBody"
      ></div>
    </article>
  );
};

export default BlogPage;
