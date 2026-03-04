import { useState, useCallback } from 'react';
import type { Question, QuizSession } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function useQuiz(allQuestions: Question[]) {
  const [session, setSession] = useState<QuizSession | null>(null);

  const startSession = useCallback(() => {
    const total = Math.min(20, allQuestions.length);
    const minDiagram = Math.ceil(total / 3); // 1/3以上は図解問題

    const withDiagram = shuffleArray(allQuestions.filter((q) => q.diagram));
    const withoutDiagram = shuffleArray(allQuestions.filter((q) => !q.diagram));

    const diagramCount = Math.min(minDiagram, withDiagram.length);
    const restCount = total - diagramCount;

    const selected = shuffleArray([
      ...withDiagram.slice(0, diagramCount),
      ...withoutDiagram.slice(0, restCount),
    ]);

    setSession({
      questions: selected,
      currentIndex: 0,
      score: 0,
      lastAnswerCorrect: null,
      selectedIndex: null,
    });
  }, [allQuestions]);

  const answer = useCallback((selectedIndex: number) => {
    if (!session) return;
    const current = session.questions[session.currentIndex];
    const correct = selectedIndex === current.correctIndex;
    setSession((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        score: correct ? prev.score + 1 : prev.score,
        lastAnswerCorrect: correct,
        selectedIndex,
      };
    });
  }, [session]);

  const nextQuestion = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentIndex: prev.currentIndex + 1,
        lastAnswerCorrect: null,
        selectedIndex: null,
      };
    });
  }, []);

  const currentQuestion = session?.questions[session.currentIndex] ?? null;
  const isAnswered = session?.lastAnswerCorrect !== null;
  const isFinished = session ? session.currentIndex >= session.questions.length : false;
  const totalQuestions = session?.questions.length ?? 0;
  const score = session?.score ?? 0;

  return {
    session,
    currentQuestion,
    isAnswered,
    isFinished,
    totalQuestions,
    score,
    startSession,
    answer,
    nextQuestion,
  };
}
