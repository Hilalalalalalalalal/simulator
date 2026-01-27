
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { Scenario, ImageSize, AspectRatio } from '../types';
import { FEEDBACK_SYSTEM_INSTRUCTION, SYSTEM_INSTRUCTIONS } from '../constants';

export class GeminiService {
  constructor() {}

  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getChatResponse(scenario: Scenario, history: { role: string, parts: { text: string }[] }[]) {
    const ai = this.getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts[0].text }] })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS(scenario),
        temperature: 0.8,
      }
    });
    return response.text;
  }

  async analyzeCall(transcript: string, repName: string) {
    const ai = this.getClient();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze this transcript and provide feedback in JSON format only: ${transcript}`,
        config: {
          systemInstruction: FEEDBACK_SYSTEM_INSTRUCTION(repName),
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              metrics: {
                type: Type.OBJECT,
                properties: {
                  empathy: { type: Type.NUMBER },
                  professionalism: { type: Type.NUMBER },
                  objectionHandling: { type: Type.NUMBER },
                  procedureAdherence: { type: Type.NUMBER }
                },
                required: ['empathy', 'professionalism']
              },
              message: { type: Type.STRING },
              feedbacks: { 
                type: Type.ARRAY, 
                items: { 
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING },
                    type: { type: Type.STRING },
                    audioPrompt: { type: Type.STRING }
                  }
                } 
              },
              currentStep: { type: Type.STRING }
            }
          }
        }
      });
      
      const text = response.text || '{}';
      const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleanJson);
    } catch (e) {
      console.error("Gemini Analysis Error:", e);
      return {};
    }
  }

  async generateSpeech(text: string) {
    const ai = this.getClient();
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say this quickly and clearly: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });
      return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    } catch (e) {
      console.error("TTS Error:", e);
      return null;
    }
  }

  async generateAvatar(scenario: Scenario, size: ImageSize, ratio: AspectRatio) {
    const ai = this.getClient();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `A realistic professional portrait of a customer for a telecom service scenario. Scenario: ${scenario.description}. The person looks ${scenario.difficulty === 'Hard' ? 'angry and frustrated' : 'concerned'}. High resolution, high quality, modern lighting, corporate background.` }]
        },
        config: {
          imageConfig: { aspectRatio: ratio, imageSize: size }
        }
      });
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
      }
    } catch (error) {
      console.error("Avatar Generation Error:", error);
    }
    return null;
  }
}

export function decodeAudio(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}

export async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
  }
  return buffer;
}
