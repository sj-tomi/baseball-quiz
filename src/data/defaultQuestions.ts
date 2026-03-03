import type { Question } from '../types';

// ふりがなのルール：小学校5年生以上で習う漢字、または中学以上の漢字にのみ付与
// 付与対象例: 制・限・規・禁・適・条・件・解・基・義・術・準・採・際・故・効・構・損・
//            態・退・断・提・程・統・導・独・任・破・費・備・評・報・防・暴・歴・確
//            宣(6年)・厳(6年)・源(6年)・裁(6年)・傷(6年)・除(6年)・推(6年)
//            塁・捕・審・妨・逸（中学以上）
// 付与しない例: 野・球・投・手・打・走・者・学・童・部・試・合・選・内・外・本・連・
//              続・完・飛・得・失・代・時・間・勝・負・安・全・回・攻・守

export const defaultQuestions: Question[] = [
  // ==================== ルール・基本知識 ====================
  {
    id: 'q1',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '学童部（4年生以上）の投手が1日に投球できるのは<ruby>最大<rt>さいだい</rt></ruby>何イニングまで？',
    choices: ['5イニング', '6イニング', '7イニング', '9イニング'],
    correctIndex: 2,
    explanation:
      'JSBBルールでは、4年生以上の学童部投手は1日7イニングまで投球<ruby>可能<rt>かのう</rt></ruby>。ただしタイブレーク直前のイニングを投げ切った投手に<ruby>限<rt>かぎ</rt></ruby>り<ruby>最大<rt>さいだい</rt></ruby>9イニングまで<ruby>認<rt>みと</rt></ruby>められる。3年生以下は1日5イニングまで。',
    source: 'JSBB連盟<ruby>適用<rt>てきよう</rt></ruby>ルール（公式サイト）',
  },
  {
    id: 'q2',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2022,
    question:
      '学童部の試合は7回<ruby>制<rt>せい</rt></ruby>である。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      '2022年の<ruby>改訂<rt>かいてい</rt></ruby>により、学童部の試合は6イニング<ruby>制<rt>せい</rt></ruby>・時間<ruby>制限<rt>せいげん</rt></ruby>1時間30分が<ruby>採用<rt>さいよう</rt></ruby>されている。7回<ruby>制<rt>せい</rt></ruby>ではない。',
    source: 'JSBB 令和4年度学童野球新ルール',
  },
  {
    id: 'q3',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2019,
    question:
      '学童部の投手が1日に投球できる球数の<ruby>上限<rt>じょうげん</rt></ruby>は？',
    choices: ['50球', '70球', '100球', '<ruby>制限<rt>せいげん</rt></ruby>なし'],
    correctIndex: 1,
    explanation:
      '2019年よりJSBBは学童部投手の1日の投球数を70球以内に<ruby>制限<rt>せいげん</rt></ruby>している。<ruby>障害<rt>しょうがい</rt></ruby>予防が目的。',
    source: 'JSBB 学童部投球数<ruby>制限<rt>せいげん</rt></ruby>（2019年<ruby>導入<rt>どうにゅう</rt></ruby>）',
  },
  {
    id: 'q4',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2026,
    question:
      '2026年から新たに<ruby>導入<rt>どうにゅう</rt></ruby>された投球数<ruby>制限<rt>せいげん</rt></ruby>はどれ？',
    choices: [
      '1試合50球以内',
      '連続2日間での登板<ruby>禁止<rt>きんし</rt></ruby>',
      '1週間210球以内（4年生以下は180球以内）',
      '1週間350球以内',
    ],
    correctIndex: 2,
    explanation:
      '2026年より学童部に1週間の投球数<ruby>制限<rt>せいげん</rt></ruby>が新規<ruby>導入<rt>どうにゅう</rt></ruby>。5年生以上は210球、4年生以下は180球が<ruby>上限<rt>じょうげん</rt></ruby>となった。',
    source: 'JSBB 2026年<ruby>競技者<rt>きょうぎしゃ</rt></ruby>必携<ruby>改訂<rt>かいてい</rt></ruby>',
  },
  {
    id: 'q5',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2025,
    question:
      '学童部では、2025年から一般用バットのうち打球部にウレタン等の<ruby>弾性体<rt>だんせいたい</rt></ruby>を取り付けたバットが<ruby>禁止<rt>きんし</rt></ruby>された。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '安全面を考慮し、2025年より学童部では一般用バットのうちウレタン・スポンジ等の<ruby>弾性体<rt>だんせいたい</rt></ruby>を打球部に取り付けたバットの使用が<ruby>禁止<rt>きんし</rt></ruby>。木製・金属製・カーボン製・<ruby>複合<rt>ふくごう</rt></ruby>バットは引き続き使用可能。',
    source: 'JSBB 全軟野連発第366-3号（令和5年12月20日）',
  },
  {
    id: 'q6',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2029,
    question:
      '2029年以降、バット使用<ruby>制限<rt>せいげん</rt></ruby>が拡大される対象は？',
    choices: [
      '学童部のみ',
      '<ruby>少年部<rt>しょうねんぶ</rt></ruby>（中学生）のみ',
      '学童部・<ruby>少年部<rt>しょうねんぶ</rt></ruby>の両方',
      '一般（大人）も含む全カテゴリ',
    ],
    correctIndex: 2,
    explanation:
      '2025年から学童部で始まったウレタン等<ruby>弾性体<rt>だんせいたい</rt></ruby>バットの<ruby>禁止<rt>きんし</rt></ruby>は、2029年から<ruby>少年部<rt>しょうねんぶ</rt></ruby>（中学生）にも拡大。2026〜2028年は移行期間。一般（大人）は規制対象外。',
    source: 'JSBB お知らせ「2029年以降の<ruby>少年部<rt>しょうねんぶ</rt></ruby>バット使用<ruby>制限<rt>せいげん</rt></ruby>について」（2025年12月15日）',
  },
  {
    id: 'q7',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '学童部では、金属バットにJSBBマークがついていなくても試合で使用できる。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      'JSBB<ruby>主催<rt>しゅさい</rt></ruby>の試合では、金属製または<ruby>接合<rt>せつごう</rt></ruby>バットは「JSBB」マークのついた<ruby>公認<rt>こうにん</rt></ruby>バットでなければならない。',
    source: 'JSBB公認用具<ruby>規定<rt>きてい</rt></ruby>',
  },
  {
    id: 'q8',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2027,
    question:
      '2027年から学童部で<ruby>禁止<rt>きんし</rt></ruby>されるのはどれ？',
    choices: [
      '同一試合での同一投手が2度登板すること',
      '同一試合での投手と<ruby>捕手<rt>ほしゅ</rt></ruby>の兼任',
      '<ruby>捕手<rt>ほしゅ</rt></ruby>が<ruby>塁<rt>るい</rt></ruby>間に送球すること',
      '投手がバッターとして出場すること',
    ],
    correctIndex: 1,
    explanation:
      '2027年から学童部では、同一試合中に投手が<ruby>捕手<rt>ほしゅ</rt></ruby>につくこと、<ruby>捕手<rt>ほしゅ</rt></ruby>が投手につくことが<ruby>禁止<rt>きんし</rt></ruby>される。ひじ・肩への負担軽減が目的。ただし他の守備位置を経由することは可能。',
    source: 'JSBB「2026年以降の学童部・<ruby>少年部<rt>しょうねんぶ</rt></ruby>の大会運営に係る変更について」（2026年2月3日）',
  },
  {
    id: 'q9',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '学童部の試合時間<ruby>制限<rt>せいげん</rt></ruby>は？',
    choices: ['1時間', '1時間15分', '1時間30分', '2時間'],
    correctIndex: 2,
    explanation:
      '学童部の公式試合は6イニング<ruby>制<rt>せい</rt></ruby>で、時間<ruby>制限<rt>せいげん</rt></ruby>は1時間30分。新しいイニングに入らないルールで試合を進行する。',
    source: 'JSBB 令和4年度ルール',
  },
  {
    id: 'q10',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '学童部の公式試合で使用する軟式ボールは何号？',
    choices: ['A号', 'B号', 'C号', 'J号'],
    correctIndex: 3,
    explanation:
      '学童部（小学生）ではJ号（ジュニア用）を使用。B号は<ruby>少年部<rt>しょうねんぶ</rt></ruby>（中学生）、C号は一般・高校生が使用する。',
    source: 'JSBB公認球<ruby>規定<rt>きてい</rt></ruby>',
  },
  {
    id: 'q11',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '3年生以下の投手が1日に投球できるのは<ruby>最大<rt>さいだい</rt></ruby>5イニングまでである。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      'JSBB<ruby>規則<rt>きそく</rt></ruby>では、3年生以下の投手の1日の投球<ruby>制限<rt>せいげん</rt></ruby>は5イニング。4年生以上の7イニングより少ない。球数も70球の<ruby>制限<rt>せいげん</rt></ruby>は共通。',
    source: 'JSBB連盟<ruby>適用<rt>てきよう</rt></ruby>ルール',
  },
  {
    id: 'q12',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '打者が四球（フォアボール）を選んで1塁へ進んだとき、1塁にランナーがいた場合どうなる？',
    choices: [
      'ランナーは1塁に残る',
      'ランナーは2塁へ進む（押し出し）',
      'ランナーはアウトになる',
      '打者は2塁へ進む',
    ],
    correctIndex: 1,
    explanation:
      '満塁でなくても、1塁にランナーがいるときに四球が出ると「押し出し」でランナーは強制的に2塁へ進む。フォースの<ruby>状態<rt>じょうたい</rt></ruby>が続く。満塁なら3塁ランナーも本塁へ進んで1点が入る。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q13',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      'フォアボール（四球）での出塁は、打者の打率に影響しない。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '四球（フォアボール）と死球（デッドボール）は打数に含まれないため、打率には影響しない。ただし出塁率は上がる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q14',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '打球がバウンドしてスタンド（観客席）に入った場合、打者に与えられるのは？',
    choices: [
      'ホームラン',
      '2塁打（エンタイトルツーベース）',
      'アウト',
      'ファウル',
    ],
    correctIndex: 1,
    explanation:
      'バウンドしてスタンドに入った打球は「エンタイトルツーベース」となり、打者には自動的に2塁が与えられる。フライで直接スタンドに入るとホームランになる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q15',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      'ボーク（投手の反則）が<ruby>宣告<rt>せんこく</rt></ruby>されると、ランナーはどうなる？',
    choices: [
      '全員アウトになる',
      '全員1つずつ進<ruby>塁<rt>るい</rt></ruby>する',
      '全員2つずつ進<ruby>塁<rt>るい</rt></ruby>する',
      '何も起きない',
    ],
    correctIndex: 1,
    explanation:
      'ボークが<ruby>宣告<rt>せんこく</rt></ruby>されると、塁上の全ランナーが1つずつ進<ruby>塁<rt>るい</rt></ruby>する。打者にはボールが1つ加わる。投手がセットポジションで静止しなかったり、投球<ruby>途中<rt>とちゅう</rt></ruby>で止めた場合などに<ruby>宣告<rt>せんこく</rt></ruby>される。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q16',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '打者が<ruby>打<rt>う</rt></ruby>った打球が直接外野フェンスを越えると、ホームランになる。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      'フェアゾーンの打球が直接フェンスを越えると本塁打（ホームラン）。全ランナーと打者が本塁に生還でき、全員に得点が記録される。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q17',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '振り逃げが成立する<ruby>条件<rt>じょうけん</rt></ruby>はどれか？',
    choices: [
      'いつでも成立する',
      '1<ruby>塁<rt>るい</rt></ruby>にランナーがいれば成立する',
      '1<ruby>塁<rt>るい</rt></ruby>が空いているとき、または2アウトのとき',
      '2ストライクのときだけ成立する',
    ],
    correctIndex: 2,
    explanation:
      '振り逃げは「1<ruby>塁<rt>るい</rt></ruby>が空いているとき（アウトカウント問わず）」または「2アウトのとき（1<ruby>塁<rt>るい</rt></ruby>にランナーがいても）」に<ruby>捕手<rt>ほしゅ</rt></ruby>が3ストライク目を正規に<ruby>捕球<rt>ほきゅう</rt></ruby>しなかった場合に成立。1塁にランナーがいて0・1アウトのときは成立しない。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q18',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '打者が1<ruby>塁<rt>るい</rt></ruby>を走り過ぎても、1<ruby>塁<rt>るい</rt></ruby>に戻れればアウトにならない。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '打者走者が1<ruby>塁<rt>るい</rt></ruby>でオーバーランした場合、2<ruby>塁<rt>るい</rt></ruby>へ進もうとする動作を見せなければアウトにならない。ただしタグ（タッチ）プレーになるため、野手がボールを持って触れると1<ruby>塁<rt>るい</rt></ruby>に戻る前にアウトになる可能性がある。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q19',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '「バッテリー」とはどのポジションの組み合わせか？',
    choices: [
      '投手と一塁手',
      '投手と<ruby>捕手<rt>ほしゅ</rt></ruby>',
      '遊撃手と二塁手',
      '外野の3人',
    ],
    correctIndex: 1,
    explanation:
      '投手（ピッチャー）と<ruby>捕手<rt>ほしゅ</rt></ruby>（キャッチャー）の組み合わせを「バッテリー」と呼ぶ。試合の中心として連携が重要。',
    source: '野球用語',
  },
  {
    id: 'q20',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '一度<ruby>交代<rt>こうたい</rt></ruby>した選手は、同じ試合に再び出場できる。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      '野球では一度<ruby>交代<rt>こうたい</rt></ruby>した選手は同じ試合に再出場できない。これは野球<ruby>規則<rt>きそく</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>であり、<ruby>交代<rt>こうたい</rt></ruby>は取り消せない。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q21',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      'フォースアウトとはどんな状況か？',
    choices: [
      '走者にタッチしてアウトにすること',
      '走者が<ruby>塁<rt>るい</rt></ruby>に進む<ruby>義務<rt>ぎむ</rt></ruby>があるとき、その<ruby>塁<rt>るい</rt></ruby>に触れてアウトにすること',
      '3アウト後にさらにアウトを取ること',
      'タッグアップでアウトにすること',
    ],
    correctIndex: 1,
    explanation:
      'フォースアウトは走者が次の<ruby>塁<rt>るい</rt></ruby>へ進む<ruby>義務<rt>ぎむ</rt></ruby>（フォースの<ruby>状態<rt>じょうたい</rt></ruby>）があるとき、野手がボールを持って<ruby>塁<rt>るい</rt></ruby>を踏むだけでアウトにできるプレー。タッグ（タッチ）は不要。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q22',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      'ワイルドピッチ（<ruby>暴投<rt>ぼうとう</rt></ruby>）は投手の責任、パスボール（<ruby>捕逸<rt>ほいつ</rt></ruby>）は<ruby>捕手<rt>ほしゅ</rt></ruby>の責任とされる。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '<ruby>暴投<rt>ぼうとう</rt></ruby>（ワイルドピッチ）は投手が捕れない球を投げたとして投手の記録。<ruby>捕逸<rt>ほいつ</rt></ruby>（パスボール）は<ruby>捕手<rt>ほしゅ</rt></ruby>が普通に捕れるはずの球を捕れなかったとして<ruby>捕手<rt>ほしゅ</rt></ruby>の記録になる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q23',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '犠牲フライ（サクリファイスフライ）が成立するのは、何アウトのときか？',
    choices: [
      'アウトカウントに関係なく成立する',
      '0アウトのときだけ',
      '0アウトまたは1アウトのとき',
      '2アウトのときだけ',
    ],
    correctIndex: 2,
    explanation:
      '犠牲フライは0アウトまたは1アウトのとき、外野フライを<ruby>捕球<rt>ほきゅう</rt></ruby>した後にランナーがタッグアップして生還した場合に記録される。2アウトでは成立しない。打者の打数には含まれない。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q24',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '打者がバッターボックスの外に出てボールを打った場合はどうなる？',
    choices: [
      'ファウルになる',
      '打者がアウトになる',
      'ヒットになる',
      'やり直しになる',
    ],
    correctIndex: 1,
    explanation:
      '打者はバッターボックス内で打たなければならない。バッターボックスの外に足を踏み出してボールを打った場合は打者アウトになる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q25',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '2ストライク後のファウルボールは、ストライクとして加算されない。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '2ストライクの後はファウルをいくら打っても三振にならない（バントのファウルを除く）。ファウルはストライクにカウントされないため、打者は粘ることができる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q26',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      'タッグアップとはどんなプレーか？',
    choices: [
      '走者が<ruby>塁<rt>るい</rt></ruby>を踏まずに進<ruby>塁<rt>るい</rt></ruby>すること',
      '外野フライを<ruby>捕球<rt>ほきゅう</rt></ruby>された後に、走者が元の<ruby>塁<rt>るい</rt></ruby>に戻ってから進<ruby>塁<rt>るい</rt></ruby>すること',
      '走者が2つ<ruby>塁<rt>るい</rt></ruby>を飛ばすこと',
      '走者がアウトを回避するための特別なルール',
    ],
    correctIndex: 1,
    explanation:
      'タッグアップは外野フライが<ruby>捕球<rt>ほきゅう</rt></ruby>された瞬間に、走者が元の<ruby>塁<rt>るい</rt></ruby>（またはそれ以降の地点）に触れてから次の<ruby>塁<rt>るい</rt></ruby>を狙うプレー。<ruby>捕球<rt>ほきゅう</rt></ruby>前にスタートを切ると守備側のアピールでアウトになる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q27',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      'アピールプレーとは何か？',
    choices: [
      '攻撃側が<ruby>審判<rt>しんぱん</rt></ruby>に対してルール違反を訴えること',
      '守備側が<ruby>審判<rt>しんぱん</rt></ruby>に対して走者の違反（<ruby>塁<rt>るい</rt></ruby>の空過など）を指摘してアウトを要求すること',
      '<ruby>審判<rt>しんぱん</rt></ruby>が判断を変えること',
      '投手が打者に対して故意に申告すること',
    ],
    correctIndex: 1,
    explanation:
      'アピールプレーは守備側が<ruby>審判<rt>しんぱん</rt></ruby>に走者の<ruby>塁<rt>るい</rt></ruby>空過やタッグアップ不履行などの違反を指摘し、アウトを要求するプレー。次のプレーが始まる前（投球前など）に行う必要がある。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q28',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '走者が本<ruby>塁<rt>るい</rt></ruby>を踏まずにベンチに戻っても、守備側がアピールしなければ得点が認められる。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      'アピールプレーは守備側が指摘しなければ有効にならない。走者が本<ruby>塁<rt>るい</rt></ruby>を踏み忘れても守備側がアピールしない限り、得点として認められる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q29',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '「故意四球」（申告敬遠）とは何か？',
    choices: [
      '投手が実際に4球投げて四球を与えること',
      '守備側が<ruby>審判<rt>しんぱん</rt></ruby>に申告するだけで、投球なしに四球を与えること',
      '<ruby>捕手<rt>ほしゅ</rt></ruby>が打者に近づいて申告すること',
      '打者側が申告して受け取ること',
    ],
    correctIndex: 1,
    explanation:
      '現在の<ruby>規則<rt>きそく</rt></ruby>では、守備チームの監督が<ruby>審判<rt>しんぱん</rt></ruby>に申告するだけで、実際の投球なしに故意四球（申告敬遠）を与えることができる。試合を早く進めるために<ruby>導入<rt>どうにゅう</rt></ruby>された。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q30',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '打者が投球に当たった（死球）場合、必ず1<ruby>塁<rt>るい</rt></ruby>に進める。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      '死球（デッドボール）でも、打者がよけようとしなかった場合や、ストライクゾーンを通過した投球に当たった場合などは1<ruby>塁<rt>るい</rt></ruby>に進めず、ストライクまたはボールとしてカウントされることがある。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },

  // ==================== 律例 ====================
  {
    id: 'q31',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      'インフィールドフライが<ruby>適用<rt>てきよう</rt></ruby>される<ruby>条件<rt>じょうけん</rt></ruby>はどれ？',
    choices: [
      'ランナー1<ruby>塁<rt>るい</rt></ruby>のみ',
      'ランナー2<ruby>塁<rt>るい</rt></ruby>のみ',
      'ランナー1・2<ruby>塁<rt>るい</rt></ruby>または<ruby>満<rt>まん</rt></ruby><ruby>塁<rt>るい</rt></ruby>でノーアウト・1アウト',
      'ランナーなしでノーアウト',
    ],
    correctIndex: 2,
    explanation:
      'インフィールドフライはランナー1・2<ruby>塁<rt>るい</rt></ruby>または<ruby>満塁<rt>まんるい</rt></ruby>の状況で、0アウトか1アウトのとき、内野手が普通の守備をすれば<ruby>捕球<rt>ほきゅう</rt></ruby>できるフライに<ruby>適用<rt>てきよう</rt></ruby>される。守備側の故意落球によるダブルプレーを防ぐためのルール。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q32',
    type: '○×',
    category: '律例',
    year: 2024,
    question:
      'インフィールドフライが<ruby>宣告<rt>せんこく</rt></ruby>された場合、ランナーは走ってはいけない。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      'インフィールドフライが<ruby>宣告<rt>せんこく</rt></ruby>されるとバッターは即アウトになるが、ランナーは自由に走ることができる。ただしフライが<ruby>捕球<rt>ほきゅう</rt></ruby>された場合はタッグアップが必要。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q33',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      '2ストライク後にバントをしてファウルになった場合の<ruby>裁定<rt>さいてい</rt></ruby>は？',
    choices: [
      'ファウルでカウントなし',
      '三振アウト',
      'ボールが1つ加わる',
      'やり直し',
    ],
    correctIndex: 1,
    explanation:
      '2ストライク後のバントによるファウルは三振アウトとなる。通常のスイングによるファウルは何度でも打ち直せるが、バントのファウルは例外。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q34',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      'オブストラクション（走<ruby>塁<rt>るい</rt></ruby>妨害）が成立すると、走者はどうなる？',
    choices: [
      '即アウトになる',
      'フォアボールが与えられる',
      '少なくとも<ruby>妨害<rt>ぼうがい</rt></ruby>がなければ到達できた<ruby>塁<rt>るい</rt></ruby>が<ruby>審判<rt>しんぱん</rt></ruby>によって与えられる',
      '<ruby>審判<rt>しんぱん</rt></ruby>の判断で得点が与えられる',
    ],
    correctIndex: 2,
    explanation:
      'オブストラクション（走<ruby>塁<rt>るい</rt></ruby><ruby>妨害<rt>ぼうがい</rt></ruby>）は野手がボールを持たずに走路を塞いだ場合に成立。走者には少なくとも、<ruby>妨害<rt>ぼうがい</rt></ruby>がなければ到達できたと<ruby>審判<rt>しんぱん</rt></ruby>が判断した<ruby>塁<rt>るい</rt></ruby>が与えられる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q35',
    type: '○×',
    category: '律例',
    year: 2024,
    question:
      '<ruby>捕手<rt>ほしゅ</rt></ruby>がボールを持たずにホームベースをブロックし、走者の生還を<ruby>妨害<rt>ぼうがい</rt></ruby>することは<ruby>禁止<rt>きんし</rt></ruby>されている。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      'コリジョンルール（本塁での<ruby>衝突防止<rt>しょうとつぼうし</rt></ruby>規則）により、<ruby>捕手<rt>ほしゅ</rt></ruby>はボールを保持していない状態で走者の走路を塞いではならない。違反するとオブストラクション（走<ruby>塁<rt>るい</rt></ruby><ruby>妨害<rt>ぼうがい</rt></ruby>）が<ruby>宣告<rt>せんこく</rt></ruby>される。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q36',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      '野手が帽子や着衣でボールを捕球した場合、走者には何個の進<ruby>塁<rt>るい</rt></ruby>が与えられる？',
    choices: [
      '1個',
      '2個',
      '3個',
      'アウトになる',
    ],
    correctIndex: 2,
    explanation:
      '野手が帽子・グラブ以外（ポケット・着衣など）でボールを取った場合は反則。各走者（打者含む）に3個の進<ruby>塁<rt>るい</rt></ruby>が与えられる。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q37',
    type: '○×',
    category: '律例',
    year: 2024,
    question:
      '走者がフェアゾーンの打球に当たった場合、その走者はアウトになる。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '走者が内野を通過していないフェアの打球に当たると、その走者はアウト。ただし内野手（投手を除く）を通過した後の打球に当たった場合はインプレーが続く。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },
  {
    id: 'q38',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      'タイムプレーとはどんな判定か？',
    choices: [
      'タイムをかけるタイミングの判定',
      '第3アウトの成立と走者の生還のどちらが先かを判定するプレー',
      '時間<ruby>制限<rt>せいげん</rt></ruby>ギリギリのプレーの判定',
      '複数<ruby>塁<rt>るい</rt></ruby>の走者が同時に<ruby>塁<rt>るい</rt></ruby>に到達した場合の判定',
    ],
    correctIndex: 1,
    explanation:
      'タイムプレーは、フォース以外の第3アウトが成立したとき、それより前に走者が本<ruby>塁<rt>るい</rt></ruby>に生還していれば得点が認められるかどうかを判断するプレー。第3アウトと生還のどちらが先かが重要。',
    source: '公認野球<ruby>規則<rt>きそく</rt></ruby>',
  },

  // ==================== サイン・戦術 ====================
  {
    id: 'q39',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'ヒットエンドランのサインが出ているとき、バッターが空振りした場合、ランナーはどうすべき？',
    choices: [
      '止まって様子を見る',
      '1<ruby>塁<rt>るい</rt></ruby>に戻る',
      '全力で走り続ける',
      '<ruby>審判<rt>しんぱん</rt></ruby>の指示を待つ',
    ],
    correctIndex: 2,
    explanation:
      'ヒットエンドランはランナーがスタートを切ると同時にバッターが必ず打つ約束のプレー。バッターが空振りしてもランナーは走り続けるしかない。<ruby>捕手<rt>ほしゅ</rt></ruby>の送球と走者の速さの勝負になる。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q40',
    type: '○×',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'スクイズは、バッターがバントをする前にランナーがスタートしてはいけない。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      'スクイズはランナーが投球と同時にスタートを切り、バッターがバントをするプレー。ランナーが先に走り出すことがスクイズの核心であり、バントのタイミングが合わなければランナーがタッグアウトになるリスクがある。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q41',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'ダブルスチール（重<ruby>盗<rt>とう</rt></ruby>）とはどんなプレーか？',
    choices: [
      '同一選手が2回盗<ruby>塁<rt>るい</rt></ruby>すること',
      '2人のランナーが同時に盗<ruby>塁<rt>るい</rt></ruby>を試みること',
      '<ruby>捕手<rt>ほしゅ</rt></ruby>が送球ミスをした時だけ成功する盗<ruby>塁<rt>るい</rt></ruby>',
      '1つの盗<ruby>塁<rt>るい</rt></ruby>で2<ruby>塁<rt>るい</rt></ruby>分進む盗<ruby>塁<rt>るい</rt></ruby>',
    ],
    correctIndex: 1,
    explanation:
      'ダブルスチール（重<ruby>盗<rt>とう</rt></ruby>）は2人のランナーが同時に盗<ruby>塁<rt>るい</rt></ruby>を試みるプレー。特に1・3塁での重<ruby>盗<rt>とう</rt></ruby>は、<ruby>捕手<rt>ほしゅ</rt></ruby>がどちらに送球するかを迷わせる効果がある。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q42',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'バントの主な目的として正しいのはどれ？',
    choices: [
      'ホームランを打つこと',
      'ランナーを進<ruby>塁<rt>るい</rt></ruby>させ、次の打者に得点のチャンスを作ること',
      '投手を疲れさせること',
      '<ruby>審判<rt>しんぱん</rt></ruby>を惑わすこと',
    ],
    correctIndex: 1,
    explanation:
      '犠牲バント（犠打）は、自分がアウトになる代わりにランナーを進<ruby>塁<rt>るい</rt></ruby>させるプレー。1点が欲しい場面や、試合を動かしたい場面で使われる戦術。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q43',
    type: '○×',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'けん制球（ピックオフ）は、投手だけでなく<ruby>捕手<rt>ほしゅ</rt></ruby>も行うことができる。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      'けん制球は投手だけでなく<ruby>捕手<rt>ほしゅ</rt></ruby>も行える。<ruby>捕手<rt>ほしゅ</rt></ruby>が投球を受けた後、走者のいる<ruby>塁<rt>るい</rt></ruby>に送球してランナーをアウトにしようとするプレーを「<ruby>捕手<rt>ほしゅ</rt></ruby>けん制」という。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q44',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'ランダウンプレー（挟<ruby>殺<rt>さつ</rt></ruby>プレー）で最も重要なことは？',
    choices: [
      'できるだけ多くの選手でボールを回し続けること',
      'できるだけ少ない送球で走者をアウトにすること',
      'タイムをかけて作戦を<ruby>立<rt>た</rt></ruby>て直すこと',
      '<ruby>捕手<rt>ほしゅ</rt></ruby>が中心になって指示すること',
    ],
    correctIndex: 1,
    explanation:
      'ランダウン（挟<ruby>殺<rt>さつ</rt></ruby>）プレーは、できるだけ少ない送球で走者をアウトにすることが重要。送球が増えるほど暴投のリスクや、他の走者が進<ruby>塁<rt>るい</rt></ruby>するリスクが高まる。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q45',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'カットプレー（中継プレー）を行う主な理由はどれ？',
    choices: [
      '外野手の疲れを防ぐため',
      '外野からの長い距離の送球を中継して、より正確に目的の<ruby>塁<rt>るい</rt></ruby>へ送球するため',
      '<ruby>審判<rt>しんぱん</rt></ruby>の判断をサポートするため',
      'ランナーを<ruby>惑<rt>まど</rt></ruby>わせるため',
    ],
    correctIndex: 1,
    explanation:
      '外野からの長距離送球は精度が落ちやすい。内野手が中継に入ることで、より正確に目的の<ruby>塁<rt>るい</rt></ruby>へ送球でき、走者をアウトにできる可能性が上がる。カットマンは状況を見て中継か直接送球かを判断する。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q46',
    type: '○×',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'サインは攻撃側（打者・走者）だけが行うもので、守備側はサインを使わない。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      '守備側も投手への球種・コースの<ruby>指示<rt>しじ</rt></ruby>（<ruby>捕手<rt>ほしゅ</rt></ruby>→投手）や、守備位置の指示など様々なサインを使う。野球はどちらの側もサインを使って戦術を実行する。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q47',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'セーフティーバントとスクイズの最大の違いはどれ？',
    choices: [
      '違いはない',
      'セーフティーバントは打者が内野安打を狙い、スクイズは走者を生還させることが目的',
      'スクイズはランナーなしでもできる',
      'セーフティーバントは空振りでもよい',
    ],
    correctIndex: 1,
    explanation:
      'セーフティーバントは打者が内野安打を狙いながらランナーも進<ruby>塁<rt>るい</rt></ruby>させる作戦。スクイズはランナーをホームに生還させることが主目的で、打者がアウトになってもよい。両方ともバントを使うが目的が異なる。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q48',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'バックアップ（後方支援）の役割として正しいのはどれ？',
    choices: [
      '走者が転んだときにサポートすること',
      '送球が暴投になった際に後ろで受け止め、走者の余分な進<ruby>塁<rt>るい</rt></ruby>を防ぐこと',
      '<ruby>審判<rt>しんぱん</rt></ruby>の判定をフォローすること',
      'スコアをつける役割',
    ],
    correctIndex: 1,
    explanation:
      '野球では送球が暴投になった場合に備えて、必ず後ろに選手が「バックアップ」に入る。これにより走者の余分な進<ruby>塁<rt>るい</rt></ruby>を防ぐことができる。特に外野手のバックアップは重要。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q49',
    type: '○×',
    category: 'サイン・戦術',
    year: 2024,
    question:
      '満<ruby>塁<rt>るい</rt></ruby>でスクイズを行う場合、バントをミスしても走者は全員ホームに生還できる。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      '満<ruby>塁<rt>るい</rt></ruby>スクイズでバントをミス（空振り・ファウル）すると、3<ruby>塁<rt>るい</rt></ruby>ランナーはスタートしているためアウトになる危険が高い。スクイズはバントを確実に決めることが前提のプレー。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
  {
    id: 'q50',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      '1・3<ruby>塁<rt>るい</rt></ruby>の場面で守備側がダブルスチールを防ぐ最も<ruby>基本的<rt>きほんてき</rt></ruby>な方法は？',
    choices: [
      '投手が牽<ruby>制球<rt>せいきゅう</rt></ruby>を投げ続ける',
      '<ruby>捕手<rt>ほしゅ</rt></ruby>が2<ruby>塁<rt>るい</rt></ruby>に送球せず、ピッチャー返しで投手に投げ返す',
      '全員で2<ruby>塁<rt>るい</rt></ruby>に向かって走る',
      '打者をわざとアウトにする',
    ],
    correctIndex: 1,
    explanation:
      '1・3<ruby>塁<rt>るい</rt></ruby>でダブルスチールを狙われた場合、<ruby>捕手<rt>ほしゅ</rt></ruby>がそのまま2<ruby>塁<rt>るい</rt></ruby>に送球すると3<ruby>塁<rt>るい</rt></ruby>ランナーが生還しやすい。投手への返球（ピッチャー返し）で3<ruby>塁<rt>るい</rt></ruby>ランナーを止め、1<ruby>塁<rt>るい</rt></ruby>ランナーの<ruby>判断<rt>はんだん</rt></ruby>を迷わせる方法が基本。',
    source: '野球戦術の<ruby>基本<rt>きほん</rt></ruby>',
  },
];
