import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");

  try {
    const { name, email, business, services, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const servicesText = services?.length
      ? services.join(", ")
      : "Not specified";

    await resend.emails.send({
      from: "Plus One Website <onboarding@resend.dev>",
      to: ["aaron.weipingso@plusonesoftwaresolution.com"],
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || "Not provided"}`,
        `Services: ${servicesText}`,
        `Message:\n${message || "Not provided"}`,
      ].join("\n\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111110;">
          <h2 style="color: #EA580C; margin-bottom: 24px;">New enquiry via Plus One website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9B9B92; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9B9B92; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #EA580C;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9B9B92; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Business</td><td style="padding: 8px 0;">${business || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #9B9B92; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Services</td><td style="padding: 8px 0;">${servicesText}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #FAFAF7; border-left: 3px solid #EA580C; border-radius: 4px;">
            <p style="margin: 0; color: #6B6B63; white-space: pre-wrap;">${message || "No message provided."}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
