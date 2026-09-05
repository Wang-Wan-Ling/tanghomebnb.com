import { Language } from '../types';

export interface SpecialServiceItem {
  id: string;
  category: 'dining' | 'farm' | 'travel' | 'wedding' | 'celebration' | 'business';
  badge: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  summary: Record<Language, string>;
  details: {
    overview: Record<Language, string>;
    highlights: Record<Language, string[]>;
    inclusions: Record<Language, string[]>;
    notice?: Record<Language, string>;
    priceHint?: Record<Language, string>;
  };
  image: string;
  gallery?: string[];
  ctaLabel: Record<Language, string>;
}

export const SPECIAL_SERVICES: SpecialServiceItem[] = [
  {
    id: 'private-chef-dining',
    category: 'dining',
    badge: {
      'zh-TW': '私廚預約',
      'en': 'Private Chef',
      'ja': '出張シェフ',
      'zh-CN': '私厨预约'
    },
    title: {
      'zh-TW': '台東在地私廚',
      'en': 'Local Taitung Private Chef Dining',
      'ja': '台東地元プライベートシェフディナー',
      'zh-CN': '台东在地私厨'
    },
    subtitle: {
      'zh-TW': '台東在地私廚 ‧ 須提前三個月預約',
      'en': 'Local Private Chef Experience (Advance booking required 3 months prior)',
      'ja': '台東地元シェフ・3ヶ月前までの事前予約制',
      'zh-CN': '台东在地私厨 ‧ 须提前三个月预约'
    },
    summary: {
      'zh-TW': '特聘台東在地資深私廚親臨料理，嚴選在地食材與自家農場蔬果，為您量身打造專屬晚宴。須提前三個月預約。',
      'en': 'Bespoke in-villa dining crafted by local private chefs with seasonal produce. Requires booking 3 months in advance.',
      'ja': '地元の専属シェフが館内で腕を振るう特別なディナー。3ヶ月前までの事前予約が必要です。',
      'zh-CN': '特聘台东在地资深私厨亲临料理，严选在地食材与自家农场蔬果，为您量身打造专属晚宴。须提前三个月预约。'
    },
    details: {
      'overview': {
        'zh-TW': '特聘台東在地私廚團隊親臨料理，結合台東當季山海食材與自家農場新鮮蔬果，提供專屬桌邊饗宴。因主廚檔期熱門且需嚴選備料，敬請提前三個月預約。',
        'en': 'Exclusive in-villa private dining crafted by seasoned local chefs. Due to high demand and ingredient preparation, reservations must be placed 3 months in advance.',
        'ja': '台東の新鮮な海の幸と自家農園野菜を使用したプライベートディナー。完全予約制のため、ご宿泊の3ヶ月前までにお申し込みください。',
        'zh-CN': '特聘台东在地私厨团队亲临料理，结合台东当季山海食材与自家农场新鲜蔬果，提供专属桌边飨宴。因主厨档期热门且需严选备料，敬请提前三个月预约。'
      },
      'highlights': {
        'zh-TW': [
          '台東在地資深私廚到府料理',
          '嚴選在地當季海陸食材與自家農場有機蔬果',
          '專屬桌邊侍餐與無菜單風土料理',
          '須提前三個月預約'
        ],
        'en': [
          'Dedicated in-villa cooking by professional local chefs',
          'Fresh seasonal terroir ingredients & farm-to-table greens',
          'Table-side plating and private service',
          'Requires booking 3 months in advance'
        ],
        'ja': [
          '地元プロシェフによる館内プライベート調理',
          '台東の旬の食材と自家農園野菜を使用',
          'テーブルサイドでの出来立てコース料理',
          '3ヶ月前までの事前予約必須'
        ],
        'zh-CN': [
          '台东在地资深私厨到府料理',
          '严选在地当季海陆食材与自家农场有机蔬果',
          '专属桌边侍餐与无菜单风土料理',
          '须提前三个月预约'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '預約須知：台東在地私廚，須提前三個月預約',
          '供應時段：晚宴時段（可依您的行程彈性約定）',
          '預約人數：基本 4 位起訂（包棟亦可承接）',
          '加購洽詢：請加入官方 LINE (@tang225) 預約'
        ],
        'en': [
          'Advance Notice: Must be booked 3 months in advance',
          'Dining Hours: Dinner (flexible time upon request)',
          'Minimum Party: 4 guests minimum (buyout groups welcomed)',
          'Inquiry: Add official LINE (@tang225)'
        ],
        'ja': [
          'ご予約期日：3ヶ月前までの事前予約が必要です',
          '提供時間：ディナータイム（時間調整可能）',
          '人数：4名様より（一棟貸切対応可）',
          'お問い合わせ：公式LINE (@tang225)'
        ],
        'zh-CN': [
          '预约须知：台东在地私厨，须提前三个月预约',
          '供应时段：晚宴时段（可依您的行程弹性约定）',
          '预约人数：基本 4 位起订（包栋亦可承接）',
          '加购洽询：请加入官方 LINE (@tang225) 预约'
        ]
      },
      'notice': {
        'zh-TW': '私廚須提前三個月向主廚預約備料，如有特殊飲食忌口或素食需求請於預約時告知。',
        'en': 'Please book 3 months in advance and specify any dietary preferences.',
        'ja': '3ヶ月前までにご予約の上、アレルギー等のご要望をお知らせください。',
        'zh-CN': '私厨须提前三个月向主厨预配备料，如有特殊饮食忌口或素食需求请于预约时告知。'
      },
      'priceHint': {
        'zh-TW': '無菜單饗宴（依客製菜單預算報價，請加 LINE 洽詢）',
        'en': 'Tasting Menu (Customized quote upon LINE inquiry)',
        'ja': 'おまかせコース（LINEにてお見積り）',
        'zh-CN': '无菜单飨宴（依客制菜单预算报价，请加 LINE 洽询）'
      }
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '了解私廚預約方案',
      'en': 'Inquire Private Chef',
      'ja': 'シェフ予約詳細',
      'zh-CN': '了解私厨预约方案'
    }
  },
  {
    id: 'tang-organic-farm',
    category: 'farm',
    badge: {
      'zh-TW': '自有農場',
      'en': 'Organic Farm',
      'ja': '自家農園',
      'zh-CN': '自有农场'
    },
    title: {
      'zh-TW': '湯園專屬生態農場 ‧ 自耕作物與晨光私廚',
      'en': 'Tang Home Ecological Farm & Farm-to-Table Breakfast',
      'ja': '湯園自家農園・朝採れ野菜の手作り朝食',
      'zh-CN': '汤园专属生态农场 ‧ 自耕作物与晨光私厨'
    },
    subtitle: {
      'zh-TW': '堅持友善自然農法，將每日清晨現摘的甜美蔬果直接端上客席',
      'en': 'Dedicated to natural eco-farming, bringing freshly harvested seasonal crops to your morning table.',
      'ja': '自然農法にこだわり、毎朝収穫した新鮮野菜をそのまま朝食テーブルへ。',
      'zh-CN': '坚持友善自然农法，将每日清晨现摘的甜美蔬果直接端上客席'
    },
    summary: {
      'zh-TW': '湯園在台東擁有專屬耕作農地，栽種無毒時令蔬菜、香草與在地特色果物。早餐熱壓吐司搭配自耕生菜與初鹿鮮乳，純粹純淨。',
      'en': 'Our private farm grows organic seasonal vegetables and aromatic herbs, served with our signature breakfast paninis.',
      'ja': '専用農園で無農薬の季節野菜やハーブを栽培。出来立てのホットサンドと共にお届けします。',
      'zh-CN': '汤园在台东拥有专属耕作农地，栽种无毒时令蔬菜、香草与在地特色果物。早餐热压吐司搭配自耕生菜与初鹿鲜乳，纯粹纯净。'
    },
    details: {
      'overview': {
        'zh-TW': '「從產地到餐桌，只有一刻鐘的距離。」湯園主人本著對土地的深厚情感，在台東純淨沃土上開闢了專屬農場。每日清晨採收帶有朝露的當季生菜、甜椒、牛番茄與香草，經過精心洗滌現做入菜。每一口手作早餐，都是台東陽光與土壤最真實的饋贈。',
        'en': 'From field to table in just minutes. Tang Home’s private eco-farm cultivates fresh morning greens, sweet peppers, and seasonal fruits in pristine Taitung soil, served alongside artisan breakfast delights.',
        'ja': '農園から食卓へ。台東の肥沃な大地で育まれた朝採れ野菜やハーブをふんだんに使用した、身体に優しいヘルシー朝食をご堪能ください。',
        'zh-CN': '「从产地到餐桌，只有一刻钟的距离。」汤园主人本着对土地的深厚情感，在台东纯净沃土上开辟了专属农场。每日清晨采收带有朝露的当季生菜、甜椒、牛番茄与香草，经过精心洗涤现做入菜。每一口手作早餐，都是台东阳光与土壤最真实的馈赠。'
      },
      'highlights': {
        'zh-TW': [
          '自家農園無農藥自然耕作時令鮮蔬（每日清晨現採）',
          '搭配台東在地小農初鹿鮮乳與手工烘焙吐司',
          '提供素食者專屬蔬食朝食（請提前告知管家）',
          '房客專屬每日免費享用（依預訂房型人數提供）'
        ],
        'en': [
          'Naturally grown pesticide-free seasonal produce harvested daily',
          'Paired with local Chulu fresh milk and artisan toasts',
          'Vegetarian and special dietary options available upon advance request',
          'Complimentary for all staying guests'
        ],
        'ja': [
          '農薬不使用の自家製季節野菜を毎朝収穫',
          '台東初鹿牧場の新鮮な牛乳とこだわりトースト',
          'ベジタリアン対応可能（事前にお知らせください）',
          'ご宿泊のお客様は毎朝無料'
        ],
        'zh-CN': [
          '自家农园无农药自然耕作时令鲜蔬（每日清晨现采）',
          '搭配台东在地小农初鹿鲜乳与手工烘焙吐司',
          '提供素食者专属蔬食朝食（请提前告知管家）',
          '房客专属每日免费享用（依预订房型人数提供）'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '供應時段：每日 07:30 - 09:30',
          '用餐地點：一樓東方典雅休閒交誼大廳',
          '附設：冷熱純淨研磨咖啡、特選高山冷泡茶無限品味'
        ],
        'en': [
          'Breakfast Hours: Daily 07:30 - 09:30',
          'Location: 1F Oriental Garden Lounge',
          'Includes: Freshly ground hot coffee & artisan mountain teas'
        ],
        'ja': [
          '提供時間：毎朝 07:30 - 09:30',
          '場所：1階オリエンタルラウンジ',
          '淹れたてコーヒー・台湾高山茶フリー'
        ],
        'zh-CN': [
          '供应时段：每日 07:30 - 09:30',
          '用餐地点：一楼东方典雅休闲交谊大厅',
          '附设：冷热纯净研磨咖啡、特选高山冷泡茶无限品味'
        ]
      },
      'notice': {
        'zh-TW': '如遇天候或季節變換，部分蔬果品項將依當季最優質產物靈活調整。',
        'en': 'Vegetable varieties may adjust based on seasonal harvests.',
        'ja': '季節や天候により収穫野菜の内容が変わる場合がございます。',
        'zh-CN': '如遇天候或季节变换，部分蔬果品项将依当季最优质产物灵活调整。'
      }
    },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '了解農場朝食',
      'en': 'Explore Farm Breakfast',
      'ja': '朝食詳細を見る',
      'zh-CN': '了解农场朝食'
    }
  },

  {
    id: 'farm-tours-preview',
    category: 'farm',
    badge: {
      'zh-TW': '農場體驗',
      'en': 'Farm Tours',
      'ja': '農園体験',
      'zh-CN': '农场体验'
    },
    title: {
      'zh-TW': '農場慢活套裝行程 ‧ 親子採摘與大地手作',
      'en': 'Farm Agro-Tourism & Seasonal Harvest Experiences',
      'ja': '農園ツアー・収穫体験と自然ワークショップ',
      'zh-CN': '农场慢活套装行程 ‧ 亲子采摘与大地手作'
    },
    subtitle: {
      'zh-TW': '深入台東田野，體驗親手採收蔬果、香草茶萃取與大地野餐趣',
      'en': 'Step into Taitung’s countryside for hands-on harvesting, herbal tea crafting, and scenic picnics.',
      'ja': '台東の自然に触れる収穫体験やハーブティー作り、ピクニックプラン。',
      'zh-CN': '深入台东田野，体验亲手采收蔬果、香草茶萃取与大地野餐趣'
    },
    summary: {
      'zh-TW': '為喜愛自然與家庭旅人設計的深度農事體驗。由農場主人親自導覽解說，探索台東風土，預約專屬套裝行程。',
      'en': 'Curated eco-agro tours guided by the farm host, exploring local terroir, seasonal fruit picking, and family workshops.',
      'ja': '農園オーナーによるガイド付きツアー。旬のフルーツ収穫やファミリー向け体験プログラム。',
      'zh-CN': '为喜爱自然与家庭旅人设计的深度农事体验。由农场主人亲自导览解说，探索台东风土，预约专属套装行程。'
    },
    details: {
      'overview': {
        'zh-TW': '湯園即將推出結合「住宿＋專屬農場慢活」的深度體驗套裝。旅客可戴上草帽走進田畦，親手採摘當令蔬果與釋迦，認識台東純淨無污染的農耕智慧，並在農莊老樹下享用現摘香草沖泡的午茶與手作點心，是遠離都市塵囂的極致療癒旅程。',
        'en': 'Tang Home is launching an exclusive farm stay package. Enjoy guided walks through fertile fields, pick seasonal fruits, and savor farm-fresh herb tea under heritage trees.',
        'ja': '宿泊と農園体験を組み合わせた特別パッケージ。季節の果物収穫やオーガニックハーブティー作りをゆったりとお楽しみいただけます。',
        'zh-CN': '汤园即将推出结合「住宿＋专属农场慢活」的深度体验套装。旅客可戴上草帽走进田畦，亲手采摘当令蔬果与释迦，认识台东纯净无污染的农耕智慧，并在农庄老树下享用现摘香草冲泡的午茶与手作点心，是远离都市尘嚣的极致疗愈旅程。'
      },
      'highlights': {
        'zh-TW': [
          '主人專人引領農場生態解說與導覽（約 60 分鐘）',
          '當季有機蔬果親手採收體驗（可帶回新鮮產物）',
          '田園香草茶特調與在地手作點心午茶品嚐',
          '適合三代同堂、親子家庭與閨蜜小旅行'
        ],
        'en': [
          'Guided farm tour and ecological commentary (approx. 60 mins)',
          'Hands-on seasonal fruit and vegetable harvesting to take home',
          'Fresh herbal tea blending and local artisan afternoon tea',
          'Ideal for families, multigenerational trips, and couples'
        ],
        'ja': [
          '農園ガイドによる解説付き散策（約60分）',
          '季節の果物・野菜の収穫体験（お持ち帰り付き）',
          '自家製ハーブティーと地元スイーツのティータイム',
          'ファミリーやカップルに最適'
        ],
        'zh-CN': [
          '主人专人引领农场生态解说与导览（约 60 分钟）',
          '当季有机蔬果亲手采收体验（可带回新鲜产物）',
          '田园香草茶特调与在地手作点心午茶品尝',
          '适合三代同堂、亲子家庭与闺蜜小旅行'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '行程時間：建議預約時段 上午 09:30 或 下午 15:30',
          '包含：採摘工具、遮陽斗笠、防蚊精油、專屬野餐茶點',
          '交通：提供自駕導航或湯園專屬接駁指引'
        ],
        'en': [
          'Recommended Times: 09:30 AM or 15:30 PM',
          'Includes: Harvesting tools, straw hats, natural repellent, picnic snacks',
          'Transportation: GPS guidance or concierge shuttle arrangements'
        ],
        'ja': [
          '推奨時間帯：午前 09:30 または 午後 15:30',
          '含まれるもの：収穫用具、帽子、虫よけ、特製ピクニックスナック',
          'アクセス：ナビ案内または専用送迎相談可能'
        ],
        'zh-CN': [
          '行程时间：建议预约时段 上午 09:30 或 下午 15:30',
          '包含：采摘工具、遮阳斗笠、防蚊精油、专属野餐茶点',
          '交通：提供自驾导航或汤园专属接驳指引'
        ]
      },
      'priceHint': {
        'zh-TW': '房客專屬優惠加購價 / 亦可客製化團體包場',
        'en': 'Special discounted add-on rates for staying guests',
        'ja': 'ご宿泊者様限定の優待価格にてご案内',
        'zh-CN': '房客专属优惠加购价 / 亦可客制化团体包场'
      }
    },
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23984?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6ef23984?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '查看套裝行程',
      'en': 'View Tour Package',
      'ja': '体験プラン詳細',
      'zh-CN': '查看套装行程'
    }
  },

  {
    id: 'ferry-ticket-booking',
    category: 'travel',
    badge: {
      'zh-TW': '船票代訂',
      'en': 'Ferry Tickets',
      'ja': '乗船券代行',
      'zh-CN': '船票代订'
    },
    title: {
      'zh-TW': '凱旋客輪 ‧ 綠島與蘭嶼船票代訂與船班查詢',
      'en': 'Triumph Ferry Tickets Concierge (Green & Orchid Islands)',
      'ja': '凱旋フェリー・緑島＆蘭嶼乗船券代行・時刻表検索',
      'zh-CN': '凯旋客轮 ‧ 绿岛与兰屿船票代订与船班查询'
    },
    subtitle: {
      'zh-TW': '富岡漁港出發直達綠島/蘭嶼，提供即時船班查詢、全額代訂與櫃檯快速劃位指引',
      'en': 'Direct ferries from Fugang Port to Green & Orchid Island. Instant timetable lookup and concierge booking.',
      'ja': '台東富岡漁港発の緑島・蘭嶼行きフェリー。リアルタイム時刻表検索と予約代行。',
      'zh-CN': '富冈渔港出发直达绿岛/兰屿，提供即时船班查询、全额代订与柜台快速划位指引'
    },
    summary: {
      'zh-TW': '免去排隊搶票繁瑣手續！湯園為房客提供凱旋客輪專屬船票代訂服務。提供線上即時查詢船班次，一對一管家協助登記全體搭乘人員資料與預約。',
      'en': 'Skip the booking hassle. Tang Home offers direct ferry booking for Triumph lines to Green and Orchid Islands with instant timetable lookup.',
      'ja': '行列や手配の煩わしさを解消。湯園コンシェルジュが緑島・蘭嶼行きの凱旋フェリー乗船券を代行手配いたします。',
      'zh-CN': '免去排队抢票繁琐手续！汤园为房客提供凯旋客轮专属船票代订服务。提供线上即时查询船班次，一对一管家协助登记全体搭乘人员资料与预约。'
    },
    details: {
      'overview': {
        'zh-TW': '免去排隊搶票繁瑣手續！湯園為入住貴賓提供凱旋客輪（Triumph Ferry）專屬船票代訂服務。您可透過線上連結即時查詢船班次，再由一對一管家協助登記搭乘人名冊與快速預約。',
        'en': 'Skip the ticket lines. Tang Home provides dedicated Triumph Ferry booking concierge for Green Island and Orchid Island with live timetable lookups and streamlined group registration.',
        'ja': '行列や手配の煩わしさを解消。湯園コンシェルジュが緑島・蘭嶼行きの凱旋フェリー乗船券を代行手配いたします。',
        'zh-CN': '免去排队抢票繁琐手续！汤园为入住贵宾提供凯旋客轮（Triumph Ferry）专属船票代订服务。您可透过线上连结即时查询船班次，再由一对一管家协助登记搭乘人名册与快速预约。'
      },
      'highlights': {
        'zh-TW': [
          '提供凱旋客輪即時船班次線上查詢連結',
          '專人代辦訂位，省去自行搶票與電話等待時間',
          '綠島（溫泉/潛水）、蘭嶼（飛魚季/達悟文化）客製航線諮詢',
          '清楚透明的票價表與富岡漁港報到領票指引',
          '可加購台東火車站/機場至富岡漁港之專車接駁'
        ],
        'en': [
          'Direct online timetable query link for Triumph Ferry routes',
          'Dedicated concierge handling reservation and ticketing paperwork',
          'Custom routing for Green Island (hot springs/diving) & Orchid Island',
          'Transparent official pricing with harbor check-in guidance',
          'Optional shuttle transfer from Railway Station/Airport to Fugang Harbor'
        ],
        'ja': [
          '凱旋フェリーリアルタイム時刻表へのダイレクトアクセス',
          '専任コンシェルジュによるスムーズな予約代行',
          '緑島・蘭嶼の観光アドバイス＆航路プランニング',
          '明確な公式運賃表と乗船カウンター案内',
          '台東駅・空港から富岡漁港への送迎車手配も対応可能'
        ],
        'zh-CN': [
          '提供凯旋客轮即时船班次线上查询连结',
          '专人代办订位，省去自行抢票与电话等待时间',
          '绿岛（温泉/潜水）、兰屿（飞鱼季/达悟文化）客制航线咨询',
          '清楚透明的票价表与富冈渔港报到领票指引',
          '可加购台东火车站/机场至富冈渔港之专车接驳'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '船班次查詢：https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05',
          '預約方式：加 LINE (@tang225) 提供全員名冊並匯款全額',
          '匯款帳號：玉山銀行 808 帳號 0716-968-016666 (戶名: 邱美惠)',
          '報到時限：搭乘當日請務必於開船前 50 分鐘抵達富岡候船室',
          '諮詢專線：0966-733-338 / LINE ID: @tang225'
        ],
        'en': [
          'Timetable Link: https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05',
          'Booking Channel: LINE (@tang225) with full passenger list & 100% transfer',
          'Bank Transfer: E.SUN Bank (808) 0716-968-016666 (Chiu Mei-Hui)',
          'Check-in: 50 minutes before departure at Fugang Harbor',
          'Concierge Hotline: 0966-733-338 / LINE: @tang225'
        ],
        'ja': [
          '時刻表リンク：https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05',
          '予約窓口：LINE (@tang225) 乗船者名簿送信＆全額振込',
          '振込口座：玉山銀行 (808) 0716-968-016666 (邱美恵)',
          '乗船手続き：出港50分前までに富岡漁港カウンターへ',
          'お問い合わせ：0966-733-338 / LINE: @tang225'
        ],
        'zh-CN': [
          '船班次查询：https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05',
          '预约方式：加 LINE (@tang225) 提供全员名册并汇款全额',
          '汇款账号：玉山银行 808 账号 0716-968-016666 (户名: 邱美惠)',
          '报到时限：搭乘当日请务必于开船前 50 分钟抵达富冈候船室',
          '咨询专线：0966-733-338 / LINE ID: @tang225'
        ]
      },
      'priceHint': {
        'zh-TW': '台東↔綠島來回全票 $1,100 / 台東↔蘭嶼來回全票 $2,400',
        'en': 'Taitung-Green Island RT Adult $1,100 / Taitung-Orchid RT Adult $2,400',
        'ja': '台東〜緑島 往復大人 $1,100 ／ 台東〜蘭嶼 往復大人 $2,400',
        'zh-CN': '台东↔绿岛来回全票 $1,100 / 台东↔兰屿来回全票 $2,400'
      }
    },
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '查詢船班與代訂',
      'en': 'Query Timetable & Book',
      'ja': '時刻表確認・予約',
      'zh-CN': '查询船班与代订'
    }
  },

  {
    id: 'travel-planning-ticketing',
    category: 'travel',
    badge: {
      'zh-TW': '客製旅遊',
      'en': 'Tours & Travel',
      'ja': '観光プラン',
      'zh-CN': '客制旅游'
    },
    title: {
      'zh-TW': '台東在地行程規劃 ‧ 包車旅遊與私房秘境',
      'en': 'Custom Taitung Itineraries & Chauffeured Scenic Tours',
      'ja': '台東プライベート観光プラン・貸切車＆秘境ガイド',
      'zh-CN': '台东在地行程规划 ‧ 包车旅游与私房秘境'
    },
    subtitle: {
      'zh-TW': '熱氣球嘉年華預約、縱谷海岸線包車、景點門票與私房地圖導覽',
      'en': 'Hot Air Balloon bookings, East Rift Valley/Coastal charters, passes, and private Google Maps.',
      'ja': '熱気球フェスティバル予約、山海ルート貸切チャーター車の手配。',
      'zh-CN': '热气球嘉年华预约、纵谷海岸线包车、景点门票与私房地图导览'
    },
    summary: {
      'zh-TW': '不必繁瑣比價與排隊，湯園管家提供一對一旅遊諮詢，協助量身規劃山海線行程、提供專屬 Google 私房地圖與景點通行證。',
      'en': 'Skip the hassle of planning. Our host provides custom mountain/coast day tours, bespoke Google travel map and itinerary tips.',
      'ja': '面倒な手配はすべておまかせ。山と海の観光ルート、特製Googleマップや観光チケットをサポート。',
      'zh-CN': '不必繁琐比价与排队，汤园管家提供一对一旅游咨询，协助量身规划山海线行程、提供专属 Google 私房地图与景点通行证。'
    },
    details: {
      'overview': {
        'zh-TW': '台東幅員遼闊，山線（縱谷稻浪、伯朗大道、鹿野高台）與海線（三仙台、加路蘭、金樽衝浪）各具風采。湯園為您提供專業的在地旅遊諮詢服務與專屬 Google 私房地圖，無論是台東國際熱氣球繫留體驗預約、在地知名餐廳訂位，或是合法舒適的包車一日遊規劃，管家皆能為您妥善安排。',
        'en': 'Discover Taitung effortlessly. We arrange custom scenic routes across the East Rift Valley and Coastal Coastline, share our curated Google Travel Map, Balloon Festival slots, and vetted charter drivers.',
        'ja': '広大な台東の見どころを効率よく巡るための観光コンシェルジュサービス。特製Googleマップ案内、熱気球イベント、観光タクシーなど何でもご相談ください。',
        'zh-CN': '台东幅员辽阔，山线（纵谷稻浪、伯朗大道、鹿野高台）与海线（三仙台、加路兰、金樽冲浪）各具风采。汤园为您提供专业的在地旅游咨询服务与专属 Google 私房地图，无论是台东国际热气球系留体验预约、在地知名餐厅订位，或是合法舒适的包车一日游规划，管家皆能为您妥善安排。'
      },
      'highlights': {
        'zh-TW': [
          '湯園專屬 ‧ 台東 Google 私房旅遊地圖（美食景點一鍵導航）',
          '鹿野高台「台灣國際熱氣球嘉年華」繫留體驗諮詢與接駁指引',
          '在地合法專業包車司機一日遊 / 半日遊客製化行程安排',
          '知本溫泉券、初鹿牧場門票代購與私房遊程諮詢'
        ],
        'en': [
          'Tang Home Curated Google Travel Map (One-tap navigation to hidden gems)',
          'Luye Highland Hot Air Balloon Festival reservations and shuttle assistance',
          'Vetted local chauffeured day trips customized to your preferences',
          'Discounted passes for hot springs, ranches, and local eco-tours'
        ],
        'ja': [
          '湯園特製Googleマップ案内（厳選グルメや観光地をワンタップナビ）',
          '鹿野高台 国際熱気球フェスティバルの案内＆送迎手配',
          '安心の貸切観光チャーター車（1日／半日コース）',
          '温泉施設や牧場体験チケットの代行'
        ],
        'zh-CN': [
          '汤园专属 ‧ 台东 Google 私房旅游地图（美食景点一键导航）',
          '鹿野高台「台湾国际热气球嘉年华」系留体验咨询与接驳指引',
          '在地合法专业包车司机一日游 / 半日游客制化行程安排',
          '知本温泉券、初鹿牧场门票代购与私房游程咨询'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '諮詢方式：加 LINE (@tang225) 或致電管家專線 0966-733-338',
          '服務對象：湯園全體房客專屬免費行程諮詢服務',
          '票券費用：依各官方實報實銷或享房客特約折扣'
        ],
        'en': [
          'Booking Channel: LINE (@tang225) or Phone: 0966-733-338',
          'Eligibility: Free consultation for all Tang Home guests',
          'Payment: Official ticketing rates with exclusive guest discounts'
        ],
        'ja': [
          'お問い合わせ：公式LINE (@tang225) または お電話 0966-733-338',
          '対象：ご宿泊者様向け無料プランニング相談',
          '料金：正規料金またはご宿泊者限定優待価格'
        ],
        'zh-CN': [
          '咨询方式：加 LINE (@tang225) 或致电管家专线 0966-733-338',
          '服务对象：汤园全体房客专属免费行程咨询服务',
          '票券费用：依各官方实报实销或享房客特约折扣'
        ]
      }
    },
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '諮詢旅遊行程',
      'en': 'Inquire Travel Tours',
      'ja': '観光ツアー相談',
      'zh-CN': '咨询旅游行程'
    }
  },

  {
    id: 'wedding-bridal-suites',
    category: 'wedding',
    badge: {
      'zh-TW': '喜慶迎娶',
      'en': 'Bridal Suites',
      'ja': 'ウェディング',
      'zh-CN': '喜庆迎娶'
    },
    title: {
      'zh-TW': '東方迎娶計畫 ‧ 嫁娶拜別與尊榮親友包層',
      'en': 'Bridal Suite & Traditional Wedding Morning Planning',
      'ja': 'ブライダル・結納・花嫁お支度スイートプラン',
      'zh-CN': '东方迎娶计画 ‧ 嫁娶拜别与尊荣亲友包层'
    },
    subtitle: {
      'zh-TW': '寬敞明亮大客廳、室內電梯便利長輩、專屬禮車車位與拜別儀式空間',
      'en': 'Spacious bridal dressing suites, elevator accessibility for elders, wedding car parking, and ceremonial parlor.',
      'ja': '広々としたリビング、エレベーター完備、婚礼車専用駐車スペース。記念写真にも最適。',
      'zh-CN': '宽敞明亮大客厅、室内电梯便利长辈、专属礼车车位与拜别仪式空间'
    },
    summary: {
      'zh-TW': '新娘早晨梳化、拜別父母與迎娶車隊的完美殿堂。全棟配備室內電梯，讓盛裝長輩與親友從容優雅，留下珍貴紀念。',
      'en': 'The ideal venue for wedding morning preparations, photography, and ceremonial blessings with seamless elevator access.',
      'ja': '結婚式の朝のお支度や記念撮影に最適な洗練された空間。ご親族の皆様も安心して快適にお過ごしいただけます。',
      'zh-CN': '新娘早晨梳化、拜别父母与迎娶车队的完美殿堂。全栋配备室内电梯，让盛装长辈与亲友从容优雅，留下珍贵纪念。'
    },
    details: {
      'overview': {
        'zh-TW': '一生一次的人生大事，值得在最溫馨優雅的環境中舉行。湯園民宿具備大器典雅的東方氛圍，寬敞的合家歡大空間適合作為新娘梳化房與拜別儀式廳。全棟配置室內無障礙電梯，長輩穿著旗袍禮服皆能輕鬆上下樓；私有平面車位更方便迎娶禮車停駐與攝影團隊取景。',
        'en': 'Make your wedding morning unforgettable. Tang Home offers spacious multi-room layouts for bridal makeup, tea ceremonies, and family portraits, with on-site parking for wedding convoys.',
        'ja': '人生の特別な日にふさわしい上質な空間。新婦様のヘアメイクやお支度、ご親族が集まるセレモニーを、ゆったりとした客室と館内エレベーターでサポートします。',
        'zh-CN': '一生一次的人生大事，值得在最温馨优雅的环境中举行。汤园民宿具备大器典雅的东方氛围，宽敞的合家欢大空间适合作为新娘梳化房与拜别仪式厅。全栋配置室内无障碍电梯，长辈穿着旗袍礼服皆能轻松上下楼；私有平面车位更方便迎娶礼车停驻与摄影团队取景。'
      },
      'highlights': {
        'zh-TW': [
          '寬敞採光新娘梳化客廳與大面全身鏡空間',
          '室內無障礙電梯直達各樓層，長輩敬茶儀式安全體貼',
          '專屬私有平面停車場，可供 3~5 輛迎娶禮車方便停靠與放鞭炮',
          '提供喜慶茶具、高腳杯、甜茶托盤與儀式動線協助',
          '可配合提前入住或彈性延後退房（需視房況提前預約）'
        ],
        'en': [
          'Bright, daylight-filled bridal salon parlor with full-length mirrors',
          'Indoor elevator directly connecting floors for safe and graceful tea ceremonies',
          'Private courtyard parking accommodating 3-5 bridal convoy cars',
          'Traditional ceremonial tea set, champagne flutes, and tray setup available',
          'Flexible early check-in or late check-out available upon request'
        ],
        'ja': [
          '自然光が入る明るい花嫁メイクスペースと全身鏡',
          '館内エレベーター完備でご年配の親族も安心移動',
          '専用敷地内に婚礼車3〜5台駐車可能',
          'お祝い用茶器セットやグラス類の貸出サポート',
          'アーリーチェックイン／レイトチェックアウト相談可能'
        ],
        'zh-CN': [
          '宽敞采光新娘梳化客厅与大面全身镜空间',
          '室内无障碍电梯直达各楼层，长辈敬茶仪式安全体贴',
          '专属私有平面停车场，可供 3~5 辆迎娶礼车方便停靠与放鞭炮',
          '提供喜庆茶具、高脚杯、甜茶托盘与仪式动线协助',
          '可配合提前入住或弹性延后退房（需视房况提前预约）'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '推薦方案：單層包房或全館包棟方案（可容納 14~20 位親友）',
          '服務預約：婚禮迎娶方案請至少提前 1~3 個月致電預約',
          '諮詢專線：0966-733-338 或 LINE 專人管家'
        ],
        'en': [
          'Recommended Option: Single Floor or Entire Villa Buyout (14-20 guests)',
          'Advance Notice: Please book at least 1-3 months in advance',
          'Contact: 0966-733-338 or official LINE concierge'
        ],
        'ja': [
          'おすすめ：フロア貸切または全館貸切プラン（最大14〜20名様）',
          'ご予約：挙式の1〜3ヶ月前までのご相談を推奨',
          '連絡先：0966-733-338 または LINEコンシェルジュ'
        ],
        'zh-CN': [
          '推荐方案：单层包房或全馆包栋方案（可容纳 14~20 位亲友）',
          '服务预约：婚礼迎娶方案请至少提前 1~3 个月致电预约',
          '咨询专线：0966-733-338 或 LINE 专人管家'
        ]
      }
    },
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '了解迎娶方案',
      'en': 'Explore Bridal Suites',
      'ja': '婚礼プランを見る',
      'zh-CN': '了解迎娶方案'
    }
  },

  {
    id: 'room-decor-cake-concierge',
    category: 'celebration',
    badge: {
      'zh-TW': '驚喜布置',
      'en': 'Celebration',
      'ja': '記念装飾',
      'zh-CN': '惊喜布置'
    },
    title: {
      'zh-TW': '浪漫節慶布置 ‧ 生日求婚與代訂手作名店蛋糕',
      'en': 'Romantic Room Decor, Birthday Surprises & Artisan Cake Service',
      'ja': '記念日・お誕生日デコレーション＆特製ケーキ手配',
      'zh-CN': '浪漫节庆布置 ‧ 生日求婚与代订手作名店蛋糕'
    },
    subtitle: {
      'zh-TW': '為重要時刻締造驚喜，客製鮮花氣球浪漫布置與台東手作甜點蛋糕',
      'en': 'Elevate your anniversaries and birthdays with custom florals, atmospheric lighting, and artisan dessert cakes.',
      'ja': '特別な記念日を彩るフラワーバルーン装飾と地元人気パティスリーの特製ケーキ。',
      'zh-CN': '为重要时刻缔造惊喜，客制鲜花气球浪漫布置与台东手作甜点蛋糕'
    },
    summary: {
      'zh-TW': '無論是求婚大作戰、結婚紀念日、長輩壽辰或生日驚喜派對，湯園管家提供客房布置企劃與名店蛋糕預訂冷藏服務。',
      'en': 'From proposals and romantic milestones to milestone birthdays, we arrange delicate room decorations and cake delivery.',
      'ja': 'プロポーズや記念日旅行のサプライズに。お部屋の演出やケーキの事前手配を承ります。',
      'zh-CN': '无论是求婚大作战、结婚纪念日、长辈寿辰或生日惊喜派对，汤园管家提供客房布置企划与名店蛋糕预订冷藏服务。'
    },
    details: {
      'overview': {
        'zh-TW': '在旅途中為摯愛送上一份意想不到的感動！湯園提供貼心的「慶典與浪漫布置服務」，可依您的預算與需求，在您抵達入房前完成浪漫氣球漂浮、玫瑰花瓣、溫暖氛圍燈串與迎賓香檳酒杯布置。同時與台東在地優質甜點名店合作，代訂當季水果生日蛋糕、手作生乳捲或精緻法式甜品，為重要日子加溫。',
        'en': 'Surprise your loved one in Taitung! We coordinate pre-arrival room styling including romantic fairy lights, balloon bouquets, fresh floral petals, and chilled artisan cakes from renowned local patisseries.',
        'ja': '大切な方へのサプライズを湯園が演出します。チェックイン前にお部屋をバルーンやキャンドルライトで装飾し、地元人気店のフレッシュケーキをご用意いたします。',
        'zh-CN': '在旅途中为挚爱送上一份意想不到的感动！汤园提供贴心的「庆典与浪漫布置服务」，可依您的预算与需求，在您抵达入房前完成浪漫气球漂浮、玫瑰花瓣、温暖氛围灯串与迎宾香槟酒杯布置。同时与台东在地优质甜点名店合作，代订当季水果生日蛋糕、手作生乳卷或精致法式甜品，为重要日子加温。'
      },
      'highlights': {
        'zh-TW': [
          '浪漫求婚 / 生日派對 / 紀念日專屬客房氛圍布置（氣球、花瓣、暖光燈串）',
          '嚴選台東在地手作甜點名店，代訂 6 吋 / 8 吋當季新鮮水果蛋糕或法式生乳捲',
          '免費提供香檳高腳杯、保冷冷藏存放與點火打火機、餐盤刀叉器具',
          '可協助保密安排驚喜送達房內時刻'
        ],
        'en': [
          'Bespoke room styling with balloon art, rose petals, and warm fairy lights',
          'Artisan 6" or 8" seasonal fruit chiffon cakes or French cream rolls from top local patisseries',
          'Complimentary champagne flutes, cake refrigeration, candles, and cutlery',
          'Discreet secret timing coordination for the perfect surprise reveal'
        ],
        'ja': [
          'お誕生日・プロポーズ用のバルーン＆キャンドル装飾プラン',
          '台東有名店の季節のフルーツケーキ（6号/8号）やロールケーキ手配',
          'シャンパングラス・冷蔵保管・キャンドル・カトラリー完備',
          'サプライズのタイミングに合わせた柔軟なデリバリー対応'
        ],
        'zh-CN': [
          '浪漫求婚 / 生日派对 / 纪念日专属客房氛围布置（气球、花瓣、暖光灯串）',
          '严选台东在地手作甜点名店，代订 6 吋 / 8 吋当季新鲜水果蛋糕或法式生乳卷',
          '免费提供香槟高脚杯、保冷冷藏存放与点火打火机、餐盘刀叉器具',
          '可协助保密安排惊喜送达房内时刻'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '預約時間：布置與蛋糕代訂請於入住前 3~5 天告知',
          '蛋糕款式：水果戚風、濃郁巧克力、芋泥布丁或法式生乳酪可選',
          '預約方式：請透過 LINE 或電話向管家確認款式與到店取件時間'
        ],
        'en': [
          'Advance Notice: Please request at least 3-5 days before arrival',
          'Cake Flavors: Fresh Fruit Chiffon, Rich Chocolate, Taro Custard, French Cheesecake',
          'Booking: Message our LINE concierge for flavor catalog and custom message cards'
        ],
        'ja': [
          'ご予約期日：ご宿泊日の3〜5日前まで',
          'ケーキ種類：フルーツシフォン、ショコラ、チーズケーキ等',
          'お問い合わせ：公式LINEまたはお電話にてお気軽にどうぞ'
        ],
        'zh-CN': [
          '预约时间：布置与蛋糕代订请于入住前 3~5 天告知',
          '蛋糕款式：水果戚风、浓郁巧克力、芋泥布丁或法式生乳酪可选',
          '预约方式：请透过 LINE 或电话向管家确认款式与到店取件时间'
        ]
      }
    },
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '查看布置與蛋糕',
      'en': 'View Decor & Cake',
      'ja': '装飾・ケーキ詳細',
      'zh-CN': '查看布置与蛋糕'
    }
  },

  {
    id: 'business-travel-package',
    category: 'business',
    badge: {
      'zh-TW': '商務合作',
      'en': 'Corporate & Business',
      'ja': 'ビジネス提携',
      'zh-CN': '商务合作'
    },
    title: {
      'zh-TW': '商務合作 ‧ 平日差旅專案與特約收據',
      'en': 'Business Travel Weekday Package (Invoice & Corporate Rates)',
      'ja': 'ビジネス出張平日優待プラン（領収書発行対応）',
      'zh-CN': '商务合作 ‧ 平日差旅专案与特约收据'
    },
    subtitle: {
      'zh-TW': '歡迎各機關團體、商務人士平日洽公入住，我們提供專屬合約優惠價、合法收據統編開立及便利停車。',
      'en': 'Special corporate rates, official tax receipts, and complimentary parking for business travelers and organizations.',
      'ja': '官公庁・法人団体・ビジネス出張の平日滞在に。特別契約レート、インボイス領収書、無料駐車場完備。',
      'zh-CN': '欢迎各机关团体、商务人士平日洽公入住，我们提供专属合约优惠价、合法收据统编开立及便利停车。'
    },
    summary: {
      'zh-TW': '歡迎各機關團體、商務人士平日洽公入住，我們提供專屬合約優惠價、合法收据統編開立及便利停車。本專案僅限週日～週四平日單人出差使用。',
      'en': 'Tailored for professionals and corporate stays in Taitung with official tax ID receipts, private parking, and tailored contract rates.',
      'ja': '出張のお客様へ。公式LINEでの在職確認で法人特別割引をご案内。領収書発行・無料駐車場を完備。',
      'zh-CN': '欢迎各机关团体、商务人士平日洽公入住，我们提供专属合约优惠价、合法收据统编开立及便利停车。本专案仅限周日～周四平日单人出差使用。'
    },
    details: {
      'overview': {
        'zh-TW': '歡迎各機關團體、商務人士平日洽公入住，我們提供專屬合約優惠價、合法收據統編開立及便利停車。針對各機關團體、商務人士平日洽公差旅，我們提供合約專屬出差優惠價與合法免用統一發票收據（可載明統一編號與在職公司買受人抬頭），報帳核銷快速合規。附設專屬自用停車位，讓您在忙碌公務之餘，享有如家般溫馨沉靜的休憩體驗。',
        'en': 'Designed for business travelers and corporate organizations visiting Taitung. We offer exclusive weekday corporate rates, official tax receipts with buyer company details, and complimentary private parking.',
        'ja': '台東出張を快適にサポート。無料駐車場完備。法人契約割引・領収書（統一編号対応）を迅速発行いたします。',
        'zh-CN': '欢迎各机关团体、商务人士平日洽公入住，我们提供专属合约优惠价、合法收据统编开立及便利停车。针对各机关团体、商务人士平日洽公差旅，我们提供合约专属出差优惠价与合法免用统一发票收据（可载明统一编号与在职公司买受人抬头），报账核销快速合规。附设专属自用停车位，让您在忙碌公务之余，享有如家般温馨沉静的休憩体验。'
      },
      'highlights': {
        'zh-TW': [
          '本專案僅限週日～週四之平日，且限單人出差入住使用',
          '入住時請出示本人有效員工識別證/工作證或公務派令（恕不單憑紙本名片核認）',
          '開立免用統一發票收據（一律開立該在職公司之統編合法專用收據以供報帳核銷）',
          '現場恕不開立個人無統編單據；週五、週六、國定假日、連續假期及特定節日恕不適用',
          '專屬自用停車位（公務自駕車輛便利停放）'
        ],
        'en': [
          'Valid for single business traveler on Sunday through Thursday weekdays only',
          'Must present valid employee ID card / work badge / official dispatch upon check-in',
          'Legal tax receipt with official company Tax ID for business expense reimbursement',
          'Fridays, Saturdays, national holidays, and long weekends are not applicable',
          'Free private on-site parking for company vehicles'
        ],
        'ja': [
          '日曜日〜木曜日の平日限定・1名様ビジネス出張専用プラン',
          'チェックイン時に社員証・職員証・公務証明書のご提示が必要です',
          '会社名・統一編号入りの公的領収書を発行（経費精算用）',
          '金曜・土曜・祝祭日・連休は適用外となります',
          '敷地内無料専用駐車場完備'
        ],
        'zh-CN': [
          '本专案仅限周日～周四之平日，且限单人出差入住使用',
          '入住时请出示本人有效员工识别证/工作证或公务派令（恕不单凭纸本名片核认）',
          '开立免用统一发票收据（一律开立该在职公司之统编合法专用收据以供报账核销）',
          '现场恕不开立个人无统编单据；周五、周六、国定假日、连续假期及特定节日恕不适用',
          '专属自用停车位（公务自驾车辆便利停放）'
        ]
      },
      'inclusions': {
        'zh-TW': [
          '適用時間：僅限週日～週四之平日（週五、週六、國定假日、連假及特定節日不適用）',
          '入住人數：限單人出差入住使用',
          '身分核認：出示本人有效員工識別證 / 工作證或公務派令',
          '報帳憑證：開立免用統一發票合法收據（開立該在職公司統編）',
          '專案洽詢：加入官方 LINE (@tang225) 或致電 0966-733-338'
        ],
        'en': [
          'Applicable: Sunday to Thursday weekdays only (excludes weekends & holidays)',
          'Occupancy: Strictly single business traveler',
          'Verification: Present valid employee ID or official government dispatch',
          'Receipt: Official receipt with corporate Tax ID for tax filing',
          'Inquiry: LINE (@tang225) or Phone: 0966-733-338'
        ],
        'ja': [
          '適用日：日〜木曜の平日限定（金土・連休・特定日を除く）',
          '利用人数：1名様での出張利用限定',
          '確認書類：社員証・身分証明書・出張命令書等のご提示',
          '領収書：統一編号記載の公的領収書発行',
          'お問い合わせ：公式LINE (@tang225) または 0966-733-338'
        ],
        'zh-CN': [
          '适用时间：仅限周日～周四之平日（周五、周六、国定假日、连假及特定节日不适用）',
          '入住人数：限单人出差入住使用',
          '身分核认：出示本人有效员工识别证 / 工作证或公务派令',
          '报账凭证：开立免用统一发票合法收据（开立该在职公司统编）',
          '专案洽询：加入官方 LINE (@tang225) 或致电 0966-733-338'
        ]
      },
      'priceHint': {
        'zh-TW': '平日單人出差專屬合約價（出示員工證核認），開立免用統一發票收據',
        'en': 'Corporate weekday special rates upon employee ID verification with tax receipt',
        'ja': '社員証提示で平日単身出張優待料金適用・領収書発行',
        'zh-CN': '平日单人出差专属合约价（出示员工证核认），开立免用统一发票收据'
      }
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85'
    ],
    ctaLabel: {
      'zh-TW': '洽詢差旅合約方案',
      'en': 'Inquire Corporate Rates',
      'ja': '出張プランを相談',
      'zh-CN': '洽询差旅合约方案'
    }
  }
];
