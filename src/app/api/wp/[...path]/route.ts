/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

const WP_API = "https://cleaning-leads-usa.rf.gd/wp-json/wp/v2";

export async function GET(
    req: NextRequest,
    { params }: { params: { path: string[] } }
) {
    try {
        if (!params.path || params.path.length === 0) {
            return NextResponse.json({ error: "Missing path" }, { status: 400 });
        }

        const search = req.nextUrl.search; // preserves ?query=params
        const targetUrl = `${WP_API}/${params.path.join("/")}${search}`;

        console.log("Proxying to WP:", targetUrl);

        const res = await fetch(targetUrl, {
            headers: { Accept: "application/json" },
            cache: "no-store",
        });

        if (!res.ok) {
            const text = await res.text();
            console.error("WP Fetch Error:", res.status, text);
            return NextResponse.json({ error: text || "WP fetch failed" }, { status: res.status });
        }

        const data = await res.json();
        const totalPages = res.headers.get("X-WP-TotalPages") || "0";

        return NextResponse.json(
            { data, totalPages },
            { headers: { "X-WP-TotalPages": totalPages } }
        );
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
