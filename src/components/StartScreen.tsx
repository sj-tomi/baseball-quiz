interface StartScreenProps {
  onStart: () => void;
  onAdmin: () => void;
  totalQuestions: number;
}

export default function StartScreen({ onStart, onAdmin, totalQuestions }: StartScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 px-6 pt-16 pb-12 flex flex-col items-center text-center">
        <div className="text-7xl mb-5">⚾</div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
          野球クイズ
        </h1>
        <p className="mt-2 text-green-200 text-sm font-medium">
          JSBB <ruby>学童部<rt>がくどうぶ</rt></ruby> 公式ルール
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-7 flex flex-col gap-4 max-w-xl w-full mx-auto">
        {/* Info cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: '📋', label: '全', value: `${Math.min(totalQuestions, 20)}問`, sub: 'ランダム出題' },
            { icon: '🏆', label: '', value: '4択 / ○×', sub: '2形式' },
            { icon: '📖', label: '', value: '解説付き', sub: '全問ていねい' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-3 text-center border border-gray-100">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-sm font-bold text-gray-800">{item.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Topics */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">出題カテゴリ</p>
          <div className="flex flex-col gap-2">
            {[
              { icon: '📏', label: 'ルール・基本知識', color: 'bg-blue-100 text-blue-700' },
              { icon: '⚡', label: '律例（インフィールドフライ等）', color: 'bg-purple-100 text-purple-700' },
              { icon: '🎯', label: 'サイン・戦術', color: 'bg-orange-100 text-orange-700' },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.color}`}>{t.icon} {t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Start button */}
        <button
          className="tap-btn w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl py-4 shadow-lg shadow-green-200 mt-1"
          onClick={onStart}
        >
          ⚾ スタート
        </button>

        {totalQuestions < 20 && (
          <p className="text-center text-xs text-orange-500">
            ※ 現在{totalQuestions}問（20問未満のため全問出題）
          </p>
        )}
      </div>

      {/* Admin link */}
      <div className="text-center pb-8">
        <button
          className="text-gray-300 text-xs hover:text-gray-500 transition-colors"
          onClick={onAdmin}
        >
          <ruby>管理画面<rt>かんりがめん</rt></ruby>
        </button>
      </div>
    </div>
  );
}
