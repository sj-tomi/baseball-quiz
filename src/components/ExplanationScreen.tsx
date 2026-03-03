import type { Question } from '../types';

interface ExplanationScreenProps {
  question: Question;
  isCorrect: boolean;
  selectedIndex: number;
  isLast: boolean;
  onNext: () => void;
}

export default function ExplanationScreen({
  question,
  isCorrect,
  selectedIndex,
  isLast,
  onNext,
}: ExplanationScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Result banner */}
      <div className={`px-4 py-5 flex flex-col items-center ${isCorrect ? 'bg-green-600' : 'bg-red-500'}`}>
        <div className="text-4xl mb-1">{isCorrect ? '⭕' : '❌'}</div>
        <p className="text-white font-bold text-xl">
          {isCorrect ? (
            <><ruby>正解<rt>せいかい</rt></ruby>！</>
          ) : (
            <><ruby>不正解<rt>ふせいかい</rt></ruby>…</>
          )}
        </p>
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col gap-4 overflow-y-auto">
        {/* Selected answer */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">
            あなたの<ruby>答<rt>こた</rt></ruby>え
          </p>
          <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
            {question.choices[selectedIndex]}
          </p>
          {!isCorrect && (
            <>
              <p className="text-xs text-gray-500 mt-2 mb-1">
                <ruby>正解<rt>せいかい</rt></ruby>
              </p>
              <p className="font-bold text-green-700">
                {question.choices[question.correctIndex]}
              </p>
            </>
          )}
        </div>

        {/* Explanation */}
        <div className="bg-yellow-50 rounded-xl shadow-sm p-4 border border-yellow-200">
          <p className="text-xs font-bold text-yellow-700 mb-2">
            📖 <ruby>解説<rt>かいせつ</rt></ruby>
          </p>
          <div
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: question.explanation }}
          />
          <p className="text-xs text-gray-400 mt-3 border-t border-yellow-200 pt-2">
            <ruby>出典<rt>しゅってん</rt></ruby>：{question.source}
            {question.year && (
              <span className="ml-1 text-gray-400">（{question.year}<ruby>年<rt>ねん</rt></ruby><ruby>版<rt>ばん</rt></ruby>）</span>
            )}
          </p>
        </div>
      </div>

      {/* Next button */}
      <div className="px-4 py-4 bg-white border-t border-gray-100 safe-area-bottom">
        <button
          className="quiz-btn w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-base rounded-xl py-4 shadow-md"
          onClick={onNext}
        >
          {isLast ? (
            <><ruby>結果<rt>けっか</rt></ruby>を<ruby>見<rt>み</rt></ruby>る ▶</>
          ) : (
            <>つぎの<ruby>問題<rt>もんだい</rt></ruby>へ ▶</>
          )}
        </button>
      </div>
    </div>
  );
}
