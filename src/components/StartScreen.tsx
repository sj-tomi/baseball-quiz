interface StartScreenProps {
  onStart: () => void;
  onAdmin: () => void;
  totalQuestions: number;
}

export default function StartScreen({ onStart, onAdmin, totalQuestions }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-green-800 to-green-600 px-4 py-8">
      {/* Header */}
      <div className="flex flex-col items-center mt-8">
        <div className="text-6xl mb-4">⚾</div>
        <h1 className="text-3xl font-bold text-white text-center leading-tight drop-shadow-lg">
          <ruby>野球<rt className="text-green-200 text-xs">やきゅう</rt></ruby>
          <ruby>クイズ<rt className="text-green-200 text-xs">くいず</rt></ruby>
        </h1>
        <p className="text-green-200 text-sm mt-2 text-center">
          JSBB<ruby>学童部<rt className="text-green-300 text-xs">がくどうぶ</rt></ruby>
          <ruby>公式<rt className="text-green-300 text-xs">こうしき</rt></ruby>ルール
        </p>
      </div>

      {/* Main card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            <ruby>全国大会<rt>ぜんこくたいかい</rt></ruby>レベルの
            <ruby>問題<rt>もんだい</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>しよう！
          </p>
          <p className="text-gray-500 text-xs mt-1">
            <ruby>問題数<rt>もんだいすう</rt></ruby>：
            {totalQuestions >= 20 ? '20問' : `${totalQuestions}問`}
            {totalQuestions < 20 && (
              <span className="text-orange-500 ml-1">（20問未満のためランダム出題）</span>
            )}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-600 bg-green-50 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>4<ruby>択<rt>たく</rt></ruby>・○×の2<ruby>種類<rt>しゅるい</rt></ruby>の<ruby>問題形式<rt>もんだいけいしき</rt></ruby></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span><ruby>正解後<rt>せいかいご</rt></ruby>に<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>解説<rt>かいせつ</rt></ruby></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>JSBB2026<ruby>年<rt>ねん</rt></ruby><ruby>最新<rt>さいしん</rt></ruby>ルール<ruby>対応<rt>たいおう</rt></ruby></span>
          </div>
        </div>

        <button
          className="quiz-btn w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-lg rounded-xl py-4 shadow-md"
          onClick={onStart}
        >
          ⚾ <ruby>スタート<rt>すたーと</rt></ruby>
        </button>
      </div>

      {/* Admin link */}
      <div className="mb-4">
        <button
          className="text-green-200 text-xs underline underline-offset-2 opacity-70"
          onClick={onAdmin}
        >
          <ruby>管理画面<rt>かんりがめん</rt></ruby>
        </button>
      </div>
    </div>
  );
}
