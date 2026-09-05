import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Calendar, ArrowRight, Eye, Layers } from 'lucide-react';
import { Language, Currency, RoomType } from '../types';
import { translations } from '../data/translations';
import { ROOM_TYPES } from '../data/tangHomeData';
import { formatPrice } from '../utils/currency';
import { openOwlNestBooking } from '../utils/owlnest';

interface SuitesSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onSelectSuiteDetails: (room: RoomType) => void;
  onBookSuite?: (roomId: string) => void;
  onViewAllSuites?: () => void;
}

// Single Room Card with Multi-Photo Carousel
const SuiteCard: React.FC<{
  suite: RoomType;
  currentLang: Language;
  currentCurrency: Currency;
  onSelectDetails: () => void;
}> = ({ suite, currentLang, currentCurrency, onSelectDetails }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = suite.images && suite.images.length > 0 ? suite.images : ['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85'];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDirectBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    openOwlNestBooking({ roomId: suite.id, lang: currentLang });
  };

  return (
    <div
      onClick={onSelectDetails}
      className="group w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-start flex flex-col bg-white border border-stone-200/90 hover:border-stone-400 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-none"
    >
      {/* 1. Multi-Photo Showcase Box with Interactive Slider */}
      <div className="relative aspect-[16/11] overflow-hidden bg-stone-100 select-none">
        <img
          src={images[photoIndex]}
          alt={`${suite.name[currentLang]} - 照片 ${photoIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Top & Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center space-x-2 pointer-events-none">
          <span className="bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 border border-white/15">
            {suite.category === 'family' ? '家庭客房' : '雙人客房'}
          </span>
          {suite.featured && (
            <span className="bg-[#8c6d3f] text-white text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 flex items-center space-x-1 shadow-2xs">
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>人氣推薦</span>
            </span>
          )}
        </div>

        {/* Photo Index Counter Badge */}
        <div className="absolute top-3 right-3 pointer-events-none">
          <span className="bg-black/60 backdrop-blur-md text-white/90 text-[10px] tracking-wider px-2 py-0.5 border border-white/10 font-mono">
            {photoIndex + 1} / {images.length}
          </span>
        </div>

        {/* Multi-Photo Left/Right Chevrons (Hover visible) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevPhoto}
              aria-label="上一張照片"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs duration-200 shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextPhoto}
              aria-label="下一張照片"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs duration-200 shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Photo Navigation Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center space-x-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  photoIndex === idx
                    ? 'w-5 h-1.5 bg-white shadow-sm'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`切換至第 ${idx + 1} 張照片`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Suite Content Box - Mandarin Oriental Clean & Refined Aesthetic */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Room Title */}
          <h3 className="font-serif text-xl sm:text-[22px] text-stone-900 group-hover:text-[#8c6d3f] transition-colors font-normal leading-snug mb-2">
            {suite.name[currentLang]}
          </h3>

          {/* Tagline / Brief Description */}
          <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed mb-4 line-clamp-2">
            {suite.tagline[currentLang]}
          </p>

          {/* Clean Specs Row (Clean, NO Floor Info) */}
          <div className="flex flex-wrap items-center gap-y-1 text-xs text-stone-600 pb-4 mb-4 border-b border-stone-100 font-light">
            <span className="font-medium text-stone-800">約 {suite.sizeSqm} ㎡</span>
            <span className="mx-2 text-stone-300">·</span>
            <span>最多 {suite.maxGuests} 位貴賓</span>
            <span className="mx-2 text-stone-300">·</span>
            <span className="text-stone-600 truncate">{suite.bedType[currentLang]}</span>
          </div>
        </div>

        {/* 3. Pricing and Rounded Inner Action Buttons */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase tracking-wider font-light">平日特惠價</span>
              <div className="flex items-baseline space-x-1">
                <span className="font-serif text-2xl font-normal text-stone-900 tracking-tight">
                  {formatPrice(suite.basePriceTWD, currentCurrency)}
                </span>
                <span className="text-xs text-stone-400">/ 晚</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-stone-400 block uppercase tracking-wider font-light">假日特惠價</span>
              <span className="text-xs text-stone-600 font-serif">
                {formatPrice(suite.weekendPriceTWD, currentCurrency)} / 晚
              </span>
            </div>
          </div>

          {/* Inner Buttons with Rounded Styling */}
          <div className="flex items-center space-x-3 pt-2 border-t border-stone-100">
            <button
              id={`btn-details-${suite.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelectDetails();
              }}
              className="flex-1 py-2.5 px-4 rounded-full border border-stone-300 hover:border-stone-800 text-stone-800 hover:text-stone-950 text-xs font-medium tracking-wider transition-colors text-center bg-white"
            >
              詳細資訊
            </button>

            <button
              id={`btn-book-${suite.id}`}
              onClick={handleDirectBook}
              className="flex-1 py-2.5 px-4 rounded-full bg-black hover:bg-stone-800 text-white text-xs font-medium tracking-wider transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>即時預訂</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SuitesSection: React.FC<SuitesSectionProps> = ({
  currentLang,
  currentCurrency,
  onSelectSuiteDetails,
  onViewAllSuites,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'suite' | 'family'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredSuites = ROOM_TYPES.filter((suite) => {
    if (activeFilter === 'all') return true;
    return suite.category === activeFilter;
  });

  const filterTabs = [
    { key: 'all' as const, label: '檢視全部' },
    { key: 'suite' as const, label: '雙人客房' },
    { key: 'family' as const, label: '家庭客房' },
  ];

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [filteredSuites]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="suites" className="scroll-mt-24 py-20 sm:py-24 bg-[#fbf9f5] border-t border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Mandarin Oriental Style Clean Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-2 border-b border-stone-200 gap-4">
          <div className="flex items-baseline space-x-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-normal tracking-tight">
              住宿
            </h2>
            {onViewAllSuites && (
              <button
                onClick={onViewAllSuites}
                className="text-xs sm:text-sm font-serif text-stone-700 hover:text-[#8c6d3f] flex items-center space-x-1 tracking-wider transition-colors group cursor-pointer"
              >
                <span>檢視全部</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Desktop Left/Right Navigation Chevrons */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="向左滾動"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                canScrollLeft
                  ? 'border-stone-300 text-stone-800 hover:bg-stone-100 cursor-pointer'
                  : 'border-stone-200 text-stone-300 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="向右滾動"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                canScrollRight
                  ? 'border-stone-300 text-stone-800 hover:bg-stone-100 cursor-pointer'
                  : 'border-stone-200 text-stone-300 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. Clean Text Tabs with Active Solid Underline (No Oval Pills) */}
        <div className="flex items-center space-x-6 sm:space-x-10 mb-8 overflow-x-auto scrollbar-none pb-1">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
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

        {/* 3. Horizontal Scrollable Cards Slider with Multi-Photo browsing */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredSuites.map((suite) => (
            <SuiteCard
              key={suite.id}
              suite={suite}
              currentLang={currentLang}
              currentCurrency={currentCurrency}
              onSelectDetails={() => onSelectSuiteDetails(suite)}
            />
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light pt-4 border-t border-stone-200/60 gap-3">
          <div className="flex items-center space-x-4">
            <span>• 全房型配置室內電梯無障礙直達</span>
            <span>• 恆溫洗淨便座與乾濕分離衛浴</span>
            <span>• 館內設有自助洗衣烘衣間與免費單車借用</span>
          </div>

          <div className="flex items-center space-x-2 text-stone-400">
            <span>← 滑動探索更多房型 →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
