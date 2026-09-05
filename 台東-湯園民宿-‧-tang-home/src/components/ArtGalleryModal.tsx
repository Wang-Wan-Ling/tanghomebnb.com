import React, { useState } from 'react';
import { X, Sparkles, MapPin, Palette, User, Calendar, MessageCircle, Phone, ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { ARTWORKS_DATA, ARTIST_PROFILES, Artwork } from '../data/artGalleryData';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface ArtGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialArtworkId?: string;
}

export const ArtGalleryModal: React.FC<ArtGalleryModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialArtworkId,
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork>(
    ARTWORKS_DATA.find((a) => a.id === initialArtworkId) || ARTWORKS_DATA[0]
  );
  const [activeTab, setActiveTab] = useState<'works' | 'artist' | 'curation'>('works');

  if (!isOpen) return null;

  const artist = ARTIST_PROFILES[0];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#fdfcf9] text-[#1c1917] rounded-2xl shadow-2xl border border-stone-300/80 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation Bar */}
        <div className="bg-[#181614] text-[#f5f2eb] px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center space-x-3">
            <TangHomeMountainIcon size={24} color="#d1b07c" />
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#d1b07c] font-medium block">
                藝術典藏 ‧ 駐館特展
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-100">
                湯園常設藝廊 ‧ 在地藝術家典藏展
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            title="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Navigation Tabs */}
        <div className="bg-stone-100/80 px-6 py-2.5 border-b border-stone-200 flex items-center justify-between overflow-x-auto shrink-0">
          <div className="flex space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('works')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-colors ${
                activeTab === 'works'
                  ? 'bg-[#181614] text-[#d1b07c] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 bg-white/70'
              }`}
            >
              典藏畫作賞析 ({ARTWORKS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('artist')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-colors ${
                activeTab === 'artist'
                  ? 'bg-[#181614] text-[#d1b07c] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 bg-white/70'
              }`}
            >
              駐館藝術家簡介
            </button>
            <button
              onClick={() => setActiveTab('curation')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-colors ${
                activeTab === 'curation'
                  ? 'bg-[#181614] text-[#d1b07c] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 bg-white/70'
              }`}
            >
              策展理念與空間佈置
            </button>
          </div>

          <span className="text-[11px] text-[#8c6d3f] font-mono hidden md:inline">
            台東風土 ‧ 大地靈性 ‧ 館藏真跡
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {activeTab === 'works' && (
            <div>
              {/* Main Featured Artwork Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
                {/* Artwork High-Res Image View */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-900 border border-stone-300 shadow-md group">
                    <img
                      src={selectedArtwork.image}
                      alt={selectedArtwork.title[currentLang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded">
                      館藏編號 #{selectedArtwork.id.replace('art-', '').toUpperCase()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono px-1">
                    <span>尺寸規格: {selectedArtwork.dimensions}</span>
                    <span>創作年代: {selectedArtwork.year} 年</span>
                  </div>
                </div>

                {/* Artwork Story & Placement */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#8c6d3f]/10 text-[#8c6d3f] text-[11px] font-semibold mb-2">
                      <Palette className="w-3 h-3" />
                      <span>{selectedArtwork.medium[currentLang]}</span>
                    </div>

                    <h4 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug mb-2">
                      {selectedArtwork.title[currentLang]}
                    </h4>

                    <div className="flex items-center space-x-2 text-xs text-stone-600 mb-4 pb-3 border-b border-stone-200">
                      <span className="font-semibold text-stone-900">畫家: {selectedArtwork.artist[currentLang]}</span>
                      <span>‧</span>
                      <span className="flex items-center text-[#8c6d3f]">
                        <MapPin className="w-3 h-3 mr-1" />
                        {selectedArtwork.locationInVilla[currentLang]}
                      </span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      <p>{selectedArtwork.description[currentLang]}</p>

                      <div className="p-3.5 bg-stone-50 rounded-lg border-l-2 border-[#8c6d3f] text-stone-700 text-xs italic">
                        <span className="font-semibold not-italic block text-[#8c6d3f] mb-1">創作靈感：</span>
                        {selectedArtwork.inspiration[currentLang]}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs text-stone-500">
                      於湯園入住期間，歡迎隨時駐足近距離細賞
                    </span>
                    <a
                      href="https://line.me/ti/p/~@tanghome"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#8c6d3f] hover:text-[#725732]"
                    >
                      <span>收藏或導覽洽詢</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Thumbnails Collection Slider / Grid */}
              <div>
                <h5 className="font-serif text-base text-stone-900 mb-3 flex items-center space-x-2">
                  <span>全館典藏畫作清單</span>
                  <span className="text-xs font-mono text-stone-400">（點選切換賞析）</span>
                </h5>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {ARTWORKS_DATA.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => setSelectedArtwork(art)}
                      className={`text-left rounded-lg overflow-hidden border p-1.5 transition-all ${
                        selectedArtwork.id === art.id
                          ? 'border-[#8c6d3f] ring-2 ring-[#8c6d3f]/30 bg-stone-50'
                          : 'border-stone-200 bg-white hover:border-stone-400'
                      }`}
                    >
                      <div className="aspect-[4/3] rounded overflow-hidden mb-1.5 bg-stone-100">
                        <img
                          src={art.image}
                          alt={art.title[currentLang]}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="px-1">
                        <span className="text-[11px] font-serif text-stone-900 block truncate font-medium">
                          {art.title[currentLang]}
                        </span>
                        <span className="text-[9px] text-stone-500 block truncate">
                          {art.locationInVilla[currentLang]}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'artist' && (
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shrink-0 border-4 border-stone-100 shadow-md">
                  <img
                    src={artist.avatar}
                    alt={artist.name[currentLang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3 flex-1 text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#8c6d3f]/10 text-[#8c6d3f] text-xs font-semibold">
                    {artist.role[currentLang]}
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                    {artist.name[currentLang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {artist.bio[currentLang]}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#faf8f5] rounded-xl border border-stone-200">
                <div className="flex items-center space-x-2 text-[#8c6d3f] font-serif text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>藝術家創作哲思</span>
                </div>
                <blockquote className="font-serif text-sm sm:text-base text-stone-800 italic leading-relaxed">
                  {artist.philosophy[currentLang]}
                </blockquote>
              </div>
            </div>
          )}

          {activeTab === 'curation' && (
            <div className="space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
                <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal">
                  建築與藝術的共生 ‧ 如入私人美術館的沉浸旅宿
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  湯園主人深信，「家」不僅是歇息的居所，更是心靈汲取土地養分的容器。全棟特別邀請在地畫家依據各樓層的光線走向、木質色調與窗外山景量身創作。
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  從迎賓大廳的《都蘭山晨嵐》、交誼茶席的《太平洋之藍》，到客房內的《縱谷稻浪》，每一幅真跡油畫均承載著台東真實的大地呼吸。讓您在每一步漫步、每一次抬眼之間，感受最純粹的東方美學與台東靈性。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-serif text-sm font-semibold text-stone-900 block mb-1">典雅真跡展出</span>
                    <span className="text-xs text-stone-500">全館皆為在地名家親筆手繪真跡，非大量印刷品。</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-serif text-sm font-semibold text-stone-900 block mb-1">專屬典藏說明</span>
                    <span className="text-xs text-stone-500">每幅畫作旁設有微型介紹牌，可掃碼聆聽語音導覽。</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-serif text-sm font-semibold text-stone-900 block mb-1">原作收藏洽詢</span>
                    <span className="text-xs text-stone-500">若欲收藏或邀請藝術家客製創作，可洽詢湯園管家。</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Call to Action */}
        <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-semibold text-stone-800">湯園藝廊導覽預約：</span>
            <span>入住旅客可預約管家一對一館藏畫作解說</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="tel:0966733338"
              className="px-4 py-2 rounded-lg bg-white border border-stone-300 text-stone-800 text-xs font-medium hover:border-stone-900 transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c6d3f]" />
              <span>0966-733-338</span>
            </a>

            <a
              href="https://line.me/ti/p/~@tang225"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#06c755] text-white text-xs font-bold hover:bg-[#05b34c] transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>LINE 洽詢 (@tang225)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
