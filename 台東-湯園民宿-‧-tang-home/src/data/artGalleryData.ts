import { Language } from '../types';

export interface Artwork {
  id: string;
  title: Record<Language, string>;
  artist: Record<Language, string>;
  year: string;
  medium: Record<Language, string>;
  dimensions: string;
  locationInVilla: Record<Language, string>;
  description: Record<Language, string>;
  inspiration: Record<Language, string>;
  image: string;
  category: 'oil' | 'watercolor' | 'mixed' | 'indigenous';
}

export interface ArtistProfile {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  philosophy: Record<Language, string>;
  avatar: string;
  featuredWorksCount: number;
}

export const ARTIST_PROFILES: ArtistProfile[] = [
  {
    id: 'artist-chen',
    name: {
      'zh-TW': '陳郁文 (Chen Yu-Wen)',
      'en': 'Chen Yu-Wen',
      'ja': '陳 郁文 (Chen Yu-Wen)',
      'zh-CN': '陈郁文 (Chen Yu-Wen)'
    },
    role: {
      'zh-TW': '台東在地駐館油畫家 ‧ 東台灣風土藝術家',
      'en': 'Resident Landscape Oil Painter & Eastern Taiwan Artist',
      'ja': '台東滞在画家・東台湾の風土を描くアーティスト',
      'zh-CN': '台东在地驻馆油画家 ‧ 东台湾风土艺术家'
    },
    bio: {
      'zh-TW': '定居台東三十餘年，長年深入花東縱谷與中央山脈林道。陳老師善於以濃厚飽滿的油畫肌理，捕捉台東晨曦霧靄、都蘭山稜與太平洋潮汐的靈動光影，其畫作多次榮獲台東美展特優及全台各大美術館典藏。',
      'en': 'Living in Taitung for over three decades, Chen travels deep into the East Rift Valley and Central Mountain Range. Renowned for rich impasto textures capturing dawn mists, Mount Dulan ridges, and Pacific tides.',
      'ja': '台東に30年以上暮らし、東台湾の自然を愛する油彩画家。豊かな絵の具の厚みと光のグラデーションで、都蘭山の稜線や太平洋のさざ波を情緒豊かに表現します。',
      'zh-CN': '定居台东三十余年，长年深入花东纵谷与中央山脉林道。陈老师善于以浓厚饱满的油画肌理，捕捉台东晨曦雾霭、都兰山棱与太平洋潮汐的灵动光影，其画作多次荣获台东美展特优及全台各大美术馆典藏。'
    },
    philosophy: {
      'zh-TW': '「台東的風與光，是有溫度的。我將大地的厚實與縱谷的純粹凝固在畫布上，願每位駐足湯園的旅人，都能在畫裡找到心靈的平靜。」',
      'en': '“The wind and light of Taitung carry warmth. I distill the earth’s honesty and valley’s purity onto canvas, offering stillness to every traveler at Tang Home.”',
      'ja': '「台東の風と光には体温があります。大地が持つ力強さと純粋さをカンバスに宿し、湯園を訪れる皆様に安らぎを届けたい。」',
      'zh-CN': '「台东的风与光，是有温度的。我将大地的厚实与纵谷的纯粹凝固在画布上，愿每位驻足汤园的旅人，都能在画里找到心灵的平静。」'
    },
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85',
    featuredWorksCount: 6
  }
];

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'art-dulan-morning-mist',
    title: {
      'zh-TW': '《都蘭山晨嵐 ‧ 翠巒暮韻》',
      'en': 'Mount Dulan Morning Mist & Verdant Ridge',
      'ja': '『都蘭山の朝霧・翠巒の韻』',
      'zh-CN': '《都兰山晨岚 ‧ 翠峦暮韵》'
    },
    artist: {
      'zh-TW': '陳郁文',
      'en': 'Chen Yu-Wen',
      'ja': '陳 郁文',
      'zh-CN': '陈郁文'
    },
    year: '2023',
    medium: {
      'zh-TW': '油彩 ‧ 畫布 (Oil on Linen Canvas)',
      'en': 'Oil on Linen Canvas',
      'ja': 'リネンキャンバス・油彩',
      'zh-CN': '油彩 ‧ 画布 (Oil on Linen Canvas)'
    },
    dimensions: '160 × 100 cm',
    locationInVilla: {
      'zh-TW': '1F 東方貴賓迎賓交誼廳主牆',
      'en': '1F Main Welcome Lounge Centerpiece',
      'ja': '1階 オリエンタルロビー メイン壁面',
      'zh-CN': '1F 东方贵宾迎宾交谊厅主墙'
    },
    description: {
      'zh-TW': '畫作以沉靜幽遠的墨綠與暖金光暈為主色調，描繪晨光穿透都蘭山雲海的壯麗景致。層疊的筆觸展現山嵐流動之感，是湯園最具代表性的典藏巨作。',
      'en': 'A monumental painting in deep emerald and warm golden hues, depicting dawn sunlight breaking through sea mists over sacred Mount Dulan.',
      'ja': '深みのあるエメラルドグリーンと温かい朝陽のゴールドで、都蘭山にかかる雲海を描いた大作。湯園を代表する常設展示です。',
      'zh-CN': '画作以沉静幽远之墨绿与暖金光晕为主色调，描绘晨光穿透都兰山云海的壮丽景致。层叠的笔触展现山岚流动之感，是汤园最具代表性的典藏巨作。'
    },
    inspiration: {
      'zh-TW': '畫家在清晨五點駐足卑南山丘，凝視雲霧在山脈間舒卷而創作。',
      'en': 'Inspired by dawn observations atop Puyuma hillside at 5:00 AM.',
      'ja': '早朝5時の卑南の丘から望む幻想的な山並みに着想を得て制作。',
      'zh-CN': '画家在清晨五点驻足卑南山丘，凝视云雾在山脉间舒卷而创作。'
    },
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    category: 'oil'
  },
  {
    id: 'art-pacific-tides',
    title: {
      'zh-TW': '《太平洋之藍 ‧ 金樽潮湧》',
      'en': 'Pacific Azure & Jinzun Tides',
      'ja': '『太平洋の青・金樽の潮騒』',
      'zh-CN': '《太平洋之蓝 ‧ 金樽潮涌》'
    },
    artist: {
      'zh-TW': '陳郁文',
      'en': 'Chen Yu-Wen',
      'ja': '陳 郁文',
      'zh-CN': '陈郁文'
    },
    year: '2022',
    medium: {
      'zh-TW': '壓克力與天然海砂複合媒材 (Mixed Media on Canvas)',
      'en': 'Acrylic & Natural Coast Sand on Canvas',
      'ja': 'ミクストメディア・台東産天然海砂',
      'zh-CN': '压克力与天然海砂复合媒材 (Mixed Media on Canvas)'
    },
    dimensions: '120 × 90 cm',
    locationInVilla: {
      'zh-TW': '2F 景觀茶席休憩長廊',
      'en': '2F Scenic Tea Corridor',
      'ja': '2階 景観ティーラウンジ',
      'zh-CN': '2F 景观茶席休憩长廊'
    },
    description: {
      'zh-TW': '畫家特地採集金樽海灣的細緻黑沙混合純青顏料，使畫作表面呈現真實浪濤拍岸時的磨砂立體質感，層次豐富深邃。',
      'en': 'Created by blending native black sand from Jinzun Bay into mineral pigments, capturing the raw, rhythmic energy of Pacific coastline.',
      'ja': '金樽海岸の天然砂を絵の具に混ぜ合わせ、打ち寄せる波の立体感と太平洋の深い青を表現した躍動感ある作品。',
      'zh-CN': '画家特地采集金樽海湾的精致黑沙混合纯青颜料，使画作表面呈现真实浪涛拍岸时的磨砂立体质感，层次丰富深邃。'
    },
    inspiration: {
      'zh-TW': '源於台東東海岸長浪奔騰與衝浪旅人的自在律動。',
      'en': 'Drawn from the rhythmic Pacific swells along Taitung’s coastal shores.',
      'ja': '東海岸の力強い波とサーファーたちの自由な精神にインスパイア。',
      'zh-CN': '源于台东东海岸长浪奔腾与冲浪旅人的自在律动。'
    },
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85',
    category: 'mixed'
  },
  {
    id: 'art-taimali-golden-mist',
    title: {
      'zh-TW': '《太麻里金芒 ‧ 金針山晨嵐》',
      'en': 'Golden Mist of Taimali Daylily Mountain',
      'ja': '『太麻里の金光・金針山朝霧』',
      'zh-CN': '《太麻里金芒 ‧ 金针山晨岚》'
    },
    artist: {
      'zh-TW': '陳郁文 (Chen Yu-Wen)',
      'en': 'Chen Yu-Wen',
      'ja': '陳 郁文 (Chen Yu-Wen)',
      'zh-CN': '陈郁文 (Chen Yu-Wen)'
    },
    year: '2023',
    medium: {
      'zh-TW': '厚塗油彩與金箔肌理 (Impasto Oil & Gold Leaf on Canvas)',
      'en': 'Impasto Oil & Gold Leaf on Canvas',
      'ja': '油彩・金箔テクスチャ',
      'zh-CN': '厚涂油彩与金箔肌理 (Impasto Oil & Gold Leaf on Canvas)'
    },
    dimensions: '140 × 90 cm',
    locationInVilla: {
      'zh-TW': '3F 典藏家庭雅居前廳',
      'en': '3F Family Suite Entrance Foyer',
      'ja': '3階 ファミリールーム前エントランス',
      'zh-CN': '3F 典藏家庭雅居前厅'
    },
    description: {
      'zh-TW': '描繪台東太麻里金針山在清晨第一道金黃曙光劃破雲海的壯麗景致。層疊金色花毯與遠方蔚藍太平洋交相輝映，象徵大地生生不息的溫暖與希望。',
      'en': 'Capturing the golden daylily bloom on Taimali Mountain kissed by dawn mists and Pacific sunrays, radiating warmth and vitality.',
      'ja': '太麻里の金針花畑と朝靄を切り拓く最初の日の出をドラマチックに描いた大作。',
      'zh-CN': '描绘台东太麻里金针山在清晨第一道金黄曙光划破云海的壮丽景致。层叠金色花毯与远方蔚蓝太平洋交相辉映，象征大地生生不息的温暖与希望。'
    },
    inspiration: {
      'zh-TW': '每年仲夏登太麻里望夫崖時，目睹整座山谷泛著金色晨曦的感動。',
      'en': 'Standing atop Taimali ridge in late summer as golden morning light bathes the floral slopes.',
      'ja': '夏の太麻里で迎えた金色の朝の感動から誕生。',
      'zh-CN': '每年仲夏登太麻里望夫崖时，目睹整座山谷泛着金色晨曦的感动。'
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    category: 'oil'
  },
  {
    id: 'art-rift-valley-paddy',
    title: {
      'zh-TW': '《縱谷金黃 ‧ 伯朗金風稻浪》',
      'en': 'East Rift Valley Golden Rice Waves',
      'ja': '『花東縦谷・黄金の稲穂と風』',
      'zh-CN': '《纵谷金黄 ‧ 伯朗金风稻浪》'
    },
    artist: {
      'zh-TW': '陳郁文',
      'en': 'Chen Yu-Wen',
      'ja': '陳 郁文',
      'zh-CN': '陈郁文'
    },
    year: '2024',
    medium: {
      'zh-TW': '厚塗油彩 (Impasto Oil on Canvas)',
      'en': 'Impasto Oil on Canvas',
      'ja': '油彩・インパスト技法',
      'zh-CN': '厚涂油彩 (Impasto Oil on Canvas)'
    },
    dimensions: '130 × 80 cm',
    locationInVilla: {
      'zh-TW': '4F 景觀陽光套房玄關',
      'en': '4F Panorama Balcony Suite Foyer',
      'ja': '4階 パノラマバルコニースイート玄関',
      'zh-CN': '4F 景观阳光套房玄关'
    },
    description: {
      'zh-TW': '捕捉秋季池上與關山金黃稻穗隨風翻滾如海浪的壯闊美景。厚實的刮刀油彩將陽光照耀在稻芒上的細緻金光栩栩如生刻畫出來。',
      'en': 'Depicts rolling waves of golden grain across Chishang valleys in autumn breeze, textured with bold palette knife strokes.',
      'ja': '秋の池上・関山に広がる黄金色の稲穂の海。パレットナイフの大胆なタッチで光の輝きを表現。',
      'zh-CN': '捕捉秋季池上与关山金黄稻穗随风翻滚如海浪的壮阔美景。厚实的刮刀油彩将阳光照耀在稻芒上的精致金光栩栩如生刻画出来。'
    },
    inspiration: {
      'zh-TW': '初秋午後騎行於伯朗大道，感受稻香與風的交響。',
      'en': 'Cycling down Mr. Brown Avenue under crisp autumn skies.',
      'ja': '初秋の午後、伯朗大道を自転車で走り抜けた風の記憶。',
      'zh-CN': '初秋午后骑行于伯朗大道，感受稻香与风的交响。'
    },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85',
    category: 'oil'
  },
  {
    id: 'art-pipa-lake-whisper',
    title: {
      'zh-TW': '《黑森林微光 ‧ 琵琶清泉》',
      'en': 'Whisper of Pipa Lake & Black Forest',
      'ja': '『黒森林の木漏れ日・琵琶湖の泉』',
      'zh-CN': '《黑森林微光 ‧ 琵琶清泉》'
    },
    artist: {
      'zh-TW': '陳郁文',
      'en': 'Chen Yu-Wen',
      'ja': '陳 郁文',
      'zh-CN': '陈郁文'
    },
    year: '2023',
    medium: {
      'zh-TW': '水彩與透明壓克力 (Watercolor & Translucent Glazes)',
      'en': 'Watercolor & Translucent Glazes',
      'ja': '透明水彩・アクリルウォッシュ',
      'zh-CN': '水彩与透明压克力 (Watercolor & Translucent Glazes)'
    },
    dimensions: '100 × 70 cm',
    locationInVilla: {
      'zh-TW': '1F 庭園早餐席廊',
      'en': '1F Garden Breakfast Terrace Corridor',
      'ja': '1階 朝食ダイニング回廊',
      'zh-CN': '1F 庭园早餐席廊'
    },
    description: {
      'zh-TW': '如絲綢般澄澈透明的碧綠泉水，木麻黃樹影倒映在湖面上，透出靜謐而詩意的台東自然底蘊。',
      'en': 'Ethereal turquoise springs reflecting casuarina trees in Taitung Forest Park, radiating serene poetic calm.',
      'ja': '台東森林公園の澄み渡る湧水と木立の影。穏やかで詩的な水彩画作品。',
      'zh-CN': '如丝绸般澄澈透明的碧绿泉水，木麻黄树影倒映在湖面上，透出静谧而诗意的台东自然底蕴。'
    },
    inspiration: {
      'zh-TW': '台東森林公園琵琶湖清晨無人之時的澄淨鏡面。',
      'en': 'The mirror-like surface of Pipa Lake at serene daybreak.',
      'ja': '誰もいない早朝の琵琶湖が見せる、神秘的な水鏡。',
      'zh-CN': '台东森林公园琵琶湖清晨无人之时的澄净镜面。'
    },
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1200&q=85',
    category: 'watercolor'
  }
];
