import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: message, // <-- user input
      }),
    });

    const data = await response.json();

    console.log("API RAW:", data); // <-- Debug এর জন্য (চাইলে বাদ দিতে পারো)

    // 🔥 নতুন API এর উত্তর এখানে থাকে: output_text
    const reply = data?.output_text?.[0] ?? "No response received from model.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { reply: "Server error occurred." },
      { status: 500 }
    );
  }
}
