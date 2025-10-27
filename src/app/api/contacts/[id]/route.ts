import prisma from "@/app/lib/prisma";
import { NextRequest } from "next/server";

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;
        console.log('Deleting contact with ID:', id);

        if (!id) {
            throw new Error('Contact ID is required');
        }

        const contact = await prisma.contactForm.findUnique({
            where: { id },
        });

        if (!contact) {
            return new Response(
                JSON.stringify({ error: "Contact not found" }),
                {
                    status: 404,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        await prisma.contactForm.delete({
            where: { id },
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error deleting contact:", error);
        return new Response(
            JSON.stringify({ error: "Failed to delete contact" }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}