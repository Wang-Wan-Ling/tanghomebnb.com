import { Language } from '../types';

export interface GalleryPhoto {
  id: string;
  title: Record<Language, string>;
  category: 'villa' | 'rooms' | 'farm' | 'dining' | 'surroundings';
  categoryLabel: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  tag?: Record<Language, string>;
}

export const TANG_HOME_PHOTOS: GalleryPhoto[] = [
  // 1. 民宿外觀與公共空間 (Villa & Public Spaces)
  {
    id: 'photo-villa-exterior',
    title: {
      'zh-TW': '湯園典雅外觀建築',
      'en': 'Tang Home Villa Facade',
      'ja': '湯園民宿 外観',
      'zh-CN': '汤园典雅外观建筑'
    },
    category: 'villa',
    categoryLabel: {
      'zh-TW': '建築外觀',
      'en': 'Exterior',
      'ja': '外観',
      'zh-CN': '建筑外观'
    },
    description: {
      'zh-TW': '座落於台東市中興路一段，現代美學與東方溫潤雅致結合的獨棟居所，備有室內電梯與專屬停車場。',
      'en': 'Modern aesthetic blended with warm oriental hospitality, featuring elevator access and private parking.',
      'ja': '台東市中興路に位置する、エレベーターと無料駐車場を完備した優美な佇まい。',
      'zh-CN': '座落于台东市中兴路一段，现代美学与东方温润雅致结合的独栋居所，备有室内电梯与专属停车场。'
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '合法民宿 1639 號',
      'en': 'License No. 1639',
      'ja': '公認民宿 1639号',
      'zh-CN': '合法民宿 1639 号'
    }
  },
  {
    id: 'photo-villa-lobby',
    title: {
      'zh-TW': '一樓迎賓雅致大廳與常設畫廊',
      'en': 'First Floor Welcome Lounge & Gallery',
      'ja': '1F ロビー＆ギャラリー空間',
      'zh-CN': '一楼迎宾雅致大厅与常设画廊'
    },
    category: 'villa',
    categoryLabel: {
      'zh-TW': '公共空間',
      'en': 'Public Space',
      'ja': '共用スペース',
      'zh-CN': '公共空间'
    },
    description: {
      'zh-TW': '陳列在地畫家陳郁文老師的真跡原畫，挑高明亮的空間搭配研磨咖啡香，為抵達的旅人洗滌舟車勞頓。',
      'en': 'Showcasing original paintings by resident artist Chen Yu-Wen alongside fresh artisan coffee.',
      'ja': '専属画家の絵画が飾られた開放的なロビーで、淹れたてのコーヒーと共にお迎えします。',
      'zh-CN': '陈列在地画家陈郁文老师的真迹原画，挑高明亮的空间搭配研磨咖啡香，为抵达的旅人洗涤舟车劳顿。'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '藝文接待',
      'en': 'Art Lounge',
      'ja': 'アートサロン',
      'zh-CN': '艺文接待'
    }
  },
  {
    id: 'photo-villa-elevator',
    title: {
      'zh-TW': '全棟室內無障礙景觀電梯',
      'en': 'Indoor Guest Elevator Access',
      'ja': '全館エレベーター完備',
      'zh-CN': '全栋室内无障碍景观电梯'
    },
    category: 'villa',
    categoryLabel: {
      'zh-TW': '公共空間',
      'en': 'Public Space',
      'ja': '共用スペース',
      'zh-CN': '公共空间'
    },
    description: {
      'zh-TW': '全棟配備室內電梯直達各樓層客房，長輩同行或大件行李出入輕鬆省力，提供無障礙友善環境。',
      'en': 'Equipped with an elevator to all guest floors, ensuring effortless comfort for seniors and heavy luggage.',
      'ja': '全フロア直通エレベーター完備で、ご年配の方や大荷物でも安心快適。',
      'zh-CN': '全栋配备室内电梯直达各楼层客房，长辈同行或大件行李出入轻松省力，提供无障碍友善环境。'
    },
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '無障礙友善',
      'en': 'Accessible',
      'ja': 'バリアフリー',
      'zh-CN': '无障碍友善'
    }
  },
  {
    id: 'photo-villa-laundry-bike',
    title: {
      'zh-TW': '自助洗烘衣間與免費自行車借用',
      'en': 'Guest Laundry & Free Bicycles',
      'ja': 'ランドリー＆無料レンタサイクル',
      'zh-CN': '自助洗烘衣间与免费自行车借用'
    },
    category: 'villa',
    categoryLabel: {
      'zh-TW': '貼心設施',
      'en': 'Facilities',
      'ja': '設備',
      'zh-CN': '贴心设施'
    },
    description: {
      'zh-TW': '提供洗衣機、烘乾機與洗衣粉供環島及長住旅客使用；戶外備有淑女自行車供房客免費漫遊台東。',
      'en': 'Complimentary laundry facilities for long stays and bikes for leisurely rides around Taitung city.',
      'ja': '連泊やツーリングに便利な洗濯乾燥機と、台東散策用の無料自転車を完備。',
      'zh-CN': '提供洗衣机、烘干机与洗衣粉供环岛及长住旅客使用；户外备有淑女自行车供房客免费漫游台东。'
    },
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '房客免費',
      'en': 'Complimentary',
      'ja': '無料利用',
      'zh-CN': '房客免费'
    }
  },

  // 2. 客房美照 (Suites & Rooms)
  {
    id: 'photo-room-family-6p',
    title: {
      'zh-TW': '合家歡六人房 ‧ 寬敞客廳與三加大床',
      'en': 'Family Fun 6-Person Suite',
      'ja': '合家歡 6名用ファミリールーム',
      'zh-CN': '合家欢六人房 ‧ 宽敞客厅与三加大床'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '12 坪寬敞空間，三張加大雙人床（180x188cm）與獨立休閒沙發客廳區，免治馬桶乾濕分離。',
      'en': '40 sqm family suite with three king double beds and a private living salon.',
      'ja': '広さ40㎡、ダブルベッド3台とリビングソファを備えた人気のファミリールーム。',
      'zh-CN': '12 坪宽敞空间，三张加大双人床（180x188cm）与独立休闲沙发客厅区，免治马桶干湿分离。'
    },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '家庭包層首選',
      'en': 'Family Favorite',
      'ja': '家族連れ人気',
      'zh-CN': '家庭包层首选'
    }
  },
  {
    id: 'photo-room-exquisite-balcony',
    title: {
      'zh-TW': '精緻雙人房 ‧ 私人景觀陽台',
      'en': 'Exquisite Balcony Double Room',
      'ja': 'バルコニー付き 精緻ダブルルーム',
      'zh-CN': '精致双人房 ‧ 私人景观阳台'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '17 平方公尺大空間，採光極佳的大陽台景觀客房，特大加大雙人床 (180x210cm) 營造極致舒適。',
      'en': '17 sqm oversized double room with breezy private balcony and 180x210cm super king bed.',
      'ja': '17㎡のゆとりある空間に専用バルコニーと特大キングベッドを配置。',
      'zh-CN': '17 平方公尺大空间，采光极佳的大阳台景观客房，特大加大双人床 (180x210cm) 营造极致舒适。'
    },
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '景觀大陽台',
      'en': 'Scenic Balcony',
      'ja': '眺望バルコニー',
      'zh-CN': '景观大阳台'
    }
  },
  {
    id: 'photo-room-cozy-balcony',
    title: {
      'zh-TW': '溫馨雙人房 ‧ 陽台微風晨光',
      'en': 'Cozy Double Room with Balcony',
      'ja': '温もりバルコニー付き ダブルルーム',
      'zh-CN': '温馨双人房 ‧ 阳台微风晨光'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '室內 15 平方公尺，加大雙人床（180x184cm），推開落地窗感受台東純淨空氣與溫煦日光。',
      'en': '15 sqm room with cozy balcony, plush bedding, and washlet bidet toilet.',
      'ja': '台東の心地よい朝風を感じられるバルコニーと快適なベッドを完備。',
      'zh-CN': '室内 15 平方公尺，加大双人床（180x184cm），推开落地窗感受台东纯净空气与温煦日光。'
    },
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '陽台客房',
      'en': 'Balcony',
      'ja': 'バルコニー付',
      'zh-CN': '阳台客房'
    }
  },
  {
    id: 'photo-room-family-4p',
    title: {
      'zh-TW': '溫馨家庭四人房 ‧ 寬敞兩大床',
      'en': 'Cozy Family Quad Suite (2 Double Beds)',
      'ja': '温もり ファミリールーム (4名用)',
      'zh-CN': '温馨家庭四人房 ‧ 宽敞两大床'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '26 平方公尺明亮大格局，配置兩張加大雙人床（150x188cm），乾濕分離衛浴與免治馬桶。',
      'en': '26 sqm bright family suite with two large double beds, separate shower, and washlet bidet.',
      'ja': '広さ26㎡のゆとり空間にダブルベッド2台とセパレートバスルームを完備。',
      'zh-CN': '26 平方公尺明亮大格局，配置两张加大双人床（150x188cm），干湿分离卫浴与免治马桶。'
    },
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '家庭四人房',
      'en': 'Quad Suite',
      'ja': '4名部屋',
      'zh-CN': '家庭四人房'
    }
  },
  {
    id: 'photo-room-japanese-4p',
    title: {
      'zh-TW': '日式和風 ‧ 和室家庭房',
      'en': 'Japanese Zen Tatami Family Room',
      'ja': '和モダン 和室ファミリールーム (4名用)',
      'zh-CN': '日式和风 ‧ 和室家庭房'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '22 平方公尺天然木質地板，日式通鋪雙大床，席地而坐品茗，特別友善帶小朋友與長輩的家庭。',
      'en': '22 sqm natural hardwood floor room with two tatami double beds, safe and serene for families.',
      'ja': '素足でくつろげる無垢フローリングと和室ダブル寝具2組の和モダン空間。',
      'zh-CN': '22 平方公尺天然木质地板，日式通铺双大床，席地而坐品茗，特别友善带小朋友与长辈的家庭。'
    },
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '和室通鋪',
      'en': 'Zen Tatami',
      'ja': '和室モダン',
      'zh-CN': '和室通铺'
    }
  },
  {
    id: 'photo-room-economy-double',
    title: {
      'zh-TW': '經濟雙人房 ‧ 簡約俐落首選',
      'en': 'Economy Double Room',
      'ja': 'エコノミー ダブルルーム',
      'zh-CN': '经济双人房 ‧ 简约俐落首选'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '14 平方公尺乾淨俐落空間，標準加大雙人床（150x188cm），出差洽公或小資慢遊無負擔。',
      'en': '14 sqm clean minimal room with cozy double bed, separate bathroom, and elevator access.',
      'ja': '広さ14㎡のシンプルで機能的なお部屋。ダブルベッドと清潔なバスルームを完備。',
      'zh-CN': '14 平方公尺干净俐落空间，标准加大双人床（150x188cm），出差洽公或小资慢游无负担。'
    },
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '經濟首選',
      'en': 'Economy',
      'ja': 'お手頃',
      'zh-CN': '经济首选'
    }
  },
  {
    id: 'photo-room-tangyuan-double',
    title: {
      'zh-TW': '湯園雙人房 ‧ 簡約溫馨經典',
      'en': 'Tangyuan Classic Double Room',
      'ja': '湯園 クラシック ダブルルーム',
      'zh-CN': '汤园双人房 ‧ 简约温馨经典'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '14 平方公尺舒適空間，加大名床（180x210cm），原木溫潤點綴與免治馬桶衛浴全配。',
      'en': '14 sqm classic room featuring high-grade king mattress and modern bathroom amenities.',
      'ja': '木の温もりを感じる落ち着いた内装に、極上のキングサイズベッドを配置。',
      'zh-CN': '14 平方公尺舒适空间，加大名床（180x210cm），原木温润点缀与免治马桶卫浴全配。'
    },
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '經典舒適',
      'en': 'Classic',
      'ja': '定番人気',
      'zh-CN': '经典舒适'
    }
  },
  {
    id: 'photo-room-business-twin',
    title: {
      'zh-TW': '商務雙床房 ‧ 獨立無干擾',
      'en': 'Business Twin Room (2 Single Beds)',
      'ja': 'ビジネス ツインルーム (シングル2台)',
      'zh-CN': '商务双床房 ‧ 独立无干扰'
    },
    category: 'rooms',
    categoryLabel: {
      'zh-TW': '客房居所',
      'en': 'Rooms',
      'ja': '客室',
      'zh-CN': '客房居所'
    },
    description: {
      'zh-TW': '配置兩張加大獨立單人床（105x184cm），適合同事差旅或好友結伴出遊。',
      'en': 'Two separate single beds (105x184cm) for colleagues and friends traveling together.',
      'ja': '独立したシングルベッド2台で、出張やご友人同士の旅に最適。',
      'zh-CN': '配置两张加大独立单人床（105x184cm），适合同事差旅或好友结伴出游。'
    },
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '獨立雙單床',
      'en': 'Twin Beds',
      'ja': 'ツインベッド',
      'zh-CN': '独立双单床'
    }
  },

  // 3. 自耕農場與晨光早餐 (Farm & Dining)
  {
    id: 'photo-farm-field',
    title: {
      'zh-TW': '湯園專屬生態農場 ‧ 純淨友善自然農法',
      'en': 'Tang Home Eco-Farm Organic Fields',
      'ja': '湯園 専用オーガニック農園',
      'zh-CN': '汤园专属生态农场 ‧ 纯净友善自然农法'
    },
    category: 'farm',
    categoryLabel: {
      'zh-TW': '自耕農場',
      'en': 'Eco-Farm',
      'ja': '農園',
      'zh-CN': '自耕农场'
    },
    description: {
      'zh-TW': '湯園在台東擁有專屬友善耕作農地，不施化學農藥與化肥，栽種時令生菜、香草與在地蔬果。',
      'en': 'Tang Home’s private pesticide-free farm cultivating organic seasonal vegetables and herbs.',
      'ja': '無農薬・有機農法にこだわる湯園直営農園。新鮮な野菜やハーブを栽培。',
      'zh-CN': '汤园在台东拥有专属友善耕作农地，不施化学农药与化肥，栽种时令生菜、香草与在地蔬果。'
    },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '自耕自足',
      'en': 'Organic Farm',
      'ja': '自社農園',
      'zh-CN': '自耕自足'
    }
  },
  {
    id: 'photo-farm-breakfast',
    title: {
      'zh-TW': '晨光產地直送鮮蔬早餐',
      'en': 'Farm-to-Table Morning Breakfast',
      'ja': '農園直送 採れたてモーニング',
      'zh-CN': '晨光产地直送鲜蔬早餐'
    },
    category: 'dining',
    categoryLabel: {
      'zh-TW': '晨光朝食',
      'en': 'Breakfast',
      'ja': '朝食',
      'zh-CN': '晨光朝食'
    },
    description: {
      'zh-TW': '每日清晨現摘自耕無毒生菜，佐初鹿鮮乳、現烤手工熱壓吐司與現磨香醇咖啡，房客免費享用。',
      'en': 'Fresh-picked organic greens paired with Chulu Ranch milk, toasted sandwiches, and artisan coffee.',
      'ja': '毎朝収穫の新鮮野菜、初鹿牧場の特濃ミルク、手作りトーストで朝の活力を。',
      'zh-CN': '每日清晨现摘自耕无毒生菜，佐初鹿鲜乳、现烤手工热压吐司与现磨香醇咖啡，房客免费享用。'
    },
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '房客免費朝食',
      'en': 'Free Breakfast',
      'ja': '無料朝食',
      'zh-CN': '房客免费朝食'
    }
  },
  {
    id: 'photo-private-chef-dining',
    title: {
      'zh-TW': '加價私廚晚宴 ‧ 主廚到府包棟料理',
      'en': 'In-Villa Private Chef Dining Experience',
      'ja': '出張プライベートシェフ ディナー',
      'zh-CN': '加价私厨晚宴 ‧ 主厨到府包栋料理'
    },
    category: 'dining',
    categoryLabel: {
      'zh-TW': '私廚晚宴',
      'en': 'Private Chef',
      'ja': 'プライベートシェフ',
      'zh-CN': '私厨晚宴'
    },
    description: {
      'zh-TW': '特邀台東在地名廚親臨民宿廚房，現場烹製太平洋鮮魚、放山土雞與農場時蔬多道私房美饌。',
      'en': 'Renowned local chef cooks right in the villa kitchen, featuring Pacific catches and mountain poultry.',
      'ja': '地元の一流シェフが館内キッチンで腕を振るう贅沢なコースディナー。',
      'zh-CN': '特邀台东在地名厨亲临民宿厨房，现场烹制太平洋鲜鱼、放山土鸡与农场时蔬多道私房美馔。'
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '專屬加價禮遇',
      'en': 'Bespoke Upgrade',
      'ja': '特別プラン',
      'zh-CN': '专属加价礼遇'
    }
  },

  // 4. 台東慢活與周邊風光 (Taitung Surroundings)
  {
    id: 'photo-taitung-forest-park',
    title: {
      'zh-TW': '台東森林公園 ‧ 琵琶湖天然湧泉',
      'en': 'Taitung Forest Park & Pipa Spring Lake',
      'ja': '台東森林公園 琵琶湖',
      'zh-CN': '台东森林公园 ‧ 琵琶湖天然涌泉'
    },
    category: 'surroundings',
    categoryLabel: {
      'zh-TW': '周邊漫遊',
      'en': 'Attractions',
      'ja': '周辺観光',
      'zh-CN': '周边漫游'
    },
    description: {
      'zh-TW': '距離民宿僅約 8 分鐘車程，騎乘湯園免費單車穿梭於木麻黃黑森林與清澈見底的琵琶湖。',
      'en': '8 mins drive from Tang Home. Breathtaking turquoise spring lake surrounded by coastal casuarina trees.',
      'ja': '宿から車で約8分。透明度抜群の琵琶湖と黒森林をサイクリング。',
      'zh-CN': '距离民宿仅约 8 分钟车程，骑乘汤园免费单车穿梭于木麻黄黑森林与清澈见底的琵琶湖。'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '單車 10 分鐘',
      'en': '10 min Bicycle',
      'ja': '自転車10分',
      'zh-CN': '单车 10 分钟'
    }
  },
  {
    id: 'photo-tiehua-music-village',
    title: {
      'zh-TW': '鐵花村音樂聚落 ‧ 彩繪熱氣球燈海',
      'en': 'Tiehua Music Village Lantern Lights',
      'ja': '鐵花村 音楽集落とランタンの夜',
      'zh-CN': '铁花村音乐聚落 ‧ 彩绘热气球灯海'
    },
    category: 'surroundings',
    categoryLabel: {
      'zh-TW': '周邊漫遊',
      'en': 'Attractions',
      'ja': '周辺観光',
      'zh-CN': '周边漫游'
    },
    description: {
      'zh-TW': '車程約 6 分鐘，夜間漫步於璀璨的熱氣球燈海步道，聆聽原住民美聲與慢市集手作。',
      'en': '6 mins drive. Stroll through illuminated hot-air balloon lanterns and live indie music.',
      'ja': '車で約6分。気球ランタンの温かい灯りと先住民族ライブで賑わう台東の夜。',
      'zh-CN': '车程约 6 分钟，夜间漫步于璀璨的热气球灯海步道，聆听原住民美声与慢市集手作。'
    },
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '夜間慢市集',
      'en': 'Night Market',
      'ja': 'ナイトスポット',
      'zh-CN': '夜间慢市集'
    }
  },
  {
    id: 'photo-art-museum-lawns',
    title: {
      'zh-TW': '台東美術館 ‧ 木造綠建築與樹屋',
      'en': 'Taitung Art Museum Green Lawns',
      'ja': '台東美術館 緑の芝生とツリーハウス',
      'zh-CN': '台东美术馆 ‧ 木造绿建筑与树屋'
    },
    category: 'surroundings',
    categoryLabel: {
      'zh-TW': '周邊漫遊',
      'en': 'Attractions',
      'ja': '周辺観光',
      'zh-CN': '周边漫游'
    },
    description: {
      'zh-TW': '車程僅約 3 分鐘，東台灣首座縣級美術館，大片草坪與樹屋造景，是文青散步悠閒首選。',
      'en': 'Just 3 mins away. Beautiful green architecture, spacious lawns, and modern treehouse installations.',
      'ja': '車でわずか3分。木造建築と広大な芝生が心地よいアートスポット。',
      'zh-CN': '车程仅约 3 分钟，东台湾首座县级美术馆，大片草坪与树屋造景，是文青散步悠闲首选。'
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    tag: {
      'zh-TW': '車程 3 分鐘',
      'en': '3 min Drive',
      'ja': '車で3分',
      'zh-CN': '车程 3 分钟'
    }
  }
];
