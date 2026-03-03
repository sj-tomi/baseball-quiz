import type { Question } from '../types';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
}

const categoryColors: Record<string, string> = {
  'ルール・基本知識': 'bg-blue-100 text-blue-700',
  '律例': 'bg-purple-100 text-purple-700',
  'サイン・戦術': 'bg-orange-100 text-orange-700',
};

export default function QuizScreen({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}: QuizScreenProps) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Progress header */}
      <div className="bg-green-700 px-4 pt-4 pb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {totalQuestions}<ruby>問<rt className="text-green-300 text-xs">もん</rt></ruby>
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[question.category] ?? 'bg-gray-100 text-gray-700'}`}>
            {question.category}
          </span>
        </div>
        <div className="w-full bg-green-900 rounded-full h-2">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question type badge */}
      <div className="px-4 pt-4">
        <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-300">
          {question.type}
        </span>
      </div>

      {/* Question text */}
      <div className="px-4 pt-3 pb-4 flex-1">
        <div
          className="bg-white rounded-2xl shadow-sm p-5 text-gray-800 text-base leading-relaxed border border-gray-100"
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
      </div>

      {/* Choices */}
      <div className="px-4 pb-8 flex flex-col gap-3">
        {question.choices.map((choice, i) => {
          const isOX = question.type === '○×';
          const choiceStyle = isOX
            ? i === 0
              ? 'border-green-400 bg-green-50 text-green-800'
              : 'border-red-400 bg-red-50 text-red-800'
            : 'border-gray-200 bg-white text-gray-800';

          return (
            <button
              key={i}
              className={`quiz-btn w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3 font-medium text-left shadow-sm hover:shadow-md active:opacity-80 ${choiceStyle}`}
              onClick={() => onAnswer(i)}
            >
              {isOX ? (
                <span className={`text-2xl font-bold ${i === 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {choice}
                </span>
              ) : (
                <>
                  <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-800 text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-snug">{choice}</span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
