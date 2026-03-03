import type { Question } from '../types';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
}

const categoryBadge: Record<string, string> = {
  'ルール・基本知識': 'bg-blue-50 text-blue-600 border-blue-200',
  '律例': 'bg-purple-50 text-purple-600 border-purple-200',
  'サイン・戦術': 'bg-orange-50 text-orange-600 border-orange-200',
};

export default function QuizScreen({ question, currentIndex, totalQuestions, onAnswer }: QuizScreenProps) {
  const pct = Math.round((currentIndex / totalQuestions) * 100);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top bar */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-base font-bold text-gray-800">
            {currentIndex + 1}<span className="text-gray-400 font-normal text-sm"> / {totalQuestions}問</span>
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryBadge[question.category] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>
            {question.category}
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="px-5 pt-5 pb-4 max-w-2xl w-full mx-auto">
        <div className="inline-flex items-center gap-1.5 mb-3">
          <span className="text-xs font-bold text-white bg-green-600 px-2.5 py-0.5 rounded-full">
            {question.type}
          </span>
        </div>
        <div
          className="text-gray-900 text-[1.15rem] leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
      </div>

      {/* Choices */}
      <div className="flex-1 px-5 pb-8 flex flex-col gap-3 max-w-2xl w-full mx-auto">
        {question.choices.map((choice, i) => {
          if (question.type === '○×') {
            const isCircle = i === 0;
            return (
              <button
                key={i}
                className={`tap-btn flex items-center justify-center gap-3 rounded-2xl border-2 py-6 font-bold text-2xl transition-all
                  ${isCircle
                    ? 'border-green-300 bg-green-50 text-green-700 hover:bg-green-100 hover:border-green-400'
                    : 'border-red-300 bg-red-50 text-red-600 hover:bg-red-100 hover:border-red-400'
                  }`}
                onClick={() => onAnswer(i)}
              >
                <span
                  className="text-4xl"
                  dangerouslySetInnerHTML={{ __html: choice }}
                />
              </button>
            );
          }
          return (
            <button
              key={i}
              className="tap-btn flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white hover:border-green-400 hover:bg-green-50 px-4 py-4 text-left text-gray-800 shadow-sm hover:shadow-md"
              onClick={() => onAnswer(i)}
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-sm font-bold">
                {i + 1}
              </span>
              <span
                className="text-base leading-snug"
                dangerouslySetInnerHTML={{ __html: choice }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
