import { NextResponse } from 'next/server';

import { supabase } from '@utils/supabase';

export async function GET() {
  const { data, error } = await supabase.from('invitation_comment').select().order('id', { ascending: false });
  if (error) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  // Get Request Body, Extract the body of the request
  const { name, comment } = await request.json();
  const { error } = await supabase.from('invitation_comment').insert([
    {
      name: name,
      comment: comment,
      come: 0,
    },
  ]);
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 422 });
  }
  return NextResponse.json({ message: 'Success create comment' }, { status: 200 });
}
