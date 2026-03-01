import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.AVIATIONSTACK_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `http://api.aviationstack.com/v1/flights?access_key=${apiKey}`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch flights" },
      { status: 500 }
    );
  }
}