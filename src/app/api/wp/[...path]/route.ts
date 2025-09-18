/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

const WP_API = "https://cleaning-leads-usa.rf.gd/wp-json/wp/v2";

export async function GET(
    req: Request,
    { params }: { params: { path: string[] } }
) {
    try {
        const search = new URL(req.url).search;
        const target = `${WP_API}/${params.path.join("/")}${search}`;

        const res = await fetch(target, {
            headers: { Accept: "application/json" },
            cache: "no-store",
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: "Failed to fetch WP" },
                { status: res.status }
            );
        }

        // Pass headers like pagination
        const totalPages = res.headers.get("X-WP-TotalPages");
        const data = await res.json();

        return NextResponse.json(
            { data, totalPages },
            { headers: { "X-WP-TotalPages": totalPages ?? "0" } }
        );
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
