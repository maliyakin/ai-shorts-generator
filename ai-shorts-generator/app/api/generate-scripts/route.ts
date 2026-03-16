import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { niche } = await req.json();

    const prompt = `
Generate 100 ultra viral YouTube Shorts scripts.

Topic: ${niche}
Language: Bahasa Indonesia

Structure:
Hook
Explanation
Twist
Conclusion

Each script max 3 sentences.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ],
      max_tokens: 2000
    });

    return NextResponse.json({
      scripts: response.choices[0].message.content
    });

  } catch (error) {

    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );

  }

}