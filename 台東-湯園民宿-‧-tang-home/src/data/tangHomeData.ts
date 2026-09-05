import { RoomType, ExperienceItem, AttractionItem, FaqItem, ReviewItem } from '../types';

export const ROOM_TYPES: RoomType[] = [
  {
    id: 'room-family-6p',
    slug: 'family-fun-6-person-suite',
    name: {
      'zh-TW': '合家歡六人房',
      'en': 'Family Fun Six-Person Suite',
      'ja': 'ファミリーファン 6名用ファミリールーム',
      'zh-CN': '合家欢六人房'
    },
    category: 'family',
    tagline: {
      'zh-TW': '三張加大雙人床與專屬小客廳，全家出遊與好友同樂的首選大空間',
      'en': 'Three king/queen double beds with a private living parlor, ideal for family and group gatherings.',
      'ja': 'ダブルベッド3台と専用リビングスペースを備えた、ご家族やお仲間での旅行に最適な広々空間。',
      'zh-CN': '三张加大双人床与专属小客厅，全家出游与好友同乐的首选大空间'
    },
    description: {
      'zh-TW': '湯園民宿最具人氣的合家歡六人房，擁有約 12 坪（約 40 平方公尺）的寬敞空間，配置三張特選加大雙人床（180x188公分）與獨立溫馨小客廳沙發休憩區。房內採光通透充足，配備免治馬桶、乾濕分離獨立衛浴、分離式靜音冷暖空調、液晶電視與小冰箱，讓全家人都能在台東盡享歡樂自在的渡假時光。',
      'en': 'Tang Home’s most popular family suite spans approximately 40 sqm, featuring three enlarged double beds (180x188cm) and a cozy private living lounge. Flooded with natural daylight, equipped with a washlet bidet toilet, separate dry/wet bathroom, whisper-quiet AC, LCD TV, and mini fridge.',
      'ja': '湯園民宿で一番人気のファミリールーム。広さ約40㎡の贅沢な空間に、快適なダブルベッド3台とくつろぎのリビングソファを配置。温水洗浄便座、セパレート型バスルーム、静音エアコン、液晶テレビ完備。',
      'zh-CN': '汤园民宿最具人气的合家欢六人房，拥有约 12 坪（约 40 平方公尺）的宽敞空间，配置三张特选加大双人床（180x188公分）与独立温馨小客厅沙发休憩区。房内采光通透充足，配备免治马桶、干湿分离独立卫浴、分离式静音冷暖空调、液晶电视与小冰箱，让全家人都能在台东尽享欢乐自在的度假时光。'
    },
    basePriceTWD: 3800,
    weekendPriceTWD: 4800,
    sizeSqm: 40,
    maxGuests: 6,
    bedType: {
      'zh-TW': '三張加大雙人床（180x188公分）',
      'en': '3 x Enlarged Double Beds (180x188cm)',
      'ja': 'ダブルベッド 3台 (180x188cm)',
      'zh-CN': '三张加大双人床（180x188公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター完備',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '市景開闊綠意與遠山景緻',
      'en': 'Open City & Taitung Mountain Vistas',
      'ja': '台東の山並みと街並み',
      'zh-CN': '市景开阔绿意与远山景致'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '三張特大舒適雙人床，可舒適容納 6 位貴賓',
        '專屬獨立溫馨小客廳與休閒沙發區',
        '全套免治馬桶與乾濕分離明亮衛浴',
        '全棟設有室內電梯，長輩與大件行李進出輕鬆無障礙',
        '館內設有自助洗衣空間與免費自行車借用',
        '每日附贈活力精緻早餐與專屬免費停車位'
      ],
      'en': [
        'Three comfortable double beds comfortably accommodating up to 6 guests',
        'Private cozy living room with relaxing sofa seating',
        'Modern washlet bidet toilet and separate wet/dry bathroom',
        'Building elevator for effortless luggage and family accessibility',
        'Guest laundry area and complimentary bicycle rentals',
        'Complimentary delicious daily breakfast & free private parking'
      ],
      'ja': [
        '最大6名様まで快適にお休みいただけるダブルベッド3台',
        '専用リビングスペースとソファセット',
        '温水洗浄便座と清潔なセパレートバスルーム',
        '館内エレベーター完備でスーツケースも安心移動',
        '館内コインランドリー＆レンタサイクル無料貸出',
        '毎朝のこだわり朝食無料サービス＆無料専用駐車場'
      ],
      'zh-CN': [
        '三张特大舒适双人床，可舒适容纳 6 位贵宾',
        '专属独立温馨小客厅与休闲沙发区',
        '全套免治马桶与干湿分离明亮卫浴',
        '全栋设有室内电梯，长辈与大件行李进出轻松无障碍',
        '馆内设有自助洗衣空间与免费自行车借用',
        '每日附赠活力精致早餐与专属免费停车位'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-economy-double',
    slug: 'economy-double-room',
    name: {
      'zh-TW': '經濟雙人房',
      'en': 'Economy Double Room',
      'ja': 'エコノミー ダブルルーム',
      'zh-CN': '经济双人房'
    },
    category: 'suite',
    tagline: {
      'zh-TW': '簡約舒適的小資旅人首選，享受純粹安靜的休憩時光',
      'en': 'Clean, cozy and budget-friendly choice for smart travelers visiting Taitung.',
      'ja': 'シンプルで快適。一人旅や気軽なご旅行に最適なエコノミールーム。',
      'zh-CN': '简约舒适的小资旅人首选，享受纯粹安静的休憩时光'
    },
    description: {
      'zh-TW': '經濟雙人房室內約 14 平方公尺，以乾淨俐落的極簡設計，配備一張標準加大雙人床（150x188公分）。房內提供全套免治馬桶、乾濕分離獨立衛浴、液晶電視、分離式靜音冷氣、小冰箱、吹風機、電熱水壺與茶包。全棟室內電梯直達，出差洽公或小資慢遊台東皆能感受無負擔的舒適放鬆。',
      'en': 'Approximately 14 sqm featuring a comfortable double bed (150x188cm), washlet bidet toilet, separate shower, LCD TV, silent AC, and mini fridge. Elevator access and complimentary breakfast included.',
      'ja': '広さ約14㎡の機能的で清潔感あふれるお部屋。ダブルベッド（150x188cm）、温水洗浄便座、セパレートバス、液晶テレビ、エアコン、冷蔵庫完備。',
      'zh-CN': '经济双人房室内约 14 平方公尺，以干净俐落的极简设计，配备一张标准加大双人床（150x188公分）。房内提供全套免治马桶、干湿分离独立卫浴、液晶电视、分离式静音冷气、小冰箱、吹风机、电热水壶与茶包。全栋室内电梯直达，出差洽公或小资慢游台东皆能感受无负担的舒适放松。'
    },
    basePriceTWD: 1600,
    weekendPriceTWD: 2200,
    sizeSqm: 14,
    maxGuests: 2,
    bedType: {
      'zh-TW': '一張標準加大雙人床（150x188公分）',
      'en': '1 x Comfortable Double Bed (150x188cm)',
      'ja': 'ダブルベッド 1台 (150x188cm)',
      'zh-CN': '一张标准加大双人床（150x188公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '靜謐街景與柔和採光',
      'en': 'Quiet Street View & Daylight',
      'ja': '静かな街並み',
      'zh-CN': '静谧街景与柔和采光'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '標準加大雙人名床 (150x188cm)，睡眠舒適不壓迫',
        '免治馬桶設備與乾濕分離獨立明亮衛浴',
        '全棟設有室內電梯，上下樓輕鬆無負擔',
        '附贈每日活力精緻晨光早餐 (依人數供應)',
        '免費專屬停車位、自助洗衣空間與單車借用',
        '客房小冰箱、電熱水壺、吹風機、冷暖空調全配'
      ],
      'en': [
        'Comfortable double bed (150x188cm) with cozy bedding',
        'Washlet bidet toilet and modern dry/wet separate shower',
        'Building elevator access to all guest floors',
        'Complimentary breakfast included daily',
        'Free private parking, guest laundry area, and bicycle loan',
        'Mini fridge, electric kettle, hairdryer, and climate control'
      ],
      'ja': [
        '快適なダブルベッド (150x188cm)',
        '温水洗浄便座＆清潔なセパレートバスルーム',
        '館内エレベーター完備で快適移動',
        '毎朝の美味しい朝食サービス',
        '無料駐車場、ランドリー＆自転車無料レンタル',
        '冷蔵庫、電気ケトル、ドライヤー、エアコン完備'
      ],
      'zh-CN': [
        '标准加大双人名床 (150x188cm)，睡眠舒适不压迫',
        '免治马桶设备与干湿分离独立明亮卫浴',
        '全栋设有室内电梯，上下楼轻松无负担',
        '附赠每日活力精致晨光早餐 (依人数供应)',
        '免费专属停车位、自助洗衣空间与单车借用',
        '客房小冰箱、电热水壶、吹风机、冷暖空调全配'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-cozy-double',
    slug: 'cozy-double-room',
    name: {
      'zh-TW': '溫馨雙人房',
      'en': 'Cozy Double Room',
      'ja': 'コージー ダブルルーム',
      'zh-CN': '温馨双人房'
    },
    category: 'suite',
    tagline: {
      'zh-TW': '專屬獨立景觀陽台，迎著晨光微風品啜咖啡的美好時光',
      'en': 'Features a private breezy balcony to savor fresh morning air and coffee.',
      'ja': '心地よい風が通り抜ける専用バルコニー付き。朝のコーヒータイムに最適。',
      'zh-CN': '专属独立景观阳台，迎着晨光微风品啜咖啡的美好时光'
    },
    description: {
      'zh-TW': '溫馨雙人房室內約 15 平方公尺，配備一張加大雙人床（180x184公分）與專屬私人陽台。推開落地窗，即可感受台東純淨新鮮的空氣與日光微風。房內設有免治馬桶、乾濕分離衛浴、液晶電視、分離式冷氣、小冰箱、吹風機、電熱水壺與茶包，提供旅人最溫暖愜意的休憩角落。',
      'en': 'Approximately 15 sqm with an enlarged double bed (180x184cm) and a charming private balcony. Step outside for fresh Taitung breeze. Includes washlet bidet, separate bathroom, LCD TV, silent AC, mini fridge, and electric kettle.',
      'ja': '約15㎡のお部屋に180x184cmのダブルベッドと専用バルコニーを備えた人気ルーム。台東の澄んだ空気を感じながらリラックス。温水洗浄便座、セパレートバス、テレビ、冷蔵庫完備。',
      'zh-CN': '温馨双人房室内约 15 平方公尺，配备一张加大双人床（180x184公分）与专属私人阳台。推开落地窗，即可感受台东纯净新鲜的空气与日光微风。房内设有免治马桶、干湿分离卫浴、液晶电视、分离式冷气、小冰箱、吹风机、电热水壶与茶包，提供旅人最温暖惬意的休憩角落。'
    },
    basePriceTWD: 1800,
    weekendPriceTWD: 2400,
    sizeSqm: 15,
    maxGuests: 2,
    bedType: {
      'zh-TW': '一張加大雙人床（180x184公分）',
      'en': '1 x Enlarged Double Bed (180x184cm)',
      'ja': 'ダブルベッド 1台 (180x184cm)',
      'zh-CN': '一张加大双人床（180x184公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '獨立陽台綠意與晴空景緻',
      'en': 'Private Balcony & Clear Taitung Sky',
      'ja': 'プライベートバルコニーからの眺望',
      'zh-CN': '独立阳台绿意与晴空景致'
    },
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '獨立私人景觀陽台，享受日光微風與放鬆氛圍',
        '加大雙人床 (180x184cm)，舒適減壓床寢',
        '免治馬桶與乾濕分離獨立明亮衛浴',
        '室內電梯直達各樓層，出入輕鬆方便',
        '免費活力精緻早餐 (依人數供應)',
        '免費停車場、自助洗衣空間、免費單車租借、Wi-Fi 全配'
      ],
      'en': [
        'Private balcony to enjoy fresh morning air and sunshine',
        'Enlarged double bed (180x184cm) with premium bedding',
        'Washlet bidet toilet and separate dry/wet bathroom',
        'Convenient elevator access to all guest floors',
        'Complimentary breakfast included daily',
        'Free parking, guest laundry area, free bicycles, and Wi-Fi'
      ],
      'ja': [
        '陽光と爽やかな風を感じる専用プライベートバルコニー',
        '快適なダブルベッド (180x184cm)',
        '温水洗浄便座＆清潔なセパレートバスルーム',
        '館内エレベーター完備',
        '毎朝の美味しい朝食サービス',
        '無料駐車場、ランドリー、レンタサイクル完備'
      ],
      'zh-CN': [
        '独立私人景观阳台，享受日光微风与放松氛围',
        '加大双人床 (180x184cm)，舒适减压床寝',
        '免治马桶与干湿分离独立明亮卫浴',
        '室内电梯直达各楼层，出入轻松方便',
        '免费活力精致早餐 (依人数供应)',
        '免费停车场、自助洗衣空间、免费单车租借、Wi-Fi 全配'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'balcony', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-exquisite-double',
    slug: 'exquisite-double-room',
    name: {
      'zh-TW': '精緻雙人房',
      'en': 'Exquisite Double Room',
      'ja': 'エクスキージット ダブルルーム',
      'zh-CN': '精致双人房'
    },
    category: 'suite',
    tagline: {
      'zh-TW': '更寬敞的 17 平方公尺大空間，採光極佳的大陽台景觀客房',
      'en': 'Spacious 17 sqm suite with generous natural daylight and a large private balcony.',
      'ja': '広さ17㎡のゆとりあるお部屋。大きなバルコニーと豊かな採光が魅力。',
      'zh-CN': '更宽敞的 17 平方公尺大空间，采光极佳的大阳台景观客房'
    },
    description: {
      'zh-TW': '精緻雙人房面積約 17 平方公尺，配有一張特大加大雙人床（180x210公分），空間更加寬廣舒展。房間外連通採光良好之景觀陽台，室內以優雅暖色調裝潢，配有免治馬桶、乾濕分離衛浴、液晶電視、冷暖空調、小冰箱、吹風機、電熱水壺與茶包，是情侶或夫妻深度慢遊台東的最佳首選。',
      'en': 'Spanning approximately 17 sqm, the Exquisite Double Room features an oversized double bed (180x210cm) and an airy private balcony. Thoughtfully appointed with washlet bidet, separate bathroom, LCD TV, climate control, and mini fridge.',
      'ja': '約17㎡のゆったりとした客室にキングサイズベッド（180x210cm）と開放的なバルコニーを設置。温水洗浄便座、セパレートバス、液晶テレビ、エアコン、冷蔵庫完備。',
      'zh-CN': '精致双人房面积约 17 平方公尺，配有一张特大加大双人床（180x210公分），空间更加宽广舒展。房间外连通采光良好之景观阳台，室内以优雅暖色调装潢，配有免治马桶、干湿分离卫浴、液晶电视、冷暖空调、小冰箱、吹风机、电热水壶与茶包，是情侣或夫妻深度慢游台东的最佳首选。'
    },
    basePriceTWD: 2200,
    weekendPriceTWD: 2800,
    sizeSqm: 17,
    maxGuests: 2,
    bedType: {
      'zh-TW': '一張特大加大雙人床（180x210公分）',
      'en': '1 x Super King Bed (180x210cm)',
      'ja': '特大キングサイズベッド 1台 (180x210cm)',
      'zh-CN': '一张特大加大双人床（180x210公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '景觀陽台與台東晨曦風光',
      'en': 'Scenic Balcony & Morning Sunshine',
      'ja': 'バルコニーからの眺望と朝の光',
      'zh-CN': '景观阳台与台东晨曦风光'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '寬敞 17 平方公尺大格局，附設私人景觀陽台',
        '特大加大雙人床 (180x210cm)，頂級舒適睡眠體驗',
        '免治馬桶全套配置與乾濕分離獨立衛浴',
        '全棟設有電梯，方便長輩同行與行李搬運',
        '每日免費活力早餐 (依人數供應)',
        '免費專屬停車位、自助洗衣空間、免費自行車租借服務'
      ],
      'en': [
        'Spacious 17 sqm floorplan with a private scenic balcony',
        'Super King double bed (180x210cm) for superior sleep comfort',
        'Washlet bidet toilet and modern dry/wet separate shower',
        'Building elevator for easy luggage transfer',
        'Complimentary breakfast included daily',
        'Free on-site parking, laundry facility & free bicycles'
      ],
      'ja': [
        '広々17㎡のゆとり空間＆専用バルコニー',
        '特大キングベッド (180x210cm) で極上の眠り',
        '温水洗浄便座＆セパレートバスルーム完備',
        'エレベーター付きで移動もラクラク',
        '毎朝の無料朝食サービス',
        '無料駐車場、ランドリー＆観光用レンタサイクル'
      ],
      'zh-CN': [
        '宽敞 17 平方公尺大格局，附设私人景观阳台',
        '特大加大双人床 (180x210cm)，顶级舒适睡眠体验',
        '免治马桶全套配置与干湿分离独立卫浴',
        '全栋设有电梯，方便长辈同行与行李搬运',
        '每日免费活力早餐 (依人数供应)',
        '免费专属停车位、自助洗衣空间、免费自行车租借服务'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'balcony', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-tangyuan-double',
    slug: 'tangyuan-double-room',
    name: {
      'zh-TW': '湯園雙人房',
      'en': 'Tangyuan Classic Double Room',
      'ja': '湯園 クラシック ダブルルーム',
      'zh-CN': '汤园双人房'
    },
    category: 'suite',
    tagline: {
      'zh-TW': '質樸原木與文化石溫馨點綴，經典自在的雙人舒壓居所',
      'en': 'Classic cozy double room featuring warm natural wood accents and modern amenities.',
      'ja': '木のぬくもりと洗練された内装が心地よい、上質なダブルルーム。',
      'zh-CN': '质朴原木与文化石温馨点缀，经典自在的双人舒压居所'
    },
    description: {
      'zh-TW': '湯園經典雙人房，室內約 15 平方公尺。以簡約溫暖的現代美式風格設計，配備一張特大加大雙人床（180x210公分），提供液晶電視、無線網路、分離式冷暖空調、免治馬桶、乾濕分離衛浴、電熱水壺、小冰箱、吹風機與舒適室內拖鞋。無論是情侶渡假或輕裝出遊，皆能感受如家般的自在放鬆。',
      'en': 'Tangyuan Classic Double Room spans 15 sqm, featuring an enlarged king bed (180x210cm). Equipped with LCD TV, high-speed Wi-Fi, air conditioning, washlet bidet toilet, separate bathroom, electric kettle, refrigerator, and hairdryer.',
      'ja': '広さ約15㎡の湯園定番ダブルルーム。180x210cmのゆったりとしたキングベッド、液晶テレビ、無料Wi-Fi、エアコン、温水洗浄便座、セパレート型バスルームを完備。',
      'zh-CN': '汤园经典双人房，室内约 15 平方公尺。以简约温暖的现代美式风格设计，配备一张特大加大双人床（180x210公分），提供液晶电视、无线网络、分离式冷暖空调、免治马桶、干湿分离卫浴、电热水壶、小冰箱、吹风机与舒适室内拖鞋。无论是情侣度假或轻装出游，皆能感受如家般的自在放松。'
    },
    basePriceTWD: 2000,
    weekendPriceTWD: 2600,
    sizeSqm: 15,
    maxGuests: 2,
    bedType: {
      'zh-TW': '一張特大加大雙人床（180x210公分）',
      'en': '1 x King Bed (180x210cm)',
      'ja': 'キングサイズベッド 1台 (180x210cm)',
      'zh-CN': '一张特大加大双人床（180x210公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '寧靜街景與台東市區微風',
      'en': 'Quiet City View & Gentle Breeze',
      'ja': '静かな街並み',
      'zh-CN': '宁静街景与台东市区微风'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '特大加大雙人名床 (180x210cm)，睡眠品質絕佳',
        '免治馬桶設備與乾濕分離獨立衛浴',
        '全棟設有室內電梯，上下樓輕鬆無負擔',
        '附贈每日營養活力晨光早餐',
        '免費專屬停車位、自助洗衣空間與免費單車借用',
        '客房小冰箱、電熱水壺、吹風機、冷暖空調全配'
      ],
      'en': [
        'Enlarged king double bed (180x210cm) for deep restful sleep',
        'Washlet bidet toilet & separate dry/wet bathroom',
        'Building elevator access to all guest floors',
        'Complimentary nutritious breakfast included',
        'Free on-site parking, guest laundry area & free bicycles',
        'Mini fridge, electric kettle, hairdryer, and climate control'
      ],
      'ja': [
        'ゆったり快眠のキングサイズベッド (180x210cm)',
        '温水洗浄便座＆乾湿分離セパレートバス',
        'エレベーター完備でラクラク移動',
        '毎朝の栄養満点モーニングサービス付き',
        '無料駐車場、ランドリー＆自転車無料レンタル',
        '冷蔵庫、湯沸かしポット、ドライヤー、エアコン完備'
      ],
      'zh-CN': [
        '特大加大双人名床 (180x210cm)，睡眠品质绝佳',
        '免治马桶设备与干湿分离独立卫浴',
        '全栋设有室内电梯，上下楼轻松无负担',
        '附赠每日营养活力晨光早餐',
        '免费专属停车位、自助洗衣空间与免费单车借用',
        '客房小冰箱、电热水壶、吹风机、冷暖空调全配'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-business-twin',
    slug: 'business-twin-room',
    name: {
      'zh-TW': '商務雙床房',
      'en': 'Business Twin Room (2 Single Beds)',
      'ja': 'ビジネス ツインルーム (シングル2台)',
      'zh-CN': '商务双床房'
    },
    category: 'suite',
    tagline: {
      'zh-TW': '兩張加大單人床獨立配置，朋友結伴、同事出差互不干擾的舒適首選',
      'en': 'Two enlarged single beds offering individual comfort for friends or business colleagues.',
      'ja': 'セミダブルシングルベッド2台を配置。ご友人同士や同僚との出張に最適。',
      'zh-CN': '两张加大单人床独立配置，朋友结伴、同事出差互不干扰的舒适首选'
    },
    description: {
      'zh-TW': '商務雙床房室內約 16 平方公尺，特別配置兩張加大單人床（105x184公分），讓同行的朋友、家人或商務夥伴皆享有各自獨立無干擾的睡眠空間。房內配備免治馬桶、乾濕分離衛浴、液晶電視、分離式冷氣、小冰箱、吹風機、電熱水壺與茶包，環境整潔明亮舒適。',
      'en': 'Approximately 16 sqm featuring two separate enlarged single beds (105x184cm), perfect for colleagues or friends traveling together. Includes washlet bidet, dry/wet bathroom, LCD TV, silent AC, mini fridge, and electric kettle.',
      'ja': '約16㎡にセミダブルサイズのシングルベッド2台（105x184cm）を配置したツインルーム。温水洗浄便座、セパレートバス、テレビ、エアコン、冷蔵庫完備。',
      'zh-CN': '商务双床房室内约 16 平方公尺，特别配置两张加大单人床（105x184公分），让同行的朋友、家人或商务伙伴皆享有各自独立无干扰的睡眠空间。房内配备免治马桶、干湿分离卫浴、液晶电视、分离式冷气、小冰箱、吹风机、电热水壶与茶包，环境整洁明亮舒适。'
    },
    basePriceTWD: 2000,
    weekendPriceTWD: 2600,
    sizeSqm: 16,
    maxGuests: 2,
    bedType: {
      'zh-TW': '兩張加大單人床（105x184公分）',
      'en': '2 x Single Beds (105x184cm)',
      'ja': 'シングルベッド 2台 (105x184cm)',
      'zh-CN': '两张加大单人床（105x184公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '市區微風與自然採光',
      'en': 'City Vista & Fresh Daylight',
      'ja': '街の景色と心地よい光',
      'zh-CN': '市区微风与自然采光'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '兩張加大獨立單人床 (105x184cm)，睡眠互不干擾',
        '免治馬桶設備與乾濕分離獨立衛浴',
        '全棟設有室內電梯，推行李輕鬆便利',
        '每日活力美味早餐 (依人數供應)',
        '免費專屬停車場、自助洗衣空間與單車租借',
        '客房小冰箱、電熱水壺、冷暖空調全配'
      ],
      'en': [
        'Two separate single beds (105x184cm) ensuring undisturbed rest',
        'Washlet bidet toilet and dry/wet separate shower',
        'Building elevator for quick and easy floor access',
        'Complimentary daily breakfast included',
        'Free on-site parking, guest laundry area and free bicycles',
        'Room fridge, kettle, hairdryer, and climate control'
      ],
      'ja': [
        '独立したシングルベッド2台 (105x184cm)',
        '温水洗浄便座＆セパレートバスルーム',
        '館内エレベーター完備',
        '毎朝の無料朝食サービス',
        '無料駐車場、ランドリー＆自転車無料貸出',
        '冷蔵庫、電気ケトル、ドライヤー、エアコン完備'
      ],
      'zh-CN': [
        '两张加大独立单人床 (105x184cm)，睡眠互不干扰',
        '免治马桶设备与干湿分离独立卫浴',
        '全栋设有室内电梯，推行李轻松便利',
        '每日活力美味早餐 (依人数供应)',
        '免费专属停车场、自助洗衣空间与单车租借',
        '客房小冰箱、电热水壶、冷暖空调全配'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-family-4p',
    slug: 'cozy-family-quad-room',
    name: {
      'zh-TW': '溫馨家庭四人房',
      'en': 'Cozy Family Quad Suite',
      'ja': '温もり ファミリールーム (4名用)',
      'zh-CN': '温馨家庭四人房'
    },
    category: 'family',
    tagline: {
      'zh-TW': '兩張加大雙人床與明亮大空間，家庭渡假與好友出遊最舒適自在的選擇',
      'en': 'Spacious suite with two large double beds, perfect for family holidays and friends traveling together.',
      'ja': 'ダブルベッド2台を備えた広々とした客室。ご家族やお友達との快適なご旅行に。',
      'zh-CN': '两张加大双人床与明亮大空间，家庭度假与好友出游最舒适自在的选择'
    },
    description: {
      'zh-TW': '溫馨家庭四人房室內約 26 平方公尺，以典雅溫馨的木質調風格營造自在居所氛圍。配置兩張特選加大雙人床（150x188公分），提供全套免治馬桶、乾濕分離獨立衛浴、液晶電視、分離式靜音冷暖空調、小冰箱、吹風機與電熱水壺，讓全家同遊台東享有最高品質的安心好眠。',
      'en': 'Spanning 26 sqm, the Cozy Family Quad Suite features two plush queen/double beds (150x188cm), washlet bidet, separate bathroom, whisper-quiet AC, LCD TV, and mini fridge for a relaxing family getaway.',
      'ja': '広さ約26㎡の快適なファミリールーム。ダブルベッド2台（150x188cm）、温水洗浄便座、セパレートバス、静音エアコン、テレビ、冷蔵庫を完備。',
      'zh-CN': '温馨家庭四人房室内约 26 平方公尺，以典雅温馨的木质调风格营造自在居所氛围。配置两张特选加大双人床（150x188公分），提供全套免治马桶、干湿分离独立卫浴、液晶电视、分离式静音冷暖空调、小冰箱、吹风机与电热水壶，让全家同游台东享有最高品质的安心好眠。'
    },
    basePriceTWD: 2800,
    weekendPriceTWD: 3600,
    sizeSqm: 26,
    maxGuests: 4,
    bedType: {
      'zh-TW': '兩張加大雙人床（150x188公分）',
      'en': '2 x Large Double Beds (150x188cm)',
      'ja': 'ダブルベッド 2台 (150x188cm)',
      'zh-CN': '两张加大双人床（150x188公分）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '市區微風與綠意開闊窗景',
      'en': 'Open City & Greenery Window View',
      'ja': '明るい窓からの眺望',
      'zh-CN': '市区微风与绿意开阔窗景'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '兩張加大舒適雙人床，可舒適容納 4 位貴賓',
        '寬敞 26 平方公尺大空間，採光明亮通透',
        '免治馬桶設備與乾濕分離獨立衛浴',
        '全棟設有室內電梯，全家長輩進出無憂',
        '每日活力美味早餐免費提供 (依人數供應)',
        '免費專屬停車場、自助洗衣空間與單車租借服務'
      ],
      'en': [
        'Two comfortable double beds accommodating up to 4 guests',
        'Spacious 26 sqm bright and airy living layout',
        'Washlet bidet toilet & modern separate shower',
        'Elevator access for all family members',
        'Complimentary breakfast included daily',
        'Free on-site parking, guest laundry area and free bicycles'
      ],
      'ja': [
        'ご家族4名様まで快適に過ごせるダブルベッド2台',
        '明るく広々とした26㎡のゆとり空間',
        '温水洗浄便座＆セパレートバスルーム',
        'エレベーター完備で三世代旅行にも安心',
        '毎朝の無料朝食サービス',
        '無料駐車場、ランドリー＆自転車無料貸出'
      ],
      'zh-CN': [
        '两张加大舒适双人床，可舒适容纳 4 位贵宾',
        '宽敞 26 平方公尺大空间，采光明亮通透',
        '免治马桶设备与干湿分离独立卫浴',
        '全栋设有室内电梯，全家长辈进出无忧',
        '每日活力美味早餐免费提供 (依人数供应)',
        '免费专属停车场、自助洗衣空间与单车租借服务'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  },

  {
    id: 'room-japanese-family-4p',
    slug: 'japanese-family-tatami-room',
    name: {
      'zh-TW': '日式和風 ‧ 和室家庭房',
      'en': 'Japanese Zen Tatami Family Room',
      'ja': '和モダン 和室ファミリールーム (4名用)',
      'zh-CN': '日式和风 ‧ 和室家庭房'
    },
    category: 'family',
    tagline: {
      'zh-TW': '溫潤木質和室地板與雅緻禪風設計，席地品茗、幼童活動安全無虞',
      'en': 'Warm wooden tatami floorings and Japanese zen aesthetics, safe and cozy for children and elderly.',
      'ja': '木の温もりある和室フロアと静寂の禅の趣。お子様連れでも安心のくつろぎ空間。',
      'zh-CN': '温润木质和室地板与雅致禅风设计，席地品茗、幼童活动安全无虞'
    },
    description: {
      'zh-TW': '日式和風和室房約 22 平方公尺，全室鋪設天然溫潤木質地板與典雅和風軟墊大床（兩張 150x188公分雙人床）。席地而坐的自在氛圍特別適合帶幼童或長輩出行的家庭，不用擔心碰撞受傷。房內備有免治馬桶、乾濕分離獨立衛浴、液晶電視、分離式冷暖空調、小冰箱、吹風機與電熱水壺，讓您在台東靜享禪意與親子慢活時光。',
      'en': 'Spanning 22 sqm, this Japanese Zen Tatami Room features low-profile wooden flooring and two double mattresses (150x188cm). Safe and comfortable for young kids. Includes washlet bidet, separate shower, LCD TV, whisper-quiet AC, and mini fridge.',
      'ja': '約22㎡の和モダン和室。素足で心地よい天然木フローリングにダブルサイズ寝具2組（150x188cm）を配置。小さなお子様連れや三世代旅行にも大変喜ばれております。温水洗浄便座、セパレートバス、テレビ、冷蔵庫完備。',
      'zh-CN': '日式和风和室房约 22 平方公尺，全室铺设天然温润木质地板与典雅和风软垫大床（两张 150x188公分双人床）。席地而坐的自在氛围特别适合带幼童或长辈出行的家庭，不用担心碰撞受伤。房内备有免治马桶、干湿分离独立卫浴、液晶电视、分离式冷暖空调、小冰箱、吹风机与电热水壶，让您在台东静享禅意与亲子慢活时光。'
    },
    basePriceTWD: 2800,
    weekendPriceTWD: 3600,
    sizeSqm: 22,
    maxGuests: 4,
    bedType: {
      'zh-TW': '和室雙大床（150x188公分 x 2）',
      'en': '2 x Zen Tatami Double Beds (150x188cm)',
      'ja': '和室ダブル寝具 2組 (150x188cm)',
      'zh-CN': '和室双大床（150x188公分 x 2）'
    },
    floor: {
      'zh-TW': '全棟室內電梯直達',
      'en': 'Elevator Access',
      'ja': 'エレベーター直通',
      'zh-CN': '全栋室内电梯直达'
    },
    view: {
      'zh-TW': '開闊窗景與雅致和室光影',
      'en': 'Open Window View & Zen Lighting',
      'ja': '明るい窓からの眺望と和の光景',
      'zh-CN': '开阔窗景与雅致和室光影'
    },
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85'
    ],
    features: {
      'zh-TW': [
        '和室雙大床配置，可舒適容納 4 位家庭貴賓',
        '天然木地板通鋪設計，友善幼童防跌撞更安心',
        '免治馬桶設備與乾濕分離獨立衛浴',
        '全棟設有室內電梯，全家長輩進出無憂',
        '每日活力早餐免費提供 (依人數供應)',
        '免費專屬停車場、自助洗衣空間與單車租借服務'
      ],
      'en': [
        'Two Zen tatami double beds accommodating up to 4 guests comfortably',
        'Natural hardwood flooring safe and friendly for toddlers',
        'Washlet bidet toilet & modern separate shower',
        'Elevator access for all family members',
        'Complimentary breakfast included daily',
        'Free on-site parking, guest laundry area and free bicycles'
      ],
      'ja': [
        '和室ダブル寝具2組でご家族4名様まで快眠',
        '段差が少なくお子様にも安心の天然木フロア',
        '温水洗浄便座＆セパレートバスルーム',
        'エレベーター完備で三世代旅行にも安心',
        '毎朝の無料朝食サービス',
        '無料駐車場、ランドリー＆自転車無料貸出'
      ],
      'zh-CN': [
        '和室双大床配置，可舒适容纳 4 位家庭贵宾',
        '天然木地板通铺设计，友善幼童防跌撞更安心',
        '免治马桶设备与干湿分离独立卫浴',
        '全栋设有室内电梯，全家长辈进出无忧',
        '每日活力早餐免费提供 (依人数供应)',
        '免费专属停车场、自助洗衣空间与单车租借服务'
      ]
    },
    amenities: ['wifi', 'tv', 'bath', 'ac', 'elevator', 'parking', 'breakfast', 'bike', 'laundry', 'fridge', 'kettle']
  }
];

export const CURATED_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-breakfast-taitung',
    title: {
      'zh-TW': '元氣晨光 ‧ 湯園精緻活力手作早餐',
      'en': 'Complimentary Tang Home Artisan Breakfast',
      'ja': '湯園 特製ヘルシーモーニング（無料朝食）',
      'zh-CN': '元气晨光 ‧ 汤园精致活力手作早餐'
    },
    category: {
      'zh-TW': '住宿免費禮遇',
      'en': 'Complimentary Perk',
      'ja': '無料サービス',
      'zh-CN': '住宿免费礼遇'
    },
    priceTWD: 0,
    priceType: 'complimentary',
    description: {
      'zh-TW': '每日早晨為房客現作營養豐富的活力早餐，搭配新鮮研磨咖啡、精選茶飲與時令水果，為您開啟元氣滿滿的台東漫遊時光。',
      'en': 'Freshly prepared wholesome breakfast every morning with freshly ground coffee, fine teas, and seasonal fruits to energize your day in Taitung.',
      'ja': '毎朝出来立ての栄養満点朝食を無料でお届け。淹れたてコーヒーや季節のフルーツとともに、台東での爽やかな一日をお始めください。',
      'zh-CN': '每日早晨为房客现作营养丰富的活力早餐，搭配新鲜研磨咖啡、精选茶饮与时令水果，为您开启元气满满的台东漫游时光。'
    },
    duration: {
      'zh-TW': '每日 07:30 - 09:30',
      'en': 'Daily 07:30 - 09:30',
      'ja': '毎日 07:30 - 09:30',
      'zh-CN': '每日 07:30 - 09:30'
    },
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
    highlight: {
      'zh-TW': '所有入住房客皆享免費招待',
      'en': 'Complimentary for all resident guests',
      'ja': '全宿泊者様無料サービス',
      'zh-CN': '所有入住房客皆享免费招待'
    }
  },
  {
    id: 'exp-bike-tour',
    title: {
      'zh-TW': '慢活鐵馬 ‧ 森林公園琵琶湖單車漫遊',
      'en': 'Complimentary Bike Rental & Forest Park Cycling',
      'ja': '無料レンタサイクル＆台東森林公園ポタリング',
      'zh-CN': '慢活铁马 ‧ 森林公园琵琶湖单车漫游'
    },
    category: {
      'zh-TW': '休閒慢活體驗',
      'en': 'Leisure & Nature',
      'ja': '自然＆レジャー',
      'zh-CN': '休闲慢活体验'
    },
    priceTWD: 0,
    priceType: 'complimentary',
    description: {
      'zh-TW': '湯園民宿提供房客免費腳踏車借用服務，騎車 5~10 分鐘即可抵達台東森林公園、活水湖、琵琶湖或鐵道藝術村，沉浸在台東的微風綠意中。',
      'en': 'Borrow our complimentary bicycles to cycle along the Taitung Mountain-Ocean Bikeway, Forest Park, Pipa Lake, or Tiehua Music Village in just 5-10 minutes.',
      'ja': '民宿の無料自転車で、台東森林公園や琵琶湖、鐵花村まで快適サイクリング。台東の澄んだ風と自然を満喫できます。',
      'zh-CN': '汤园民宿提供房客免费脚踏车借用服务，骑车 5~10 分钟即可抵达台东森林公园、活水湖、琵琶湖或铁道艺术村，沉浸在台东的微风绿意中。'
    },
    duration: {
      'zh-TW': '入住期間自由借用',
      'en': 'Free loan during stay',
      'ja': 'ご滞在中いつでも利用可能',
      'zh-CN': '入住期间自由借用'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    highlight: {
      'zh-TW': '免費租借、附安全鎖與景點地圖',
      'en': 'Free rental with bike locks & trail map',
      'ja': '鍵・サイクリングマップ付き無料貸出',
      'zh-CN': '免费租借、附安全锁与景点地图'
    }
  },
  {
    id: 'exp-sister-shangxianyue',
    title: {
      'zh-TW': '姐妹館 ‧ 上弦月民宿 (台東火車站旁 / 烤肉庭園)',
      'en': 'Sister Property: Shangxianyue B&B (Next to Taitung Station)',
      'ja': '姉妹館：上弦月民宿（台東駅すぐ／BBQガーデン）',
      'zh-CN': '姐妹馆 ‧ 上弦月民宿 (台东火车站旁 / 烤肉庭园)'
    },
    category: {
      'zh-TW': '姐妹館推薦',
      'en': 'Sister Property',
      'ja': '姉妹宿のご案内',
      'zh-CN': '姐妹馆推荐'
    },
    priceTWD: 0,
    priceType: 'complimentary',
    description: {
      'zh-TW': '湯園民宿之姐妹館「上弦月民宿」（台東縣合法民宿第 1238 號），座落於台東火車站旁，出站步行即達。設有專屬烤肉場地、優美庭園與多樣房型。',
      'en': 'Shangxianyue B&B (Legal License NO. 1238), sister to Tang Home, is located right beside Taitung Railway Station. Features a BBQ courtyard, garden, and family rooms.',
      'ja': '湯園民宿の姉妹館「上弦月民宿」（登録NO.1238）は台東駅のすぐ隣。出站徒歩ですぐ。バーベキュー設備や庭園も完備。',
      'zh-CN': '汤园民宿之姐妹馆「上弦月民宿」（台东县合法民宿第 1238 号），座落于台东火车站旁，出站步行即达。设有专属烤肉场地、优美庭园与多样房型。'
    },
    duration: {
      'zh-TW': '台東車站步行 2 分鐘',
      'en': '2 mins walk from Taitung Station',
      'ja': '台東駅から徒歩2分',
      'zh-CN': '台东车站步行 2 分钟'
    },
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    highlight: {
      'zh-TW': '合法登記 NO.1238 ‧ 附烤肉場地與庭園',
      'en': 'Legal License NO. 1238 ‧ BBQ Yard & Garden',
      'ja': '合法登録宿 NO.1238・BBQ場完備',
      'zh-CN': '合法登记 NO.1238 ‧ 附烤肉场地与庭园'
    }
  },
  {
    id: 'exp-taitung-google-map',
    title: {
      'zh-TW': '湯園專屬 ‧ 台東 Google 私房旅遊地圖',
      'en': 'Tang Home Curated Google Travel Map',
      'ja': '湯園特製 Google 観光グルメマップ',
      'zh-CN': '汤园专属 ‧ 台东 Google 私房旅游地图'
    },
    category: {
      'zh-TW': '在地旅遊服務',
      'en': 'Travel Concierge',
      'ja': '観光サポート',
      'zh-CN': '在地旅游服务'
    },
    priceTWD: 0,
    priceType: 'complimentary',
    description: {
      'zh-TW': '民宿主人精心整理的私房景點地圖，收錄必吃在地美食、文創手作、咖啡私竇與山海秘境，手機點擊即可即時於 Google 地圖導航。',
      'en': 'Handpicked by the host, featuring authentic local eateries, artisanal cafes, craft markets, and hidden gems with one-tap Google Maps navigation.',
      'ja': 'オーナー厳選のご当地グルメ、カフェ、文化スポット、秘境をまとめたGoogleマップ。スマホからワンタップでナビ可能。',
      'zh-CN': '民宿主人精心整理的私房景点地图，收录必吃在地美食、文创手作、咖啡私窦与山海秘境，手机点击即可即时于 Google 地图导航。'
    },
    duration: {
      'zh-TW': '隨點即看 ‧ 即時導航',
      'en': 'Instant Access Anytime',
      'ja': 'いつでもアクセス可能',
      'zh-CN': '随点即看 ‧ 即时导航'
    },
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85',
    highlight: {
      'zh-TW': '私房景點美食清單 ‧ Google 地圖直連導航',
      'en': 'Bespoke Food & Sights List ‧ Google Maps Sync',
      'ja': '特製マップ連動 ‧ ワンタップナビ',
      'zh-CN': '私房景点美食清单 ‧ Google 地图直连导航'
    }
  }
];

export const NEARBY_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'attr-art-museum',
    name: {
      'zh-TW': '台東美術館',
      'en': 'Taitung Art Museum',
      'ja': '台東美術館',
      'zh-CN': '台东美术馆'
    },
    category: {
      'zh-TW': '藝文展覽 ‧ 綠意草坪',
      'en': 'Art & Green Lawn',
      'ja': 'アート＆芝生広場',
      'zh-CN': '艺文展览 ‧ 绿意草坪'
    },
    distance: {
      'zh-TW': '車程約 3 分鐘 / 單車 5 分鐘',
      'en': '3 mins drive / 5 mins bicycle',
      'ja': '車で約3分 / 自転車で5分',
      'zh-CN': '车程约 3 分钟 / 单车 5 分钟'
    },
    description: {
      'zh-TW': '東台灣首座縣級公立美術館，擁有優美的木造綠建築、大片綠草坪、樹屋裝置藝術與悠閒咖啡座，散步拍照極具質感。',
      'en': 'Eastern Taiwan’s first public art museum with wooden green architecture, wide lawns, treehouses, and relaxed cafes.',
      'ja': '東台湾初の公立美術館。美しい木造建築と広大な芝生、ツリーハウスがあり、散策や写真撮影に最適。',
      'zh-CN': '东台湾首座县级公立美术馆，拥有优美的木造绿建筑、大片绿草坪、树屋装置艺术与悠闲咖啡座，散步拍照极具质感。'
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'attr-tiehua-village',
    name: {
      'zh-TW': '鐵花村音樂聚落 & 鐵道藝術村',
      'en': 'Tiehua Music Village & Railway Art Village',
      'ja': '鐵花村音楽集落＆鉄道芸術村',
      'zh-CN': '铁花村音乐聚落 & 铁道艺术村'
    },
    category: {
      'zh-TW': '音樂文創 ‧ 夜間市集',
      'en': 'Music, Crafts & Night Market',
      'ja': '音楽・クラフト・ナイトマーケット',
      'zh-CN': '音乐文创 ‧ 夜间市集'
    },
    distance: {
      'zh-TW': '車程約 6 分鐘 / 單車 10 分鐘',
      'en': '6 mins drive / 10 mins bicycle',
      'ja': '車で約6分 / 自転車で10分',
      'zh-CN': '车程约 6 分钟 / 单车 10 分钟'
    },
    description: {
      'zh-TW': '由台東舊火車站倉庫改造，夜晚熱氣球彩繪燈海璀璨浪漫，匯聚原住民原創音樂展演、手作文創市集與風格特色小店。',
      'en': 'Converted from old railway warehouses, featuring illuminated miniature balloon lanterns, live indigenous music, and craft markets.',
      'ja': '旧台東駅をリノベーションした人気スポット。夜は気球型ランタンが灯り、先住民ライブ音楽やハンドメイドマーケットで賑わいます。',
      'zh-CN': '由台东旧火车站仓库改造，夜晚热气球彩绘灯海璀璨浪漫，汇聚原住民原创音乐展演、手作文创市集与风格特色小店。'
    },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'attr-forest-park',
    name: {
      'zh-TW': '台東森林公園 (黑森林) & 琵琶湖',
      'en': 'Taitung Forest Park & Pipa Lake',
      'ja': '台東森林公園＆琵琶湖',
      'zh-CN': '台东森林公园 (黑森林) & 琵琶湖'
    },
    category: {
      'zh-TW': '自然生態 ‧ 絕美單車步道',
      'en': 'Nature Reserve & Bikeway',
      'ja': '自然公園＆サイクリングロード',
      'zh-CN': '自然生态 ‧ 绝美单车步道'
    },
    distance: {
      'zh-TW': '車程約 8 分鐘 / 單車 12 分鐘',
      'en': '8 mins drive / 12 mins bicycle',
      'ja': '車で約8分 / 自転車で12分',
      'zh-CN': '车程约 8 分钟 / 单车 12 分钟'
    },
    description: {
      'zh-TW': '佔地近 300 公頃的木麻黃黑森林，園內擁有天然湧泉琵琶湖與活水湖，湖水清澈倒映藍天，是騎乘單車不可錯過的仙境。',
      'en': 'Nearly 300 hectares of coastal forest featuring pristine spring-fed Pipa Lake and Flowing Lake, perfect for leisurely biking.',
      'ja': '約300ヘクタールの広大な自然林。透明度の高い琵琶湖と活水湖があり、緑あふれるサイクリングに最適。',
      'zh-CN': '占地近 300 公顷的木麻黄黑森林，园内拥有天然涌泉琵琶湖与活水湖，湖水清澈倒映蓝天，是骑乘单车不可错过的仙境。'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'attr-seashore-park',
    name: {
      'zh-TW': '台東海濱公園 & 國際地標 (向陽樹)',
      'en': 'Taitung Seashore Park & Ocean Landmark',
      'ja': '台東海浜公園＆国際ランドマーク',
      'zh-CN': '台大海滨公园 & 国际地标 (向阳树)'
    },
    category: {
      'zh-TW': '太平洋海景 ‧ 日出地標',
      'en': 'Pacific Ocean & Sunrise',
      'ja': '太平洋の海景＆日の出',
      'zh-CN': '太平洋海景 ‧ 日出地标'
    },
    distance: {
      'zh-TW': '車程約 8 分鐘',
      'en': '8 mins drive',
      'ja': '車で約8分',
      'zh-CN': '车程约 8 分钟'
    },
    description: {
      'zh-TW': '緊鄰太平洋無垠海岸線，設有藤編竹編造型的「向陽樹」國際地標，可遠眺綠島，是欣賞東海岸壯麗日出與吹海風的絕佳去處。',
      'en': 'Fronting the expansive Pacific coast, home to the woven bamboo landmark dome, offering sweeping ocean and sunrise views.',
      'ja': '太平洋を一望できる海浜公園。竹と藤で編まれたドーム型ランドマークがあり、東海岸の朝日を眺める名所です。',
      'zh-CN': '紧邻太平洋无垠海岸线，设有藤编竹编造型的「向阳树」国际地标，可远眺绿岛，是欣赏东海岸壮丽日出与吹海风的绝佳去处。'
    },
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'attr-night-market',
    name: {
      'zh-TW': '台東觀光夜市 (正氣路夜市)',
      'en': 'Taitung Tourist Night Market (Zhengqi Rd)',
      'ja': '台東観光夜市（正気路夜市）',
      'zh-CN': '台东观光夜市 (正气路夜市)'
    },
    category: {
      'zh-TW': '在地必吃美食小吃',
      'en': 'Local Street Food Night Market',
      'ja': '地元ローカルB級グルメ',
      'zh-CN': '在地必吃美食小吃'
    },
    distance: {
      'zh-TW': '車程約 6 分鐘',
      'en': '6 mins drive',
      'ja': '車で約6分',
      'zh-CN': '车程约 6 分钟'
    },
    description: {
      'zh-TW': '每週四、五、六開市的熱鬧正氣路夜市，烤肉刈包、東山鴨頭、釋迦冰淇淋、炸雞排等在地排隊小吃應有盡有。',
      'en': 'Vibrant night market open Thursday to Saturday, packed with authentic Taiwanese street delicacies, fried chicken, and custard apple ice cream.',
      'ja': '木・金・土曜日に開催される賑やかな夜市。釈迦頭アイスや台湾風バーガーなどご当地グルメが満載。',
      'zh-CN': '每周四、五、六开市的热闹正气路夜市，烤肉刈包、东山鸭头、释迦冰淇淋、炸鸡排等在地排队小吃应有尽有。'
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'attr-flow-lake',
    name: {
      'zh-TW': '台東森林公園 ‧ 活水湖水域休閒園區',
      'en': 'Taitung Forest Park & Flowing Lake',
      'ja': '台東森林公園 ‧ 活水湖（親水レジャーパーク）',
      'zh-CN': '台东森林公园 ‧ 活水湖水域休闲园区'
    },
    category: {
      'zh-TW': '親水休閒 ‧ 單車漫遊',
      'en': 'Lakeside Leisure & Cycling',
      'ja': '親水レジャー・サイクリング',
      'zh-CN': '亲水休闲 ‧ 单车漫游'
    },
    distance: {
      'zh-TW': '車程約 8 分鐘',
      'en': '8 mins drive',
      'ja': '車で約8分',
      'zh-CN': '车程约 8 分钟'
    },
    description: {
      'zh-TW': '由天然湧泉孕育而成的長條形人工湖泊，湖水澄澈碧藍，周圍綠樹環繞，可租借民宿自行車前往環湖步道騎乘，享受徐徐涼風與台東悠閒步調。',
      'en': 'Fed by pristine natural spring water, surrounded by coastal forest and scenic bicycle trails. Ideal for morning rides and scenic walks.',
      'ja': '天然の湧き水による澄んだ湖。緑に囲まれたサイクリングロードがあり、心地よい風と穏やかな時間を楽しめます。',
      'zh-CN': '由天然涌泉孕育而成的长条形人工湖泊，湖水澄澈碧蓝，周围绿树环绕，可租借民宿自行车前往环湖步道骑乘，享受徐徐凉风与台东悠闲步调。'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85'
  }
];

export const PROPERTY_FAQS: FaqItem[] = [
  {
    id: 'faq-location-sights',
    category: 'stay',
    question: {
      'zh-TW': '湯園民宿位於台東何處？周邊鄰近哪些景點？',
      'en': 'Where is Tang Home located? What attractions are nearby?',
      'ja': '湯園民宿の所在地と周辺の主要観光地は？',
      'zh-CN': '汤园民宿位于台东何处？周边邻近哪些景点？'
    },
    answer: {
      'zh-TW': '湯園民宿座落於「台東市中興路一段225號」，周邊生活機能極佳且環境安靜。\n‧ 距台東美術館：車程約 3 分鐘\n‧ 距鐵花村音樂聚落 / 秀泰影城商圈：車程約 6 分鐘\n‧ 距正氣路觀光夜市：車程約 6 分鐘\n‧ 距台東森林公園 / 琵琶湖 / 海濱公園：車程約 8 分鐘\n民宿亦為房客整理了專屬 Google 私房地圖，點擊即可一鍵導航在地隱藏版美食與秘境。',
      'en': 'Tang Home is located at No. 225, Sec. 1, Zhongxing Rd., Taitung City.\n- Taitung Art Museum: 3 mins drive\n- Tiehua Music Village & Showtime Plaza: 6 mins drive\n- Zhengqi Rd Tourist Night Market: 6 mins drive\n- Forest Park, Pipa Lake & Seaside Park: 8 mins drive\nWe also provide our exclusive curated Google Travel Map for seamless navigation.',
      'ja': '住所：台東市中興路一段225号。\n・台東美術館：車で約3分\n・鐵花村音楽集落／映画館エリア：車で約6分\n・正気路観光夜市：車で約6分\n・台東森林公園／琵琶湖／海浜公園：車で約8分\nオーナー特製Googleマップで地元の隠れ家スポットもご案内いたします。',
      'zh-CN': '汤园民宿座落于「台东市中兴路一段225号」，周边生活机能极佳且环境安静。\n‧ 距台东美术馆：车程约 3 分钟\n‧ 距铁花村音乐聚落 / 秀泰影城商圈：车程约 6 分钟\n‧ 距正气路观光夜市：车程约 6 分钟\n‧ 距台东森林公园 / 琵琶湖 / 海滨公园：车程约 8 分钟\n民宿亦为房客整理了专属 Google 私房地图，点击即可一键导航在地隐藏版美食与秘境。'
    }
  },
  {
    id: 'faq-parking-info',
    category: 'stay',
    question: {
      'zh-TW': '民宿是否有提供專屬免費停車位？',
      'en': 'Does Tang Home offer dedicated free parking on site?',
      'ja': '専用の無料駐車場はありますか？',
      'zh-CN': '民宿是否有提供专属免费停车位？'
    },
    answer: {
      'zh-TW': '有的！湯園民宿設有專屬平面停車場，開車前來的旅客可享有免費停放服務。車位寬敞好停，讓您自駕出遊省去在市區尋找車位的困擾與花費。',
      'en': 'Yes! Tang Home provides a free on-site flat parking area for all driving guests. Spacious and secure, saving you the hassle of finding street parking in town.',
      'ja': 'はい！敷地内に専用の無料平面駐車場を完備しております。お車でお越しの際も安心・快適にご利用いただけます。',
      'zh-CN': '有的！汤园民宿设有专属平面停车场，开车前来的旅客可享有免费停放服务。车位宽敞好停，让您自驾出游省去在市区寻找车位的困扰与花费。'
    }
  },
  {
    id: 'faq-elevator-accessible',
    category: 'stay',
    question: {
      'zh-TW': '全棟是否有室內電梯？長輩同行或大件行李方便嗎？',
      'en': 'Is there an indoor elevator? Is it accessible for seniors and heavy luggage?',
      'ja': '全館エレベーターはありますか？お年寄りや大荷物でも大丈夫ですか？',
      'zh-CN': '全栋是否有室内电梯？长辈同行或大件行李方便吗？'
    },
    answer: {
      'zh-TW': '全棟建築配備現代化室內安全電梯，無論是攜帶大件行李箱、嬰兒推車，或是與長輩、孩童闔家出遊，都能輕鬆直達各客房樓層，舒適無障礙。',
      'en': 'Yes! The entire building is equipped with a modern indoor elevator, allowing effortless access to all room floors for seniors, strollers, and large suitcases.',
      'ja': 'はい！館内には最新のエレベーターを完備しております。高齢のご家族やベビーカー、大きなスーツケースをお持ちの方も快適にお過ごしいただけます。',
      'zh-CN': '全栋建筑配备现代化室内安全电梯，无论是携带大件行李箱、婴儿推车，或是与长辈、孩童阖家出游，都能轻松直达各客房楼层，舒适无障碍。'
    }
  },
  {
    id: 'faq-washlet-bathroom',
    category: 'stay',
    question: {
      'zh-TW': '客房衛浴設備與免治馬桶配備為何？',
      'en': 'What are the bathroom amenities? Are washlet toilets installed?',
      'ja': 'お部屋の浴室設備や温水洗浄便座について教えてください。',
      'zh-CN': '客房卫浴设备与免治马桶配备为何？'
    },
    answer: {
      'zh-TW': '所有客房均採用乾濕分離衛浴設計，並全面配備溫水洗淨免治馬桶、強效靜音吹風機、按壓式大瓶裝洗沐用品與純棉厚磅浴巾，提供舒心潔淨的沐浴體驗。',
      'en': 'All guest rooms feature dry-wet separated modern bathrooms, fully equipped with electronic washlet bidets, high-power silent hairdryers, and large-bottle botanic shampoo & body wash.',
      'ja': '全客室にセパレートタイプの清潔なバスルームと温水洗浄便座を完備。大風量ドライヤーやボトル入りシャンプー・ボディーソープをご用意しております。',
      'zh-CN': '所有客房均采用干湿分离卫浴设计，并全面配备温水洗净免治马桶、强效静音吹风机、按压式大瓶装洗沐用品与纯棉厚磅浴巾，提供舒心洁净的沐浴体验。'
    }
  },
  {
    id: 'faq-laundry-bike',
    category: 'stay',
    question: {
      'zh-TW': '館內是否有提供洗衣空間與自行車借用服務？',
      'en': 'Are guest laundry area and complimentary bicycles available?',
      'ja': 'ランドリー空間や無料レンタサイクルのサービスはありますか？',
      'zh-CN': '馆内是否有提供洗衣空间与自行车借用服务？'
    },
    answer: {
      'zh-TW': '有的！\n‧ 自助洗衣空間：館內設有洗衣空間與洗衣設備，方便環島、長住或親子家庭換洗衣物（註：館內僅提供洗衣空間，無烘衣設備）。\n‧ 免費單車借用：民宿備有保養良好的休閒自行車與安全鎖，可自由借用漫遊台東鐵馬道與市區小吃。',
      'en': 'Yes!\n- Guest Laundry Area: Washing facilities available for long-stay guests and round-island cyclists (Note: washing facilities only; dryer not available).\n- Free Bicycles: Well-maintained city bikes with safety locks available complimentary for exploring nearby bikeways.',
      'ja': 'はい！\n・ランドリー空間：長期滞在やサイクリング旅行に便利な洗濯設備を設置しております（※洗濯機のみ、乾燥機はございません）。\n・無料レンタサイクル：整備された自転車を無料でお貸し出ししており、市街地や森林公園の散策に最適です。',
      'zh-CN': '有的！\n‧ 自助洗衣空间：馆内设有洗衣空间与洗衣设备，方便环岛、长住或亲子家庭换洗衣物（注：馆内仅提供洗衣空间，无烘衣设备）。\n‧ 免费单车借用：民宿备有保养良好的休闲自行车与安全锁，可自由借用漫游台东铁马道与市区小吃。'
    }
  },
  {
    id: 'faq-checkin',
    category: 'stay',
    question: {
      'zh-TW': '入住 (Check-in) 與退房 (Check-out) 時間為何？若較晚抵達該如何辦理？',
      'en': 'What are check-in and check-out times? How to check in after hours?',
      'ja': 'チェックイン・チェックアウト時間は何時ですか？遅い到着の対応は？',
      'zh-CN': '入住 (Check-in) 与退房 (Check-out) 时间为何？若较晚抵达该如何办理？'
    },
    answer: {
      'zh-TW': '‧ 入住時間：每日下午 15:00 起\n‧ 退房時間：每日上午 11:00 前\n若您預計於下午 17:00 後抵達，湯園民宿提供貼心完善的「引導式自助入住服務」。請提前致電或透過官方 LINE 告知預計抵達時間，管家將發送專屬大門密碼與客房指引。',
      'en': 'Check-in: 15:00 onwards | Check-out: by 11:00 AM.\nFor arrivals after 17:00, we offer seamless self-check-in guidance. Simply notify us via Phone or LINE in advance to receive door access codes.',
      'ja': 'チェックイン：15:00〜／チェックアウト：〜11:00。\n17:00以降にご到着予定の場合は、事前にLINEまたはお電話でお知らせいただければ、暗証番号とセルフチェックイン案内をお送りいたします。',
      'zh-CN': '‧ 入住时间：每日下午 15:00 起\n‧ 退房时间：每日上午 11:00 前\n若您预计于下午 17:00 后抵达，汤园民宿提供贴心完善的「引导式自助入住服务」。请提前致电或透过官方 LINE 告知预计抵达时间，管家将发送专属大门密码与客房指引。'
    }
  },
  {
    id: 'faq-amenities-2025',
    category: 'stay',
    question: {
      'zh-TW': '自 2025 年起之永續環保備品政策說明？',
      'en': 'Environmental sustainability & amenity updates starting 2025?',
      'ja': '2025年以降の環境保護方針（アメニティ提供）について教えてください。',
      'zh-CN': '自 2025 年起之永续环保备品政策说明？'
    },
    answer: {
      'zh-TW': '響應政府永續減塑政策，自 2025 年 1 月 1 日起，湯園民宿不再主動提供一次性個人盥洗用品（如牙刷、牙膏、刮鬍刀、浴帽、梳子等），敬請旅客自行攜帶。\n客房內仍備有大瓶裝洗髮沐浴乳、純棉浴巾、毛巾、吹風機、免治馬桶、電熱水壺與室內拖鞋。',
      'en': 'In compliance with government sustainability regulations, disposable single-use items (toothbrush, toothpaste, razor, comb) are no longer provided. Guests are encouraged to bring their own toiletries. Towels, shampoo, body wash, hairdryer, and slippers remain fully equipped.',
      'ja': '減プラスチック環境保護方針に基づき、使い捨てアメニティ（歯ブラシ、カミソリ、ブラシ等）の提供を終了いたしました。ご持参にご協力をお願いいたします。シャンプー、タオル、ドライヤーは完備しております。',
      'zh-CN': '响应政府永续减塑政策，自 2025 年 1 月 1 日起，汤园民宿不再主动提供一次性个人盥洗用品（如牙刷、牙膏、刮胡刀、浴帽、梳子等），敬请旅客自行携带。\n客房内仍备有大瓶装洗发沐浴乳、纯棉浴巾、毛巾、吹风机、免治马桶、电热水壶与室内拖鞋。'
    }
  },
  {
    id: 'faq-transport-guide',
    category: 'transport',
    question: {
      'zh-TW': '如何前往湯園民宿？交通方式為何？',
      'en': 'How to get to Tang Home? Transportation recommendations?',
      'ja': 'アクセス方法と交通手段について教えてください。',
      'zh-CN': '如何前往汤园民宿？交通方式为何？'
    },
    answer: {
      'zh-TW': '‧ 自駕開車：行駛台 9 線或台 11 線進入台東市區後接中興路一段 225 號，民宿附設專屬停車場。\n‧ 搭乘火車：抵達台東火車站後，車程約 10 分鐘，建議搭乘計程車或於站前租車/自駕直達民宿。\n‧ 航空飛行：台東豐年機場車程約 12 分鐘。',
      'en': 'Driving: Access via Provincial Hwy 9 or 11 into Zhongxing Rd Sec 1. On-site parking available.\nTrain: Approx. 10 mins drive from Taitung Railway Station by taxi or rental car.\nFlight: Approx. 12 mins drive from Taitung Airport.',
      'ja': 'お車：台9線または台11線より中興路一段へ（専用無料駐車場あり）。\n電車：台東駅からタクシーまたはレンタカーで約10分。\n飛行機：台東豊年空港から車で約12分。',
      'zh-CN': '‧ 自驾开车：行驶台 9 线或台 11 线进入台东市区后接中兴路一段 225 号，民宿附设专属停车场。\n‧ 搭乘火车：抵达台东火车站后，车程约 10 分钟，建议搭乘出租车或于站前租车/自驾直达民宿。\n‧ 航空飞行：台东丰年机场车程约 12 分钟。'
    }
  },
  {
    id: 'faq-sister-property',
    category: 'stay',
    question: {
      'zh-TW': '湯園民宿是否有姐妹館？特色為何？',
      'en': 'Does Tang Home have a sister property?',
      'ja': '姉妹館はありますか？',
      'zh-CN': '汤园民宿是否有姐妹馆？特色为何？'
    },
    answer: {
      'zh-TW': '有的！湯園民宿姐妹館為「上弦月民宿」（台東縣合法民宿第 1238 號），座落於台東火車站正前方，出站步行 2 分鐘即達，特別設有專屬烤肉活動庭園與寬敞休憩空間，非常適合搭乘火車、團體出遊與喜愛庭園烤肉的旅客。',
      'en': 'Yes! Our sister property is "Shangxianyue B&B" (Legal License NO. 1238), located just a 2-minute walk from Taitung Railway Station, featuring a dedicated BBQ yard and spacious leisure grounds.',
      'ja': 'はい！姉妹館「上弦月民宿」（台東県合法民宿 第1238号）は台東駅の目の前（徒歩2分）。専用バーベキューガーデンがありグループ旅行に最適です。',
      'zh-CN': '有的！汤园民宿姐妹馆为「上弦月民宿」（台东县合法民宿第 1238 号），座落于台东火车站正前方，出站步行 2 分钟即达，特别设有专属烤肉活动庭园与宽敞休憩空间，非常适合搭乘火车、团体出游与喜爱庭园烤肉的旅客。'
    }
  },
  {
    id: 'faq-payment-methods',
    category: 'booking',
    question: {
      'zh-TW': '湯園民宿提供哪些付款方式？匯款帳號與流程為何？',
      'en': 'What payment methods are accepted? Bank transfer info & booking deposit?',
      'ja': '利用可能な支払い方法と銀行振込口座について教えてください。',
      'zh-CN': '汤园民宿提供哪些付款方式？汇款账号与流程为何？'
    },
    answer: {
      'zh-TW': '【多元支付方式】\n‧ 到店多元支付：支援現金、國民旅遊卡特約商店、信用卡（VISA、MasterCard、JCB、台北富邦銀行）、行動支付（Apple Pay、台灣Pay、全支付 pxpay plus、悠遊付 EasyWallet、全盈+PAY、微信支付 Weixin Pay、支付寶 ALIPAY）。\n\n【訂房匯款資訊】\n‧ 銀行代碼：808（玉山銀行 - 台東簡易分行）\n‧ 匯款帳號：0716-968-016666\n‧ 戶名：邱美惠\n‧ 匯款規範：預定房間匯款為訂單全額 100%，請於確認訂房後 3 日內完成匯款。\n‧ 對帳告知：匯款完成後請來電（0966-733-338）或加官方 LINE (@tang225) 告知入住人姓名、入住日期、匯款金額與帳號末 5 碼，以便為您核帳確認保留。',
      'en': 'Payment Methods:\n- On-site / Mobile: Cash, National Travel Card, Credit Cards (VISA, MasterCard, JCB), Apple Pay, Taiwan Pay, PXPay Plus, EasyWallet, Plus Pay, WeChat Pay, Alipay.\n- Bank Transfer Deposit: E.SUN Bank (808) Taitung Branch, Account: 0716-968-016666, Name: Chiu Mei-Hui.\n- Transfer Requirement: 100% full prepayment within 3 days after reservation. Please notify us with your name, date, amount, and last 5 account digits via LINE (@tang225) or Phone (0966-733-338).',
      'ja': '【お支払い方法】\n・現地・モバイル決済：現金、台湾国民旅行カード特約、各種クレジットカード（VISA、MasterCard、JCB）、Apple Pay、台湾Pay、PXPay、EasyWallet、WeChat Pay、Alipay等に対応。\n・銀行振込：玉山銀行（コード 808）台東支店、口座番号：0716-968-016666、口座名義：邱美恵。\n・ご予約後3日以内に全額をお振込みいただき、LINE (@tang225) またはお電話 (0966-733-338) にて振込名義と下5桁をお知らせください。',
      'zh-CN': '【多元支付方式】\n‧ 到店多元支付：支持现金、国民旅游卡特约商店、信用卡（VISA、MasterCard、JCB、台北富邦银行）、移动支付（Apple Pay、台湾Pay、全支付 pxpay plus、悠游付 EasyWallet、全盈+PAY、微信支付 Weixin Pay、支付宝 ALIPAY）。\n\n【订房汇款信息】\n‧ 银行代码：808（玉山银行 - 台东简易分行）\n‧ 汇款账号：0716-968-016666\n‧ 户名：邱美惠\n‧ 汇款规范：预定房间汇款为订单全额 100%，请于确认订房后 3 日内完成汇款。\n‧ 对账告知：汇款完成后请来电（0966-733-338）或加官方 LINE (@tang225) 告知入住人姓名、入住日期、汇款金额与账号末 5 码，以便为您核账确认保留。'
    }
  },
  {
    id: 'faq-rates-definition',
    category: 'booking',
    question: {
      'zh-TW': '平假日定義、加床/加人費用與加被收費標準為何？',
      'en': 'What are weekday/weekend definitions, extra bed ($600) & bedding fees?',
      'ja': '平日・休日の区分、エキストラベッド料金（NT$600）、追加寝具料金について',
      'zh-CN': '平假日定义、加床/加人费用与加被收费标准为何？'
    },
    answer: {
      'zh-TW': '【平假日定義】\n‧ 平日：週日至週四\n‧ 假日：週五、週六及暑假期間\n‧ 旺日：國定連續假日\n‧ 定價：農曆春節期間\n\n【加床 / 加人收費】\n‧ 5 歲以上每人每晚加收 NT$ 600 元（農曆春節每人 NT$ 1,000 元，含活力早餐與客房備品）。\n‧ 0~5 歲兒童在不加床情況下免費同住（不供早餐）。\n‧ 為維護住宿品質，請依房型核定人數進住，如需加人請事先於訂房時告知確切人數與兒童年齡。\n\n【額外加被服務】\n‧ 房間加被子與枕頭請提早告知，每件收取工本清潔費 NT$ 100 元。',
      'en': 'Definitions & Rates:\n- Weekdays: Sunday - Thursday\n- Weekends: Friday, Saturday & Summer Vacation\n- Peak Days: Consecutive National Holidays\n- Holiday Tariff: Lunar New Year\n- Extra Bed / Person: NT$ 600 per person/night for ages 5+ (NT$ 1,000 during CNY, includes breakfast). Children under 5 stay free without extra bed (no breakfast).\n- Extra Bedding: Additional quilt/pillow is NT$ 100 per piece upon advance request.',
      'ja': '【料金区分・追加料金】\n・平日：日曜日〜木曜日\n・休日：金曜日、土曜日および夏休み期間\n・ハイシーズン：祝日連休\n・定価：旧正月期間\n・エキストラベッド／追加人数：5歳以上はお一人様1泊 NT$ 600（旧正月期間は NT$ 1,000、朝食付き）。0〜5歳のお子様は添い寝無料（朝食なし）。\n・追加寝具（掛け布団・枕）：1点につき NT$ 100（事前にお知らせください）。',
      'zh-CN': '【平假日定义】\n‧ 平日：周日至周四\n‧ 假日：周五、周六及暑假期间\n‧ 旺日：国定连续假日\n‧ 定价：农历春节期间\n\n【加床 / 加人收费】\n‧ 5 岁以上每人每晚加收 NT$ 600 元（农历春节每人 NT$ 1,000 元，含活力早餐与客房备品）。\n‧ 0~5 岁儿童在不加床情况下免费同住（不供早餐）。\n‧ 为维护住宿品质，请依房型核定人数进住，如需加人请事先于订房时告知确切人数与儿童年龄。\n\n【额外加被服务】\n‧ 房间加被子与枕头请提早告知，每件收取工本清洁费 NT$ 100 元。'
    }
  },
  {
    id: 'faq-checkin',
    category: 'stay',
    question: {
      'zh-TW': '入住/退房時間為何？可以延後退房嗎？遺忘物品如何處理？',
      'en': 'Check-in/out times, late check-out policy ($100/hr) & lost item shipping ($100)?',
      'ja': 'チェックイン・アウト時間、レイトチェックアウト、忘れ物の発送について',
      'zh-CN': '入住/退房时间为何？可以延后退房吗？遗忘物品如何处理？'
    },
    answer: {
      'zh-TW': '【入退房時間與引導】\n‧ 入住時間：15:00 - 17:00（如需提早抵達可先寄放行李；17:00 後抵達請加入官方 LINE @tang225 或撥電話 0966-733-338 引導入住）。\n‧ 退房時間：上午 11:00 前。\n\n【延後退房收費】\n‧ 如需延後退房請提前告知管家，最多可延後 2 小時，每小時加收 NT$ 100 元。\n\n【退房遺忘物品代寄與注意事項】\n‧ 退房遺忘物品代寄：$100 / 件（郵寄/宅配手續服務費）。退房後如有遺落物品委託郵寄，每件酌收代寄處理費 $100（運費另計或採貨到付款），費用須匯款。\n‧ 退房時務必交還房門卡，若遺失每張工本費 NT$ 200 元。\n‧ 個人貴重物品請妥善保管，如有遺失恕不負責。',
      'en': 'Check-in & Check-out Policies:\n- Check-in: 15:00 - 17:00 (Luggage drop-off available. For arrivals after 17:00, contact LINE @tang225 or 0966-733-338 for self-check-in guidance).\n- Check-out: by 11:00 AM.\n- Late Check-out: Max 2 hours extension available at NT$ 100 per hour upon advance notice.\n- Lost & Found Shipping: NT$ 100 handling fee per package (postage separate or cash on delivery). Fee must be paid via bank transfer.\n- Room Card Loss: NT$ 200 replacement fee per card.',
      'ja': '【チェックイン・アウト及び諸規定】\n・チェックイン：15:00〜17:00（荷物預かり可能。17:00以降はLINE @tang225 またはお電話でご案内）。\n・チェックアウト：午前11:00まで。\n・レイトチェックアウト：最大2時間まで延長可能、1時間につき NT$ 100。\n・お忘れ物の郵送代行：1個につき手数料 NT$ 100（送料別途/着払い、手数料は銀行振込）。\n・ルームカード紛失時：再発行手数料 NT$ 200。',
      'zh-CN': '【入退房时间与引导】\n‧ 入住时间：15:00 - 17:00（如需提早抵达可先寄放行李；17:00 后抵达请加入官方 LINE @tang225 或拨电话 0966-733-338 引导入住）。\n‧ 退房时间：上午 11:00 前。\n\n【退房遗忘物品代寄与注意事项】\n‧ 退房遗忘物品代寄：$100 / 件（邮寄/宅配手续服务费）。退房后如有遗落物品委托邮寄，每件酌收代寄处理费 $100（运费另计或采货到付款），费用须汇款。\n‧ 退房时务必交还房门卡，若遗失每张工本费 NT$ 200 元。\n‧ 个人贵重物品请妥善保管，如有遗失恕不负责。'
    }
  },
  {
    id: 'faq-cancellation-policy',
    category: 'booking',
    question: {
      'zh-TW': '訂房改期與退訂政策（取消退款標準）為何？',
      'en': 'What is the cancellation and rescheduling policy?',
      'ja': '予約の変更・キャンセル規定（返金基準）について教えてください。',
      'zh-CN': '订房改期与退订政策（取消退款标准）为何？'
    },
    answer: {
      'zh-TW': '【改期與退訂保障規範】\n‧ 預定住宿日前 3 日（含）：可全額退回訂金；或可選擇全額保留一年內改期入住（以取消改期日起算，改期次數以一次為限）。\n‧ 預定住宿日前 1 ~ 2 日：退回 50% 之訂金。\n‧ 預定住宿日當天：恕不退回訂金。\n‧ 天災保障：如遇颱風、地震等不可抗力天災，依行政院人事行政總處公告「台東縣停止上班上課」標準，可辦理全額 100% 退款或延期保留。',
      'en': 'Cancellation & Rescheduling Policies:\n- 3+ days before check-in: 100% full refund of deposit, or retain full credit for 1 year for 1-time date change.\n- 1-2 days before check-in: 50% refund of deposit.\n- Day of arrival: Non-refundable.\n- Natural Disasters: 100% full refund or postponement if Taitung County government declares school/work suspension due to typhoons or earthquakes.',
      'ja': '【キャンセル・日程変更ポリシー】\n・宿泊日の3日前まで：デポジット全額返金、または1年以内への1回限りの日程変更全額保留が可能。\n・宿泊日の1〜2日前：デポジットの50%を返金。\n・宿泊日当日：返金不可。\n・天災（台風・地震等）：台東県の休業・休校発表時は全額100%返金または延期対応いたします。',
      'zh-CN': '【改期与退订保障规范】\n‧ 预定住宿日前 3 日（含）：可全额退回订金；或可选择全额保留一年内改期入住（以取消改期日起算，改期次数以一次为限）。\n‧ 预定住宿日前 1 ~ 2 日：退回 50% 之订金。\n‧ 预定住宿日当天：恕不退回订金。\n‧ 天灾保障：如遇台风、地震等不可抗力天灾，依行政院人事行政总处公告「台东县停止上班上课」标准，可办理全额 100% 退款或延期保留。'
    }
  },
  {
    id: 'faq-rules',
    category: 'stay',
    question: {
      'zh-TW': '是否有禁菸或寵物入住等相關規定？',
      'en': 'Are smoking or pets permitted on the property?',
      'ja': '禁煙規定やペットの同伴について教えてください。',
      'zh-CN': '是否有禁菸或宠物入住等相关规定？'
    },
    answer: {
      'zh-TW': '為維護每位旅客舒適清新的住宿品質，湯園民宿全棟室內【全面嚴禁吸菸與嚼食檳榔】（若有吸菸需求請至戶外通風處）；全館【禁止攜帶寵物入住】（導盲犬除外）。感謝您的配合與愛護！',
      'en': 'To maintain a pristine environment, strictly NO SMOKING and NO BETEL NUT chewing inside the building. Pets are not allowed (service dogs exempt). Thank you for your cooperation.',
      'ja': '全館【完全禁煙・ビンロウ禁止】です。また【ペット同伴不可】（盲導犬を除く）となっております。ご理解とご協力をお願い申し上げます。',
      'zh-CN': '为维护每位旅客舒适清新的住宿品质，汤园民宿全栋室内【全面严禁吸菸与嚼食槟榔】（若有吸菸需求请至户外通风处）；全馆【禁止携带宠物入住】（导盲犬除外）。感谢您的配合与爱护！'
    }
  }
];

export const GUEST_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    guestName: '林小姐 & 家庭旅遊',
    origin: '新北市, 台灣',
    rating: 5,
    date: '2026.07',
    roomName: {
      'zh-TW': '合家歡六人房',
      'en': 'Family Fun Six-Person Suite',
      'ja': '合家歡六人房',
      'zh-CN': '合家欢六人房'
    },
    comment: {
      'zh-TW': '「全家人來台東玩住合家歡六人房超滿意！三張加大雙人床睡起來非常舒服，還有一個小客廳可以讓小朋友吃點心看電視。最棒的是有電梯，長輩爬樓梯完全不吃力，老闆娘親切熱情，早餐也很美味，推推！」',
      'en': '"Our family of six stayed in the Family Fun Room and had an amazing experience! Three big beds were super comfy, and having an elevator made it so easy for the grandparents. Delicious breakfast and super friendly owners!"',
      'ja': '「家族6人で利用しましたが大満足でした！ベッドが3台あって広々、リビングスペースも快適。エレベーターがあるので荷物の運搬や高齢の両親にもとても親切な宿でした。朝食も美味しかったです！」',
      'zh-CN': '「全家人来台东玩住合家欢六人房超满意！三张加大双人床睡起来非常舒服，还有一个小客厅可以让小朋友吃点心看电视。最棒的是有电梯，长辈爬楼梯完全不吃力，老板娘亲切热情，早餐也很美味，推推！」'
    }
  },
  {
    id: 'rev-2',
    guestName: '陳先生 (商務出差與環島)',
    origin: '台中市, 台灣',
    rating: 5,
    date: '2026.06',
    roomName: {
      'zh-TW': '商務雙人房',
      'en': 'Business Double Room',
      'ja': '商務雙人房',
      'zh-CN': '商务双人房'
    },
    comment: {
      'zh-TW': '「房間非常乾淨明亮，浴室乾濕分離而且有免治馬桶，床很寬敞好睡！民宿位置很棒，停車非常方便，還有免費腳踏車可以騎去森林公園琵琶湖，CP值極高，下次來台東一定會再續住。」',
      'en': '"Extremely clean, bright, and equipped with a washlet toilet. Great parking on site and free bikes to ride to the forest park. Excellent value in Taitung center!"',
      'ja': '「とても清潔で温水洗浄便座もあり、ベッドも寝心地最高でした。無料駐車場とレンタサイクルがあり、琵琶湖までのサイクリングも楽しめました。コスパ抜群です。」',
      'zh-CN': '「房间非常干净明亮，浴室干湿分离而且有免治马桶，床很宽敞好睡！民宿位置很棒，停车非常方便，还有免费脚踏车可以骑去森林公园琵琶湖，CP值极高，下次来台东一定会再续住。」'
    }
  },
  {
    id: 'rev-3',
    guestName: 'Sora & Kenji',
    origin: '福岡, 日本',
    rating: 5,
    date: '2026.05',
    roomName: {
      'zh-TW': '精緻雙人房 (附陽台)',
      'en': 'Exquisite Double with Balcony',
      'ja': '精緻雙人房 (附陽台)',
      'zh-CN': '精致双人房 (附阳台)'
    },
    comment: {
      'zh-TW': '「陽台採光很好，早晨空氣非常清新。一樓迎賓大廳的美式風格和手工馬賽克壁畫很有特色。老闆娘推薦的台東私房小吃都超好吃，讓我們度過了非常美好的台東假期！」',
      'en': '"The balcony has wonderful natural light and fresh morning breeze. The mosaic art wall in the lobby is charming, and the local food recommendations were spot on. Highly recommended!"',
      'ja': '「バルコニーからの光と朝の空気が最高でした。ロビーのモザイクアートも温かみがあり、オーナーさんに教えてもらった地元のグルメも大満足。また泊まりたいです。」',
      'zh-CN': '「阳台采光很好，早晨空气非常清新。一楼迎宾大厅的美式风格和手工马赛克壁画很有特色。老板娘推荐的台东私房小吃都超好吃，让我们度过了非常美好的台东假期！」'
    }
  }
];
