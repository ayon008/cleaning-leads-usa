export const wpDomain = `https://cleaning-leads-usa.rf.gd/wp-json/wp/v2`;

export async function getPosts(page = 1, perPage = 12) {
    const res = await fetch(
        `${wpDomain}/posts?_embed&per_page=${perPage}&page=${page}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    const totalPages = Number(res.headers.get("X-WP-TotalPages"));
    return { posts, totalPages }
}

export async function getSinglePost(slug: string) {
    const res = await fetch(
        `${wpDomain}/posts?slug=${slug}&_embed`
    );
    return res.json();
}
