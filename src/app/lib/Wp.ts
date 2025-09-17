export const wpDomain = `https://cleaning-leads-usa.rf.gd/wp-json/wp/v2`;

export async function getPosts(page = 1, perPage = 10) {
    const res = await fetch(
        `${wpDomain}/posts?_embed&per_page=${perPage}&page=${page}`,
        { next: { revalidate: 3600 } }
    );
    return res.json();
}

export async function getSinglePost(slug: string) {
    const res = await fetch(
        `${wpDomain}/posts?slug=${slug}&_embed`,
        { next: { revalidate: 3600 } }
    );
    return res.json();
}

