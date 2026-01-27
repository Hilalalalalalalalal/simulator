
export interface Scenario {
  id: string;
  title: string;
  category: 'Service' | 'Technical' | 'Retention';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  customerPersona: string;
  objection: string;
  procedures: string[];
  initialPrompt: string;
}

export interface CallMetric {
  empathy: number;
  professionalism: number;
  objectionHandling: number;
  procedureAdherence: number;
}

export interface Feedback {
  score: number;
  message: string;
  tips: string[];
}

export interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export enum ImageSize {
  S1K = '1K',
  S2K = '2K',
  S4K = '4K'
}

export enum AspectRatio {
  A1_1 = '1:1',
  A2_3 = '2:3',
  A3_2 = '3:2',
  A3_4 = '3:4',
  A4_3 = '4:3',
  A9_16 = '9:16',
  A16_9 = '16:9',
  A21_9 = '21:9'
}
