import { NextRequest } from "next/server";
import prisma from "@/app/lib/prisma";

export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
): Promise<Response> {
    try {
        const { id } = await context.params;
        console.log("Deleting contact with ID:", id);

        if (!id) {
            return new Response(
                JSON.stringify({ error: "Contact ID is required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        const contact = await prisma.contactForm.findUnique({
            where: { id },
        });

        if (!contact) {
            return new Response(
                JSON.stringify({ error: "Contact not found" }),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" }
                }
            );
        }

        await prisma.contactForm.delete({
            where: { id },
        });

        return new Response(
            JSON.stringify({ success: true }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    } catch (error) {
        console.error("Error deleting contact:", error);
        return new Response(
            JSON.stringify({ error: "Failed to delete contact" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
}
