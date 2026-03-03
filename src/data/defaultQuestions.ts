import type { Question } from '../types';

export const defaultQuestions: Question[] = [
  // ==================== ルール・基本知識 ====================
  {
    id: 'q1',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '<ruby>学童部<rt>がくどうぶ</rt></ruby>（4<ruby>年生以上<rt>ねんせいいじょう</rt></ruby>）の<ruby>投手<rt>とうしゅ</rt></ruby>が1<ruby>日<rt>にち</rt></ruby>に<ruby>投球<rt>とうきゅう</rt></ruby>できるのは<ruby>最大<rt>さいだい</rt></ruby>何<ruby>イニング<rt>いにんぐ</rt></ruby>まで？',
    choices: ['5イニング', '6イニング', '7イニング', '9イニング'],
    correctIndex: 2,
    explanation:
      'JSBBルールでは、4<ruby>年生以上<rt>ねんせいいじょう</rt></ruby>の<ruby>学童部<rt>がくどうぶ</rt></ruby><ruby>投手<rt>とうしゅ</rt></ruby>は1<ruby>日<rt>にち</rt></ruby>7イニングまで<ruby>投球<rt>とうきゅう</rt></ruby><ruby>可能<rt>かのう</rt></ruby>。ただしタイブレーク<ruby>直前<rt>ちょくぜん</rt></ruby>のイニングを<ruby>投<rt>な</rt></ruby>げ<ruby>切<rt>き</rt></ruby>った<ruby>投手<rt>とうしゅ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>り<ruby>最大<rt>さいだい</rt></ruby>9イニングまで<ruby>認<rt>みと</rt></ruby>められる。3<ruby>年生以下<rt>ねんせいいか</rt></ruby>は1<ruby>日<rt>にち</rt></ruby>5イニングまで。',
    source: 'JSBB連盟適用ルール（公式サイト）',
  },
  {
    id: 'q2',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2022,
    question:
      '<ruby>学童部<rt>がくどうぶ</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>は7<ruby>回制<rt>かいせい</rt></ruby>である。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      '2022<ruby>年<rt>ねん</rt></ruby>の<ruby>改訂<rt>かいてい</rt></ruby>により、<ruby>学童部<rt>がくどうぶ</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>は6イニング<ruby>制<rt>せい</rt></ruby>・<ruby>時間制限<rt>じかんせいげん</rt></ruby>1<ruby>時間<rt>じかん</rt></ruby>30<ruby>分<rt>ぷん</rt></ruby>が<ruby>採用<rt>さいよう</rt></ruby>されている。7<ruby>回制<rt>かいせい</rt></ruby>ではない。',
    source: 'JSBB 令和4年度学童野球新ルール導入',
  },
  {
    id: 'q3',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2019,
    question:
      '<ruby>学童部<rt>がくどうぶ</rt></ruby>の<ruby>投手<rt>とうしゅ</rt></ruby>が1<ruby>日<rt>にち</rt></ruby>に<ruby>投球<rt>とうきゅう</rt></ruby>できる<ruby>球数<rt>たまかず</rt></ruby>の<ruby>上限<rt>じょうげん</rt></ruby>は？',
    choices: ['50球', '70球', '100球', '制限なし'],
    correctIndex: 1,
    explanation:
      '2019<ruby>年<rt>ねん</rt></ruby>よりJSBBは<ruby>学童部<rt>がくどうぶ</rt></ruby><ruby>投手<rt>とうしゅ</rt></ruby>の1<ruby>日<rt>にち</rt></ruby>の<ruby>投球数<rt>とうきゅうすう</rt></ruby>を70<ruby>球以内<rt>きゅういない</rt></ruby>に<ruby>制限<rt>せいげん</rt></ruby>している。<ruby>障害予防<rt>しょうがいよぼう</rt></ruby>が<ruby>目的<rt>もくてき</rt></ruby>。',
    source: 'JSBB 学童部投球数制限（2019年導入）',
  },
  {
    id: 'q4',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2026,
    question:
      '2026<ruby>年<rt>ねん</rt></ruby>から<ruby>新<rt>あら</rt></ruby>たに<ruby>導入<rt>どうにゅう</rt></ruby>された<ruby>投球数制限<rt>とうきゅうすうせいげん</rt></ruby>はどれ？',
    choices: [
      '1試合50球以内',
      '連続2日間での登板禁止',
      '1週間210球以内（4年生以下は180球以内）',
      '1週間350球以内',
    ],
    correctIndex: 2,
    explanation:
      '2026<ruby>年<rt>ねん</rt></ruby>より<ruby>学童部<rt>がくどうぶ</rt></ruby>に1<ruby>週間<rt>しゅうかん</rt></ruby>の<ruby>投球数制限<rt>とうきゅうすうせいげん</rt></ruby>が<ruby>新規導入<rt>しんきどうにゅう</rt></ruby>。5<ruby>年生以上<rt>ねんせいいじょう</rt></ruby>は210<ruby>球<rt>きゅう</rt></ruby>、4<ruby>年生以下<rt>ねんせいいか</rt></ruby>は180<ruby>球<rt>きゅう</rt></ruby>が<ruby>上限<rt>じょうげん</rt></ruby>となった。',
    source: 'JSBB 2026年競技者必携改訂',
  },
  {
    id: 'q5',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2025,
    question:
      '<ruby>学童部<rt>がくどうぶ</rt></ruby>では、2025<ruby>年<rt>ねん</rt></ruby>から<ruby>一般用<rt>いっぱんよう</rt></ruby>バットのうち<ruby>打球部<rt>だきゅうぶ</rt></ruby>にウレタン<ruby>等<rt>とう</rt></ruby>の<ruby>弾性体<rt>だんせいたい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けたバットが<ruby>禁止<rt>きんし</rt></ruby>された。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '<ruby>安全面<rt>あんぜんめん</rt></ruby>を<ruby>考慮<rt>こうりょ</rt></ruby>し、2025<ruby>年<rt>ねん</rt></ruby>より<ruby>学童部<rt>がくどうぶ</rt></ruby>では<ruby>一般用<rt>いっぱんよう</rt></ruby>バットのうちウレタン・スポンジ<ruby>等<rt>とう</rt></ruby>の<ruby>弾性体<rt>だんせいたい</rt></ruby>を<ruby>打球部<rt>だきゅうぶ</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>けたバットの<ruby>使用<rt>しよう</rt></ruby>が<ruby>禁止<rt>きんし</rt></ruby>。<ruby>木製<rt>もくせい</rt></ruby>・<ruby>金属製<rt>きんぞくせい</rt></ruby>・カーボン<ruby>製<rt>せい</rt></ruby>・<ruby>複合<rt>ふくごう</rt></ruby>バットは<ruby>引<rt>ひ</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>き<ruby>使用可能<rt>しようかのう</rt></ruby>。',
    source: 'JSBB 全軟野連発第366-3号（令和5年12月20日）',
  },
  {
    id: 'q6',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2029,
    question:
      '2029<ruby>年以降<rt>ねんいこう</rt></ruby>、バット<ruby>使用制限<rt>しようせいげん</rt></ruby>が<ruby>拡大<rt>かくだい</rt></ruby>される<ruby>対象<rt>たいしょう</rt></ruby>は？',
    choices: [
      '学童部のみ',
      '少年部（中学生）のみ',
      '学童部・少年部の両方',
      '一般（大人）も含む全カテゴリ',
    ],
    correctIndex: 2,
    explanation:
      '2025<ruby>年<rt>ねん</rt></ruby>から<ruby>学童部<rt>がくどうぶ</rt></ruby>で<ruby>始<rt>はじ</rt></ruby>まったウレタン<ruby>等<rt>とう</rt></ruby><ruby>弾性体<rt>だんせいたい</rt></ruby>バットの<ruby>禁止<rt>きんし</rt></ruby>は、2029<ruby>年<rt>ねん</rt></ruby>から<ruby>少年部<rt>しょうねんぶ</rt></ruby>（<ruby>中学生<rt>ちゅうがくせい</rt></ruby>）にも<ruby>拡大<rt>かくだい</rt></ruby>。2026〜2028<ruby>年<rt>ねん</rt></ruby>は<ruby>移行期間<rt>いこうきかん</rt></ruby>。<ruby>一般<rt>いっぱん</rt></ruby>（<ruby>大人<rt>おとな</rt></ruby>）は<ruby>規制対象外<rt>きせいたいしょうがい</rt></ruby>。',
    source: 'JSBB お知らせ「2029年以降の少年部バット使用制限について」（2025年12月15日）',
  },
  {
    id: 'q7',
    type: '○×',
    category: 'ルール・基本知識',
    year: 2024,
    question:
      '<ruby>学童部<rt>がくどうぶ</rt></ruby>では、<ruby>金属<rt>きんぞく</rt></ruby>バットにJSBBマークがついていなくても<ruby>試合<rt>しあい</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>できる。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      'JSBB<ruby>主催<rt>しゅさい</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>では、<ruby>金属製<rt>きんぞくせい</rt></ruby>または<ruby>接合<rt>せつごう</rt></ruby>バットは「JSBB」マークのついた<ruby>公認<rt>こうにん</rt></ruby>バットでなければならない。',
    source: 'JSBB公認用具規定',
  },
  {
    id: 'q8',
    type: '4択',
    category: 'ルール・基本知識',
    year: 2027,
    question:
      '2027<ruby>年<rt>ねん</rt></ruby>から<ruby>学童部<rt>がくどうぶ</rt></ruby>で<ruby>禁止<rt>きんし</rt></ruby>されるのはどれ？',
    choices: [
      '同一試合での同一投手が2度登板すること',
      '同一試合での投手と捕手の兼任',
      '捕手が塁間に送球すること',
      '投手がバッターとして出場すること',
    ],
    correctIndex: 1,
    explanation:
      '2027<ruby>年<rt>ねん</rt></ruby>から<ruby>学童部<rt>がくどうぶ</rt></ruby>では、<ruby>同一試合中<rt>どういつしあいちゅう</rt></ruby>に<ruby>投手<rt>とうしゅ</rt></ruby>が<ruby>捕手<rt>ほしゅ</rt></ruby>につくこと、<ruby>捕手<rt>ほしゅ</rt></ruby>が<ruby>投手<rt>とうしゅ</rt></ruby>につくことが<ruby>禁止<rt>きんし</rt></ruby>される。<ruby>肘<rt>ひじ</rt></ruby>・<ruby>肩<rt>かた</rt></ruby>への<ruby>負担軽減<rt>ふたんけいげん</rt></ruby>が<ruby>目的<rt>もくてき</rt></ruby>。ただし<ruby>他<rt>ほか</rt></ruby>の<ruby>守備位置<rt>しゅびいち</rt></ruby>を<ruby>経由<rt>けいゆ</rt></ruby>することは<ruby>可能<rt>かのう</rt></ruby>。',
    source: 'JSBB「2026年以降の学童部・少年部の大会運営に係る変更について」（2026年2月3日）',
  },

  // ==================== 律例 ====================
  {
    id: 'q9',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      'インフィールドフライが<ruby>適用<rt>てきよう</rt></ruby>される<ruby>条件<rt>じょうけん</rt></ruby>はどれ？',
    choices: [
      'ランナー1塁のみ',
      'ランナー2塁のみ',
      'ランナー1・2塁または満塁でノーアウト・1アウト',
      'ランナーなしでノーアウト',
    ],
    correctIndex: 2,
    explanation:
      'インフィールドフライはランナー1・2<ruby>塁<rt>るい</rt></ruby>または<ruby>満塁<rt>まんるい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>で、0アウトか1アウトのとき、<ruby>内野手<rt>ないやしゅ</rt></ruby>が<ruby>普通<rt>ふつう</rt></ruby>の<ruby>守備<rt>しゅび</rt></ruby>をすれば<ruby>捕球<rt>ほきゅう</rt></ruby>できるフライに<ruby>適用<rt>てきよう</rt></ruby>される。<ruby>守備側<rt>しゅびがわ</rt></ruby>の<ruby>故意落球<rt>こいらっきゅう</rt></ruby>によるダブルプレーを<ruby>防<rt>ふせ</rt></ruby>ぐためのルール。',
    source: '公認野球規則',
  },
  {
    id: 'q10',
    type: '○×',
    category: '律例',
    year: 2024,
    question:
      'インフィールドフライが<ruby>宣告<rt>せんこく</rt></ruby>された<ruby>場合<rt>ばあい</rt></ruby>、ランナーは<ruby>走<rt>はし</rt></ruby>ってはいけない。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      'インフィールドフライが<ruby>宣告<rt>せんこく</rt></ruby>されるとバッターは<ruby>即<rt>そく</rt></ruby>アウトになるが、ランナーは<ruby>自由<rt>じゆう</rt></ruby>に<ruby>走<rt>はし</rt></ruby>ることができる。ただしフライが<ruby>捕球<rt>ほきゅう</rt></ruby>された<ruby>場合<rt>ばあい</rt></ruby>はタッグアップが<ruby>必要<rt>ひつよう</rt></ruby>。',
    source: '公認野球規則',
  },
  {
    id: 'q11',
    type: '4択',
    category: '律例',
    year: 2024,
    question:
      'バントをしようとしてフライになり、<ruby>野手<rt>やしゅ</rt></ruby>がわざと<ruby>捕球<rt>ほきゅう</rt></ruby>しなかった<ruby>場合<rt>ばあい</rt></ruby>（<ruby>流球<rt>りゅうきゅう</rt></ruby>）の<ruby>正<rt>ただ</rt></ruby>しい<ruby>裁定<rt>さいてい</rt></ruby>は？',
    choices: [
      'ファウルになる',
      'ヒットになる',
      'インフィールドフライに準じた裁定になることがある',
      '何も起きない',
    ],
    correctIndex: 2,
    explanation:
      'バントフライの<ruby>故意落球<rt>こいらっきゅう</rt></ruby>（<ruby>流球<rt>りゅうきゅう</rt></ruby>）は、<ruby>内野手<rt>ないやしゅ</rt></ruby>が<ruby>捕球<rt>ほきゅう</rt></ruby>できた<ruby>状況<rt>じょうきょう</rt></ruby>でわざと<ruby>落<rt>お</rt></ruby>とした<ruby>場合<rt>ばあい</rt></ruby>、バッターアウトが<ruby>宣告<rt>せんこく</rt></ruby>され、ランナーは<ruby>進塁義務<rt>しんるいぎむ</rt></ruby>なしで<ruby>元<rt>もと</rt></ruby>の<ruby>塁<rt>るい</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>れる。<ruby>審判<rt>しんぱん</rt></ruby>の<ruby>判断<rt>はんだん</rt></ruby>が<ruby>重要<rt>じゅうよう</rt></ruby>なプレーの<ruby>一<rt>ひと</rt></ruby>つ。',
    source: '公認野球規則 5.09(a)(12)',
  },
  {
    id: 'q12',
    type: '○×',
    category: '律例',
    year: 2024,
    question:
      '2ストライク<ruby>後<rt>ご</rt></ruby>にバントをしてファウルになった<ruby>場合<rt>ばあい</rt></ruby>、<ruby>三振<rt>さんしん</rt></ruby>アウトになる。',
    choices: ['○', '×'],
    correctIndex: 0,
    explanation:
      '2ストライク<ruby>後<rt>ご</rt></ruby>のバントによるファウルは<ruby>三振<rt>さんしん</rt></ruby>アウトとなる。<ruby>通常<rt>つうじょう</rt></ruby>のスイングによるファウルは<ruby>何度<rt>なんど</rt></ruby>でも<ruby>打<rt>う</rt></ruby>ち<ruby>直<rt>なお</rt></ruby>せるが、バントのファウルは<ruby>例外<rt>れいがい</rt></ruby>。',
    source: '公認野球規則',
  },

  // ==================== サイン・戦術 ====================
  {
    id: 'q13',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'ヒットエンドランのサインが<ruby>出<rt>で</rt></ruby>ているとき、バッターが<ruby>空振<rt>からぶ</rt></ruby>りした<ruby>場合<rt>ばあい</rt></ruby>、ランナーはどうすべき？',
    choices: [
      '止まって様子を見る',
      '1塁に戻る',
      '全力で走り続ける',
      '審判の指示を待つ',
    ],
    correctIndex: 2,
    explanation:
      'ヒットエンドランはランナーがスタートを<ruby>切<rt>き</rt></ruby>ると<ruby>同時<rt>どうじ</rt></ruby>にバッターが<ruby>必<rt>かなら</rt></ruby>ず<ruby>打<rt>う</rt></ruby>つ<ruby>約束<rt>やくそく</rt></ruby>のプレー。バッターが<ruby>空振<rt>からぶ</rt></ruby>りしてもランナーは<ruby>走<rt>はし</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>けるしかない。<ruby>捕手<rt>ほしゅ</rt></ruby>の<ruby>送球<rt>そうきゅう</rt></ruby>と<ruby>走者<rt>そうしゃ</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さの<ruby>勝負<rt>しょうぶ</rt></ruby>になる。',
    source: '野球戦術の基本',
  },
  {
    id: 'q14',
    type: '○×',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'スクイズは、バッターがバントをする<ruby>前<rt>まえ</rt></ruby>にランナーがスタートしてはいけない。',
    choices: ['○', '×'],
    correctIndex: 1,
    explanation:
      'スクイズはランナーが<ruby>投球<rt>とうきゅう</rt></ruby>と<ruby>同時<rt>どうじ</rt></ruby>にスタートを<ruby>切<rt>き</rt></ruby>り、バッターがバントをするプレー。ランナーが<ruby>先<rt>さき</rt></ruby>に<ruby>走<rt>はし</rt></ruby>り<ruby>出<rt>だ</rt></ruby>すことがスクイズの<ruby>核心<rt>かくしん</rt></ruby>であり、バントのタイミングが<ruby>合<rt>あ</rt></ruby>わなければランナーがタッグアウトになるリスクがある。',
    source: '野球戦術の基本',
  },
  {
    id: 'q15',
    type: '4択',
    category: 'サイン・戦術',
    year: 2024,
    question:
      'ダブルスチールで2<ruby>人<rt>にん</rt></ruby>のランナーが<ruby>同時<rt>どうじ</rt></ruby>に<ruby>盗塁<rt>とうるい</rt></ruby>を<ruby>試<rt>こころ</rt></ruby>みた<ruby>場合<rt>ばあい</rt></ruby>、どの<ruby>状況<rt>じょうきょう</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>もリスクが<ruby>高<rt>たか</rt></ruby>い？',
    choices: [
      'ランナー1・3塁でノーアウト',
      'ランナー1・2塁でノーアウト',
      'ランナー1・3塁で2アウト',
      'ランナー満塁でノーアウト',
    ],
    correctIndex: 1,
    explanation:
      '1・2<ruby>塁<rt>るい</rt></ruby>のダブルスチールは、2<ruby>塁<rt>るい</rt></ruby>ランナーが3<ruby>塁<rt>るい</rt></ruby>でアウトになる<ruby>危険<rt>きけん</rt></ruby>があり、<ruby>得点機<rt>とくてんき</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>うリスクが<ruby>高<rt>たか</rt></ruby>い。1・3<ruby>塁<rt>るい</rt></ruby>ダブルスチールは3<ruby>塁<rt>るい</rt></ruby>ランナーがホームを<ruby>狙<rt>ねら</rt></ruby>えるため、リスクとリターンが<ruby>計算<rt>けいさん</rt></ruby>しやすい。',
    source: '野球戦術の基本',
  },
];
