import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const id = `EF-${Date.now()}`;

    console.log('New EvidenceForge intake:', body);

    // Forward to EvidenceForge Ops webhook if configured
    const webhookUrl = process.env.EF_OPS_WEBHOOK_URL;
    const webhookAuth = process.env.EF_OPS_WEBHOOK_AUTH;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(webhookAuth ? { Authorization: `Bearer ${webhookAuth}` } : {}),
          },
          body: JSON.stringify({
            id,
            source: 'getevidenceforge.com',
            submittedAt: new Date().toISOString(),
            ...body,
          }),
        });
      } catch (err) {
        console.error('Webhook forward failed:', err);
        // Do not fail the user request if the webhook is down
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Intake received. A payment link will be sent to your email shortly.',
      id,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
