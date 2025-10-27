/* eslint-disable @typescript-eslint/no-explicit-any */
import clientPromise from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


interface Params {
    id: string;
}

export async function DELETE(
    _req: NextRequest,
    context: { params: Promise<Params> }
): Promise<Response> {
    try {
        const { id } = await context.params;
        console.log("Deleting contact with ID:", id);

        if (!id) {
            return NextResponse.json(
                { error: "Contact ID is required" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("clean-leads-usa"); // replace with your DB name
        const collection = db.collection("contactForm");

        const contact = await collection.findOne({ _id: new ObjectId(id) });

        if (!contact) {
            return NextResponse.json(
                { error: "Contact not found" },
                { status: 404 }
            );
        }

        await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error("Error deleting contact:", error);
        return NextResponse.json(
            { error: "Failed to delete contact", details: error.message },
            { status: 500 }
        );
    }
}
