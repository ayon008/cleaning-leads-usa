import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

interface RouteParams {
    params: {
        id: string;
    };
}

export async function DELETE(
    _request: NextRequest,
    { params }: RouteParams
): Promise<NextResponse> {
    try {
        const { id } = params;
        console.log('Deleting contact with ID:', id);

        if (!id) {
            return NextResponse.json(
                { error: "Contact ID is required" },
                { status: 400 }
            );
        }

        const contact = await prisma.contactForm.findUnique({
            where: { id },
        });

        if (!contact) {
            return NextResponse.json(
                { error: "Contact not found" },
                { status: 404 }
            );
        }

        await prisma.contactForm.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting contact:", error);
        return NextResponse.json(
            { error: "Failed to delete contact" },
            { status: 500 }
        );
    }
}