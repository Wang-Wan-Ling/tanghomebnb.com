import React, { useState } from 'react';
import { X, BedDouble, Sprout, Palette, MapPin, Compass, ArrowUpRight, CheckCircle2, ChevronRight, Phone, MessageCircle, UtensilsCrossed, Briefcase } from 'lucide-react';
import { Language, Currency, RoomType } from '../types';
import { ROOM_TYPES } from '../data/tangHomeData';
import { ARTWORKS_DATA, ARTIST_PROFILES } from '../data/artGalleryData';
import { SPECIAL_SERVICES } from '../data/specialServicesData';
import { openOwlNestBooking } from '../utils/owlnest';
import { CorporateTravelTable } from './CorporateTravelTable';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface ExploreAllViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currentCurrency: Currency;
  onSelectSuite?: (suite: RoomType) => void;
  onOpenArtGallery?: (artId?: string) => void;
  onOpenBespoke?: (serviceId?: string) => void;
}

export const ExploreAllViewModal: React.FC<ExploreAllViewModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  currentCurrency,
  onSelectSuite,
  onOpenArtGallery,
  onOpenBespoke,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'farm' | 'art' | 'dining' | 'taitung' | 'business'>('all');

  if (!isOpen) return null;

  const farmData = SPECIAL_SERVICES.find((s) => s.id === 'tang-organic-farm') || SPECIAL_SERVICES[0];
  const privateChefData = SPECIAL_SERVICES.find((s) => s.id === 'private-chef-dining');

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'farm', label: '農場' },
    { id: 'art', label: '藝術' },
    { id: 'dining', label: '私廚' },
    { id: 'taitung', label: '漫遊' },
    { id: 'business', label: '商務合作' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-[#fdfcf9] text-[#1c1917] rounded-2xl shadow-2xl border border-stone-300/80 overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#181614] text-[#f5f2eb] px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center space-x-3">
            <TangHomeMountainIcon size={26} color="#d1b07c" />
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#d1b07c] font-medium block">
                探索湯園
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-normal text-stone-100">
                慢活探索
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            title="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Underline Tabs (No Oval Pills) */}
        <div className="bg-[#121110] px-6 pt-3 pb-0 border-b border-stone-800 flex items-center space-x-6 sm:space-x-8 overflow-x-auto shrink-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`pb-3 text-xs sm:text-sm font-medium tracking-wider transition-all whitespace-nowrap relative cursor-pointer ${
                  isActive
                    ? 'text-[#d1b07c] font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#d1b07c]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 flex-1">
          {/* Section 1: Organic Eco-Farm & Farm Breakfast */}
          {(activeCategory === 'all' || activeCategory === 'farm') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <div className="flex items-center space-x-2 text-[#8c6d3f]">
                  <Sprout className="w-4 h-4" />
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                    湯園專屬生態農場 ‧ 自耕作物與晨光私廚
                  </h4>
                </div>
                <span className="text-xs text-[#8c6d3f] font-mono">產地直送 ‧ 房客專屬免費朝食</span>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-none grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-sm bg-stone-100">
                  <img
                    src={farmData.image}
                    alt={farmData.title[currentLang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-sm">
                    台東純淨無毒自然農法耕作
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <span className="text-[11px] font-bold text-[#8c6d3f] uppercase tracking-widest block">
                    OUR ORGANIC ECO-FARM
                  </span>
                  <h5 className="font-serif text-2xl text-stone-900 font-normal">
                    從產地到餐桌，只有一刻鐘的距離
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    湯園在台東擁有專屬耕作農地，堅持友善自然農法，栽種無農藥時令鮮蔬、香草與在地特色果物。每日清晨現採帶有朝露的生菜，搭配在地初鹿鮮乳與手工烘焙吐司，為每位房客獻上純淨有溫度的晨光元氣。
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 pt-2 font-light">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>每日清晨現摘有機時令鮮蔬</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>台東初鹿牧場在地鮮乳</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>現烤手工熱壓酥脆吐司</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>冷熱研磨咖啡與高山冷泡茶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Art Gallery & Exhibition */}
          {(activeCategory === 'all' || activeCategory === 'art') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <div className="flex items-center space-x-2 text-[#8c6d3f]">
                  <Palette className="w-4 h-4" />
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                    湯園常設藝廊 ‧ 在地藝術家典藏展
                  </h4>
                </div>
                <button
                  onClick={() => {
                    if (onOpenArtGallery) onOpenArtGallery();
                  }}
                  className="text-xs text-[#8c6d3f] hover:underline font-medium inline-flex items-center space-x-1"
                >
                  <span>進入藝廊專屬展廳</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ARTWORKS_DATA.slice(0, 3).map((art) => (
                  <div
                    key={art.id}
                    className="bg-white border border-stone-200 rounded-none overflow-hidden hover:border-stone-400 transition-all flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                      <img
                        src={art.image}
                        alt={art.title[currentLang]}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-sm">
                        {art.locationInVilla[currentLang]}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <span className="text-[10px] text-[#8c6d3f] font-mono block">
                        {art.medium[currentLang]}
                      </span>
                      <h5 className="font-serif text-base text-stone-900 font-medium truncate">
                        {art.title[currentLang]}
                      </h5>
                      <p className="text-xs text-stone-500 line-clamp-2 font-light">
                        {art.description[currentLang]}
                      </p>

                      <div className="pt-3 border-t border-stone-100 flex justify-end">
                        <button
                          onClick={() => {
                            if (onOpenArtGallery) onOpenArtGallery(art.id);
                          }}
                          className="px-3.5 py-1 rounded-full border border-stone-300 text-stone-800 hover:bg-stone-900 hover:text-white text-xs font-medium transition-colors"
                        >
                          畫作賞析與導覽
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Private Chef In-Villa Dining */}
          {privateChefData && (activeCategory === 'all' || activeCategory === 'dining') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <div className="flex items-center space-x-2 text-[#8c6d3f]">
                  <UtensilsCrossed className="w-4 h-4" />
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                    加價購 ‧ 尊榮私廚晚宴預約
                  </h4>
                </div>
                <span className="text-xs text-[#8c6d3f] font-mono">台東風土無菜單 ‧ 到府專屬桌邊烹調</span>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-none grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-sm bg-stone-100">
                  <img
                    src={privateChefData.image}
                    alt={privateChefData.title[currentLang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-sm">
                    太平洋現流海味 ‧ 農場有機鮮蔬
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <span className="text-[11px] font-bold text-[#8c6d3f] uppercase tracking-widest block">
                    IN-VILLA PRIVATE CHEF DINING
                  </span>
                  <h5 className="font-serif text-2xl text-stone-900 font-normal">
                    {privateChefData.title[currentLang]}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {privateChefData.summary[currentLang]}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 pt-1 font-light">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>客製化當季無菜單饗宴</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>農場當日現採有機鮮蔬</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>主廚到府烹調與侍餐服務</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f]" />
                      <span>全套餐具酒杯與餐後清潔</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      onClick={() => {
                        if (onOpenBespoke) onOpenBespoke('private-chef-dining');
                      }}
                      className="px-5 py-2 rounded-full bg-[#8c6d3f] hover:bg-[#725732] text-white text-xs font-semibold tracking-wider transition-colors shadow-2xs"
                    >
                      了解預約細節與菜單須知
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Taitung Terroir & Surroundings (Roam / 漫遊) */}
          {(activeCategory === 'all' || activeCategory === 'taitung') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <div className="flex items-center space-x-2 text-[#8c6d3f]">
                  <Compass className="w-4 h-4" />
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                    台東慢活 ‧ 山海風光與名勝
                  </h4>
                </div>
                <span className="text-xs text-stone-500 font-mono">周邊探索</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-stone-200 rounded-none overflow-hidden p-4 space-y-3">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=85"
                      alt="鐵花村"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h5 className="font-serif text-base text-stone-900 font-medium">鐵花村音樂聚落 ‧ 慢市集</h5>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    車程僅 6 分鐘，漫步彩繪熱氣球燈海、聆聽原住民原創音樂與文創手作市集。
                  </p>
                </div>

                <div className="bg-white border border-stone-200 rounded-none overflow-hidden p-4 space-y-3">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85"
                      alt="台東森林公園"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h5 className="font-serif text-base text-stone-900 font-medium">台東森林公園 ‧ 琵琶湖</h5>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    提供免費單車騎行，穿梭於木麻黃黑森林與清澈見底的天然地下湧泉琵琶湖。
                  </p>
                </div>

                <div className="bg-white border border-stone-200 rounded-none overflow-hidden p-4 space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="aspect-[16/10] overflow-hidden rounded-sm bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=85"
                        alt="湯園專屬 Google 私房地圖"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h5 className="font-serif text-base text-stone-900 font-medium">湯園專屬 ‧ 台東 Google 私房地圖</h5>
                    <p className="text-xs text-stone-500 font-light leading-relaxed">
                      民宿主人親訪整理在地美食與秘境景點，點擊可直接在手機 Google 地圖開啟即時導航。
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/d/u/0/viewer?mid=1o0gWhZJvUald58RAYBrCvTUdti3iGj4&ll=22.754385104003358%2C121.12019752380371&z=12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 w-full py-2 rounded-full bg-[#8c6d3f] text-white hover:bg-[#725732] text-xs font-medium transition-colors"
                  >
                    <span>開啟 Google 私房地圖</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Section 5: Business Travel & Corporate Stays (出差) */}
          {(activeCategory === 'all' || activeCategory === 'business') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <div className="flex items-center space-x-2 text-[#8c6d3f]">
                  <Briefcase className="w-4 h-4" />
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                    商務合作 ‧ 平日差旅專案
                  </h4>
                </div>
                <span className="text-xs text-[#8c6d3f] font-mono">企業特約優惠 ‧ 開立免用統一發票收據</span>
              </div>

              <div className="bg-white border-2 border-[#8c6d3f]/40 p-6 rounded-none space-y-4">
                <CorporateTravelTable
                  currentLang={currentLang}
                  showActionButtons={true}
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span>台東市中興路一段225號 ‧ 湯園民宿 ‧ 預約專線 0966-733-338</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => openOwlNestBooking({ lang: currentLang })}
              className="px-5 py-2 rounded-full bg-[#8c6d3f] hover:bg-[#725732] text-white text-xs font-semibold tracking-wider transition-colors shadow-2xs"
            >
              即時預訂客房
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wider transition-colors"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
