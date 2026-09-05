import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, BedDouble, Utensils, Accessibility, Compass, MapPin, Ship, Car, ArrowUpRight } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface DiscoverTaitungSliderProps {
  currentLang: Language;
  currentCurrency: Currency;
  onSelectSuiteCategory?: (cat: string) => void;
  onOpenBooking: (params?: { roomId?: string }) => void;
  onOpenConcierge?: () => void;
}

export const DiscoverTaitungSlider: React.FC<DiscoverTaitungSliderProps> = ({
  currentLang,
  currentCurrency,
  onSelectSuiteCategory,
  onOpenBooking,
  onOpenConcierge,
}) => {
  const t = translations[currentLang];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Discover Taitung & Tang Home Highlights Items
  const highlights = [
    {
      id: 'highlight-suites',
      badge: currentLang === 'en' ? 'ACCOMMODATION' : currentLang === 'ja' ? '客室' : '精選居所',
      title: currentLang === 'en' ? 'Refined Suites & Rooms' : currentLang === 'ja' ? '洗練された客室' : '五大溫馨質感客房',
      subtitle: currentLang === 'en' ? 'From couple rooms to 6-guest family suites with elevator access' : currentLang === 'ja' ? 'カップルから6名様ファミリーまで快適な空間' : '全館配置室內電梯與全套免治馬桶，格局溫馨雅致。',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=88',
      icon: BedDouble,
      tag: '5 大房型 ‧ 電梯直達',
      actionType: 'scroll-suites',
      actionLabel: currentLang === 'en' ? 'Explore Suites' : currentLang === 'ja' ? '客室を見る' : '探索客房',
    },
    {
      id: 'highlight-breakfast',
      badge: currentLang === 'en' ? 'DINING' : currentLang === 'ja' ? '手作り朝食' : '元氣晨光',
      title: currentLang === 'en' ? 'Handcrafted Daily Breakfast' : currentLang === 'ja' ? '手作りヘルシー朝食' : '每日手作私廚朝食',
      subtitle: currentLang === 'en' ? 'Freshly toasted panini, Chulu fresh milk, and seasonal fruits' : currentLang === 'ja' ? '出来立てホットサンドや初鹿牧場ミルク' : '現作熱壓吐司、台東初鹿鮮乳與手沖研磨咖啡，活力滿滿。',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=88',
      icon: Utensils,
      tag: '房客專屬 ‧ 免費享用',
      actionType: 'scroll-dining',
      actionLabel: currentLang === 'en' ? 'Breakfast Menu' : currentLang === 'ja' ? '朝食の詳細' : '品味晨光',
    },
    {
      id: 'highlight-elevator',
      badge: currentLang === 'en' ? 'ACCESSIBILITY' : currentLang === 'ja' ? 'バリアフリー' : '無障礙',
      title: currentLang === 'en' ? 'Indoor Elevator & Comfort' : currentLang === 'ja' ? '館内エレベーター完備' : '全棟室內電梯無障礙',
      subtitle: currentLang === 'en' ? 'Effortless access for families, heavy luggage, and elderly guests' : currentLang === 'ja' ? '三世代旅行やお荷物の多いお客様も安心' : '室內電梯直達各樓層，長輩出行與重裝行李出入輕鬆優雅。',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88',
      icon: Accessibility,
      tag: '長輩友善 ‧ 親子出遊',
      actionType: 'scroll-philosophy',
      actionLabel: currentLang === 'en' ? 'Learn More' : currentLang === 'ja' ? '施設案内' : '設施詳情',
    },
    {
      id: 'highlight-tiehua',
      badge: currentLang === 'en' ? 'DISCOVER' : currentLang === 'ja' ? '台東を発見' : '發現台東',
      title: currentLang === 'en' ? 'Tiehua Music Village' : currentLang === 'ja' ? '鐵花村音楽集落' : '鐵花村音樂聚落',
      subtitle: currentLang === 'en' ? 'Vibrant lantern sea, live indigenous music, and craft markets' : currentLang === 'ja' ? '彩り豊かな気球ランタンの光と心地よい音楽' : '車程僅 6 分鐘，漫步彩繪熱氣球燈海與文創慢活市集。',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=88',
      icon: Compass,
      tag: '車程 6 分 ‧ 夜間首選',
      actionType: 'scroll-location',
      actionLabel: currentLang === 'en' ? 'Guide Details' : currentLang === 'ja' ? '観光案内' : '探索周邊',
    },
    {
      id: 'highlight-forest-park',
      badge: currentLang === 'en' ? 'NATURE' : currentLang === 'ja' ? '自然とレジャー' : '自然慢活',
      title: currentLang === 'en' ? 'Forest Park & Pipa Lake' : currentLang === 'ja' ? '森林公園サイクリング' : '台東森林公園 ‧ 琵琶湖',
      subtitle: currentLang === 'en' ? 'Complimentary bicycles to cycle through the lush black forest' : currentLang === 'ja' ? '無料レンタサイクルで巡る心地よい自然' : '免費提供變速單車，穿梭黑森林木棧道與琵琶湖綠意。',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=88',
      icon: MapPin,
      tag: '免費單車 ‧ 綠意悠遊',
      actionType: 'scroll-experiences',
      actionLabel: currentLang === 'en' ? 'View Route' : currentLang === 'ja' ? 'コースを見る' : '單車路線',
    },
    {
      id: 'highlight-google-map',
      badge: currentLang === 'en' ? 'GOOGLE MAP' : currentLang === 'ja' ? '私房マップ' : '私房地圖',
      title: currentLang === 'en' ? 'Tang Home Curated Travel Map' : currentLang === 'ja' ? '湯園特製 Google 観光マップ' : '湯園專屬 ‧ 台東 Google 私房地圖',
      subtitle: currentLang === 'en' ? 'Handpicked local eateries, specialty cafes, and scenic hidden gems with instant mobile navigation' : currentLang === 'ja' ? '地元ローカルグルメやカフェ、絶景スポットをワンタップナビ' : '民宿主人親訪精選必吃小吃、私藏咖啡廳與山海秘境，一鍵開啟手機導航。',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=88',
      icon: Compass,
      tag: '私房美食 ‧ 一鍵導航',
      actionType: 'google-map',
      actionLabel: currentLang === 'en' ? 'Open Google Map' : currentLang === 'ja' ? 'マップを開く' : '開啟私房地圖',
    },
    {
      id: 'highlight-parking',
      badge: currentLang === 'en' ? 'PARKING' : currentLang === 'ja' ? '無料駐車場' : '停車無憂',
      title: currentLang === 'en' ? 'Complimentary On-Site Parking' : currentLang === 'ja' ? '専用無料平面駐車場完備' : '專屬私有平面停車場',
      subtitle: currentLang === 'en' ? 'Dedicated parking lot at the villa, making self-drive easy' : currentLang === 'ja' ? '敷地内にゆったり停められる無料駐車場完備' : '專屬平面車位隨到隨停，免除市區尋位煩惱。',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=88',
      icon: Car,
      tag: '自駕首選 ‧ 專屬車位',
      actionType: 'scroll-location',
      actionLabel: currentLang === 'en' ? 'Location Info' : currentLang === 'ja' ? 'アクセス' : '交通指南',
    },
  ];

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
      
      const itemWidth = 340;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, highlights.length - 1));
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleAction = (item: typeof highlights[0]) => {
    if (item.actionType === 'scroll-suites') {
      const el = document.getElementById('suites');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.actionType === 'scroll-dining') {
      const el = document.getElementById('dining');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.actionType === 'scroll-philosophy') {
      const el = document.getElementById('philosophy');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.actionType === 'scroll-location') {
      const el = document.getElementById('location');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.actionType === 'scroll-experiences') {
      const el = document.getElementById('experiences');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.actionType === 'google-map') {
      window.open('https://www.google.com/maps/d/u/0/viewer?mid=1o0gWhZJvUald58RAYBrCvTUdti3iGj4&ll=22.754385104003358%2C121.12019752380371&z=12', '_blank', 'noopener,noreferrer');
    } else if (item.actionType === 'concierge' && onOpenConcierge) {
      onOpenConcierge();
    } else {
      onOpenBooking();
    }
  };

  return (
    <section id="discover-taitung" className="py-14 sm:py-20 bg-[#faf8f5] text-[#1c1c1c] relative overflow-hidden border-t border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#8c6d3f] text-[11px] font-medium tracking-[0.25em] uppercase mb-3 shadow-2xs">
              <TangHomeMountainIcon size={16} color="#8c6d3f" />
              <span>發現台東</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1c1917] font-normal tracking-tight leading-tight">
              發現台東 ‧ 旅人精選指南
            </h2>
            <p className="text-sm text-stone-500 font-light mt-2 leading-relaxed">
              從五大質感居所、手作朝食到在地私房景致，鋪陳從容慢活篇章。
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? 'border-stone-300 bg-white text-stone-800 hover:bg-stone-900 hover:text-white shadow-xs'
                  : 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed'
              }`}
              title="向左滑動"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? 'border-stone-300 bg-white text-stone-800 hover:bg-stone-900 hover:text-white shadow-xs'
                  : 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed'
              }`}
              title="向右滑動"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Sliding Menu (Mandarin Oriental Style) */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollState}
          className="flex space-x-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleAction(item)}
                className="group relative flex-shrink-0 w-[290px] sm:w-[340px] md:w-[360px] bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer snap-start flex flex-col"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8c6d3f] text-[10px] font-bold tracking-wider uppercase border border-stone-200/70 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                    <span className="text-[11px] font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                      {item.tag}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/90 group-hover:bg-[#8c6d3f] text-stone-900 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card Editorial Content */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center space-x-2 text-[#8c6d3f] mb-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-[11px] font-semibold tracking-wider">TANG HOME EXPERIENCE</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-stone-900 group-hover:text-[#8c6d3f] transition-colors leading-snug mb-2 font-normal">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-900 group-hover:text-[#8c6d3f] transition-colors inline-flex items-center space-x-1">
                      <span>{item.actionLabel}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">0{idx + 1} / 0{highlights.length}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Indicator Dots */}
        <div className="flex items-center justify-center space-x-1.5 mt-6">
          {highlights.map((_, idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-6 bg-[#8c6d3f]' : 'w-1.5 bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
