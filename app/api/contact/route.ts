import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

// Avoid throwing immediately if the KEY is missing, so the build doesn't fail.
// We'll throw an error inside the POST handler if someone tries to submit.
const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate server-side
    const validatedData = contactFormSchema.parse(body);

    // If there's no env var configured yet, log and mock success/fail so UI works
    if (!process.env.RESEND_API_KEY) {
      console.log(
        "Mock Email Sending (Missing RESEND_API_KEY):",
        validatedData,
      );
      return NextResponse.json(
        {
          message:
            "Mock success (Email not actually sent, configure RESEND_API_KEY)",
        },
        { status: 200 },
      );
    }

    const { name, email, phone, subject, note } = validatedData;

    const toEmail = process.env.CONTACT_EMAIL_TO || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: "hello@keziahverghese.com",
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Submission: ${subject}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${note}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${note?.replace(/\n/g, "<br/>") || "No message provided."}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email via Resend" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 },
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid form data", issues: error.issues },
        { status: 400 },
      );
    }

    console.error("Unknown Error in contact route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
