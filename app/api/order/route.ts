import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'mewing713@gmail.com';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      firstName, lastName, email, phone,
      transactionType, jurisdiction, closingDate,
      propertyAddress, notes,
    } = data;

    const name = `${firstName} ${lastName}`;
    const submitted = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    await resend.emails.send({
      from: 'Federal Title Website <onboarding@resend.dev>',
      to: TO,
      replyTo: email,
      subject: `New Closing Order — ${name} — ${transactionType} — ${propertyAddress || 'Address TBD'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0f2044; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Closing Order</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Federal Title & Escrow Company Website</p>
          </div>
          <div style="background: white; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 40%; color: #6b7280; font-size: 14px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #781f1c;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phone}" style="color: #781f1c;">${phone}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Transaction Type</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${transactionType}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Jurisdiction</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${jurisdiction}</td></tr>
              ${closingDate ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Estimated Closing Date</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600;">${closingDate}</td></tr>` : ''}
              ${propertyAddress ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Property Address</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${propertyAddress}</td></tr>` : ''}
              ${notes ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Notes</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${notes}</td></tr>` : ''}
              <tr><td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Submitted</td><td style="padding: 10px 0; color: #6b7280; font-size: 13px;">${submitted} ET</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fdf2f2; border-radius: 6px; border-left: 4px solid #781f1c;">
              <p style="margin: 0; font-size: 13px; color: #781f1c; font-weight: 600;">Reply directly to this email to respond to ${firstName}.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Order email error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
