
const DEFAULT_STUDENTS = [
  {
    "id": "zhiyu",
    "name": "知諭",
    "code": "知",
    "grade": "G9",
    "gender": "女",
    "age": 15,
    "traits": "獨立思辨、哥德奇幻與懸疑影像愛好者、專題研究型、沉穩細膩",
    "interests": ["哥德奇幻", "懸疑推理", "角色心理", "導演鏡頭語言"],
    "contentPreferences": {
      "movieTypes": ["哥德奇幻", "醫療懸疑", "黑色幽默", "角色心理劇"],
      "recommendedMovies": ["剪刀手愛德華 (Edward Scissorhands)", "怪醫豪斯 (House M.D.)", "星期三 (Wednesday)"]
    },
    "learningFocus": "從喜愛的哥德奇幻與懸疑角色場景中提取短句，觀察語氣與人物動機，拆解關鍵字音節，並轉化為自己的觀點表達。",
    "courseId": "group-a"
  },
  {
    "id": "mogu",
    "name": "蘑菇",
    "code": "菇",
    "grade": "G6",
    "gender": "女",
    "age": 12,
    "traits": "文藝手作、電繪創作、注重安全感與同儕界線、感性細膩",
    "interests": ["動漫繪畫", "溫暖奇幻故事", "動物與自然", "手作角色"],
    "contentPreferences": {
      "movieTypes": ["溫暖動畫", "奇幻成長", "友情冒險", "宮崎駿/皮克斯"],
      "recommendedMovies": ["腦筋急轉彎 (Inside Out)", "動物方城市 (Zootopia)", "可可夜總會 (Coco)", "魔女宅急便 (Kiki's Delivery Service)"]
    },
    "learningFocus": "透過溫暖動人的動畫台詞與生活對答，在無評判的氣氛中建立開口與拼讀字詞的信心。",
    "courseId": "group-a"
  },
  {
    "id": "lexing",
    "name": "樂行",
    "code": "行",
    "grade": "G7",
    "gender": "男",
    "age": 13,
    "traits": "邏輯思維強、下棋好手、曾在英語實驗機構受過挫折、缺乏英文自信",
    "interests": ["棋弈策略", "遊戲解謎", "日常生活幽默", "動物趣味"],
    "contentPreferences": {
      "contentTypes": ["極短生活句", "無壓力幽默對話", "棋盤/闖關式英文任務"],
      "learningTone": "極度鼓勵、100% 正向肯定、完全無紅筆訂正、節奏放緩"
    },
    "learningFocus": "修復學習創傷！從耳熟能詳的 3~4 字母 CVC 單字（run, cat, game, win）建立『聽一個音填一格』的音素積木成就感，重拾聽說熱情。",
    "courseId": "individual-xing"
  },
  {
    "id": "zhinuo",
    "name": "知諾",
    "code": "諾",
    "grade": "G7",
    "gender": "男",
    "age": 13,
    "traits": "音樂天賦極高、熱愛彈唱、聽覺敏銳、大自然共鳴型",
    "interests": ["鋼琴", "吉他", "烏克麗麗", "經典西洋流行樂", "旋律即興"],
    "contentPreferences": {
      "musicTypes": ["經典民謠", "不插電木吉他彈唱", "朗朗上口的流行金曲"],
      "recommendedArtists": ["Ed Sheeran", "The Beatles", "Coldplay", "Jason Mraz", "Bruno Mars"]
    },
    "learningFocus": "以音樂為核心！利用英文歌詞天生的『押韻家族（Rhyme Families）』，如 -ight (light, night), -ay (day, play)，把聽覺旋律優勢轉化為拼讀自信。",
    "courseId": "group-music"
  },
  {
    "id": "lingxuan",
    "name": "齡萱",
    "code": "齡",
    "grade": "G9",
    "gender": "女",
    "age": 15,
    "traits": "人文素養好、英文基礎扎實、自然美感、溫暖有耐心的大姊姊學伴",
    "interests": ["文學閱讀", "手作藝術", "自然觀察", "音樂伴學"],
    "learningFocus": "擔任知諾的溫暖共學夥伴（Peer Buddy），透過雙人對唱、歌詞品析激盪，同步深化高階語感與文化素養。",
    "courseId": "group-music"
  },
  {
    "id": "yicheng",
    "name": "逸澄",
    "code": "澄",
    "grade": "G11",
    "gender": "男",
    "age": 17,
    "traits": "高中生、邏輯推演佳、棋藝高手、概念探索型、尚在探索自我熱情",
    "interests": ["數學邏輯", "策略博弈", "前沿科技", "跨領域新知"],
    "contentPreferences": {
      "topics": ["TED-Ed 科普短片", "思維難題", "策略遊戲英文資料", "國際前沿專題"]
    },
    "learningFocus": "透過長單字字根字首（Etymology/Morphology）音節邏輯，擺脫死記硬背；以跨領域自選主題進行高階思辨與閱讀寫作引導。",
    "courseId": "individual-cheng"
  },
  {
    "id": "ningxi",
    "name": "凝希",
    "code": "凝",
    "grade": "G8",
    "gender": "女",
    "age": 14,
    "traits": "2年後將前往加拿大求學、具全美語背景、高敏感特質、略具亞斯特質、細膩敏銳",
    "interests": ["自然動植物", "安靜閱讀", "加拿大風土文化", "溫馨校園日常"],
    "contentPreferences": {
      "themes": ["加拿大校園生活模擬", "溫和社交對答", "日常生活情境（超市/圖書館/搭車）", "大自然觀察手記"]
    },
    "learningFocus": "打造安全感十足的一對一微情境，以加拿大真實校園與生活告示牌為鷹架，溫和引導文字解碼與實用口語表達。",
    "courseId": "individual-xi"
  },
  {
    "id": "yuexuan",
    "name": "岳軒",
    "code": "軒",
    "grade": "G9",
    "gender": "男",
    "age": 15,
    "traits": "社會思辨、關心時事、表達欲強、即將迎戰國中會考",
    "interests": ["時事討論", "科技趨勢", "公眾演講", "辯論思維"],
    "learningFocus": "會考核心單字音節拆解 ＋ 1.5 分鐘結構化 Short Pitch，提升字彙量並建立演說台風與自信。",
    "courseId": "group-c"
  },
  {
    "id": "hongyin",
    "name": "虹茵",
    "code": "茵",
    "grade": "G7",
    "gender": "女",
    "age": 13,
    "traits": "文藝手作、渴望擴充單字量、未來會考儲備、表達細緻",
    "interests": ["日常生活故事", "手作美學", "旅行見聞", "詞彙升級"],
    "learningFocus": "學習豐富的情境形容詞與表達句型，透過音節拆解克服拼字卡關，在 1.5 分鐘短講中展現個人風格。",
    "courseId": "group-c"
  },
  {
    "id": "hongyu",
    "name": "紘羽",
    "code": "紘",
    "grade": "G6",
    "gender": "男",
    "age": 12,
    "traits": "觀點表達型、熱愛空間地理、好奇心充沛、活潑樂於分享",
    "interests": ["世界地理", "探險發明", "趣味奇觀", "動態短講"],
    "learningFocus": "以熱門探險與世界地理話題為舞台，在同儕激盪中大膽開口，將聽懂的字詞自然手寫成短講提詞卡。",
    "courseId": "group-c"
  }
]
;
const DEFAULT_COURSES = [
  {
    "id": "group-a",
    "name": "英文組A（電影／經典台詞）",
    "timeSlot": "週一 一2 (10:00 - 10:40)",
    "day": "週一",
    "period": "一2",
    "location": "白雲屋 1號空間",
    "students": ["知諭 (G9)", "蘑菇 (G6)"],
    "theme": "🎬 電影名場面 ＋ 經典金句克漏手寫 ＋ 角色扮演對答",
    "description": "投其所好挑選符合年齡（G6 溫暖奇幻、G9 哥德奇幻與懸疑角色劇）之名場面，拆解音節生字，結合手寫學習單與雙人生活情境演練。",
    "targetSkill": "聽音辨字、音節拆解、電影情境生活化"
  },
  {
    "id": "individual-xing",
    "name": "個別英文（樂行）",
    "timeSlot": "週一 一4 (13:20 - 14:00)",
    "day": "週一",
    "period": "一4",
    "location": "白雲屋 1號空間",
    "students": ["樂行 (G7)"],
    "theme": "🌱 暖心聽說修復 ＋ CVC極短字音素積木 ＋ 零壓力發音",
    "description": "修復英語學習創傷，重塑心理安全感。以樂行喜愛的遊戲與生活對話為題，利用音素積木格（Sound Boxes）引導『聽一個音填一格』，無紅筆糾錯，專注在開口成就感。",
    "targetSkill": "音素意識 (Phonemic Awareness)、日常自信聽說"
  },
  {
    "id": "group-music",
    "name": "英文組B（音樂歌詞探索）",
    "timeSlot": "週二 (桐溪活動時段)",
    "day": "週二",
    "period": "桐溪",
    "location": "桐溪自然遊戲場",
    "students": ["知諾 (G7，主角)", "齡萱 (G9，學伴)"],
    "theme": "🎵 彈唱歌詞解析 ＋ 押韻家族自然發音 ＋ 旋律生活片語",
    "description": "知諾擅長鋼琴、吉他、烏克麗麗，齡萱為溫暖學伴。以經典動人歌詞的押韻（Rhyme Families）作為自然拼讀的最佳載體，邊唱邊寫，將音樂敏銳度直接轉化為拼字能力。",
    "targetSkill": "自然拼讀押韻家族 (Rhyme & Phonics)、音樂生活片語"
  },
  {
    "id": "individual-cheng",
    "name": "個別英文（逸澄）",
    "timeSlot": "週四 四2 (10:00 - 10:40)",
    "day": "週四",
    "period": "四2",
    "location": "白雲屋 1號空間",
    "students": ["逸澄 (G11)"],
    "theme": "🧭 跨領域自主探索 ＋ 長單字音節邏輯 ＋ 深度思辨",
    "description": "高中高階學習者。結合邏輯、數學、科技與博弈思維，引導多音節構詞法（字根字首）拆解，開展自主英語專案與深度對話。",
    "targetSkill": "多音節構詞法 (Etymology)、專案閱讀思辨"
  },
  {
    "id": "individual-xi",
    "name": "個別英文（凝希）",
    "timeSlot": "週四 四3 (10:50 - 11:30)",
    "day": "週四",
    "period": "四3",
    "location": "白雲屋 1號空間",
    "students": ["凝希 (G8)"],
    "theme": "🍁 加拿大留學實境 ＋ 溫和生活對話 ＋ 高敏微步引導",
    "description": "預備兩年後前往加拿大求學。模擬加拿大校園生活告示、選課、超商購物等真實微情境，提供高信任度、步調細緻的文字解碼與無壓口說練習。",
    "targetSkill": "生活情境解碼 (Real-life Decoding)、跨文化適應口語"
  },
  {
    "id": "group-c",
    "name": "英文組C（簡報短講與字彙）",
    "timeSlot": "週四 四4、四5 (13:20 - 14:50 連堂)",
    "day": "週四",
    "period": "四4-四5",
    "location": "白雲屋 1號空間",
    "students": ["岳軒 (G9)", "紘羽 (G6)", "虹茵 (G7)"],
    "theme": "🎙️ 1.5分鐘主題短講 ＋ 會考核心單字音節拆解 ＋ 手寫提詞卡",
    "description": "每堂課產出 60~90 秒主題短講。融入國中會考核心字彙，以音節拆解法攻克拼字困難，並產出紙本短講手寫大綱卡（Cue Card），台風與字彙雙向提升。",
    "targetSkill": "1.5分鐘短講結構、會考高頻單字拆解、公眾表達台風"
  }
]
;
const DEFAULT_MATERIALS = {
  "movieQuotes": [
    {
      "id": "mq-gothic-house",
      "targetStudent": "知諭 (G9 女生)",
      "suitableFor": ["知諭", "蘑菇"],
      "movieTitle": "奇幻屋的夜晚（原創情境）",
      "quote": "The house is quiet, but my mind is awake.",
      "translation": "這棟屋子很安靜，但我的腦袋仍然清醒。",
      "vibe": "哥德奇幻、安靜觀察、細膩角色感",
      "targetPhonics": [
        {"word": "house", "phonics": "h - ou - se", "rule": "ou 常見發音 /aʊ/", "meaning": "房子、屋子"},
        {"word": "quiet", "syllables": "qui-et", "phonics": "qu - i - et", "rule": "qu 常一起出現；分成兩個音節慢讀", "meaning": "安靜的"},
        {"word": "awake", "syllables": "a-wake", "phonics": "a - wake", "rule": "a- 是非重讀開頭；a_e 發長母音 /eɪ/", "meaning": "醒著的"}
      ],
      "roleplayDialogue": [
        {"speaker": "知諭", "en": "The house is quiet, but my mind is awake.", "zh": "這棟屋子很安靜，但我的腦袋仍然清醒。"},
        {"speaker": "AI 角色夥伴", "en": "What detail do you notice in this quiet house?", "zh": "在這棟安靜的屋子裡，你注意到了什麼細節？"}
      ]
    },
    {
      "id": "mq-mystery-academy",
      "targetStudent": "知諭 (G9 女生)",
      "suitableFor": ["知諭"],
      "movieTitle": "神祕學院（原創情境）",
      "quote": "I notice the details that others miss.",
      "translation": "我注意到其他人錯過的細節。",
      "vibe": "懸疑推理、角色觀察、冷靜自信",
      "targetPhonics": [
        {"word": "notice", "syllables": "no-tice", "phonics": "no - tice", "rule": "o_e 發長母音 /oʊ/", "meaning": "注意到"},
        {"word": "details", "syllables": "de-tails", "phonics": "de - tails", "rule": "ai 發長母音 /eɪ/", "meaning": "細節"},
        {"word": "others", "syllables": "oth-ers", "phonics": "oth - ers", "rule": "th 可發濁音 /ð/", "meaning": "其他人"}
      ],
      "roleplayDialogue": [
        {"speaker": "知諭", "en": "I notice the details that others miss.", "zh": "我注意到其他人錯過的細節。"},
        {"speaker": "AI 夥伴", "en": "Which detail makes you curious?", "zh": "哪一個細節讓你好奇？"}
      ]
    },
    {
      "id": "mq-zootopia",
      "targetStudent": "蘑菇 (G6 女生)",
      "suitableFor": ["蘑菇", "知諭"],
      "movieTitle": "動物方城市 (Zootopia)",
      "quote": "Change starts with you. It starts with all of us.",
      "translation": "改變從你開始，從我們每一個人開始。",
      "vibe": "溫暖勵志、同儕共好、活潑溫柔",
      "targetPhonics": [
        {"word": "change", "phonics": "ch - a_e - nge", "rule": "ch 發 /tʃ/，a_e 發開音節 /eɪ/", "meaning": "改變"},
        {"word": "start", "phonics": "st - ar - t", "rule": "ar 組合發 /ɑːr/（汽車 car, 星星 star）", "meaning": "開始"}
      ],
      "roleplayDialogue": [
        {"speaker": "蘑菇 (Judy)", "en": "Can I really make things different?", "zh": "我真的能帶來不同嗎？"},
        {"speaker": "AI 夥伴 (Nick)", "en": "Of course! Change starts with you, and you're doing great.", "zh": "當然可以！改變從你開始，而且你現在做得棒極了。"}
      ]
    },
    {
      "id": "mq-coco",
      "targetStudent": "蘑菇 (G6 女生)",
      "suitableFor": ["蘑菇"],
      "movieTitle": "可可夜總會 (Coco)",
      "quote": "Remember me, though I have to say goodbye. Remember me, don't let it make you cry.",
      "translation": "請記住我，雖然我必須說再見。請記住我，不要讓它令你哭泣。",
      "vibe": "音樂旋律、親情溫暖、色彩斑斕手作感",
      "targetPhonics": [
        {"word": "remember", "syllables": "re-mem-ber", "phonics": "re - mem - ber", "rule": "三音節拆解：re(前綴)-mem-ber", "meaning": "記得、回憶"},
        {"word": "goodbye", "syllables": "good-bye", "phonics": "good - bye", "rule": "複合字：good + bye", "meaning": "再見"}
      ],
      "roleplayDialogue": [
        {"speaker": "蘑菇", "en": "Will you remember the song we sang together?", "zh": "你會記得我們一起唱過的這首歌嗎？"},
        {"speaker": "AI 夥伴", "en": "Always! I will never forget your beautiful melody.", "zh": "永遠都會！我絕不會忘記你美麗的旋律。"}
      ]
    }
  ],
  "musicSongs": [
    {
      "id": "song-count-on-me",
      "targetStudent": "知諾 (G7 男生，鋼琴/吉他)",
      "suitableFor": ["知諾", "齡萱"],
      "songTitle": "Count on Me",
      "artist": "Bruno Mars",
      "vibe": "不插電木吉他、友情陪伴、溫暖清爽",
      "keyLyrics": "You can count on me like one, two, three, I'll be there. And I know when I need it I can count on you like four, three, two, you'll be there.",
      "translation": "你可以依靠我，就像數著一二三，我就會出現；而我知道當我需要時，我也能依靠你，如同數著四三二，你就會在身邊。",
      "rhymeFamilies": [
        {"pattern": "-ee / -ere", "words": ["three", "me", "see", "there", "where"], "rule": "尾音押韻，聽旋律抓長母音 /i:/ 與雙母音 /eə/"},
        {"pattern": "-ou / -two", "words": ["you", "two", "do", "true"], "rule": "圓唇長音 /u:/"}
      ],
      "phonicsSoundBoxes": [
        {"word": "count", "boxes": ["c", "ou", "n", "t"], "hint": "ou 發 /aʊ/，聽四個音素"},
        {"word": "friend", "boxes": ["f", "r", "ie", "n", "d"], "hint": "ie 特殊發短母音 /e/"}
      ],
      "guitarChords": "C - Em - Am - G - F",
      "learningActivity": "知諾彈奏吉他或鋼琴前奏，齡萱合唱，兩人邊聽邊圈出手寫單上的押韻家族詞彙。"
    },
    {
      "id": "song-let-it-be",
      "targetStudent": "知諾 (G7 男生，鋼琴/吉他)",
      "suitableFor": ["知諾", "齡萱"],
      "songTitle": "Let It Be",
      "artist": "The Beatles (披頭四)",
      "vibe": "經典鋼琴抒情、心靈沉澱、悠揚動人",
      "keyLyrics": "When I find myself in times of trouble, Mother Mary comes to me, speaking words of wisdom, let it be.",
      "translation": "當我身處困境之時，聖母瑪利亞走近我身旁，輕聲訴說著智慧的話語：順其自然吧。",
      "rhymeFamilies": [
        {"pattern": "-ee", "words": ["me", "be", "see", "agree"], "rule": "經典長母音 /i:/"}
      ],
      "phonicsSoundBoxes": [
        {"word": "trouble", "syllables": "trou-ble", "boxes": ["tr", "ou", "b", "le"], "hint": "ou 發 /ʌ/，ble 發輕音 /bl/"},
        {"word": "wisdom", "syllables": "wis-dom", "boxes": ["w", "i", "s", "d", "om"], "hint": "wis (智慧) + dom (名詞後綴)"}
      ],
      "pianoChords": "C - G - Am - F - C - G - F - C",
      "learningActivity": "知諾彈奏 C-G-Am-F 鋼琴和弦，解析 wisdom (wise+dom) 的發音與字根拆解。"
    }
  ],
  "healingTracks": [
    {
      "id": "heal-lexing",
      "targetStudent": "樂行 (G7 男生)",
      "theme": "遊戲闖關與生活超短句（零壓力療癒）",
      "vibe": "幽默輕鬆、棋盤通關感、無任何紅筆糾錯",
      "soundBoxWords": [
        {"word": "cat", "sound": "/k/ - /æ/ - /t/", "boxes": ["c", "a", "t"], "type": "CVC 短母音 /æ/"},
        {"word": "run", "sound": "/r/ - /ʌ/ - /n/", "boxes": ["r", "u", "n"], "type": "CVC 短母音 /ʌ/"},
        {"word": "win", "sound": "/w/ - /ɪ/ - /n/", "boxes": ["w", "i", "n"], "type": "CVC 短母音 /ɪ/"},
        {"word": "game", "sound": "/ɡ/ - /eɪ/ - /m/", "boxes": ["g", "a", "m", "e"], "type": "CVCe 魔術 e (Magic e)"}
      ],
      "confidenceBoosterPrompts": [
        "樂行超棒！你聽出中間是那個跳跳音 /æ/ 了！",
        "太厲害了，一步到位，就像下棋直接將軍一樣帥氣！"
      ]
    }
  ],
  "presentationTracks": [
    {
      "id": "pres-group-c",
      "targetStudents": ["岳軒 (G9)", "虹茵 (G7)", "紘羽 (G6)"],
      "theme": "1.5分鐘主題短講架構 ＋ 會考核心字彙升級",
      "structure": [
        {"part": "1. 鉤子開頭 (Hook)", "time": "15秒", "template": "Have you ever wondered why... / Today, I want to talk about..."},
        {"part": "2. 主題故事 (Story/Points)", "time": "50秒", "template": "First,... Second,... For example,..."},
        {"part": "3. 總結呼籲 (Call to Action)", "time": "25秒", "template": "In short, I believe that... Thank you!"}
      ],
      "examVocabBooster": [
        {"word": "important", "syllables": "im-por-tant", "phonics": "im - por - tant", "meaning": "重要的 (會考高頻)", "sample": "It is important to believe in ourselves."},
        {"word": "confident", "syllables": "con-fi-dent", "phonics": "con - fi - dent", "meaning": "自信的", "sample": "Speaking English makes me feel confident."},
        {"word": "creative", "syllables": "cre-a-tive", "phonics": "cre - a - tive", "meaning": "有創意的", "sample": "We need creative ideas for the future."},
        {"word": "adventure", "syllables": "ad-ven-ture", "phonics": "ad - ven - ture", "meaning": "冒險、探險 (ture發/tʃər/)", "sample": "Life is a great adventure."}
      ]
    }
  ],
  "canadaTracks": [
    {
      "id": "canada-ningxi",
      "targetStudent": "凝希 (G8 女生)",
      "theme": "加拿大溫和校園與生活實境解碼",
      "vibe": "高安全感、自然清新、溫和慢速步調",
      "realLifeSigns": [
        {"sign": "Maple Leaf Secondary School - Student Lounge", "meaning": "楓葉中學學生休息室", "chunks": ["Stu-dent", "Lounge /aʊndʒ/"]},
        {"sign": "Public Library - Quiet Study Area", "meaning": "市立圖書館 - 寧靜自習區", "chunks": ["Li-brary", "Qui-et"]},
        {"sign": "Transit - Please Tap Your Compass Card", "meaning": "大眾運輸 - 請感應您的交通卡", "chunks": ["Tran-sit", "Com-pass"]}
      ],
      "gentleDialogues": [
        {"speaker": "Canadian Classmate", "en": "Hi Ning-Xi, welcome to Vancouver! Do you want to join our art club?", "zh": "嗨凝希，歡迎來到溫哥華！你想加入我們的手作美術社嗎？"},
        {"speaker": "凝希", "en": "Yes, I would love to! Thank you for asking.", "zh": "好呀，我很樂意！謝謝你邀請我。"}
      ]
    }
  ]
}
;

// 白雲屋英文課：AI 共學與生活連結應用程式邏輯

const AppState = {
  students: [],
  courses: [],
  materials: {},
  currentCourseId: 'group-a',
  currentStudentId: 'zhiyu',
  activeView: 'course', // 'course', 'student', 'custom-parser', 'worksheet'
  customContent: null,
  
  // 三方互動對話室狀態
  studio: {
    isOpen: false,
    activeRole: '知諭',
    targetQuote: 'The house is quiet, but my mind is awake.',
    targetMovie: '奇幻屋的夜晚（原創情境）',
    coachName: 'AI 伴學教練',
    lessonStep: 0,
    chatHistory: [],
    isListening: false,
    recognizedText: '',
    interimText: '',
    recognitionInstance: null,
    silenceTimer: null
  },

  apiKey: localStorage.getItem('cindy_gemini_api_key') || ''
};

// 瀏覽器語音會依作業系統而不同；記住老師選擇的聲音偏好，並盡量配對可用英文語音。
const AI_VOICE_PROFILES = {
  female: {
    label: '女聲｜溫柔陪讀',
    pattern: /samantha|victoria|karen|moira|tessa|zira|jenny|aria|ava|female/i
  },
  male: {
    label: '男聲｜沉穩陪讀',
    pattern: /daniel|alex|fred|thomas|george|david|mark|guy|male/i
  },
  system: {
    label: '系統預設聲音',
    pattern: null
  }
};

const VoiceState = {
  profile: localStorage.getItem('cindy_ai_voice_profile') || 'female'
};

// 常用自然發音規則庫 (Phonics Patterns Database)
const PHONICS_RULES = [
  { pattern: /ea/i, chunk: 'ea', rule: '長母音 /i:/ (如 leap, team, dream)' },
  { pattern: /ee/i, chunk: 'ee', rule: '長母音 /i:/ (如 see, free, meet)' },
  { pattern: /ai/i, chunk: 'ai', rule: '長母音 /eɪ/ (如 rain, faith, train)' },
  { pattern: /ay/i, chunk: 'ay', rule: '長母音 /eɪ/ (如 play, day, stay)' },
  { pattern: /igh/i, chunk: 'igh', rule: '長母音 /aɪ/ (如 light, night, bright)' },
  { pattern: /tion/i, chunk: 'tion', rule: '常見名詞結尾 /ʃən/ (如 ac-tion, na-tion)' },
  { pattern: /ture/i, chunk: 'ture', rule: '常見後綴 /tʃər/ (如 ad-ven-ture, pic-ture)' },
  { pattern: /ch/i, chunk: 'ch', rule: '塞擦音 /tʃ/ (如 change, chair)' },
  { pattern: /sh/i, chunk: 'sh', rule: '擦音 /ʃ/ (如 shine, share)' },
  { pattern: /th/i, chunk: 'th', rule: '咬舌音 /θ/ 或 /ð/ (如 faith, the, with)' },
  { pattern: /ou/i, chunk: 'ou', rule: '雙母音 /aʊ/ (如 count, sound, proud)' },
  { pattern: /ar/i, chunk: 'ar', rule: '捲舌母音 /ɑːr/ (如 start, star, car)' },
  { pattern: /or/i, chunk: 'or', rule: '捲舌母音 /ɔːr/ (如 for, story, storm)' },
  { pattern: /ur|er|ir/i, chunk: 'ur/er/ir', rule: '捲舌音 /ɜːr/ (如 pur-pose, bird, her)' }
];

// 初始化載入
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  renderNavigation();
  renderCurrentView();
});

async function loadData() {
  try {
    const [studentsRes, coursesRes, materialsRes] = await Promise.all([
      fetch('data/students.json'),
      fetch('data/courses.json'),
      fetch('data/curated_materials.json')
    ]);
    AppState.students = await studentsRes.json();
    AppState.courses = await coursesRes.json();
    AppState.materials = await materialsRes.json();
  } catch (error) {
    console.warn('使用內建離線資料庫（支援直接雙擊開啟）:', error);
    AppState.students = DEFAULT_STUDENTS;
    AppState.courses = DEFAULT_COURSES;
    AppState.materials = DEFAULT_MATERIALS;
  }
}

// 導覽列與標籤渲染
function renderNavigation() {
  const courseListEls = document.querySelectorAll('#nav-course-select, #mobile-course-select');
  const studentListEls = document.querySelectorAll('#nav-student-select, #mobile-student-select');

  courseListEls.forEach(courseListEl => {
    courseListEl.innerHTML = AppState.courses.map(c => `
      <option value="${c.id}" ${AppState.currentCourseId === c.id ? 'selected' : ''}>${c.timeSlot.split(' ')[0]} ${c.period}｜${c.name}</option>
    `).join('');
  });

  studentListEls.forEach(studentListEl => {
    studentListEl.innerHTML = AppState.students.map(s => `
      <option value="${s.id}" ${AppState.currentStudentId === s.id ? 'selected' : ''}>${s.name} (${s.grade})</option>
    `).join('');
  });
}

function selectCourse(courseId) {
  AppState.currentCourseId = courseId;
  AppState.activeView = 'course';
  const course = AppState.courses.find(c => c.id === courseId);
  if (course && course.students && course.students.length > 0) {
    const firstStudentName = course.students[0].split(' ')[0];
    const foundStudent = AppState.students.find(s => s.name === firstStudentName);
    if (foundStudent) AppState.currentStudentId = foundStudent.id;
  }
  renderNavigation();
  renderCurrentView();
}

function selectStudent(studentId) {
  AppState.currentStudentId = studentId;
  AppState.activeView = 'student';
  const student = AppState.students.find(s => s.id === studentId);
  if (student && student.courseId) {
    AppState.currentCourseId = student.courseId;
  }
  renderNavigation();
  renderCurrentView();
}

function goHome() {
  AppState.currentCourseId = 'group-a';
  AppState.currentStudentId = 'zhiyu';
  AppState.activeView = 'course';
  renderNavigation();
  renderCurrentView();
  document.getElementById('main-workspace')?.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCustomParser() {
  AppState.activeView = 'custom-parser';
  renderNavigation();
  renderCurrentView();
}

function renderCurrentView() {
  const container = document.getElementById('main-workspace');
  if (!container) return;
  document.body.dataset.activeView = AppState.activeView;

  if (AppState.activeView === 'custom-parser') {
    renderCustomParserView(container);
  } else if (AppState.activeView === 'student') {
    renderStudentDetailView(container);
  } else {
    renderCourseView(container);
  }
}

// 渲染課程主畫面
function renderCourseView(container) {
  const course = AppState.courses.find(c => c.id === AppState.currentCourseId);
  if (!course) return;

  const courseStudents = AppState.students.filter(s => s.courseId === course.id);

  let contentHtml = '';
  if (course.id === 'group-a') {
    contentHtml = renderMovieCourseSection();
  } else if (course.id === 'individual-xing') {
    contentHtml = renderHealingCourseSection();
  } else if (course.id === 'group-music') {
    contentHtml = renderMusicCourseSection();
  } else if (course.id === 'group-c') {
    contentHtml = renderPresentationCourseSection();
  } else if (course.id === 'individual-xi') {
    contentHtml = renderCanadaCourseSection();
  } else if (course.id === 'individual-cheng') {
    contentHtml = renderChengCourseSection();
  }

  container.innerHTML = `
    <!-- 頂部資訊條 -->
    <div class="course-summary-header bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 lg:min-h-[168px]">
      <div>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">課表時段: ${course.timeSlot}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">地點: ${course.location}</span>
        </div>
        <h1 class="text-2xl font-black text-slate-800 mt-1">${course.name}</h1>
        <p class="text-sm text-slate-500 mt-0.5">${course.description}</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="prepareAndPrintCurrentCourse()" class="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-2 transition-all">
          <span>🖨️</span> 列印今日手寫單
        </button>
        <button onclick="showCustomParser()" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-2 transition-all">
          <span>✨</span> 解析自訂台詞/音樂
        </button>
      </div>
    </div>

    <!-- 學生特質卡片條 -->
    <div class="course-student-strip bg-amber-50/50 border-b border-amber-100 px-6 py-3 flex items-center gap-3 overflow-x-auto">
      <span class="text-xs font-bold text-amber-900 whitespace-nowrap">本班學習者：</span>
      ${courseStudents.map(s => `
        <button onclick="selectStudent('${s.id}')" title="查看 ${s.name} 的學習者檔案"
          class="bg-white border border-amber-200 px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-2 text-xs transition hover:border-amber-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300">
          <span class="font-bold text-slate-800">${s.name} (${s.grade} ${s.gender})</span>
        </button>
      `).join('')}
    </div>

    <!-- 每堂課皆使用相同的三步操作，降低首次使用時的判斷成本。 -->
    <section class="bg-white border-b border-slate-200 px-4 sm:px-6 py-4" aria-label="今日課堂快速操作">
      <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button onclick="scrollToCourseMaterials()" class="group text-left rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-amber-400 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300">
          <span class="flex items-center gap-2 text-sm font-black text-slate-800"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs text-amber-900">1</span> 選擇今日素材</span>
          <span class="mt-1 block text-xs text-slate-500">台詞、歌詞或情境任務</span>
        </button>
        <button onclick="openCurrentCourseStudio()" class="group text-left rounded-2xl border border-violet-200 bg-violet-50 p-3 transition hover:border-violet-400 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-300">
          <span class="flex items-center gap-2 text-sm font-black text-violet-950"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-violet-200 text-xs text-violet-900">2</span> 開始 AI 共學</span>
          <span class="mt-1 block text-xs text-violet-700">AI 主動帶領，老師隨時加入</span>
        </button>
        <button onclick="prepareAndPrintCurrentCourse()" class="group text-left rounded-2xl border border-teal-200 bg-teal-50 p-3 transition hover:border-teal-400 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300">
          <span class="flex items-center gap-2 text-sm font-black text-teal-950"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-teal-200 text-xs text-teal-900">3</span> 列印手寫單</span>
          <span class="mt-1 block text-xs text-teal-700">把今天的練習帶到紙上</span>
        </button>
      </div>
    </section>

    ${renderThreeWayLaunchCard(course)}

    <!-- 課程主內容模組 -->
    <div id="course-materials" class="p-4 sm:p-6 scroll-mt-24">
      ${contentHtml}
    </div>
  `;
}

function scrollToCourseMaterials() {
  document.getElementById('course-materials')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getCourseStudioConfig(courseId = AppState.currentCourseId) {
  const movie = AppState.materials.movieQuotes?.[0];
  const song = AppState.materials.musicSongs?.[0];

  const studioConfigs = {
    'group-a': movie && [movie.movieTitle, movie.quote, '知諭', 'AI 角色夥伴'],
    'individual-xing': ['日常生活挑戰', 'I can play and win the game!', '樂行', '暖心 AI 夥伴'],
    'group-music': song && [song.songTitle, song.keyLyrics, '知諾 (彈唱)', '齡萱 & AI 音樂教練'],
    'individual-cheng': ['思辨探索', 'The future is unpredictable, but we can create it.', '逸澄', '哲思 AI 導師'],
    'individual-xi': ['加拿大生活情境', 'Hi, welcome to Vancouver! Would you like to visit the art club?', '凝希', '加拿大友善學伴 (AI)'],
    'group-c': ['1.5分鐘短講挑戰', 'Today, I want to share something important with you.', '演講者 (岳軒/虹茵/紘羽)', 'AI 簡報教練']
  };
  return studioConfigs[courseId] || null;
}

function openCurrentCourseStudio() {
  const config = getCourseStudioConfig();
  if (config) openThreeWayStudio(...config);
}

function renderThreeWayLaunchCard(course) {
  const config = getCourseStudioConfig(course.id);
  if (!config) return '';
  const [topic, targetQuote, studentRole, aiRole] = config;

  return `
    <section class="mx-4 mt-4 rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 via-white to-sky-50 p-5 shadow-xs sm:mx-6" aria-label="三方共學對話入口">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="min-w-0">
          <span class="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-black text-violet-800">🎙️ 每個組別都有三方共學</span>
          <h2 class="mt-2 text-lg font-black text-slate-900">老師 ＋ ${studentRole} ＋ AI 一起練習</h2>
          <p class="mt-1 text-xs leading-relaxed text-slate-600">AI 會主動帶領、依回應提問；Cindy 老師可隨時加入鼓勵與引導。</p>
          <p class="mt-2 truncate rounded-xl bg-white/80 px-3 py-2 text-xs text-slate-700 ring-1 ring-violet-100">本次情境：<strong>${topic}</strong>　<span class="text-slate-500">“${targetQuote}”</span></p>
        </div>
        <button onclick="openCurrentCourseStudio()" class="shrink-0 rounded-2xl bg-violet-700 px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400">
          🎙️ 開始三方對話
        </button>
      </div>
    </section>
  `;
}

// 模組1: 電影台詞組 (知諭 G9 女 ＆ 蘑菇 G6 女)
function renderMovieCourseSection() {
  const quotes = AppState.materials.movieQuotes || [];
  return `
    <div class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-2xl">
        <div>
          <span class="text-xs font-black text-amber-800 uppercase tracking-wider">🌟 雙向互動核心體驗</span>
          <h2 class="text-lg font-black text-slate-900 mt-0.5">Cindy 老師 ＋ 學生 ＋ AI 三方共學互動對話室</h2>
          <p class="text-xs text-slate-600 mt-1">學生開口說英文，AI 不急著打斷，而是認真聆聽完整句，溫柔診斷哪裡唸得超好、哪裡可微調，並由電影角色即時接話！</p>
        </div>
        <button onclick="openThreeWayStudio('奇幻屋的夜晚（原創情境）', 'The house is quiet, but my mind is awake.', '知諭', 'AI 角色夥伴')" 
          class="px-5 py-3 bg-violet-700 hover:bg-violet-800 text-white font-extrabold text-sm rounded-xl shadow-md flex items-center gap-2 transition-all transform hover:scale-105">
          <span>🎙️</span> 進入「奇幻屋」三方互動對話室 &rarr;
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${quotes.map(q => `
          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between hover:border-amber-300 transition-all">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-100 text-rose-800">
                  🎯 適合：${q.targetStudent}
                </span>
                <span class="text-xs text-slate-400 font-medium">${q.vibe}</span>
              </div>

              <h3 class="font-bold text-slate-900 text-base mb-1">${q.movieTitle}</h3>
              
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 my-3">
                <p class="text-slate-900 font-semibold text-base tracking-wide">"${q.quote}"</p>
                <p class="text-slate-500 text-xs mt-2">${q.translation}</p>
                <div class="mt-3 flex flex-wrap items-center gap-2">
                  <button onclick="speakText('${q.quote.replace(/'/g, "\\'")}', 0.75)" class="text-xs px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 font-medium flex items-center gap-1">
                    <span>🔊</span> 慢速聆聽
                  </button>
                  <button onclick="speakText('${q.quote.replace(/'/g, "\\'")}', 1.0)" class="text-xs px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 font-medium flex items-center gap-1">
                    <span>⚡</span> 正常速
                  </button>
                  <button onclick="openThreeWayStudio('${q.movieTitle.replace(/'/g, "\\'")}', '${q.quote.replace(/'/g, "\\'")}', '${q.targetStudent.includes('知諭') ? '知諭' : 'Judy (蘑菇)'}', 'AI 伴學教練')" 
                    class="text-xs px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold flex items-center gap-1 shadow-xs">
                    <span>🎙️</span> AI 三方互動練習
                  </button>
                </div>
              </div>

              <!-- 自然拼讀與音素拆解 -->
              <div class="mt-4">
                <h4 class="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">🔤 關鍵單字音素與發音規律</h4>
                <div class="space-y-2">
                  ${q.targetPhonics.map(p => `
                    <div class="bg-amber-50/60 border border-amber-200/80 rounded-lg p-2.5 text-xs flex items-center justify-between">
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="font-extrabold text-amber-900 text-sm">${p.word}</span>
                          ${p.syllables ? `<span class="px-1.5 py-0.5 bg-white rounded text-[10px] text-slate-600 border border-slate-200">音節: ${p.syllables}</span>` : ''}
                          <span class="text-slate-500">→ ${p.meaning}</span>
                        </div>
                        <div class="text-[11px] text-amber-800 mt-0.5">拆解：${p.phonics} （${p.rule}）</div>
                      </div>
                      <button onclick="speakText('${p.word}', 0.7)" class="p-1.5 hover:bg-amber-200/60 rounded-full text-amber-900">
                        🔊
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="mt-5 pt-3 border-t border-slate-100 flex justify-between items-center">
              <button onclick="openThreeWayStudio('${q.movieTitle.replace(/'/g, "\\'")}', '${q.quote.replace(/'/g, "\\'")}', '${q.targetStudent.includes('知諭') ? '知諭' : 'Judy (蘑菇)'}', 'AI 伴學教練')" class="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1">
                <span>💬</span> 進入三方互動對話 &rarr;
              </button>
              <button onclick="generateSingleQuoteWorksheet('${q.id}')" class="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1">
                <span>📄</span> 印學習單
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 模組2: 樂行 暖心聽說修復組
function renderHealingCourseSection() {
  const healingData = AppState.materials.healingTracks[0];
  return `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">🌱</div>
          <div>
            <h2 class="text-lg font-bold text-slate-800">樂行專屬：音素積木格與暖心日常聽說</h2>
            <p class="text-xs text-slate-500">修復英語挫折創傷！100% 正向肯定、零紅筆糾錯，由 AI 與 Cindy 陪他開口。</p>
          </div>
        </div>
        <button onclick="openThreeWayStudio('日常生活挑戰', 'I can play and win the game!', '樂行', '暖心 AI 夥伴')" 
          class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5">
          <span>🎙️</span> 進入樂行三方對話練習室
        </button>
      </div>

      <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex items-center gap-2">
        <span>💡</span>
        <span><strong>引導口訣：</strong>「聽出開頭音、中間肚子音、結尾音，放進積木格中，樂行你耳朵很靈，一定聽得出來！」</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        ${healingData.soundBoxWords.map(w => `
          <div class="border border-slate-200 rounded-xl p-4 text-center bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all">
            <div class="text-xs text-slate-400 font-medium mb-1">${w.type}</div>
            <div class="text-xl font-black text-slate-800 mb-1">${w.word}</div>
            <div class="text-xs text-emerald-700 font-bold mb-3">${w.sound}</div>
            <div class="flex justify-center gap-1.5 mb-4">
              ${w.boxes.map(b => `
                <div class="w-8 h-9 border-2 border-emerald-500 bg-white rounded-lg flex items-center justify-center font-bold text-emerald-900 text-sm shadow-2xs">
                  ${b}
                </div>
              `).join('')}
            </div>
            <div class="flex gap-1.5">
              <button onclick="speakText('${w.word}', 0.75)" class="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all">
                🔊 聽音
              </button>
              <button onclick="openThreeWayStudio('音素挑戰: ' + '${w.word}', 'The ${w.word} is fast.', '樂行', '超有愛 AI 夥伴')" class="flex-1 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-all">
                🎙️ 開口
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span class="text-xs text-slate-500">已準備好 4 格音素學習單，可隨時手寫</span>
        <button onclick="generateHealingWorksheet()" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1">
          <span>🖨️</span> 列印樂行專屬「音素大方格」手寫單
        </button>
      </div>
    </div>
  `;
}

// 模組3: 知諾 ＆ 齡萱 音樂歌詞組
function renderMusicCourseSection() {
  const songs = AppState.materials.musicSongs || [];
  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>🎵</span> 知諾音樂主角 ＆ 齡萱溫暖伴學：經典歌詞與押韻自然發音
          </h2>
          <p class="text-xs text-slate-500">結合知諾的吉他、鋼琴彈唱天賦，從歌詞『押韻（Rhyme）』中學會自然拼讀！</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${songs.map(s => `
          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                  🎸 彈唱和弦: ${s.guitarChords || s.pianoChords}
                </span>
                <span class="text-xs text-slate-400">${s.artist}</span>
              </div>

              <h3 class="font-extrabold text-slate-900 text-lg mb-1">${s.songTitle}</h3>
              <p class="text-xs text-slate-500 mb-3">${s.vibe}</p>

              <div class="bg-purple-50/50 border border-purple-100 p-3.5 rounded-xl mb-4">
                <p class="text-slate-800 font-serif italic text-sm">"${s.keyLyrics}"</p>
                <p class="text-slate-500 text-xs mt-2">${s.translation}</p>
                <div class="mt-3 flex gap-2">
                  <button onclick="speakText('${s.keyLyrics.replace(/'/g, "\\'")}', 0.85)" class="text-xs px-2.5 py-1 bg-white border border-purple-200 text-purple-900 rounded-lg hover:bg-purple-100 font-medium flex items-center gap-1">
                    <span>🔊</span> 慢速聆聽歌詞
                  </button>
                  <button onclick="openThreeWayStudio('${s.songTitle}', '${s.keyLyrics.replace(/'/g, "\\'")}', '知諾 (彈唱)', '齡萱 & AI 音樂教練')" class="text-xs px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold flex items-center gap-1">
                    <span>🎙️</span> 進入彈唱對話室
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider">🎼 押韻家族自然拼音 (Rhyme Families)</h4>
                ${s.rhymeFamilies.map(rf => `
                  <div class="bg-slate-50 rounded-lg p-2.5 text-xs">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-purple-700">${rf.pattern} 家族:</span>
                      <span class="font-medium text-slate-800">${rf.words.join(', ')}</span>
                    </div>
                    <p class="text-[11px] text-slate-500 mt-1">${rf.rule}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="mt-5 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="generateMusicWorksheet('${s.id}')" class="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1">
                <span>📄</span> 生成知諾專屬吉他歌詞手寫譜 &rarr;
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 模組4: 英文組C (岳軒 G9、虹茵 G7、紘羽 G6) 簡報短講
function renderPresentationCourseSection() {
  const presData = AppState.materials.presentationTracks[0];
  return `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>🎙️</span> 英文組C：1.5分鐘主題短講 ＋ 會考核心單字音節拆解
          </h2>
          <p class="text-xs text-slate-500">岳軒 (G9 會考)、虹茵 (G7 會考儲備)、紘羽 (G6 活潑觀點) 共同激盪！</p>
        </div>
        <button onclick="openThreeWayStudio('1.5分鐘短講挑戰', 'Today, I want to share something important with you.', '演講者 (岳軒/虹茵/紘羽)', 'AI 簡報教練')" 
          class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5">
          <span>🎙️</span> 進入短講演練錄音室
        </button>
      </div>

      <!-- 1.5分鐘短講三段式骨架 -->
      <div>
        <h3 class="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">⏱️ 90 秒短講三段式骨架 (The 90-Second Pitch)</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${presData.structure.map(st => `
            <div class="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-slate-800 text-sm">${st.part}</span>
                <span class="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded-md">${st.time}</span>
              </div>
              <p class="text-xs text-slate-600 mt-2 font-mono bg-white p-2 rounded border border-slate-200">${st.template}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 會考核心單字音節拆解庫 -->
      <div>
        <h3 class="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">📚 會考核心生字：音節拆解法（拒絕死記 10 個字母！）</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          ${presData.examVocabBooster.map(v => `
            <div class="bg-amber-50/40 border border-amber-200 rounded-xl p-3.5">
              <div class="flex items-center justify-between mb-1">
                <span class="font-extrabold text-slate-900 text-base">${v.word}</span>
                <button onclick="speakText('${v.word}', 0.75)" class="text-slate-600 hover:text-amber-800">🔊</button>
              </div>
              <div class="text-xs text-amber-900 font-bold mb-1">音節: ${v.syllables}</div>
              <div class="text-xs text-slate-600 mb-2">${v.meaning}</div>
              <div class="text-[11px] text-slate-500 italic bg-white p-1.5 rounded border border-amber-100">"${v.sample}"</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex justify-end">
        <button onclick="generatePresentationWorksheet()" class="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1">
          <span>🖨️</span> 列印今日「1.5分鐘手寫提詞大綱卡」
        </button>
      </div>
    </div>
  `;
}

// 模組5: 凝希 加拿大生活實境
function renderCanadaCourseSection() {
  const cData = AppState.materials.canadaTracks[0];
  return `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>🍁</span> 凝希專屬：加拿大留學真實微情境與溫和生活解碼
          </h2>
          <p class="text-xs text-slate-500">預備兩年後赴加求學。針對高敏感與亞斯特質，提供高度心理安全感的日常生活對話。</p>
        </div>
        <button onclick="openThreeWayStudio('加拿大生活情境', 'Hi, welcome to Vancouver! Would you like to visit the art club?', '凝希', '加拿大友善學伴 (AI)')" 
          class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5">
          <span>🎙️</span> 進入加拿大對話室
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${cData.realLifeSigns.map(s => `
          <div class="border border-slate-200 rounded-xl p-4 bg-red-50/30">
            <span class="text-xs px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">生活告示實景</span>
            <h4 class="font-bold text-slate-900 text-sm mt-2">${s.sign}</h4>
            <p class="text-xs text-slate-500 mt-1">${s.meaning}</p>
            <div class="mt-3 flex gap-1">
              ${s.chunks.map(ch => `<span class="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">${ch}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="pt-4 border-t border-slate-100 flex justify-end">
        <button onclick="generateCanadaWorksheet()" class="px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1">
          <span>🖨️</span> 列印凝希專屬「加拿大生活實境解碼單」
        </button>
      </div>
    </div>
  `;
}

// 模組6: 逸澄 自主探索
function renderChengCourseSection() {
  return `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>🧭</span> 逸澄專屬：跨領域高階思辨與自主專案
          </h2>
          <p class="text-xs text-slate-500">高中高年級，邏輯推演好手。透過多音節字根拆解（Prefix-Root-Suffix）與深度對話。</p>
        </div>
        <button onclick="openThreeWayStudio('思辨探索', 'The future is unpredictable, but we can create it.', '逸澄', '哲思 AI 導師')" 
          class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5">
          <span>🎙️</span> 進入逸澄思辨對話室
        </button>
      </div>
      <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
        <p><strong>待探索方向：</strong>數學策略、人工智慧前沿倫理、棋藝博弈英文文獻。</p>
        <p><strong>詞彙拆解示範：</strong><code>un-pre-dict-a-ble</code> (un: 不 + pre: 提前 + dict: 說話 + able: 能夠 = 無法預測的)</p>
      </div>
    </div>
  `;
}

// ==========================================================
// 🎙️ 核心亮點：Cindy ＋ 學生 ＋ AI 三方共學互動對話室 (Interactive Studio)
// ==========================================================
function openThreeWayStudio(movieOrTopic, targetQuote, studentRole, aiRole) {
  const s = AppState.studio;
  s.isOpen = true;
  s.targetMovie = movieOrTopic;
  s.targetQuote = targetQuote;
  s.activeRole = studentRole;
  s.coachName = aiRole;
  s.lessonStep = 0;
  s.isListening = false;
  s.recognizedText = '';
  s.interimText = '';

  // 初始三方對話
  s.chatHistory = [
    {
      speaker: 'Cindy 老師',
      role: 'cindy',
      avatar: '👩‍🏫',
      text: `同學好！今天我們要一起探索「${movieOrTopic}」。AI 會主動帶領每一小步；我會在旁邊陪你把想法說得更清楚。`,
      time: '剛剛'
    },
    {
      speaker: aiRole,
      role: 'ai',
      avatar: '🤖',
      text: `Hi ${studentRole}! I am your active learning partner today. I will listen, give you a small next step, and ask about your own ideas — we will learn this together.`,
      time: '剛剛'
    }
  ];

  renderStudioModal();
  window.setTimeout(() => {
    if (s.isOpen && s.targetMovie === movieOrTopic && s.lessonStep === 0) advanceAiLesson();
  }, 250);
}

function getDiscussionQuestion(movie) {
  if (movie.includes('奇幻屋')) return 'What small detail makes this house feel mysterious to you?';
  if (movie.includes('神祕學院')) return 'Which detail would you investigate first?';
  if (movie.includes('動物方城市') || movie.includes('Zootopia')) return 'What is one small change you would like to make?';
  return 'Which word or idea stands out to you, and why?';
}

function getTargetChunk(target) {
  return target.replace(/[.,!?]/g, '').split(/\s+/).slice(0, 4).join(' ');
}

// AI 不等待學生下指令，而是主動提供下一個可完成的小步驟。
function advanceAiLesson() {
  const s = AppState.studio;
  if (!s.isOpen) return;

  const chunk = getTargetChunk(s.targetQuote);
  const prompts = [
    `Step 1 — Listen first. I will say the whole sentence slowly: “${s.targetQuote}” Then tell me which word you notice most.`,
    `Step 2 — Echo with me in a small chunk: “${chunk}.” You can speak it, or type it below if you would rather begin quietly.`,
    `Step 3 — Make it yours. ${getDiscussionQuestion(s.targetMovie)} One short English sentence is enough; I will help you build it.`,
    `Let’s choose together: would you like to repeat the target sentence, answer my question, or create a new line for this scene?`
  ];
  const prompt = prompts[Math.min(s.lessonStep, prompts.length - 1)];
  s.lessonStep += 1;
  s.chatHistory.push({
    speaker: s.coachName,
    role: 'ai',
    avatar: '🤖',
    text: prompt,
    time: '剛剛'
  });
  renderStudioModal();
  window.setTimeout(() => speakText(prompt, 0.86), 150);
}

function closeThreeWayStudio() {
  stopListening();
  AppState.studio.isOpen = false;
  const modal = document.getElementById('studio-modal');
  if (modal) modal.remove();
}

function renderStudioModal() {
  let modal = document.getElementById('studio-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'studio-modal';
    document.body.appendChild(modal);
  }

  const s = AppState.studio;

  modal.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        <!-- 頂部標題列 -->
        <div class="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-amber-500 text-slate-900 flex items-center justify-center font-black text-xl shadow-xs">
              🎙️
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs uppercase font-extrabold tracking-wider text-amber-400">Three-Way Interactive Studio</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300">Cindy ＋ 學生 ＋ AI</span>
              </div>
              <h3 class="text-lg font-black text-white">${s.targetMovie}</h3>
            </div>
          </div>
          <button onclick="closeThreeWayStudio()" class="text-slate-400 hover:text-white text-xl p-1 rounded-lg">✕</button>
        </div>

        <!-- 目標挑戰句子卡片 -->
        <div class="bg-amber-50/70 border-b border-amber-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
          <div>
            <div class="text-[11px] font-bold text-amber-800 uppercase">🎯 當前練習目標句：</div>
            <div class="text-base font-serif font-bold text-slate-900 tracking-wide mt-0.5">"${s.targetQuote}"</div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="speakText('${s.targetQuote.replace(/'/g, "\\'")}', 0.75)" class="px-3 py-1.5 bg-white border border-amber-300 text-amber-900 hover:bg-amber-100 rounded-xl text-xs font-bold flex items-center gap-1 shadow-2xs">
              <span>🔊</span> 慢速示範
            </button>
          </div>
        </div>

        <!-- 對話氣泡滾動區域 -->
        <div id="studio-chat-container" class="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
          ${s.chatHistory.map(msg => renderChatBubble(msg)).join('')}
        </div>

        <!-- 即時說話狀態區 (錄音中顯示) -->
        <div id="recording-live-panel" class="border-t border-slate-200 bg-white px-6 py-4 ${s.isListening ? 'block' : 'hidden'}">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full bg-red-500 recording-pulse"></span>
              <span class="text-xs font-bold text-red-600">正在聆聽 ${s.activeRole} 開口說話...（請慢慢說，說完點擊『完成說話』）</span>
            </div>
            <span class="text-[11px] text-slate-400">系統不會提前切斷，請安心完整表達</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-serif min-h-[50px] text-slate-800">
            <span id="live-final-transcript" class="font-bold text-slate-900">${s.recognizedText || ''}</span>
            <span id="live-interim-transcript" class="text-amber-600 italic">${s.interimText || '（請對著麥克風說話...）'}</span>
          </div>
        </div>

        <!-- 底部互動控制區 -->
        <div class="bg-white border-t border-slate-200 p-4 px-6 flex flex-wrap items-center justify-between gap-3">
          
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500">以身分開口：</span>
            <span class="px-3 py-1 bg-sky-100 text-sky-900 rounded-lg text-xs font-bold">${s.activeRole}</span>
          </div>

          <div class="flex items-center gap-3">
            <button onclick="advanceAiLesson()" class="px-4 py-2.5 bg-violet-700 hover:bg-violet-800 text-white font-black text-xs rounded-2xl shadow-sm transition-all flex items-center gap-1.5">
              <span>🤖</span> AI 主動帶下一步
            </button>
            ${s.isListening ? `
              <button onclick="stopAndSubmitSpeech()" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl shadow-md transition-all flex items-center gap-2 transform hover:scale-105">
                <span>⏹️</span> 說完了！交給 AI 診斷並接話
              </button>
              <button onclick="cancelListening()" class="px-3 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-2xl text-xs font-bold">
                取消重來
              </button>
            ` : `
              <button onclick="startContinuousSpeech()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-2xl shadow-md transition-all flex items-center gap-2 transform hover:scale-105">
                <span>🎙️</span> 點擊開始說話（不設秒數限制）
              </button>
              <button onclick="simulateStudentSpeech()" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold" title="若麥克風無權限時可模擬學生發音">
                💡 測試示範輸入
              </button>
            `}
          </div>

          ${s.isListening ? '' : `
            <div class="w-full flex flex-col sm:flex-row gap-2 rounded-2xl bg-violet-50 border border-violet-100 p-2.5">
              <label for="student-text-input" class="sr-only">輸入想對 AI 說的英文</label>
              <input id="student-text-input" type="text" onkeydown="if(event.key === 'Enter') submitStudentText()" placeholder="不想先開口？可以在這裡用英文回 AI…"
                class="min-w-0 flex-1 bg-white border border-violet-200 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100" />
              <button onclick="submitStudentText()" class="px-4 py-2 bg-white border border-violet-300 hover:bg-violet-100 text-violet-900 rounded-xl text-xs font-bold whitespace-nowrap">送出給 AI</button>
            </div>
          `}

          <!-- Cindy 老師即時鼓勵快捷鈕 -->
          <div class="w-full flex items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <span class="text-slate-400 font-bold">👩‍🏫 Cindy 老師快速鼓舞：</span>
            <button onclick="cindySendCheer('很棒的嘗試！聲音很宏亮，我們繼續！')" class="px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg font-medium">👏 聲音很宏亮！</button>
            <button onclick="cindySendCheer('眼神與自信完全到位，很有電影主角的感覺！')" class="px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg font-medium">✨ 眼神很自信！</button>
            <button onclick="cindySendCheer('這個母音拉得非常漂亮！聽得出你的進步！')" class="px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg font-medium">🎯 母音很漂亮！</button>
          </div>

        </div>

      </div>
    </div>
  `;

  // 自動滾動到底部
  const chatBox = document.getElementById('studio-chat-container');
  if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
}

function renderChatBubble(msg) {
  if (msg.role === 'cindy') {
    return `
      <div class="flex items-start gap-3">
        <div class="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg shrink-0">${msg.avatar}</div>
        <div class="max-w-[80%]">
          <div class="text-[11px] font-bold text-amber-900 mb-0.5">${msg.speaker}</div>
          <div class="chat-bubble-cindy p-3 text-xs text-amber-950 font-medium leading-relaxed shadow-2xs">
            ${msg.text}
          </div>
        </div>
      </div>
    `;
  } else if (msg.role === 'student') {
    return `
      <div class="flex items-start justify-end gap-3">
        <div class="max-w-[80%] text-right">
          <div class="text-[11px] font-bold text-sky-900 mb-0.5">${msg.speaker}</div>
          <div class="chat-bubble-student p-3 text-left text-xs text-sky-950 font-medium leading-relaxed shadow-2xs">
            "${msg.text}"
          </div>
          ${msg.evaluation ? `
            <div class="mt-2 text-left bg-white border border-slate-200 p-3 rounded-xl shadow-xs text-xs space-y-2">
              <div class="flex items-center justify-between border-b border-slate-100 pb-1.5">
                <span class="font-black text-slate-800">🎧 AI 聆聽診斷回饋</span>
                <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">${msg.evaluation.badge}</span>
              </div>
              <div class="text-slate-700">
                <div class="font-bold text-emerald-700">✨ 亮點：${msg.evaluation.pros}</div>
                <div class="font-bold text-amber-800 mt-1">💡 微調提醒：${msg.evaluation.advice}</div>
              </div>
              ${msg.evaluation.tipWord ? `
                <div class="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span>關鍵字示範：<strong>${msg.evaluation.tipWord}</strong></span>
                  <button onclick="speakText('${msg.evaluation.tipWord}', 0.7)" class="text-amber-800 hover:text-amber-900 font-bold">🔊 聽示範</button>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
        <div class="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-lg shrink-0">${msg.avatar}</div>
      </div>
    `;
  } else {
    // AI 伴學教練
    return `
      <div class="flex items-start gap-3">
        <div class="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-lg shrink-0">${msg.avatar}</div>
        <div class="max-w-[80%]">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="text-[11px] font-bold text-purple-900">${msg.speaker}</span>
            <button onclick="speakText('${msg.text.replace(/'/g, "\\'")}', 0.9)" class="text-[10px] text-purple-700 hover:underline">🔊 唸出這句話</button>
          </div>
          <div class="chat-bubble-ai p-3 text-xs text-slate-800 font-medium leading-relaxed shadow-2xs">
            ${msg.text}
          </div>
        </div>
      </div>
    `;
  }
}

// 啟動無時限持續語音辨識
function startContinuousSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('此瀏覽器未啟用 Web Speech API 語音辨識，請使用 Chrome 體驗最佳效果。');
    return;
  }

  const s = AppState.studio;
  s.isListening = true;
  s.recognizedText = '';
  s.interimText = '';

  try {
    if (s.recognitionInstance) {
      s.recognitionInstance.abort();
    }

    const rec = new SpeechRecognition();
    rec.lang = 'en-US';
    rec.continuous = true; // 關鍵！不提早中斷！
    rec.interimResults = true; // 即時顯示文字

    rec.onresult = (event) => {
      let finalStr = '';
      let interimStr = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalStr += event.results[i][0].transcript + ' ';
        } else {
          interimStr += event.results[i][0].transcript;
        }
      }
      if (finalStr) s.recognizedText += finalStr;
      s.interimText = interimStr;

      // 更新即時文字
      const finEl = document.getElementById('live-final-transcript');
      const intEl = document.getElementById('live-interim-transcript');
      if (finEl) finEl.innerText = s.recognizedText;
      if (intEl) intEl.innerText = s.interimText;
    };

    rec.onerror = (event) => {
      console.warn('Speech error:', event.error);
    };

    rec.onend = () => {
      // 若非手動停止，且仍在監聽中，自動重啟保持聆聽（防止靜音提早結束）
      if (s.isListening) {
        try { rec.start(); } catch (e) {}
      }
    };

    rec.start();
    s.recognitionInstance = rec;
    renderStudioModal();

  } catch (err) {
    console.error('啟動語音失敗:', err);
    s.isListening = false;
    renderStudioModal();
  }
}

function stopListening() {
  const s = AppState.studio;
  s.isListening = false;
  if (s.recognitionInstance) {
    try { s.recognitionInstance.stop(); } catch (e) {}
    s.recognitionInstance = null;
  }
}

function cancelListening() {
  stopListening();
  renderStudioModal();
}

function stopAndSubmitSpeech() {
  const s = AppState.studio;
  stopListening();

  const totalText = (s.recognizedText + ' ' + s.interimText).trim();
  if (!totalText) {
    alert('尚未偵測到說話內容，請再試一次～');
    renderStudioModal();
    return;
  }

  processStudentSpeechSubmission(totalText);
}

// 測試用模擬輸入
function simulateStudentSpeech() {
  const s = AppState.studio;
  const sample = s.targetQuote.replace(/[?!.]/g, '');
  processStudentSpeechSubmission(sample);
}

// 讓暫時不想使用麥克風的學生，也能直接和 AI 進行英文對話。
function submitStudentText() {
  const input = document.getElementById('student-text-input');
  const text = input ? input.value.trim() : '';
  if (!text) {
    if (input) input.focus();
    return;
  }
  processStudentSpeechSubmission(text, true);
}

// 核心：AI 聆聽診斷與三方對話接龍
function processStudentSpeechSubmission(studentSpeech, isTyped = false) {
  const s = AppState.studio;
  
  // 1. 麥克風輸入才提供聆聽回饋；文字輸入直接視為對話訊息。
  const evaluation = isTyped ? null : evaluatePronunciation(studentSpeech, s.targetQuote);

  // 2. 加入學生訊息氣泡
  s.chatHistory.push({
    speaker: s.activeRole,
    role: 'student',
    avatar: '🧑‍🎓',
    text: studentSpeech,
    evaluation: evaluation,
    time: '剛剛'
  });

  // 3. AI 角色扮演即時接話
  const aiReply = generateAiRoleplayReply(studentSpeech, s.targetQuote, s.targetMovie);
  s.chatHistory.push({
    speaker: 'AI 伴學教練',
    role: 'ai',
    avatar: '🤖',
    text: aiReply,
    time: '剛剛'
  });

  renderStudioModal();

  // 自動以語音唸出 AI 接話
  setTimeout(() => {
    speakText(aiReply, 0.9);
  }, 500);
}

// 發音與音素診斷評估邏輯
function evaluatePronunciation(spoken, target) {
  const spokenWords = spoken.toLowerCase().replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
  const targetWords = target.toLowerCase().replace(/[^a-zA-Z\s]/g, '').split(/\s+/);

  let matchedCount = 0;
  targetWords.forEach(w => {
    if (spokenWords.includes(w)) matchedCount++;
  });

  const ratio = matchedCount / targetWords.length;
  let badge = '🌟 氣勢十足！';
  let pros = '';
  let advice = '';
  let tipWord = '';

  if (target.toLowerCase().includes('ready') || target.toLowerCase().includes('leap')) {
    tipWord = 'leap';
    if (ratio >= 0.75) {
      badge = '🏆 完整度極佳 (85%+)';
      pros = '「know」與「ready」的開口非常自信清晰，語調很有情緒感染力！';
      advice = '「leap」中的長母音 ea 可以試著微笑、將嘴角拉開一些，發出更飽滿的 /i:/ 喔！';
    } else {
      badge = '🌱 勇敢踏出第一步';
      pros = '敢於大聲念出句子，這就是最棒的 leap of faith！';
      advice = '可以放慢速度，把「When will I...」的節奏一個字一個字踏穩。';
    }
  } else {
    tipWord = targetWords[0] || 'word';
    pros = '發音很清楚，語音辨識完全捕捉到了你的聲音！';
    advice = '試著把重音放在關鍵名詞上，會聽起來更加自然從容！';
  }

  return { badge, pros, advice, tipWord };
}

// AI 角色扮演接話生成器
function generateAiRoleplayReply(studentSpoken, target, movie) {
  if (movie.includes('奇幻屋')) {
    return `That is a thoughtful observation. I heard you say “${getTargetChunk(studentSpoken)}.” Let’s build the next idea together: ${getDiscussionQuestion(movie)}`;
  } else if (movie.includes('天外奇蹟') || movie.includes('Up')) {
    return "Great idea. I will help you add one detail: Where would you like to travel with me first?";
  } else if (movie.includes('動物方城市') || movie.includes('Zootopia')) {
    return `You made a strong start. Now let’s make the conversation yours: ${getDiscussionQuestion(movie)}`;
  } else {
    return `Thank you for sharing that. I will keep the conversation moving with one small question: ${getDiscussionQuestion(movie)}`;
  }
}

// Cindy 老師發送鼓勵
function cindySendCheer(cheerText) {
  const s = AppState.studio;
  s.chatHistory.push({
    speaker: 'Cindy 老師',
    role: 'cindy',
    avatar: '👩‍🏫',
    text: cheerText,
    time: '剛剛'
  });
  renderStudioModal();
}

function resolveAiVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter(voice => voice.lang.toLowerCase().startsWith('en'));
  const candidates = englishVoices.length ? englishVoices : voices;
  const profile = AI_VOICE_PROFILES[VoiceState.profile] || AI_VOICE_PROFILES.system;

  if (!profile.pattern) return candidates.find(voice => voice.default) || candidates[0] || null;
  return candidates.find(voice => profile.pattern.test(voice.name))
    || candidates.find(voice => voice.default)
    || candidates[0]
    || null;
}

function showAiVoiceSettings() {
  let modal = document.getElementById('ai-voice-settings-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ai-voice-settings-modal';
    document.body.appendChild(modal);
  }

  const selectedProfile = AI_VOICE_PROFILES[VoiceState.profile] || AI_VOICE_PROFILES.female;
  const selectedVoice = resolveAiVoice();
  const voiceName = selectedVoice ? selectedVoice.name : '正在載入系統語音…';

  modal.innerHTML = `
    <div class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <section class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="ai-voice-settings-title">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-violet-700">AI Voice</p>
            <h2 id="ai-voice-settings-title" class="mt-1 text-xl font-black text-slate-900">選擇 AI 陪讀聲音</h2>
            <p class="mt-1 text-xs leading-relaxed text-slate-500">選擇後會用於台詞示範與 AI 對話回應，設定會保留在這台裝置。</p>
          </div>
          <button onclick="closeAiVoiceSettings()" class="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="關閉 AI 聲音設定">✕</button>
        </div>

        <div class="mt-5 grid gap-2">
          ${Object.entries(AI_VOICE_PROFILES).map(([id, profile]) => `
            <button onclick="setAiVoiceProfile('${id}')" class="flex items-center justify-between rounded-2xl border p-4 text-left transition ${VoiceState.profile === id ? 'border-violet-500 bg-violet-50 ring-2 ring-violet-100' : 'border-slate-200 hover:border-violet-300 hover:bg-slate-50'}">
              <span>
                <span class="block text-sm font-black text-slate-900">${id === 'female' ? '🌷' : id === 'male' ? '🌙' : '⚙️'} ${profile.label}</span>
                <span class="mt-0.5 block text-xs text-slate-500">${id === 'female' ? '適合溫柔、清晰的陪讀節奏' : id === 'male' ? '適合沉穩、有支持感的對話節奏' : '讓瀏覽器自行選擇預設英文聲音'}</span>
              </span>
              <span class="text-lg">${VoiceState.profile === id ? '✓' : ''}</span>
            </button>
          `).join('')}
        </div>

        <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <p class="text-xs font-bold text-slate-700">目前使用：${selectedProfile.label}</p>
          <p class="mt-0.5 truncate text-[11px] text-slate-500" title="${voiceName}">${voiceName}</p>
          <button onclick="playAiVoicePreview()" class="mt-2 rounded-xl bg-violet-700 px-3 py-2 text-xs font-bold text-white transition hover:bg-violet-800">🔊 試聽這個聲音</button>
        </div>
        <p class="mt-3 text-[11px] leading-relaxed text-slate-400">可用聲音由瀏覽器與作業系統提供；若沒有對應的男／女英文聲音，系統會改用可用的英文預設聲音。</p>
      </section>
    </div>
  `;
}

function closeAiVoiceSettings() {
  document.getElementById('ai-voice-settings-modal')?.remove();
}

function setAiVoiceProfile(profile) {
  if (!AI_VOICE_PROFILES[profile]) return;
  VoiceState.profile = profile;
  localStorage.setItem('cindy_ai_voice_profile', profile);
  showAiVoiceSettings();
}

function playAiVoicePreview() {
  speakText('Hello! I am your English learning partner. Let us learn one small step at a time.', 0.85);
}

// 語音播放 (Web Speech API)
function speakText(text, rate = 0.85) {
  if (!('speechSynthesis' in window)) {
    alert('您的瀏覽器不支援語音播放功能');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  const voice = resolveAiVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 🖨️ A4 實體手寫學習單列印 (Print Engine)
// ==========================================
function prepareAndPrintCurrentCourse() {
  const course = AppState.courses.find(c => c.id === AppState.currentCourseId);
  const printContainer = document.getElementById('printable-area');

  let worksheetContent = '';
  if (course.id === 'group-a') {
    const quote = AppState.materials.movieQuotes[0];
    worksheetContent = generateMovieWorksheetHtml(quote);
  } else if (course.id === 'individual-xing') {
    worksheetContent = generateHealingWorksheetHtml();
  } else if (course.id === 'group-music') {
    const song = AppState.materials.musicSongs[0];
    worksheetContent = generateMusicWorksheetHtml(song);
  } else if (course.id === 'group-c') {
    worksheetContent = generatePresentationWorksheetHtml();
  } else {
    worksheetContent = `
      <h2 class="text-xl font-bold mb-4">${course.name} - 白雲屋學習單</h2>
      <p class="text-sm text-slate-600 mb-6">時段：${course.timeSlot}</p>
      <div class="space-y-4">
        <div>1. 今日關鍵好字抄寫：</div>
        <div class="handwriting-line"></div>
        <div class="handwriting-line"></div>
        <div class="mt-6">2. 今日思考紀錄：</div>
        <div class="handwriting-line"></div>
        <div class="handwriting-line"></div>
      </div>
    `;
  }

  printContainer.innerHTML = wrapWorksheetPage(course.name, worksheetContent);
  window.print();
}

function generateSingleQuoteWorksheet(quoteId) {
  const quote = AppState.materials.movieQuotes.find(q => q.id === quoteId);
  const printContainer = document.getElementById('printable-area');
  printContainer.innerHTML = wrapWorksheetPage(`白雲屋英文課：電影經典台詞卡`, generateMovieWorksheetHtml(quote));
  window.print();
}

function generateMovieWorksheetHtml(q) {
  return `
    <div class="border-b-2 border-slate-800 pb-3 mb-6 flex justify-between items-end">
      <div>
        <span class="text-xs uppercase tracking-wider font-bold text-slate-500">Cloud House English • Movie Quote</span>
        <h2 class="text-2xl font-black text-slate-900">${q.movieTitle}</h2>
      </div>
      <div class="text-right text-xs">
        <div>學習者：__________________</div>
        <div class="mt-1">日期：2026 年 ___ 月 ___ 日</div>
      </div>
    </div>

    <div class="bg-slate-100 p-4 rounded-lg mb-6">
      <div class="text-xs font-bold text-slate-500 mb-1">【經典名場面台詞】</div>
      <div class="text-lg font-serif font-bold text-slate-900 mb-1">"${q.quote}"</div>
      <div class="text-xs text-slate-600">${q.translation}</div>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-sm mb-3">🧩 一、 聽音拼字挑戰（填入正確字母）</h3>
      <div class="grid grid-cols-2 gap-4">
        ${q.targetPhonics.map(p => `
          <div class="border border-slate-300 p-3 rounded-lg">
            <div class="text-xs text-slate-500">中文：${p.meaning} (提示: ${p.rule})</div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs font-bold">手寫音素：</span>
              <div class="sound-box"></div>
              <div class="sound-box"></div>
              <div class="sound-box"></div>
              <div class="sound-box"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-sm mb-2">✍️ 二、 親筆抄寫金句（一筆一劃長出自信）</h3>
      <div class="handwriting-line"></div>
      <div class="handwriting-line"></div>
    </div>

    <div>
      <h3 class="font-bold text-sm mb-2">💭 三、 這句話讓你想到了生活中的什麼事？</h3>
      <div class="handwriting-line"></div>
      <div class="handwriting-line"></div>
    </div>
  `;
}

function generateHealingWorksheet() {
  const printContainer = document.getElementById('printable-area');
  printContainer.innerHTML = wrapWorksheetPage('白雲屋暖心英文：音素積木手寫單', generateHealingWorksheetHtml());
  window.print();
}

function generateHealingWorksheetHtml() {
  const words = AppState.materials.healingTracks[0].soundBoxWords;
  return `
    <div class="border-b-2 border-slate-800 pb-3 mb-6 flex justify-between items-end">
      <div>
        <span class="text-xs uppercase tracking-wider font-bold text-emerald-800">Warm & Gentle English</span>
        <h2 class="text-2xl font-black text-slate-900">樂行專屬：音素積木手寫挑戰</h2>
      </div>
      <div class="text-right text-xs">
        <div>學習者：樂行</div>
        <div class="mt-1">日期：2026 年 ___ 月 ___ 日</div>
      </div>
    </div>

    <div class="bg-emerald-50 p-4 rounded-lg mb-6 border border-emerald-200">
      <div class="font-bold text-sm text-emerald-900">🌟 樂行的開口魔法口訣：</div>
      <div class="text-xs text-emerald-800 mt-1">「耳朵聽出三個音，筆尖填滿三個方格，你就是最棒的棋盤大師！」</div>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-8">
      ${words.map(w => `
        <div class="border-2 border-slate-400 p-4 rounded-xl text-center">
          <div class="text-xs text-slate-500 mb-1">聽到的聲音：${w.sound}</div>
          <div class="flex justify-center gap-2 my-4">
            ${w.boxes.map(() => `<div class="sound-box border-2 border-slate-800"></div>`).join('')}
          </div>
          <div class="text-xs text-slate-400">（在方框中寫下聽到的字母）</div>
        </div>
      `).join('')}
    </div>

    <div>
      <h3 class="font-bold text-sm mb-2">✍️ 挑戰把今天最喜歡的字連成一個短句：</h3>
      <div class="handwriting-line"></div>
      <div class="handwriting-line"></div>
    </div>
  `;
}

function generateMusicWorksheet(songId) {
  const song = AppState.materials.musicSongs.find(s => s.id === songId);
  const printContainer = document.getElementById('printable-area');
  printContainer.innerHTML = wrapWorksheetPage('白雲屋英文課：音樂歌詞彈唱譜與押韻手寫單', generateMusicWorksheetHtml(song));
  window.print();
}

function generateMusicWorksheetHtml(song) {
  return `
    <div class="border-b-2 border-purple-800 pb-3 mb-6 flex justify-between items-end">
      <div>
        <span class="text-xs uppercase tracking-wider font-bold text-purple-700">Music & Rhyme English</span>
        <h2 class="text-2xl font-black text-slate-900">${song.songTitle} - ${song.artist}</h2>
      </div>
      <div class="text-right text-xs">
        <div>吉他/鋼琴彈奏：知諾 &nbsp;|&nbsp; 伴學合唱：齡萱</div>
        <div class="mt-1">日期：2026 年 ___ 月 ___ 日</div>
      </div>
    </div>

    <div class="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-200">
      <div class="text-xs font-bold text-purple-900 mb-1">【彈唱和弦與經典歌詞】 和弦: ${song.guitarChords || song.pianoChords}</div>
      <div class="text-base font-serif italic text-slate-900 mb-1">"${song.keyLyrics}"</div>
      <div class="text-xs text-slate-600">${song.translation}</div>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-sm mb-3">🎼 一、 押韻家族自然拼音連連看（聽旋律、找押韻）</h3>
      <div class="grid grid-cols-2 gap-4">
        ${song.rhymeFamilies.map(rf => `
          <div class="border border-slate-300 p-3 rounded-lg">
            <span class="font-bold text-xs text-purple-800">${rf.pattern} 家族</span>
            <div class="text-xs text-slate-600 mt-1">${rf.words.join('  •  ')}</div>
            <div class="text-[11px] text-slate-400 mt-1">${rf.rule}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-sm mb-2">✍️ 二、 歌詞填空與手寫抄寫（填入消失的單字）</h3>
      <div class="handwriting-line"></div>
      <div class="handwriting-line"></div>
    </div>
  `;
}

function generatePresentationWorksheet() {
  const printContainer = document.getElementById('printable-area');
  printContainer.innerHTML = wrapWorksheetPage('白雲屋英文課：1.5分鐘短講手寫提詞大綱卡', generatePresentationWorksheetHtml());
  window.print();
}

function generatePresentationWorksheetHtml() {
  const pData = AppState.materials.presentationTracks[0];
  return `
    <div class="border-b-2 border-slate-800 pb-3 mb-6 flex justify-between items-end">
      <div>
        <span class="text-xs uppercase tracking-wider font-bold text-amber-800">English Pitch & Exam Vocab</span>
        <h2 class="text-2xl font-black text-slate-900">1.5分鐘主題短講手寫大綱卡</h2>
      </div>
      <div class="text-right text-xs">
        <div>演講者：岳軒 / 虹茵 / 紘羽</div>
        <div class="mt-1">演講計時：90 秒</div>
      </div>
    </div>

    <div class="bg-amber-50 p-3 rounded-lg mb-6 border border-amber-200">
      <div class="text-xs font-bold text-amber-900 mb-1">【今日會考升級單字提詞箱】在你的短講中嘗試用上至少 1 個！</div>
      <div class="flex flex-wrap gap-3 text-xs">
        ${pData.examVocabBooster.map(v => `
          <span class="bg-white border border-amber-300 px-2 py-1 rounded font-bold text-slate-800">
            ${v.word} (${v.syllables}) : ${v.meaning}
          </span>
        `).join('')}
      </div>
    </div>

    <div class="space-y-4">
      <div class="border border-slate-300 p-3 rounded-lg">
        <div class="font-bold text-xs text-slate-700">1. 開場 Hook (15秒)</div>
        <div class="handwriting-line"></div>
      </div>

      <div class="border border-slate-300 p-3 rounded-lg">
        <div class="font-bold text-xs text-slate-700">2. 主體故事 Story (50秒)</div>
        <div class="handwriting-line"></div>
        <div class="handwriting-line"></div>
      </div>

      <div class="border border-slate-300 p-3 rounded-lg">
        <div class="font-bold text-xs text-slate-700">3. 結尾 Call to Action (25秒)</div>
        <div class="handwriting-line"></div>
      </div>
    </div>
  `;
}

function generateCanadaWorksheet() {
  const cData = AppState.materials.canadaTracks[0];
  const printContainer = document.getElementById('printable-area');
  printContainer.innerHTML = wrapWorksheetPage('加拿大生活實境解碼單', `
    <div class="border-b-2 border-red-800 pb-3 mb-6 flex justify-between items-end">
      <div>
        <span class="text-xs uppercase tracking-wider font-bold text-red-800">Canada Life Preparation</span>
        <h2 class="text-2xl font-black text-slate-900">加拿大校園與生活告示閱讀手寫單</h2>
      </div>
      <div class="text-right text-xs">
        <div>學習者：凝希</div>
        <div class="mt-1">日期：2026 年 ___ 月 ___ 日</div>
      </div>
    </div>

    <div class="space-y-6">
      ${cData.realLifeSigns.map(s => `
        <div class="border border-slate-300 p-4 rounded-xl">
          <div class="font-bold text-sm text-slate-900">告示名稱：${s.sign}</div>
          <div class="text-xs text-slate-600 mb-3">意義：${s.meaning}</div>
          <div class="handwriting-line"></div>
        </div>
      `).join('')}
    </div>
  `);
  window.print();
}

function wrapWorksheetPage(title, bodyHtml) {
  return `
    <div class="print-page bg-white min-h-[1100px] p-8">
      ${bodyHtml}
      <div class="mt-12 pt-4 border-t border-slate-300 text-center text-xs text-slate-400">
        羽白群學 白雲屋 • Cindy 老師與 AI 共學班 • 陪伴孩子長出自己的自信
      </div>
    </div>
  `;
}

// 渲染自訂解析畫面
function renderCustomParserView(container) {
  container.innerHTML = `
    <div class="p-6 max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl font-bold">✨</div>
          <div>
            <h2 class="text-xl font-black text-slate-900">學生自訂台詞／音樂 解析與教案生成器</h2>
            <p class="text-xs text-slate-500">孩子帶來了喜歡的電影台詞或流行歌？貼在下方，系統立即為您拆解自然發音並啟動三方互動！</p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">🎯 對應學生：</label>
              <select id="custom-student-select" class="w-full text-sm border border-slate-300 rounded-xl px-3 py-2 bg-slate-50">
                ${AppState.students.map(s => `
                  <option value="${s.id}">${s.name} (${s.grade} ${s.gender}) - ${s.traits.split('、')[0]}</option>
                `).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">🏷️ 資料類型與名稱：</label>
              <input id="custom-title-input" type="text" placeholder="例如：電影《天外奇蹟》 或 歌曲《Shallow》" 
                class="w-full text-sm border border-slate-300 rounded-xl px-3 py-2 bg-slate-50" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">📝 輸入英文內容（台詞或歌詞）：</label>
            <textarea id="custom-text-input" rows="3" placeholder="在此貼上英文歌詞或電影台詞..."
              class="w-full text-sm border border-slate-300 rounded-xl p-3 bg-slate-50 font-serif leading-relaxed"></textarea>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button onclick="analyzeCustomContent()" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-sm flex items-center gap-2">
              <span>🚀</span> 開始智慧解析並啟動三方對話
            </button>
          </div>
        </div>
      </div>

      <div id="custom-analysis-result" class="mt-6"></div>
    </div>
  `;
}

function analyzeCustomContent() {
  const studentId = document.getElementById('custom-student-select').value;
  const title = document.getElementById('custom-title-input').value.trim() || '自選英文素材';
  const text = document.getElementById('custom-text-input').value.trim();
  const resultContainer = document.getElementById('custom-analysis-result');

  if (!text) {
    alert('請先輸入英文字句！');
    return;
  }

  const student = AppState.students.find(s => s.id === studentId);

  resultContainer.innerHTML = `
    <div class="bg-white rounded-2xl border border-amber-200 p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <span class="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">為 ${student.name} 解析完成</span>
          <h3 class="text-lg font-black text-slate-800 mt-1">${title}</h3>
        </div>
        <button onclick="openThreeWayStudio('${title.replace(/'/g, "\\'")}', '${text.replace(/'/g, "\\'")}', '${student.name}', 'AI 伴學教練')" 
          class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5">
          <span>🎙️</span> 開啟此內容的三方互動對話室 &rarr;
        </button>
      </div>
      <p class="text-slate-800 font-serif text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">"${text}"</p>
    </div>
  `;
}

function renderStudentDetailView(container) {
  const student = AppState.students.find(s => s.id === AppState.currentStudentId);
  if (!student) return;

  container.innerHTML = `
    <div class="p-6 max-w-4xl mx-auto space-y-6">
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl ${student.gender === '男' ? 'bg-sky-100 text-sky-800' : 'bg-rose-100 text-rose-800'} flex items-center justify-center text-2xl font-black">
            ${student.code}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-2xl font-black text-slate-900">${student.name}</h2>
              <span class="px-2 py-0.5 rounded-full text-xs font-bold ${student.gender === '男' ? 'bg-sky-100 text-sky-700' : 'bg-rose-100 text-rose-700'}">${student.grade} • ${student.gender}生 (${student.age}歲)</span>
            </div>
            <p class="text-xs text-slate-500 mt-1">${student.traits}</p>
          </div>
        </div>
        <button onclick="selectCourse('${student.courseId}')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl shadow-xs transition-all">
          進入所屬課堂模組 &rarr;
        </button>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <h3 class="font-bold text-slate-800 text-sm mb-3 flex items-center gap-1.5">
          <span>🎯</span> 投其所好內容偏好與學習焦點
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
          ${student.learningFocus}
        </p>
      </div>
    </div>
  `;
}
