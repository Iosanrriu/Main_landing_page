import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log('Contact form payload:', payload);

    // TODO: Persist payload in a database such as Supabase/Postgres.
    // TODO: Send notification email via a service like Resend.

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false, message: 'Invalid request' }, { status: 400 });
  }
}
