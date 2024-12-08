'use server';
import { NextResponse } from 'next/server';
import db from '../../../../models';


export async function GET() {
  const movies = await db?.Movies.findAll();
  return NextResponse.json(movies);
}

export async function POST(request: Request) {
  const body = await request.json();
  const movie = await db?.Movies.create(body);
  return NextResponse.json(movie);
}
