import { useState } from 'react';
import type { Question, QuestionType, Category } from '../types';

// パスワードは固定
const ADMIN_PASSWORD = 'kndreams23';
const SESSION_AUTH_KEY = 'baseball_quiz_admin_auth';

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
  const [view, setView] = useState<AdminView>(() =>
    sessionStorage.getItem(SESSION_AUTH_KEY) === 'ok' ? 'list' : 'auth'
  );
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [formData, setFormData] = useState<Omit<Question, 'id'>>(emptyQuestion());
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_AUTH_KEY, 'ok');
      setView('list');
      setAuthError('');
    } else {
      setAuthError('パスワードが違います');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_AUTH_KEY);
    setView('auth');
    setPassword('');
  };

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
    setFormData(prev => ({
      ...prev,
      type,
      choices: type === '○×' ? ['○', '×'] : ['', '', '', ''],
      correctIndex: 0,
    }));
  };

  const handleChoiceChange = (i: number, value: string) => {
    setFormData(prev => {
      const choices = [...prev.choices];
      choices[i] = value;
      return { ...prev, choices };
    });
  };

  const handleSave = () => {
    if (!formData.question.trim()) { alert('問題文を入力してください'); return; }
    if (!formData.source.trim()) { alert('出典を入力してください'); return; }
    if (formData.type === '4択' && formData.choices.some(c => !c.trim())) {
      alert('選択肢をすべて入力してください'); return;
    }
    if (editingQuestion) {
      onQuestionsChange(questions.map(q => q.id === editingQuestion.id ? { ...formData, id: editingQuestion.id } : q));
    } else {
      onQuestionsChange([...questions, { ...formData, id: `q_${Date.now()}` }]);
    }
    setView('list');
  };

  const handleDelete = (id: string) => {
    onQuestionsChange(questions.filter(q => q.id !== id));
    setDeleteConfirm(null);
  };

  // ── Auth ──
  if (view === 'auth') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-5">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔒</div>
            <h2 className="text-xl font-bold text-gray-800">管理画面</h2>
            <p className="text-gray-400 text-sm mt-1">パスワードを入力してください</p>
          </div>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {authError && <p className="text-red-500 text-xs mb-3">{authError}</p>}
          <button
            className="tap-btn w-full bg-green-600 text-white font-bold rounded-xl py-3 text-sm"
            onClick={handleLogin}
          >
            ログイン
          </button>
          <button className="mt-4 w-full text-gray-400 text-sm hover:text-gray-600" onClick={onBack}>
            ← ホームに戻る
          </button>
        </div>
      </div>
    );
  }

  // ── Form ──
  if (view === 'form') {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center gap-3">
          <button className="text-gray-500 text-sm hover:text-gray-800" onClick={() => setView('list')}>← 戻る</button>
          <h2 className="font-bold text-gray-800 flex-1 text-center text-base">
            {editingQuestion ? '問題を編集' : '問題を追加'}
          </h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 max-w-xl w-full mx-auto flex flex-col gap-4">
          {/* Type */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">問題形式</label>
            <div className="flex gap-2">
              {TYPES.map(t => (
                <button key={t}
                  className={`flex-1 py-2.5 rounded-xl border font-medium text-sm transition-all
                    ${formData.type === t ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                  onClick={() => handleTypeChange(t)}>{t}</button>
              ))}
            </div>
          </div>
          {/* Category */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">カテゴリ</label>
            <select value={formData.category}
              onChange={e => setFormData(prev => ({ ...prev, category: e.target.value as Category }))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          {/* Question */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">問題文（&lt;ruby&gt;タグでふりがな可）</label>
            <textarea value={formData.question} onChange={e => setFormData(prev => ({ ...prev, question: e.target.value }))}
              rows={3} placeholder="問題文を入力..."
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none" />
          </div>
          {/* Choices */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">選択肢</label>
            {formData.type === '○×' ? (
              <div>
                <p className="text-xs text-gray-400 mb-2">○× 形式：選択肢は固定（○ / ×）</p>
                <div className="flex gap-2">
                  {['○', '×'].map((c, i) => (
                    <button key={c}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-xl transition-all
                        ${formData.correctIndex === i
                          ? (i === 0 ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500')
                          : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setFormData(prev => ({ ...prev, correctIndex: i }))}>{c}</button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">正解をタップして選択</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {formData.choices.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 text-xs font-bold transition-all
                        ${formData.correctIndex === i ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-400 border-gray-200'}`}
                      onClick={() => setFormData(prev => ({ ...prev, correctIndex: i }))}>{i + 1}</button>
                    <input value={c} onChange={e => handleChoiceChange(i, e.target.value)}
                      placeholder={`選択肢 ${i + 1}`}
                      className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
                  </div>
                ))}
                <p className="text-xs text-gray-400">番号をタップして正解を選択（現在：{formData.correctIndex + 1}番）</p>
              </div>
            )}
          </div>
          {/* Explanation */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">解説</label>
            <textarea value={formData.explanation} onChange={e => setFormData(prev => ({ ...prev, explanation: e.target.value }))}
              rows={4} placeholder="解説を入力..."
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none" />
          </div>
          {/* Source */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">出典（必須）</label>
            <input value={formData.source} onChange={e => setFormData(prev => ({ ...prev, source: e.target.value }))}
              placeholder="例: JSBB公式ルール2026年版"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          {/* Year */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">導入年</label>
            <input type="number" value={formData.year ?? ''} onChange={e => setFormData(prev => ({ ...prev, year: Number(e.target.value) || undefined }))}
              placeholder="例: 2026"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <button className="tap-btn w-full bg-green-600 text-white font-bold text-base rounded-2xl py-4 shadow-md shadow-green-100" onClick={handleSave}>
            {editingQuestion ? '更新する' : '追加する'}
          </button>
        </div>
      </div>
    );
  }

  // ── List ──
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center gap-3">
        <button className="text-gray-500 text-sm hover:text-gray-800" onClick={onBack}>← ホーム</button>
        <h2 className="font-bold text-gray-800 flex-1 text-center text-base">管理画面</h2>
        <button className="text-gray-400 text-xs hover:text-gray-600" onClick={handleLogout}>ログアウト</button>
      </div>

      <div className="px-5 py-3 flex justify-between items-center max-w-xl w-full mx-auto">
        <p className="text-sm text-gray-500">
          問題数：<strong className="text-gray-800">{questions.length}</strong>問
          {questions.length < 20 && <span className="text-orange-500 text-xs ml-2">（20問以上推奨）</span>}
        </p>
        <button className="tap-btn bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-sm" onClick={openNew}>
          ＋ 追加
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-8 max-w-xl w-full mx-auto flex flex-col gap-3">
        {questions.map(q => (
          <div key={q.id} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{q.type}</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{q.category}</span>
              {q.year && <span className="text-xs text-gray-400 ml-auto">{q.year}年</span>}
            </div>
            <p className="text-sm text-gray-800 line-clamp-2 mb-2"
              dangerouslySetInnerHTML={{ __html: q.question.replace(/<[^>]+>/g, '') }} />
            <p className="text-xs text-gray-400 mb-3 truncate">出典: {q.source}</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 text-sm font-medium text-green-700 border border-green-200 rounded-xl hover:bg-green-50 transition-colors"
                onClick={() => openEdit(q)}>編集</button>
              {deleteConfirm === q.id ? (
                <>
                  <button className="flex-1 py-2 text-sm font-bold text-white bg-red-500 rounded-xl" onClick={() => handleDelete(q.id)}>削除確認</button>
                  <button className="py-2 px-3 text-sm text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50" onClick={() => setDeleteConfirm(null)}>キャンセル</button>
                </>
              ) : (
                <button className="py-2 px-4 text-sm font-medium text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
                  onClick={() => setDeleteConfirm(q.id)}>削除</button>
              )}
            </div>
          </div>
        ))}
        {questions.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-2">📋</p>
            <p className="text-sm">問題がありません</p>
          </div>
        )}
      </div>
    </div>
  );
}
