interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
  onHome: () => void;
}

function getRank(score: number, total: number): { label: string; emoji: string; color: string } {
  const pct = score / total;
  if (pct >= 0.9) return { label: 'エース', emoji: '🏆', color: 'text-yellow-600' };
  if (pct >= 0.7) return { label: 'レギュラー', emoji: '⭐', color: 'text-blue-600' };
  if (pct >= 0.5) return { label: 'ベンチ入り', emoji: '📋', color: 'text-green-600' };
  return { label: 'もっと練習！', emoji: '⚾', color: 'text-gray-600' };
}

export default function ResultScreen({ score, total, onRestart, onHome }: ResultScreenProps) {
  const rank = getRank(score, total);
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-green-800 to-green-600 px-4 py-8">
      <div className="w-full max-w-sm flex flex-col items-center gap-6 mt-8">
        {/* Rank */}
        <div className="text-center">
          <div className="text-5xl mb-2">{rank.emoji}</div>
          <h2 className={`text-2xl font-bold ${rank.color} bg-white rounded-full px-6 py-1`}>
            {rank.label}
          </h2>
        </div>

        {/* Score card */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-6 text-center">
          <p className="text-gray-500 text-sm mb-1">
            <ruby>最終<rt>さいしゅう</rt></ruby>スコア
          </p>
          <div className="flex items-end justify-center gap-1 my-2">
            <span className="text-6xl font-bold text-green-700">{score}</span>
            <span className="text-2xl text-gray-400 mb-2">/ {total}</span>
          </div>
          <p className="text-gray-600 text-lg font-medium">{percentage}%<ruby>正解<rt>せいかい</rt></ruby></p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Message */}
        <div className="bg-white bg-opacity-20 rounded-xl px-4 py-3 text-center">
          <p className="text-white text-sm leading-relaxed">
            {score === total ? (
              <>
                <ruby>満点<rt>まんてん</rt></ruby><ruby>達成<rt>たっせい</rt></ruby>！<ruby>素晴<rt>すば</rt></ruby>らしい！<br />
                JSBB<ruby>公式<rt>こうしき</rt></ruby>ルールを<ruby>完璧<rt>かんぺき</rt></ruby>に<ruby>理解<rt>りかい</rt></ruby>しています。
              </>
            ) : score >= total * 0.7 ? (
              <>
                よくできました！<br />
                <ruby>間違<rt>まちが</rt></ruby>えた<ruby>問題<rt>もんだい</rt></ruby>を<ruby>復習<rt>ふくしゅう</rt></ruby>してさらに<ruby>上<rt>うえ</rt></ruby>を<ruby>目指<rt>めざ</rt></ruby>そう！
              </>
            ) : (
              <>
                もう<ruby>一度<rt>いちど</rt></ruby><ruby>挑戦<rt>ちょうせん</rt></ruby>してみよう！<br />
                ルールをしっかり<ruby>覚<rt>おぼ</rt></ruby>えることが<ruby>大切<rt>たいせつ</rt></ruby>！
              </>
            )}
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3">
          <button
            className="quiz-btn w-full bg-white text-green-700 font-bold text-base rounded-xl py-4 shadow-md hover:bg-green-50"
            onClick={onRestart}
          >
            ⚾ もう<ruby>一度<rt>いちど</rt></ruby><ruby>挑戦<rt>ちょうせん</rt></ruby>する
          </button>
          <button
            className="quiz-btn w-full bg-green-900 bg-opacity-50 text-white font-medium text-base rounded-xl py-4 border border-white border-opacity-30"
            onClick={onHome}
          >
            ホームに<ruby>戻<rt>もど</rt></ruby>る
          </button>
        </div>
      </div>
    </div>
  );
}
