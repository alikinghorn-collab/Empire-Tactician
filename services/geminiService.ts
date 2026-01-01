
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyDetail } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function fetchCivStrategies(civName: string): Promise<StrategyDetail[]> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Detailed competitive strategies for the ${civName} civilization in Age of Empires II: Definitive Edition. Include build orders, unit compositions, and game phase advice.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Name of the strategy (e.g., Scout Rush, Fast Castle)" },
            difficulty: { type: Type.STRING, enum: ["Beginner", "Intermediate", "Expert"] },
            buildOrder: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING, description: "Pop count or game time" },
                  action: { type: Type.STRING, description: "Action to take" }
                },
                required: ["time", "action"]
              }
            },
            unitComposition: { type: Type.ARRAY, items: { type: Type.STRING } },
            keyBonuses: { type: Type.ARRAY, items: { type: Type.STRING } },
            earlyGame: { type: Type.STRING },
            midGame: { type: Type.STRING },
            lateGame: { type: Type.STRING },
            counters: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["title", "difficulty", "buildOrder", "unitComposition", "keyBonuses", "earlyGame", "midGame", "lateGame", "counters"]
        }
      }
    }
  });

  try {
    const data = JSON.parse(response.text || '[]');
    return data;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    return [];
  }
}
