import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.resend_api_key);
    const { name = "Customer", email } = await req.json();
    try {
        const response = await resend.emails.send({
            from: "support@cleaningleadsusa.com",
            to: email,
            subject: "Your Appointment with Cleaning Leads USA is Confirmed",
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #27205F;">Hello ${name},</h2>
                    <p>Thank you for booking a appointment with us. We’ve received your appointment request and our agent will reach out shortly to confirm the details.</p>
                    <p>If you have any questions or need further assistance, feel free to contact us at <a href="mailto:support@cleaningleadsusa.com">support@cleaningleadsusa.com</a>.</p>
                    <p>We appreciate your trust in Cleaning Leads USA and look forward to serving you.</p>
                    <br/>
                    <p>Best regards,</p>
                    <p><strong>The Cleaning Leads USA Team</strong></p>
                </div>
            `,
        });

        console.log("Email sent successfully:", response);
        return NextResponse.json({ success: true, response });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}