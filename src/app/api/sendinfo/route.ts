/* eslint-disable @typescript-eslint/no-explicit-any */

import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        await prisma.contactForm.create({
            data: data
        });
        return NextResponse.json(
            { success: true, message: "User created successfully" },
            { status: 201 }
        );
    } catch (error: any) {
        console.log(error);

        return NextResponse.json(
            { success: false, message: "Failed to create user", error: error.message },
            { status: 500 }
        );
    }

}


export async function GET() {
    try {
        const contactInfo = await prisma.contactForm.findMany();
        return NextResponse.json(contactInfo)
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Failed to create user", error: error.message },
            { status: 500 }
        );
    }
}