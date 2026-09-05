import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Navigation, Car, Train, Compass, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { NEARBY_ATTRACTIONS } from '../data/tangHomeData';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface LocationGuideSectionProps {
  currentLang: Language;
}

const GOOGLE_TRAVEL_MAP_URL = 'https://www.google.com/maps/d/u/0/viewer?mid=1o0gWhZJvUald58RAYBrCvTUdti3iGj4&ll=22.754385104003358%2C121.12019752380371&z=12';

export const LocationGuideSection: React.FC<LocationGuideSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.clientWidth || 340;
      const scrollAmount = direction === 'left' ? -cardWidth * 1.2 : cardWidth * 1.2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="location" className="scroll-mt-24 py-20 sm:py-28 bg-[#faf8f5] relative overflow-hidden border-t border-stone-200/90 text-[#1c1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#8c6d3f] text-[11px] font-medium tracking-[0.25em] uppercase mb-3 shadow-2xs">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.locationTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal mb-4 tracking-tight">
            {t.locationHeading}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            {t.locationSubtitle}
          </p>
        </div>

        {/* Highlight Banner: Tang Home Curated Travel Map */}
        <div className="mb-12 bg-white border border-stone-300/90 rounded-none p-6 sm:p-8 relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center space-x-2 text-[#8c6d3f] text-xs font-semibold tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>民宿主人親自走訪整理 ‧ 私房美食與景點</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                湯園專屬 ‧ 台東景點私房旅遊地圖
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-2xl">
                匯集台東在地必吃美食小吃、特色文創空間、私藏咖啡館與山海秘境，點擊即可即時同步至您的手機地圖，隨時隨地開啟即時導航與慢旅探索。
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={GOOGLE_TRAVEL_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#181614] text-[#d1b07c] hover:bg-[#2c2824] text-xs font-medium tracking-wider transition-colors shadow-xs group text-center whitespace-nowrap cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#d1b07c] group-hover:rotate-45 transition-transform duration-300 shrink-0" />
                <span className="whitespace-nowrap">開啟景點私房旅遊地圖</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d1b07c] shrink-0" />
              </a>

              <a
                href="https://maps.google.com/?q=台東縣台東市中興路一段225號"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-stone-300 text-stone-800 hover:bg-stone-100 text-xs font-medium transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#8c6d3f] shrink-0" />
                <span className="whitespace-nowrap">民宿導航 (中興路一段225號)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Transport Overview Box */}
        <div className="bg-white border border-stone-200 p-6 sm:p-8 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-full bg-[#f4f0e8] text-[#8c6d3f] shrink-0 border border-stone-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono block">
                  {t.addressLabel}
                </span>
                <h4 className="font-serif text-base text-stone-900 font-medium">
                  {t.addressValue}
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  座落於台東市中心，生活機能齊全且鬧中取靜。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-full bg-[#f4f0e8] text-[#8c6d3f] shrink-0 border border-stone-200">
                <Train className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono block">
                  鐵路與火車站抵達
                </span>
                <h4 className="font-serif text-base text-stone-900 font-medium">
                  台東火車站（車程約 10 分鐘）
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {t.airportShuttle}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-full bg-[#f4f0e8] text-[#8c6d3f] shrink-0 border border-stone-200">
                <Car className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono block">
                  自駕出遊 ‧ 免費停車
                </span>
                <h4 className="font-serif text-base text-stone-900 font-medium">
                  專屬私有平面停車場
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {t.privateParking}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions Cards - Horizontal Slider / 右滑選單 */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-[#8c6d3f]/10 text-[#8c6d3f]">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                  周邊私房景點與探索
                </h3>
                <span className="text-[11px] text-stone-500 font-sans">
                  向右滑動探索精選在地秘境 ‧ 共 {NEARBY_ATTRACTIONS.length} 處
                </span>
              </div>
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="向左滑動"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                  canScrollLeft
                    ? 'border-stone-400 bg-white text-stone-800 hover:bg-stone-900 hover:text-[#d1b07c] hover:border-stone-900 shadow-xs cursor-pointer'
                    : 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="向右滑動"
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                  canScrollRight
                    ? 'border-stone-400 bg-white text-stone-800 hover:bg-stone-900 hover:text-[#d1b07c] hover:border-stone-900 shadow-xs cursor-pointer'
                    : 'border-stone-200 bg-stone-100 text-stone-300 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Carousel Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar scrollbar-none focus:outline-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {NEARBY_ATTRACTIONS.map((attr) => (
              <div
                key={attr.id}
                className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 bg-white border border-stone-200 hover:border-[#8c6d3f]/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md snap-start"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={attr.image}
                    alt={attr.name[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-sans px-2.5 py-0.5 rounded-full font-medium">
                    {attr.category[currentLang]}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                    {attr.distance[currentLang]}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-serif text-lg text-stone-900 font-medium group-hover:text-[#8c6d3f] transition-colors leading-snug">
                      {attr.name[currentLang]}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light mt-1.5 line-clamp-3">
                      {attr.description[currentLang]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-[#8c6d3f] font-medium flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>台東在地精選</span>
                    </span>
                    <a
                      href={GOOGLE_TRAVEL_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-stone-500 hover:text-stone-900 font-medium flex items-center space-x-1 transition-colors"
                    >
                      <span>在地導航</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
