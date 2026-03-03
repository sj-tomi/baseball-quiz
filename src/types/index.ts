export type QuestionType = "4択" | "○×";

export type Category = "ルール・基本知識" | "律例" | "サイン・戦術";

export interface Question {
  id: string;
  type: QuestionType;
  category: Category;
  question: string;        // ふりがな付きHTML文字列（<ruby>タグ使用）
  choices: string[];       // 4択の場合は4つ、○×の場合は["○", "×"]
  correctIndex: number;    // 正解のインデックス（0始まり）
  explanation: string;     // 解説文（ふりがな付きHTML）
  source: string;          // 出典
  year?: number;           // 導入年（ルール改正管理用）
}

export type Screen = "start" | "quiz" | "explanation" | "result" | "admin";

export interface QuizSession {
  questions: Question[];
  currentIndex: number;
  score: number;
  lastAnswerCorrect: boolean | null;
  selectedIndex: number | null;
}
