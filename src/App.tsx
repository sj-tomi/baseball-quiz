import { useState, useEffect } from 'react';
import type { Question, Screen } from './types';
import { defaultQuestions } from './data/defaultQuestions';
import { useQuiz } from './hooks/useQuiz';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ExplanationScreen from './components/ExplanationScreen';
import ResultScreen from './components/ResultScreen';
import AdminScreen from './components/AdminScreen';

export default function App() {
  const [screen, setScreen] = useState<Screen>(() => {
    const saved = sessionStorage.getItem('baseball_quiz_screen') as Screen | null;
    const quizScreens: Screen[] = ['quiz', 'explanation', 'result'];
    // Only restore quiz screens if a session exists
    if (saved && quizScreens.includes(saved)) {
      return sessionStorage.getItem('baseball_quiz_session') ? saved : 'start';
    }
    return 'start';
  });
  const [questions, setQuestions] = useState<Question[]>(defaultQuestions);

  useEffect(() => {
    sessionStorage.setItem('baseball_quiz_screen', screen);
  }, [screen]);

  const {
    currentQuestion,
    isFinished,
    totalQuestions,
    score,
    session,
    startSession,
    answer,
    nextQuestion,
  } = useQuiz(questions);

  const handleStart = () => {
    startSession();
    setScreen('quiz');
  };

  const handleAnswer = (index: number) => {
    answer(index);
    setScreen('explanation');
  };

  const handleNext = () => {
    const nextIndex = session ? session.currentIndex + 1 : 0;
    const total = session ? session.questions.length : 0;
    nextQuestion();
    if (isFinished || nextIndex >= total) {
      setScreen('result');
    } else {
      setScreen('quiz');
    }
  };

  const handleRestart = () => {
    startSession();
    setScreen('quiz');
  };

  const handleHome = () => {
    setScreen('start');
  };

  return (
    <div className="w-full max-w-2xl mx-auto min-h-[100dvh] bg-white shadow-xl relative">
      {screen === 'start' && (
        <StartScreen
          onStart={handleStart}
          onAdmin={() => setScreen('admin')}
          totalQuestions={questions.length}
        />
      )}

      {screen === 'quiz' && currentQuestion && (
        <QuizScreen
          question={currentQuestion}
          currentIndex={session!.currentIndex}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswer}
        />
      )}

      {screen === 'explanation' &&
        currentQuestion &&
        session?.selectedIndex !== null &&
        session?.selectedIndex !== undefined && (
          <ExplanationScreen
            question={currentQuestion}
            isCorrect={session.lastAnswerCorrect ?? false}
            selectedIndex={session.selectedIndex}
            isLast={session.currentIndex + 1 >= session.questions.length}
            onNext={handleNext}
          />
        )}

      {screen === 'result' && (
        <ResultScreen
          score={score}
          total={totalQuestions}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      )}

      {screen === 'admin' && (
        <AdminScreen
          questions={questions}
          onQuestionsChange={setQuestions}
          onBack={handleHome}
        />
      )}
    </div>
  );
}
