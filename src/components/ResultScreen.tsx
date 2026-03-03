interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
  onHome: () => void;
}

function getRank(score: number, total: number) {
  const pct = score / total;
  if (pct >= 0.9) return { label: 'エース級', emoji: '🏆', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200' };
  if (pct >= 0.7) return { label: 'レギュラー', emoji: '⭐', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' };
  if (pct >= 0.5) return { label: 'ベンチ入り', emoji: '📋', color: 'text-green-600', bg: 'bg-green-50 border-green-200' };
  return { label: 'もっと練習！', emoji: '⚾', color: 'text-gray-600', bg: 'bg-gray-50 border-gray-200' };
}

export default function ResultScreen({ score, total, onRestart, onHome }: ResultScreenProps) {
  const rank = getRank(score, total);
  const pct = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 px-5 pt-12 pb-10 flex flex-col items-center text-center">
        <p className="text-green-200 text-sm font-medium mb-4">クイズ終了！</p>
        <div className="text-6xl mb-3">{rank.emoji}</div>
        <div className={`inline-flex items-center px-5 py-1.5 rounded-full border font-bold text-lg ${rank.color} ${rank.bg}`}>
          {rank.label}
        </div>
      </div>

      {/* Score */}
      <div className="px-5 py-6 max-w-xl w-full mx-auto flex flex-col gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
          <p className="text-xs text-gray-400 font-medium mb-2">スコア</p>
          <div className="flex items-end justify-center gap-2 mb-3">
            <span className="text-6xl font-extrabold text-gray-900">{score}</span>
            <span className="text-2xl text-gray-400 mb-2">/ {total}</span>
          </div>
          <p className="text-gray-500 text-base font-semibold mb-4">{pct}% 正解</p>
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div
              className="h-3 rounded-full transition-all duration-700 bg-green-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Message */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 text-sm text-gray-600 leading-relaxed text-center">
          {score === total
            ? '満点達成！JSBB公式ルールを完璧に理解しています🎉'
            : score >= total * 0.7
              ? 'よくできました！間違えた問題を復習してさらに上を目指そう。'
              : 'もう一度挑戦してみよう！ルールをしっかり覚えることが大切です。'}
        </div>

        <button
          className="tap-btn w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl py-4 shadow-md shadow-green-100"
          onClick={onRestart}
        >
          ⚾ もう一度挑戦する
        </button>
        <button
          className="tap-btn w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold text-base rounded-2xl py-4 hover:bg-gray-50"
          onClick={onHome}
        >
          ホームに戻る
        </button>
      </div>
    </div>
  );
}
