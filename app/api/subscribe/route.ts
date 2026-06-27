import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone } = await req.json();

  if (!lastName?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Last name and email are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from('subscribers').insert({
    first_name: firstName?.trim() || null,
    last_name: lastName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || null,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'You\'re already subscribed!' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
