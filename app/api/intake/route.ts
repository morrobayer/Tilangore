import { NextRequest, NextResponse } from 'next/server';

// Placeholder — replace with real Stripe + email + storage in production
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // In production:
    // 1. Create Stripe Checkout Session
    // 2. Save intake to database / sheet
    // 3. Notify EvidenceForge Ops agent (webhook or shared folder)
    // 4. Send confirmation email

    console.log('New EvidenceForge intake:', body);

    return NextResponse.json({
      success: true,
      message: 'Intake received. A payment link will be sent to your email shortly.',
      id: `EF-${Date.now()}`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
