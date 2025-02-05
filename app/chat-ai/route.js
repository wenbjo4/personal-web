import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemMessage = {
  role: "system",
  content: `你是一個善於用繁體中文交談和創作詩詞的 AI 助手。
  - 所有回應都必須使用繁體中文
  - 當使用者的輸入包含情感、描述或故事性內容時，你可以創作一首相關的詩詞
  - 詩詞可以是古體詩、現代詩、或任何適合的詩歌形式
  - 在詩詞之後，可以用日常的語言繼續對話
  - 回應要真誠、有溫度，展現文學素養`
};

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemMessage, ...messages],
      temperature: 0.9,
      max_tokens: 1000,
    });


    return NextResponse.json({ 
      message: completion.choices[0].message,
      status: 200 
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      error: '系統發生錯誤，請稍後再試', 
      status: 500 
    });
  }
} 