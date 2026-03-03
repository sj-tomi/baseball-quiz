import type { DiagramConfig } from '../types';

// SVG座標系: viewBox="0 0 200 195"
// Home(100,172) → 1B(168,104) → 2B(100,36) → 3B(32,104) → Home
// 各辺の長さ = 68√2 ≈ 96 px
const COORDS: Record<string, { x: number; y: number }> = {
  home:    { x: 100, y: 172 },
  '1':     { x: 168, y: 104 },
  '2':     { x: 100, y:  36 },
  '3':     { x:  32, y: 104 },
  pitcher: { x: 100, y: 108 },
  ss:      { x:  66, y:  78 },
  '2b':    { x: 134, y:  78 },
  lf:      { x:  20, y:  32 },
  cf:      { x: 100, y:  12 },
  rf:      { x: 180, y:  32 },
};

function getCoord(pos: string | number) {
  return COORDS[String(pos)] ?? { x: 100, y: 100 };
}

// ランナーアイコンのオフセット（塁ごとに見やすい位置へ）
const RUNNER_OFFSET: Record<number, { x: number; y: number }> = {
  1: { x: 17, y: -9 },
  2: { x:  0, y: -18 },
  3: { x: -17, y: -9 },
};

const BASE_HALF = 7; // 塁の半サイズ（px）

export default function FieldDiagram({ runners = [], arrows = [] }: DiagramConfig) {
  const runnerSet = new Set(runners);

  return (
    <svg
      viewBox="0 0 200 195"
      className="w-44 mx-auto block"
      role="img"
      aria-label="野球フィールド図"
    >
      <defs>
        {arrows.map((a, i) => {
          const color = a.color ?? '#fbbf24';
          return (
            <marker
              key={i}
              id={`arr-${i}`}
              markerWidth="7"
              markerHeight="7"
              refX="5.5"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L0,7 L7,3.5 z" fill={color} />
            </marker>
          );
        })}
      </defs>

      {/* 芝生背景 */}
      <rect width="200" height="195" fill="#1d5c38" rx="6" />

      {/* ファウルライン */}
      <line x1="100" y1="172" x2="0"   y2="72" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <line x1="100" y1="172" x2="200" y2="72" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

      {/* 外野フェンス弧 */}
      <path d="M 0 72 Q 100 -10 200 72" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />

      {/* 内野土 */}
      <polygon
        points="168,104 100,36 32,104 100,172"
        fill="rgba(175,125,65,0.38)"
      />

      {/* マウンド */}
      <circle cx="100" cy="108" r="8" fill="rgba(155,105,55,0.55)" />

      {/* 送球矢印 */}
      {arrows.map((a, i) => {
        const from = getCoord(a.from);
        const to   = getCoord(a.to);
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.hypot(dx, dy);
        if (len === 0) return null;
        const nx = dx / len, ny = dy / len;
        const color = a.color ?? '#fbbf24';
        return (
          <line
            key={i}
            x1={from.x + nx * 14} y1={from.y + ny * 14}
            x2={to.x   - nx * 15} y2={to.y   - ny * 15}
            stroke={color} strokeWidth="2.5" strokeDasharray="5 2.5"
            markerEnd={`url(#arr-${i})`}
          />
        );
      })}

      {/* 1〜3塁 */}
      {([1, 2, 3] as const).map(b => {
        const { x, y } = getCoord(b);
        const hasR = runnerSet.has(b);
        const S = BASE_HALF;
        const ro = RUNNER_OFFSET[b];
        return (
          <g key={b}>
            {/* ランナーがいるとき: 橙色のグロー */}
            {hasR && (
              <rect
                x={x - S - 3} y={y - S - 3}
                width={(S + 3) * 2} height={(S + 3) * 2}
                fill="#f59e0b" opacity="0.5"
                transform={`rotate(45,${x},${y})`}
              />
            )}
            {/* 塁 */}
            <rect
              x={x - S} y={y - S} width={S * 2} height={S * 2}
              fill={hasR ? '#fde68a' : 'white'}
              stroke={hasR ? '#f59e0b' : '#bbb'} strokeWidth="1"
              transform={`rotate(45,${x},${y})`}
            />
            {/* ランナーアイコン（小円） */}
            {hasR && (
              <circle
                cx={x + ro.x} cy={y + ro.y} r={6}
                fill="#f59e0b" stroke="white" strokeWidth="1.5"
              />
            )}
          </g>
        );
      })}

      {/* ホームプレート（五角形） */}
      <polygon
        points="100,180 92,172 92,162 108,162 108,172"
        fill="white" stroke="#bbb" strokeWidth="0.5"
      />

      {/* 塁番号ラベル */}
      <text x="184" y="108" fill="rgba(255,255,255,0.75)" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
      <text x="100" y="24"  fill="rgba(255,255,255,0.75)" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
      <text x="16"  y="108" fill="rgba(255,255,255,0.75)" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
      <text x="100" y="193" fill="rgba(255,255,255,0.45)" fontSize="9"  textAnchor="middle">本</text>
    </svg>
  );
}
