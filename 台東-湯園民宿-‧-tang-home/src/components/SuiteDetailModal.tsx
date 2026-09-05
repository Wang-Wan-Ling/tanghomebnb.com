import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Check,
  Phone,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { Language, Currency, RoomType } from '../types';
import { translations } from '../data/translations';
import { ROOM_TYPES } from '../data/tangHomeData';
import { formatPrice } from '../utils/currency';
import { openOwlNestBooking } from '../utils/owlnest';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface SuiteDetailModalProps {
  suite: RoomType | null;
  currentLang: Language;
  currentCurrency: Currency;
  onClose: () => void;
  onBook?: (roomId: string) => void;
  onSelectSuite?: (suite: RoomType) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({
  suite: initialSuite,
  currentLang,
  currentCurrency,
  onClose,
}) => {
  const [currentSuite, setCurrentSuite] = useState<RoomType | null>(initialSuite);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showFloorplan, setShowFloorplan] = useState(false);

  useEffect(() => {
    setCurrentSuite(initialSuite);
    setActiveImageIndex(0);
    setShowFloorplan(false);
  }, [initialSuite]);

  if (!currentSuite) return null;

  const t = translations[currentLang];
  const suite = currentSuite;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % suite.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + suite.images.length) % suite.images.length);
  };

  const handleDirectBook = () => {
    openOwlNestBooking({
      roomId: suite.id,
      lang: currentLang,
    });
  };

  // Other suites for "更多推薦" (More Recommendations)
  const otherSuites = ROOM_TYPES.filter((s) => s.id !== suite.id);

  return (
    <div
      id="suite-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 md:px-6 flex items-center justify-center">
        <div className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-200 text-[#1c1c1c] flex flex-col">
          {/* Top Header - Mandarin Oriental Breadcrumb & Navigation Bar */}
          <div className="bg-[#181614] text-[#e8e4dc] px-4 sm:px-8 py-4 border-b border-stone-800 flex items-center justify-between">
            {/* Breadcrumb & Brand Emblem */}
            <div className="flex items-center space-x-3">
              <TangHomeMountainIcon size={24} color="#d1b07c" />
              <div className="flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-light flex items-center space-x-1.5">
                  <span>首頁</span>
                  <span>/</span>
                  <span>台灣台東</span>
                  <span>/</span>
                  <span className="text-[#d1b07c] font-medium">典藏居所</span>
                </div>
                <span className="font-serif text-sm sm:text-base tracking-wider text-white font-normal">
                  台東 湯園民宿
                </span>
              </div>
            </div>

            {/* Top Right Action & Close */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleDirectBook}
                className="hidden sm:flex items-center space-x-1.5 bg-[#d1b07c] hover:bg-[#c4a067] text-[#181614] text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>預訂住宿</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                title="返回居所列表"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Container */}
          <div className="p-4 sm:p-8 md:p-10 space-y-10 bg-white">
            {/* 1. Ultra-Wide Photographic Carousel (Screenshot 2) */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-stone-900 group shadow-md">
              <img
                src={suite.images[activeImageIndex]}
                alt={suite.name[currentLang]}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Prev / Next Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all border border-white/20"
                title="上一張"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all border border-white/20"
                title="下一張"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {suite.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeImageIndex ? 'w-6 bg-[#d1b07c]' : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 2. Room Title, Spec Selector & Prominent Booking Bar (Screenshot 3) */}
            <div className="pt-2 pb-6 border-b border-stone-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#8c6d3f] font-semibold block mb-1">
                    客房規格與設施配置
                  </span>
                  <h1 className="font-serif text-2xl sm:text-4xl text-stone-900 font-normal">
                    {suite.name[currentLang]}
                  </h1>
                  <p className="text-sm text-stone-500 font-light mt-1.5">
                    {suite.tagline[currentLang]}
                  </p>
                </div>

                {/* Right: Quick Price & Direct OwlNest Button */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] text-stone-400 block font-light">平日特惠價</span>
                    <span className="font-serif text-2xl font-normal text-stone-900 tracking-tight">
                      {formatPrice(suite.basePriceTWD, currentCurrency)}
                    </span>
                    <span className="text-xs text-stone-400"> / 晚</span>
                  </div>

                  <button
                    onClick={handleDirectBook}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#181614] hover:bg-[#8c6d3f] text-white font-medium text-xs tracking-[0.2em] rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>預訂此房型</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bed & Guest Configuration Pill */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center space-x-2 bg-[#fbf9f5] border border-stone-200 px-4 py-2 rounded-xl text-xs text-stone-700">
                  <span className="font-medium text-stone-900">配置：</span>
                  <span>{suite.bedType[currentLang]}</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-[#fbf9f5] border border-stone-200 px-4 py-2 rounded-xl text-xs text-stone-700">
                  <span className="font-medium text-stone-900">入住上限：</span>
                  <span>最多 {suite.maxGuests} 位貴賓</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-[#fbf9f5] border border-stone-200 px-4 py-2 rounded-xl text-xs text-stone-700">
                  <span className="font-medium text-stone-900">設施：</span>
                  <span>全棟室內電梯直達</span>
                </div>
              </div>
            </div>

            {/* 3. Detailed Information Section (Screenshot 3) */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                  詳細資訊
                </h2>

                <button
                  onClick={() => setShowFloorplan(!showFloorplan)}
                  className="text-xs text-[#8c6d3f] hover:text-stone-900 flex items-center space-x-1 transition-colors font-medium"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>平面圖</span>
                  {showFloorplan ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Architectural Floorplan Expandable Card */}
              {showFloorplan && (
                <div className="p-6 bg-[#fbf9f5] border border-stone-200 rounded-2xl space-y-3 animate-in fade-in duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-[#8c6d3f] font-semibold block">
                    空間格局與建築說明
                  </span>
                  <h4 className="font-serif text-base text-stone-900">{suite.name[currentLang]}</h4>
                  <ul className="space-y-1.5 text-xs text-stone-600 font-light">
                    <li>• 室內實際使用面積：約 {suite.sizeSqm} 平方公尺 (約 {Math.round(suite.sizeSqm * 10.764)} 平方呎)</li>
                    <li>• 格局配置：獨立臥室起居區、乾濕分離衛浴、全套免治洗淨便座、採光窗</li>
                    <li>• 全棟配備室內無障礙電梯直達，長輩與大件行李進出輕鬆無憂</li>
                  </ul>
                </div>
              )}

              {/* Editorial Description */}
              <p className="text-sm sm:text-base text-stone-600 font-light leading-[1.8] max-w-4xl">
                {suite.description[currentLang]}
              </p>

              {/* Space & View Pill Bar */}
              <div className="text-xs text-stone-500 font-light tracking-wide pt-2">
                <span>{suite.sizeSqm} 平方米 / {Math.round(suite.sizeSqm * 10.764)} 平方呎</span>
                <span className="mx-2 text-stone-300">|</span>
                <span>{suite.view[currentLang]}</span>
              </div>
            </div>

            {/* 4. Dual-Column Features & Amenities Grid (Screenshot 3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-6 border-t border-stone-200">
              {/* Left Column: 精選項目包括 */}
              <div className="space-y-4">
                <h3 className="font-serif text-base sm:text-lg text-stone-900 font-medium">
                  精選項目包括
                </h3>
                <ul className="space-y-3">
                  {suite.features[currentLang].map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>每日活力精緻手作早餐 (依入住房客人數免費提供)</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>館內自助洗衣空間與免費自行車借用服務</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: 設施包括 */}
              <div className="space-y-4">
                <h3 className="font-serif text-base sm:text-lg text-stone-900 font-medium">
                  設施包括
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>全套免治溫水洗淨便座</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>乾濕分離獨立淋浴衛浴空間</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>全棟設有無障礙室內電梯直達各樓層</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>高畫質液晶電視、客房靜音小冰箱、電熱水壺</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>獨立分離式變頻冷暖空調、專業吹風機</span>
                  </li>
                  <li className="flex items-start space-x-3 text-xs sm:text-sm text-stone-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-2 shrink-0" />
                    <span>館內自助洗衣空間、專屬免費平面停車場</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. More Recommendations (更多推薦 - Screenshot 4) */}
            <div className="pt-10 border-t border-stone-200 space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                更多推薦
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherSuites.slice(0, 3).map((recSuite) => (
                  <div
                    key={recSuite.id}
                    onClick={() => {
                      setCurrentSuite(recSuite);
                      setActiveImageIndex(0);
                      setShowFloorplan(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-[#fbf9f5] border border-stone-200 hover:border-[#8c6d3f] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={recSuite.images[0]}
                        alt={recSuite.name[currentLang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-base text-stone-900 group-hover:text-[#8c6d3f] transition-colors font-normal leading-tight mb-1">
                          {recSuite.name[currentLang]}
                        </h4>
                        <p className="text-xs text-stone-500 font-light line-clamp-1 mb-2">
                          約 {recSuite.sizeSqm} ㎡ ‧ {recSuite.tagline[currentLang]}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-stone-200/80">
                        <span className="font-serif text-sm font-medium text-stone-900">
                          {formatPrice(recSuite.basePriceTWD, currentCurrency)} <span className="text-[10px] text-stone-400 font-light">起</span>
                        </span>
                        <span className="text-xs text-[#8c6d3f] group-hover:underline flex items-center space-x-0.5">
                          <span>查看</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Final Booking Callout */}
            <div className="bg-[#fbf9f5] border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8c6d3f] font-semibold block mb-1">
                  官方即時預訂 ‧ 奧丁丁即時同步
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-stone-900 font-normal">
                  現在預訂 {suite.name[currentLang]}
                </h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">
                  享有最優惠保證價格、私廚早餐與專屬車位
                </p>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-5 py-3 text-xs text-stone-600 hover:text-stone-900 border border-stone-300 rounded-xl transition-colors font-medium bg-white"
                >
                  關閉
                </button>
                <button
                  onClick={handleDirectBook}
                  className="flex-1 sm:flex-none px-7 py-3 bg-[#8c6d3f] hover:bg-[#775a30] text-white font-medium text-xs tracking-wider rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>立即預訂</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
