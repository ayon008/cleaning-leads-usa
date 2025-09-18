const apiDomain = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function getPosts(page = 1, perPage = 12) {
    const res = await fetch(
        `${apiDomain}/api/wp/posts?_embed&per_page=${perPage}&page=${page}`,
        { cache: "no-cache" }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const { data, totalPages } = await res.json();
    return { posts: data, totalPages: Number(totalPages) };
}

export async function getSinglePost(slug: string) {
    const res = await fetch(`${apiDomain}/api/wp/posts?slug=${slug}&_embed`);
    const { data } = await res.json();
    return data;
}
