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

export interface WPPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: Record<string, any>; // can be typed more strictly if needed
    categories: number[];
    tags: number[];
    class_list: string[];
    yoast_head?: string;
    yoast_head_json?: {
        title: string;
        robots: Record<string, string>;
        canonical: string;
        og_locale: string;
        og_type: string;
        og_title: string;
        og_description: string;
        og_url: string;
        og_site_name: string;
        article_published_time?: string;
        author?: string;
        twitter_card?: string;
        twitter_misc?: Record<string, string>;
        schema?: any;
    };
    _links?: Record<string, any>;
    _embedded?: Record<string, any>;
}
