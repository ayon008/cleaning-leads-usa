/* eslint-disable @typescript-eslint/no-explicit-any */
import clientPromise from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const client = await clientPromise;
        const db = client.db("clean-leads-usa"); // replace with your DB name
        const result = await db.collection("contactForm").insertOne(data);

        return NextResponse.json(
            { success: true, message: "User created successfully", id: result.insertedId },
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Failed to create user", error: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("clean-leads-usa"); // replace with your DB name
        const contactInfo = await db.collection("contactForm").find({}).toArray();

        return NextResponse.json(contactInfo, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch users", error: error.message },
            { status: 500 }
        );
    }
}
