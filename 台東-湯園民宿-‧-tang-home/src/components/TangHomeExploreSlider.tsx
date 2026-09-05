import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, BedDouble, Sprout, Palette, Compass, MapPin, Ship, ArrowUpRight, Check } from 'lucide-react';
import { Language, Currency, RoomType } from '../types';
import { ROOM_TYPES } from '../data/tangHomeData';
import { openOwlNestBooking } from '../utils/owlnest';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface TangHomeExploreSliderProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenExploreAll: () => void;
  onSelectSuiteDetails: (suite: RoomType) => void;
  onOpenArtGallery: (artworkId?: string) => void;
  onOpenBespoke: (serviceId?: string) => void;
  onOpenConcierge: () => void;
}

export const TangHomeExploreSlider: React.FC<TangHomeExploreSliderProps> = ({
  currentLang,
  currentCurrency,
  onOpenExploreAll,
  onSelectSuiteDetails,
  onOpenArtGallery,
  onOpenBespoke,
  onOpenConcierge,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCategory, setActiveCategory] = useState<'all' | 'farm' | 'art' | 'dining' | 'taitung' | 'business'>('all');
  const [activeIndex, setActiveIndex] = useState(0);

  // Curated explore items with clear logical categories (Farm, Art, Dining, Roam, Business)
  const exploreItems = [
    {
      id: 'item-farm-breakfast',
      category: 'farm',
      badge: '自有農莊 ‧ 產地直送',
      title: '生態農場 ‧ 晨光朝食',
      subtitle: '湯園專屬有機農地，每日清晨現採帶露鮮蔬，搭配台東初鹿牧場鮮乳與手作熱壓吐司，純淨純粹。',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=88',
      tag: '房客專屬 ‧ 免費朝食',
      primaryBtn: '了解農場',
      secondaryBtn: '查看朝食',
      onPrimary: onOpenExploreAll,
      onSecondary: onOpenExploreAll,
    },
    {
      id: 'item-art-gallery',
      category: 'art',
      badge: '館藏真跡 ‧ 常設展出',
      title: '藝術名家 ‧ 館藏畫作',
      subtitle: '特邀台東在地畫家陳郁文駐館創作，展出《都蘭山晨嵐》、《太平洋之藍》等山海巨幅真跡油畫。',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=88',
      tag: '私人美術館級 ‧ 沉浸美學',
      primaryBtn: '進入藝廊',
      secondaryBtn: '欣賞畫作',
      onPrimary: () => onOpenArtGallery(),
      onSecondary: () => onOpenArtGallery('art-dulan-morning-mist'),
    },
    {
      id: 'item-private-chef-dining',
      category: 'dining',
      badge: '預約專享',
      title: '台東在地私廚',
      subtitle: '台東在地私廚，須提前三個月預約。嚴選在地當季海陸食材與自家農場新鮮蔬果，打造專屬桌邊饗宴。',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=88',
      tag: '須提前三個月預約',
      primaryBtn: '預約私廚',
      secondaryBtn: '查看須知',
      onPrimary: () => onOpenBespoke('private-chef-dining'),
      onSecondary: () => onOpenBespoke('private-chef-dining'),
    },
    {
      id: 'item-google-travel-map',
      category: 'taitung',
      badge: '私房名單 ‧ 一鍵導航',
      title: '私房尋味 ‧ 景點地圖',
      subtitle: '民宿主人親訪整理必吃在地小吃、特色咖啡館、手作聚落與秘境，點擊即時在手機地圖開啟導航。',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=88',
      tag: '私房名單 ‧ 一鍵導航',
      primaryBtn: '開啟私房地圖',
      secondaryBtn: '行程諮詢',
      onPrimary: () => window.open('https://www.google.com/maps/d/u/0/viewer?mid=1o0gWhZJvUald58RAYBrCvTUdti3iGj4&ll=22.754385104003358%2C121.12019752380371&z=12', '_blank', 'noopener,noreferrer'),
      onSecondary: onOpenConcierge,
    },
    {
      id: 'item-ferry-booking',
      category: 'taitung',
      badge: '凱旋客輪 ‧ 尊享代訂',
      title: '海島啟程 ‧ 船票代訂',
      subtitle: '房客專屬代訂凱旋客輪船票（台東富岡 ⇄ 綠島南寮 / 蘭嶼開元），省去繁瑣手續與排隊取票時間。',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=88',
      tag: '房客尊榮 ‧ 快速通關',
      primaryBtn: '即時查詢船班',
      secondaryBtn: '代訂票價',
      onPrimary: () => window.open('https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05', '_blank', 'noopener,noreferrer'),
      onSecondary: () => onOpenBespoke('ferry-ticket-booking'),
    },
    {
      id: 'item-tiehua-music',
      category: 'taitung',
      badge: '市區慢活 ‧ 車程 6 分',
      title: '微風樂音 ‧ 鐵花市集',
      subtitle: '漫步彩繪熱氣球燈海與手作藝品市集，沉浸於現場音樂歌聲與縱谷悠閒夜色。',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=88',
      tag: '文創燈海 ‧ 夜間首選',
      primaryBtn: '行程指引',
      secondaryBtn: '諮詢管家',
      onPrimary: onOpenExploreAll,
      onSecondary: onOpenConcierge,
    },
    {
      id: 'item-forest-park',
      category: 'taitung',
      badge: '免費單車 ‧ 綠意悠遊',
      title: '黑森林境 ‧ 琵琶湧泉',
      subtitle: '民宿免費提供多段變速單車，穿梭於木麻黃黑森林木棧道與清澈碧綠的琵琶湖天然湧泉。',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=88',
      tag: '天然湧泉 ‧ 單車綠徑',
      primaryBtn: '路線導覽',
      secondaryBtn: '借用單車',
      onPrimary: onOpenExploreAll,
      onSecondary: onOpenConcierge,
    },
    {
      id: 'item-business-travel',
      category: 'business',
      badge: '企業特約 ‧ 統編收據',
      title: '商務合作 ‧ 平日專案',
      subtitle: '歡迎各機關團體、商務人士平日洽公入住，我們提供專屬合約優惠價、合法收據統編開立及便利停車。',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=88',
      tag: '平日出差 ‧ 開立免用統編收據',
      primaryBtn: '商務優惠 LINE 洽詢',
      secondaryBtn: '適用須知',
      onPrimary: () => window.open('https://line.me/ti/p/~@tang225', '_blank', 'noopener,noreferrer'),
      onSecondary: () => onOpenBespoke('business-travel-package'),
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? exploreItems
    : exploreItems.filter((item) => item.category === activeCategory);

  const categoryTabs = [
    { id: 'all', label: '全部' },
    { id: 'farm', label: '農場' },
    { id: 'art', label: '藝術' },
    { id: 'dining', label: '私廚' },
    { id: 'taitung', label: '漫遊' },
    { id: 'business', label: '商務合作' },
  ];

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      const itemWidth = 360;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, filteredItems.length - 1));
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 390;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="explore-slider" className="py-16 sm:py-24 bg-[#faf8f5] text-[#1c1917] border-t border-b border-stone-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header with Clean Literary Title (≤ 5 characters) */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-2 border-b border-stone-200 gap-4">
          <div className="flex items-baseline space-x-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-normal tracking-tight">
              漫遊探索
            </h2>
            <button
              onClick={onOpenExploreAll}
              className="text-xs sm:text-sm font-serif tracking-wider text-stone-700 hover:text-[#8c6d3f] transition-colors flex items-center space-x-1 group cursor-pointer"
            >
              <span>檢視全部</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Header Navigation Arrows */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'border-stone-300 bg-white text-stone-800 hover:bg-stone-900 hover:text-white shadow-xs cursor-pointer'
                  : 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed opacity-40'
              }`}
              title="向左滑動"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'border-stone-300 bg-white text-stone-800 hover:bg-stone-900 hover:text-white shadow-xs cursor-pointer'
                  : 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed opacity-40'
              }`}
              title="向右滑動"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean Category Filter Tabs with Active Solid Underline (No Oval Pills) */}
        <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto pb-1 mb-6 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`pb-2.5 text-sm sm:text-base tracking-wide whitespace-nowrap transition-all duration-200 relative cursor-pointer ${
                  isActive
                    ? 'text-stone-950 font-semibold'
                    : 'text-stone-500 hover:text-stone-900 font-normal'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[2.5px] bg-stone-950 rounded-xs" />
                )}
              </button>
            );
          })}
        </div>

        {/* Horizontal Card Sliding Menu (Square Frame with Rounded Pill Buttons) */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollState}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative flex-shrink-0 w-[300px] sm:w-[350px] md:w-[370px] bg-white rounded-none border border-stone-200 hover:border-stone-400 shadow-xs hover:shadow-xl transition-all duration-500 snap-start flex flex-col justify-between"
            >
              {/* Card Image Frame (Square Aesthetic) */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/15 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8c6d3f] text-[10px] font-bold tracking-widest uppercase border border-stone-200 shadow-xs">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                  <span className="text-[11px] font-medium bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-sm border border-white/20">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Body with Clean Typography */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 group-hover:text-[#8c6d3f] transition-colors leading-snug mb-2 font-normal">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Rounded Pill Action Buttons (選紐圓角) */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={item.onSecondary}
                    className="px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 bg-white text-stone-800 text-xs font-medium tracking-wider transition-colors shadow-2xs hover:bg-stone-50"
                  >
                    {item.secondaryBtn}
                  </button>

                  <button
                    onClick={item.onPrimary}
                    className="px-4 py-2 rounded-full bg-[#181614] hover:bg-[#8c6d3f] text-white text-xs font-semibold tracking-wider transition-colors shadow-2xs"
                  >
                    {item.primaryBtn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center space-x-1.5 mt-2">
          {filteredItems.map((_, idx) => (
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
