import { useState } from 'react';
import type { Question, QuestionType, Category } from '../types';

const DEFAULT_PASSWORD_HASH_KEY = 'baseball_quiz_admin_pw';
const SESSION_AUTH_KEY = 'baseball_quiz_admin_auth';

// Simple hash for admin password (SHA-256 equivalent via btoa)
function simpleHash(str: string): string {
  // Basic obfuscation – not crypto-grade but sufficient for local-only admin
  return btoa(encodeURIComponent(str + 'jsbb_salt_2026'));
}

interface AdminScreenProps {
  questions: Question[];
  onQuestionsChange: (questions: Question[]) => void;
  onBack: () => void;
}

type AdminView = 'auth' | 'list' | 'form';

const CATEGORIES: Category[] = ['ルール・基本知識', '律例', 'サイン・戦術'];
const TYPES: QuestionType[] = ['4択', '○×'];

const emptyQuestion = (): Omit<Question, 'id'> => ({
  type: '4択',
  category: 'ルール・基本知識',
  question: '',
  choices: ['', '', '', ''],
  correctIndex: 0,
  explanation: '',
  source: '',
  year: new Date().getFullYear(),
});

export default function AdminScreen({ questions, onQuestionsChange, onBack }: AdminScreenProps) {
  const [view, setView] = useState<AdminView>(() => {
    return sessionStorage.getItem(SESSION_AUTH_KEY) === 'ok' ? 'list' : 'auth';
  });
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [formData, setFormData] = useState<Omit<Question, 'id'>>(emptyQuestion());
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [showSetupPassword, setShowSetupPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // ---- Auth ----
  const handleLogin = () => {
    const stored = localStorage.getItem(DEFAULT_PASSWORD_HASH_KEY);
    if (!stored) {
      // First time: prompt setup
      setShowSetupPassword(true);
      return;
    }
    if (simpleHash(password) === stored) {
      sessionStorage.setItem(SESSION_AUTH_KEY, 'ok');
      setView('list');
      setAuthError('');
    } else {
      setAuthError('パスワードが違います');
    }
  };

  const handleSetupPassword = () => {
    if (newPassword.length < 4) {
      setPasswordError('4文字以上で設定してください');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('パスワードが一致しません');
      return;
    }
    localStorage.setItem(DEFAULT_PASSWORD_HASH_KEY, simpleHash(newPassword));
    sessionStorage.setItem(SESSION_AUTH_KEY, 'ok');
    setShowSetupPassword(false);
    setView('list');
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    setView('auth');
    setPassword('');
  };

  // ---- Form ----
  const openNew = () => {
    setEditingQuestion(null);
    setFormData(emptyQuestion());
    setView('form');
  };

  const openEdit = (q: Question) => {
    setEditingQuestion(q);
    setFormData({ ...q });
    setView('form');
  };

  const handleTypeChange = (type: QuestionType) => {
    setFormData((prev) => ({
      ...prev,
      type,
      choices: type === '○×' ? ['○', '×'] : ['', '', '', ''],
      correctIndex: 0,
    }));
  };

  const handleChoiceChange = (i: number, value: string) => {
    setFormData((prev) => {
      const choices = [...prev.choices];
      choices[i] = value;
      return { ...prev, choices };
    });
  };

  const handleSave = () => {
    if (!formData.question.trim()) { alert('問題文を入力してください'); return; }
    if (!formData.source.trim()) { alert('出典を入力してください'); return; }
    if (formData.type === '4択' && formData.choices.some((c) => !c.trim())) {
      alert('選択肢をすべて入力してください'); return;
    }

    if (editingQuestion) {
      onQuestionsChange(
        questions.map((q) =>
          q.id === editingQuestion.id ? { ...formData, id: editingQuestion.id } : q
        )
      );
    } else {
      const id = `q_${Date.now()}`;
      onQuestionsChange([...questions, { ...formData, id }]);
    }
    setView('list');
  };

  const handleDelete = (id: string) => {
    onQuestionsChange(questions.filter((q) => q.id !== id));
    setDeleteConfirm(null);
  };

  // ==================== RENDER ====================

  if (view === 'auth') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center mb-6">
            <div className="text-3xl mb-2">🔒</div>
            <h2 className="text-xl font-bold text-gray-800">
              <ruby>管理画面<rt>かんりがめん</rt></ruby>
            </h2>
            <p className="text-gray-500 text-sm mt-1">パスワードを入力してください</p>
          </div>

          {showSetupPassword ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-blue-700 bg-blue-50 rounded-lg p-3">
                初回ログインです。管理パスワードを設定してください。
              </p>
              <input
                type="password"
                placeholder="新しいパスワード（4文字以上）"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
              />
              <input
                type="password"
                placeholder="パスワード確認"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
              />
              {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
              <button
                className="quiz-btn w-full bg-green-600 text-white font-bold rounded-xl py-3"
                onClick={handleSetupPassword}
              >
                パスワードを設定する
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full"
              />
              {authError && <p className="text-red-500 text-xs">{authError}</p>}
              <button
                className="quiz-btn w-full bg-green-600 text-white font-bold rounded-xl py-3"
                onClick={handleLogin}
              >
                ログイン
              </button>
            </div>
          )}

          <button
            className="mt-4 w-full text-gray-400 text-sm underline"
            onClick={onBack}
          >
            ← <ruby>戻<rt>もど</rt></ruby>る
          </button>
        </div>
      </div>
    );
  }

  if (view === 'form') {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="bg-green-700 px-4 py-4 flex items-center gap-3">
          <button className="text-white text-sm" onClick={() => setView('list')}>← 戻る</button>
          <h2 className="text-white font-bold text-base flex-1 text-center">
            {editingQuestion ? '問題を編集' : '問題を追加'}
          </h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
          {/* Type */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">問題形式</label>
            <div className="flex gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  className={`flex-1 py-2 rounded-lg border font-medium text-sm ${formData.type === t ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300'}`}
                  onClick={() => handleTypeChange(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">カテゴリ</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value as Category }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Question text */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">
              問題文（&lt;ruby&gt;タグでふりがな可）
            </label>
            <textarea
              value={formData.question}
              onChange={(e) => setFormData((prev) => ({ ...prev, question: e.target.value }))}
              rows={3}
              placeholder="問題文を入力..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Choices */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">選択肢</label>
            {formData.type === '○×' ? (
              <p className="text-sm text-gray-500">○×形式: 選択肢は固定（○ / ×）</p>
            ) : (
              <div className="flex flex-col gap-2">
                {formData.choices.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      className={`w-7 h-7 flex-shrink-0 rounded-full border-2 text-xs font-bold ${formData.correctIndex === i ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-400 border-gray-300'}`}
                      onClick={() => setFormData((prev) => ({ ...prev, correctIndex: i }))}
                      title="正解に設定"
                    >
                      {i + 1}
                    </button>
                    <input
                      value={c}
                      onChange={(e) => handleChoiceChange(i, e.target.value)}
                      placeholder={`選択肢 ${i + 1}`}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                ))}
                <p className="text-xs text-gray-500">番号をタップして正解を選択（現在: {formData.correctIndex + 1}番）</p>
              </div>
            )}
          </div>

          {/* Correct index for ○× */}
          {formData.type === '○×' && (
            <div>
              <label className="text-xs text-gray-600 font-bold mb-1 block">正解</label>
              <div className="flex gap-2">
                {['○', '×'].map((c, i) => (
                  <button
                    key={c}
                    className={`flex-1 py-2 rounded-lg border font-bold text-lg ${formData.correctIndex === i ? (i === 0 ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500') : 'bg-white text-gray-400 border-gray-300'}`}
                    onClick={() => setFormData((prev) => ({ ...prev, correctIndex: i }))}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Explanation */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">
              解説（&lt;ruby&gt;タグでふりがな可）
            </label>
            <textarea
              value={formData.explanation}
              onChange={(e) => setFormData((prev) => ({ ...prev, explanation: e.target.value }))}
              rows={4}
              placeholder="解説を入力..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Source */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">出典（必須）</label>
            <input
              value={formData.source}
              onChange={(e) => setFormData((prev) => ({ ...prev, source: e.target.value }))}
              placeholder="例: JSBB公式ルール2026年版"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Year */}
          <div>
            <label className="text-xs text-gray-600 font-bold mb-1 block">導入年</label>
            <input
              type="number"
              value={formData.year ?? ''}
              onChange={(e) => setFormData((prev) => ({ ...prev, year: Number(e.target.value) || undefined }))}
              placeholder="例: 2026"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Save button */}
          <button
            className="quiz-btn w-full bg-green-600 text-white font-bold text-base rounded-xl py-4 shadow-md"
            onClick={handleSave}
          >
            {editingQuestion ? '更新する' : '追加する'}
          </button>
        </div>
      </div>
    );
  }

  // ---- List view ----
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-green-700 px-4 py-4 flex items-center gap-3">
        <button className="text-white text-sm" onClick={onBack}>← ホーム</button>
        <h2 className="text-white font-bold text-base flex-1 text-center">
          <ruby>管理画面<rt>かんりがめん</rt></ruby>
        </h2>
        <button className="text-green-200 text-xs" onClick={handleLogout}>ログアウト</button>
      </div>

      <div className="px-4 py-3 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          <ruby>問題数<rt>もんだいすう</rt></ruby>：<strong>{questions.length}</strong>問
          {questions.length < 20 && (
            <span className="text-orange-500 text-xs ml-2">（20問以上推奨）</span>
          )}
        </p>
        <button
          className="quiz-btn bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow"
          onClick={openNew}
        >
          ＋ 追加
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8 flex flex-col gap-3">
        {questions.map((q) => (
          <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                {q.type}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {q.category}
              </span>
              {q.year && (
                <span className="text-xs text-gray-400 ml-auto">{q.year}年</span>
              )}
            </div>
            <div
              className="text-sm text-gray-800 line-clamp-2 mb-3"
              dangerouslySetInnerHTML={{
                __html: q.question.replace(/<[^>]+>/g, ''), // strip tags for preview
              }}
            />
            <p className="text-xs text-gray-400 mb-3 truncate">出典: {q.source}</p>

            <div className="flex gap-2">
              <button
                className="flex-1 py-2 text-sm font-medium text-green-700 border border-green-300 rounded-lg hover:bg-green-50"
                onClick={() => openEdit(q)}
              >
                編集
              </button>
              {deleteConfirm === q.id ? (
                <>
                  <button
                    className="flex-1 py-2 text-sm font-bold text-white bg-red-500 rounded-lg"
                    onClick={() => handleDelete(q.id)}
                  >
                    削除確認
                  </button>
                  <button
                    className="py-2 px-3 text-sm text-gray-500 border border-gray-300 rounded-lg"
                    onClick={() => setDeleteConfirm(null)}
                  >
                    キャンセル
                  </button>
                </>
              ) : (
                <button
                  className="py-2 px-4 text-sm font-medium text-red-500 border border-red-200 rounded-lg hover:bg-red-50"
                  onClick={() => setDeleteConfirm(q.id)}
                >
                  削除
                </button>
              )}
            </div>
          </div>
        ))}

        {questions.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-2">📋</p>
            <p className="text-sm">問題がありません</p>
            <p className="text-xs mt-1">「＋ 追加」ボタンから追加できます</p>
          </div>
        )}
      </div>
    </div>
  );
}
