import type { Question } from '../types';

const GITHUB_TOKEN_KEY = 'baseball_quiz_github_token';
const GITHUB_BRANCH_KEY = 'baseball_quiz_github_branch';

export const REPO_OWNER = 'sj-tomi';
export const REPO_NAME = 'baseball-quiz';
const QUESTIONS_FILE = 'src/data/defaultQuestions.ts';
const APP_FILE = 'src/App.tsx';

// UTF-8文字列をBase64エンコード（日本語対応）
function toBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

// Base64をUTF-8文字列にデコード
function fromBase64(b64: string): string {
  const binary = atob(b64.replace(/\n/g, ''));
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function generateQuestionsTs(questions: Question[]): string {
  const json = JSON.stringify(questions, null, 2);
  return `import type { Question } from '../types';\n\nexport const defaultQuestions: Question[] = ${json};\n`;
}

export function getGithubToken(): string {
  return localStorage.getItem(GITHUB_TOKEN_KEY) ?? '';
}

export function saveGithubToken(token: string): void {
  if (token) {
    localStorage.setItem(GITHUB_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(GITHUB_TOKEN_KEY);
  }
}

export function getGithubBranch(): string {
  return localStorage.getItem(GITHUB_BRANCH_KEY) ?? 'main';
}

export function saveGithubBranch(branch: string): void {
  localStorage.setItem(GITHUB_BRANCH_KEY, branch || 'main');
}

interface FileData {
  sha: string;
  content: string;
}

async function getFileData(token: string, branch: string, path: string): Promise<FileData> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { message?: string };
    throw new Error(err.message ?? `ファイル取得失敗: ${path}`);
  }
  const data = await res.json() as { sha: string; content: string };
  return { sha: data.sha, content: fromBase64(data.content) };
}

async function putFile(
  token: string,
  branch: string,
  path: string,
  content: string,
  sha: string,
  message: string
): Promise<void> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, content: toBase64(content), sha, branch }),
    }
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { message?: string };
    throw new Error(err.message ?? `ファイル更新失敗: ${path}`);
  }
}

export async function syncQuestionsToGitHub(
  questions: Question[],
  token: string,
  branch: string
): Promise<void> {
  // 両ファイルを並列取得
  const [questionsFile, appFile] = await Promise.all([
    getFileData(token, branch, QUESTIONS_FILE),
    getFileData(token, branch, APP_FILE),
  ]);

  const newVersion = String(Date.now());
  const newQuestionsContent = generateQuestionsTs(questions);
  const newAppContent = appFile.content.replace(
    /const QUESTIONS_VERSION = '[^']*'/,
    `const QUESTIONS_VERSION = '${newVersion}'`
  );

  // questions更新 → App.tsx更新（直列：コンフリクト回避）
  await putFile(token, branch, QUESTIONS_FILE, newQuestionsContent, questionsFile.sha, '管理画面から問題を更新');
  if (newAppContent !== appFile.content) {
    // App.tsx更新後のSHAを取得してからPUT
    const updatedApp = await getFileData(token, branch, APP_FILE);
    await putFile(token, branch, APP_FILE, newAppContent, updatedApp.sha, `QUESTIONS_VERSIONを${newVersion}に更新`);
  }
}
