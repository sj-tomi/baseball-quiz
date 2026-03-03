import type { Question } from '../types';

interface ExplanationScreenProps {
  question: Question;
  isCorrect: boolean;
  selectedIndex: number;
  isLast: boolean;
  onNext: () => void;
}

export default function ExplanationScreen({ question, isCorrect, selectedIndex, isLast, onNext }: ExplanationScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Result banner */}
      <div className={`px-5 py-6 flex flex-col items-center ${isCorrect ? 'bg-green-600' : 'bg-red-500'}`}>
        <div className="text-5xl mb-2">{isCorrect ? '⭕' : '❌'}</div>
        <p className="text-white font-extrabold text-2xl tracking-wide">
          {isCorrect ? '正解！' : '不正解…'}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4 max-w-2xl w-full mx-auto">
        {/* Answer summary */}
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 flex flex-col gap-3">
          <div>
            <p className="text-xs text-gray-400 font-medium mb-1">あなたの答え</p>
            <p
              className={`font-bold text-base ${isCorrect ? 'text-green-700' : 'text-red-500'}`}
              dangerouslySetInnerHTML={{ __html: question.choices[selectedIndex] }}
            />
          </div>
          {!isCorrect && (
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-medium mb-1">正解</p>
              <p
                className="font-bold text-base text-green-700"
                dangerouslySetInnerHTML={{ __html: question.choices[question.correctIndex] }}
              />
            </div>
          )}
        </div>

        {/* Explanation */}
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-xs font-bold text-yellow-700 mb-2 flex items-center gap-1">
            <span>📖</span> 解説
          </p>
          <div
            className="text-gray-700 text-base leading-loose"
            dangerouslySetInnerHTML={{ __html: question.explanation }}
          />
          <div className="text-xs text-gray-400 mt-3 pt-3 border-t border-yellow-200">
            出典：<span dangerouslySetInnerHTML={{ __html: question.source }} />
            {question.year && <span className="ml-1">（{question.year}年）</span>}
          </div>
        </div>
      </div>

      {/* Next button - iPhone safe area 対応 */}
      <div
        className="px-5 pt-4 pb-4 border-t border-gray-100 bg-white max-w-2xl w-full mx-auto"
        style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
      >
        <button
          className="tap-btn w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl py-4 shadow-md shadow-green-100"
          onClick={onNext}
        >
          {isLast ? '結果を見る →' : '次の問題へ →'}
        </button>
      </div>
    </div>
  );
}
