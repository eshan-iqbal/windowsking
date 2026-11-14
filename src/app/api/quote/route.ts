import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface QuotePayload {
  name?: string;
  phone?: string;
  address?: string;
  notes?: string;
  location?: {
    lat: number;
    lng: number;
  } | null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;
    const { name, phone, address, notes, location } = body;

    if (!name?.trim() || !phone?.trim() || !address?.trim()) {
      return NextResponse.json(
        { error: 'Please fill in your name, phone number, and full address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.QUOTE_TO_EMAIL || 'eshaniqbal9090@gmail.com';
    const fromEmail = process.env.QUOTE_FROM_EMAIL || 'Windows King <quotes@zaarmira.in>';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured in .env.local.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const hasCoords =
      location &&
      typeof location.lat === 'number' &&
      typeof location.lng === 'number';

    const mapsUrl = hasCoords
      ? `https://www.google.com/maps?q=${location.lat},${location.lng}`
      : null;

    const { error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Quote Request — ${name.trim()} (${phone.trim()})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: #062c21; color: #ffffff; padding: 20px 24px;">
            <div style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #6ee7b7; font-weight: 700;">Windows King • New Lead</div>
            <h2 style="margin: 6px 0 0; font-size: 20px;">Custom Quote Request</h2>
          </div>
          <div style="padding: 24px; color: #0f172a; font-size: 14px; line-height: 1.6;">
            <p style="margin: 0 0 12px;"><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
            <p style="margin: 0 0 12px;"><strong>Phone:</strong> ${escapeHtml(phone.trim())}</p>
            <p style="margin: 0 0 12px;"><strong>Full Address:</strong><br/>${escapeHtml(address.trim()).replace(/\n/g, '<br/>')}</p>
            ${notes?.trim() ? `<p style="margin: 0 0 12px;"><strong>Notes:</strong><br/>${escapeHtml(notes.trim()).replace(/\n/g, '<br/>')}</p>` : ''}
            ${
              hasCoords && mapsUrl
                ? `
              <div style="margin-top: 16px; padding: 14px 16px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px;">
                <div style="font-size: 12px; font-weight: 700; color: #065f46; margin-bottom: 8px;">Pinned Site Location</div>
                <a href="${mapsUrl}" style="display: inline-block; background: #047857; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; padding: 8px 16px; border-radius: 999px;">Open Location in Google Maps</a>
              </div>
            `
                : `<p style="margin: 12px 0 0; color: #64748b; font-size: 12px;"><em>No map pin was selected.</em></p>`
            }
          </div>
        </div>
      `,
    });

    if (resendError) {
      return NextResponse.json(
        { error: resendError.message || 'Failed to send email via Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to submit quote request. Please try again.' },
      { status: 500 }
    );
  }
}
