import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBirthdayWish = async (
  name: string,
  traits: string,
  memory: string,
  tone: 'romantic' | 'funny' | 'poetic'
): Promise<string> => {
  try {
    const prompt = `
      Write a short, heartfelt, and ${tone} birthday letter (max 150 words) for my girlfriend named ${name}.
      
      Here are some things I love about her: ${traits}.
      Here is a favorite memory: ${memory}.
      
      Make it feel personal and warm. Do not include placeholders.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Happy Birthday to the most amazing person!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "I tried to ask AI for the perfect words, but nothing compares to how much I love you. Happy Birthday!";
  }
};
