import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.AVIATIONSTACK_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key is missing" },
      { status: 500 }
    );
  }

  const res = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}