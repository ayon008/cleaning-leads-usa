import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { name,
            email,
            phoneNumber,
            companyName,
            address,
            zip,
            radius,
            message } = data;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlBody = `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>ZIP:</strong> ${zip}</p>
      <p><strong>Service Radius:</strong> ${radius}</p>
      <p><strong>Message:</strong><br/> ${message}</p>
    `;

        // Send email
        const info = await transporter.sendMail({
            from: `"Website Lead" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // send to yourself
            subject: `New Lead from ${name} (${companyName})`,
            text: `Lead details:\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nCompany: ${companyName}\nAddress: ${address}\nZIP: ${zip}\nRadius: ${radius}\nMessage: ${message}`,
            html: htmlBody,
        });

        return new Response(
            JSON.stringify({ success: true, messageId: info.messageId }),
            { status: 200 }
        );
    } catch (error) {
        let errorMessage = "Unknown error";

        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === "string") {
            errorMessage = error;
        }

        console.error("Email error:", errorMessage);

        return new Response(
            JSON.stringify({ success: false, error: errorMessage }),
            { status: 500 }
        );
    }
}
